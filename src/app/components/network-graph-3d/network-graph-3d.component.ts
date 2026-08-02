import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ElementRef
} from '@angular/core';
import * as THREE from 'three';
import type { NetworkGraph } from '../../core/models/network.model';

@Component({
  selector: 'app-network-graph-3d',
  imports: [CommonModule],
  template: `<div class="network-3d-container">
    <div #canvas class="network-3d-canvas"></div>
    <div class="network-3d-controls">
      <small class="text-muted">
        🖱️ Arraste para rotacionar | 🔍 Scroll para zoom | ⚙️ Duplo clique para resetar
      </small>
    </div>
  </div>`,
  styles: `
    :host {
      display: block;
    }

    .network-3d-container {
      width: 100%;
      min-height: 1024px;
      height: clamp(320px, 58vw, 500px);
      position: relative;
      border: 1px solid var(--theme-line, #dee2e6);
      border-radius: 0.75rem;
      background: var(--theme-card-bg, #ffffff);
      color: var(--theme-ink, #102542);
      overflow: hidden;
    }

    .network-3d-canvas {
      width: 100%;
      height: 100%;
    }

    .network-3d-controls {
      position: absolute;
      right: 0.75rem;
      bottom: 0.75rem;
      left: 0.75rem;
      background: var(--theme-card-bg, rgba(255, 255, 255, 0.9));
      border: 1px solid var(--theme-line, #dee2e6);
      color: var(--theme-ink, #102542);
      padding: 0.55rem 0.7rem;
      border-radius: 0.55rem;
      font-size: 0.85rem;
      pointer-events: none;
      backdrop-filter: blur(6px);
    }

    .network-3d-controls .text-muted {
      color: inherit !important;
    }

    @media (max-width: 768px) {
      .network-3d-container {
        min-height: 280px;
        height: min(68vw, 420px);
      }

      .network-3d-controls {
        font-size: 0.75rem;
        line-height: 1.4;
      }
    }
  `,
})
export class NetworkGraph3dComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() networkData: NetworkGraph = { nodes: [], edges: [] };
  @ViewChild('canvas') canvasRef?: ElementRef<HTMLDivElement>;

  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private renderer?: THREE.WebGLRenderer;
  private nodes: THREE.Mesh[] = [];
  private edges: THREE.Line[] = [];
  private labels: THREE.Sprite[] = [];
  private animationId?: number;
  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2();
  private selectedNode?: THREE.Mesh;
  private isDragging = false;
  private dragPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  private dragPoint = new THREE.Vector3();
  private hasInitialized = false;

  private readonly onResize = (): void => this.onWindowResize();
  private readonly onMouseDownHandler = (event: MouseEvent): void => this.onMouseDown(event);
  private readonly onMouseMoveHandler = (event: MouseEvent): void => this.onMouseMove(event);
  private readonly onMouseUpHandler = (): void => this.onMouseUp();
  private readonly onDoubleClickHandler = (): void => this.resetView();
  private readonly onWheelHandler = (event: WheelEvent): void => this.onMouseWheel(event);

  private isRotating = false;
  private previousMouse = new THREE.Vector2();

  ngAfterViewInit(): void {
    this.initThreeScene();
    this.hasInitialized = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.hasInitialized || !changes['networkData']) {
      return;
    }

    this.rebuildNetwork();
    this.render();
  }

  ngOnDestroy(): void {
    this.dispose();
  }

  private initThreeScene(): void {
    if (!this.canvasRef?.nativeElement) return;

    const container = this.canvasRef.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 50;

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearAlpha(0);
    container.appendChild(this.renderer.domElement);

    // Lighting
    const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
    light1.position.set(5, 5, 5);
    this.scene.add(light1);

    const light2 = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(light2);

    // Build network
    this.rebuildNetwork();

    // Event listeners
    window.addEventListener('resize', this.onResize);
    container.addEventListener('mousedown', this.onMouseDownHandler);
    container.addEventListener('mousemove', this.onMouseMoveHandler);
    container.addEventListener('mouseup', this.onMouseUpHandler);
    container.addEventListener('dblclick', this.onDoubleClickHandler);
    container.addEventListener('wheel', this.onWheelHandler, { passive: false });

    this.animate();
  }

  private rebuildNetwork(): void {
    if (!this.scene) {
      return;
    }

    this.clearGraph();
    this.buildNetwork();
  }

  private clearGraph(): void {
    if (!this.scene) {
      return;
    }

    this.nodes.forEach((node) => {
      this.scene!.remove(node);
      node.geometry.dispose();
      (node.material as THREE.Material).dispose();
    });

    this.edges.forEach((edge) => {
      this.scene!.remove(edge);
      edge.geometry.dispose();
      (edge.material as THREE.Material).dispose();
    });

    this.labels.forEach((label) => {
      this.scene!.remove(label);
      const material = label.material as THREE.SpriteMaterial;
      if (material.map) {
        material.map.dispose();
      }
      material.dispose();
    });

    this.nodes = [];
    this.edges = [];
    this.labels = [];
  }

  private buildNetwork(): void {
    if (!this.scene || this.networkData.nodes.length === 0) return;

    const theme = this.getThemeColors();

    // Create nodes
    const nodePositions = new Map<string, THREE.Vector3>();

    // Arrange nodes in a sphere
    const radius = Math.max(20, this.networkData.nodes.length * 2);
    this.networkData.nodes.forEach((node, index) => {
      const phi = Math.acos(-1 + (2 * index) / this.networkData.nodes.length);
      const theta = Math.sqrt(this.networkData.nodes.length * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      const position = new THREE.Vector3(x, y, z);
      nodePositions.set(node.id, position);

      const size = (node.size ?? 2) * 2;
      const geometry = new THREE.SphereGeometry(size, 32, 32);
      const color = new THREE.Color(node.color ?? 0x483d8b);
      const material = new THREE.MeshPhongMaterial({ color });
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.copy(position);
      mesh.userData = { nodeData: node };

      this.scene!.add(mesh);
      this.nodes.push(mesh);

      const labelSprite = this.createLabelSprite(node.label, theme);
      labelSprite.position.set(position.x, position.y + size + 1.2, position.z);
      this.scene!.add(labelSprite);
      this.labels.push(labelSprite);
    });

    // Create edges
    this.networkData.edges.forEach((edge) => {
      const sourcePos = nodePositions.get(String(edge.source));
      const targetPos = nodePositions.get(String(edge.target));

      if (sourcePos && targetPos) {
        const geometry = new THREE.BufferGeometry();
        geometry.setFromPoints([sourcePos, targetPos]);

        const material = new THREE.LineBasicMaterial({
          color: theme.edgeColor,
          transparent: true,
          opacity: 0.7,
          linewidth: 5,
        });
        const line = new THREE.Line(geometry, material);

        this.scene!.add(line);
        this.edges.push(line);
      }
    });

    // Auto-fit camera
    this.fitCameraToScene();
  }

  private createLabelSprite(
    text: string,
    theme: { labelBackground: string; labelBorder: string; labelText: string },
  ): THREE.Sprite {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context) {
      return new THREE.Sprite(new THREE.SpriteMaterial({ color: theme.labelText }));
    }

    const safeText = (text || '').trim() || 'Autor';
    const fontSize = 96;
    context.font = `${fontSize}px Arial`;
    const textWidth = Math.ceil(context.measureText(safeText).width);

    const horizontalPadding = 28;
    const verticalPadding = 18;
    canvas.width = textWidth + horizontalPadding * 2;
    canvas.height = fontSize + verticalPadding * 2;

    context.font = `${fontSize}px Arial`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    context.fillStyle = theme.labelBackground;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.strokeStyle = theme.labelBorder;
    context.lineWidth = 2;
    context.strokeRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = theme.labelText;
    context.fillText(safeText, canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });

    const sprite = new THREE.Sprite(material);
    const scaleFactor = 0.03;
    sprite.scale.set(canvas.width * scaleFactor, canvas.height * scaleFactor, 1);

    return sprite;
  }

  private getThemeColors(): {
    labelBackground: string;
    labelBorder: string;
    labelText: string;
    edgeColor: string;
  } {
    const styleTarget = this.canvasRef?.nativeElement ?? document.documentElement;
    const computedStyle = getComputedStyle(styleTarget);

    const cardBackground =
      computedStyle.getPropertyValue('--theme-card-bg').trim() || 'rgba(255,255,255,0.9)';
    const lineColor =
      computedStyle.getPropertyValue('--theme-line').trim() || 'rgba(148, 163, 184, 0.65)';
    const inkColor = computedStyle.getPropertyValue('--theme-ink').trim() || '#102542';

    return {
      labelBackground: cardBackground,
      labelBorder: lineColor,
      labelText: inkColor,
      edgeColor: lineColor,
    };
  }

  private animate = (): void => {
    this.animationId = requestAnimationFrame(this.animate);

    if (this.renderer && this.scene && this.camera) {
      // Gentle rotation when not dragging
      if (!this.isDragging) {
        this.scene.rotation.y += 0.0005;
      }

      this.renderer.render(this.scene, this.camera);
    }
  };

  private onMouseDown(event: MouseEvent): void {
    this.isRotating = true;

    this.previousMouse.set(event.clientX, event.clientY);
  }

  private onMouseDown2(event: MouseEvent): void {
    if (!this.renderer) return;

    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera!);

    const intersects = this.raycaster.intersectObjects(this.nodes);
    if (intersects.length > 0) {
      this.selectedNode = intersects[0].object as THREE.Mesh;
      this.isDragging = true;
      (this.selectedNode.material as THREE.MeshPhongMaterial).emissive.setHex(0xffff00);
    }
  }

  private onMouseMove(event: MouseEvent): void {
    if (!this.isRotating || !this.scene) {
      return;
    }

    const deltaX = event.clientX - this.previousMouse.x;
    const deltaY = event.clientY - this.previousMouse.y;

    const rotationSpeed = 0.005;

    this.scene.rotation.y += deltaX * rotationSpeed;
    this.scene.rotation.x += deltaY * rotationSpeed;

    // evita virar completamente o gráfico
    const limit = Math.PI / 2;
    this.scene.rotation.x = Math.max(-limit, Math.min(limit, this.scene.rotation.x));

    this.previousMouse.set(event.clientX, event.clientY);
  }

  private onMouseMove2(event: MouseEvent): void {
    if (!this.isDragging || !this.selectedNode || !this.renderer) return;

    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera!);
    this.raycaster.ray.intersectPlane(this.dragPlane, this.dragPoint);

    this.selectedNode.position.copy(this.dragPoint);
  }
  /*
  private onMouseUp2(): void {
    if (this.selectedNode) {
      (this.selectedNode.material as THREE.MeshPhongMaterial).emissive.setHex(0x000000);
    }
    this.isDragging = false;
    this.selectedNode = undefined;
  }
  */

  private onMouseUp(): void {
    this.isRotating = false;
  }

  private onMouseWheel(event: WheelEvent): void {
    event.preventDefault();

    const direction = event.deltaY > 0 ? 1.1 : 0.9;
    this.camera!.position.multiplyScalar(direction);
  }

  private resetView(): void {
    this.fitCameraToScene();
    this.scene!.rotation.set(0, 0, 0);
  }

  private fitCameraToScene(): void {
    if (!this.camera || this.nodes.length === 0) return;

    const box = new THREE.Box3();
    this.nodes.forEach((node) => box.expandByObject(node));

    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = this.camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));

    cameraZ *= 1.5; // Add margin

    const center = box.getCenter(new THREE.Vector3());
    this.camera.position.set(center.x, center.y, cameraZ);
    this.camera.lookAt(center);
  }

  private onWindowResize(): void {
    if (!this.canvasRef?.nativeElement || !this.renderer) return;

    const container = this.canvasRef.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    this.camera!.aspect = width / height;
    this.camera!.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  private render(): void {
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  private dispose(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }

    this.clearGraph();

    if (this.renderer) {
      this.renderer.dispose();
      this.canvasRef?.nativeElement.removeChild(this.renderer.domElement);
    }

    if (this.canvasRef?.nativeElement) {
      const container = this.canvasRef.nativeElement;
      container.removeEventListener('mousedown', this.onMouseDownHandler);
      container.removeEventListener('mousemove', this.onMouseMoveHandler);
      container.removeEventListener('mouseup', this.onMouseUpHandler);
      container.removeEventListener('dblclick', this.onDoubleClickHandler);
      container.removeEventListener('wheel', this.onWheelHandler);
    }

    window.removeEventListener('resize', this.onResize);
  }
}

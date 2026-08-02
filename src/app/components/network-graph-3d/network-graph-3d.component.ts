import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import * as THREE from 'three';
import type { NetworkGraph } from '../../core/models/network.model';

@Component({
  selector: 'app-network-graph-3d',
  imports: [CommonModule],
  template: `
    <div class="galaxy-shell">
      <div #canvas class="galaxy-canvas"></div>
      <div class="galaxy-legend">
        <span><i class="bi bi-mouse"></i> Arraste para explorar</span>
        <span><i class="bi bi-zoom-in"></i> Scroll para zoom</span>
        <span><i class="bi bi-arrow-counterclockwise"></i> Duplo clique para centralizar</span>
      </div>
    </div>
  `,
  styles: `
    :host { display: block; }
    .galaxy-shell {
      background: radial-gradient(circle at 50% 48%, #13234d 0%, #070b20 38%, #02030b 100%);
      border: 1px solid rgb(111 136 204 / 32%);
      border-radius: 1rem;
      height: clamp(460px, 68vw, 760px);
      min-height: 460px;
      overflow: hidden;
      position: relative;
      width: 100%;
    }
    .galaxy-canvas { height: 100%; width: 100%; }
    .galaxy-legend {
      backdrop-filter: blur(10px);
      background: rgb(3 7 22 / 72%);
      border: 1px solid rgb(145 164 221 / 25%);
      border-radius: 999px;
      bottom: .75rem;
      color: #dce6ff;
      display: flex;
      flex-wrap: wrap;
      font-size: .76rem;
      gap: 1rem;
      left: 50%;
      padding: .55rem .9rem;
      pointer-events: none;
      position: absolute;
      transform: translateX(-50%);
      width: max-content;
      max-width: calc(100% - 1.5rem);
    }
    .galaxy-legend span { white-space: nowrap; }
    @media (max-width: 575px) {
      .galaxy-shell { height: 520px; min-height: 420px; }
      .galaxy-legend { border-radius: .65rem; gap: .35rem .8rem; justify-content: center; width: calc(100% - 1.5rem); }
    }
  `,
})
export class NetworkGraph3dComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() networkData: NetworkGraph = { nodes: [], edges: [] };
  @ViewChild('canvas') canvasRef?: ElementRef<HTMLDivElement>;

  private scene?: THREE.Scene;
  private galaxy?: THREE.Group;
  private camera?: THREE.PerspectiveCamera;
  private renderer?: THREE.WebGLRenderer;
  private animationId?: number;
  private initialized = false;
  private dragging = false;
  private pointer = new THREE.Vector2();
  private targetRotation = new THREE.Vector2(-0.22, 0);
  private currentRotation = new THREE.Vector2(-0.22, 0);

  private readonly resizeHandler = (): void => this.resize();
  private readonly pointerDownHandler = (event: PointerEvent): void => this.pointerDown(event);
  private readonly pointerMoveHandler = (event: PointerEvent): void => this.pointerMove(event);
  private readonly pointerUpHandler = (): void => { this.dragging = false; };
  private readonly wheelHandler = (event: WheelEvent): void => this.zoom(event);
  private readonly resetHandler = (): void => this.resetView();

  ngAfterViewInit(): void {
    this.initialize();
    this.initialized = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.initialized && changes['networkData']) this.buildGalaxy();
  }

  ngOnDestroy(): void {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.resizeHandler);
    const container = this.canvasRef?.nativeElement;
    container?.removeEventListener('pointerdown', this.pointerDownHandler);
    container?.removeEventListener('pointermove', this.pointerMoveHandler);
    container?.removeEventListener('pointerup', this.pointerUpHandler);
    container?.removeEventListener('pointerleave', this.pointerUpHandler);
    container?.removeEventListener('wheel', this.wheelHandler);
    container?.removeEventListener('dblclick', this.resetHandler);
    this.clearGalaxy();
    this.renderer?.dispose();
    this.renderer?.domElement.remove();
  }

  private initialize(): void {
    const container = this.canvasRef?.nativeElement;
    if (!container) return;

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x02030b, 0.0026);
    this.camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 1500);
    this.camera.position.set(0, 175, 285);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25;
    container.appendChild(this.renderer.domElement);

    this.scene.add(new THREE.AmbientLight(0x7088c9, 0.7));
    this.buildGalaxy();

    window.addEventListener('resize', this.resizeHandler);
    container.addEventListener('pointerdown', this.pointerDownHandler);
    container.addEventListener('pointermove', this.pointerMoveHandler);
    container.addEventListener('pointerup', this.pointerUpHandler);
    container.addEventListener('pointerleave', this.pointerUpHandler);
    container.addEventListener('wheel', this.wheelHandler, { passive: false });
    container.addEventListener('dblclick', this.resetHandler);
    this.animate();
  }

  private buildGalaxy(): void {
    if (!this.scene) return;
    this.clearGalaxy();
    this.galaxy = new THREE.Group();
    this.scene.add(this.galaxy);
    this.addStars();
    this.addGalacticDust();

    if (!this.networkData.nodes.length) return;
    const positions = new Map<string, THREE.Vector3>();
    const count = Math.max(1, this.networkData.nodes.length - 1);

    this.networkData.nodes.forEach((node, index) => {
      const position = index === 0 ? new THREE.Vector3(0, 0, 0) : this.planetPosition(index - 1, count);
      positions.set(String(node.id), position);
      this.addPlanet(node.label, node.color, node.size, position, index === 0, index);
    });

    this.networkData.edges.forEach((edge) => {
      const source = positions.get(String(edge.source));
      const target = positions.get(String(edge.target));
      if (source && target) this.addConnection(source, target, edge.weight);
    });
  }

  private planetPosition(index: number, count: number): THREE.Vector3 {
    const arms = Math.min(4, Math.max(2, Math.ceil(count / 8)));
    const arm = index % arms;
    const step = Math.floor(index / arms);
    const radius = 34 + Math.sqrt((step + 1) / Math.ceil(count / arms)) * 122;
    const angle = arm * ((Math.PI * 2) / arms) + radius * 0.105 + step * 0.32;
    const jitter = this.seeded(index + 17);
    const altitudeDirection = index % 2 === 0 ? 1 : -1;
    const altitude =
      altitudeDirection * (25 + this.seeded(index + 73) * 80) +
      Math.sin(angle * 1.7) * 25;
    return new THREE.Vector3(
      Math.cos(angle) * radius + (jitter - 0.5) * 18,
      altitude,
      Math.sin(angle) * radius + (this.seeded(index + 131) - 0.5) * 18,
    );
  }

  private addPlanet(label: string, color: string | undefined, size: number | undefined, position: THREE.Vector3, main: boolean, index: number): void {
    if (!this.galaxy || !this.scene) return;
    const radius = main ? 5.4 : Math.max(1.45, Math.min(3.4, (size ?? 1.8) * 1.15));
    const planetColor = main ? new THREE.Color(0xffc85a) : new THREE.Color(color || this.palette(index));
    const geometry = new THREE.SphereGeometry(radius, 32, 24);
    const material = new THREE.MeshStandardMaterial({
      color: planetColor,
      emissive: planetColor,
      emissiveIntensity: main ? 1.5 : 0.22,
      metalness: main ? 0 : 0.18,
      roughness: main ? 0.45 : 0.72,
    });
    const planet = new THREE.Mesh(geometry, material);
    planet.position.copy(position);
    this.galaxy.add(planet);

    if (main) {
      const glow = new THREE.Mesh(
        new THREE.SphereGeometry(radius * 1.75, 32, 24),
        new THREE.MeshBasicMaterial({ color: 0xffa52e, transparent: true, opacity: 0.13, side: THREE.BackSide }),
      );
      glow.position.copy(position);
      this.galaxy.add(glow);
      const light = new THREE.PointLight(0xffd37a, 16, 180, 1.4);
      light.position.copy(position);
      this.galaxy.add(light);
    } else {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(radius * 1.45, radius * 1.55, 48),
        new THREE.MeshBasicMaterial({ color: planetColor, transparent: true, opacity: 0.38, side: THREE.DoubleSide }),
      );
      ring.position.copy(position);
      ring.rotation.x = Math.PI / 2.5;
      ring.rotation.z = this.seeded(index + 211) * Math.PI;
      this.galaxy.add(ring);
    }

    const caption = this.createLabel(label, main);
    caption.position.set(position.x, position.y + radius + 2.2, position.z);
    this.galaxy.add(caption);
  }

  private addConnection(source: THREE.Vector3, target: THREE.Vector3, weight = 1): void {
    if (!this.galaxy) return;
    const midpoint = source.clone().lerp(target, 0.5);
    midpoint.y += Math.min(12, source.distanceTo(target) * 0.12);
    const curve = new THREE.QuadraticBezierCurve3(source, midpoint, target);
    const connectionWeight = Math.max(1, Number(weight) || 1);
    const radius = 0.05 + Math.sqrt(connectionWeight) * 0.055;
    const geometry = new THREE.TubeGeometry(curve, 28, radius, 6, false);
    const material = new THREE.MeshBasicMaterial({
      color: 0xa8adb8,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
    });
    this.galaxy.add(new THREE.Mesh(geometry, material));
  }

  private addStars(): void {
    if (!this.scene) return;
    const count = 1800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      const radius = 120 + this.seeded(index + 41) * 420;
      const theta = this.seeded(index + 83) * Math.PI * 2;
      const phi = Math.acos(2 * this.seeded(index + 127) - 1);
      positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[index * 3 + 1] = radius * Math.cos(phi);
      positions[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
      const tint = new THREE.Color(index % 7 === 0 ? 0x9dbdff : 0xffffff);
      colors.set([tint.r, tint.g, tint.b], index * 3);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const stars = new THREE.Points(geometry, new THREE.PointsMaterial({ size: 0.85, vertexColors: true, transparent: true, opacity: 0.82, sizeAttenuation: true }));
    stars.userData['background'] = true;
    this.scene.add(stars);
  }

  private addGalacticDust(): void {
    if (!this.galaxy) return;
    const count = 900;
    const positions = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      const radius = Math.pow(this.seeded(index + 307), 0.62) * 78;
      const arm = index % 4;
      const angle = arm * Math.PI / 2 + radius * 0.105 + (this.seeded(index + 401) - 0.5) * 0.42;
      positions[index * 3] = Math.cos(angle) * radius;
      positions[index * 3 + 1] = (this.seeded(index + 503) - 0.5) * 50;
      positions[index * 3 + 2] = Math.sin(angle) * radius;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const dust = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0x668cff, size: 0.42, transparent: true, opacity: 0.32, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.galaxy.add(dust);
  }

  private createLabel(text: string, main: boolean): THREE.Sprite {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    const label = (text || 'Sem nome').trim();
    const fontSize = main ? 54 : 42;
    context.font = `600 ${fontSize}px Arial`;
    canvas.width = Math.ceil(context.measureText(label).width) + 44;
    canvas.height = fontSize + 30;
    context.font = `600 ${fontSize}px Arial`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = 'rgba(3, 7, 22, .78)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = main ? '#ffe4a3' : '#e3eaff';
    context.fillText(label, canvas.width / 2, canvas.height / 2);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false, depthWrite: false }));
    const scale = main ? 0.045 : 0.036;
    sprite.scale.set(canvas.width * scale, canvas.height * scale, 1);
    return sprite;
  }

  private palette(index: number): string {
    const colors = ['#55c2ff', '#8b7cff', '#ff6f91', '#55e6a5', '#ffd166', '#ff8f5a', '#c77dff', '#4de1d2'];
    return colors[Math.abs(index) % colors.length];
  }

  private seeded(seed: number): number {
    const value = Math.sin(seed * 12.9898) * 43758.5453;
    return value - Math.floor(value);
  }

  private pointerDown(event: PointerEvent): void {
    this.dragging = true;
    this.pointer.set(event.clientX, event.clientY);
    this.canvasRef?.nativeElement.setPointerCapture(event.pointerId);
  }

  private pointerMove(event: PointerEvent): void {
    if (!this.dragging) return;
    this.targetRotation.y += (event.clientX - this.pointer.x) * 0.005;
    this.targetRotation.x += (event.clientY - this.pointer.y) * 0.004;
    this.targetRotation.x = THREE.MathUtils.clamp(this.targetRotation.x, -1.15, 0.65);
    this.pointer.set(event.clientX, event.clientY);
  }

  private zoom(event: WheelEvent): void {
    event.preventDefault();
    if (!this.camera) return;
    this.camera.position.multiplyScalar(event.deltaY > 0 ? 1.08 : 0.92);
    const distance = this.camera.position.length();
    if (distance < 48) this.camera.position.setLength(48);
    if (distance > 380) this.camera.position.setLength(380);
  }

  private resetView(): void {
    this.targetRotation.set(-0.22, 0);
    this.camera?.position.set(0, 175, 285);
    this.camera?.lookAt(0, 0, 0);
  }

  private resize(): void {
    const container = this.canvasRef?.nativeElement;
    if (!container || !this.camera || !this.renderer) return;
    this.camera.aspect = container.clientWidth / container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
  }

  private animate = (): void => {
    this.animationId = requestAnimationFrame(this.animate);
    if (!this.renderer || !this.scene || !this.camera) return;
    this.currentRotation.lerp(this.targetRotation, 0.08);
    if (this.galaxy) {
      this.galaxy.rotation.x = this.currentRotation.x;
      this.galaxy.rotation.y = this.currentRotation.y + (this.dragging ? 0 : performance.now() * 0.000025);
    }
    this.renderer.render(this.scene, this.camera);
  };

  private clearGalaxy(): void {
    if (!this.scene) return;
    const disposable = [...this.scene.children].filter((child) => child === this.galaxy || child.userData['background']);
    for (const object of disposable) {
      object.traverse((child) => {
        const mesh = child as THREE.Mesh;
        mesh.geometry?.dispose();
        const materials = Array.isArray(mesh.material) ? mesh.material : mesh.material ? [mesh.material] : [];
        for (const material of materials) {
          const map = (material as THREE.MeshBasicMaterial).map;
          map?.dispose();
          material.dispose();
        }
      });
      this.scene.remove(object);
    }
    this.galaxy = undefined;
  }
}

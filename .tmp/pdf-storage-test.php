<?php
namespace CodeIgniter { class Model {} }
namespace App\Models\RDF2 {
    class RDFconcept {
        public function createConcept($data) { return 42; }
        public function registerLiteral(...$args) {}
    }
    class RDFliteral {}
    class RDFproperty { public function getProperty($prop) { return 1; } }
    class RDFdata {
        public static $links = [];
        public function register(...$args) { self::$links[] = $args; }
    }
}
namespace {
    require 'D:/www/Brapci3.1/app/Models/RDF2/RDFfile.php';
    function strzero($id, $length) { return str_pad($id, $length, '0', STR_PAD_LEFT); }
    function check($condition, $message) { if (!$condition) { throw new \RuntimeException($message); } }
    class TestFile extends \App\Models\RDF2\RDFfile {
        public $destination;
        public function directory($id, $pre = '_repository/') { return $this->destination; }
    }
    $root = sys_get_temp_dir() . '/brapci-pdf-' . bin2hex(random_bytes(5)) . '/';
    mkdir($root);
    $model = new TestFile();
    $model->destination = $root;
    $source = $root . 'upload.pdf';
    $pdf = "%PDF-1.4\n1 0 obj\n<< /Type /Catalog >>\nendobj\n%%EOF\n";
    file_put_contents($source, $pdf);
    check($model->savePDF('bad', 'hasFileStorage', $source)['status'] === '400', 'Reject invalid ID');
    check($model->savePDF(188803, 'hasFileStorage', $root . 'missing')['status'] === '400', 'Reject missing file');
    file_put_contents($root . 'invalid.pdf', 'not a PDF');
    check($model->savePDF(188803, 'hasFileStorage', $root . 'invalid.pdf')['status'] === '400', 'Reject invalid MIME');
    $model->destination = $root . 'missing/';
    check($model->savePDF(188803, 'hasFileStorage', $source)['status'] === '500', 'Report storage failure');
    check(is_file($source), 'Keep source when copy fails');
    check(count(\App\Models\RDF2\RDFdata::$links) === 0, 'No RDF links on failure');
    $model->destination = $root;
    $result = $model->savePDF(188803, 'hasFileStorage', $source);
    check($result['status'] === '200', 'Successful status');
    check(file_get_contents($result['dest']) === $pdf, 'Persist exact PDF bytes');
    check(!is_file($source), 'Remove consumed temporary file');
    check(\App\Models\RDF2\RDFdata::$links[0] === [188803, 'hasFileStorage', 42, 0], 'Link PDF to article');
    foreach (glob($root . '*') as $file) { unlink($file); }
    rmdir($root);
    echo "PASS: validation, copy failure, PDF persistence and RDF link\n";
}

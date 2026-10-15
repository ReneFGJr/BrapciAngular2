from pathlib import Path

root = Path('D:/www/Brapci3.1')
p = root / 'app/Models/Api/Index.php'
s = p.read_text(encoding='utf-8')
old = """                $RDFimage = new \App\Models\RDF2\RDFimage();
                $RDFimage->upload($d2,$d3);"""
new = """                if ($d2 === 'pdf') {
                    $RDFfile = new \App\Models\RDF2\RDFfile();
                    $RDFfile->upload($d2, $d3);
                } else {
                    $RDFimage = new \App\Models\RDF2\RDFimage();
                    $RDFimage->upload($d2, $d3);
                }"""
assert old in s
p.write_text(s.replace(old,new,1),encoding='utf-8')

p = root / 'app/Models/RDF2/RDFfile.php'
s = p.read_text(encoding='utf-8')
old = """            $RDFconcept = new \App\Models\RDF2\RDFconcept();"""
new = """            if (!ctype_digit((string) $ID) || (int) $ID <= 0) {
                return ['status' => '400', 'message' => 'ID invalido'];
            }
            if (!is_file($file) || mime_content_type($file) !== 'application/pdf') {
                return ['status' => '400', 'message' => 'Envie um arquivo PDF valido'];
            }
            $RDFconcept = new \App\Models\RDF2\RDFconcept();"""
assert old in s
s=s.replace(old,new,1)
s=s.replace("            $dt = [];\n            $dt['Name'] = $dest;", """            if (!@copy($file, $dest)) {
                return ['status' => '500', 'message' => 'Nao foi possivel armazenar o PDF'];
            }

            $dt = [];
            $dt['Name'] = $dest;""",1)
s=s.replace("'Erro ao salvar dados RDF: ' . $e->getMessage()", "'Erro ao salvar dados RDF'")
s=s.replace('            copy($file, $dest);\n            unlink($file);', '            if ($file !== $dest) {\n                @unlink($file);\n            }',1)
a=s.index("            case 'pdf':", s.index('    function upload('))
b=s.index('            default:',a)
s=s[:a]+"""            case 'pdf':
                $file = $_FILES['file'] ?? null;
                if (!$file || ($file['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) {
                    $RSP = ['status' => '400', 'message' => 'Arquivo nao enviado ou limite de upload excedido'];
                } elseif (!is_uploaded_file($file['tmp_name'])) {
                    $RSP = ['status' => '400', 'message' => 'Upload invalido'];
                } else {
                    $RSP = $this->savePDF($ID, 'hasFileStorage', $file['tmp_name']);
                }
                http_response_code((int) $RSP['status']);
                echo json_encode($RSP);
                exit;
"""+s[b:]
p.write_text(s,encoding='utf-8')

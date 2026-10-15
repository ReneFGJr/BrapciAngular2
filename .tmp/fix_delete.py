from pathlib import Path
p=Path('D:/www/Brapci3.1/app/Models/RDF2/RDF.php')
s=p.read_text(encoding='utf-8')
a=s.index('    function remove($ID)')
s=s[:a]+r'''    function remove($ID)
    {
        if (!ctype_digit((string) $ID) || (int) $ID <= 0) {
            return ['status' => '400', 'message' => 'ID invalido'];
        }
        $Socials = new \App\Models\Socials();
        $user = $Socials->validToken();
        if (!isset($user['ID'])) {
            return ['status' => '401', 'message' => 'Token ausente ou invalido'];
        }
        if (strpos($user['perfil'] ?? '', '#ADM') === false) {
            return ['status' => '403', 'message' => 'Access not allowed'];
        }

        $RDFconcept = new \App\Models\RDF2\RDFconcept();
        $RDFdata = new \App\Models\RDF2\RDFdata();
        $IssuesWorks = new \App\Models\Base\IssuesWorks();
        // Register uses DBGroup elastic and table dataset; ID is the RDF work ID.
        $Elastic = new \App\Models\ElasticSearch\Register();
        $dt = $RDFconcept->le($ID);
        if (empty($dt['id_cc'])) {
            return ['status' => '404', 'message' => 'Register not found'];
        }

        try {
            if ($Elastic->where('ID', $ID)->delete() === false) {
                throw new \RuntimeException('Dataset deletion failed');
            }
            if ($IssuesWorks->where('siw_work_rdf', $ID)->delete() === false) {
                throw new \RuntimeException('Issue link deletion failed');
            }

            $rows = $RDFdata->groupStart()->where('d_r1', $ID)
                ->orWhere('d_r2', $ID)->groupEnd()->findAll();
            foreach ($rows as $line) {
                $changes = [
                    'd_r1' => -abs((int) $line['d_r1']),
                    'd_p' => -abs((int) $line['d_p']),
                    'd_r2' => -abs((int) $line['d_r2']),
                    'd_literal' => -abs((int) $line['d_literal']),
                ];
                if ($RDFdata->set($changes)->where('id_d', $line['id_d'])->update() === false) {
                    throw new \RuntimeException('RDF link update failed');
                }
            }

            $changes = ['cc_status' => 9, 'cc_update' => date('Y-m-d')];
            if ((int) $dt['cc_pref_term'] > 0) {
                $changes['cc_pref_term'] = -abs((int) $dt['cc_pref_term']);
            }
            if ($RDFconcept->set($changes)->where('id_cc', $ID)->update() === false) {
                throw new \RuntimeException('Concept update failed');
            }
        } catch (\Throwable $e) {
            log_message('error', 'RDF removal failed for {id}: {error}', ['id' => $ID, 'error' => $e->getMessage()]);
            return ['status' => '500', 'message' => 'Falha ao excluir o registro. Tente novamente.'];
        }

        return ['status' => '200', 'message' => 'Removed', 'ID' => $ID];
    }
}
'''
p.write_text(s,encoding='utf-8')

from pathlib import Path
p = Path('D:/www/Brapci3.1/app/Models/RDF2/RDFmetadata.php')
s = p.read_text(encoding='utf-8')
old = """        /******************* ISBN */
        $ISBN = new \App\Models\ISBN\Index();"""
new = r"""        // Works linked through hasIssueOf also inherit the publication cover.
        if (empty($dr['cover']) && in_array($Class, ['Article', 'Proceeding', 'Proceedings'], true)) {
            $sourceId = $dr['Issue']['id_jnl'] ?? $dr['id_jnl'] ?? 0;
            if ((int) $sourceId > 0) {
                $Cover = new \App\Models\Base\Cover();
                $dr['cover'] = $Cover->cover($sourceId);
            }
        }

        /******************* ISBN */
        $ISBN = new \App\Models\ISBN\Index();"""
assert s.count(old) == 1
p.write_text(s.replace(old, new, 1), encoding='utf-8')

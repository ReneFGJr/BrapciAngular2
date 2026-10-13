from pathlib import Path
root = Path('D:/www/Brapci3.1')
path = root / 'app/Models/Pensador/CitedPensador.php'
source = path.read_text(encoding='utf-8')
method = '''    public function thinkerTimelineByAuthor(int $authorId): array
    {
        $works = $this->db->table($this->authorDataTable . ' d')
            ->select('1', false)
            ->join($this->authorClassTable . ' c', 'c.id_c = d.d_p')
            ->where('c.c_class', 'hasAuthor')->where('d.d_r2', $authorId)
            ->where('d.d_r1 = a.ca_rdf', null, false)->getCompiledSelect();
        $rows = $this->db->table('cited_article a')
            ->select('t.id, t.nome, a.id_ca, a.ca_rdf, a.ca_year_origem', false)
            ->distinct()
            ->join('cited_normalize n', $this->citationMatch(), 'inner', false)
            ->join('cited_pensador p', 'p.cited_normalize_id = n.id_ca')
            ->join($this->thinkerTable . ' t', 't.id = p.pensador_id')
            ->where('a.ca_rdf >', 0)->where('EXISTS (' . $works . ')', null, false)
            ->get()->getResultArray();
        $metadata = [];
        foreach (array_chunk(array_unique(array_column($rows, 'ca_rdf')), 500) as $ids) {
            $years = $this->db->table($this->datasetTable)
                ->select('ID, MIN(NULLIF(YEAR, 0)) AS year', false)
                ->whereIn('ID', $ids)->groupBy('ID')->get()->getResultArray();
            foreach ($years as $record) { $metadata[$record['ID']] = $record['year']; }
        }
        $thinkers = [];
        foreach ($rows as $row) {
            $id = (int) $row['id'];
            if (!isset($thinkers[$id])) {
                $thinkers[$id] = ['id' => $id, 'nome' => $row['nome'], 'total' => 0, 'unknown_year' => 0, 'years' => []];
            }
            $year = (int) ($metadata[$row['ca_rdf']] ?? $row['ca_year_origem']);
            $thinkers[$id]['total']++;
            if ($year < 1000 || $year > (int) date('Y') + 1) {
                $thinkers[$id]['unknown_year']++;
                continue;
            }
            $thinkers[$id]['years'][$year] = ($thinkers[$id]['years'][$year] ?? 0) + 1;
        }
        foreach ($thinkers as &$thinker) {
            ksort($thinker['years']);
            $points = [];
            foreach ($thinker['years'] as $year => $total) {
                $points[] = ['year' => (int) $year, 'total' => $total];
            }
            $thinker['years'] = $points;
        }
        unset($thinker);
        $thinkers = array_values($thinkers);
        usort($thinkers, static fn ($a, $b) => ($b['total'] <=> $a['total']) ?: strcmp($a['nome'], $b['nome']));
        return $thinkers;
    }

'''
assert 'function thinkerTimelineByAuthor' not in source
source = source.replace('    public function linkedWorks(', method + '    public function linkedWorks(', 1)
path.write_text(source, encoding='utf-8')
path = root / 'app/Models/Api/Endpoint/Cited.php'
source = path.read_text(encoding='utf-8')
method = '''    /** GET /api/cited/author/{ID}/timeline; years belong to the citing publications. */
    public function timeline(string $id): array
    {
        $authorId = filter_var($id, FILTER_VALIDATE_INT, ['options' => ['min_range' => 1]]);
        if ($authorId === false) {
            http_response_code(422);
            return ['status' => 422, 'message' => 'Invalid author ID.'];
        }
        return (new CitedPensador())->thinkerTimelineByAuthor($authorId);
    }

'''
source = source.replace('    /** GET /api/cited/author/{ID};', method + '    /** GET /api/cited/author/{ID};', 1)
path.write_text(source, encoding='utf-8')
path = root / 'app/Models/Api/Index.php'
source = path.read_text(encoding='utf-8')
source = source.replace('$endpoint->author((string) $d3)', "($d4 === 'timeline' ? $endpoint->timeline((string) $d3) : $endpoint->author((string) $d3))", 1)
path.write_text(source, encoding='utf-8')

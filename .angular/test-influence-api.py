from pathlib import Path
path = Path('D:/www/Brapci3.1/tests/regression/CitedPensadorTest.php')
source = path.read_text(encoding='utf-8')
needle = "    verifyLink($model->thinkersCitedByAuthor(999) === [],"
index = source.index(needle)
checks = '''    verifyLink($model->thinkerTimelineByAuthor(7) === [
        ['id' => 10, 'nome' => 'Silva', 'total' => 3, 'unknown_year' => 0,
            'years' => [['year' => 2000, 'total' => 2], ['year' => 2010, 'total' => 1]]],
        ['id' => 20, 'nome' => 'Souza', 'total' => 1, 'unknown_year' => 0,
            'years' => [['year' => 2010, 'total' => 1]]],
    ], 'Timeline uses citing publication years, deduplicates RDF/dataset joins and ranks thinkers');
    verifyLink($model->thinkerTimelineByAuthor(999) === [], 'Empty author timeline');
    $db->table('test_author_data')->insert(['d_r1' => 300, 'd_r2' => 7, 'd_p' => 1]);
    $timeline = $model->thinkerTimelineByAuthor(7);
    verifyLink($timeline[0]['total'] === 4 && $timeline[0]['unknown_year'] === 1,
        'Undated citations remain in totals without creating year zero markers');
    $db->table('test_author_data')->where('d_r1', 300)->where('d_p', 1)->delete();
    $db->table('test_citing_dataset')->where('ID', 100)->delete();
    $timeline = $model->thinkerTimelineByAuthor(7);
    verifyLink($timeline[0]['years'][1] === ['year' => 2020, 'total' => 2],
        'Missing dataset year falls back to citation origin year');
    $db->table('test_citing_dataset')->insert(['ID' => 100, 'TITLE' => 'Dataset', 'AUTHORS' => 'Author', 'YEAR' => 2000]);
'''
source = source[:index] + checks + source[index:]
path.write_text(source, encoding='utf-8')

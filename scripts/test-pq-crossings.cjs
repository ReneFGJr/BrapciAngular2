const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const source = fs.readFileSync('src/app/pages/pq/pq-crossings-data.ts', 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const dataModule = { exports: {} };
new Function('exports', 'require', 'module', compiled)(dataModule.exports, require, dataModule);
const { snapshot, crossingRows, classification, clean, MISSING, validDates, historicalRecords } = dataModule.exports;
const record = (name, level, start, finish, gender = 'F') => ({ bs_nome: name, bs_nivel: level,
  bs_start: start, bs_finish: finish, bs_genero: gender, BS_IES: 'UFF' });
const records = [
  record('Ana', '1A', '2020-01-01', '2024-12-31'),
  record('Ána', 'A', '2024-01-01', '2026-12-31'),
  record('Bruno', 'B', '2024-12-31', '2025-12-31', 'M'),
  record('Carla', 'C', '2025-01-01', '2026-12-31'),
  record('Dora', '', '', '', undefined),
];
const selected = snapshot(records, '2024-12-31');
assert.equal(selected.length, 2, 'Count one person, using latest overlapping contract and inclusive dates');
assert.equal(selected.find((item) => item.bs_nome === 'Ána').bs_nivel, 'A');
assert.equal(snapshot(records, '2023-12-31')[0].bs_nivel, '1A', 'Keep the historical level');
assert.equal(snapshot(records).length, 4, 'Current authoritative list does not require historical dates');
assert.equal(classification('2C'), 'antiga');
assert.equal(classification('A'), 'atual');
assert.equal(classification(''), 'outros');
assert.equal(clean(' NI '), MISSING);
assert.equal(validDates(record('X', 'A', '2024-02-30', '2025-01-01')), false);
const rows = crossingRows(selected, ['A', 'B'], () => 'Categoria');
assert.equal(rows[0].total, 2);
assert.deepEqual(rows[0].cells.map((cell) => cell.percentage), [50, 50]);
const filtered = crossingRows(selected, ['A'], () => 'Categoria');
assert.equal(filtered[0].cells[0].percentage, 100, 'Denominator changes with selected levels');
assert.equal(crossingRows(selected, [], () => 'Categoria').length, 0, 'Empty selection returns no results');
assert.equal(crossingRows([record('X', '', '', '')], [MISSING], () => MISSING)[0].total, 1);
assert.equal(historicalRecords({ 2024: { novas: [{ nome: 'Ana', nivel: '1A', inicio: '2024-01-01', fim: '2025-01-01', ies: 'UFF' }], reconcedidas: [], novas_apos_interrupcao: [] } })[0].bs_nivel, '1A');
assert.equal(records[0].bs_nivel, '1A', 'Source records remain unchanged');
console.log('PQ crossings: all data checks passed.');
if (process.argv[2]) {
  const response = JSON.parse(fs.readFileSync(process.argv[2], 'utf8').replace(/^\uFEFF/, ''));
  const history = historicalRecords(response.applications ?? {});
  for (const records of [snapshot(response.data), snapshot(history, '2024-12-31'), snapshot(history, '1990-12-31')]) {
    const levels = [...new Set(records.map((record) => clean(record.bs_nivel).toUpperCase()))]
      .map((level) => level === MISSING.toUpperCase() ? MISSING : level);
    const rows = crossingRows(records, levels, (record) => clean(record.BS_IES));
    assert.equal(rows.reduce((sum, row) => sum + row.total, 0), records.length);
    for (const row of rows) {
      assert.ok(Math.abs(row.cells.reduce((sum, cell) => sum + cell.percentage, 0) - 100) < 1e-8);
    }
  }
  console.log('PQ live API: current and historical totals and percentage denominators passed.');
}

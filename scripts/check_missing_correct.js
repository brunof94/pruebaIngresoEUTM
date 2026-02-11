const fs = require('fs');
const path = require('path');

const txtDir = path.join(__dirname, '..', 'pruebas', 'txt');
const files = fs.readdirSync(txtDir).filter(f => f.endsWith('.txt'));
let totalProblems = 0;

files.forEach(file => {
  const content = fs.readFileSync(path.join(txtDir, file), 'utf8').replace(/\r/g,'');
  const lines = content.split('\n');
  const blocks = [];
  let current = [];
  lines.forEach(l => {
    if (l.trim() === '') {
      if (current.length) { blocks.push(current); current = []; }
    } else {
      current.push(l);
    }
  });
  if (current.length) blocks.push(current);

  let qIndex = 0;
  const problems = [];
  blocks.forEach(block => {
    const optionLines = block.filter(l => /^[abcd]\)/i.test(l.trim()));
    if (optionLines.length >= 1) {
      qIndex++;
      const hasCorrect = optionLines.some(l => l.indexOf('*') >= 0);
      if (!hasCorrect) {
        problems.push({ question: block[0].trim(), options: optionLines.map(l => l.trim()) , qIndex });
      }
    }
  });

  if (problems.length) {
    totalProblems += problems.length;
    console.log(`File: ${file} — ${problems.length} pregunta(s) sin opción marcada como correcta:`);
    problems.forEach(p => {
      console.log(`  Pregunta #${p.qIndex}: ${p.question}`);
      p.options.forEach(o => console.log(`    ${o}`));
    });
    console.log('');
  }
});

if (totalProblems === 0) console.log('No se encontraron preguntas sin opción marcada con * en los archivos .txt.');
else console.log(`Total preguntas sin opción correcta encontrada: ${totalProblems}`);

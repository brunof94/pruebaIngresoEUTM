const fs = require('fs');
const path = require('path');

const jsonDir = path.join(__dirname, 'pruebas', 'json');
const outFile = path.join(__dirname, 'pruebas', 'testsIndex.json');

function generate() {
  if (!fs.existsSync(jsonDir)) {
    console.error('Directorio no existe:', jsonDir);
    process.exit(1);
  }
  const files = fs.readdirSync(jsonDir).filter(f => f.endsWith('.json'));
  const tests = [];
  files.forEach(f => {
    try {
      const content = fs.readFileSync(path.join(jsonDir, f), 'utf8');
      const obj = JSON.parse(content);
      tests.push(obj);
    } catch (e) {
      console.error('Error leyendo', f, e.message);
    }
  });
  fs.writeFileSync(outFile, JSON.stringify(tests, null, 2));
  console.log('Generado', outFile, 'con', tests.length, 'pruebas.');
}

generate();

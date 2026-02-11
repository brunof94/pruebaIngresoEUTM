const fs = require('fs');
const path = require('path');

const txtDir = path.join(__dirname, 'pruebas', 'txt');
const jsonDir = path.join(__dirname, 'pruebas', 'json');

// Asegurar que la carpeta json existe
if (!fs.existsSync(jsonDir)) {
  fs.mkdirSync(jsonDir, { recursive: true });
}

const files = fs.readdirSync(txtDir).filter(f => f.endsWith('.txt'));

files.forEach(file => {
  const questionPath = path.join(txtDir, file);
  const content = fs.readFileSync(questionPath, 'utf-8').split('\n');

  const questions = [];
  const questionImages = [];
  let currentQuestion = null;

  content.forEach(line => {
    line = line.trim();
    if (line === '') {
      if (currentQuestion) {
        if(questionImages.includes(questions.length + 1))currentQuestion.image = questions.length + 1;
        questions.push(currentQuestion);
        currentQuestion = null;
      }
    } else if (!currentQuestion) {
      const hasImage = line.indexOf('(img)') >= 0;
      if (hasImage) questionImages.push(questions.length + 1);
      const q = line.replace('(img)', '').trim();
      currentQuestion = { question: q, options: [] };
    } else {
      const isCorrect = line.indexOf('*') >= 0;
      const option = line.replace('*', '').trim().split(')')[1];
      if (option) {
        currentQuestion.options.push({ option, isCorrect });
      }
    }
  });

  // Agregar la última pregunta si existe
  if (currentQuestion) {
    questions.push(currentQuestion);
  }

  const nombre = file.replace('.txt', '');
  const jsonName = path.join(jsonDir, `${nombre}.json`);
  const returnJson = {
    nombre: nombre.split(']')[1] || nombre,
    codigo: nombre.split(']')[0].replace('[', '') || nombre,
    area: 'todas',
    preguntas: questions.filter(q => q && q.options && q.options.length > 0)
  };

  fs.writeFileSync(jsonName, JSON.stringify(returnJson, null, 2));
  console.log(`Procesado: ${file} → ${jsonName} (${returnJson.preguntas.length} preguntas)`);
});

console.log(`\nTodas las pruebas han sido procesadas.`);

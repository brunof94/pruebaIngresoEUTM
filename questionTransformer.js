const questionPath = './pruebas/txt/[ingreso2020b]Prueba de ingreso 2020.txt';
const fs = require('fs');
// Lee el contenido del archivo
const content = fs.readFileSync(questionPath, 'utf-8').split('\n');

const questions = [];
let currentQuestion = null;

const questionImages = [];

content.forEach(line => {
    line = line.trim();
    if(line === '') {
        if(questionImages.includes(questions.length + 1))currentQuestion.image = questions.length + 1;
        questions.push(currentQuestion);
        currentQuestion = null;
    }else if(!currentQuestion){
        currentQuestion = { question: line, options: [] };
    }else{
        const isCorrect = line.indexOf('*') >= 0;
        const option = line.replace('*', '').trim().split(')')[1];
        currentQuestion.options.push({ option, isCorrect });
    }
});

const areas ={
    "cardio" :"cardio",
    "neuro": "neuro",
    "dre": "dre",
    "todas": "todas",
    "reproductor": "reproductor"
}

//escribir en un nuevo archivo json
const nombre = questionPath.split('/').pop().replace('.txt', '');
const jsonName = questionPath.replace('.txt', '.json').replace('txt', 'json');
const returnJson = {
    nombre: nombre.split(']')[1],
    codigo: nombre.split(']')[0].replace('[', ''),
    area: areas.todas,
    preguntas: questions
}
fs.writeFileSync(jsonName, JSON.stringify(returnJson, null, 2));
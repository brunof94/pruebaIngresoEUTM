const tests = [{
    "nombre": "Prueba de Ingreso 2023",
    "codigo": "ingreso2023a",
    "area": "todas",
    "preguntas": [
        {
            "question": "¿Qué senador propone la Ley de Fundación de la Universidad Mayor de la República?",
            "options": [
                {
                    "option": " Dámaso Antonio Larrañaga",
                    "isCorrect": true
                },
                {
                    "option": " José Pedro Varela",
                    "isCorrect": false
                },
                {
                    "option": " Joaquín Suárez",
                    "isCorrect": false
                },
                {
                    "option": " Manuel Oribe",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿En qué año se da el establecimiento del Hospital de Clínicas?",
            "options": [
                {
                    "option": " 1950",
                    "isCorrect": false
                },
                {
                    "option": " 1951",
                    "isCorrect": false
                },
                {
                    "option": " 1952",
                    "isCorrect": false
                },
                {
                    "option": " 1953",
                    "isCorrect": true
                }
            ]
        },
        {
            "question": "¿Con que cátedras se fundó la Facultad de Medicina?",
            "options": [
                {
                    "option": " Histología y Anatomía",
                    "isCorrect": false
                },
                {
                    "option": " Anatomía y Fisiología",
                    "isCorrect": true
                },
                {
                    "option": " Fisiología y Cirugía",
                    "isCorrect": false
                },
                {
                    "option": " Cirugía e Histología",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿Cómo se llama el actual rector de la Universidad de la República?",
            "options": [
                {
                    "option": " Álvaro Villar",
                    "isCorrect": false
                },
                {
                    "option": " Arturo Briva",
                    "isCorrect": false
                },
                {
                    "option": " Rodrigo Arim",
                    "isCorrect": true
                },
                {
                    "option": " Miguel Martínez",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿Cuántos integrantes tiene el Consejo Directivo Central (CDC)?",
            "options": [
                {
                    "option": " 18",
                    "isCorrect": false
                },
                {
                    "option": " 20",
                    "isCorrect": true
                },
                {
                    "option": " 22",
                    "isCorrect": false
                },
                {
                    "option": " 24",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "Un polipéptido es un polímero formado por:",
            "options": [
                {
                    "option": " Nucleótidos",
                    "isCorrect": false
                },
                {
                    "option": " Fosfolípidos",
                    "isCorrect": false
                },
                {
                    "option": " Aminoácidos",
                    "isCorrect": true
                },
                {
                    "option": " Monosacáridos",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "Con respecto a los gases, a temperatura constante:",
            "options": [
                {
                    "option": " La velocidad de difusión es directamente proporcional a su masa molar.",
                    "isCorrect": false
                },
                {
                    "option": " La presión de una masa de gas es inversamente proporcional a su volumen.",
                    "isCorrect": true
                },
                {
                    "option": " La concentración de un gas es inversamente proporcional a su presión parcial.",
                    "isCorrect": false
                },
                {
                    "option": " La presión total en una mezcla de gases corresponde al producto de las presiones parciales de cada gas.",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿Que es la hemostasis?",
            "options": [
                {
                    "option": " Una secuencia de reacciones que detienen el sangrado.",
                    "isCorrect": true
                },
                {
                    "option": " Una secuencia de reacciones que detienen la eritropoyesis.",
                    "isCorrect": false
                },
                {
                    "option": " Una secuencia de reacciones que aumenta el número de plaquetas.",
                    "isCorrect": false
                },
                {
                    "option": " Una secuencia de reacciones que aumenta el número de glóbulos rojos.",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿Qué son los neurotrasmisores?",
            "options": [
                {
                    "option": " Son moléculas sintetizadas y liberadas por la neurona pre-sináptica en respuesta a un estímulo nervioso.",
                    "isCorrect": true
                },
                {
                    "option": " Son moléculas sintetizadas y liberadas por la neurona post-sináptica en respuesta a un estímulo nervioso.",
                    "isCorrect": false
                },
                {
                    "option": " Son canales de calcio que se encuentran en la neurona pre-sináptica y se abren en respuesta a un estímulo nervioso.",
                    "isCorrect": false
                },
                {
                    "option": " Son canales de calcio que se encuentran en la neurona post-sináptica y se abren en respuesta a un estímulo nervioso.",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "Sobre el ciclo de Krebs:",
            "options": [
                {
                    "option": " Ocurre a nivel de citoplasma celular.",
                    "isCorrect": false
                },
                {
                    "option": " Sus productos finales son piruvato y ATP",
                    "isCorrect": false
                },
                {
                    "option": " Su principal enzima reguladora es la hexoquinasa",
                    "isCorrect": false
                },
                {
                    "option": " Es la ruta central común de la degradación de glúcidos, lípidos y aminoácidos",
                    "isCorrect": true
                }
            ]
        },
        {
            "question": "En cuanto a la respuesta inmune:",
            "options": [
                {
                    "option": " La inmunidad específica posee una respuesta rápida",
                    "isCorrect": false
                },
                {
                    "option": " Posee 3 fases: reconocimiento, activación y fase efectora",
                    "isCorrect": true
                },
                {
                    "option": " La inmunidad especifica no requiere contacto previo con el agente agresor",
                    "isCorrect": false
                },
                {
                    "option": " Los linfocitos T CD8 Citotóxicos son linfocitos que colaboran en la producción de anticuerpos",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "Sobre sistema endócrino:",
            "options": [
                {
                    "option": " La liberación de hormonas está regulada por retroalimentación negativa",
                    "isCorrect": true
                },
                {
                    "option": " La interacción hormona receptor siempre ocurre en el núcleo de la célula",
                    "isCorrect": false
                },
                {
                    "option": " Las glándulas exócrinas son aquellas que vierten sus productos a la sangre",
                    "isCorrect": false
                },
                {
                    "option": " Todas las hormonas comparten un mismo mecanismo de acción en el que interviene un segundo mensajero",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "Con respecto a un óvulo:",
            "options": [
                {
                    "option": " Contiene 46 cromosomas",
                    "isCorrect": false
                },
                {
                    "option": " Se produce por una única división celular",
                    "isCorrect": false
                },
                {
                    "option": " Aporta la mitad de la información genética del cigoto",
                    "isCorrect": true
                },
                {
                    "option": " Contiene igual información genética que una célula somática",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "Respecto al surfactante alveolar:",
            "options": [
                {
                    "option": " Disminuye la tensión superficial de los alvéolos",
                    "isCorrect": true
                },
                {
                    "option": " Aumenta el retroceso elástico del pulmón",
                    "isCorrect": false
                },
                {
                    "option": " Es responsable del impulso eléctrico",
                    "isCorrect": false
                },
                {
                    "option": " Disminuye la distensibilidad pulmonar",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿Cuál de las siguientes articulaciones sinoviales permite el movimiento de oposición del pulgar?",
            "options": [
                {
                    "option": " articulación radio carpiana.",
                    "isCorrect": false
                },
                {
                    "option": " articulaciones interfalángicas.",
                    "isCorrect": false
                },
                {
                    "option": " articulación carpo metacarpiano del 1er dedo.",
                    "isCorrect": true
                },
                {
                    "option": " articulación metacarpo falángica del 1er dedo.",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "Con respecto al ciclo cardíaco:",
            "options": [
                {
                    "option": " La eyección de la sangre ocurre durante la diástole ventricular.",
                    "isCorrect": false
                },
                {
                    "option": " Durante la sístole se abre la válvula auriculoventricular.",
                    "isCorrect": false
                },
                {
                    "option": " La válvula aórtica se abre durante la sístole ventricular.",
                    "isCorrect": true
                },
                {
                    "option": " El llenado ventricular ocurre en sístole.",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿En qué sector del aparato respiratorio ocurre la hematosis?",
            "options": [
                {
                    "option": " Laringe",
                    "isCorrect": false
                },
                {
                    "option": " Sacos alveolares",
                    "isCorrect": true
                },
                {
                    "option": " Bronquios secundarios",
                    "isCorrect": false
                },
                {
                    "option": " Tráquea y bronquios principales",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿Cuál de estos solutos están más concentrados en el compartimiento extracelular en comparación con el intracelular?",
            "options": [
                {
                    "option": " Sodio y Cloro",
                    "isCorrect": true
                },
                {
                    "option": " Potasio y Cloro",
                    "isCorrect": false
                },
                {
                    "option": " Sodio y Potasio",
                    "isCorrect": false
                },
                {
                    "option": " Potasio y Calcio",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿En cuál de los siguientes sectores de una neurona podemos encontrar ribosomas y retículo endoplásmico rugoso?",
            "options": [
                {
                    "option": " en el soma",
                    "isCorrect": true
                },
                {
                    "option": " en los terminales axónicos",
                    "isCorrect": false
                },
                {
                    "option": " en el segmento inicial del axón",
                    "isCorrect": false
                },
                {
                    "option": " en las espinas de las dendritas",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "Sobre las enzimas:",
            "options": [
                {
                    "option": " Su actividad no depende de la temperatura ni el pH",
                    "isCorrect": false
                },
                {
                    "option": " Modifican el equilibro de la reacción sobre la que actúan",
                    "isCorrect": false
                },
                {
                    "option": " Su regulación solo depende de la presencia de inhibidores",
                    "isCorrect": false
                },
                {
                    "option": " Son catalizadores biológicos que aumentan la velocidad de reacción",
                    "isCorrect": true
                }
            ]
        },
        {
            "question": "Cuando los niveles de ADH (hormona antidiurética) en el plasma son altos, la orina será:",
            "options": [
                {
                    "option": " muy diluida.",
                    "isCorrect": false
                },
                {
                    "option": " muy concentrada.",
                    "isCorrect": true
                },
                {
                    "option": " rica en proteínas.",
                    "isCorrect": false
                },
                {
                    "option": " rica en ácidos grasos.",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "Los potenciales de acción que se generan en las células musculares y que permiten su contracción provocan un aumento intracelular de:",
            "options": [
                {
                    "option": " K+",
                    "isCorrect": false
                },
                {
                    "option": " Cl-",
                    "isCorrect": false
                },
                {
                    "option": " Na+",
                    "isCorrect": false
                },
                {
                    "option": " Ca++",
                    "isCorrect": true
                }
            ]
        },
        {
            "question": "¿Cuál de las siguientes características corresponde a un potencial de acción?",
            "options": [
                {
                    "option": " Son potenciales electrotónicos.",
                    "isCorrect": false
                },
                {
                    "option": " El potencial de membrana se hace más negativo.",
                    "isCorrect": false
                },
                {
                    "option": " Existe una entrada masiva de potasio a la neurona mediante canales voltaje-dependientes.",
                    "isCorrect": false
                },
                {
                    "option": " Una vez que se desencadena, se transmite a lo largo del axón sin decremento en su amplitud.",
                    "isCorrect": true
                }
            ]
        },
        {
            "question": "Respecto a la bomba de Na+/K+ ATPasa y su presencia en los enterocitos es correcto afirmar que:",
            "options": [
                {
                    "option": " Se encuentra únicamente en la membrana apical.",
                    "isCorrect": false
                },
                {
                    "option": " Se encuentra únicamente en la membrana basolateral.",
                    "isCorrect": true
                },
                {
                    "option": " Se encuentra en ambas membranas, apical y basolateral.",
                    "isCorrect": false
                },
                {
                    "option": " No forma parte de la membrana de los enterocitos.",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿Qué sector del sistema circulatorio contiene mayor volumen de sangre?",
            "options": [
                {
                    "option": " Arterial",
                    "isCorrect": false
                },
                {
                    "option": " Capilar",
                    "isCorrect": false
                },
                {
                    "option": " Venoso",
                    "isCorrect": true
                },
                {
                    "option": " Cavidades cardíacas",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿Cuál de las siguientes es la definición de Capacidad vital?",
            "options": [
                {
                    "option": " Volumen de gas después de una inspiración máxima.",
                    "isCorrect": false
                },
                {
                    "option": " Volumen máximo exhalado luego de una inspiración máxima.",
                    "isCorrect": true
                },
                {
                    "option": " Cantidad de aire inhalado o exhalado en una respiración normal.",
                    "isCorrect": false
                },
                {
                    "option": " Volumen que queda en el pulmón luego de una espiración máxima.",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "Con respecto a la neurulación:",
            "options": [
                {
                    "option": " el tubo neural se origina a partir del mesodermo axial",
                    "isCorrect": false
                },
                {
                    "option": " la notocorda es importante porque da origen a la médula espinal",
                    "isCorrect": false
                },
                {
                    "option": " las crestas neurales se originan a partir del mesodermo intermedio",
                    "isCorrect": false
                },
                {
                    "option": " la placa neural se forma por diferenciación de un sector del ectodermo",
                    "isCorrect": true
                }
            ]
        },
        {
            "question": "Respecto al proceso de contracción muscular ¿qué etapa ocurre primero?",
            "options": [
                {
                    "option": " Hidrolisis de ADP",
                    "isCorrect": false
                },
                {
                    "option": " Liberación de Zn++",
                    "isCorrect": false
                },
                {
                    "option": " Liberación de Ca++",
                    "isCorrect": true
                },
                {
                    "option": " Formación de enlace cruzado entre actina y miosina",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "Sobre equilibrio ácido base:",
            "options": [
                {
                    "option": " El pH normal de la sangre es 7,0",
                    "isCorrect": false
                },
                {
                    "option": " Los sistemas buffer están formados por ácidos fuertes y bases fuertes",
                    "isCorrect": false
                },
                {
                    "option": " La estructura y función de las proteínas es dependiente del pH del medio",
                    "isCorrect": true
                },
                {
                    "option": " El principal sistema de amortiguación del pH de la sangre es la hemoglobina",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "Cuál de las siguientes hormonas es secretada por la Neurohipófisis:",
            "options": [
                {
                    "option": " Oxitocina.",
                    "isCorrect": true
                },
                {
                    "option": " Prolactina.",
                    "isCorrect": false
                },
                {
                    "option": " FSH (hormona folículo estimulante",
                    "isCorrect": false
                },
                {
                    "option": " TSH (hormona estimulante de la tiroides",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿En qué se diferencian las células musculares que forman el corazón de las que forman parte de la pared de los vasos sanguíneos?",
            "options": [
                {
                    "option": " en la presencia o ausencia de actina",
                    "isCorrect": false
                },
                {
                    "option": " en la ubicación central o periférica del núcleo",
                    "isCorrect": false
                },
                {
                    "option": " en la tinción eosinófila o basófila del citoplasma",
                    "isCorrect": false
                },
                {
                    "option": " en la presencia o ausencia de estriación transversal",
                    "isCorrect": true
                }
            ]
        },
        {
            "question": "¿En qué sector del ovario se localizan los ovocitos en una mujer adulta?",
            "options": [
                {
                    "option": " en la corteza",
                    "isCorrect": true
                },
                {
                    "option": " en la médula",
                    "isCorrect": false
                },
                {
                    "option": " en la zona del hilio",
                    "isCorrect": false
                },
                {
                    "option": " en el epitelio germinativo",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "El epitelio cilíndrico estratificado (ej. el ubicado en conductos excretores de glándulas esofágicas) tiene como función:",
            "options": [
                {
                    "option": " Soporte",
                    "isCorrect": false
                },
                {
                    "option": " Absorción",
                    "isCorrect": false
                },
                {
                    "option": " Distensión",
                    "isCorrect": false
                },
                {
                    "option": " Protección y Secreción",
                    "isCorrect": true
                }
            ]
        },
        {
            "question": "La sustancia blanca está compuesta por:",
            "options": [
                {
                    "option": " Neuroglia",
                    "isCorrect": false
                },
                {
                    "option": " Axones mielínicos",
                    "isCorrect": true
                },
                {
                    "option": " Axones amielínicos",
                    "isCorrect": false
                },
                {
                    "option": " Terminales axónicos",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "Las arterias coronarias derecha e izquierda garantizan la nutrición del miocardio durante la diástole cardiaca, ¿cuál es la principal rama que vasculariza al ventrículo izquierdo?",
            "options": [
                {
                    "option": " Arteria circunfleja",
                    "isCorrect": false
                },
                {
                    "option": " Arteria del nodo sinusal",
                    "isCorrect": false
                },
                {
                    "option": " Arteria coronaria derecha",
                    "isCorrect": false
                },
                {
                    "option": " Arteria descendente anterior",
                    "isCorrect": true
                }
            ]
        },
        {
            "question": "La bilis, necesaria para la digestión de las grasas, es producida en el hígado. ¿Qué recorrido anatómico realiza la bilis antes de ser vertida en el duodeno?",
            "options": [
                {
                    "option": " Conducto hepático, vesícula biliar, cístico, duodeno.",
                    "isCorrect": false
                },
                {
                    "option": " Vesícula biliar, conducto hepatocolédoco, cístico, duodeno.",
                    "isCorrect": false
                },
                {
                    "option": " Conducto hepatocolédoco, cístico, ampolla de Vater, duodeno.",
                    "isCorrect": false
                },
                {
                    "option": " Conductos hepáticos, conducto hepatocolédoco, ampolla de Vater, duodeno.",
                    "isCorrect": true
                }
            ]
        },
        {
            "question": "La respiración anaeróbica ocurre en todas las células. ¿Qué vía metabólica puede producir ATP sin presencia de oxígeno?",
            "options": [
                {
                    "option": " La glucólisis.",
                    "isCorrect": true
                },
                {
                    "option": " El ciclo de Krebs.",
                    "isCorrect": false
                },
                {
                    "option": " La gluconeogénesis.",
                    "isCorrect": false
                },
                {
                    "option": " La fosforilación oxidativa.",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "La presión arterial media se calcula como:",
            "options": [
                {
                    "option": " El promedio entre la presión diastólica y la sistólica.",
                    "isCorrect": false
                },
                {
                    "option": " La presión sistólica menos un tercio de la presión diastólica.",
                    "isCorrect": false
                },
                {
                    "option": " La presión diastólica más un tercio de la presión diferencial.",
                    "isCorrect": true
                },
                {
                    "option": " La diferencia entre la presión sistólica y la presión diastólica.",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "¿Cuál de las siguientes estructuras es el sitio de inserción distal del Músculo Psoas Ilíaco?",
            "options": [
                {
                    "option": " Cabeza femoral",
                    "isCorrect": false
                },
                {
                    "option": " Trocánter mayor del fémur",
                    "isCorrect": false
                },
                {
                    "option": " Trocánter menor del fémur",
                    "isCorrect": true
                },
                {
                    "option": " Tubérculo de Gerdy de la Tibia",
                    "isCorrect": false
                }
            ]
        },
        {
            "question": "Con respecto a la Uretra:",
            "options": [
                {
                    "option": " La uretra femenina es más larga que la masculina",
                    "isCorrect": false
                },
                {
                    "option": " La uretra masculina participa exclusivamente de la vía urinaria",
                    "isCorrect": false
                },
                {
                    "option": " La uretra masculina tiene un sector en íntima relación con la próstata.",
                    "isCorrect": true
                },
                {
                    "option": " En ambos sexos, la uretra se origina en los riñones y desemboca en la vejiga",
                    "isCorrect": false
                }
            ]
        }
    ]
}]
let questions = [];
let currentTest = null;
let current = 0;
let score = 0;
let answered = false;
let answeredCount = 0;
let quizRange = { start: 0, end: 0 };

const quizDiv = document.getElementById('quiz');
const scoreDiv = document.getElementById('score');
const restartBtn = document.getElementById('restartBtn');
const stopBtn = document.getElementById('stopBtn');
const rangeSelector = document.getElementById('rangeSelector');
const startIdxInput = document.getElementById('startIdx');
const endIdxInput = document.getElementById('endIdx');
const startQuizBtn = document.getElementById('startQuizBtn');
const pruebasList = document.getElementById('pruebasList');
const currentTestDiv = document.getElementById('currentTest');

restartBtn.addEventListener('click', () => location.reload());
stopBtn.addEventListener('click', stopQuiz);
startQuizBtn.addEventListener('click', () => {
    let start = parseInt(startIdxInput.value, 10) - 1;
    let end = parseInt(endIdxInput.value, 10) - 1;
    if (isNaN(start) || isNaN(end) || start < 0 || end < start || end >= questions.length) {
        alert('Rango inválido');
        return;
    }
    quizRange.start = start;
    quizRange.end = end;
    current = start;
    score = 0;
    answeredCount = 0;
    scoreDiv.textContent = '';
    rangeSelector.style.display = 'none';
    stopBtn.style.display = 'inline-block';
    restartBtn.style.display = 'none';
    showQuestion();
});

function renderPruebasList() {
    if (!pruebasList) return;
    pruebasList.innerHTML = '<b>Pruebas disponibles:</b><br> ' + tests.map(t => `<button class="pruebaBtn" codigo='${t.codigo}'">${t.nombre} - ${t.preguntas.length}</button>`).join(' ');
    document.querySelectorAll('.pruebaBtn').forEach(btn => {
        btn.onclick = function () {
            loadPrueba(btn.getAttribute('codigo'));
        };
    });
}

renderPruebasList();

function loadPrueba(codigo) {
    const test = tests.find(t => t.codigo === codigo);
    questions = test.preguntas;
    currentTest = test;
    startIdxInput.max = questions.length;
    endIdxInput.max = questions.length;
    startIdxInput.value = 1;
    endIdxInput.value = questions.length;
    rangeSelector.style.display = 'block';
    quizDiv.innerHTML = '';
    scoreDiv.textContent = '';
    stopBtn.style.display = 'none';
    restartBtn.style.display = 'none';
    currentTestDiv.innerHTML = `<h2>${test.nombre}</h2>`;
}

function stopQuiz() {
    quizDiv.innerHTML = '<h2>¡Prueba detenida!</h2>';
    let percent = answeredCount > 0 ? ((score / answeredCount) * 100).toFixed(1) : 0;
    scoreDiv.textContent = `Puntaje: ${score} / ${answeredCount} (${percent}%)`;
    stopBtn.style.display = 'none';
    restartBtn.style.display = 'block';
}

function showQuestion() {
    answered = false;
    // Si es la última pregunta, mostrar puntaje final
    if (current > quizRange.end) {
        quizDiv.innerHTML = '<h2>¡Prueba finalizada!</h2>';
        let percent = answeredCount > 0 ? ((score / answeredCount) * 100).toFixed(1) : 0;
        scoreDiv.textContent = `Puntaje final: ${score} / ${answeredCount} (${percent}%)`;
        stopBtn.style.display = 'none';
        restartBtn.style.display = 'block';
        return;
    }
    const q = questions[current];
    const progress = `<div class="progress">Pregunta ${current - quizRange.start + 1} de ${quizRange.end - quizRange.start + 1}</div>`;

    quizDiv.innerHTML = `${progress}<div class="question">${current + 1}. ${q.question}</div><div id="imgContainer"></div><div class="options"></div><div id="nextDiv"></div>`;
    // Buscar imagen asociada
    let image = questions[current].image;
    if (image) {
        const imgOb = document.createElement('img');
        imgOb.src = `./pruebas/imagenes/${currentTest.codigo}/${image}.png`;
        imgOb.alt = `Imagen ${image}`;
        imgOb.style.maxWidth = '300px';
        imgOb.style.display = 'block';
        document.getElementById('imgContainer').appendChild(imgOb);
    }

    const optionsDiv = quizDiv.querySelector('.options');
    const isRandom = document.getElementById('randomOrder').checked;
    if (isRandom) {
        q.options = q.options.sort(() => Math.random() - 0.5);
    }
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.textContent = opt.option;
        btn.onclick = () => selectOption(idx);
        optionsDiv.appendChild(btn);
    });
}

function selectOption(idx) {
    if (answered) return;
    answered = true;
    answeredCount++;
    const q = questions[current];
    const optionsDiv = quizDiv.querySelector('.options');
    Array.from(optionsDiv.children).forEach((btn, i) => {
        btn.disabled = true;
        if (q.options[i].isCorrect) btn.classList.add('correct');
        if (i === idx && !q.options[i].isCorrect) btn.classList.add('incorrect');
    });
    if (q.options[idx].isCorrect) {
        score++;
        scoreDiv.textContent = '¡Correcto!';
    } else {
        scoreDiv.textContent = 'Incorrecto.';
    }
    let percent = ((score / answeredCount) * 100).toFixed(1);
    scoreDiv.textContent += ` | Puntaje: ${score} / ${answeredCount} (${percent}%)`;
    const nextDiv = document.getElementById('nextDiv');
    nextDiv.innerHTML = '<button id="nextBtn">Siguiente</button>';
    document.getElementById('nextBtn').onclick = () => {
        scoreDiv.textContent = '';
        current++;
        showQuestion();
    };
}
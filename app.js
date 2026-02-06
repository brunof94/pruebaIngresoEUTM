const tests = [
    {
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
    },
    {
        "nombre": "Prueba de ingreso 2024",
        "codigo": "ingreso2024b",
        "area": "todas",
        "preguntas": [
            {
                "question": "La “cuota salud” que se le paga a los prestadores integrales del SNIS está compuesta por:",
                "options": [
                    {
                        "option": " La cápita y las metas asistenciales.",
                        "isCorrect": true
                    },
                    {
                        "option": " Un monto variable según las patologías de los usuarios.",
                        "isCorrect": false
                    },
                    {
                        "option": " Las metas asistenciales y un monto fijo según el uso del sistema.",
                        "isCorrect": false
                    },
                    {
                        "option": " La cápita y un monto según el número de dependientes (hijos y cónyuges",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En relación a la atención a la salud que brindan los prestadores integrales que integran el SNIS:",
                "options": [
                    {
                        "option": " Debe ser la que acuerdan los prestadores públicos",
                        "isCorrect": false
                    },
                    {
                        "option": " Debe ser la que acuerdan los prestadores con los usuarios",
                        "isCorrect": false
                    },
                    {
                        "option": " Debe ser la que cada prestador define como necesaria para sus usuarios",
                        "isCorrect": false
                    },
                    {
                        "option": " Debe ser la que está definida en el Plan Integral de Atención en Salud (PIAS",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En términos amplios, la “salud pública” puede entenderse como:",
                "options": [
                    {
                        "option": " El completo estado de bienestar físico, mental y social.",
                        "isCorrect": false
                    },
                    {
                        "option": " Las circunstancias en que las personas nacen, crecen, trabajan, viven y envejecen.",
                        "isCorrect": false
                    },
                    {
                        "option": " La disciplina científica que aborda las situaciones de salud de las personas en términos individuales.",
                        "isCorrect": false
                    },
                    {
                        "option": " Todo aquello que la sociedad construye colectivamente con la finalidad de mejorar las condiciones de vida de sus pobladores.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En la década de 1970 Marc Lalonde propuso que el nivel de salud de una comunidad está influido por grandes grupos de circunstancias o determinantes. ¿Cuáles son estos determinantes?",
                "options": [
                    {
                        "option": " Aquellos determinantes que se relacionan con patrones o formas de comportamiento de las personas.",
                        "isCorrect": false
                    },
                    {
                        "option": " El estilo de vida, la biología humana, el medio ambiente y el sistema de asistencia sanitaria.",
                        "isCorrect": true
                    },
                    {
                        "option": " Las circunstancias en que las personas nacen, crecen, viven y envejecen",
                        "isCorrect": false
                    },
                    {
                        "option": " El estado de bienestar físico, mental y social.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La “Salud Colectiva”, en tanto movimiento, surgió en América Latina en la década de 1970 con la intención de:",
                "options": [
                    {
                        "option": " Promover el enfoque de “Una salud” en la región.",
                        "isCorrect": false
                    },
                    {
                        "option": " Promover un paradigma renovado de la salud pública.",
                        "isCorrect": true
                    },
                    {
                        "option": " Promover patrones o formas de comportamiento saludable en las personas.",
                        "isCorrect": false
                    },
                    {
                        "option": " Promover la planificación estratégica y la preparación y respuesta ante situaciones de emergencia.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Por qué el agua se clasifica como una molécula polar?",
                "options": [
                    {
                        "option": " Porque los átomos de hidrógeno que la forma tiene una carga parcial positiva y el de oxígeno una carga parcial negativa",
                        "isCorrect": true
                    },
                    {
                        "option": " Porque el átomo de oxígeno que la forma tiene una carga parcial positiva y los de hidrógeno una carga parcial negativa",
                        "isCorrect": false
                    },
                    {
                        "option": " Porque los átomos de hidrógeno y oxígeno que la componen tienen una carga parcial positiva",
                        "isCorrect": false
                    },
                    {
                        "option": " Porque los átomos de hidrógeno y oxígeno que la componen no poseen carga parcial",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El agua disuelve los iones de sodio mediante:",
                "options": [
                    {
                        "option": " La interacción de sus átomos de oxígeno ligeramente negativos con el sodio",
                        "isCorrect": true
                    },
                    {
                        "option": " La interacción de sus átomos de oxígeno ligeramente positivos con el sodio",
                        "isCorrect": false
                    },
                    {
                        "option": " La interacción de sus átomos de hidrógeno ligeramente negativos con el sodio",
                        "isCorrect": false
                    },
                    {
                        "option": " La interacción de sus átomos de hidrógeno ligeramente positivos con el sodio",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El átomo de sodio (Na+) y el átomo de cloruro (Cl-) interaccionan entre ellos por interacciones de tipo:",
                "options": [
                    {
                        "option": " enlace iónico",
                        "isCorrect": true
                    },
                    {
                        "option": " enlace covalente",
                        "isCorrect": false
                    },
                    {
                        "option": " interacción hidrofóbica",
                        "isCorrect": false
                    },
                    {
                        "option": " enlaces de hidrógeno",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de las siguientes moléculas NO es una biomolécula?",
                "options": [
                    {
                        "option": " colesterol",
                        "isCorrect": false
                    },
                    {
                        "option": " proteínas",
                        "isCorrect": false
                    },
                    {
                        "option": " glucógeno",
                        "isCorrect": false
                    },
                    {
                        "option": " cloruro de sodio",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Qué tipo de molécula está constituida por aminoácidos?",
                "options": [
                    {
                        "option": " Proteínas",
                        "isCorrect": true
                    },
                    {
                        "option": " Fosfolípidos",
                        "isCorrect": false
                    },
                    {
                        "option": " Polisacáridos",
                        "isCorrect": false
                    },
                    {
                        "option": " Ácidos nucleicos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de las siguientes estructuras es la unidad básica del ácido desoxirribonucleico?",
                "options": [
                    {
                        "option": " monosacárido",
                        "isCorrect": false
                    },
                    {
                        "option": " aminoácido",
                        "isCorrect": false
                    },
                    {
                        "option": " nucleótido",
                        "isCorrect": true
                    },
                    {
                        "option": " glicerol",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Los ácidos fuertes son aquellos que:",
                "options": [
                    {
                        "option": " liberan todos sus H+ en la solución",
                        "isCorrect": true
                    },
                    {
                        "option": " liberan todos sus OH- en la solución",
                        "isCorrect": false
                    },
                    {
                        "option": " liberan cantidades iguales de H+ y de OH- en la solución",
                        "isCorrect": false
                    },
                    {
                        "option": " no se disocian en soluciones acuosas",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál es el pH de una solución de cloruro de sodio (NaCl) 0,001 M?",
                "options": [
                    {
                        "option": " 3,0",
                        "isCorrect": false
                    },
                    {
                        "option": " 7,0",
                        "isCorrect": true
                    },
                    {
                        "option": " 8,0",
                        "isCorrect": false
                    },
                    {
                        "option": " 10,4",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué concentración, expresada en partes por millón (ppm) se obtiene mezclando 0,5 mg de flúor en 2 litros de solución? Dato: ppm corresponde a mg de soluto/L",
                "options": [
                    {
                        "option": " 0,25 ppm",
                        "isCorrect": true
                    },
                    {
                        "option": " 0,5 ppm",
                        "isCorrect": false
                    },
                    {
                        "option": " 1 ppm",
                        "isCorrect": false
                    },
                    {
                        "option": " 2 ppm",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuántos gramos de H2SO4 hay en 10 pesos equivalentes (peqg)? Dato: masa molar H2SO4 = 98 g/mol",
                "options": [
                    {
                        "option": " 10 g",
                        "isCorrect": false
                    },
                    {
                        "option": " 98g",
                        "isCorrect": false
                    },
                    {
                        "option": " 200 g",
                        "isCorrect": false
                    },
                    {
                        "option": " 490 g",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cómo se puede expresar la concentración de un soluto?",
                "options": [
                    {
                        "option": " en litros",
                        "isCorrect": false
                    },
                    {
                        "option": " en gramos",
                        "isCorrect": false
                    },
                    {
                        "option": " en gramos por litro",
                        "isCorrect": true
                    },
                    {
                        "option": " en gramos por moles",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Indique cuál es la molaridad de la fructosa en una solución que se prepara disolviendo 360 g de fructosa en un volumen final de 1 litro. Dato: masa molar Fructosa = 180 g/mol",
                "options": [
                    {
                        "option": " 0,5 M",
                        "isCorrect": false
                    },
                    {
                        "option": " 1,0 M",
                        "isCorrect": false
                    },
                    {
                        "option": " 1,5 M",
                        "isCorrect": false
                    },
                    {
                        "option": " 2,0 M",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿En qué volumen de solución se deben disolver 5 gramos de KCl para obtener una solución 10% m/v (porcentaje masa soluto/volumen solución)?",
                "options": [
                    {
                        "option": " 50 ml",
                        "isCorrect": true
                    },
                    {
                        "option": " 100 ml",
                        "isCorrect": false
                    },
                    {
                        "option": " 500 ml",
                        "isCorrect": false
                    },
                    {
                        "option": " 1000 ml",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Los anticuerpos:",
                "options": [
                    {
                        "option": " Son inespecíficos",
                        "isCorrect": false
                    },
                    {
                        "option": " Se clasifican en dos tipos: IgM e IgG",
                        "isCorrect": false
                    },
                    {
                        "option": " Son secretados por linfocitos B activados",
                        "isCorrect": true
                    },
                    {
                        "option": " Se encuentran a nivel de los tejidos, pero no en la circulación",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Por qué tipo de célula está mediada la respuesta inmune específica celular?",
                "options": [
                    {
                        "option": " Neutrófilos",
                        "isCorrect": false
                    },
                    {
                        "option": " Linfocitos B",
                        "isCorrect": false
                    },
                    {
                        "option": " Linfocitos T",
                        "isCorrect": true
                    },
                    {
                        "option": " Macrófagos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de estos tipos celulares se pueden encontrar en los testículos?",
                "options": [
                    {
                        "option": " Microglía",
                        "isCorrect": false
                    },
                    {
                        "option": " Células ciliadas",
                        "isCorrect": false
                    },
                    {
                        "option": " Células de Sertoli",
                        "isCorrect": true
                    },
                    {
                        "option": " Células de Paneth",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿El pico de qué hormona a mitad del ciclo sexual femenino provoca la ovulación?",
                "options": [
                    {
                        "option": " Cortisol",
                        "isCorrect": false
                    },
                    {
                        "option": " Estradiol",
                        "isCorrect": false
                    },
                    {
                        "option": " Hormona luteinizante (LH",
                        "isCorrect": true
                    },
                    {
                        "option": " Hormona antidiurética (ADH",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Indique en cuál de los siguientes sectores del tracto digestivo se encuentran el fundus, el cardias y el píloro:",
                "options": [
                    {
                        "option": " esófago",
                        "isCorrect": false
                    },
                    {
                        "option": " estómago",
                        "isCorrect": true
                    },
                    {
                        "option": " orofaringe",
                        "isCorrect": false
                    },
                    {
                        "option": " intestino delgado",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Qué enzima hidrolítica digiere proteínas en el estómago?",
                "options": [
                    {
                        "option": " Lipasa",
                        "isCorrect": false
                    },
                    {
                        "option": " Pepsina",
                        "isCorrect": true
                    },
                    {
                        "option": " Quimotripsina",
                        "isCorrect": false
                    },
                    {
                        "option": " Ácido clorhídrico (HCl",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Indique cuál de las siguientes células se encuentra en el hígado:",
                "options": [
                    {
                        "option": " Glía.",
                        "isCorrect": false
                    },
                    {
                        "option": " Miocito.",
                        "isCorrect": false
                    },
                    {
                        "option": " Hepatocito.",
                        "isCorrect": true
                    },
                    {
                        "option": " Células de Purkinje.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El revestimiento interior del tracto gastrointestinal, que está en contacto con el contenido luminal es la:",
                "options": [
                    {
                        "option": " Serosa",
                        "isCorrect": false
                    },
                    {
                        "option": " Mucosa",
                        "isCorrect": true
                    },
                    {
                        "option": " Muscular",
                        "isCorrect": false
                    },
                    {
                        "option": " Submucosa",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Las glándulas suprarrenales secretan:",
                "options": [
                    {
                        "option": " Cortisol.",
                        "isCorrect": true
                    },
                    {
                        "option": " Glucagón.",
                        "isCorrect": false
                    },
                    {
                        "option": " Prolactina.",
                        "isCorrect": false
                    },
                    {
                        "option": " Hormona estimulante de la tiroides (TSH",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Indique cómo se denomina el tejido muscular cardíaco:",
                "options": [
                    {
                        "option": " epicardio",
                        "isCorrect": false
                    },
                    {
                        "option": " miocardio",
                        "isCorrect": true
                    },
                    {
                        "option": " pericardio",
                        "isCorrect": false
                    },
                    {
                        "option": " endocardio",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Indique cómo se denomina la membrana que rodea y protege el corazón:",
                "options": [
                    {
                        "option": " epicardio",
                        "isCorrect": false
                    },
                    {
                        "option": " miocardio",
                        "isCorrect": false
                    },
                    {
                        "option": " pericardio",
                        "isCorrect": true
                    },
                    {
                        "option": " endocardio",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La sangre oxigenada llega desde los pulmones e ingresa al corazón por:",
                "options": [
                    {
                        "option": " la aurícula izquierda",
                        "isCorrect": true
                    },
                    {
                        "option": " el ventrículo izquierdo",
                        "isCorrect": false
                    },
                    {
                        "option": " la aurícula derecha",
                        "isCorrect": false
                    },
                    {
                        "option": " el ventrículo derecho",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto al ciclo cardíaco indique la opción correcta:",
                "options": [
                    {
                        "option": " La sangre se eyecta hacia las venas.",
                        "isCorrect": false
                    },
                    {
                        "option": " Durante la sístole el músculo cardíaco se relaja.",
                        "isCorrect": false
                    },
                    {
                        "option": " El ventrículo se vacía de sangre durante la diástole.",
                        "isCorrect": false
                    },
                    {
                        "option": " Durante la sístole se eyecta la sangre hacia los tejidos.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La presión sistólica normal es:",
                "options": [
                    {
                        "option": " mayor a 170 milímetros de mercurio.",
                        "isCorrect": false
                    },
                    {
                        "option": " mayor a 220 milímetros de mercurio.",
                        "isCorrect": false
                    },
                    {
                        "option": " menor a 110 milímetros de mercurio",
                        "isCorrect": true
                    },
                    {
                        "option": " menor a 11 milímetros de mercurio",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿A qué tipo de sistema pertenecen los astrocitos?",
                "options": [
                    {
                        "option": " Sistema renal",
                        "isCorrect": false
                    },
                    {
                        "option": " Sistema nervioso",
                        "isCorrect": true
                    },
                    {
                        "option": " Sistema cardíaco",
                        "isCorrect": false
                    },
                    {
                        "option": " Sistema respiratorio",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cuál de estos tipos celulares forma la vaina de mielina en el sistema nervioso periférico?",
                "options": [
                    {
                        "option": " Neurona.",
                        "isCorrect": false
                    },
                    {
                        "option": " Célula endotelial.",
                        "isCorrect": false
                    },
                    {
                        "option": " Astrocitos fibrosos.",
                        "isCorrect": false
                    },
                    {
                        "option": " Células de Schwann.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Indique cuál de las siguientes descripciones del mecanismo de acción de acetilcolina es correcta:",
                "options": [
                    {
                        "option": " la acetilcolina es liberada en vesículas que pasan a la sangre",
                        "isCorrect": false
                    },
                    {
                        "option": " la acetilcolina es liberada a través de canales que se abren en la membrana",
                        "isCorrect": false
                    },
                    {
                        "option": " la acetilcolina es incorporada mediante endocitosis en la neurona pre-sináptica",
                        "isCorrect": false
                    },
                    {
                        "option": " la acetilcolina es almacenada en vesículas sinápticas y liberada en la hendidura sináptica",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La mayor producción de ATP en la célula ocurre en:",
                "options": [
                    {
                        "option": " El ciclo de Krebs en el retículo endoplásmico",
                        "isCorrect": false
                    },
                    {
                        "option": " La cadena respiratoria en la mitocondria",
                        "isCorrect": true
                    },
                    {
                        "option": " La beta-oxidación en el citosol",
                        "isCorrect": false
                    },
                    {
                        "option": " La glucólisis en el núcleo",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En condiciones aeróbicas, el piruvato, producto del catabolismo de la glucosa tendrá el siguiente destino:",
                "options": [
                    {
                        "option": " Convertirse en Acetil-CoA para ingresar al ciclo de Krebs",
                        "isCorrect": true
                    },
                    {
                        "option": " Convertirse en CO2 para ingresar a la cadena respiratoria",
                        "isCorrect": false
                    },
                    {
                        "option": " Convertirse en lactato para continuar la respiración celular",
                        "isCorrect": false
                    },
                    {
                        "option": " Convertirse en ADP para ingresar a la ruta de la gluconeogénesis",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Durante la respiración mitocondrial los electrones circulan desde el NADH hasta el oxígeno. Indique cómo es el estado de oxidación de cada uno al finalizar el proceso:",
                "options": [
                    {
                        "option": " el NADH se reduce y el oxígeno se reduce",
                        "isCorrect": false
                    },
                    {
                        "option": " el NADH se oxida y el oxígeno se oxida",
                        "isCorrect": false
                    },
                    {
                        "option": " el NADH se reduce y el oxígeno se oxida",
                        "isCorrect": false
                    },
                    {
                        "option": " el NADH se oxida y el oxígeno se reduce",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Indique la afirmación correcta referida a las hormonas y su mecanismo de acción:",
                "options": [
                    {
                        "option": " Son enzimas que catalizan reacciones.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se liberan a la sangre y circulan en ella.",
                        "isCorrect": true
                    },
                    {
                        "option": " No presentan especificidad de célula diana.",
                        "isCorrect": false
                    },
                    {
                        "option": " Las glándulas que las producen tienen conducto excretor.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Respecto al mecanismo de acción de una hormona liposoluble:",
                "options": [
                    {
                        "option": " Se dirige a la célula blanco unida a una glicoproteína y ejerce su efecto uniéndose a una receptor que sintetiza ATP",
                        "isCorrect": false
                    },
                    {
                        "option": " Se dirige a la célula blanco en forma libre y se une a un receptor específico presente en la membrana de la célula blanco",
                        "isCorrect": false
                    },
                    {
                        "option": " Se dirige a la célula blanco unido a un fosfolípido de membrana y se une a los ribosomas presentes en el citosol de la célula blanco",
                        "isCorrect": false
                    },
                    {
                        "option": " Se dirige a la célula blanco por la sangre unida a un transportador e ingresa a la célula para unirse a su receptor específico en el citoplasma o núcleo celular",
                        "isCorrect": true
                    }
                ]
            }
        ]
    },
    {
        "nombre": "Prueba de ingreso 2020",
        "codigo": "ingreso2020b",
        "area": "todas",
        "preguntas": [
            {
                "question": "En el sistema nervioso central, el aspecto de la sustancia blanca se debe a la presencia de:",
                "options": [
                    {
                        "option": " mielina",
                        "isCorrect": true
                    },
                    {
                        "option": " axones",
                        "isCorrect": false
                    },
                    {
                        "option": " astrocitos",
                        "isCorrect": false
                    },
                    {
                        "option": " vasos sanguíneos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Al comienzo de una inspiración las presiones que se registran en el aparato respiratorio son:",
                "options": [
                    {
                        "option": " la presión intrapleural es positiva.",
                        "isCorrect": false
                    },
                    {
                        "option": " la presión a nivel alveolar es negativa.",
                        "isCorrect": true
                    },
                    {
                        "option": " la presión intrapleural es igual a la atmosférica.",
                        "isCorrect": false
                    },
                    {
                        "option": " la presión en las vías aéreas superiores es mayor a la atmosférica.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Las células que se localizan en las lagunas como células principales dentro del tejido óseo maduro se denominan:",
                "options": [
                    {
                        "option": " osteocitos",
                        "isCorrect": true
                    },
                    {
                        "option": " osteoclastos",
                        "isCorrect": false
                    },
                    {
                        "option": " osteoblastos",
                        "isCorrect": false
                    },
                    {
                        "option": " osteoplastos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En cuanto al manejo renal de glucosa a nivel del túbulo, sucede lo siguiente:",
                "options": [
                    {
                        "option": " En condiciones normales se excreta una fracción fija.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se reabsorbe una parte a nivel de la nefrona distal.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se reabsorbe por completo en el túbulo proximal.",
                        "isCorrect": true
                    },
                    {
                        "option": " Su filtración renal es despreciable.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En relación a los gametos:",
                "options": [
                    {
                        "option": " Contienen 46 cromosomas.",
                        "isCorrect": false
                    },
                    {
                        "option": " Se producen por una única división celular.",
                        "isCorrect": false
                    },
                    {
                        "option": " Contienen la mitad de ADN que una célula somática.",
                        "isCorrect": true
                    },
                    {
                        "option": " Todos los gametos que se forman en un individuo son genéticamente idénticos.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Cuando los niveles de ADH (hormona antidiurética) en el plasma son elevados, la orina será:",
                "options": [
                    {
                        "option": " muy diluida.",
                        "isCorrect": false
                    },
                    {
                        "option": " rica en glucosa.",
                        "isCorrect": false
                    },
                    {
                        "option": " rica en proteínas.",
                        "isCorrect": false
                    },
                    {
                        "option": " muy concentrada.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Cuál de estas propiedades es correcta respecto a las sinapsis?",
                "options": [
                    {
                        "option": " La sinapsis eléctrica es una vía de baja resistencia.",
                        "isCorrect": true
                    },
                    {
                        "option": " En la sinapsis eléctrica es imprescindible la liberación de un neurotransmisor.",
                        "isCorrect": false
                    },
                    {
                        "option": " La sinapsis química permite el pasaje de iones y pequeñas moléculas entre ambas neuronas.",
                        "isCorrect": false
                    },
                    {
                        "option": " En la sinapsis eléctrica la información es transmitida con una mayor latencia que en la sinapsis química.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "La siguiente característica corresponde al aparato circulatorio:",
                "options": [
                    {
                        "option": " Las arterias son vasos con gran capacitancia.",
                        "isCorrect": false
                    },
                    {
                        "option": " Las venas son los vasos de mayor resistencia.",
                        "isCorrect": false
                    },
                    {
                        "option": " La velocidad de conducción de la sangre a nivel de los capilares es máxima.",
                        "isCorrect": false
                    },
                    {
                        "option": " A mayor superficie de sección total de los vasos, menor velocidad de conducción de la sangre.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Sobre el polisacárido glucógeno:",
                "options": [
                    {
                        "option": " Está formado por unidades de lactosa unidas por enlace peptídico.",
                        "isCorrect": false
                    },
                    {
                        "option": " Está formado por unidades de galactosa unidas por enlace peptídico.",
                        "isCorrect": false
                    },
                    {
                        "option": " Está formado por unidades de glucosa unidas por enlace glicosídico.",
                        "isCorrect": true
                    },
                    {
                        "option": " Está formado por unidades de galactosa y glucosa unidas por enlace glicosídico.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a la contracción del músculo esquelético:",
                "options": [
                    {
                        "option": " El calcio que activa a los miofilamentos proviene del exterior celular.",
                        "isCorrect": false
                    },
                    {
                        "option": " La aplicación de un estímulo breve supraumbral desencadena una sacudida simple.",
                        "isCorrect": true
                    },
                    {
                        "option": " Durante una contracción tetánica la concentración de calcio intracelular es menor que durante una sacudida simple.",
                        "isCorrect": false
                    },
                    {
                        "option": " El grado de superposición entre los filamentos delgados y gruesos es independiente del desarrollo de fuerza por parte del músculo.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Sobre la medula espinal:",
                "options": [
                    {
                        "option": " El diámetro transversal es regular en toda su extensión.",
                        "isCorrect": false
                    },
                    {
                        "option": " En los niños se extiende hasta la quinta vértebra lumbar.",
                        "isCorrect": false
                    },
                    {
                        "option": " En los adultos se extiende hasta la segunda vértebra lumbar.",
                        "isCorrect": true
                    },
                    {
                        "option": " La medula espinal termina en el filun terminal que tiene una medida de 42 cm.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a la secreción gástrica:",
                "options": [
                    {
                        "option": " en la fase gástrica, los reflejos locales la inhiben",
                        "isCorrect": false
                    },
                    {
                        "option": " se estimula durante la fase intestinal",
                        "isCorrect": false
                    },
                    {
                        "option": " se inicia durante la fase cefálica",
                        "isCorrect": true
                    },
                    {
                        "option": " es inhibida por la gastrina",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El sueño no REM o lento se puede dividir en:",
                "options": [
                    {
                        "option": " 2 fases.",
                        "isCorrect": false
                    },
                    {
                        "option": " 3 fases.",
                        "isCorrect": false
                    },
                    {
                        "option": " 4 fases.",
                        "isCorrect": true
                    },
                    {
                        "option": " 5 fases.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Sobre el proceso de digestión y absorción de glúcidos y lípidos:",
                "options": [
                    {
                        "option": " La digestión de triglicéridos se lleva a cabo por acción de las amilasas gástrica y pancreática junto con las disacaridasas en la superficie del enterocito.",
                        "isCorrect": false
                    },
                    {
                        "option": " El almidón y glucógeno se digieren por acción de de las amilasas salival y pancreática y de las disacaridasas en la superficie del enterocito.",
                        "isCorrect": true
                    },
                    {
                        "option": " La absorción de ácidos grasos se lleva a cabo a través de proteínas transportadoras de difusión facilitada.",
                        "isCorrect": false
                    },
                    {
                        "option": " La absorción de glucosa y galactosa se da por un proceso de difusión simple.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Sobre la función inmunitaria:",
                "options": [
                    {
                        "option": " La inmunidad innata esta mediada por anticuerpos",
                        "isCorrect": false
                    },
                    {
                        "option": " Los linfocitos T y B participan activamente en la inmunidad innata",
                        "isCorrect": false
                    },
                    {
                        "option": " Los linfocitos B maduran en el timo y los linfocitos T en la médula ósea",
                        "isCorrect": false
                    },
                    {
                        "option": " Los linfocitos T reconocen por medio de su TCR antígenos no propios, para luego eliminar las células infectadas",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Con respecto al potencial de acción del nervio:",
                "options": [
                    {
                        "option": " Su duración es de 100 ms.",
                        "isCorrect": false
                    },
                    {
                        "option": " En un potencial de acción la repolarización precede en el tiempo a la despolarización.",
                        "isCorrect": false
                    },
                    {
                        "option": " La despolarización es independiente del movimiento de sodio a través de la membrana.",
                        "isCorrect": false
                    },
                    {
                        "option": " La repolarización es consecuencia del movimiento del ion potasio hacia el exterior celular.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Los nervios raquídeos resultan de la unión de 2 raíces, emergiendo del conducto raquídeo por los agujeros de conjunción. Según el enunciado marque la verdadera",
                "options": [
                    {
                        "option": " Los nervios raquídeos emiten ramas anteriores que forman los plexos.",
                        "isCorrect": false
                    },
                    {
                        "option": " Los nervios raquídeos se forman por la unión de la raíz motora y la sensitiva.",
                        "isCorrect": true
                    },
                    {
                        "option": " Los nervios de la cola de caballo emergen todos por los agujeros de conjunción sacros.",
                        "isCorrect": false
                    },
                    {
                        "option": " El agujero de conjunción por donde emergen se forma por la superposición de los agujeros vertebrales.",
                        "isCorrect": false
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
                        "option": " El complemento es un elemento fundamental de inmunidad adaptativa",
                        "isCorrect": false
                    },
                    {
                        "option": " La inmunidad específica requiere contacto previo con el agente agresor y tiene memoria",
                        "isCorrect": true
                    },
                    {
                        "option": " Los linfocitos T CD4 Citotòxicos son linfocitos que colaboran en la producción de anticuerpos",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a los volúmenes y capacidades pulmonares:",
                "options": [
                    {
                        "option": " La capacidad pulmonar total es el volumen de aire que se desplaza entre la inspiración máxima y la espiración máxima.",
                        "isCorrect": false
                    },
                    {
                        "option": " La capacidad vital corresponde a la diferencia entre la capacidad pulmonar total y el volumen residual.",
                        "isCorrect": true
                    },
                    {
                        "option": " El volumen residual es el volumen de aire que queda en los pulmones luego de una inspiración máxima.",
                        "isCorrect": false
                    },
                    {
                        "option": " El volumen corriente es el volumen residual más el volumen de reserva espiratoria.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En qué etapa de la segunda meiosis se encuentra el ovocito secundario al momento de la ovulación:",
                "options": [
                    {
                        "option": " Profase",
                        "isCorrect": false
                    },
                    {
                        "option": " Anafase",
                        "isCorrect": false
                    },
                    {
                        "option": " Telofase",
                        "isCorrect": false
                    },
                    {
                        "option": " Metafase",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La glucólisis es una vía central del metabolismo. Sobre dicha vía:",
                "options": [
                    {
                        "option": " Es una vía anabólica que transcurre en la matriz mitocondrial.",
                        "isCorrect": false
                    },
                    {
                        "option": " En esta vía se degrada una molécula de lactosa a 2 moléculas de acetil CoA",
                        "isCorrect": false
                    },
                    {
                        "option": " El rendimiento neto son dos moléculas de piruvato, 2 moléculas de ATP y 2 de NADH",
                        "isCorrect": true
                    },
                    {
                        "option": " El rendimiento neto son dos moléculas de acetil CoA, 2 moléculas de GTP y 2 de FADH2",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cómo se hidrolizan las proteínas de la dieta?",
                "options": [
                    {
                        "option": " Por la acción de las α amilasas salivales y pancreaticas, que digieren las proteínas a sus aminoácidos constituyentes.",
                        "isCorrect": false
                    },
                    {
                        "option": " Por la exposición al pH ácido del estómago, que es suficiente para generar la ruptura de los enlaces peptídicos entre residuos aminoacídicos.",
                        "isCorrect": false
                    },
                    {
                        "option": " Por la acción combinada de la α amilasa pancreática y las lipasas salival y gástrica, que digieren las proteínas a sus aminoácidos constituyentes.",
                        "isCorrect": false
                    },
                    {
                        "option": " Por la acción de la pepsina gástrica, las proteasas pancréaticas (tripsina, quimiotripsina, carboxipeptidasa y elastasa",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "En el ECG (electrocardiograma) el complejo QRS corresponde a:",
                "options": [
                    {
                        "option": " la repolarización auricular.",
                        "isCorrect": false
                    },
                    {
                        "option": " la repolarización ventricular.",
                        "isCorrect": false
                    },
                    {
                        "option": " la despolarización auricular.",
                        "isCorrect": false
                    },
                    {
                        "option": " la despolarización ventricular.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "Sobre el aparato reproductor femenino:",
                "options": [
                    {
                        "option": " La pared del útero está formada desde afuera hacia adentro por endometrio, miometrio y serosa o perimetrio.",
                        "isCorrect": false
                    },
                    {
                        "option": " El útero es un órgano muscular de gran capacidad elástica, presenta un fondo, cuerpo y cuello o cérvix.",
                        "isCorrect": true
                    },
                    {
                        "option": " Los ovarios son glándulas de secreción endocrina y exocrina, originan óvulos y esteroides.",
                        "isCorrect": false
                    },
                    {
                        "option": " Las trompas uterinas por su pabellón y fimbrias se relacionan con el útero.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En el mecanismo de la contracción muscular:",
                "options": [
                    {
                        "option": " la unidad contráctil muscular es la miofibrilla.",
                        "isCorrect": false
                    },
                    {
                        "option": " los filamentos finos se deslizan sobre los gruesos.",
                        "isCorrect": true
                    },
                    {
                        "option": " la unión actina-miosina no requiere gasto de energía (ATP",
                        "isCorrect": false
                    },
                    {
                        "option": " el neurotrasmisor que interviene en la liberación del Ca++ es la noradrenalina.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿En qué estructuras del riñón ocurre la filtración desde el plasma sanguíneo?",
                "options": [
                    {
                        "option": " en los corpúsculos renales",
                        "isCorrect": true
                    },
                    {
                        "option": " en los túbulos proximales",
                        "isCorrect": false
                    },
                    {
                        "option": " en los túbulos colectores",
                        "isCorrect": false
                    },
                    {
                        "option": " en los túbulos distales",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Durante el potencial de acción sucede uno de los siguientes eventos:",
                "options": [
                    {
                        "option": " entrada masiva de Na+ al interior de la célula.",
                        "isCorrect": true
                    },
                    {
                        "option": " entrada masiva de K+ al interior de la célula.",
                        "isCorrect": false
                    },
                    {
                        "option": " salida masiva de Ca++desde la célula.",
                        "isCorrect": false
                    },
                    {
                        "option": " salida masiva de Na+ desde la célula.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Sobre la estructura proteica:",
                "options": [
                    {
                        "option": " La estructura primaria está dada por la secuencia de residuos de aminoácidos unidos entre sí por interacciones hidrofóbicas",
                        "isCorrect": false
                    },
                    {
                        "option": " La estructura secundaria es la disposición en el espacio de una única cadena polipeptídica y define la función de la proteína",
                        "isCorrect": false
                    },
                    {
                        "option": " La hélice alfa y hoja Beta son los patrones de estructura terciaria más característicos",
                        "isCorrect": false
                    },
                    {
                        "option": " La estructura cuaternaria es la conformación tridimensional que adoptan dos o más subunidades polipeptídicas",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "La hemostasis es una secuencia de reacciones que detienen el sangrado luego una herida. Sobre el proceso de coagulación indique la opción correcta:",
                "options": [
                    {
                        "option": " La vía extrínseca e intrínseca llevan a la activación de la protrombinasa, enzima que convierte la protrombina en trombina.",
                        "isCorrect": true
                    },
                    {
                        "option": " La vía extrínseca e intrínseca se activan por el mismo mecanismo: la exposición del factor tisular extravascular.",
                        "isCorrect": false
                    },
                    {
                        "option": " La trombina convierte el plasminógeno en plasmina, lo que digiere el coagulo sanguíneo.",
                        "isCorrect": false
                    },
                    {
                        "option": " Los factores de coagulación se sintetizan activos.",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En relación a los grandes vasos:",
                "options": [
                    {
                        "option": " La aorta descendente en su porción abdominal se extiende desde el orificio del diafragma hasta aproximadamente la cuarta vértebra lumbar, donde se divide en las 4 arterias iliacas",
                        "isCorrect": false
                    },
                    {
                        "option": " La vena cava inferior conduce a la aurícula izquierda la sangre de la parte inferior del cuerpo, en especial de los miembros inferiores, de los órganos intra-abdominales y pelvianos",
                        "isCorrect": false
                    },
                    {
                        "option": " La vena cava superior lleva a la aurícula derecha , la sangre de la cabeza, del cuello, de los miembros superiores y de la pared torácica",
                        "isCorrect": true
                    },
                    {
                        "option": " El cayado de la aorta se extiende desde la base del ventrículo derecho hasta aproximadamente la cuarta vertebra torácica",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "El epitelio de los alvéolos pulmonares es:",
                "options": [
                    {
                        "option": " simple plano",
                        "isCorrect": true
                    },
                    {
                        "option": " simple cúbico",
                        "isCorrect": false
                    },
                    {
                        "option": " simple cilíndrico",
                        "isCorrect": false
                    },
                    {
                        "option": " pseudoestratificado cilíndrico",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En el hígado, las células epiteliales hepáticas (hepatocitos) se organizan en láminas y cordones que conforman lobulillos con una vena en el centro y espacios portales en la periferia. Dentro de estos lobulillos clásicos, además de los hepatocitos podemos encontrar:",
                "options": [
                    {
                        "option": " ramas de la arteria hepática",
                        "isCorrect": false
                    },
                    {
                        "option": " ramas de la vena porta",
                        "isCorrect": false
                    },
                    {
                        "option": " sinusoides hepáticos",
                        "isCorrect": true
                    },
                    {
                        "option": " conductos biliares",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "En relación a los huesos y las articulaciones:",
                "options": [
                    {
                        "option": " La escapula u omóplato es un hueso corto y participa de la articulación del hombro",
                        "isCorrect": false
                    },
                    {
                        "option": " El miembro superior a través de la articulación del hombro tiene movimientos en los 3 ejes del espacio",
                        "isCorrect": true
                    },
                    {
                        "option": " El fémur es un hueso largo, que no presenta inserciones musculares pero forma el esqueleto del muslo",
                        "isCorrect": false
                    },
                    {
                        "option": " La pelvis ósea está constituida por dos grandes huesos articulados entre sí por delante y por detrás, llamados huesos coxales",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Un tejido que tiene varios tipos de células separadas por gran cantidad de matriz extracelular y que tiene vasos sanguíneos corresponde a un tejido de tipo:",
                "options": [
                    {
                        "option": " conjuntivo",
                        "isCorrect": true
                    },
                    {
                        "option": " muscular",
                        "isCorrect": false
                    },
                    {
                        "option": " nervioso",
                        "isCorrect": false
                    },
                    {
                        "option": " epitelial",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Con respecto a los glóbulos blancos:",
                "options": [
                    {
                        "option": " tienen forma de disco bicóncavo.",
                        "isCorrect": false
                    },
                    {
                        "option": " solo algunos subtipos presentan núcleo.",
                        "isCorrect": false
                    },
                    {
                        "option": " participan en la coagulación de la sangre.",
                        "isCorrect": false
                    },
                    {
                        "option": " salen de los vasos hacia el tejido para cumplir sus funciones.",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Qué órgano elige al Rector?",
                "options": [
                    {
                        "option": " Consejo Directivo Central",
                        "isCorrect": false
                    },
                    {
                        "option": " Asamblea General del Claustro",
                        "isCorrect": true
                    },
                    {
                        "option": " Asamblea del Claustro de Facultad",
                        "isCorrect": false
                    },
                    {
                        "option": " Comisión Programática Presupuestal",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Quién es el actual rector de la Universidad de la República?",
                "options": [
                    {
                        "option": " Rodrigo Arocena",
                        "isCorrect": false
                    },
                    {
                        "option": " Roberto Markarian",
                        "isCorrect": false
                    },
                    {
                        "option": " Rafael Guarga",
                        "isCorrect": false
                    },
                    {
                        "option": " Rodrigo Arim",
                        "isCorrect": true
                    }
                ]
            },
            {
                "question": "¿Quién designa los representantes de los órdenes graduados, docentes y estudiantes del CDC?",
                "options": [
                    {
                        "option": " Consejo Directivo Central",
                        "isCorrect": false
                    },
                    {
                        "option": " Asamblea General del Claustro",
                        "isCorrect": true
                    },
                    {
                        "option": " Asamblea de Claustro de Facultad",
                        "isCorrect": false
                    },
                    {
                        "option": " Comisión Programática presupuestal",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "Según la Ley Orgánica de 1958: ¿cuál de estos organismos fue consagrado por la Constitución como órgano “rector” de la Universidad",
                "options": [
                    {
                        "option": " Consejo Directivo Central",
                        "isCorrect": true
                    },
                    {
                        "option": " Consejo Delegado Académico",
                        "isCorrect": false
                    },
                    {
                        "option": " Asamblea General del Claustro",
                        "isCorrect": false
                    },
                    {
                        "option": " Comisión Programática Presupuestal",
                        "isCorrect": false
                    }
                ]
            },
            {
                "question": "¿Cómo se llama el actual decano de Facultad de Medicina?",
                "options": [
                    {
                        "option": " Luis Leopold",
                        "isCorrect": false
                    },
                    {
                        "option": " Rodrigo Arim",
                        "isCorrect": false
                    },
                    {
                        "option": " Miguel Martínez",
                        "isCorrect": true
                    },
                    {
                        "option": " Fernando Tomassina",
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
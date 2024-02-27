const questions = [
    {
      question: "Cuando debes enfrentarte a buscar soluciones a una situación, tu:",
      options: ["Prefieres esperar la opinión de otros", "Te aseguras de cada paso antes de actuar", "Sueles ver oportunidades para mejorar"],
      correctOption: 2,
    },
    {
      question: "Cuando buscas que los demás sigan tu idea y hagan lo que quieres, tú:",
      options: ["Presentas tu idea bien estructurada, con esquemas y visión de futuro", "Inicias la ejecución y muestras los resultados", "Hablas de tu idea desde la importancia y el beneficio que traería ejecutarla"],
      correctOption: 1,
    },
    {
      question: "¿Cuáles son sus puntos fuertes y débiles?",
      options: ["Soy bueno en comunicarme con los demás", "Soy bueno en resolver problemas matemáticos", "Soy bueno en trabajar en equipo"],
      correctOption: 2,
    },
    {
      question: "¿Qué intereses o aficiones tiene?",
      options: ["Me gusta leer sobre tecnología", "Me gusta jugar videojuegos", "Me gusta hacer deporte"],
      correctOption: 1,
    },
    {
      question: "¿Debo hacer un test de aptitud profesional?",
      options: ["No", "Sí", "No lo sé"],
      correctOption: 1,
    },
    {
      question: "¿Qué tamaño buscas en el mercado laboral?",
      options: ["Pequeño", "Mediano", "Grande"],
      correctOption: 2,
    },
    {
      question: "¿Sigo mi profesión o hago caso a lo que quieren mis padres?",
      options: ["Sigo mi profesión", "Hago caso a lo que quieren mis padres", "Aún no lo sé"],
      correctOption: 0,
    },
    {
      question: "Cuando debes ejecutar algún proyecto de gran importancia para ti:",
      options: ["Buscas información suficiente para desarrollarlo solo", "Buscas una persona que tenga el conocimiento para liderar el proceso", "Utilizas el conocimiento que tienes y lo desarrollas"],
      correctOption: 1,
    },
    {
      question: "Cuando te propones hacer dieta, ir al gimnasio y estudiar otro idioma, entre otras actividades, tú:",
      options: ["Inicias con mucha fuerza para lograr el objetivo y no te detienes hasta terminar", "refieres buscar la manera de hacerlo en casa o que no implique mucho desplazamiento", "Inicias con mucha fuerza pero las situaciones del entorno te hacen detenerte"],
      correctOption: 0,
    },
    {
      question: "Cuando crees que ha habido una interpretación errónea de tus actos, tu:",
      options: ["Escuchas la apreciación que generaron de ti e intentas aclararla.", "Partes de la obviedad y dejas que el tiempo se encargue de aclarar la situación", "Demuestras con hechos que la percepción está mal"],
      correctOption: 0,
    },
    {
      question: "Si tuvieras un blog temático, lo desarrollarías a partir de:",
      options: ["Los avances empresariales que suavizan la crisis económica", "La inversión tecnológica para evitar catástrofes ambientales", "Las nuevas posibilidades que favorecen la calidad de vida"],
      correctOption: 0,
    },
    {
      question: "Cuando piensas en tu desarrollo profesional, te visualizas:",
      options: ["Organizando planes y estrategias para la optimización de recursos", "Organizando planes y estrategias para la optimización de recursos", "Generando ideas innovadoras que contribuyan en el desarrollo de la humanidad"],
      correctOption: 0,
    },
    {
      question: "Cuando piensas en elegir carrera, lo primero que se viene a tu mente es:",
      options: ["El dinero que me va a generar es lo más importante", "Me interesa desarrollarme como persona y sentirme pleno", "Me haría feliz dirigir personas para un fin común"],
      correctOption: 0,
    },
    {
      question: "Si hicieras parte importante de la creación de un producto, te enfocarías en",
      options: ["Que el empaque sea innovador y llamativo", "Que la relación precio - calidad genere rentabilidad", "Que supla necesidades específicas de las personas"],
      correctOption: 1,
    },
    {
      question: "Si tuvieras la oportunidad de trabajar con un grupo artístico, te enfocarías en:",
      options: ["El diseño creativo de la imagen del grupo", "a divulgación en diferentes medios a nivel nacional e internacional y el registro de cada paso", "La organización y producción de las giras"],
      correctOption: 1,
    },
    {
      question: "Si hicieras parte de un equipo para la atención y prevención de desastres, ¿qué lugar te gustaría ocupar?",
      options: ["Apoyo humanitario en sitios afectados", "Reconstrucción de infraestructuras y servicios", "Planeación y distribución de los recursos para los programas"],
      correctOption: 2,
    },
    {
      question: "Si en tu lugar de trabajo tuvieras una emergencia en el proceso de producción, tu rol sería:",
      options: ["Calcular cifras de daños y pérdidas, para crear un nuevo plan de acción", "Contacto con clientes para generar un plan de plazos en la entrega", "Organizar el proceso de inspección de maquinaria y seguridad en el trabajo"],
      correctOption: 2,
    },
    {
      question: "Para lograr el desarrollo de tus objetivos, tú prefieres:",
      options: ["Seguir los lineamientos de alguien más", "Planear el proceso y desarrollarlo por etapas", "Tener a alguien que te rete a hacerlo más rápido y mejor"],
      correctOption: 1,
    },
    {
      question: "Cuando vas a un restaurante y tienes que pagar, lo más importante para ti es:",
      options: ["Hacer el balance entre el precio y la calidad", "La variedad en la carta de platos", "Que la ambientación y decoración estén acordes con el momento"],
      correctOption: 1,
    },
    {
      question: "Como líder profesional, te gustaría enseñarle a tu equipo de trabajo sobre:",
      options: ["Cómo llevar la contabilidad y las estadísticas financieras de la organización", "Cómo liderar procesos para favorecer los resultados de la empresa y las personas.", "Cómo ofertar un producto, distribuirlo y generar nuevos negocios"],
      correctOption: 0,
    },
    {
      question: "Dentro de las actividades que le dan valor a tu vida, podrías elegir:",
      options: ["Trabajar en comunicaciones donde se necesiten varios idiomas", "Trabajar en comunicaciones internas", "Trabajar en comunicaciones y publicidad"],
      correctOption: 1,
    },
    {
      question: "Si pudieras describirte en una palabra, ¿cuál de las siguientes elegirías?",
      options: ["Intuición", "Persuasión", "Organización"],
      correctOption: 1,
    },
    {
      question: "Que habilidades te gustaría desarrollar como profesional:",
      options: ["Creatividad y artes", "Capacidad numérica", "Comunicación en varios idiomas"],
      correctOption: 0,
    },
    {
      question: "Prefieres expresarte a partir de:",
      options: ["El arte y la música", "Ciencias exactas (matemáticas)", "Manualidades (armar, desarmar, restaurar)"],
      correctOption: 2,
    },
    {
      question: "Al enfocar tu carrera profesional, preferirías:",
      options: ["Crear sistemas de avance en tecnología", "Coordinar programas ambientales y/o sostenibles", "Generar intercambio cultural"],
      correctOption: 1,
    },
    {
      question: "Al elegir una carrera profesional, tú:",
      options: ["Te asesoras de amigos y conocidos", "Revisas y validas la información que te llega sobre la reputación del programa académico", "Buscas diferentes universidades para ver los horarios y la duración de sus programas académicos"],
      correctOption: 1,
    },
    {
      question: "Su posición general frente a las universidades es:",
      options: ["Es mejor estudiar en la universidad más reconocida", "Es mejor estudiar en la universidad que mis amigos o familiares conocen", "Es mejor que la universidad sea buena, no la más costosa, pero buena"],
      correctOption: 1,
    },
    {
      question: "Aprendo mejor:",
      options: ["Ninguna de las anteriores, es suficiente con la información que recibo en clase", "Cuando interactúo en clase, que cuando estudio solo en casa", "Estudiando, leyendo e investigando únicamente lo que veo en clase"],
      correctOption: 2,
    },
    // ... more questions
  ];
  
  const questionElement = document.getElementById("question");
  const nextBtn = document.getElementById("next-btn");
  const clearBtn = document.getElementById("clear-btn");
  const resultElement = document.getElementById("result");
  
  function getRandomIndices(length, count) {
    const indices = [];
    while (indices.length < count) {
      const randomIndex = Math.floor(Math.random() * length);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  }
  
  const shuffledQuestionIndices = getRandomIndices(questions.length, 10);
  let currentQuestionIndex = 0;
  
  function showQuestion() {
    if (currentQuestionIndex === shuffledQuestionIndices.length) {
      showResult();
      return;
    }
  
    const questionIndex = shuffledQuestionIndices[currentQuestionIndex];
    const question = questions[questionIndex];
    questionElement.innerHTML = `
      <h2>${question.question}</h2>
      ${question.options
        .map(
          (option, index) => `
        <label>
          <input type="radio" name="option" value="${index}" />
          ${option}
        </label>
      `
        )
        .join("")}
    `;
  }
  
  function saveAnswer() {
    const selectedOption = Number(document.querySelector('input[name="option"]:checked').value);
    questions[shuffledQuestionIndices[currentQuestionIndex]].selectedOption = selectedOption;
    currentQuestionIndex++;
    if (currentQuestionIndex === shuffledQuestionIndices.length) {
      showResult();
    } else {
      showQuestion();
    }
  }
  
  function showResult() {
    let score = 0;
    questions.forEach((question) => {
      if (question.selectedOption === question.correctOption) {
        score += 10;
      }
    });
  
    let career;
    if (score >= 60) {
      career = "SALUD";
    } else if (score >= 50) {
      career = "INGENIERIA";
    } else if (score >= 40) {
      career = "CIENCIAS";
    } else if (score >= 30) {
      career = "ARTE Y MUSICA";
    } else {
      career = "NO SE RECOMIENDA NINGUNA CARRERA";
    }
  
    resultElement.textContent = `LA CARRERA RECOMENDADA PARA TI ES  ${career}.`;
  }
  
  function clearAnswers() {
    questions.forEach((question) => {
      question.selectedOption = null;
    });
    currentQuestionIndex = 0;
    showQuestion();
  }
  
  nextBtn.addEventListener("click", saveAnswer);
  clearBtn.addEventListener("click", clearAnswers);
  
  showQuestion();
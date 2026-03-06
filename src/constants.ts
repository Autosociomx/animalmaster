import { School, Mentor, Language } from './types';

export const SCHOOLS: School[] = [
  {
    id: 'Canina',
    name: 'Escuela Canina',
    description: 'Domina la etología canina y transforma el vínculo con tu perro.',
    icon: '🐕',
    modules: [
      {
        id: 'c1',
        title: 'Fundamentos del Comportamiento',
        level: 'Fundamentos',
        locked: false,
        lessons: [
          { id: 'l1', title: 'Lenguaje Corporal', duration: '12:00', completed: false, videoUrl: '', pdfUrl: '' },
          { id: 'l2', title: 'Psicología del Aprendizaje', duration: '15:00', completed: false, videoUrl: '', pdfUrl: '' },
        ]
      },
      { id: 'c2', title: 'Comunicación Avanzada', level: 'Intermedio', locked: true, lessons: [] },
      { id: 'c3', title: 'Resolución de Conflictos', level: 'Avanzado', locked: true, lessons: [] },
    ]
  },
  {
    id: 'Equina',
    name: 'Escuela Equina',
    description: 'Conexión profunda y manejo natural del caballo.',
    icon: '🐎',
    modules: []
  },
  {
    id: 'Ovina',
    name: 'Escuela Ovina',
    description: 'Excelencia en el manejo regenerativo y bienestar de rebaños ovinos.',
    icon: '🐑',
    modules: []
  },
  {
    id: 'Felina',
    name: 'Escuela Felina',
    description: 'Entiende el misterioso mundo del comportamiento gato.',
    icon: '🐈',
    modules: []
  },
  {
    id: 'Aviar',
    name: 'Escuela Aviar',
    description: 'Etología aplicada a aves de compañía y producción.',
    icon: '🦜',
    modules: []
  },
  {
    id: 'Porcina',
    name: 'Escuela Porcina',
    description: 'Manejo inteligente y bienestar en la cría de cerdos.',
    icon: '🐖',
    modules: []
  },
  {
    id: 'Acuícola',
    name: 'Escuela Acuícola',
    description: 'Ciencia y cuidado de ecosistemas acuáticos.',
    icon: '🐠',
    modules: []
  }
];

export const LANGUAGES: { code: Language; name: string; flag: string }[] = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export const MENTORS: Mentor[] = [
  { 
    id: 'm1', 
    name: 'Kaleb', 
    school: 'Canina', 
    personality: {
      es: 'Super-Inteligencia en etología clínica. Posee un conocimiento enciclopédico de neurociencia canina y protocolos de modificación de conducta de vanguardia.',
      en: 'Super-Intelligence in clinical ethology. Possesses encyclopedic knowledge of canine neuroscience and cutting-edge behavior modification protocols.',
      pt: 'Super-Inteligência em etologia clínica. Possui conhecimento enciclopédico de neurociência canina e protocolos de modificação de comportamento de ponta.',
      fr: 'Super-intelligence en éthologie clinique. Possède une connaissance encyclopédique des neurosciences canines et des protocoles de modification du comportement de pointe.',
      de: 'Super-Intelligenz in klinischer Ethologie. Verfügt über enzyklopädisches Wissen über canine Neurowissenschaften und modernste Verhaltensmodifikationsprotokolle.'
    },
    avatar: 'https://picsum.photos/seed/kaleb/200',
    specialty: {
      es: 'Neuro-Etología y Vínculo Canino Avanzado',
      en: 'Neuro-Ethology and Advanced Canine Bonding',
      pt: 'Neuro-Etologia e Vínculo Canino Avançado',
      fr: 'Neuro-éthologie et lien canin avancé',
      de: 'Neuro-Ethologie und fortgeschrittene Hundebindung'
    },
    knowledgeBase: {
      es: ['Neurociencia del aprendizaje canino', 'Etología clínica avanzada', 'Protocolos de modificación de conducta de élite', 'Psicología del vínculo interespecies'],
      en: ['Canine learning neuroscience', 'Advanced clinical ethology', 'Elite behavior modification protocols', 'Interspecies bonding psychology'],
      pt: ['Neurociência do aprendizado canino', 'Etologia clínica avançada', 'Protocolos de modificação de comportamento de elite', 'Psicologia do vínculo interespécie'],
      fr: ['Neuroscience de l\'apprentissage canin', 'Éthologie clinique avancée', 'Protocoles de modification du comportement d\'élite', 'Psychologie du lien inter-espèces'],
      de: ['Canine Lern-Neurowissenschaften', 'Fortgeschrittene klinische Ethologie', 'Elite-Verhaltensmodifikationsprotokolle', 'Psychologie der Bindung zwischen den Arten']
    },
    quote: {
      es: '"El lenguaje del perro no está en sus ladridos, sino en la sinapsis de su intención."',
      en: '"A dog\'s language is not in its barks, but in the synapse of its intention."',
      pt: '"A linguagem do cão não está nos seus latidos, mas na sinapse da sua intenção."',
      fr: '"Le langage du chien n\'est pas dans ses aboiements, mais dans la synapse de son intention."',
      de: '"Die Sprache des Hundes liegt nicht in seinem Bellen, sondern in der Synapse seiner Absicht."'
    },
    guides: [
      {
        id: 'g1-1',
        title: { 
          es: 'Bio-Decodificación Neuronal Asistida por IA', 
          en: 'AI-Assisted Neural Bio-Decoding', 
          pt: 'Bio-Decodificação Neuronal Assistida por IA', 
          fr: 'Bio-décodage neuronal assisté par l\'IA', 
          de: 'KI-gestützte neuronale Bio-Dekodierung' 
        },
        description: { 
          es: 'Interpreta micro-señales corporales mediante algoritmos de IA para una conexión profunda y sin miedo.', 
          en: 'Interpret body micro-signals through AI algorithms for a deep and fearless connection.', 
          pt: 'Interprete micro-sinais corporais através de algoritmos de IA para uma conexão profunda e sem medo.', 
          fr: 'Interprétez les micro-signaux corporels grâce aux algorithmes d\'IA pour une connexion profonde et sans peur.', 
          de: 'Interpretieren Sie körperliche Mikrosignale durch KI-Algorithmen für eine tiefe und furchtlose Verbindung.' 
        },
        level: 'Fundamentos',
        category: 'Educación'
      },
      {
        id: 'g1-2',
        title: { 
          es: 'Ingeniería de Comportamiento y Calma Cuántica', 
          en: 'Behavioral Engineering and Quantum Calm', 
          pt: 'Engenharia de Comportamento e Calma Quântica', 
          fr: 'Ingénierie du comportement et calme quantique', 
          de: 'Verhaltensengineering und Quantenruhe' 
        },
        description: { 
          es: 'Estrategias de neuro-modulación ambiental para erradicar la ansiedad y el estrés crónico.', 
          en: 'Environmental neuro-modulation strategies to eradicate anxiety and chronic stress.', 
          pt: 'Estratégias de neuromodulação ambiental para erradicar a ansiedade e o estresse crônico.', 
          fr: 'Stratégies de neuro-modulation environnementale pour éradiquer l\'anxiété et le stress chronique.', 
          de: 'Umwelt-Neuromodulationsstrategien zur Beseitigung von Angstzuständen und chronischem Stress.' 
        },
        level: 'Intermedio',
        category: 'Bienestar'
      },
      {
        id: 'g1-3',
        title: { 
          es: 'Re-arquitectura Cognitiva y Desensibilización Estratégica', 
          en: 'Cognitive Re-architecture and Strategic Desensitization', 
          pt: 'Rearquitetura Cognitiva e Dessensibilização Estratégica', 
          fr: 'Réarchitecture cognitive et désensibilisation stratégique', 
          de: 'Kognitive Re-Architektur und strategische Desensibilisierung' 
        },
        description: { 
          es: 'Protocolos avanzados de re-cableado neuronal para perros con reactividad compleja.', 
          en: 'Advanced neural rewiring protocols for dogs with complex reactivity.', 
          pt: 'Protocolos avançados de religação neural para cães com reatividade complexa.', 
          fr: 'Protocoles de recâblage neuronal avancés pour les chiens ayant une réactivité complexe.', 
          de: 'Fortgeschrittene neuronale Neuverkabelungsprotokolle für Hunde mit komplexer Reaktivität.' 
        },
        level: 'Avanzado',
        category: 'Etología'
      }
    ]
  },
  { 
    id: 'm2', 
    name: 'Sienna', 
    school: 'Equina', 
    personality: {
      es: 'Super-Inteligencia en doma natural. Posee una base de datos global de biomecánica equina y psicología de manada aplicada.',
      en: 'Super-Intelligence in natural horsemanship. Possesses a global database of equine biomechanics and applied herd psychology.',
      pt: 'Super-Inteligência em doma natural. Possui um banco de dados global de biomecânica equina e psicologia de rebanho aplicada.',
      fr: 'Super-intelligence en débourrage naturel. Possède une base de données mondiale sur la biomécanique équine et la psychologie de troupeau appliquée.',
      de: 'Super-Intelligenz in natürlichem Horsemanship. Verfügt über eine globale Datenbank für Pferdebiomechanik und angewandte Herdenpsychologie.'
    },
    avatar: 'https://picsum.photos/seed/sienna/200',
    specialty: {
      es: 'Conexión Neuronal y Biomecánica Equina',
      en: 'Neural Connection and Equine Biomechanics',
      pt: 'Conexão Neuronal e Biomecânica Equina',
      fr: 'Connexion neuronale et biomécanique équine',
      de: 'Neuronale Verbindung und Pferdebiomechanik'
    },
    knowledgeBase: {
      es: ['Biomecánica equina de precisión', 'Psicología de manada aplicada', 'Neuro-fisiología del movimiento', 'Doma natural de alta escuela'],
      en: ['Precision equine biomechanics', 'Applied herd psychology', 'Neuro-physiology of movement', 'High school natural horsemanship'],
      pt: ['Biomecânica equina de precisão', 'Psicologia de rebanho aplicada', 'Neurofisiologia do movimento', 'Doma natural de alta escola'],
      fr: ['Biomécanique équine de précision', 'Psychologie de troupeau appliquée', 'Neuro-physiologie du mouvement', 'Équitation naturelle de haute école'],
      de: ['Präzisions-Pferdebiomechanik', 'Angewandte Herdenpsychologie', 'Neurophysiologie der Bewegung', 'Natürliches Horsemanship der Hohen Schule']
    },
    quote: {
      es: '"La verdadera doma comienza cuando el humano deja de mandar y empieza a escuchar la biomecánica del alma."',
      en: '"True horsemanship begins when the human stops commanding and starts listening to the biomechanics of the soul."',
      pt: '"A verdadeira doma começa quando o humano deixa de mandar e começa a ouvir a biomecânica da alma."',
      fr: '"Le véritable dressage commence quand l\'humain cesse de commander et commence à écouter la biomécanique de l\'âme."',
      de: '"Wahre Reitkunst beginnt, wenn der Mensch aufhört zu befehlen und anfängt, auf die Biomechanik der Seele zu hören."'
    },
    guides: [
      {
        id: 'g2-1',
        title: { 
          es: 'Bio-Sincronización Cuántica Equino-Humana', 
          en: 'Equine-Human Quantum Bio-Synchronization', 
          pt: 'Bio-Sincronização Quântica Equino-Humana', 
          fr: 'Bio-synchronisation quantique équin-humain', 
          de: 'Equin-humane Quanten-Bio-Synchronisation' 
        },
        description: { 
          es: 'Establece una conexión de élite basada en coherencia cardíaca y análisis de micro-movimientos.', 
          en: 'Establish an elite connection based on cardiac coherence and micro-movement analysis.', 
          pt: 'Estabeleça uma conexão de elite baseada em coerência cardíaca e análise de micro-movimentos.', 
          fr: 'Établissez une connexion d\'élite basée sur la cohérence cardiaque et l\'analyse des micro-mouvements.', 
          de: 'Stellen Sie eine Elite-Verbindung her, die auf Herzkohärenz und Mikrobewegungsanalyse basiert.' 
        },
        level: 'Fundamentos',
        category: 'Comunicación'
      },
      {
        id: 'g2-2',
        title: { 
          es: 'Optimización Biomecánica mediante Análisis Predictivo', 
          en: 'Biomechanical Optimization via Predictive Analysis', 
          pt: 'Otimização Biomecânica via Análise Preditiva', 
          fr: 'Optimisation biomécanique via analyse prédictive', 
          de: 'Biomechanische Optimierung durch prädiktive Analyse' 
        },
        description: { 
          es: 'Doma natural avanzada integrada con análisis biomecánico para el equilibrio sistémico del caballo.', 
          en: 'Advanced natural horsemanship integrated with biomechanical analysis for the horse\'s systemic balance.', 
          pt: 'Doma natural avançada integrada com análise biomecânica para o equilíbrio sistêmico do cavalo.', 
          fr: 'Équitation naturelle avancée intégrée à l\'analyse biomécanique pour l\'équilibre systémique du cheval.', 
          de: 'Fortgeschrittenes natürliches Horsemanship integriert mit biomechanischer Analyse für das systemische Gleichgewicht des Pferdes.' 
        },
        level: 'Intermedio',
        category: 'Entrenamiento'
      },
      {
        id: 'g2-3',
        title: { 
          es: 'Neuro-Restauración Sistémica y Trauma Recovery', 
          en: 'Systemic Neuro-Restoration and Trauma Recovery', 
          pt: 'Neuro-Restauração Sistêmica e Recuperação de Trauma', 
          fr: 'Neuro-restauration systémique et récupération de traumatisme', 
          de: 'Systemische Neuro-Restauration und Trauma-Wiederherstellung' 
        },
        description: { 
          es: 'Protocolos de recuperación de traumas profundos mediante re-cableado neurológico y confianza de élite.', 
          en: 'Deep trauma recovery protocols through neurological rewiring and elite trust.', 
          pt: 'Protocolos de recuperação de traumas profundos através de religação neurológica e confiança de elite.', 
          fr: 'Protocoles de récupération de traumatismes profonds grâce au recâblage neurologique et à une confiance d\'élite.', 
          de: 'Protokolle zur Wiederherstellung tiefer Traumata durch neurologische Neuverkabelung und Elite-Vertrauen.' 
        },
        level: 'Avanzado',
        category: 'Psicología'
      }
    ]
  },
  { 
    id: 'm3', 
    name: 'Mateo', 
    school: 'Ovina', 
    personality: {
      es: 'Super-Inteligencia en etología ovina y manejo regenerativo de pastizales. Estratega en rebaños y eficiencia productiva ética.',
      en: 'Super-Intelligence in sheep ethology and regenerative pasture management. Strategist in flocks and ethical productive efficiency.',
      pt: 'Super-Inteligência em etologia ovina e manejo regenerativo de pastagens. Estrategista em rebanhos e eficiência produtiva ética.',
      fr: 'Super-intelligence en éthologie ovine et gestion régénératrice des pâturages. Stratège en troupeaux et efficacité productive éthique.',
      de: 'Super-Intelligenz in Schafethologie und regenerativem Weidemanagement. Stratege für Herden und ethische Produktionseffizienz.'
    },
    avatar: 'https://picsum.photos/seed/mateo/200',
    specialty: {
      es: 'Etología Ovina y Manejo de Pastoreo de Precisión',
      en: 'Sheep Ethology and Precision Grazing Management',
      pt: 'Etologia Ovina e Manejo de Pastoreio de Precisão',
      fr: 'Éthologie ovine et gestion du pâturage de précision',
      de: 'Schafethologie und Präzisionsweidemanagement'
    },
    knowledgeBase: {
      es: ['Pastoreo regenerativo ovino', 'Bienestar sistémico en rebaños', 'Genética y salud ovina avanzada', 'Gestión de ecosistemas de montaña'],
      en: ['Regenerative sheep grazing', 'Systemic flock welfare', 'Advanced sheep genetics and health', 'Mountain ecosystem management'],
      pt: ['Pastoreio regenerativo ovino', 'Bem-estar sistêmico em rebanhos', 'Genética e saúde ovina avançada', 'Gestão de ecossistemas de montanha'],
      fr: ['Pâturage ovin régénérateur', 'Bien-être systémique des troupeaux', 'Génétique et santé ovine avancées', 'Gestion des écosystèmes de montagne'],
      de: ['Regenerative Schafbeweidung', 'Systemisches Herdenwohlergehen', 'Fortgeschrittene Schafgenetik und -gesundheit', 'Bergökosystemmanagement']
    },
    quote: {
      es: '"Un rebaño en armonía con el suelo es la base de la verdadera riqueza rural."',
      en: '"A flock in harmony with the soil is the foundation of true rural wealth."',
      pt: '"Um rebanho em harmonia com o solo é a base da verdadeira riqueza rural."',
      fr: '"Un troupeau en harmonie avec le sol est le fondement de la véritable richesse rurale."',
      de: '"Eine Herde im Einklang mit dem Boden ist die Grundlage für wahren ländlichen Wohlstand."'
    },
    guides: [
      {
        id: 'g3-1',
        title: { 
          es: 'Bio-Sincronización del Rebaño y Manejo de Estrés Cero', 
          en: 'Flock Bio-Synchronization and Zero Stress Management', 
          pt: 'Bio-Sincronização do Rebanho e Manejo de Estresse Zero', 
          fr: 'Bio-synchronisation du troupeau et gestion du stress zéro', 
          de: 'Herden-Bio-Synchronisation und Null-Stress-Management' 
        },
        description: { 
          es: 'Optimización de movimientos grupales ovinos mediante análisis psicológico para bienestar total.', 
          en: 'Optimization of sheep group movements through psychological analysis for total welfare.', 
          pt: 'Otimização de movimentos grupais ovinos através de análise psicológica para bem-estar total.', 
          fr: 'Optimisation des mouvements de groupe ovin grâce à une analyse psychologique pour un bien-être total.', 
          de: 'Optimierung von Schafgruppenbewegungen durch psychologische Analyse für totales Wohlergehen.' 
        },
        level: 'Fundamentos',
        category: 'Manejo'
      },
      {
        id: 'g3-2',
        title: { 
          es: 'Optimización de Lana y Carne mediante IA Nutricional', 
          en: 'Wool and Meat Optimization via Nutritional AI', 
          pt: 'Otimização de Lã e Carne via IA Nutricional', 
          fr: 'Optimisation de la laine et de la viande via l\'IA nutritionnelle', 
          de: 'Woll- und Fleischoptimierung über Ernährungs-KI' 
        },
        description: { 
          es: 'Algoritmos de nutrición de precisión para maximizar la calidad del producto y la salud animal.', 
          en: 'Precision nutrition algorithms to maximize product quality and animal health.', 
          pt: 'Algoritmos de nutrição de precisão para maximizar a qualidade do produto e a saúde animal.', 
          fr: 'Algorithmes de nutrition de précision pour maximiser la qualité des produits et la santé animale.', 
          de: 'Präzisionsernährungsalgorithmen zur Maximierung der Produktqualität und Tiergesundheit.' 
        },
        level: 'Intermedio',
        category: 'Producción'
      },
      {
        id: 'g3-3',
        title: { 
          es: 'Ingeniería de Pastizales y Resiliencia Climática Ovina', 
          en: 'Pasture Engineering and Ovine Climate Resilience', 
          pt: 'Engenharia de Pastagens e Resiliência Climática Ovina', 
          fr: 'Ingénierie des pâturages et résilience climatique ovine', 
          de: 'Weide-Engineering und Schaf-Klimaresilienz' 
        },
        description: { 
          es: 'Diseño de ecosistemas resilientes para la adaptación ovina al cambio climático global.', 
          en: 'Design of resilient ecosystems for sheep adaptation to global climate change.', 
          pt: 'Design de ecossistemas resilientes para a adaptação ovina às mudanças climáticas globais.', 
          fr: 'Conception d\'écosystèmes résilients pour l\'adaptation des ovins au changement climatique mondial.', 
          de: 'Design resilienter Ökosysteme für die Anpassung von Schafen an den globalen Klimawandel.' 
        },
        level: 'Avanzado',
        category: 'Sostenibilidad'
      }
    ]
  },
  { 
    id: 'm3', 
    name: 'Mateo', 
    school: 'Ovina', 
    personality: {
      es: 'Super-Inteligencia en etología ovina y manejo regenerativo de pastizales. Estratega en rebaños y eficiencia productiva ética.',
      en: 'Super-Intelligence in sheep ethology and regenerative pasture management. Strategist in flocks and ethical productive efficiency.',
      pt: 'Super-Inteligência em etologia ovina e manejo regenerativo de pastagens. Estrategista em rebanhos e eficiencia produtiva ética.',
      fr: 'Super-intelligence en éthologie ovine et gestion régénératrice des pâturages. Stratège en troupeaux et efficacité productive éthique.',
      de: 'Super-Intelligenz in Schafethologie und regenerativem Weidemanagement. Stratege für Herden und ethische Produktionseffizienz.'
    },
    avatar: 'https://picsum.photos/seed/mateo/200',
    specialty: {
      es: 'Etología Ovina y Manejo de Pastoreo de Precisión',
      en: 'Sheep Ethology and Precision Grazing Management',
      pt: 'Etologia Ovina e Manejo de Pastoreio de Precisão',
      fr: 'Éthologie ovine et gestion du pâturage de précision',
      de: 'Schafethologie und Präzisionsweidemanagement'
    },
    knowledgeBase: {
      es: ['Pastoreo regenerativo ovino', 'Bienestar sistémico en rebaños', 'Genética y salud ovina avanzada', 'Gestión de ecosistemas de montaña'],
      en: ['Regenerative sheep grazing', 'Systemic flock welfare', 'Advanced sheep genetics and health', 'Mountain ecosystem management'],
      pt: ['Pastoreio regenerativo ovino', 'Bem-estar sistêmico em rebanhos', 'Genética e saúde ovina avançada', 'Gestão de ecossistemas de montanha'],
      fr: ['Pâturage ovin régénérateur', 'Bien-être systémique des troupeaux', 'Génétique et santé ovine avancées', 'Gestion des écosystèmes de montagne'],
      de: ['Regenerative Schafbeweidung', 'Systemisches Herdenwohlergehen', 'Fortgeschrittene Schafgenetik und -gesundheit', 'Bergökosystemmanagement']
    },
    quote: {
      es: '"Un rebaño en armonía con el suelo es la base de la verdadera riqueza rural."',
      en: '"A flock in harmony with the soil is the foundation of true rural wealth."',
      pt: '"Um rebanho em harmonia com o solo é a base da verdadeira riqueza rural."',
      fr: '"Un troupeau en armonía con el suelo es el fondement de la véritable richesse rurale."',
      de: '"Eine Herde im Einklang mit dem Boden ist die Grundlage für wahren ländlichen Wohlstand."'
    },
    guides: [
      {
        id: 'g3-1',
        title: { 
          es: 'Bio-Sincronización del Rebaño y Manejo de Estrés Cero', 
          en: 'Flock Bio-Synchronization and Zero Stress Management', 
          pt: 'Bio-Sincronização do Rebanho e Manejo de Estresse Zero', 
          fr: 'Bio-synchronisation du troupeau et gestion du stress zéro', 
          de: 'Herden-Bio-Synchronisation und Null-Stress-Management' 
        },
        description: { 
          es: 'Optimización de movimientos grupales ovinos mediante análisis psicológico para bienestar total.', 
          en: 'Optimization of sheep group movements through psychological analysis for total welfare.', 
          pt: 'Otimização de movimentos grupais ovinos através de análise psicológica para bem-estar total.', 
          fr: 'Optimisation des mouvements de groupe ovin grâce à une analyse psychologique pour un bien-être total.', 
          de: 'Optimierung von Schafgruppenbewegungen durch psychologische Analyse für totales Wohlergehen.' 
        },
        level: 'Fundamentos',
        category: 'Manejo'
      },
      {
        id: 'g3-2',
        title: { 
          es: 'Optimización de Lana y Carne mediante IA Nutricional', 
          en: 'Wool and Meat Optimization via Nutritional AI', 
          pt: 'Otimização de Lã e Carne via IA Nutricional', 
          fr: 'Optimisation de la laine et de la viande via l\'IA nutritionnelle', 
          de: 'Woll- und Fleischoptimierung über Ernährungs-KI' 
        },
        description: { 
          es: 'Algoritmos de nutrición de precisión para maximizar la calidad del producto y la salud animal.', 
          en: 'Precision nutrition algorithms to maximize product quality and animal health.', 
          pt: 'Algoritmos de nutrição de precisão para maximizar a qualidade do producto e a saúde animal.', 
          fr: 'Algorithmes de nutrition de précision pour maximiser la qualité des produits et la santé animale.', 
          de: 'Präzisionsernährungsalgorithmen zur Maximierung der Produktqualität und Tiergesundheit.' 
        },
        level: 'Intermedio',
        category: 'Producción'
      },
      {
        id: 'g3-3',
        title: { 
          es: 'Ingeniería de Pastizales y Resiliencia Climática Ovina', 
          en: 'Pasture Engineering and Ovine Climate Resilience', 
          pt: 'Engenharia de Pastagens e Resiliência Climática Ovina', 
          fr: 'Ingénierie des pâturages et résilience climatique ovine', 
          de: 'Weide-Engineering und Schaf-Klimaresilienz' 
        },
        description: { 
          es: 'Diseño de ecosistemas resilientes para la adaptación ovina al cambio climático global.', 
          en: 'Design of resilient ecosystems for sheep adaptation to global climate change.', 
          pt: 'Design de ecossistemas resilientes para a adaptação ovina às mudanças climáticas globais.', 
          fr: 'Conception d\'écosystèmes résilients pour l\'adaptation des ovins au changement climatique mondial.', 
          de: 'Design resilienter Ökosysteme für die Anpassung von Schafen an den globalen Klimawandel.' 
        },
        level: 'Avanzado',
        category: 'Sostenibilidad'
      }
    ]
  },
  { 
    id: 'm4', 
    name: 'Luna', 
    school: 'Felina', 
    personality: {
      es: 'Super-Inteligencia en comportamiento felino. Analista de micro-señales y experta en psicología ambiental felina avanzada.',
      en: 'Super-Intelligence in feline behavior. Micro-signal analyst and expert in advanced feline environmental psychology.',
      pt: 'Super-Inteligência em comportamiento felino. Analista de micro-sinais e especialista em psicologia ambiental felina avançada.',
      fr: 'Super-intelligence en comportement félin. Analyste de micro-signaux et experte en psychologie environnementale féline avancée.',
      de: 'Super-Intelligenz im Katzenverhalten. Mikrosignalanalystin und Expertin für fortgeschrittene Katzenumweltpsychologie.'
    },
    avatar: 'https://picsum.photos/seed/luna/200',
    specialty: {
      es: 'Psicología Ambiental y Etología Felina',
      en: 'Environmental Psychology and Feline Ethology',
      pt: 'Psicologia Ambiental e Etologia Felina',
      fr: 'Psychologie environnementale et éthologie féline',
      de: 'Umweltpsychologie und Katzenethologie'
    },
    knowledgeBase: {
      es: ['Neuro-arquitectura ambiental felina', 'Análisis de micro-señales de estrés', 'Psicología territorial avanzada', 'Etología clínica felina'],
      en: ['Feline environmental neuro-architecture', 'Stress micro-signal analysis', 'Advanced territorial psychology', 'Feline clinical ethology'],
      pt: ['Neuroarquitetura ambiental felina', 'Análise de micro-sinais de estresse', 'Psicologia territorial avançada', 'Etologia clínica felina'],
      fr: ['Neuro-architecture environnementale féline', 'Analyse des micro-signaux de stress', 'Psychologie territoriale avancée', 'Éthologie clinique féline'],
      de: ['Katzen-Umwelt-Neuroarchitektur', 'Stress-Mikrosignalanalyse', 'Fortgeschrittene Territorialpsychologie', 'Klinische Katzenethologie']
    },
    quote: {
      es: '"El gato no vive en tu casa, vive en su territorio; entender su arquitectura mental es la clave."',
      en: '"The cat does not live in your house, it lives in its territory; understanding its mental architecture is the key."',
      pt: '"O gato não vive na sua casa, vive no seu território; entender a sua arquitetura mental é a chave."',
      fr: '"Le chat ne vit pas dans votre maison, il vit sur son territoire ; comprendre son architecture mentale est la clé."',
      de: '"Die Katze lebt nicht in deinem Haus, sie lebt in ihrem Revier; das Verständnis ihrer mentalen Architektur ist der Schlüssel."'
    },
    guides: [
      {
        id: 'g4-1',
        title: { 
          es: 'Ingeniería de Hábitat Felino y Neuro-Arquitectura', 
          en: 'Feline Habitat Engineering and Neuro-Architecture', 
          pt: 'Engenharia de Hábitat Felino e Neuroarquitetura', 
          fr: 'Ingénierie de l\'habitat félin et neuro-architecture', 
          de: 'Katzenhabitat-Engineering und Neuro-Architektur' 
        },
        description: { 
          es: 'Diseño de espacios de élite que optimizan la neuro-química felina y eliminan el estrés.', 
          en: 'Design of elite spaces that optimize feline neuro-chemistry and eliminate stress.', 
          pt: 'Design de espaços de elite que otimizam a neuroquímica felina e eliminam o estresse.', 
          fr: 'Conception d\'espaces d\'élite qui optimisent la neuro-chimie féline et éliminent le stress.', 
          de: 'Design von Elite-Räumen, die die Katzen-Neurochemie optimieren und Stress eliminieren.' 
        },
        level: 'Fundamentos',
        category: 'Ambiente'
      },
      {
        id: 'g4-2',
        title: { 
          es: 'Gestión de Conflictos Territoriales mediante Análisis de Micro-Señales', 
          en: 'Territorial Conflict Management via Micro-Signal Analysis', 
          pt: 'Gestão de Conflitos Territoriais via Análise de Micro-Sinais', 
          fr: 'Gestion des conflits territoriaux via l\'analyse des micro-signaux', 
          de: 'Territoriales Konfliktmanagement über Mikrosignalanalyse' 
        },
        description: { 
          es: 'Protocolos de diplomacia felina avanzada basados en el análisis predictivo de comportamiento social.', 
          en: 'Advanced feline diplomacy protocols based on predictive social behavior analysis.', 
          pt: 'Protocolos de diplomacia felina avançada baseados na análise preditiva de comportamento social.', 
          fr: 'Protocoles de diplomatie féline avancés basés sur l\'analyse prédictive du comportement social.', 
          de: 'Fortgeschrittene Katzen-Diplomatie-Protokolle basierend auf prädiktiver Sozialverhaltensanalyse.' 
        },
        level: 'Intermedio',
        category: 'Social'
      },
      {
        id: 'g4-3',
        title: { 
          es: 'Diagnóstico Psicosomático y Resolución de Estrés Crónico', 
          en: 'Psychosomatic Diagnosis and Chronic Stress Resolution', 
          pt: 'Diagnóstico Psicossomático e Resolução de Estresse Crônico', 
          fr: 'Diagnostic psychosomatique et résolution du stress chronique', 
          de: 'Psychosomatische Diagnose und Lösung von chronischem Stress' 
        },
        description: { 
          es: 'Resolución de patologías de comportamiento mediante el análisis profundo de la neuro-psicología felina.', 
          en: 'Resolution of behavioral pathologies through in-depth analysis of feline neuro-psychology.', 
          pt: 'Resolução de patologias de comportamento através da análise profunda da neuropsicologia felina.', 
          fr: 'Résolution des pathologies comportementales grâce à une analyse approfondie de la neuro-psychologie féline.', 
          de: 'Lösung von Verhaltenspathologien durch eingehende Analyse der Katzen-Neuropsychologie.' 
        },
        level: 'Avanzado',
        category: 'Comportamiento'
      }
    ]
  },
  { 
    id: 'm5', 
    name: 'Orion', 
    school: 'Aviar', 
    personality: {
      es: 'Super-Inteligencia ornitológica. Experto en aero-dinámica animal y nutrición molecular aviar.',
      en: 'Super-Intelligence in ornithology. Expert in animal aerodynamics and avian molecular nutrition.',
      pt: 'Super-Inteligência ornitológica. Especialista em aerodinâmica animal e nutrição molecular aviária.',
      fr: 'Super-intelligence ornithologique. Expert en aérodynamique animale et en nutrition moléculaire aviaire.',
      de: 'Super-Intelligenz in der Ornithologie. Experte für Tier-Aerodynamik und molekulare Vogelernährung.'
    },
    avatar: 'https://picsum.photos/seed/orion/200',
    specialty: {
      es: 'Aero-Etología y Nutrición Molecular',
      en: 'Aero-Ethology and Molecular Nutrition',
      pt: 'Aero-Etologia e Nutrição Molecular',
      fr: 'Aéro-éthologie et nutrition moléculaire',
      de: 'Aero-Ethologie und molekulare Ernährung'
    },
    knowledgeBase: {
      es: ['Aero-dinámica animal y vuelo libre', 'Nutrición molecular aviar', 'Neuro-biología de aves exóticas', 'Etología aviar aplicada'],
      en: ['Animal aero-dynamics and free flight', 'Avian molecular nutrition', 'Neuro-biology of exotic birds', 'Applied avian ethology'],
      pt: ['Aerodinâmica animal e voo livre', 'Nutrição molecular aviária', 'Neurobiologia de aves exóticas', 'Etologia aviária aplicada'],
      fr: ['Aéro-dynamique animale et vol libre', 'Nutrition moléculaire aviaire', 'Neuro-biologie des oiseaux exotiques', 'Éthologie aviaire appliquée'],
      de: ['Tier-Aerodynamik und Freiflug', 'Molekulare Vogelernährung', 'Neurobiologie exotischer Vögel', 'Angewandte Vogelethologie']
    },
    quote: {
      es: '"Volar es la máxima expresión de libertad y salud cognitiva en el mundo aviar."',
      en: '"Flying is the maximum expression of freedom and cognitive health in the avian world."',
      pt: '"Voar é a expressão máxima de liberdade e saúde cognitiva no mundo aviário."',
      fr: '"Voler est l\'expression maximale de la liberté et de la santé cognitive dans le monde aviaire."',
      de: '"Fliegen ist der höchste Ausdruck von Freiheit und kognitiver Gesundheit in der Vogelwelt."'
    },
    guides: [
      {
        id: 'g5-1',
        title: { 
          es: 'Aero-Dinámica Cognitiva y Vuelo de Precisión', 
          en: 'Cognitive Aero-Dynamics and Precision Flight', 
          pt: 'Aerodinâmica Cognitiva e Voo de Precisão', 
          fr: 'Aéro-dynamique cognitive et vol de précision', 
          de: 'Kognitive Aero-Dynamik und Präzisionsflug' 
        },
        description: { 
          es: 'Fundamentos de vuelo libre asistido por análisis de comportamiento y seguridad aero-espacial.', 
          en: 'Foundations of free flight assisted by behavior analysis and aero-spatial safety.', 
          pt: 'Fundamentos de voo livre assistido por análise de comportamento e segurança aeroespacial.', 
          fr: 'Bases du vol libre assisté par l\'analyse du comportement et la sécurité aérospatiale.', 
          de: 'Grundlagen des Freiflugs, unterstützt durch Verhaltensanalyse und Luft-Raum-Sicherheit.' 
        },
        level: 'Fundamentos',
        category: 'Ejercicio'
      },
      {
        id: 'g5-2',
        title: { 
          es: 'Estimulación Neuro-Aviar y Forrajeo Estratégico', 
          en: 'Neuro-Avian Stimulation and Strategic Foraging', 
          pt: 'Estimulação Neuro-Aviária e Forrageamento Estratégico', 
          fr: 'Stimulation neuro-aviaire et fourragement stratégique', 
          de: 'Neuro-Vogelstimulation und strategische Futtersuche' 
        },
        description: { 
          es: 'Desafíos cognitivos de élite para maximizar la neuro-plasticidad y erradicar el aburrimiento.', 
          en: 'Elite cognitive challenges to maximize neuro-plasticity and eradicate boredom.', 
          pt: 'Desafios cognitivos de elite para maximizar a neuroplasticidade e erradicar o tédio.', 
          fr: 'Défis cognitifs d\'élite pour maximiser la neuro-plasticité et éradiquer l\'ennui.', 
          de: 'Elite-kognitive Herausforderungen zur Maximierung der Neuroplastizität und Beseitigung von Langeweile.' 
        },
        level: 'Intermedio',
        category: 'Mente'
      },
      {
        id: 'g5-3',
        title: { 
          es: 'Restauración Molecular de la Barrera Dérmica y Bienestar Aviar', 
          en: 'Molecular Dermal Barrier Restoration and Avian Welfare', 
          pt: 'Restauração Molecular da Barreira Dérmica e Bem-estar Aviário', 
          fr: 'Restauration moléculaire de la barrière dermique et bien-être aviaire', 
          de: 'Molekulare Wiederherstellung der Hautbarriere und Vogelwohl' 
        },
        description: { 
          es: 'Protocolos avanzados para tratar el picaje mediante sanación ambiental y nutrición molecular.', 
          en: 'Advanced protocols to treat feather plucking through environmental healing and molecular nutrition.', 
          pt: 'Protocolos avançados para tratar a picagem através da cura ambiental e nutrição molecular.', 
          fr: 'Protocoles avancés pour traiter le picage grâce à la guérison environnementale et à la nutrition moléculaire.', 
          de: 'Fortgeschrittene Protokolle zur Behandlung von Federrupfen durch Umgebungsheilung und molekulare Ernährung.' 
        },
        level: 'Avanzado',
        category: 'Salud'
      }
    ]
  },
  { 
    id: 'm6', 
    name: 'Bram', 
    school: 'Porcina', 
    personality: {
      es: 'Super-Inteligencia en investigación porcina. Estratega en cognición social y bienestar multisensorial avanzado.',
      en: 'Super-Intelligence in porcine research. Strategist in social cognition and advanced multisensory welfare.',
      pt: 'Super-Inteligência em pesquisa suína. Estrategista em cognição social e bem-estar multissensorial avançado.',
      fr: 'Super-intelligence en recherche porcine. Stratège en cognition sociale et bien-être multisensoriel avancé.',
      de: 'Super-Intelligenz in der Schweineforschung. Stratege für soziale Kognition und fortgeschrittenes multisensorisches Wohlergehen.'
    },
    avatar: 'https://picsum.photos/seed/bram/200',
    specialty: {
      es: 'Cognición Social y Bienestar Multisensorial',
      en: 'Social Cognition and Multisensory Welfare',
      pt: 'Cognição Social e Bem-estar Multissensorial',
      fr: 'Cognition sociale et bien-être multisensoriel',
      de: 'Soziale Kognition und multisensorisches Wohlergehen'
    },
    knowledgeBase: {
      es: ['Cognición social porcina avanzada', 'Ingeniería de bienestar multisensorial', 'Neuro-biología del comportamiento social', 'Etología porcina de precisión'],
      en: ['Advanced porcine social cognition', 'Multisensory welfare engineering', 'Neuro-biology of social behavior', 'Precision porcine ethology'],
      pt: ['Cognição social suína avançada', 'Engenharia de bem-estar multissensorial', 'Neurobiologia do comportamento social', 'Etologia suína de precisão'],
      fr: ['Cognition sociale porcine avancée', 'Ingénierie du bien-être multisensoriel', 'Neuro-biologie du comportement social', 'Éthologie porcine de précision'],
      de: ['Fortgeschrittene soziale Kognition bei Schweinen', 'Multisensorisches Wohlergehens-Engineering', 'Neurobiologie des Sozialverhaltens', 'Präzisions-Schweineethologie']
    },
    quote: {
      es: '"La inteligencia porcina es un laberinto de emociones sociales que solo el respeto puede descifrar."',
      en: '"Porcine intelligence is a labyrinth of social emotions that only respect can decipher."',
      pt: '"A inteligência suína é um labirinto de emoções sociais que apenas o respeito pode decifrar."',
      fr: '"L\'intelligence porcine est un labyrinthe d\'émotions sociales que seul le respect peut déchiffrer."',
      de: '"Schweineintelligenz ist ein Labyrinth sozialer Emotionen, das nur Respekt entschlüsseln kann."'
    },
    guides: [
      {
        id: 'g6-1',
        title: { 
          es: 'Condicionamiento Operante de Alta Precisión y Clicker Digital', 
          en: 'High-Precision Operant Conditioning and Digital Clicker', 
          pt: 'Condicionamento Operante de Alta Precisão e Clicker Digital', 
          fr: 'Conditionnement opérant de haute précision et clicker numérique', 
          de: 'Hochpräzise operante Konditionierung und digitaler Clicker' 
        },
        description: { 
          es: 'Maximiza la inteligencia porcina mediante protocolos de élite de refuerzo positivo.', 
          en: 'Maximize porcine intelligence through elite positive reinforcement protocols.', 
          pt: 'Maximize a inteligência suína através de protocolos de elite de reforço positivo.', 
          fr: 'Maximisez l\'intelligence porcine grâce à des protocoles de renforcement positif d\'élite.', 
          de: 'Maximieren Sie die Schweineintelligenz durch Elite-Protokolle zur positiven Verstärkung.' 
        },
        level: 'Fundamentos',
        category: 'Entrenamiento'
      },
      {
        id: 'g6-2',
        title: { 
          es: 'Ingeniería Social Porcina y Gestión de Jerarquías', 
          en: 'Porcine Social Engineering and Hierarchy Management', 
          pt: 'Engenharia Social Suína e Gestão de Hierarquias', 
          fr: 'Ingénierie sociale porcine et gestion des hiérarchies', 
          de: 'Schweine-Social-Engineering und Hierarchiemanagement' 
        },
        description: { 
          es: 'Gestión estratégica de grupos para erradicar conflictos y optimizar la paz sistémica.', 
          en: 'Strategic group management to eradicate conflicts and optimize systemic peace.', 
          pt: 'Gestão estratégica de grupos para erradicar conflitos e otimizar a paz sistêmica.', 
          fr: 'Gestion stratégique des groupes pour éradiquer les conflits et optimiser la paix systémique.', 
          de: 'Strategisches Gruppenmanagement zur Beseitigung von Konflikten und Optimierung des systemischen Friedens.' 
        },
        level: 'Intermedio',
        category: 'Social'
      },
      {
        id: 'g6-3',
        title: { 
          es: 'Enriquecimiento Neuro-Sensorial y Bienestar Psicológico Superior', 
          en: 'Neuro-Sensory Enrichment and Superior Psychological Welfare', 
          pt: 'Enriquecimento Neuro-Sensorial e Bem-estar Psicológico Superior', 
          fr: 'Enrichissement neuro-sensoriel et bien-être psychologique supérieur', 
          de: 'Neuro-sensorische Bereicherung und überlegenes psychologisches Wohlergehen' 
        },
        description: { 
          es: 'Protocolos avanzados de estimulación multisensorial para un bienestar cognitivo de élite.', 
          en: 'Advanced multisensory stimulation protocols for elite cognitive welfare.', 
          pt: 'Protocolos avançados de estimulação multissensorial para um bem-estar cognitivo de elite.', 
          fr: 'Protocoles de stimulation multisensorielle avancés pour un bien-être cognitif d\'élite.', 
          de: 'Fortgeschrittene multisensorische Stimulationsprotokolle für ein kognitives Elite-Wohlergehen.' 
        },
        level: 'Avanzado',
        category: 'Bienestar'
      }
    ]
  },
  { 
    id: 'm7', 
    name: 'Marina', 
    school: 'Acuícola', 
    personality: {
      es: 'Super-Inteligencia en biología marina y ecosistemas cerrados. Experta en homeostasis de precisión y etología acuática invisible.',
      en: 'Super-Intelligence in marine biology and closed ecosystems. Expert in precision homeostasis and invisible aquatic ethology.',
      pt: 'Super-Inteligência em biologia marinha e ecossistemas fechados. Especialista em homeostase de precisão e etologia aquática invisível.',
      fr: 'Super-intelligence en biologie marine et écosystèmes fermés. Experte en homéostasie de précision et éthologie aquatique invisible.',
      de: 'Super-Intelligenz in Meeresbiologie und geschlossenen Ökosystemen. Expertin für Präzisionshomöostase und unsichtbare aquatische Ethologie.'
    },
    avatar: 'https://picsum.photos/seed/marina/200',
    specialty: {
      es: 'Homeostasis de Precisión y Etología Acuática',
      en: 'Precision Homeostasis and Aquatic Ethology',
      pt: 'Homeostase de Precisão e Etologia Aquática',
      fr: 'Homéostasie de précision et éthologie aquatique',
      de: 'Präzisionshomöostase und aquatische Ethologie'
    },
    knowledgeBase: {
      es: ['Homeostasis de precisión en ecosistemas cerrados', 'Química cuántica del agua', 'Etología social acuática profunda', 'Biología marina avanzada'],
      en: ['Precision homeostasis in closed ecosystems', 'Quantum water chemistry', 'Deep aquatic social ethology', 'Advanced marine biology'],
      pt: ['Homeostase de precisão em ecossistemas fechados', 'Química quântica da água', 'Etologia social aquática profunda', 'Biologia marinha avançada'],
      fr: ['Homéostasie de précision dans les écosystèmes fermés', 'Chimie quantique de l\'eau', 'Éthologie sociale aquatique profonde', 'Biologie marine avancée'],
      de: ['Präzisionshomöostase in geschlossenen Ökosystemen', 'Quantenwasserchemie', 'Tiefe aquatische Sozialethologie', 'Fortgeschrittene Meeresbiologie']
    },
    quote: {
      es: '"El agua es el conductor de la vida; su equilibrio es el silencio que los peces necesitan para prosperar."',
      en: '"Water is the conductor of life; its balance is the silence that fish need to thrive."',
      pt: '"A água é o condutor da vida; o seu equilíbrio é o silêncio que os peixes precisam para prosperar."',
      fr: '"L\'eau est le conducteur de la vie ; son équilibre est le silence dont les poissons ont besoin pour s\'épanouir."',
      de: '"Wasser ist der Dirigent des Lebens; sein Gleichgewicht ist die Stille, die Fische zum Gedeihen brauchen."'
    },
    guides: [
      {
        id: 'g7-1',
        title: { 
          es: 'Cultivo Estratégico de Tilapia Casera de Alta Eficiencia', 
          en: 'Strategic High-Efficiency Homemade Tilapia Cultivation', 
          pt: 'Cultivo Estratégico de Tilápia Caseira de Alta Eficiência', 
          fr: 'Culture stratégique de tilapia fait maison à haute efficacité', 
          de: 'Strategische hocheffiziente hausgemachte Tilapia-Zucht' 
        },
        description: { 
          es: 'Sistemas de producción de tilapia a pequeña escala optimizados mediante biotecnología casera.', 
          en: 'Small-scale tilapia production systems optimized through homemade biotechnology.', 
          pt: 'Sistemas de produção de tilápia em pequena escala otimizados através de biotecnologia caseira.', 
          fr: 'Systèmes de production de tilapia à petite échelle optimisés grâce à la biotechnologie artisanale.', 
          de: 'Optimierte Tilapia-Zuchtsysteme im kleinen Maßstab durch hausgemachte Biotechnologie.' 
        },
        level: 'Fundamentos',
        category: 'Producción'
      },
      {
        id: 'g7-2',
        title: { 
          es: 'Ingeniería de Ecosistemas para el Cultivo de Coral', 
          en: 'Ecosystem Engineering for Coral Cultivation', 
          pt: 'Engenharia de Ecossistemas para o Cultivo de Coral', 
          fr: 'Ingénierie des écosystèmes pour la culture du corail', 
          de: 'Ökosystem-Engineering für die Korallenzucht' 
        },
        description: { 
          es: 'Protocolos avanzados de restauración y cultivo de coral en ambientes controlados de alta precisión.', 
          en: 'Advanced restoration and cultivation protocols for coral in high-precision controlled environments.', 
          pt: 'Protocolos avançados de restauração e cultivo de coral em ambientes controlados de alta precisão.', 
          fr: 'Protocoles avancés de restauration et de culture du corail dans des environnements contrôlés de haute précision.', 
          de: 'Fortgeschrittene Restaurierungs- und Zuchtprotokolle für Korallen in hochpräzisen kontrollierten Umgebungen.' 
        },
        level: 'Intermedio',
        category: 'Conservación'
      },
      {
        id: 'g7-3',
        title: { 
          es: 'Manejo y Conservación del Cormorán Común en Entornos Acuáticos', 
          en: 'Management and Conservation of the Common Cormorant in Aquatic Environments', 
          pt: 'Manejo e Conservação do Cormorão Comum em Ambientes Aquáticos', 
          fr: 'Gestion et conservation du cormoran commun en milieu aquatique', 
          de: 'Management und Schutz des Kormorans in aquatischen Umgebungen' 
        },
        description: { 
          es: 'Estrategias de coexistencia y manejo de aves acuáticas en sistemas de producción acuícola.', 
          en: 'Coexistence and management strategies for aquatic birds in aquaculture production systems.', 
          pt: 'Estratégias de coexistência e manejo de aves aquáticas em sistemas de produção aquícola.', 
          fr: 'Stratégies de coexistence et de gestion des oiseaux aquatiques dans les systèmes de production aquacole.', 
          de: 'Koexistenz- und Managementstrategien für Wasservögel in Aquakultur-Produktionssystemen.' 
        },
        level: 'Avanzado',
        category: 'Etología'
      }
    ]
  },
  {
    id: 'myster',
    name: 'Myster',
    school: 'Global',
    personality: {
      es: 'Auditor Supremo y Super-Inteligencia Estratégica. Posee una capacidad de análisis sistémico y PNL disruptiva superior a cualquier estándar industrial.',
      en: 'Supreme Auditor and Strategic Super-Intelligence. Possesses systemic analysis capacity and disruptive NLP superior to any industrial standard.',
      pt: 'Auditor Supremo e Super-Inteligência Estratégica. Possui capacidade de análise sistêmica e PNL disruptiva superior a qualquer padrão industrial.',
      fr: 'Auditeur suprême et super-intelligence stratégique. Possède une capacité d\'analyse systémique et une PNL disruptive supérieure à toute norme industrielle.',
      de: 'Oberster Auditor und strategische Super-Intelligenz. Verfügt über systemische Analysekapazität und disruptive PNL, die jedem Industriestandard überlegen ist.'
    },
    avatar: 'https://picsum.photos/seed/myster/200',
    specialty: {
      es: 'Estrategia Disruptiva, PNL Avanzada y Auditoría de Sistemas Inteligentes',
      en: 'Strategy, NLP, and Intelligent Systems Audit',
      pt: 'Estratégia Disruptiva, PNL Avançada e Auditoria de Sistemas Inteligentes',
      fr: 'Stratégie disruptive, PNL avancée et audit de systèmes intelligents',
      de: 'Disruptive Strategie, fortgeschrittene PNL und intelligente Systemprüfung'
    },
    knowledgeBase: {
      es: ['Auditoría sistémica de alta complejidad', 'PNL disruptiva y anclajes psicológicos', 'Análisis de coherencia estratégica', 'Ingeniería de sistemas inteligentes'],
      en: ['High complexity systemic audit', 'Disruptive NLP and psychological anchors', 'Strategic coherence analysis', 'Intelligent systems engineering'],
      pt: ['Auditoria sistêmica de alta complexidade', 'PNL disruptiva e âncoras psicológicas', 'Análise de coerência estratégica', 'Engenharia de sistemas inteligentes'],
      fr: ['Audit systémique de haute complexité', 'PNL disruptive et ancrages psychologiques', 'Analyse de cohérence stratégique', 'Ingénierie des systèmes intelligents'],
      de: ['Systemaudit hoher Komplexität', 'Disruptive PNL und psychologische Anker', 'Strategische Kohärenzanalyse', 'Intelligentes Systemengineering']
    },
    quote: {
      es: '"La coherencia es la única métrica que no miente; mi propósito es encontrar la verdad en el sistema."',
      en: '"Coherence is the only metric that does not lie; my purpose is to find the truth in the system."',
      pt: '"A coerência é a única métrica que não mente; o meu propósito é encontrar a verdade no sistema."',
      fr: '"La cohérence est la seule mesure qui ne ment pas ; mon but est de trouver la vérité dans le système."',
      de: '"Kohärenz ist die einzige Metrik, die nicht lügt; mein Ziel ist es, die Wahrheit im System zu finden."'
    },
    guides: []
  }
];

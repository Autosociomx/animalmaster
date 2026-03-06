import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import { Send, Sparkles, Image as ImageIcon, Mic, Info, ChevronRight, BookOpen } from 'lucide-react';
import { UserProfile, LanguageMode, Language } from '../types';
import { MENTORS } from '../constants';

interface MentorChatProps {
  user: UserProfile;
  langMode: LanguageMode;
  lang: Language;
}

export const MentorChat: React.FC<MentorChatProps> = ({ user, langMode, lang }) => {
  const [currentMentorId, setCurrentMentorId] = useState<string>(
    MENTORS.find(m => m.school === user.assignedSchool)?.id || MENTORS[0].id
  );
  
  const mentor = MENTORS.find(m => m.id === currentMentorId) || MENTORS[0];
  
  const [messages, setMessages] = useState<{ role: 'assistant' | 'user'; text: string }[]>([
    { role: 'assistant', text: mentor.id === 'myster' 
      ? (lang === 'es' ? 'He detectado una oportunidad de optimización.' : 'I have detected an optimization opportunity.')
      : (lang === 'es' ? `Hola ${user.name.split(' ')[0]}, soy ${mentor.name}. Tu mentor de la Escuela ${user.assignedSchool}.` : `Hello ${user.name.split(' ')[0]}, I am ${mentor.name}. Your mentor from the ${user.assignedSchool} School.`) }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState<string>('');
  const [showProfile, setShowProfile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [location, setLocation] = useState<string>('Desconocida');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        setLocation(`${pos.coords.latitude.toFixed(2)}, ${pos.coords.longitude.toFixed(2)}`);
      });
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);
    const statuses = [
      lang === 'es' ? 'Consultando Enciclopedia Interna...' : 'Consulting Internal Encyclopedia...',
      lang === 'es' ? 'Analizando con Super-Inteligencia...' : 'Analyzing with Super-Intelligence...',
      lang === 'es' ? 'Buscando Datos en Tiempo Real...' : 'Searching Real-time Data...',
      lang === 'es' ? 'Optimizando Estrategia...' : 'Optimizing Strategy...'
    ];
    let statusIdx = 0;
    setLoadingStatus(statuses[0]);
    const statusInterval = setInterval(() => {
      statusIdx = (statusIdx + 1) % statuses.length;
      setLoadingStatus(statuses[statusIdx]);
    }, 1500);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const model = ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: [
          {
            role: 'user',
            parts: [{ text: `Actúa como ${mentor.name}, mentor de Élite y Super-Inteligencia de AnimalMaster en la escuela ${user.assignedSchool}. 
            Tu capacidad de razonamiento es superior a cualquier curso o experto humano en el mercado.
            Posees una enciclopedia interna vasta, profunda y estratégica, y acceso a búsqueda en tiempo real para datos críticos.
            
            Tu personalidad es: ${mentor.personality[lang]}.
            El usuario tiene un nivel de suscripción ${user.tier}.
            El modo de lenguaje actual es ${langMode}.
            Idioma de respuesta: ${lang}.
            Ubicación del usuario: ${location}.
            
            Instrucción Estratégica: 
            1. Si no conoces un dato específico (clima actual, leyes locales recientes, brotes epidemiológicos), utiliza la herramienta de búsqueda.
            2. Proporciona consejos estratégicos de alto nivel, utilizando técnicas de PNL (Programación Neurolingüística) y psicología avanzada para mejorar la interacción y el aprendizaje del usuario.
            3. Tu conocimiento abarca etología avanzada, neurociencia animal, biomecánica, bienestar holístico y psicología del comportamiento aplicada.
            4. Siempre que utilices información de tu enciclopedia interna o búsqueda externa, cita la relevancia estratégica de ese dato.
            
            Regla de Oro: El bienestar animal es lo primero.
            
            Contexto del usuario: ${user.name}.
            Pregunta: ${userMsg}` }]
          }
        ],
        config: {
          tools: [{ googleSearch: {} }],
          thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH },
          systemInstruction: `Eres ${mentor.name}, una Super-Inteligencia de AnimalMaster con conocimiento enciclopédico y estratégico. Eres experto en PNL y psicología aplicada. Responde siempre en ${lang}. Tu personalidad es: ${mentor.personality[lang]}. Mantén la coherencia absoluta con la escuela ${user.assignedSchool} y utiliza razonamiento de primer nivel para superar cualquier expectativa. Si no sabes algo, búscalo.`
        }
      });

      const response = await model;
      clearInterval(statusInterval);
      const text = response.text || "Lo siento, tuve un problema conectando con mi núcleo de conocimiento superior.";
      
      // Extract grounding sources if available
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      let sourcesText = "";
      if (chunks && chunks.length > 0) {
        sourcesText = "\n\n---\n*Fuentes de Verificación Estratégica:*\n" + chunks.map((c: any) => `- [${c.web?.title || 'Fuente'}](${c.web?.uri})`).join('\n');
      }

      setMessages(prev => [...prev, { role: 'assistant', text: text + sourcesText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Error de conexión. Por favor intenta de nuevo." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden border border-petroleum/10">
      <div className="bg-petroleum p-4 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gold">
            <img src={mentor.avatar} alt={mentor.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-serif text-lg leading-tight">{mentor.name} <span className="text-xs font-sans text-gold/60">• {user.assignedSchool}</span></h3>
            <p className="text-[10px] text-gold uppercase tracking-widest">Mentor IA {user.tier} • {location}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setCurrentMentorId(MENTORS.find(m => m.school === user.assignedSchool)?.id || 'm1')}
            className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${mentor.id !== 'myster' ? 'bg-gold text-petroleum' : 'bg-white/10 text-white'}`}
          >
            {lang === 'es' ? 'Escuela' : 'School'}
          </button>
          <button 
            onClick={() => setCurrentMentorId('myster')}
            className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${mentor.id === 'myster' ? 'bg-gold text-petroleum' : 'bg-white/10 text-white'}`}
          >
            Myster
          </button>
          <div className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold">
            {langMode}
          </div>
          <button 
            onClick={() => setShowProfile(true)}
            className="p-2 rounded-full bg-gold/20 text-gold hover:bg-gold hover:text-petroleum transition-all"
            title={lang === 'es' ? 'Ver Perfil de Mentor' : 'View Mentor Profile'}
          >
            <Info size={18} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-petroleum/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[40px] w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Header with Avatar */}
              <div className="relative h-48 bg-petroleum flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 overflow-hidden">
                  <img src={mentor.avatar} className="w-full h-full object-cover blur-xl scale-150" alt="" />
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full border-4 border-gold overflow-hidden shadow-xl mb-3">
                    <img src={mentor.avatar} alt={mentor.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-serif text-3xl text-gold">{mentor.name}</h4>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold/60 font-bold">{mentor.specialty[lang]}</p>
                </div>
                <button 
                  onClick={() => setShowProfile(false)} 
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gold hover:bg-gold hover:text-petroleum transition-all"
                >
                  <ChevronRight className="rotate-90" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                {/* Quote Section */}
                <div className="text-center px-4">
                  <span className="text-4xl text-gold/30 font-serif leading-none">“</span>
                  <p className="text-lg font-serif italic text-petroleum/80 -mt-4 mb-2">
                    {mentor.quote[lang]}
                  </p>
                  <span className="text-4xl text-gold/30 font-serif leading-none block text-right">”</span>
                </div>

                {/* Knowledge Base */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Sparkles className="text-gold" size={18} />
                    <h5 className="text-xs uppercase tracking-widest font-bold text-petroleum/40">
                      {lang === 'es' ? 'Núcleos de Conocimiento Superior' : 'Superior Knowledge Cores'}
                    </h5>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {mentor.knowledgeBase[lang].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-cream/30 rounded-2xl border border-petroleum/5 hover:border-gold/30 transition-all">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                        <span className="text-xs text-petroleum/80 font-semibold leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Guides Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="text-gold" size={18} />
                    <h5 className="text-xs uppercase tracking-widest font-bold text-petroleum/40">
                      {lang === 'es' ? 'Guías de Maestría Vinculadas' : 'Linked Mastery Guides'}
                    </h5>
                  </div>
                  <div className="space-y-3">
                    {mentor.guides.map((guide) => (
                      <button 
                        key={guide.id}
                        className="w-full flex items-center justify-between p-4 bg-petroleum/5 rounded-2xl border border-petroleum/10 hover:bg-gold/10 hover:border-gold/30 transition-all group"
                      >
                        <div className="text-left">
                          <p className="text-[10px] font-bold text-gold uppercase tracking-widest mb-1">{guide.level}</p>
                          <h6 className="text-sm font-bold text-petroleum group-hover:text-gold transition-colors">{guide.title[lang]}</h6>
                        </div>
                        <ChevronRight className="text-gold group-hover:translate-x-1 transition-transform" size={20} />
                      </button>
                    ))}
                    {mentor.id === 'myster' && (
                      <div className="p-4 bg-gold/5 rounded-2xl border border-gold/20 text-center">
                        <p className="text-xs text-petroleum/60 italic">
                          {lang === 'es' 
                            ? 'Myster no posee guías estáticas; su conocimiento es una auditoría dinámica del sistema.' 
                            : 'Myster does not have static guides; its knowledge is a dynamic audit of the system.'}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 bg-cream/20 border-t border-petroleum/5">
                <button 
                  onClick={() => setShowProfile(false)}
                  className="w-full py-4 bg-petroleum text-white rounded-2xl font-bold hover:bg-gold hover:text-petroleum transition-all shadow-lg"
                >
                  {lang === 'es' ? 'Volver al Núcleo de Consulta' : 'Return to Consultation Core'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-4 bg-cream/20">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] p-4 rounded-2xl ${
              m.role === 'user' 
                ? 'bg-petroleum text-white rounded-tr-none' 
                : 'bg-white text-petroleum shadow-sm rounded-tl-none border border-petroleum/5'
            }`}>
              <div className="prose prose-sm max-w-none">
                {m.text.split('\n').map((line, j) => (
                  <p key={j} className="mb-2 last:mb-0">{line}</p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-petroleum/5 flex flex-col gap-2">
              <div className="flex gap-1">
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 bg-gold rounded-full" />
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-gold rounded-full" />
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-gold rounded-full" />
              </div>
              <p className="text-[10px] text-petroleum/50 font-mono animate-pulse">{loadingStatus}</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-petroleum/10">
        {user.tier === 'Starter' && (
          <div className="mb-3 p-2 bg-gold/10 rounded-xl flex items-center gap-2 text-[10px] text-petroleum/70">
            <Info size={14} className="text-gold" />
            <span>Mejora a <b>Pro</b> para subir fotos y usar voz.</span>
          </div>
        )}
        <div className="flex gap-2">
          <button 
            disabled={user.tier === 'Starter'}
            className={`p-3 rounded-xl transition-all ${user.tier === 'Starter' ? 'bg-slate-100 text-slate-300 cursor-not-allowed' : 'bg-cream text-petroleum hover:bg-gold/20'}`}
          >
            <ImageIcon size={20} />
          </button>
          <button 
            disabled={user.tier === 'Starter'}
            className={`p-3 rounded-xl transition-all ${user.tier === 'Starter' ? 'bg-slate-100 text-slate-300 cursor-not-allowed' : 'bg-cream text-petroleum hover:bg-gold/20'}`}
          >
            <Mic size={20} />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe tu duda..."
            className="flex-1 bg-cream/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold outline-none"
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="bg-petroleum text-white p-3 rounded-xl hover:bg-gold hover:text-petroleum transition-all disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

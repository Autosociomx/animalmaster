import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from '@google/genai';
import { Send, Sparkles, ChevronRight, ArrowLeft } from 'lucide-react';
import { SchoolType, Language } from '../types';

interface DiagnosticChatProps {
  lang: Language;
  onComplete: (data: { animal: string; problem: string; goal: string; school: SchoolType }) => void;
}

export const DiagnosticChat: React.FC<DiagnosticChatProps> = ({ lang, onComplete }) => {
  const TRANSLATIONS = {
    es: {
      init: 'Iniciando protocolo de diagnóstico AnimalMaster. Soy tu Super-Inteligencia de orientación. Para determinar tu trayectoria de élite, dime: ¿Con qué especie animal interactúas hoy?',
      challenge: 'Análisis de situación en curso. ¿Qué desafío crítico o comportamiento específico buscas optimizar mediante nuestra metodología avanzada con tu',
      goal: 'Excelente. Finalmente, define tu objetivo estratégico a largo plazo para alcanzar la maestría absoluta con este animal.',
      recommend: 'Tras un análisis sistémico, he determinado que tu camino hacia la excelencia es la',
      plan: 'He generado un plan de transformación personalizado basado en neurociencia animal.',
      placeholder: 'Escribe tu respuesta estratégica...',
      title: 'Diagnóstico AnimalMaster',
      subtitle: 'Super-Inteligencia de Evaluación de Bienestar'
    },
    en: {
      init: 'Initiating AnimalMaster diagnostic protocol. I am your orientation Super-Intelligence. To determine your elite trajectory, tell me: What animal species are you interacting with today?',
      challenge: 'Situation analysis in progress. What critical challenge or specific behavior do you seek to optimize through our advanced methodology with your',
      goal: 'Excellent. Finally, define your long-term strategic goal to achieve absolute mastery with this animal.',
      recommend: 'After a systemic analysis, I have determined that your path to excellence is the',
      plan: 'I have generated a personalized transformation plan based on animal neuroscience.',
      placeholder: 'Type your strategic response...',
      title: 'AnimalMaster Diagnosis',
      subtitle: 'Welfare Evaluation Super-Intelligence'
    },
    pt: {
      init: 'Olá, sou seu guia do AnimalMaster. Para recomendar a melhor escola, conte-me: Com qual animal você está trabalhando hoje?',
      challenge: 'Entendido. Qual desafio ou comportamento específico você gostaria de melhorar com seu',
      goal: 'Perfeito. Por fim, qual é o seu principal objetivo a longo prazo com este animal?',
      recommend: 'Com base em suas respostas, recomendo a',
      plan: 'Preparei um plano personalizado para você.',
      placeholder: 'Digite sua resposta...',
      title: 'Diagnóstico AnimalMaster',
      subtitle: 'IA de Avaliação de Bem-estar'
    },
    fr: {
      init: 'Bonjour, je suis votre guide AnimalMaster. Pour vous recommander la meilleure école, dites-moi : avec quel animal travaillez-vous aujourd\'hui ?',
      challenge: 'Compris. Quel défi ou comportement spécifique aimeriez-vous améliorer avec votre',
      goal: 'Parfait. Enfin, quel est votre principal objectif à long terme avec cet animal ?',
      recommend: 'D\'après vos réponses, je vous recommande l\'',
      plan: 'J\'ai préparé un plan personnalisé pour vous.',
      placeholder: 'Tapez votre réponse...',
      title: 'Diagnostic AnimalMaster',
      subtitle: 'IA d\'évaluation du bien-être'
    },
    de: {
      init: 'Hallo, ich bin Ihr AnimalMaster-Guide. Um die beste Schule zu empfehlen, sagen Sie mir: Mit welchem Tier arbeiten Sie heute?',
      challenge: 'Verstanden. Welche spezifische Herausforderung oder welches Verhalten möchten Sie bei Ihrem',
      goal: 'Perfekt. Zu guter Letzt: Was ist Ihr wichtigstes langfristiges Ziel mit diesem Tier?',
      recommend: 'Basierend auf Ihren Antworten empfehle ich die',
      plan: 'Ich habe einen personalisierten Plan für Sie erstellt.',
      placeholder: 'Geben Sie Ihre Antwort ein...',
      title: 'AnimalMaster Diagnose',
      subtitle: 'KI zur Bewertung des Wohlergehens'
    }
  };

  const t = TRANSLATIONS[lang];

  const [messages, setMessages] = useState<{ role: 'assistant' | 'user'; text: string }[]>([
    { role: 'assistant', text: t.init }
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ animal: '', problem: '', goal: '' });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');

    // Simple state machine for diagnostic
    setTimeout(() => {
      if (step === 0) {
        setData(prev => ({ ...prev, animal: userMsg }));
        setMessages(prev => [...prev, { role: 'assistant', text: `${t.challenge} ${userMsg}?` }]);
        setStep(1);
      } else if (step === 1) {
        setData(prev => ({ ...prev, problem: userMsg }));
        setMessages(prev => [...prev, { role: 'assistant', text: t.goal }]);
        setStep(2);
      } else if (step === 2) {
        const finalData = { ...data, goal: userMsg };
        setData(finalData);
        
        // Determine school (simplified logic)
        let school: SchoolType = 'Canina';
        const lower = finalData.animal.toLowerCase();
        if (lower.includes('caballo') || lower.includes('yegua') || lower.includes('horse')) school = 'Equina';
        else if (lower.includes('vaca') || lower.includes('toro') || lower.includes('cow')) school = 'Bovina';
        else if (lower.includes('gato') || lower.includes('cat')) school = 'Felina';
        else if (lower.includes('ave') || lower.includes('pájaro') || lower.includes('bird')) school = 'Aviar';
        else if (lower.includes('cerdo') || lower.includes('pig')) school = 'Porcina';
        else if (lower.includes('pez') || lower.includes('acuario') || lower.includes('fish')) school = 'Acuícola';

        setMessages(prev => [...prev, { role: 'assistant', text: `${t.recommend} **${school}**. ${t.plan}` }]);
        
        setTimeout(() => {
          onComplete({ ...finalData, school });
        }, 2000);
      }
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto h-[600px] flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden border border-petroleum/10">
      <div className="bg-petroleum p-6 text-white flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
          <Sparkles className="text-petroleum w-6 h-6" />
        </div>
        <div>
          <h3 className="font-serif text-xl">{t.title}</h3>
          <p className="text-xs text-cream/70">{t.subtitle}</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-4 bg-cream/30">
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                m.role === 'user' 
                  ? 'bg-petroleum text-white rounded-tr-none' 
                  : 'bg-white text-petroleum shadow-sm rounded-tl-none border border-petroleum/5'
              }`}>
                {m.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="p-4 bg-white border-t border-petroleum/10 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder={t.placeholder}
          className="flex-1 bg-cream/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-gold outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-gold text-petroleum p-3 rounded-xl hover:scale-105 transition-transform"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

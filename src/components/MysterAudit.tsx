import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Lightbulb, TrendingUp, Search, Terminal, Sparkles, ChevronRight, Info } from 'lucide-react';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';
import { AuditInsight, Language } from '../types';
import { MENTORS } from '../constants';

interface MysterAuditProps {
  lang: Language;
}

export const MysterAudit: React.FC<MysterAuditProps> = ({ lang }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [insights, setInsights] = useState<AuditInsight[]>([]);
  const [showPanel, setShowPanel] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const myster = MENTORS.find(m => m.id === 'myster')!;

  const TRANSLATIONS = {
    es: {
      title: 'Myster Nucleus',
      subtitle: 'Auditoría Estratégica',
      ready: 'Myster está listo para auditar la coherencia de AnimalMaster.',
      start: 'Iniciar Escaneo',
      scanning: 'Analizando flujos, PNL y lógica de mentores...',
      error: 'Detección de Error',
      strategy: 'Estrategia PNL',
      value: 'Aumento de Valor',
      impact: 'Impacto',
      quote: '"La coherencia es la única métrica que no miente." — Myster'
    },
    en: {
      title: 'Myster Nucleus',
      subtitle: 'Strategic Audit',
      ready: 'Myster is ready to audit the coherence of AnimalMaster.',
      start: 'Start Scan',
      scanning: 'Analyzing flows, NLP, and mentor logic...',
      error: 'Error Detection',
      strategy: 'NLP Strategy',
      value: 'Value Increase',
      impact: 'Impact',
      quote: '"Coherence is the only metric that does not lie." — Myster'
    },
    pt: {
      title: 'Myster Nucleus',
      subtitle: 'Auditoria Estratégica',
      ready: 'Myster está pronto para auditar a coerência do AnimalMaster.',
      start: 'Iniciar Escaneamento',
      scanning: 'Analisando fluxos, PNL e lógica de mentores...',
      error: 'Detecção de Erro',
      strategy: 'Estratégia PNL',
      value: 'Aumento de Valor',
      impact: 'Impacto',
      quote: '"A coerência é a única métrica que não mente." — Myster'
    },
    fr: {
      title: 'Myster Nucleus',
      subtitle: 'Audit stratégique',
      ready: 'Myster est prêt à auditer la cohérence d\'AnimalMaster.',
      start: 'Démarrer le scan',
      scanning: 'Analyse des flux, de la PNL et de la logique des mentors...',
      error: 'Détection d\'erreur',
      strategy: 'Stratégie PNL',
      value: 'Augmentation de valeur',
      impact: 'Impact',
      quote: '"La cohérence est la seule mesure qui ne ment pas." — Myster'
    },
    de: {
      title: 'Myster Nucleus',
      subtitle: 'Strategisches Audit',
      ready: 'Myster ist bereit, die Kohärenz von AnimalMaster zu prüfen.',
      start: 'Scan starten',
      scanning: 'Analyse von Abläufen, NLP und Mentor-Logik...',
      error: 'Fehlererkennung',
      strategy: 'NLP-Strategie',
      value: 'Wertsteigerung',
      impact: 'Auswirkung',
      quote: '"Kohärenz ist die einzige Metrik, die nicht lügt." — Myster'
    }
  };

  const t = TRANSLATIONS[lang];

  const runAudit = async () => {
    setIsScanning(true);
    setInsights([]);
    
    // Simulate system scan
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const model = ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: [{
          role: 'user',
          parts: [{ text: `Actúa como Myster, el Auditor Supremo y Super-Inteligencia Estratégica de AnimalMaster. 
          Tu objetivo es la excelencia absoluta y la coherencia del sistema.
          Analiza la estrategia actual de la plataforma (educación animal + mentoría IA + guías regionales).
          Utiliza tu conocimiento enciclopédico, razonamiento superior y búsqueda en tiempo real para validar tendencias del mercado y necesidades de bienestar animal.
          
          Detecta 3 puntos clave: 1 error estratégico de retención/lógica, 1 estrategia de PNL avanzada para conversión y fidelización, y 1 forma disruptiva de dar más valor al contenido utilizando psicología aplicada.
          Responde en el idioma: ${lang}.
          Responde en formato JSON: [{ type: 'error' | 'strategy' | 'value', message: string, impact: string }]` }]
        }],
        config: {
          tools: [{ googleSearch: {} }],
          thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH },
          responseMimeType: "application/json"
        }
      });

      const response = await model;
      const data = JSON.parse(response.text || '[]');
      setInsights(data);
    } catch (error) {
      console.error(error);
      setInsights([
        { type: 'error', message: lang === 'es' ? 'Fuga de atención en el onboarding inicial.' : 'Attention leak in initial onboarding.', impact: 'Alta' },
        { type: 'strategy', message: lang === 'es' ? 'Implementar anclajes de PNL en las celebraciones de progreso.' : 'Implement NLP anchors in progress celebrations.', impact: 'Media' },
        { type: 'value', message: lang === 'es' ? 'Añadir micro-guías de primeros auxilios por especie.' : 'Add micro-guides for first aid by species.', impact: 'Muy Alta' }
      ]);
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-96 bg-petroleum text-white rounded-3xl shadow-2xl border border-gold/30 overflow-hidden"
          >
            <div className="p-6 bg-gold/10 border-b border-gold/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                  <Terminal className="text-petroleum w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-gold">{t.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-gold/60">{t.subtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setShowProfile(true)}
                  className="p-2 rounded-full bg-gold/20 text-gold hover:bg-gold hover:text-petroleum transition-all"
                >
                  <Info size={16} />
                </button>
                <button onClick={() => setShowPanel(false)} className="text-gold/40 hover:text-gold">
                  <ChevronRight className="rotate-90" />
                </button>
              </div>
            </div>

            <AnimatePresence>
              {showProfile && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-0 z-[110] bg-petroleum p-6 overflow-y-auto space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-xl text-gold">Perfil de Myster</h4>
                    <button onClick={() => setShowProfile(false)} className="text-gold/40 hover:text-gold">
                      <ChevronRight className="rotate-90" />
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="text-sm italic text-gold/80 mb-4">"{myster.quote[lang]}"</p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-[10px] uppercase tracking-widest text-gold/40 font-bold">Capacidades de Auditoría</h5>
                    <div className="grid grid-cols-1 gap-2">
                      {myster.knowledgeBase[lang].map((k, i) => (
                        <div key={i} className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10">
                          <div className="w-1 h-1 bg-gold rounded-full" />
                          <span className="text-xs text-gold/80">{k}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => setShowProfile(false)}
                    className="w-full py-3 bg-gold text-petroleum rounded-xl font-bold text-sm"
                  >
                    Cerrar Perfil
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="p-6 space-y-6 max-h-[400px] overflow-y-auto">
              {!isScanning && insights.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-sm text-cream/60 mb-4">{t.ready}</p>
                  <button 
                    onClick={runAudit}
                    className="bg-gold text-petroleum px-6 py-2 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
                  >
                    <Search size={18} /> {t.start}
                  </button>
                </div>
              )}

              {isScanning && (
                <div className="space-y-4 py-8">
                  <div className="flex justify-center">
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full"
                    />
                  </div>
                  <p className="text-center text-xs text-gold animate-pulse">{t.scanning}</p>
                </div>
              )}

              {insights.map((insight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 p-4 rounded-2xl border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {insight.type === 'error' && <ShieldAlert className="text-red-400" size={18} />}
                    {insight.type === 'strategy' && <TrendingUp className="text-blue-400" size={18} />}
                    {insight.type === 'value' && <Lightbulb className="text-gold" size={18} />}
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                      {insight.type === 'error' ? t.error : insight.type === 'strategy' ? t.strategy : t.value}
                    </span>
                    <span className="ml-auto text-[10px] bg-gold/20 text-gold px-2 py-0.5 rounded-full">
                      {t.impact}: {insight.impact}
                    </span>
                  </div>
                  <p className="text-sm text-cream/90">{insight.message}</p>
                </motion.div>
              ))}
            </div>

            <div className="p-4 bg-black/20 text-[10px] text-center text-gold/40 italic">
              {t.quote}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowPanel(!showPanel)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all ${
          showPanel ? 'bg-gold text-petroleum' : 'bg-petroleum text-gold border border-gold/30'
        }`}
      >
        {showPanel ? <ChevronRight className="rotate-90" /> : <Terminal size={28} />}
        {!showPanel && (
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 rounded-full border-2 border-gold"
          />
        )}
      </motion.button>
    </div>
  );
};

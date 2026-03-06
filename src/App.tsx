import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Play, ChevronRight, Menu, X, Instagram, Twitter, Facebook } from 'lucide-react';
import { UserProfile, SchoolType } from './types';
import { DiagnosticChat } from './components/DiagnosticChat';
import { Pricing } from './components/Pricing';
import { Dashboard } from './components/Dashboard';
import { MysterAudit } from './components/MysterAudit';
import { LanguageSelector } from './components/LanguageSelector';
import { Language } from './types';
import { MENTORS } from './constants';

type AppState = 'landing' | 'diagnostic' | 'pricing' | 'dashboard';

const TRANSLATIONS = {
  es: {
    hero: 'Comunícate con tu',
    animal: 'Animal',
    sub: 'No vendemos cursos. Vendemos transformación guiada por IA que entiende el comportamiento específico de tu compañero.',
    cta: 'Iniciar Diagnóstico',
    video: 'Ver Video',
    guides: 'Guías Estratégicas por Región',
    schools: 'Escuelas',
    method: 'Método',
    pricing: 'Precios',
    start: 'Empezar Ahora'
  },
  en: {
    hero: 'Communicate with your',
    animal: 'Animal',
    sub: 'We don\'t sell courses. We sell AI-guided transformation that understands your companion\'s specific behavior.',
    cta: 'Start Diagnosis',
    video: 'Watch Video',
    guides: 'Strategic Guides by Region',
    schools: 'Schools',
    method: 'Method',
    pricing: 'Pricing',
    start: 'Start Now'
  },
  pt: {
    hero: 'Comunique-se com seu',
    animal: 'Animal',
    sub: 'Não vendemos cursos. Vendemos transformação guiada por IA que entende o comportamento específico do seu companheiro.',
    cta: 'Iniciar Diagnóstico',
    video: 'Ver Vídeo',
    guides: 'Guias Estratégicos por Região',
    schools: 'Escolas',
    method: 'Método',
    pricing: 'Preços',
    start: 'Começar Agora'
  },
  fr: {
    hero: 'Communiquez avec votre',
    animal: 'Animal',
    sub: 'Nous ne vendons pas de cours. Nous vendons une transformation guidée par l\'IA qui comprend le comportement spécifique de votre compagnon.',
    cta: 'Démarrer le diagnostic',
    video: 'Voir la vidéo',
    guides: 'Guides stratégiques par région',
    schools: 'Écoles',
    method: 'Méthode',
    pricing: 'Tarifs',
    start: 'Commencer maintenant'
  },
  de: {
    hero: 'Kommunizieren Sie mit Ihrem',
    animal: 'Tier',
    sub: 'Wir verkaufen keine Kurse. Wir verkaufen KI-gesteuerte Transformation, die das spezifische Verhalten Ihres Begleiters versteht.',
    cta: 'Diagnose starten',
    video: 'Video ansehen',
    guides: 'Strategische Leitfäden nach Region',
    schools: 'Schulen',
    method: 'Methode',
    pricing: 'Preise',
    start: 'Jetzt starten'
  }
};

export default function App() {
  const [state, setState] = useState<AppState>('landing');
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('es');
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      });
    }
  }, []);

  const t = TRANSLATIONS[lang];

  const handleDiagnosticComplete = (data: { school: SchoolType }) => {
    setUser({
      name: 'Usuario Invitado',
      email: '',
      tier: 'Starter',
      assignedSchool: data.school,
      progress: 0
    });
    setState('pricing');
  };

  const handlePricingSelect = (tier: any) => {
    if (user) {
      setUser({ ...user, tier: tier.name });
      setState('dashboard');
    }
  };

  return (
    <div className="min-h-screen relative">
      <MysterAudit lang={lang} />
      <LanguageSelector currentLang={lang} onLanguageChange={setLang} />
      <AnimatePresence mode="wait">
        {state === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-cream/80 backdrop-blur-md border-b border-petroleum/5">
              <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-petroleum flex items-center justify-center">
                    <Sparkles className="text-gold w-5 h-5" />
                  </div>
                  <span className="text-2xl font-serif text-petroleum font-bold">AnimalMaster</span>
                </div>
                
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-petroleum/70">
                  <a href="#schools" className="hover:text-gold transition-colors">{t.schools}</a>
                  <a href="#method" className="hover:text-gold transition-colors">{t.method}</a>
                  <a href="#pricing" className="hover:text-gold transition-colors">{t.pricing}</a>
                  <button 
                    onClick={() => setState('diagnostic')}
                    className="bg-petroleum text-white px-6 py-2 rounded-full hover:bg-gold hover:text-petroleum transition-all"
                  >
                    {t.start}
                  </button>
                </div>

                <button className="md:hidden text-petroleum" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X /> : <Menu />}
                </button>
              </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
              {/* Background Effects */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-petroleum/10 rounded-full blur-[120px]" />
              </div>

              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-gold/20">
                    <Sparkles size={14} /> {lang === 'es' ? 'La Nueva Era de la Educación Animal' : 'The New Era of Animal Education'}
                  </div>
                  <h1 className="text-6xl md:text-8xl mb-6 leading-[0.9] tracking-tighter">
                    {t.hero} <span className="italic text-gold">{t.animal}</span>
                  </h1>
                  <p className="text-xl text-petroleum/70 mb-10 max-w-lg leading-relaxed">
                    {t.sub}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setState('diagnostic')}
                      className="bg-petroleum text-white px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-2 hover:bg-gold hover:text-petroleum transition-all shadow-2xl group"
                    >
                      {t.cta} <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="bg-white text-petroleum border border-petroleum/10 px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-2 hover:bg-cream transition-all">
                      <Play size={20} fill="currentColor" /> {t.video}
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative"
                >
                  <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                    <img 
                      src="https://picsum.photos/seed/animalbond/800/1000" 
                      alt="Vínculo Animal" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Guides Section */}
            <section className="py-20 px-6 bg-cream/30">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <h2 className="text-4xl font-serif text-petroleum mb-2">{t.guides}</h2>
                    <p className="text-petroleum/60">{location ? `Detectado: ${location.lat.toFixed(2)}, ${location.lng.toFixed(2)}` : 'Detectando ubicación...'}</p>
                  </div>
                  <div className="hidden md:flex gap-2">
                    {MENTORS.filter(m => m.id !== 'myster').map(m => (
                      <div key={m.id} className="w-10 h-10 rounded-full overflow-hidden border border-petroleum/10 grayscale hover:grayscale-0 transition-all cursor-pointer">
                        <img src={m.avatar} alt={m.name} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {MENTORS.filter(m => m.id !== 'myster').slice(0, 3).map((m, i) => (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white p-8 rounded-[32px] shadow-xl border border-petroleum/5 hover:border-gold/30 transition-all group"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-gold">
                          <img src={m.avatar} alt={m.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-bold text-petroleum">{m.name}</h4>
                          <p className="text-xs text-gold uppercase tracking-widest">{m.school}</p>
                        </div>
                      </div>
                      <h3 className="text-xl font-serif mb-4 group-hover:text-gold transition-colors">{m.guides[0].title[lang]}</h3>
                      <p className="text-sm text-petroleum/60 mb-6">{m.guides[0].description[lang]}</p>
                      <button className="w-full py-3 rounded-xl bg-cream text-petroleum font-bold text-sm hover:bg-petroleum hover:text-white transition-all">
                        {lang === 'es' ? 'Ver Guía' : 'View Guide'}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-petroleum text-white py-20 px-6">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                  <h2 className="text-3xl font-serif text-gold mb-6">AnimalMaster</h2>
                  <p className="text-cream/60 max-w-md mb-8">
                    Liderando la revolución en el bienestar animal a través de la tecnología y la empatía. Nuestra misión es que cada animal sea comprendido.
                  </p>
                  <div className="flex gap-4">
                    <Instagram className="hover:text-gold cursor-pointer" />
                    <Twitter className="hover:text-gold cursor-pointer" />
                    <Facebook className="hover:text-gold cursor-pointer" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-6">Escuelas</h4>
                  <ul className="space-y-4 text-cream/60 text-sm">
                    <li>Canina</li>
                    <li>Equina</li>
                    <li>Felina</li>
                    <li>Bovina</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-6">Compañía</h4>
                  <ul className="space-y-4 text-cream/60 text-sm">
                    <li>Sobre Nosotros</li>
                    <li>Método</li>
                    <li>Contacto</li>
                    <li>Privacidad</li>
                  </ul>
                </div>
              </div>
              <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-xs text-cream/40">
                © 2026 AnimalMaster. Todos los derechos reservados. Bienestar animal {" > "} Métricas.
              </div>
            </footer>
          </motion.div>
        )}

        {state === 'diagnostic' && (
          <motion.div
            key="diagnostic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-screen flex items-center justify-center p-6 bg-cream"
          >
            <DiagnosticChat lang={lang} onComplete={handleDiagnosticComplete} />
          </motion.div>
        )}

        {state === 'pricing' && (
          <motion.div
            key="pricing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-cream"
          >
            <Pricing lang={lang} onSelect={handlePricingSelect} />
          </motion.div>
        )}

        {state === 'dashboard' && user && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Dashboard user={user} lang={lang} onLogout={() => setState('landing')} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

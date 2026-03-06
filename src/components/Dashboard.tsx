import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  MessageSquare, 
  Trophy, 
  Settings, 
  Play, 
  CheckCircle, 
  Lock,
  ChevronRight,
  User,
  LogOut,
  Sparkles,
  Info
} from 'lucide-react';
import { UserProfile, LanguageMode, Language } from '../types';
import { MENTORS } from '../constants';
import { MentorChat } from './MentorChat';

interface DashboardProps {
  user: UserProfile;
  lang: Language;
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ user, lang, onLogout }) => {
  const [activeTab, setActiveTab] = useState<'learning' | 'mentor'>('learning');
  const [langMode, setLangMode] = useState<LanguageMode>('Universal');

  const school = MENTORS.find(m => m.school === user.assignedSchool) || MENTORS[0];

  const TRANSLATIONS = {
    es: { learning: 'Aprendizaje', mentor: 'Mentor IA', logout: 'Cerrar Sesión', welcome: 'Bienvenido', continue: 'Continuemos tu camino en la', guides: 'Tus Guías de Maestría' },
    en: { learning: 'Learning', mentor: 'AI Mentor', logout: 'Logout', welcome: 'Welcome', continue: 'Let\'s continue your path in the', guides: 'Your Mastery Guides' },
    pt: { learning: 'Aprendizado', mentor: 'Mentor IA', logout: 'Sair', welcome: 'Bem-vindo', continue: 'Vamos continuar seu caminho na', guides: 'Seus Guias de Maestria' },
    fr: { learning: 'Apprentissage', mentor: 'Mentor IA', logout: 'Déconnexion', welcome: 'Bienvenue', continue: 'Continuons votre chemin dans l\'', guides: 'Vos guides de maîtrise' },
    de: { learning: 'Lernen', mentor: 'KI-Mentor', logout: 'Abmelden', welcome: 'Willkommen', continue: 'Lassen Sie uns Ihren Weg in der fortsetzen', guides: 'Ihre Meisterschafts-Leitfäden' }
  };

  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen bg-cream/30 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-petroleum text-white p-6 flex flex-col">
        <div className="mb-12">
          <h1 className="text-2xl font-serif text-gold">AnimalMaster</h1>
          <p className="text-[10px] uppercase tracking-widest text-cream/50">Núcleo de Maestría</p>
        </div>

        <nav className="flex-1 space-y-2">
          <button 
            onClick={() => setActiveTab('learning')}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${activeTab === 'learning' ? 'bg-gold text-petroleum' : 'hover:bg-white/10'}`}
          >
            <BookOpen size={20} />
            <span>{t.learning}</span>
          </button>
          <button 
            onClick={() => setActiveTab('mentor')}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${activeTab === 'mentor' ? 'bg-gold text-petroleum' : 'hover:bg-white/10'}`}
          >
            <MessageSquare size={20} />
            <span>{t.mentor}</span>
          </button>
        </nav>

        <div className="mt-auto pt-6 border-t border-white/10 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
              <User size={20} />
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium truncate">{user.name}</p>
              <p className="text-[10px] text-gold uppercase">{user.tier}</p>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/20 text-red-400 transition-colors"
          >
            <LogOut size={20} />
            <span>{t.logout}</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl mb-2">{t.welcome}, {user.name.split(' ')[0]}</h2>
            <p className="text-petroleum/60">{t.continue} {school.school}</p>
          </div>

          <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-petroleum/5">
            <span className="text-xs font-bold text-petroleum/40 px-2">MODO:</span>
            <button 
              onClick={() => setLangMode('Universal')}
              className={`px-4 py-2 rounded-xl text-sm transition-all ${langMode === 'Universal' ? 'bg-petroleum text-white' : 'hover:bg-cream'}`}
            >
              Universal
            </button>
            <button 
              onClick={() => setLangMode('Técnico')}
              className={`px-4 py-2 rounded-xl text-sm transition-all ${langMode === 'Técnico' ? 'bg-petroleum text-white' : 'hover:bg-cream'}`}
            >
              Técnico
            </button>
          </div>
        </header>

        {activeTab === 'learning' && (
          <div className="space-y-8">
            {/* Progress Card */}
            <div className="bg-petroleum text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#c9a227" strokeWidth="8" 
                      strokeDasharray="282.7" strokeDashoffset={282.7 - (282.7 * user.progress / 100)} 
                      strokeLinecap="round" className="transition-all duration-1000" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                    {user.progress}%
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl mb-2">Tu progreso actual</h3>
                  <p className="text-cream/70 mb-4">Has completado los fundamentos básicos. ¡Sigue así!</p>
                  <button className="bg-gold text-petroleum px-6 py-2 rounded-xl font-bold hover:scale-105 transition-transform">
                    Continuar Lección
                  </button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            </div>

            {/* Mentor Profile Preview */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-petroleum/5 flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full border-2 border-gold overflow-hidden shrink-0">
                <img src={school.avatar} alt={school.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <Sparkles size={16} className="text-gold" />
                  <h4 className="text-xl font-bold text-petroleum">{school.name}</h4>
                  <span className="text-[10px] bg-gold/10 text-gold px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Experto {school.school}</span>
                </div>
                <p className="text-sm text-petroleum/60 italic mb-4">"{school.quote[lang]}"</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {school.knowledgeBase[lang].slice(0, 3).map((k, i) => (
                    <span key={i} className="text-[9px] bg-cream px-2 py-1 rounded-lg text-petroleum/50 font-bold uppercase tracking-tighter border border-petroleum/5">
                      {k}
                    </span>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => setActiveTab('mentor')}
                className="flex items-center gap-2 bg-petroleum text-white px-6 py-3 rounded-2xl font-bold hover:bg-gold hover:text-petroleum transition-all shadow-md group"
              >
                <span>Consultar Mentor</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-petroleum mb-6">{t.guides}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {school.guides.map((guide, i) => (
                  <div key={guide.id} className="bg-white p-6 rounded-3xl shadow-sm border border-petroleum/5 hover:border-gold/30 transition-all group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-cream text-[10px] font-bold text-petroleum uppercase tracking-widest">
                        {guide.level}
                      </span>
                      <span className="text-[10px] text-petroleum/40 font-bold uppercase">{guide.category}</span>
                    </div>
                    <h4 className="text-lg font-bold text-petroleum mb-2 group-hover:text-gold transition-colors">{guide.title[lang]}</h4>
                    <p className="text-sm text-petroleum/60 mb-6">{guide.description[lang]}</p>
                    <button className="w-full py-3 rounded-xl bg-petroleum text-white font-bold text-xs hover:bg-gold hover:text-petroleum transition-all">
                      {lang === 'es' ? 'Comenzar Guía' : 'Start Guide'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'mentor' && (
          <div className="h-[calc(100vh-250px)]">
            <MentorChat user={user} langMode={langMode} lang={lang} />
          </div>
        )}
      </main>
    </div>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Shield, Zap, Crown, Check } from 'lucide-react';

import { Language } from '../types';

interface PricingProps {
  lang: Language;
  onSelect: (tier: any) => void;
}

export const Pricing: React.FC<PricingProps> = ({ lang, onSelect }) => {
  const TRANSLATIONS = {
    es: {
      title: 'Invierte en su Bienestar',
      subtitle: 'Elige el nivel de acompañamiento que tú y tu animal necesitan para alcanzar la maestría.',
      select: 'Seleccionar',
      popular: 'Más Popular',
      tiers: [
        { name: 'Starter', price: '$27', description: 'Fundamentos básicos para empezar tu camino.', features: ['Acceso a Módulo 1', 'Mentoría IA Básica', 'Comunidad General'] },
        { name: 'Essential', price: '$97', description: 'La experiencia completa de aprendizaje.', features: ['Todos los Módulos', 'Certificado Oficial', 'Mentoría IA Pro (1 mes)'] },
        { name: 'Pro', price: '$197', description: 'Para quienes buscan maestría absoluta.', features: ['Mentoría IA Pro 24/7', 'Análisis de fotos/voz', 'Sesiones grupales'] },
        { name: 'Elite', price: '$497', description: 'Transformación total y consultoría de por vida.', features: ['Consultoría 1-a-1', 'Acceso de por vida', 'Mentoría IA Elite'] }
      ]
    },
    en: {
      title: 'Invest in their Welfare',
      subtitle: 'Choose the level of support you and your animal need to achieve mastery.',
      select: 'Select',
      popular: 'Most Popular',
      tiers: [
        { name: 'Starter', price: '$27', description: 'Basic foundations to start your journey.', features: ['Module 1 Access', 'Basic AI Mentorship', 'General Community'] },
        { name: 'Essential', price: '$97', description: 'The complete learning experience.', features: ['All Modules', 'Official Certificate', 'Pro AI Mentorship (1 month)'] },
        { name: 'Pro', price: '$197', description: 'For those seeking absolute mastery.', features: ['24/7 Pro AI Mentorship', 'Photo/Voice Analysis', 'Group Sessions'] },
        { name: 'Elite', price: '$497', description: 'Total transformation and lifelong consultancy.', features: ['1-on-1 Consultancy', 'Lifetime Access', 'Elite AI Mentorship'] }
      ]
    },
    pt: {
      title: 'Invista no Bem-estar deles',
      subtitle: 'Escolha o nível de suporte que você e seu animal precisam para alcançar a maestria.',
      select: 'Selecionar',
      popular: 'Mais Popular',
      tiers: [
        { name: 'Starter', price: '$27', description: 'Fundamentos básicos para começar sua jornada.', features: ['Acesso ao Módulo 1', 'Mentoria IA Básica', 'Comunidade Geral'] },
        { name: 'Essential', price: '$97', description: 'A experiência completa de aprendizado.', features: ['Todos os Módulos', 'Certificado Oficial', 'Mentoria IA Pro (1 mês)'] },
        { name: 'Pro', price: '$197', description: 'Para quem busca maestria absoluta.', features: ['Mentoria IA Pro 24/7', 'Análise de foto/voz', 'Sessões em grupo'] },
        { name: 'Elite', price: '$497', description: 'Transformação total e consultoria vitalícia.', features: ['Consultoria 1-a-1', 'Acesso vitalício', 'Mentoria IA Elite'] }
      ]
    },
    fr: {
      title: 'Investissez dans leur bien-être',
      subtitle: 'Choisissez le niveau d\'accompagnement dont vous et votre animal avez besoin pour atteindre la maîtrise.',
      select: 'Sélectionner',
      popular: 'Le plus populaire',
      tiers: [
        { name: 'Starter', price: '27 $', description: 'Bases fondamentales pour commencer votre voyage.', features: ['Accès au module 1', 'Mentorat IA de base', 'Communauté générale'] },
        { name: 'Essential', price: '97 $', description: 'L\'expérience d\'apprentissage complète.', features: ['Tous les modules', 'Certificat officiel', 'Mentorat IA Pro (1 mois)'] },
        { name: 'Pro', price: '197 $', description: 'Pour ceux qui recherchent une maîtrise absolue.', features: ['Mentorat IA Pro 24/7', 'Analyse photo/voix', 'Sessions de groupe'] },
        { name: 'Elite', price: '497 $', description: 'Transformation totale et conseil à vie.', features: ['Conseil 1-à-1', 'Accès à vie', 'Mentorat IA Elite'] }
      ]
    },
    de: {
      title: 'Investieren Sie in ihr Wohlergehen',
      subtitle: 'Wählen Sie das Maß an Unterstützung, das Sie und Ihr Tier benötigen, um Meisterschaft zu erlangen.',
      select: 'Auswählen',
      popular: 'Am beliebtesten',
      tiers: [
        { name: 'Starter', price: '27 $', description: 'Grundlagen für den Beginn Ihrer Reise.', features: ['Zugang zu Modul 1', 'Basis-KI-Mentoring', 'Allgemeine Community'] },
        { name: 'Essential', price: '97 $', description: 'Das komplette Lernerlebnis.', features: ['Alle Module', 'Offizielles Zertifikat', 'Pro-KI-Mentoring (1 Monat)'] },
        { name: 'Pro', price: '197 $', description: 'Für diejenigen, die absolute Meisterschaft anstreben.', features: ['24/7 Pro-KI-Mentoring', 'Foto-/Sprachanalyse', 'Gruppensitzungen'] },
        { name: 'Elite', price: '497 $', description: 'Totale Transformation und lebenslange Beratung.', features: ['1-zu-1-Beratung', 'Lebenslanger Zugang', 'Elite-KI-Mentoring'] }
      ]
    }
  };

  const t = TRANSLATIONS[lang];

  const tiers = t.tiers.map((tier, i) => {
    const icons = [
      <Shield className="text-slate-500" />,
      <Zap className="text-gold" />,
      <Sparkles className="text-gold" />,
      <Crown className="text-petroleum" />
    ];
    const colors = [
      'bg-slate-100',
      'bg-petroleum text-white',
      'bg-white border-2 border-gold',
      'gold-gradient text-petroleum'
    ];
    return {
      ...tier,
      icon: icons[i],
      color: colors[i],
      popular: i === 1
    };
  });

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">{t.title}</h2>
          <p className="text-petroleum/60 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-3xl flex flex-col ${tier.color} shadow-xl`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-petroleum px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {t.popular}
                </div>
              )}
              <div className="mb-6">{tier.icon}</div>
              <h3 className="text-2xl mb-2">{tier.name}</h3>
              <div className="text-4xl font-bold mb-4">{tier.price}</div>
              <p className="text-sm opacity-80 mb-8 flex-1">{tier.description}</p>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map(f => (
                   <li key={f} className="flex items-center gap-2 text-sm">
                    <Check size={16} className={tier.name === 'Essential' ? 'text-gold' : 'text-petroleum'} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onSelect(tier)}
                className={`w-full py-3 rounded-xl font-bold transition-all ${
                  tier.name === 'Essential' 
                    ? 'bg-gold text-petroleum hover:bg-white' 
                    : 'bg-petroleum text-white hover:bg-gold hover:text-petroleum'
                }`}
              >
                {t.select} {tier.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

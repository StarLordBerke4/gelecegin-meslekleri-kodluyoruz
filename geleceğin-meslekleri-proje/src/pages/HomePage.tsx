import React, { useState } from 'react';
import { PageType } from '../types';
import { HERO_STATS, FEATURED_RESOURCES, TESTIMONIALS, FAQS } from '../data/mockData';
import { CAREERS_DATA } from '../data/careersData';
import { SKILLS_DATA } from '../data/skillsData';
import { 
  Sparkles, ArrowRight, Compass, Briefcase, Brain, Rocket, 
  TrendingUp, Shield, Cpu, Database, Gamepad2, Palette, Bot, 
  CheckCircle2, ChevronDown, Award, ExternalLink, HelpCircle, 
  MessageSquare, Users, Star, BarChart3, Clock, DollarSign 
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuiz: () => void;
  onSelectCareer: (careerId: string) => void;
  onOpenComparison: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuiz,
  onSelectCareer,
  onOpenComparison,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Top 6 featured careers for landing page
  const featuredCareers = CAREERS_DATA.slice(0, 6);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-6 h-6 text-amber-600" />;
      case 'ShieldCheck': return <Shield className="w-6 h-6 text-blue-600" />;
      case 'Database': return <Database className="w-6 h-6 text-emerald-600" />;
      case 'Gamepad2': return <Gamepad2 className="w-6 h-6 text-indigo-600" />;
      case 'Palette': return <Palette className="w-6 h-6 text-pink-600" />;
      case 'Bot': return <Bot className="w-6 h-6 text-amber-500" />;
      default: return <Briefcase className="w-6 h-6 text-slate-700" />;
    }
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-slate-900 text-white rounded-b-[2.5rem] sm:rounded-b-[3.5rem] pt-12 sm:pt-20 pb-20 sm:pb-28 border-b border-slate-800">
        
        {/* Glow Effects */}
        <div className="absolute -top-24 -left-20 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-sm animate-bounce-slow">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Geleceğinize Yön Veren Dijital Kariyer Rehberi</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Yarının Dünyasını Şekillendirecek{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Meslekleri Keşfet
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              14–24 yaş arası gençler için yapay zekâ, siber güvenlik, veri bilimi ve yenilikçi teknolojilerle şekillenen kariyer yolculukları, gerekli beceriler ve adım adım rehberler.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('careers')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-base shadow-lg shadow-amber-600/30 hover:scale-105 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Meslekleri Keşfet</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenQuiz}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700/90 text-white font-bold text-base border border-slate-700/80 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Brain className="w-5 h-5 text-amber-400" />
                <span>Beceri Keşif Testi (1 Dk)</span>
              </button>
            </div>

            {/* Quick Helper Banner */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>%100 Ücretsiz & Reklamsız</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>12+ Geleceğin Mesleği</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>İnteraktif Yol Haritası</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. ÖNE ÇIKAN MESLEKLER KARTLARI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" /> Popüler Kariyer Yolları
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Öne Çıkan Geleceğin Meslekleri
            </h2>
          </div>
          <button
            onClick={() => onNavigate('careers')}
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-800 group"
          >
            <span>Tüm 12 Mesleği İncele</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredCareers.map((career) => (
            <div
              key={career.id}
              onClick={() => {
                onSelectCareer(career.id);
                onNavigate('careers');
              }}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-amber-400/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                
                {/* Top header */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200/60 group-hover:scale-110 transition-transform">
                    {renderIcon(career.iconName)}
                  </div>
                  {career.highlightBadge && (
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-900 text-amber-400 border border-slate-800">
                      {career.highlightBadge}
                    </span>
                  )}
                </div>

                {/* Title & Desc */}
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    {career.category}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors mt-0.5">
                    {career.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-2">
                    {career.shortDesc}
                  </p>
                </div>

                {/* Technical Skills Tag */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {career.technicalSkills.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                  {career.technicalSkills.length > 3 && (
                    <span className="px-2 py-1 rounded-lg bg-amber-50 text-amber-800 text-[11px] font-bold">
                      +{career.technicalSkills.length - 3}
                    </span>
                  )}
                </div>

              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                <span className="text-emerald-700 font-extrabold flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5" /> {career.salaryRange}
                </span>
                <span className="text-amber-600 group-hover:underline flex items-center gap-1">
                  Detaylar <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 3. NEDEN GELECEĞİN MESLEKLERİ? (İSTATİSTİKLER) */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 my-12 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-slate-800 relative overflow-hidden">
        
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <BarChart3 className="w-4 h-4" />
            <span>Neden Şimdiden Hazırlanmalısın?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Neden Geleceğin Mesleklerine Odaklanmalısın?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Dijital dönüşüm ve yapay zekâ devrimi iş dünyasını kökten değiştiriyor. Doğru becerilere yatırım yapan gençler, yarının aranan yetenekleri oluyor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HERO_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 space-y-2 hover:border-amber-500/40 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-black text-amber-400 tracking-tight">
                {stat.value}
              </div>
              <h3 className="text-sm font-bold text-white">{stat.label}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Quick launcher to Comparison tool */}
        <div className="mt-12 text-center bg-slate-800/50 p-6 rounded-2xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="text-base font-bold text-white">Kararsız mısın? Meslek Karşılaştırma Aracını Kullan!</h4>
            <p className="text-xs text-slate-400">İstediğin 3 mesleği maaş, zorluk ve büyüme oranlarına göre yan yana kıyasla.</p>
          </div>
          <button
            onClick={onOpenComparison}
            className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-bold transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            <span>Karşılaştırma Aracını Aç</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>


      {/* 4. POPÜLER BECERİLER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1 flex items-center gap-1.5">
              <Brain className="w-4 h-4" /> Yükselen Beceriler
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Seni Öne Geçirecek Popüler Beceriler
            </h2>
          </div>
          <button
            onClick={() => onNavigate('skills')}
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-800 group"
          >
            <span>Tüm Beceriler Rehberine Git</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.slice(0, 6).map((skill) => (
            <div
              key={skill.id}
              onClick={() => onNavigate('skills')}
              className="bg-white p-6 rounded-3xl border border-slate-200/80 hover:border-amber-400 shadow-xs hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60">
                  {skill.category === 'technical' ? 'Teknik Beceri' : skill.category === 'soft' ? 'Sosyal Beceri' : 'Yükselen Teknoloji'}
                </span>
                <span className="text-[11px] text-slate-400 font-semibold">Önemli</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                {skill.name}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {skill.description}
              </p>
              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                İlgili Meslekler: <span className="text-slate-800 font-bold">{skill.relatedCareers.slice(0, 2).join(', ')}</span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 5. KARİYER YOL HARİTASI (ÖĞREN, UYGULA, PORTFÖY OLUŞTUR, İŞE BAŞLA) */}
      <section className="bg-gradient-to-b from-amber-50/60 to-white py-16 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-amber-100">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
            <Rocket className="w-4 h-4" /> 4 Adımda Başarı
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Kariyer Yol Haritası Nasıl İşler?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Sıfırdan başlayıp geleceğin mesleğinde uzmanlaşana kadar izlemen gereken temel 4 aşama:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {[
            {
              step: '01',
              title: 'Öğren',
              desc: 'Gerekli teknik ve sosyal becerilerin temellerini online kurslar ve videolarla kavra.',
              icon: <Brain className="w-6 h-6 text-amber-600" />
            },
            {
              step: '02',
              title: 'Uygula',
              desc: 'Öğrendiğin bilgileri küçük projeler, algoritmalar ve kodlama egzersizleriyle pekiştir.',
              icon: <Cpu className="w-6 h-6 text-amber-600" />
            },
            {
              step: '03',
              title: 'Portföy Oluştur',
              desc: 'Geliştirdiğin projeleri GitHub, Behance veya kişisel web sitende sergileyerek kanıtla.',
              icon: <Award className="w-6 h-6 text-amber-600" />
            },
            {
              step: '04',
              title: 'İşe Başla',
              desc: 'Staj programlarına başvur, topluluklara katıl ve hayalindeki kariyer adımını at.',
              icon: <Rocket className="w-6 h-6 text-amber-600" />
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black text-amber-200 font-mono">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}

        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate('guide')}
            className="px-8 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-all shadow-md"
          >
            Detaylı İnteraktif Yol Haritasını Gör →
          </button>
        </div>
      </section>


      {/* 6. ÖNE ÇIKAN EĞİTİM KAYNAKLARI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1 flex items-center gap-1.5">
            <Award className="w-4 h-4" /> Eğitim Kaynakları
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Öne Çıkan Ücretsiz ve Kaliteli Eğitim Kaynakları
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_RESOURCES.map((res, idx) => (
            <a
              key={idx}
              href={res.url}
              target="_blank"
              rel="noreferrer"
              className="bg-white p-6 rounded-3xl border border-slate-200/80 hover:border-amber-400 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 inline-block mb-3">
                  {res.badge}
                </span>
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                  {res.title}
                </h3>
                <p className="text-xs text-amber-700 font-semibold mt-0.5">{res.category}</p>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {res.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-bold text-slate-700 flex items-center justify-between group-hover:text-amber-600">
                <span>Siteye Git</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </section>


      {/* 7. KULLANICI YORUMLARI */}
      <section className="bg-slate-50 py-16 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-slate-200/80">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
            <Users className="w-4 h-4" /> Gençlerin Deneyimleri
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Geleceğini Şekillendiren Gençler Ne Diyor?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-amber-300"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{t.name}, {t.age}</h4>
                  <p className="text-[11px] text-amber-700 font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 8. SIK SORULAN SORULAR */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
            <HelpCircle className="w-4 h-4 text-amber-600" /> Sık Sorulan Sorular
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Kafandaki Sorulara Yanıtlar
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm font-bold text-slate-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>


      {/* 9. SON CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto">
            <Rocket className="w-8 h-8 animate-bounce" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Geleceğini Şansa Bırakma, Şimdiden Harekete Geç!
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Beceri testini çöz, ilgi duyduğun mesleği seç ve senin için hazırladığımız adım adım rehberle öğrenmeye bugün başla.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('careers')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-sm shadow-lg shadow-amber-600/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Kariyer Yolculuğuna Başla</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 transition-all"
            >
              Bizimle İletişime Geç
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

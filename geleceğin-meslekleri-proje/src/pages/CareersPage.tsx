import React, { useState } from 'react';
import { CAREERS_DATA } from '../data/careersData';
import { Career, CareerCategory, PageType } from '../types';
import { 
  Search, Filter, Briefcase, Sparkles, DollarSign, TrendingUp, 
  Check, ArrowRight, BookOpen, Layers, BarChart2, Plus, CheckCircle2,
  ExternalLink, Cpu, ShieldCheck, Database, Gamepad2, Palette, Bot, Code, Cloud, Dna, Zap, Link, Wifi 
} from 'lucide-react';

interface CareersPageProps {
  onSelectCareerModal: (career: Career) => void;
  onNavigateToSkills: (careerTitle: string) => void;
  selectedComparisonIds: string[];
  onToggleComparison: (id: string) => void;
  onOpenComparison: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({
  onSelectCareerModal,
  onNavigateToSkills,
  selectedComparisonIds,
  onToggleComparison,
  onOpenComparison,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');

  const categories = [
    'Tümü',
    'Yapay Zekâ & Veri',
    'Yazılım & Oyun',
    'Siber Güvenlik & Bulut',
    'Mühendislik & Robotik',
    'Geleceğin Teknolojileri',
  ];

  const filteredCareers = CAREERS_DATA.filter((career) => {
    const matchesCategory =
      selectedCategory === 'Tümü' || career.category === selectedCategory;
    const matchesSearch =
      career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.technicalSkills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-6 h-6 text-amber-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'Database': return <Database className="w-6 h-6 text-emerald-600" />;
      case 'Gamepad2': return <Gamepad2 className="w-6 h-6 text-indigo-600" />;
      case 'Palette': return <Palette className="w-6 h-6 text-pink-600" />;
      case 'Bot': return <Bot className="w-6 h-6 text-amber-500" />;
      case 'Code': return <Code className="w-6 h-6 text-slate-700" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-sky-600" />;
      case 'Dna': return <Dna className="w-6 h-6 text-pink-500" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-500" />;
      case 'Link': return <Link className="w-6 h-6 text-teal-600" />;
      case 'Wifi': return <Wifi className="w-6 h-6 text-cyan-600" />;
      default: return <Briefcase className="w-6 h-6 text-slate-700" />;
    }
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-800">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Briefcase className="w-4 h-4" />
            <span>Kapsamlı Meslek Kataloğu</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Geleceğin Yükselen <span className="text-amber-500">12 Mesleği</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Yapay zekâ, veri bilimi, oyun geliştirme, siber güvenlik, robotik ve yeşil enerjinin öncü rollerini detaylıca inceleyin. Becerilerini görün ve karşılaştırın.
          </p>

          {/* Quick Comparison Bar Launcher */}
          <div className="pt-4 flex items-center gap-4">
            <button
              onClick={onOpenComparison}
              className="px-5 py-3 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <BarChart2 className="w-4 h-4" />
              <span>Meslek Karşılaştırma Aracı ({selectedComparisonIds.length}/3)</span>
            </button>
            {selectedComparisonIds.length > 0 && (
              <span className="text-xs text-amber-300 font-medium">
                {selectedComparisonIds.length} meslek karşılaştırma listesinde
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Filter and Search Section */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Meslek adı, beceri veya teknoloji ara..."
              className="w-full bg-white border border-slate-200/80 rounded-2xl pl-11 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all shadow-xs"
            />
          </div>

          {/* Result Count */}
          <div className="text-xs font-bold text-slate-500">
            Toplam <span className="text-slate-900">{filteredCareers.length}</span> meslek listeleniyor
          </div>

        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Career Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredCareers.map((career) => {
          const isCompared = selectedComparisonIds.includes(career.id);
          return (
            <div
              key={career.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-amber-400 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header Row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/60 group-hover:scale-105 transition-transform">
                    {renderIcon(career.iconName)}
                  </div>

                  <button
                    onClick={() => onToggleComparison(career.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isCompared
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-amber-50 text-slate-700 hover:text-amber-800 border border-slate-200'
                    }`}
                  >
                    {isCompared ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Seçildi
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" /> Karşılaştır
                      </>
                    )}
                  </button>
                </div>

                {/* Category & Title */}
                <div>
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block">
                    {career.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors mt-0.5">
                    {career.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {career.shortDesc}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Ort. Maaş</span>
                    <span className="text-xs font-extrabold text-emerald-700 flex items-center gap-1 mt-0.5">
                      <DollarSign className="w-3.5 h-3.5" /> {career.salaryRange}
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Büyüme Hızı</span>
                    <span className="text-xs font-extrabold text-amber-700 flex items-center gap-1 mt-0.5">
                      <TrendingUp className="w-3.5 h-3.5" /> {career.growthRate}
                    </span>
                  </div>
                </div>

                {/* Required Technical Skills preview */}
                <div className="pt-1">
                  <span className="text-[11px] font-bold text-slate-500 block mb-1.5">
                    Gerekli Teknik Beceriler:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {career.technicalSkills.slice(0, 3).map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded-md bg-amber-50 text-amber-900 text-[11px] font-medium border border-amber-200/50"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                <button
                  onClick={() => onSelectCareerModal(career)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors shadow-xs flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Detaylı İncele</span>
                </button>

                <button
                  onClick={() => onNavigateToSkills(career.title)}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-amber-50 text-slate-700 hover:text-amber-900 border border-slate-200/80 font-bold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Gerekli Becerileri İncele</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {filteredCareers.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-3">
          <Briefcase className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">Aramanıza Uygun Meslek Bulunamadı</h3>
          <p className="text-xs text-slate-500">
            Arama teriminizi değiştirmeyi veya filtreleri temizlemeyi deneyin.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('Tümü');
            }}
            className="px-4 py-2 bg-amber-600 text-white rounded-xl text-xs font-bold"
          >
            Filtreleri Temizle
          </button>
        </div>
      )}

    </div>
  );
};

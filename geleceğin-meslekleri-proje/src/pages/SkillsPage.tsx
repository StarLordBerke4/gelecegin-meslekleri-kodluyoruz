import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/skillsData';
import { PageType, SkillItem, SkillType } from '../types';
import { 
  Brain, Sparkles, Code2, LineChart, Lock, CloudRain, Layers, 
  Scale, Compass, Users, Search, ExternalLink, Rocket, ArrowRight,
  BookOpen, CheckCircle2, Award 
} from 'lucide-react';

interface SkillsPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuiz: () => void;
  initialFilter?: string;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({
  onNavigate,
  onOpenQuiz,
  initialFilter = '',
}) => {
  const [searchTerm, setSearchTerm] = useState(initialFilter);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [activeSkillModal, setActiveSkillModal] = useState<SkillItem | null>(null);

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesType = selectedType === 'all' || skill.category === selectedType;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.relatedCareers.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesType && matchesSearch;
  });

  const renderSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-6 h-6 text-amber-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'LineChart': return <LineChart className="w-6 h-6 text-emerald-600" />;
      case 'Lock': return <Lock className="w-6 h-6 text-blue-600" />;
      case 'CloudRain': return <CloudRain className="w-6 h-6 text-sky-600" />;
      case 'Layers': return <Layers className="w-6 h-6 text-pink-600" />;
      case 'Brain': return <Brain className="w-6 h-6 text-amber-600" />;
      case 'Scale': return <Scale className="w-6 h-6 text-purple-600" />;
      case 'Compass': return <Compass className="w-6 h-6 text-teal-600" />;
      default: return <Users className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-800">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Brain className="w-4 h-4" />
            <span>Geleceğin Becerileri Rehberi</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Geleceğin Becerilerini <span className="text-amber-500">Öğren ve Geliştir</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Teknoloji dünyasında seni aranan yetenek yapacak teknik beceriler, sosyal yetkinlikler (soft skills) ve ücretsiz öğrenme kaynakları.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onOpenQuiz}
              className="px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Beceri Keşif Testini Çöz</span>
            </button>
            <button
              onClick={() => onNavigate('guide')}
              className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
            >
              <Rocket className="w-4 h-4 text-amber-400" />
              <span>Kariyer Yolunu Planla</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative flex-1 w-full max-w-md">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Beceri adı, öğrenme kaynağı veya meslek ara..."
              className="w-full bg-white border border-slate-200/80 rounded-2xl pl-11 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 shadow-xs"
            />
          </div>

          {/* Type Filter Buttons */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80 w-full sm:w-auto overflow-x-auto">
            {[
              { id: 'all', label: 'Tümü' },
              { id: 'technical', label: 'Teknik Beceriler' },
              { id: 'soft', label: 'Sosyal Beceriler' },
              { id: 'emerging', label: 'Yükselen Teknolojiler' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedType(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedType === tab.id
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-amber-400 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
          >
            <div className="space-y-4">
              
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200/60 group-hover:scale-105 transition-transform">
                  {renderSkillIcon(skill.iconName)}
                </div>
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                  {skill.category === 'technical' ? 'Teknik' : skill.category === 'soft' ? 'Sosyal' : 'Geleceğin Yetkinliği'}
                </span>
              </div>

              {/* Title & Desc */}
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Importance Box */}
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                <span className="font-bold text-amber-700 block mb-0.5">Neden Önemli?</span>
                {skill.importance}
              </div>

              {/* Related Careers */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Kullanan Meslekler:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {skill.relatedCareers.map((c, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 text-xs font-semibold border border-amber-200/50"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learning Resources Preview */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-bold text-slate-500 block">Önerilen Öğrenme Kaynakları:</span>
                <ul className="space-y-1.5">
                  {skill.learningResources.map((res, idx) => (
                    <li key={idx} className="flex items-center justify-between text-xs p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="font-semibold text-slate-800">{res.name}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                        {res.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Project Ideas & Bottom CTA */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500">
                <span className="font-bold text-slate-700">Proje Fikri:</span> {skill.projectIdeas[0] || 'Kendi portföy projenizi üretin.'}
              </div>
              <button
                onClick={() => onNavigate('guide')}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors shadow-xs flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Kariyer Yolunu Planla</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Bottom CTA to Career Guide */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-white p-8 sm:p-10 rounded-3xl text-center space-y-4 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold">
          Bu Becerileri Nasıl Adım Adım Kazanabilirsin?
        </h2>
        <p className="text-xs sm:text-sm max-w-xl mx-auto text-amber-100 leading-relaxed">
          Kariyer Rehberi sayfamızdaki kişiselleştirilmiş yol haritaları ve kontrol listeleri ile öğrenme sürecini planla.
        </p>
        <button
          onClick={() => onNavigate('guide')}
          className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-2xl shadow-lg transition-all"
        >
          Kariyer Yol Haritasını Aç →
        </button>
      </div>

    </div>
  );
};

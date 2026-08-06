import React from 'react';
import { Career } from '../types';
import { X, Check, DollarSign, TrendingUp, BookOpen, Briefcase, Award, Rocket, Sparkles, Building2, ExternalLink } from 'lucide-react';

interface CareerDetailModalProps {
  career: Career | null;
  onClose: () => void;
  onGoToSkills: (careerTitle: string) => void;
  onGoToRoadmap: (careerId: string) => void;
}

export const CareerDetailModal: React.FC<CareerDetailModalProps> = ({
  career,
  onClose,
  onGoToSkills,
  onGoToRoadmap,
}) => {
  if (!career) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl max-h-[92vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-100">
        
        {/* Header */}
        <div className="relative p-6 sm:p-8 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{career.category}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {career.title}
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                {career.shortDesc}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-2xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Key Stats Pill Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800/80">
            <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60">
              <span className="text-[11px] text-slate-400 font-bold uppercase block">Ortalama Maaş</span>
              <span className="text-sm sm:text-base font-extrabold text-amber-400 flex items-center gap-1 mt-0.5">
                <DollarSign className="w-4 h-4 shrink-0" /> {career.salaryRange}
              </span>
            </div>
            <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60">
              <span className="text-[11px] text-slate-400 font-bold uppercase block">Büyüme Hızı</span>
              <span className="text-sm sm:text-base font-extrabold text-emerald-400 flex items-center gap-1 mt-0.5">
                <TrendingUp className="w-4 h-4 shrink-0" /> {career.growthRate}
              </span>
            </div>
            <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60">
              <span className="text-[11px] text-slate-400 font-bold uppercase block">Talep Düzeyi</span>
              <span className="text-sm sm:text-base font-extrabold text-white mt-0.5 block">
                {career.demandLevel}
              </span>
            </div>
            <div className="bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60">
              <span className="text-[11px] text-slate-400 font-bold uppercase block">Eğitim / Zorluk</span>
              <span className="text-sm sm:text-base font-extrabold text-amber-300 mt-0.5 block">
                {career.difficultyLevel}
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          
          {/* Detailed Overview */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-600" />
              Meslek Hakkında Detaylı Bilgi
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
              {career.fullDesc}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Technical Skills */}
            <div className="bg-amber-50/50 p-5 rounded-2xl border border-amber-200/60 space-y-3">
              <h4 className="text-sm font-bold text-amber-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Gerekli Teknik Beceriler
              </h4>
              <ul className="space-y-2">
                {career.technicalSkills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-800">
                    <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-4 h-4 text-slate-700" />
                Sosyal Beceriler (Soft Skills)
              </h4>
              <ul className="space-y-2">
                {career.softSkills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                    <Check className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-3">
              Kullanılan Teknolojiler & Araçlar
            </h3>
            <div className="flex flex-wrap gap-2">
              {career.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 text-amber-400 font-mono text-xs font-bold shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Recommended Courses & Resources */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-600" />
              Önerilen Eğitim Kaynakları & Kurslar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {career.recommendedCourses.map((course, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between"
                >
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">{course.title}</h5>
                    <span className="text-[11px] text-slate-500 font-medium">{course.provider}</span>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      course.isFree
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {course.isFree ? 'Ücretsiz' : 'Sertifikalı'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Career Paths & Sectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Rocket className="w-4 h-4 text-amber-600" />
                Kariyer Yolu İlerlemesi
              </h4>
              <ol className="relative border-l-2 border-amber-200 ml-3 space-y-3 my-2">
                {career.careerPaths.map((step, idx) => (
                  <li key={idx} className="ml-4 text-xs font-medium text-slate-700">
                    <span className="absolute w-2.5 h-2.5 bg-amber-600 rounded-full -left-[5.5px] top-1.5 border-2 border-white"></span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-slate-700" />
                İstihdam Edilen Sektörler
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {career.jobSectors.map((sector, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onGoToSkills(career.title);
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300/80 text-xs font-bold transition-all flex items-center justify-center gap-2"
          >
            <span>Gerekli Becerileri İncele</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => {
              onClose();
              onGoToRoadmap(career.id);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Rocket className="w-4 h-4 text-amber-400" />
            <span>Kariyer Yol Haritasını Gör</span>
          </button>
        </div>

      </div>
    </div>
  );
};

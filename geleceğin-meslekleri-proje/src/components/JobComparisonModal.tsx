import React, { useState } from 'react';
import { Career } from '../types';
import { CAREERS_DATA } from '../data/careersData';
import { X, Plus, Trash2, Check, DollarSign, TrendingUp, Clock, BookOpen, Sparkles, ShieldAlert } from 'lucide-react';

interface JobComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedIds: string[];
  onToggleCareer: (id: string) => void;
  onNavigateToSkills: (careerTitle: string) => void;
}

export const JobComparisonModal: React.FC<JobComparisonModalProps> = ({
  isOpen,
  onClose,
  selectedIds,
  onToggleCareer,
  onNavigateToSkills,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (!isOpen) return null;

  const comparedCareers = CAREERS_DATA.filter((c) => selectedIds.includes(c.id));
  const availableCareers = CAREERS_DATA.filter((c) => !selectedIds.includes(c.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-100">
        
        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">Meslek Karşılaştırma Aracı</h2>
              <p className="text-xs text-slate-300">
                Seçilen meslekleri maaş, büyüme potansiyeli, zorluk ve beceriler açısından kıyaslayın ({comparedCareers.length}/3)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Add Career Picker Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-amber-50/80 p-4 rounded-2xl border border-amber-200/80">
            <div className="text-sm font-semibold text-slate-800">
              Karşılaştırmak istediğiniz meslekleri ekleyin veya çıkarın:
            </div>

            <div className="relative">
              {comparedCareers.length < 3 && (
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
                >
                  <Plus className="w-4 h-4" /> Meslek Ekle
                </button>
              )}

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 max-h-60 overflow-y-auto">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Eklenebilir Meslekler
                  </div>
                  {availableCareers.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        onToggleCareer(c.id);
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-700 flex items-center justify-between"
                    >
                      <span>{c.title}</span>
                      <Plus className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* If empty */}
          {comparedCareers.length === 0 ? (
            <div className="text-center py-12 px-4 bg-slate-50 rounded-2xl border border-dashed border-slate-300 space-y-3">
              <ShieldAlert className="w-10 h-10 text-amber-500 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">Henüz Meslek Seçilmedi</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Lütfen karşılaştırma yapmak için yukarıdaki butondan veya meslek kartlarındaki "Karşılaştır" butonundan en az 2 meslek seçin.
              </p>
            </div>
          ) : (
            /* Comparison Table Grid */
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr>
                    <th className="p-4 bg-slate-100/80 rounded-tl-2xl text-xs font-bold text-slate-500 uppercase tracking-wider w-1/4">
                      Kriterler
                    </th>
                    {comparedCareers.map((c) => (
                      <th key={c.id} className="p-4 bg-slate-50 border-l border-slate-200 relative min-w-[200px]">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
                              {c.category}
                            </span>
                            <h4 className="text-base font-extrabold text-slate-900">{c.title}</h4>
                          </div>
                          <button
                            onClick={() => onToggleCareer(c.id)}
                            className="p-1 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                            title="Kaldır"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm">
                  
                  {/* Row: Salary */}
                  <tr>
                    <td className="p-4 font-bold text-slate-800 bg-slate-50/50 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-emerald-600" />
                      Ortalama Maaş
                    </td>
                    {comparedCareers.map((c) => (
                      <td key={c.id} className="p-4 border-l border-slate-200 font-extrabold text-slate-900 bg-emerald-50/30">
                        {c.salaryRange}
                      </td>
                    ))}
                  </tr>

                  {/* Row: Growth Rate */}
                  <tr>
                    <td className="p-4 font-bold text-slate-800 bg-slate-50/50 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-amber-600" />
                      Büyüme Potansiyeli
                    </td>
                    {comparedCareers.map((c) => (
                      <td key={c.id} className="p-4 border-l border-slate-200">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-100 text-amber-800">
                          {c.growthRate}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Row: Study Duration */}
                  <tr>
                    <td className="p-4 font-bold text-slate-800 bg-slate-50/50 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      Eğitim Süresi
                    </td>
                    {comparedCareers.map((c) => (
                      <td key={c.id} className="p-4 border-l border-slate-200 font-medium text-slate-700">
                        {c.studyDuration}
                      </td>
                    ))}
                  </tr>

                  {/* Row: Difficulty Level */}
                  <tr>
                    <td className="p-4 font-bold text-slate-800 bg-slate-50/50 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-indigo-600" />
                      Öğrenim Zorluğu
                    </td>
                    {comparedCareers.map((c) => (
                      <td key={c.id} className="p-4 border-l border-slate-200">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-800">
                          {c.difficultyLevel}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Row: Technical Skills */}
                  <tr>
                    <td className="p-4 font-bold text-slate-800 bg-slate-50/50">
                      Gerekli Teknik Beceriler
                    </td>
                    {comparedCareers.map((c) => (
                      <td key={c.id} className="p-4 border-l border-slate-200">
                        <ul className="space-y-1 text-xs text-slate-700">
                          {c.technicalSkills.map((s, idx) => (
                            <li key={idx} className="flex items-center gap-1.5">
                              <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  {/* Row: Technologies */}
                  <tr>
                    <td className="p-4 font-bold text-slate-800 bg-slate-50/50">
                      Ana Teknolojiler
                    </td>
                    {comparedCareers.map((c) => (
                      <td key={c.id} className="p-4 border-l border-slate-200">
                        <div className="flex flex-wrap gap-1">
                          {c.technologies.map((tech, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-mono">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Row: Actions */}
                  <tr>
                    <td className="p-4 font-bold text-slate-800 bg-slate-50/50">
                      Sonraki Adım
                    </td>
                    {comparedCareers.map((c) => (
                      <td key={c.id} className="p-4 border-l border-slate-200">
                        <button
                          onClick={() => {
                            onClose();
                            onNavigateToSkills(c.title);
                          }}
                          className="w-full px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
                        >
                          Becerileri Detaylı Gör →
                        </button>
                      </td>
                    ))}
                  </tr>

                </tbody>
              </table>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
          <span>İpucu: En fazla 3 mesleği yan yana detaylıca kıyaslayabilirsiniz.</span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl font-bold transition-colors"
          >
            Kapat
          </button>
        </div>

      </div>
    </div>
  );
};

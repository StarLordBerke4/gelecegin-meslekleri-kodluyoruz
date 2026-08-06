import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/mockData';
import { CAREERS_DATA } from '../data/careersData';
import { Career } from '../types';
import { X, Sparkles, CheckCircle2, ArrowRight, RotateCcw, Award, Rocket, BarChart2, Palette, Shield, Bot, Cpu, Gamepad2, Zap, Dna, Code, Cloud, Layers, Wifi, Brain, Compass, Users } from 'lucide-react';

interface SkillQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToCareer: (careerId: string) => void;
}

export const SkillQuizModal: React.FC<SkillQuizModalProps> = ({
  isOpen,
  onClose,
  onNavigateToCareer,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen) return null;

  const question = QUIZ_QUESTIONS[currentStep];

  // Map icon strings to Lucide icon components
  const renderIcon = (name: string) => {
    switch (name) {
      case 'BarChart2': return <BarChart2 className="w-5 h-5 text-amber-600" />;
      case 'Palette': return <Palette className="w-5 h-5 text-purple-600" />;
      case 'Shield': return <Shield className="w-5 h-5 text-blue-600" />;
      case 'Bot': return <Bot className="w-5 h-5 text-emerald-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-amber-600" />;
      case 'Gamepad2': return <Gamepad2 className="w-5 h-5 text-indigo-600" />;
      case 'Zap': return <Zap className="w-5 h-5 text-yellow-600" />;
      case 'Dna': return <Dna className="w-5 h-5 text-pink-600" />;
      case 'Code': return <Code className="w-5 h-5 text-slate-700" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-sky-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-amber-700" />;
      case 'Wifi': return <Wifi className="w-5 h-5 text-teal-600" />;
      case 'Brain': return <Brain className="w-5 h-5 text-amber-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Users': return <Users className="w-5 h-5 text-blue-500" />;
      default: return <Compass className="w-5 h-5 text-slate-600" />;
    }
  };

  const handleSelectOption = (optionIndex: number) => {
    const updated = [...selectedAnswers];
    updated[currentStep] = optionIndex;
    setSelectedAnswers(updated);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  // Calculate results
  const calculateResults = (): { career: Career; matchPercentage: number }[] => {
    const scores: Record<string, number> = {};

    selectedAnswers.forEach((optIndex, qIndex) => {
      if (optIndex !== undefined && QUIZ_QUESTIONS[qIndex]) {
        const option = QUIZ_QUESTIONS[qIndex].options[optIndex];
        if (option && option.points) {
          Object.entries(option.points).forEach(([careerId, pts]) => {
            scores[careerId] = (scores[careerId] || 0) + pts;
          });
        }
      }
    });

    const maxPossibleScore = 10;
    const sorted = Object.entries(scores)
      .map(([careerId, score]) => {
        const career = CAREERS_DATA.find((c) => c.id === careerId);
        const matchPercentage = Math.min(98, Math.round((score / maxPossibleScore) * 100) + 55);
        return { career, matchPercentage };
      })
      .filter((item): item is { career: Career; matchPercentage: number } => item.career !== undefined)
      .sort((a, b) => b.matchPercentage - a.matchPercentage);

    // If fewer than 3, fill with top default careers
    if (sorted.length < 3) {
      CAREERS_DATA.slice(0, 3).forEach((c) => {
        if (!sorted.some((s) => s.career.id === c.id)) {
          sorted.push({ career: c, matchPercentage: 75 });
        }
      });
    }

    return sorted.slice(0, 3);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setIsFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
              <Sparkles className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">Beceri Keşif Testi</h2>
              <p className="text-xs text-slate-300">
                {isFinished
                  ? 'Kişiselleştirilmiş Kariyer Analiziniz Hazır!'
                  : `Soru ${currentStep + 1} / ${QUIZ_QUESTIONS.length}`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress bar */}
        {!isFinished && (
          <div className="w-full bg-slate-100 h-1.5">
            <div
              className="bg-gradient-to-r from-amber-500 to-amber-600 h-1.5 transition-all duration-300"
              style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
            />
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[75vh]">
          {!isFinished ? (
            <div className="space-y-6">
              
              {/* Question text */}
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                  Adım {currentStep + 1}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                  {question.question}
                </h3>
                <p className="text-xs text-slate-500 mt-1">{question.subtitle}</p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {question.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentStep] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-4 group ${
                        isSelected
                          ? 'border-amber-600 bg-amber-50/60 shadow-sm'
                          : 'border-slate-100 hover:border-amber-300 bg-slate-50/50 hover:bg-amber-50/30'
                      }`}
                    >
                      <div className="p-2.5 rounded-xl bg-white shadow-xs border border-slate-100 group-hover:scale-105 transition-transform shrink-0">
                        {renderIcon(option.iconName)}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-900 transition-colors">
                          {option.label}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                          {option.description}
                        </p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-1 ${
                        isSelected ? 'border-amber-600 bg-amber-600 text-white' : 'border-slate-300'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>
          ) : (
            /* Result View */
            <div className="space-y-6 text-center">
              
              <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto shadow-inner">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Sana En Uygun Geleceğin Meslekleri!
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                  Cevapların analiz edildi. Yeteneklerine, tutkularına ve ilgi alanlarına göre öne çıkan ilk 3 meslek önerimiz:
                </p>
              </div>

              {/* Matches List */}
              <div className="space-y-4 text-left">
                {calculateResults().map((res, index) => (
                  <div
                    key={res.career.id}
                    className="p-5 rounded-2xl border border-slate-200 bg-slate-50 hover:border-amber-400 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-slate-900 text-amber-400 font-extrabold text-xs flex items-center justify-center shrink-0">
                          #{index + 1}
                        </span>
                        <h4 className="text-base font-bold text-slate-900">
                          {res.career.title}
                        </h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">
                          %{res.matchPercentage} Uyumlu
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-2">
                        {res.career.shortDesc}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        onClose();
                        onNavigateToCareer(res.career.id);
                      }}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors shadow-sm flex items-center justify-center gap-1.5 shrink-0"
                    >
                      <span>İncele</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="pt-2 flex justify-center">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Testi Yeniden Çöz
                </button>
              </div>

            </div>
          )}
        </div>

        {/* Footer info */}
        {!isFinished && (
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <button
              disabled={currentStep === 0}
              onClick={() => setCurrentStep(currentStep - 1)}
              className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 disabled:opacity-30"
            >
              ← Önceki Soru
            </button>
            <span className="text-[11px] text-slate-400 font-semibold">
              Yaklaşık 1 dakika sürer
            </span>
          </div>
        )}

      </div>
    </div>
  );
};

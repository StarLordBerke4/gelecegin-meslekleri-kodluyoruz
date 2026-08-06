import React, { useState } from 'react';
import { CAREERS_DATA } from '../data/careersData';
import { PageType, Career } from '../types';
import { 
  Rocket, CheckCircle2, Circle, BookOpen, Award, FileText, 
  Sparkles, ExternalLink, ArrowRight, ShieldAlert, GraduationCap, 
  Briefcase, Code, FolderCheck, Users, Mail, HelpCircle 
} from 'lucide-react';

interface CareerGuidePageProps {
  onNavigate: (page: PageType) => void;
  selectedCareerId?: string;
}

export const CareerGuidePage: React.FC<CareerGuidePageProps> = ({
  onNavigate,
  selectedCareerId = 'ai-engineer',
}) => {
  const [activeCareerId, setActiveCareerId] = useState<string>(selectedCareerId);
  const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>({});

  const activeCareer = CAREERS_DATA.find((c) => c.id === activeCareerId) || CAREERS_DATA[0];

  const toggleTask = (taskId: string) => {
    setCheckedTasks((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  // Build custom step-by-step roadmap for selected career
  const roadmapSteps = [
    {
      id: 'step-1',
      stage: '1. Aşama: Temeller & Algoritmik Mantık',
      title: 'Temel Bilgisayar Bilimleri & Dil Becerisi',
      timeframe: '0 - 6 Ay',
      description: `Temel programlama dillerini ve ${activeCareer.title} alanı için gereken matematik/mantık altyapısını öğrenin.`,
      tasks: [
        'Temel Matematik & İstatistik kavramlarını gözden geçirin',
        'Algoritma mantığı ve akış şemalarını kavrayın',
        `Ana dil olan ${activeCareer.technicalSkills[0] || 'Python'} dilinde temel syntax ve veri yapılarını öğrenin`,
        'İngilizce teknik terimler ve dokümantasyon okuma pratiği yapın'
      ],
      resources: ['BTK Akademi - Sıfırdan Kodlama', 'Patika.dev Başlangıç Patikaları']
    },
    {
      id: 'step-2',
      stage: '2. Aşama: Alan Odaklı Derinleşme',
      title: `${activeCareer.title} Uzmanlık Becerileri`,
      timeframe: '6 - 18 Ay',
      description: 'Alanda sıklıkla kullanılan kütüphaneleri, araçları ve çatıları (framework) pratik edin.',
      tasks: [
        ...activeCareer.technicalSkills.slice(0, 3).map((s) => `${s} konusunda derinlemesine projeler yapın`),
        `Kullanılan ana araçlar: ${activeCareer.technologies.slice(0, 3).join(', ')} platformlarında ustalaşın`,
        'Git & GitHub kullanarak versiyon kontrol sistemini öğrenin'
      ],
      resources: activeCareer.recommendedCourses.map((c) => `${c.title} (${c.provider})`)
    },
    {
      id: 'step-3',
      stage: '3. Aşama: Uygulamalı Projeler & Portföy',
      title: 'Açık Kaynak & Kişisel Portföy İnşası',
      timeframe: '18 - 24 Ay',
      description: 'Becerilerinizi kanıtlayacak en az 3 adet çalışan, özgün proje üretin ve sergileyin.',
      tasks: [
        'GitHub hesabınızda kodlarınızı düzenli olarak yayınlayın (Readme dokümantasyonu ekleyin)',
        'Hackathon yarışmalarına katılarak takım çalışması deneyimi kazanın',
        'Kişisel bir web sitesi veya LinkedIn profili oluşturarak projelerinizi sergileyin',
        'Kaggle, TryHackMe veya LeetCode gibi platformlarda pratik çözümler geliştirin'
      ],
      resources: ['GitHub & Open Source', 'Kaggle / TryHackMe / Figma Community']
    },
    {
      id: 'step-4',
      stage: '4. Aşama: Sertifikasyon & İşe/Staja Giriş',
      title: 'Mülakat Hazırlığı & Profesyonel Adım',
      timeframe: '2 Yıl+',
      description: 'Uluslararası kabul gören sertifikalarınızı tamamlayın ve staj/iş başvurularına başlayın.',
      tasks: [
        'Uluslararası geçerliliği olan 1 adet sertifika edinin',
        'Teknik mülakat sorularına ve kodlama sınavlarına hazırlanın',
        'Gençlik staj programlarına ve şirketlerin bootcamp süreçlerine başvurun',
        'Sektördeki topluluklara katılarak networking (ağ kurma) yapın'
      ],
      resources: ['LinkedIn Jobs', 'Youthall & Kariyer.net', 'Tech Bootcamps']
    }
  ];

  // Calculate completed progress
  const totalTasks = roadmapSteps.reduce((sum, s) => sum + s.tasks.length, 0);
  const completedTasksCount = Object.values(checkedTasks).filter(Boolean).length;
  const progressPercent = Math.round((completedTasksCount / totalTasks) * 100);

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-800">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Rocket className="w-4 h-4" />
            <span>Kişiselleştirilmiş Kariyer Planlama</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            İnteraktif <span className="text-amber-500">Kariyer Yol Haritası</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Seçtiğin geleceğin mesleğinde başarıya ulaşman için gereken öğrenme aşamaları, pratik görevler, önerilen kurslar ve sertifikalar.
          </p>
        </div>
      </div>

      {/* Career Selection Bar */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Yol Haritası İçin Meslek Seçin:
            </label>
            <select
              value={activeCareerId}
              onChange={(e) => setActiveCareerId(e.target.value)}
              className="bg-amber-50 text-slate-900 font-extrabold text-base sm:text-lg border border-amber-300 rounded-2xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {CAREERS_DATA.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title} ({c.category})
                </option>
              ))}
            </select>
          </div>

          {/* Progress Pill */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 shrink-0 text-right">
            <span className="text-[11px] font-bold text-slate-500 uppercase block">Yol Haritası Tamamlama</span>
            <div className="flex items-center gap-3 mt-1">
              <div className="w-32 bg-slate-200 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-amber-600 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="text-sm font-black text-amber-700">%{progressPercent}</span>
            </div>
          </div>
        </div>

        <div className="text-xs text-slate-600 leading-relaxed">
          Seçilen Meslek: <span className="font-extrabold text-slate-900">{activeCareer.title}</span> — Ort. Maaş: <span className="font-bold text-emerald-700">{activeCareer.salaryRange}</span> — Eğitim Süresi: <span className="font-bold text-slate-800">{activeCareer.studyDuration}</span>
        </div>
      </div>

      {/* Step-by-Step Interactive Roadmap Timeline */}
      <div className="space-y-8">
        <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-amber-600" />
          {activeCareer.title} Adım Adım Gelişim Aşamaları
        </h2>

        <div className="space-y-6">
          {roadmapSteps.map((step, stepIdx) => (
            <div
              key={step.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-all relative overflow-hidden"
            >
              {/* Step Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-4">
                <div>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                    {step.stage}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900">{step.title}</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold shrink-0 self-start sm:self-auto">
                  Tahmini Süre: {step.timeframe}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {step.description}
              </p>

              {/* Checkable Tasks Checklist */}
              <div className="space-y-2 mb-6 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-100">
                <span className="text-xs font-bold text-slate-800 block mb-2">
                  Tamamlaman Gereken Görevler (Tıkla ve İşaretle):
                </span>
                <div className="space-y-2">
                  {step.tasks.map((taskText, taskIdx) => {
                    const taskId = `${activeCareer.id}-${step.id}-${taskIdx}`;
                    const isDone = !!checkedTasks[taskId];
                    return (
                      <div
                        key={taskIdx}
                        onClick={() => toggleTask(taskId)}
                        className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all border ${
                          isDone
                            ? 'bg-amber-100/60 border-amber-300 text-amber-950 font-semibold'
                            : 'bg-white border-slate-200/80 text-slate-700 hover:border-amber-300'
                        }`}
                      >
                        <div className="mt-0.5 shrink-0">
                          {isDone ? (
                            <CheckCircle2 className="w-5 h-5 text-amber-700 fill-amber-100" />
                          ) : (
                            <Circle className="w-5 h-5 text-slate-300" />
                          )}
                        </div>
                        <span className={`text-xs sm:text-sm ${isDone ? 'line-through opacity-80' : ''}`}>
                          {taskText}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Resources list */}
              <div className="text-xs text-slate-600">
                <span className="font-bold text-slate-800">Önerilen Kaynaklar: </span>
                <span className="text-amber-800 font-semibold">{step.resources.join(' • ')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications & Portfolio Tips Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Certificate Card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-4">
          <div className="p-3 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200 inline-block">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-extrabold text-slate-900">
            Prestijli Sertifikalar & Kurslar
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Özgeçmişinizi (CV) öne geçirecek uluslararası sertifika sağlayıcıları:
          </p>
          <ul className="space-y-2 text-xs font-semibold text-slate-800">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600" /> BTK Akademi Sertifikalı Eğitim Programları
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600" /> Google & IBM Coursera Mesleki Sertifikaları
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600" /> AWS / Microsoft / Cisco Uzmanlık Sertifikaları
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600" /> Unity / DeepLearning.AI Onaylı Sertifikalar
            </li>
          </ul>
        </div>

        {/* Portfolio & Resume Tips Card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-4">
          <div className="p-3 rounded-2xl bg-slate-100 text-slate-800 border border-slate-200 inline-block">
            <FolderCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-extrabold text-slate-900">
            Gençler İçin Portföy Hazırlama İpuçları
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Henüz iş deneyiminiz yoksa bile projelerinizle iş verenleri etkileyebilirsiniz:
          </p>
          <ul className="space-y-2 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-600 shrink-0">•</span>
              <span><strong>GitHub Profiliniz:</strong> Temiz kod yazımı, README dosyaları ve canlı ekran görüntüleri ekleyin.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-600 shrink-0">•</span>
              <span><strong>Kişisel Projeler:</strong> Taklit değil, gerçek bir sorunu çözen özgün projeler üretin.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-amber-600 shrink-0">•</span>
              <span><strong>LinkedIn & Topluluk:</strong> Açık kaynak projelere katkıda bulunun (PR gönderin) ve fikirlerinizi paylaşın.</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Final CTA to Contact page */}
      <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl text-center space-y-4 border border-slate-800 shadow-xl">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto">
          <Mail className="w-6 h-6" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold">
          Sorularınız veya Özel Rehberlik Talebiniz Mi Var?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
          Kariyer yolculuğunuzda aklınıza takılan soruları bize iletebilir, mentorluk ve geri bildirim isteyebilirsiniz.
        </p>
        <button
          onClick={() => onNavigate('contact')}
          className="px-8 py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-xs sm:text-sm rounded-2xl shadow-lg transition-all"
        >
          Bizimle İletişime Geç →
        </button>
      </div>

    </div>
  );
};

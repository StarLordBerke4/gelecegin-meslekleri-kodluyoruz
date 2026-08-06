import React from 'react';
import { PageType } from '../types';
import { Sparkles, ArrowRight, Heart, Mail, Shield, BookOpen } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuiz }) => {
  const handleLinkClick = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-white shadow-md shadow-amber-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Geleceğin <span className="text-amber-500">Meslekleri</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              14–24 yaş arası gençlerin geleceğin teknolojilerini, yükselen mesleklerini ve gerekli becerileri keşfederek bilinçli kararlar almasını sağlayan dijital kariyer platformu.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Shield className="w-3.5 h-3.5" />
                Gençlik Dostu Platform
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                <BookOpen className="w-3.5 h-3.5" />
                %100 Ücretsiz Rehberlik
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Keşfet
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500" /> Ana Sayfa
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('careers')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500" /> Geleceğin Meslekleri
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('skills')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500" /> Beceriler Rehberi
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('guide')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500" /> Kariyer Yol Haritası
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500" /> İletişim & Destek
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Öne Çıkan Alanlar
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>• Yapay Zekâ Mühendisliği</li>
              <li>• Siber Güvenlik Uzmanlığı</li>
              <li>• Veri Bilimi & Analitik</li>
              <li>• Oyun Geliştirme (Unity/UE)</li>
              <li>• Robotik & Otonom Sistemler</li>
              <li>• Yenilenebilir Enerji Mühendisliği</li>
            </ul>
          </div>

          {/* Interactive Tools & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-bold uppercase tracking-wider border-b border-slate-800 pb-2">
              İnteraktif Araçlar
            </h3>
            <button
              onClick={onOpenQuiz}
              className="w-full text-left p-3 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 transition-all group"
            >
              <div className="text-xs text-amber-400 font-bold uppercase">Kişisel Analiz</div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300 flex items-center justify-between mt-1">
                Beceri Keşif Testi <ArrowRight className="w-4 h-4" />
              </div>
            </button>

            <div className="pt-2">
              <label className="text-xs text-slate-400 block mb-1.5">E-Bültenimize Abone Ol</label>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="E-posta adresin..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
                <button 
                  onClick={() => alert('Bülten kaydınız alındı! Teşekkür ederiz.')}
                  className="bg-amber-600 hover:bg-amber-500 text-white px-3 py-2 rounded-lg text-xs font-bold transition-colors shrink-0"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Geleceğin Meslekleri Platformu. Gençlerin yarınlarına ilham vermek için tasarlandı. Hazırlayan: Berke Mert ÖZTÜRK</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Sevgi ve teknoloji ile üretildi</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { PageType, ContactFormData } from '../types';
import { 
  Mail, MessageSquare, Send, CheckCircle2, Sparkles, MapPin, 
  Phone, Globe, HelpCircle, User, AtSign, BookOpen, Heart 
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    ageGroup: '14-18 Yaş (Ortaokul / Lise)',
    subject: 'Kariyer Danışmanlığı / Soru',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      alert('Lütfen tüm gerekli alanları doldurunuz.');
      return;
    }
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      ageGroup: '14-18 Yaş (Ortaokul / Lise)',
      subject: 'Kariyer Danışmanlığı / Soru',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-800">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Mail className="w-4 h-4" />
            <span>Bizimle İletişime Geçin</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Sorularını, Önerilerini ve <span className="text-amber-500">Geri Bildirimlerini İlet</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Meslek seçimi, yetkinlik kazanımı veya kariyer haritan hakkında aklına takılan her türlü soruyu ekibimize sorabilirsin. En kısa sürede sana dönüş yapıyoruz!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Contact Form Column */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
          
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-amber-600" />
              İletişim Formu
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Aşağıdaki formu doldurarak sorularını ve görüşlerini doğrudan ulaştırabilirsin.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 bg-amber-50 border border-amber-300 rounded-3xl text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-extrabold text-amber-950">
                Mesajınız Başarıyla Alındı!
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                Teşekkür ederiz <strong className="text-slate-900">{formData.fullName}</strong>. Sorunuz ekibimize ulaştı. E-posta adresinize (<span className="text-amber-800 font-semibold">{formData.email}</span>) en geç 24 saat içinde dönüş yapacağız.
              </p>
              <button
                onClick={handleResetForm}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                Yeni Mesaj Gönder
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-600" /> Ad Soyad *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ahmet Yılmaz"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <AtSign className="w-3.5 h-3.5 text-amber-600" /> E-Posta Adresi *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ahmet@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Age Group */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    Yaş Grubu / Öğrenim Durumu
                  </label>
                  <select
                    value={formData.ageGroup}
                    onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  >
                    <option value="14-18 Yaş (Ortaokul / Lise)">14-18 Yaş (Ortaokul / Lise)</option>
                    <option value="19-24 Yaş (Üniversite Öğrencisi)">19-24 Yaş (Üniversite Öğrencisi)</option>
                    <option value="Mezun / Genç Profesyonel">Mezun / Genç Profesyonel</option>
                    <option value="Veli / Eğitmen">Veli / Eğitmen</option>
                  </select>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    Konu Başlığı
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                  >
                    <option value="Kariyer Danışmanlığı / Soru">Kariyer Danışmanlığı / Soru</option>
                    <option value="Meslek Önerisi / İçerik Talebi">Meslek Önerisi / İçerik Talebi</option>
                    <option value="Mentorluk & Destek">Mentorluk & Destek</option>
                    <option value="İşbirliği / Topluluk">İşbirliği / Topluluk</option>
                    <option value="Geri Bildirim / Hata Bildirimi">Geri Bildirim / Hata Bildirimi</option>
                  </select>
                </div>

              </div>

              {/* Message Area */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">
                  Mesajınız *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Aklınıza takılan soruları, hedeflediğiniz mesleği veya geri bildiriminizi buraya yazabilirsiniz..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-sm rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Mesajı Gönder</span>
              </button>

            </form>
          )}

        </div>

        {/* Sidebar Info Column */}
        <div className="space-y-6">
          
          {/* Quick Info Box */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-4">
            <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Gençlik Destek Hattı
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Geleceğin meslekleri hakkında kafanız karışıksa, hangi eğitimi seçmeniz gerektiğine emin değilseniz yalnız değilsiniz!
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">E-Posta</span>
                  destek@geleceginmeslekleri.org
                </div>
              </div>
              <div className="flex items-start gap-3 text-slate-300">
                <Globe className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Topluluk & Discord</span>
                  discord.gg/geleceginmeslekleri
                </div>
              </div>
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Merkez</span>
                  İstanbul Teknopark & Bilişim Vadisi Topluluğu
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Teaser */}
          <div className="bg-amber-50 p-6 rounded-3xl border border-amber-200/80 space-y-3">
            <h4 className="text-sm font-bold text-amber-950 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              Sıkça Sorulan Sorular
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              Sorunuza hemen yanıt bulmak için Ana Sayfamızdaki "Sık Sorulan Sorular" alanına göz atabilirsiniz.
            </p>
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 1800, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-amber-800 hover:underline flex items-center gap-1 pt-1"
            >
              <span>SSS Bölümüne Git</span> →
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

import { FAQItem, QuizQuestion, Testimonial } from '../types';

export const HERO_STATS = [
  { label: 'Geleceğin Yeni Meslek Payı', value: '%65', desc: 'İlkokuldaki çocukların gelecekte yapacağı işler henüz tanımlanmadı.' },
  { label: 'Teknoloji Sektör Büyümesi', value: '3.4x', desc: 'Geleneksel mesleklere kıyasla 3 kat daha hızlı talep artışı.' },
  { label: 'Ortalama Başlangıç Maaşı', value: '₺45.000+', desc: 'Teknoloji ve mühendislik uzmanlarında yüksek kazanç potansiyeli.' },
  { label: 'Küresel Yeni İstihdam', value: '12M+', desc: 'Yapay zeka ve yeşil dönüşümle açılacak yeni iş fırsatları.' }
];

export const FEATURED_RESOURCES = [
  {
    title: 'BTK Akademi',
    category: 'Ücretsiz Türkçe Eğitim',
    desc: 'T.C. Ulaştırma Bakanlığı destekli yazılım, yapay zekâ, siber güvenlik ve veri bilimi eğitimleri.',
    url: 'https://www.btkakademi.gov.tr',
    badge: 'Resmi & Ücretsiz'
  },
  {
    title: 'Coursera & edX',
    category: 'Küresel Üniversite Sertifikaları',
    desc: 'Stanford, Harvard, Google ve IBM onaylı sertifikalı kariyer programları.',
    url: 'https://www.coursera.org',
    badge: 'Uluslararası'
  },
  {
    title: 'Kaggle & GitHub',
    category: 'Pratik Projeler & Portföy',
    desc: 'Gerçek veri setleri üzerinde yarışın, kodlarınızı paylaşın ve açık kaynak portföyünüzü oluşturun.',
    url: 'https://www.kaggle.com',
    badge: 'Portföy & Topluluk'
  },
  {
    title: 'TryHackMe & LeetCode',
    category: 'Siber Güvenlik & Algoritma',
    desc: 'Etkileşimli laboratuvarlarda siber güvenlik zafiyetlerini çözün veya kodlama mülakatlarına hazırlanın.',
    url: 'https://tryhackme.com',
    badge: 'Pratik Laboratuvar'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Geleceğin mesleklerine hazırlanmak için üniversite diploması şart mı?',
    answer: 'Üniversite eğitimi teorik ve akademik temel açısından büyük avantaj sağlasa da teknoloji sektöründe sertifikalar, açık kaynak portföy projeleri, GitHub profili ve pratik yetkinlikler en az diploma kadar belirleyicidir. Özellikle yazılım, siber güvenlik ve UI/UX alanlarında kendinizi yetiştirerek iş bulmanız mümkündür.',
    category: 'Genel'
  },
  {
    question: '14–18 yaş arasındayım, şimdiden ne yapmalıyım?',
    answer: 'Öncelikle kodlama mantığını anlamak için Python veya temel HTML/CSS/JS öğrenebilirsiniz. Matematik ve İngilizce yetkinliklerinizi geliştirmek küresel kaynaklara erişim sağlar. BTK Akademi ve Kaggle gibi ücretsiz platformlarda basit projeler yapmaya başlayın.',
    category: 'Öğrenciler İçin'
  },
  {
    question: 'Yapay zekâ gelecekte tüm yazılımcıların yerini alacak mı?',
    answer: 'Yapay zekâ rutin kod yazımını otomatikleştirecektir; ancak yapay zekayı bir araç olarak kullanabilen, mimari tasarlayan, karmaşık problemleri çözen ve yaratıcı düşünen mühendislere duyulan ihtiyaç her zamankinden daha yüksek olacaktır.',
    category: 'Yapay Zekâ'
  },
  {
    question: 'Hangi mesleği seçeceğimi nasıl kararlaştırabilirim?',
    answer: 'Platformumuzdaki "Beceri Keşif Testi"ni çözerek ilgi alanlarınıza en uygun meslekleri görebilir; ardından "Meslek Karşılaştırma Aracı" ile maaş, çalışma şekli ve zorluk derecelerini kıyaslayabilirsiniz.',
    category: 'Platform Kullanımı'
  },
  {
    question: 'İngilizce bilmek şart mı?',
    answer: 'Teknoloji literatürü ve güncel kütüphanelerin dokümantasyonları ağırlıklı olarak İngilizcedir. Orta seviye (B1/B2) teknik İngilizce öğrenmek kariyer hızınızı kat kat artıracaktır.',
    category: 'Beceriler'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Elif Yılmaz',
    role: 'Yapay Zekâ Öğrencisi',
    age: 19,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    comment: 'Lise son sınıftayken ne okumam gerektiği konusunda kararsızdım. Bu platformdaki kariyer haritası sayesinde Yapay Zekâ Mühendisliğine odaklandım ve ilk Python projelerimi geliştirdim!',
    careerGoal: 'AI Research Scientist'
  },
  {
    id: 't2',
    name: 'Mert Kaya',
    role: 'Junior Siber Güvenlik Analisti',
    age: 22,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    comment: 'Meslek Karşılaştırma Aracı ve beceri listeleri sayesinde Siber Güvenlik yolumu çizdim. BTK Akademi ve TryHackMe önerileri tam bir rehber oldu.',
    careerGoal: 'Ethical Hacker'
  },
  {
    id: 't3',
    name: 'Zeynep Demir',
    role: 'UI/UX Tasarım Stajyeri',
    age: 20,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    comment: 'Yaratıcı yönümü teknolojiyle nasıl birleştireceğimi bilmiyordum. Beceriler sayfasındaki Figma kaynakları ve proje fikirleri sayesinde ilk portföyümü hazırlayıp staj buldum.',
    careerGoal: 'Product Designer'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Boş zamanlarında veya çalışırken seni en çok ne heyecanlandırır?',
    subtitle: 'Zihinsel çalışma tarzını ve tutkularını keşfet.',
    options: [
      {
        label: 'Verileri incelemek, gizli desenleri ve mantık bulmacalarını çözmek',
        description: 'Rakamlar, çizelgeler ve istatistiklerle uğraşmayı seversin.',
        iconName: 'BarChart2',
        points: { 'data-scientist': 3, 'ai-engineer': 2, 'cyber-security': 1 }
      },
      {
        label: 'Estetik arayüzler, renkler ve kullanıcıların seveceği tasarımlar yapmak',
        description: 'Görsel algın yüksek, yaratıcılık ve empati ön planda.',
        iconName: 'Palette',
        points: { 'ux-ui-designer': 3, 'game-developer': 2 }
      },
      {
        label: 'Sistemleri korumak, güvenlik açıklarını bulmak ve zafiyetleri kapatmak',
        description: 'Dedektif gibi gizli açıkları arar, koruma sağlarsın.',
        iconName: 'Shield',
        points: { 'cyber-security': 3, 'cloud-engineer': 2, 'blockchain-dev': 1 }
      },
      {
        label: 'Fiziksel cihazlar, robotlar ve çevreyle etkileşime geçen otonom araçlar',
        description: 'Mekanik, donanım ve yazılımın kesişimi ilgini çeker.',
        iconName: 'Bot',
        points: { 'robotics-engineer': 3, 'iot-specialist': 2, 'renewable-energy': 2 }
      }
    ]
  },
  {
    id: 2,
    question: 'Hangi problem alanında bir proje üretmek isterdin?',
    subtitle: 'Gelecekte dünyada bırakmak istediğin etki alanını seç.',
    options: [
      {
        label: 'İnsan gibi düşünen ve sorulara cevap veren yapay zekâ asistanı',
        description: 'LLM, NLP ve derin öğrenme modelleri.',
        iconName: 'Cpu',
        points: { 'ai-engineer': 3, 'data-scientist': 1 }
      },
      {
        label: 'Milyonlarca kişinin oynayacağı 3D sürükleyici bir sanal dünya oyun',
        description: 'Oyun motorları, grafikler ve hikaye anlatımı.',
        iconName: 'Gamepad2',
        points: { 'game-developer': 3, 'ux-ui-designer': 1 }
      },
      {
        label: 'İklim kriziyle mücadele eden güneş ve rüzgar enerjisi sistemleri',
        description: 'Temiz enerji, sürdürülebilirlik ve yeşil teknoloji.',
        iconName: 'Zap',
        points: { 'renewable-energy': 3, 'biotech-specialist': 2 }
      },
      {
        label: 'Kanser tedavisi veya genetik hastalıklara biyolojik çözümler',
        description: 'CRISPR gen düzenleme ve biyoenformatik.',
        iconName: 'Dna',
        points: { 'biotech-specialist': 3, 'data-scientist': 1 }
      }
    ]
  },
  {
    id: 3,
    question: 'Çalışma ortamı ve araç tercihin hangisi?',
    subtitle: 'Kullanmak istediğin ana teknolojileri belirle.',
    options: [
      {
        label: 'Python, Jupyter Notebook, matematiksel denklemler ve veri kümeleri',
        description: 'Veri odaklı kodlama.',
        iconName: 'Code',
        points: { 'ai-engineer': 2, 'data-scientist': 3 }
      },
      {
        label: 'AWS, Docker, Linux terminali ve bulut sunucuları',
        description: 'Altyapı ve sunucu mimarileri.',
        iconName: 'Cloud',
        points: { 'cloud-engineer': 3, 'cyber-security': 2, 'software-developer': 1 }
      },
      {
        label: 'Figma, Miro, prototipleme araçları ve kullanıcı görüşmeleri',
        description: 'Tasarım ve insan odaklı araçlar.',
        iconName: 'Layers',
        points: { 'ux-ui-designer': 3 }
      },
      {
        label: 'Arduino, Raspberry Pi, lehimleme, sensörler ve C++ kodları',
        description: 'Donanım ve gömülü sistemler.',
        iconName: 'Wifi',
        points: { 'iot-specialist': 3, 'robotics-engineer': 2 }
      }
    ]
  },
  {
    id: 4,
    question: 'En güçlü kişisel becerin hangisidir?',
    subtitle: 'Sosyal ve zihinsel yetkinliklerini değerlendir.',
    options: [
      {
        label: 'Derin odaklanma ve karmaşık mantık dizilerini çözme',
        description: 'Detayları gözden kaçırmazsın.',
        iconName: 'Brain',
        points: { 'cyber-security': 2, 'ai-engineer': 2, 'blockchain-dev': 2 }
      },
      {
        label: 'Sınırsız hayal gücü ve yaratıcı fikirler üretme',
        description: 'Sıradan düşünmez, yeni şeyler denersin.',
        iconName: 'Sparkles',
        points: { 'game-developer': 2, 'ux-ui-designer': 3 }
      },
      {
        label: 'İnsanları dinleme, ihtiyaçlarını anlama ve empati kurma',
        description: 'Kullanıcı odaklısın.',
        iconName: 'Users',
        points: { 'ux-ui-designer': 2, 'software-developer': 1 }
      },
      {
        label: 'Gözlem yapma, doğaya/bilime merak duyma ve araştırmacı ruha sahip olma',
        description: 'Laboratuvar ve deney merakı.',
        iconName: 'Compass',
        points: { 'biotech-specialist': 3, 'renewable-energy': 2 }
      }
    ]
  }
];

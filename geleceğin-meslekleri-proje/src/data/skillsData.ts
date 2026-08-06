import { SkillItem } from '../types';

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'python',
    name: 'Python Programlama',
    category: 'technical',
    description: 'Yapay zeka, veri analizi, otomasyon ve web geliştirmede dünyanın en popüler ve öğrenmesi en kolay programlama dili.',
    importance: 'Geleceğin dijital dünyasında okuma-yazma kadar temel bir yetkinlik haline gelmiştir.',
    relatedCareers: ['Yapay Zekâ Mühendisi', 'Veri Bilimcisi', 'Siber Güvenlik Uzmanı', 'IoT Uzmanı'],
    learningResources: [
      { name: 'Python ile Sıfırdan Kodlama', url: 'https://www.btkakademi.gov.tr', level: 'Başlangıç' },
      { name: 'Automate the Boring Stuff with Python', url: 'https://automatetheboringstuff.com', level: 'Orta' },
      { name: 'Kaggle Python Course', url: 'https://www.kaggle.com/learn/python', level: 'Başlangıç' }
    ],
    projectIdeas: [
      'Otomatik Hava Durumu & Döviz Telegram Botu',
      'Yapay Zekalı Görsel Etiketleme Uygulaması',
      'Kişisel Web Kazıma (Scraping) Betiği'
    ],
    iconName: 'Code2'
  },
  {
    id: 'ai-ml',
    name: 'Yapay Zekâ & Makine Öğrenimi',
    category: 'emerging',
    description: 'Verilerden öğrenen, tahminler yapan ve insan benzeri karar alma yeteneği kazandıran algoritma ve model disiplini.',
    importance: 'Önümüzdeki 10 yılda tüm yazılımların çekirdeğinde AI modülleri yer alacak.',
    relatedCareers: ['Yapay Zekâ Mühendisi', 'Veri Bilimcisi', 'Robotik Mühendisi'],
    learningResources: [
      { name: 'DeepLearning.AI AI for Everyone', url: 'https://www.coursera.org', level: 'Başlangıç' },
      { name: 'Fast.ai Practical Deep Learning', url: 'https://fast.ai', level: 'Orta' }
    ],
    projectIdeas: [
      'Duygu Analizi (Sentiment Analysis) Modeli',
      'Kendi Bilgi Tabanınızla Konuşan RAG Botu',
      'Kanser Hücresi Tespit Edici Bilgisayarlı Görü Projesi'
    ],
    iconName: 'Sparkles'
  },
  {
    id: 'data-analysis',
    name: 'Veri Analizi & SQL',
    category: 'technical',
    description: 'Büyük veri kümelerini sorgulama, temizleme, görselleştirme ve ticari kararlara dönüştürme becerisi.',
    importance: 'Her sektörde veri odaklı karar alma hayati önem taşır.',
    relatedCareers: ['Veri Bilimcisi', 'UI/UX Tasarımcısı', 'Blockchain Geliştiricisi'],
    learningResources: [
      { name: 'SQL ile Veritabanı Sorgulama', url: 'https://www.btkakademi.gov.tr', level: 'Başlangıç' },
      { name: 'Google Data Analytics Professional Certificate', url: 'https://www.coursera.org', level: 'Orta' }
    ],
    projectIdeas: [
      'E-Ticaret Müşteri Terk (Churn) Analiz Paneli',
      'Spotify Dinleme Alışkanlıkları İstatistik Panosu'
    ],
    iconName: 'LineChart'
  },
  {
    id: 'cyber-ethics',
    name: 'Siber Güvenlik & Ağ Temelleri',
    category: 'technical',
    description: 'İnternet protokolleri, zafiyet analizi, şifreleme ve dijital varlıkları koruma protokolleri.',
    importance: 'Dijitalleşen tüm sistemler güvenlik tehdidi altındadır.',
    relatedCareers: ['Siber Güvenlik Uzmanı', 'Bulut Mühendisi', 'IoT Uzmanı'],
    learningResources: [
      { name: 'TryHackMe Pre-Security Path', url: 'https://tryhackme.com', level: 'Başlangıç' },
      { name: 'Siber Güvenliğe Giriş', url: 'https://www.btkakademi.gov.tr', level: 'Başlangıç' }
    ],
    projectIdeas: [
      'Ev Ağı Zafiyet Tarama Projesi',
      'Parola Şifreleyici ve Kriptografik Kasa'
    ],
    iconName: 'Lock'
  },
  {
    id: 'cloud-computing',
    name: 'Bulut Bilişim (Cloud & DevOps)',
    category: 'technical',
    description: 'Yazılımları sanal sunucularda çalıştırma, Docker konteynerleri ve AWS/GCP/Azure yönetimi.',
    importance: 'Fiziksel sunucular yerini tamamen bulut altyapılarına bırakmıştır.',
    relatedCareers: ['Bulut Mühendisi', 'Yazılım Geliştirici', 'Siber Güvenlik Uzmanı'],
    learningResources: [
      { name: 'AWS Cloud Practitioner Essentials', url: 'https://aws.amazon.com', level: 'Başlangıç' },
      { name: 'Docker & Kubernetes Temelleri', url: 'https://www.btkakademi.gov.tr', level: 'Orta' }
    ],
    projectIdeas: [
      'AWS S3 ve CloudFront ile Statik Web Sitesi Yayını',
      'Dockerize Edilmiş Microservice Uygulaması'
    ],
    iconName: 'CloudRain'
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Tasarım & Prototipleme',
    category: 'technical',
    description: 'Kullanıcı araştırması, tel kafes (wireframe) oluşturma, Figma kullanımı ve tasarım sistemleri.',
    importance: 'Yazılımın başarısı, sunduğu kullanıcı deneyiminin kalitesiyle doğrudan orantılıdır.',
    relatedCareers: ['UI/UX Tasarımcısı', 'Oyun Geliştiricisi', 'Yazılım Geliştirici'],
    learningResources: [
      { name: 'Figma ile Arayüz Tasarımı', url: 'https://www.youtube.com', level: 'Başlangıç' },
      { name: 'Google UX Design Certificate', url: 'https://www.coursera.org', level: 'Orta' }
    ],
    projectIdeas: [
      'Geleceğin Akıllı Ev Kontrol Mobil Uygulama Tasarımı',
      'Bir Mobil Bankacılık Arayüzünün Yeniden Tasarımı (Redesign)'
    ],
    iconName: 'Layers'
  },
  {
    id: 'problem-solving',
    name: 'Karmaşık Problem Çözme',
    category: 'soft',
    description: 'Büyük ve karmaşık sorunları küçük parçalara ayırıp sistematik ve yaratıcı çözümler üretme yetisi.',
    importance: 'Yapay zeka çağında teknik araçlar değişse de anahtar problem çözme yetisi insana aittir.',
    relatedCareers: ['Yapay Zekâ Mühendisi', 'Robotik Mühendisi', 'Siber Güvenlik Uzmanı', 'Yazılım Geliştirici'],
    learningResources: [
      { name: 'Problem Solving Techniques', url: 'https://www.edx.org', level: 'Başlangıç' },
      { name: 'Algoritma ve Mantık Geliştirme', url: 'https://www.btkakademi.gov.tr', level: 'Başlangıç' }
    ],
    projectIdeas: [
      'Hackathon Yarışmalarına Katılım',
      'Gerçek Dünya Sorunları İçin İş Modeli Kanvası Hazırlama'
    ],
    iconName: 'Brain'
  },
  {
    id: 'critical-thinking',
    name: 'Eleştirel Düşünme & Etik',
    category: 'soft',
    description: 'Bilgileri doğrulamak, yapay zeka çıktılarındaki yanlılığı fark etmek ve etik kararlar almak.',
    importance: 'Yanıltıcı bilgi ve yapay zeka hallusinasyonları çağında en stratejik filtre yeteneğidir.',
    relatedCareers: ['Yapay Zekâ Mühendisi', 'Veri Bilimcisi', 'Biyoteknoloji Uzmanı'],
    learningResources: [
      { name: 'Ethics of AI', url: 'https://www.elements-of-ai.com', level: 'Başlangıç' }
    ],
    projectIdeas: [
      'Yapay Zekâ Etik İnceleme Raporu Hazırlama',
      'Veri Gizliliği ve KVKK Analiz Sunumu'
    ],
    iconName: 'Scale'
  },
  {
    id: 'adaptability',
    name: 'Esneklik & Sürekli Öğrenme',
    category: 'soft',
    description: 'Hızla değişen teknolojilere uyum sağlama, kendi kendine öğrenme (autodidact) ve çeviklik.',
    importance: 'Bugün öğrenilen bir teknoloji 3 yıl sonra yenilenebilir; önemli olan öğrenmeyi öğrenmektir.',
    relatedCareers: ['Tüm Geleceğin Meslekleri'],
    learningResources: [
      { name: 'Learning How to Learn', url: 'https://www.coursera.org', level: 'Başlangıç' }
    ],
    projectIdeas: [
      'Her Ay Yeni Bir Teknolojiyi Öğrenip Blog Yazısı / Video Üretme'
    ],
    iconName: 'Compass'
  },
  {
    id: 'communication-collab',
    name: 'İletişim & Takım Çalışması',
    category: 'soft',
    description: 'Karmaşık teknik konuları basitçe anlatabilme, açık kaynak topluluklarında ve küresel takımlarda iş birliği yapma.',
    importance: 'En büyük projeler tek bir dahi tarafından değil, uyumlu takımlar tarafından inşa edilir.',
    relatedCareers: ['Tüm Geleceğin Meslekleri'],
    learningResources: [
      { name: 'GitHub ve Açık Kaynak İşbirliği', url: 'https://github.com', level: 'Başlangıç' }
    ],
    projectIdeas: [
      'GitHub Üzerinde Açık Kaynak Projeye Katkı Verilmesi (PR Gönderme)'
    ],
    iconName: 'Users'
  }
];

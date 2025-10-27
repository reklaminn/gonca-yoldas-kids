import programBabyImage from "@/assets/program-baby.jpg";
import programToddlerImage from "@/assets/program-toddler.jpg";
import programOnlineImage from "@/assets/program-online.jpg";
import instructorImage from "@/assets/gonca-yoldas.jpg";

export interface Program {
  id: string;
  slug: string;
  title: string;
  description: string;
  ageRange: string;
  image: string;
  fullDescription: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
  price: number;
  duration: string;
  instructor: {
    name: string;
    title: string;
    image: string;
  };
  startDate: string;
  whyThisEducation: string[];
  whatIsIncluded: string[];
  curriculum: { week: string; topics: string[] }[];
  schedule: {
    startDate: string;
    days: string;
    time: string;
  };
  testimonials: { name: string; text: string; rating: number }[];
}

export const programs: Program[] = [
  {
    id: "1",
    slug: "bebegimle-evde-ingilizce",
    title: "Bebeğimle Evde İngilizce",
    description: "0-2 yaş arası bebekler için ebeveyn-çocuk İngilizce edinim programı. Oyun ve günlük rutinlerle doğal dil gelişimi.",
    ageRange: "0-2 Yaş",
    image: programBabyImage,
    fullDescription: "Bebeklik dönemi, dil edinimi için en kritik dönemdir. Bu program, ebeveynlere bebeklerinin günlük rutinlerinde nasıl doğal bir şekilde İngilizce kullanabileceklerini öğretir. Bilimsel araştırmalara dayalı yöntemlerle, bebeğinizin hem Türkçe hem de İngilizce'yi anadili olarak edinmesini sağlayabilirsiniz.",
    benefits: [
      "Bebeğiniz iki dilde de anadil seviyesinde yetkinlik kazanır",
      "Beyin gelişimi ve bilişsel yetenekler desteklenir",
      "Ebeveyn-bebek bağı güçlenir",
      "Oyun ve rutinlerle doğal öğrenme gerçekleşir",
      "Yaşam boyu sürecek dil temeli oluşur"
    ],
    faqs: [
      {
        question: "Bebeğim için çok erken değil mi?",
        answer: "Hayır, araştırmalar 0-3 yaş arasının dil edinimi için en kritik dönem olduğunu gösteriyor. Bu dönemde bebekler dilleri sünger gibi emerler."
      },
      {
        question: "İngilizcem yeterli değil, yine de uygulayabilir miyim?",
        answer: "Evet! Program, temel İngilizce seviyesine sahip ebeveynler için tasarlanmıştır. Size gerekli tüm araçlar ve yöntemler sağlanacaktır."
      }
    ],
    price: 15000,
    duration: "8 Hafta",
    instructor: {
      name: "Gonca Yoldaş",
      title: "Dilbilimci & Eğitmen",
      image: instructorImage
    },
    startDate: "15 Ocak 2025",
    whyThisEducation: [
      "Bilimsel araştırmalara dayalı, kanıtlanmış yöntemlerle hazırlanmıştır",
      "0-2 yaş döneminin kritik gelişim özelliklerine uygun tasarlanmıştır",
      "Ebeveynlere günlük hayatta uygulanabilir pratik araçlar sunar",
      "Bebeğinizin doğal dil edinim sürecini destekler"
    ],
    whatIsIncluded: [
      "8 haftalık canlı online grup eğitimi",
      "Her hafta pratik uygulamalar ve aktiviteler",
      "Dijital kaynak kitapları ve materyaller",
      "Whatsapp destek grubu",
      "Ders kayıtlarına sınırsız erişim"
    ],
    curriculum: [
      {
        week: "1. Hafta",
        topics: ["Çift dilli gelişimin temelleri", "İlk İngilizce rutinler"]
      },
      {
        week: "2. Hafta",
        topics: ["Günlük aktivitelerle dil girdisi", "Şarkı ve tekerlemeler"]
      },
      {
        week: "3-4. Hafta",
        topics: ["Kitap okuma teknikleri", "Oyunla öğrenme"]
      }
    ],
    schedule: {
      startDate: "15 Ocak 2025",
      days: "Her Çarşamba",
      time: "20:00 - 21:00"
    },
    testimonials: [
      {
        name: "Ayşe K.",
        text: "Bebeğimle evde İngilizce konuşmaya başladım ve şaşırtıcı gelişmeler gördüm!",
        rating: 5
      },
      {
        name: "Mehmet T.",
        text: "Gonca Hanım'ın anlatımı çok açık ve pratik. Hemen uygulamaya başladık.",
        rating: 5
      }
    ]
  },
  {
    id: "2",
    slug: "cocugumla-evde-ingilizce",
    title: "Çocuğumla Evde İngilizce",
    description: "2-5 yaş çocuklar için ebeveyn destekli İngilizce programı. Oyun, kitap okuma ve günlük aktivitelerle dil gelişimi.",
    ageRange: "2-5 Yaş",
    image: programToddlerImage,
    fullDescription: "Okul öncesi dönem, dil öğreniminde 'altın çağ' olarak bilinir. Bu program, ebeveynlere çocuklarıyla evde kaliteli İngilizce dil girdisi sağlama konusunda rehberlik eder. Hikaye kitapları, oyunlar ve günlük aktivitelerle çocuğunuz İngilizce'yi doğal bir şekilde edinir.",
    benefits: [
      "Doğal dil edinimi süreçleri desteklenir",
      "Çocuğunuzla kaliteli zaman geçirirsiniz",
      "Okul öncesi İngilizce temeli güçlenir",
      "Oyun bazlı öğrenme ile motivasyon artar",
      "Ebeveyn-çocuk iletişimi zenginleşir"
    ],
    faqs: [
      {
        question: "Çocuğum hiç İngilizce bilmiyor, başlayabilir miyiz?",
        answer: "Kesinlikle! Program sıfırdan başlayanlar için tasarlanmıştır. Çocuğunuz doğal süreçlerle İngilizce'yi edinmeye başlayacaktır."
      },
      {
        question: "Günde ne kadar vakit ayırmamız gerekiyor?",
        answer: "Günlük 20-30 dakika kaliteli İngilizce girdisi yeterlidir. Bu süreyi oyun, kitap okuma veya günlük rutinlerle birleştirebilirsiniz."
      }
    ],
    price: 18000,
    duration: "10 Hafta",
    instructor: {
      name: "Gonca Yoldaş",
      title: "Dilbilimci & Eğitmen",
      image: instructorImage
    },
    startDate: "22 Ocak 2025",
    whyThisEducation: [
      "Okul öncesi dönemin gelişim özelliklerine uygun hazırlanmıştır",
      "Oyun temelli yaklaşımla çocuklar severek öğrenir",
      "Ebeveynlere uygulamalı, pratik yöntemler kazandırır",
      "Doğal dil edinim süreçlerini bilimsel yöntemlerle destekler"
    ],
    whatIsIncluded: [
      "10 haftalık canlı online grup eğitimi",
      "Haftalık aktivite ve oyun önerileri",
      "Dijital hikaye kitapları ve materyaller",
      "Şarkı ve tekerlemeler koleksiyonu",
      "Whatsapp destek grubu",
      "Ders kayıtlarına sınırsız erişim"
    ],
    curriculum: [
      {
        week: "1-2. Hafta",
        topics: ["Çocuklarla İngilizce iletişimin temelleri", "İlk kelimeler ve ifadeler"]
      },
      {
        week: "3-5. Hafta",
        topics: ["Hikaye kitaplarıyla öğrenme", "Günlük rutinlerde İngilizce"]
      },
      {
        week: "6-8. Hafta",
        topics: ["Oyunlarla dil gelişimi", "Yaratıcı aktiviteler"]
      }
    ],
    schedule: {
      startDate: "22 Ocak 2025",
      days: "Her Salı",
      time: "20:00 - 21:30"
    },
    testimonials: [
      {
        name: "Zeynep M.",
        text: "Çocuğum artık İngilizce kitapları seviyor ve kendisi istiyor!",
        rating: 5
      },
      {
        name: "Can Y.",
        text: "Evde uyguladığımız aktivitelerle muhteşem ilerlemeler kaydettik.",
        rating: 5
      }
    ]
  },
  {
    id: "3",
    slug: "cocuklar-icin-online-ingilizce",
    title: "Çocuklar için Online İngilizce",
    description: "5-10 yaş çocuklar için interaktif online İngilizce dersleri. Küçük gruplarla eğlenceli ve etkili öğrenme.",
    ageRange: "5-10 Yaş",
    image: programOnlineImage,
    fullDescription: "İlkokul çağındaki çocuklar için tasarlanmış, eğlenceli ve interaktif online İngilizce dersleri. Küçük grup dersleri ile her çocuğa özel ilgi gösterilir. Oyun, şarkı, hikaye ve projeler ile çocuklar İngilizce'yi severek öğrenir.",
    benefits: [
      "Yaş grubuna özel müfredat",
      "Küçük gruplarla etkili öğrenme",
      "İnteraktif ve eğlenceli dersler",
      "Konuşma ve dinleme becerilerinin gelişimi",
      "Özgüven kazanımı"
    ],
    faqs: [
      {
        question: "Online dersler çocuklar için etkili mi?",
        answer: "Evet! İnteraktif oyunlar, aktiviteler ve küçük grup dinamiği sayesinde çocuklar online ortamda çok iyi öğrenirler."
      },
      {
        question: "Kaç çocuk bir grupta oluyor?",
        answer: "Maksimum 6 çocuk. Bu sayede her çocuğa yeterli konuşma ve katılım fırsatı sağlanır."
      }
    ],
    price: 25000,
    duration: "12 Hafta / 45 Dakika Ders",
    instructor: {
      name: "Gonca Yoldaş",
      title: "Dilbilimci & Eğitmen",
      image: instructorImage
    },
    startDate: "15 Kasım 2025",
    whyThisEducation: [
      "İlkokul çağı çocukların ilgi ve ihtiyaçlarına uygun tasarlanmıştır",
      "Küçük grup dersleri ile her çocuğa özel ilgi gösterilir",
      "Oyun, şarkı ve hikayelerle eğlenceli öğrenme sağlar",
      "Çocukların özgüvenini ve İngilizce konuşma cesaretini artırır"
    ],
    whatIsIncluded: [
      "12 haftalık canlı online grup dersleri (haftada 2 gün)",
      "İnteraktif oyunlar ve aktiviteler",
      "Dijital ders materyalleri",
      "Ev ödevleri ve pratik alıştırmaları",
      "İlerleme raporları",
      "Ders kayıtlarına erişim"
    ],
    curriculum: [
      {
        week: "1-4. Hafta",
        topics: ["Tanışma ve günlük ifadeler", "Renkler, sayılar, hayvanlar"]
      },
      {
        week: "5-8. Hafta",
        topics: ["Aile ve arkadaşlar", "Hobiler ve aktiviteler"]
      },
      {
        week: "9-12. Hafta",
        topics: ["Hikaye anlatımı", "Proje sunumları"]
      }
    ],
    schedule: {
      startDate: "15 Kasım 2025",
      days: "Salı & Perşembe",
      time: "17:00 - 17:45"
    },
    testimonials: [
      {
        name: "Elif S.",
        text: "Oğlum dersleri çok seviyor ve İngilizce konuşmaya başladı!",
        rating: 5
      },
      {
        name: "Ahmet K.",
        text: "Gonca Hanım çocuklarla harika iletişim kuruyor, çok memnunuz.",
        rating: 5
      }
    ]
  }
];

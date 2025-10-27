import programBabyImage from "@/assets/program-baby.jpg";
import programToddlerImage from "@/assets/program-toddler.jpg";
import programOnlineImage from "@/assets/program-online.jpg";

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
      "Bilişsel gelişim desteklenir",
      "Ebeveyn-bebek bağı güçlenir",
      "Doğal ve stressiz dil edinimi",
      "Oyun temelli, eğlenceli aktiviteler",
    ],
    faqs: [
      {
        question: "Bu yaşta İngilizce öğretmek bebeğimi karıştırır mı?",
        answer: "Hayır, araştırmalar bebeğin birden fazla dili aynı anda öğrenebileceğini gösteriyor. Aksine iki dilli çocukların bilişsel yetenekleri daha gelişkindir.",
      },
      {
        question: "Ne kadar süre ayırmam gerekiyor?",
        answer: "Günlük rutinlerinize entegre olduğu için ekstra zaman ayırmanıza gerek yok. Bezini değiştirirken, oynarken, yemek yerken İngilizce kullanmanız yeterli.",
      },
    ],
    price: 2500,
    duration: "8 Hafta",
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
      "Oyun temelli öğrenme yaklaşımı",
      "Okuma sevgisi kazandırma",
      "Ebeveyn eğitimi ve sürekli destek",
    ],
    faqs: [
      {
        question: "İngilizce seviyem düşük, yine de yapabilir miyim?",
        answer: "Evet! Program, farklı İngilizce seviyelerine uygun içerikler sunar. Sizin de İngilizce'nizi geliştirirken çocuğunuzla birlikte öğrenebilirsiniz.",
      },
      {
        question: "Hangi materyallere ihtiyacım var?",
        answer: "Temel olarak İngilizce çocuk kitapları, basit oyuncaklar ve günlük eşyalar yeterli. Program içinde tüm kaynaklar önerilir.",
      },
    ],
    price: 3000,
    duration: "10 Hafta",
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
      "Küçük gruplarla (max 6 öğrenci) kişiselleştirilmiş eğitim",
      "İnteraktif dijital materyaller",
      "Haftada 2 canlı ders + kayıtlara erişim",
      "İlerleme takip sistemi ve düzenli geri bildirim",
    ],
    faqs: [
      {
        question: "Derslere katılım nasıl sağlanır?",
        answer: "Zoom platformu üzerinden online dersler gerçekleşir. Bilgisayar, tablet veya akıllı telefon ile katılım sağlanabilir.",
      },
      {
        question: "Kaç kişilik gruplar oluşturuluyor?",
        answer: "Maksimum 6 öğrencilik gruplar oluşturuyoruz. Böylece her çocuğa yeterli konuşma fırsatı ve öğretmen ilgisi sağlanır.",
      },
    ],
    price: 3500,
    duration: "12 Hafta",
  },
];

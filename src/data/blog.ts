export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "cocuklara-ikinci-dil-ogretmenin-onemi",
    title: "Çocuklara İkinci Dil Öğretmenin Önemi ve Faydaları",
    excerpt: "Erken yaşta ikinci bir dil öğrenmenin çocuğunuzun bilişsel gelişimine katkıları nelerdir? Bilimsel araştırmalar ne diyor?",
    date: "15 Mart 2024",
    author: "Gonca Yoldaş",
    content: `
      <p>Çocukluk dönemi, dil edinimi için en kritik dönemdir. Araştırmalar, 0-7 yaş aralığının dil öğrenimi için "altın çağ" olduğunu gösteriyor. Bu dönemde çocuklar, yeni bir dili anadili gibi öğrenebilir.</p>

      <h2>Bilişsel Faydalar</h2>
      <p>İki dilli çocukların:</p>
      <ul>
        <li>Problem çözme becerileri daha gelişkindir</li>
        <li>Daha iyi konsantrasyon gösterirler</li>
        <li>Yaratıcılık seviyeleri daha yüksektir</li>
        <li>Çoklu görev yapma yetenekleri daha iyidir</li>
      </ul>

      <h2>Sosyal ve Kültürel Faydalar</h2>
      <p>İkinci bir dil bilen çocuklar, farklı kültürleri anlama ve empati kurma konusunda daha başarılıdır. Ayrıca, ileride akademik ve profesyonel hayatlarında büyük avantaj sağlar.</p>

      <h2>Doğru Yöntem Nasıl Seçilir?</h2>
      <p>Her çocuk farklıdır. Bazıları oyun temelli öğrenmeyi sever, bazıları ise daha yapılandırılmış yaklaşımları tercih eder. Önemli olan, çocuğunuzun ilgi ve ihtiyaçlarına uygun bir program seçmektir.</p>
    `,
  },
  {
    id: "2",
    slug: "evde-ingilizce-konusmanin-ipuclari",
    title: "Evde İngilizce Konuşmanın 7 Pratik İpucu",
    excerpt: "Çocuğunuzla evde nasıl doğal bir şekilde İngilizce konuşabilirsiniz? İşte size yardımcı olacak pratik öneriler.",
    date: "10 Mart 2024",
    author: "Gonca Yoldaş",
    content: `
      <h2>1. Günlük Rutinleri Kullanın</h2>
      <p>Sabah uyanışından gece uyumaya kadar olan günlük rutinlerde basit İngilizce ifadeler kullanın. "Good morning", "Let's wash hands", "Time for breakfast" gibi basit cümleler çok etkilidir.</p>

      <h2>2. Şarkılar ve Tekerlemeler</h2>
      <p>Çocuklar şarkılarla öğrenmeyi sever. Basit İngilizce çocuk şarkıları, hem eğlenceli hem de öğreticidir.</p>

      <h2>3. İngilizce Kitap Okuyun</h2>
      <p>Her gün en az 10-15 dakika İngilizce kitap okumak, hem kelime dağarcığını geliştirir hem de okuma sevgisi kazandırır.</p>

      <h2>4. Oyunlarla Öğrenin</h2>
      <p>"Simon Says", "I Spy" gibi basit İngilizce oyunlar, öğrenmeyi eğlenceli hale getirir.</p>

      <h2>5. Hata Yapmaktan Korkmayın</h2>
      <p>Mükemmel İngilizce konuşmak zorunda değilsiniz. Önemli olan, çocuğunuza dil kullanımı konusunda model olmak.</p>

      <h2>6. Tutarlı Olun</h2>
      <p>Her gün düzenli olarak İngilizce kullanmak, tek seferlik uzun oturumlardan daha etkilidir.</p>

      <h2>7. Olumlu Bir Ortam Yaratın</h2>
      <p>Çocuğunuzu zorlamayın. İngilizce konuşmayı eğlenceli ve doğal bir aktivite haline getirin.</p>
    `,
  },
  {
    id: "3",
    slug: "bebeklerde-dil-gelisimi",
    title: "Bebeklerde Dil Gelişimi: 0-2 Yaş Dönemi",
    excerpt: "Bebeğinizin dil gelişimi nasıl ilerliyor? Her aşamada neler beklenmeli ve ebeveynler nasıl destek olabilir?",
    date: "5 Mart 2024",
    author: "Gonca Yoldaş",
    content: `
      <h2>0-6 Ay: Dinleme ve Ses Çıkarma</h2>
      <p>Bebekler bu dönemde sesleri ayırt etmeye başlar. Farklı dillerdeki sesleri bile birbirinden ayırabilirler. Ebeveynlerin bebekle konuşması, şarkı söylemesi çok önemlidir.</p>

      <h2>6-12 Ay: İlk Kelimeler</h2>
      <p>Bebekler bu dönemde ilk anlamlı kelimelerini söylemeye başlar. "Mama", "dada" gibi basit sözcükler ortaya çıkar. İki dilli ortamlarda her iki dilde de kelimeler söyleyebilirler.</p>

      <h2>12-18 Ay: Kelime Patlaması</h2>
      <p>Bu dönemde kelime dağarcığı hızla artar. Çocuklar günde 1-2 yeni kelime öğrenebilir. İki dilli çocuklarda bu süreç bazen biraz daha yavaş olabilir ama bu normaldir.</p>

      <h2>18-24 Ay: İki Kelimeli Cümleler</h2>
      <p>Çocuklar iki kelimeyi bir araya getirerek basit cümleler kurmaya başlar. "Mama gitti", "Daha su" gibi ifadeler kullanır.</p>

      <h2>Ebeveyn Desteği Nasıl Olmalı?</h2>
      <ul>
        <li>Bebeğinizle bol bol konuşun</li>
        <li>Şarkılar söyleyin</li>
        <li>Kitap okuyun</li>
        <li>Bebeğinizin çıkardığı seslere yanıt verin</li>
        <li>İki dilde de zengin dil girdisi sağlayın</li>
      </ul>
    `,
  },
];

import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";

const legalPages: Record<
  string,
  {
    title: string;
    content: string;
  }
> = {
  gizlilik: {
    title: "Gizlilik Politikası",
    content: `
      <h2>1. Giriş</h2>
      <p>Bu gizlilik politikası, Gonca Yoldaş Çift Dilli Eğitim olarak kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.</p>

      <h2>2. Toplanan Bilgiler</h2>
      <p>Web sitemiz üzerinden aşağıdaki bilgileri toplayabiliriz:</p>
      <ul>
        <li>Ad soyad</li>
        <li>E-posta adresi</li>
        <li>Telefon numarası</li>
        <li>Çocuğunuzun yaşı</li>
      </ul>

      <h2>3. Bilgilerin Kullanımı</h2>
      <p>Toplanan bilgiler yalnızca size hizmet sunmak, programlarımız hakkında bilgilendirme yapmak ve iletişim kurmak için kullanılır.</p>

      <h2>4. Bilgi Güvenliği</h2>
      <p>Kişisel verileriniz, güncel güvenlik önlemleriyle korunmaktadır ve üçüncü taraflarla paylaşılmamaktadır.</p>

      <h2>5. İletişim</h2>
      <p>Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz.</p>
    `,
  },
  kvkk: {
    title: "KVKK Aydınlatma Metni",
    content: `
      <h2>1. Veri Sorumlusu</h2>
      <p>6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz Gonca Yoldaş Çift Dilli Eğitim tarafından veri sorumlusu sıfatıyla işlenmektedir.</p>

      <h2>2. Kişisel Verilerin İşlenme Amacı</h2>
      <p>Kişisel verileriniz, eğitim hizmetlerinin sunulması, iletişim kurulması ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir.</p>

      <h2>3. Kişisel Verilerin Toplanma Yöntemi</h2>
      <p>Veriler, web sitemizdeki formlar, e-posta ve telefon iletişimi yoluyla toplanmaktadır.</p>

      <h2>4. Haklarınız</h2>
      <p>KVKK kapsamında, kişisel verilerinizle ilgili bilgi talep etme, düzeltme, silme ve işlenmesine itiraz etme haklarına sahipsiniz.</p>
    `,
  },
  "mesafeli-satis": {
    title: "Mesafeli Satış Sözleşmesi",
    content: `
      <h2>1. Taraflar</h2>
      <p>Bu sözleşme, Gonca Yoldaş Çift Dilli Eğitim (Satıcı) ile müşteri (Alıcı) arasında akdedilmiştir.</p>

      <h2>2. Konu</h2>
      <p>Bu sözleşme, eğitim programlarının satışı ve sunulmasına ilişkin hak ve yükümlülükleri düzenler.</p>

      <h2>3. Cayma Hakkı</h2>
      <p>Alıcı, 14 gün içerisinde herhangi bir gerekçe göstermeksizin sözleşmeden cayma hakkına sahiptir.</p>

      <h2>4. Ödeme ve Teslimat</h2>
      <p>Ödeme, anlaşılan şekilde yapılır. Eğitim hizmetleri belirtilen tarihte başlar.</p>

      <h2>5. İptal ve İade</h2>
      <p>Program iptali ve iade koşulları sözleşmede belirtilen şartlara tabidir.</p>
    `,
  },
};

const Legal = () => {
  const { slug } = useParams();
  const page = slug ? legalPages[slug] : null;

  if (!page) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              {page.title}
            </h1>
            
            <div 
              className="prose prose-lg max-w-none
                prose-headings:font-heading prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-p:text-foreground/80 prose-p:leading-relaxed
                prose-ul:my-4 prose-li:text-foreground/80"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />

            <div className="pt-8 border-t text-sm text-muted-foreground">
              <p>Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;

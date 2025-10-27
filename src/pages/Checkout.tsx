import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { programs } from "@/data/programs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, CreditCard, ShoppingBag } from "lucide-react";
import NotFound from "./NotFound";

const Checkout = () => {
  const { slug } = useParams();
  const { toast } = useToast();
  const program = programs.find((p) => p.slug === slug);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    emailConfirm: "",
    startDate: "",
    education: "",
    profession: "",
    childName: "",
    childAge: "",
    childSchool: "",
    childGrade: "",
    invoiceTitle: "",
    address: "",
    tcOrTaxNumber: "",
    taxOffice: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    kvkkConsent: false,
  });

  if (!program) {
    return <NotFound />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.kvkkConsent) {
      toast({
        title: "Uyarı",
        description: "KVKK onayı vermeden devam edemezsiniz.",
        variant: "destructive",
      });
      return;
    }

    if (formData.email !== formData.emailConfirm) {
      toast({
        title: "Uyarı",
        description: "E-posta adresleri eşleşmiyor.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Payment processing placeholder
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Kayıt Başarılı!",
        description: "Ödemeniz alınmıştır. Kısa süre içinde sizinle iletişime geçeceğiz.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        emailConfirm: "",
        startDate: "",
        education: "",
        profession: "",
        childName: "",
        childAge: "",
        childSchool: "",
        childGrade: "",
        invoiceTitle: "",
        address: "",
        tcOrTaxNumber: "",
        taxOffice: "",
        cardNumber: "",
        cardName: "",
        expiryDate: "",
        cvv: "",
        kvkkConsent: false,
      });
    } catch (error) {
      toast({
        title: "Hata",
        description: "Bir sorun oluştu. Lütfen daha sonra tekrar deneyin.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8">
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
              Katılım Formu
            </h1>
            <p className="text-muted-foreground">
              Lütfen aşağıdaki bilgileri eksiksiz doldurunuz
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Side - Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="bg-card p-6 md:p-8 rounded-2xl shadow-lg border space-y-6">
                  <h2 className="font-heading text-xl font-bold flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                    Kişisel Bilgiler
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Adınız *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Soyadınız *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefonunuz *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="0500 000 00 00"
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="startDate">Katılmak istediğiniz tarihi seçin *</Label>
                      <Input
                        id="startDate"
                        type="date"
                        required
                        value={formData.startDate}
                        onChange={(e) =>
                          setFormData({ ...formData, startDate: e.target.value })
                        }
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Adresiniz *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="emailConfirm">Email Adresiniz Tekrar *</Label>
                      <Input
                        id="emailConfirm"
                        type="email"
                        required
                        value={formData.emailConfirm}
                        onChange={(e) =>
                          setFormData({ ...formData, emailConfirm: e.target.value })
                        }
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="education">Eğitim Durumunuz</Label>
                      <Input
                        id="education"
                        value={formData.education}
                        onChange={(e) =>
                          setFormData({ ...formData, education: e.target.value })
                        }
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="profession">Mesleğiniz</Label>
                      <Input
                        id="profession"
                        value={formData.profession}
                        onChange={(e) =>
                          setFormData({ ...formData, profession: e.target.value })
                        }
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Child Information */}
                <div className="bg-card p-6 md:p-8 rounded-2xl shadow-lg border space-y-6">
                  <h2 className="font-heading text-xl font-bold flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Çocuğunuzun Bilgileri
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="childName">Çocuğunuzun Adı *</Label>
                      <Input
                        id="childName"
                        required
                        value={formData.childName}
                        onChange={(e) =>
                          setFormData({ ...formData, childName: e.target.value })
                        }
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="childAge">Çocuğunuzun Yaşı *</Label>
                      <Select
                        value={formData.childAge}
                        onValueChange={(value) =>
                          setFormData({ ...formData, childAge: value })
                        }
                      >
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Seçiniz" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-2">0-2 Yaş</SelectItem>
                          <SelectItem value="2-5">2-5 Yaş</SelectItem>
                          <SelectItem value="5-10">5-10 Yaş</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="childSchool">Çocuğunuzun Okulu</Label>
                      <Input
                        id="childSchool"
                        value={formData.childSchool}
                        onChange={(e) =>
                          setFormData({ ...formData, childSchool: e.target.value })
                        }
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="childGrade">Çocuğunuzun Sınıfı</Label>
                      <Input
                        id="childGrade"
                        value={formData.childGrade}
                        onChange={(e) =>
                          setFormData({ ...formData, childGrade: e.target.value })
                        }
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Invoice Information */}
                <div className="bg-card p-6 md:p-8 rounded-2xl shadow-lg border space-y-6">
                  <h2 className="font-heading text-xl font-bold">Fatura Bilgileri</h2>
                  <p className="text-sm text-muted-foreground">
                    Fatura kesilmesini istiyorsanız fatura bilgileri alanını doldurunuz.
                    Şahısa kesilecekse Fatura Başlığı Kısmına İsim Soyisim ve TC Kimlik
                    alanlarının doldurulması yeterlidir.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="invoiceTitle">Fatura Başlığı</Label>
                      <Input
                        id="invoiceTitle"
                        value={formData.invoiceTitle}
                        onChange={(e) =>
                          setFormData({ ...formData, invoiceTitle: e.target.value })
                        }
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tcOrTaxNumber">TC Kimlik veya Vergi nu</Label>
                      <Input
                        id="tcOrTaxNumber"
                        value={formData.tcOrTaxNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, tcOrTaxNumber: e.target.value })
                        }
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Adres Bilginiz</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="taxOffice">Vergi Daireniz</Label>
                      <Input
                        id="taxOffice"
                        value={formData.taxOffice}
                        onChange={(e) =>
                          setFormData({ ...formData, taxOffice: e.target.value })
                        }
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="bg-card p-6 md:p-8 rounded-2xl shadow-lg border space-y-6">
                  <h2 className="font-heading text-xl font-bold flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Ödeme Bilgileri
                  </h2>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Kart Numarası *</Label>
                    <Input
                      id="cardNumber"
                      required
                      value={formData.cardNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, cardNumber: e.target.value })
                      }
                      placeholder="0000 0000 0000 0000"
                      maxLength={19}
                      className="rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardName">Kart Üzerindeki İsim *</Label>
                    <Input
                      id="cardName"
                      required
                      value={formData.cardName}
                      onChange={(e) =>
                        setFormData({ ...formData, cardName: e.target.value })
                      }
                      className="rounded-xl"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Son Kullanma Tarihi *</Label>
                      <Input
                        id="expiryDate"
                        required
                        value={formData.expiryDate}
                        onChange={(e) =>
                          setFormData({ ...formData, expiryDate: e.target.value })
                        }
                        placeholder="MM/YY"
                        maxLength={5}
                        className="rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input
                        id="cvv"
                        required
                        value={formData.cvv}
                        onChange={(e) =>
                          setFormData({ ...formData, cvv: e.target.value })
                        }
                        placeholder="123"
                        maxLength={3}
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Consent */}
                <div className="bg-card p-6 md:p-8 rounded-2xl shadow-lg border space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="kvkk"
                      checked={formData.kvkkConsent}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, kvkkConsent: checked as boolean })
                      }
                    />
                    <label
                      htmlFor="kvkk"
                      className="text-sm text-muted-foreground leading-tight"
                    >
                      KVKK kapsamında kişisel verilerimin işlenmesini kabul ediyorum. *
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl"
                  size="lg"
                >
                  {isSubmitting ? "İşleniyor..." : "Ödemeyi Tamamla"}
                </Button>
              </form>
            </div>

            {/* Right Side - Program Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card p-6 rounded-2xl shadow-lg border sticky top-24 space-y-6">
                <h2 className="font-heading text-xl font-bold">Sipariş Özeti</h2>

                <div className="space-y-4">
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-bold mb-2">
                      {program.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {program.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{program.duration}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Ara Toplam</span>
                      <span className="font-medium">
                        {program.price.toLocaleString("tr-TR")} ₺
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">KDV (%18)</span>
                      <span className="font-medium">
                        {(program.price * 0.18).toLocaleString("tr-TR")} ₺
                      </span>
                    </div>
                    <div className="border-t pt-2 flex justify-between">
                      <span className="font-bold">Toplam</span>
                      <span className="font-bold text-xl text-primary">
                        {(program.price * 1.18).toLocaleString("tr-TR")} ₺
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;

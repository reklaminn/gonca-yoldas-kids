import { useState } from "react";
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

interface LeadFormProps {
  programId?: string;
}

const LeadForm = ({ programId }: LeadFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    kvkkConsent: false,
    marketingConsent: false,
  });

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

    setIsSubmitting(true);

    try {
      // SendPulse integration placeholder
      const response = await fetch("https://api.sendpulse.com/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          programId,
          timestamp: new Date().toISOString(),
        }),
      });

      toast({
        title: "Teşekkürler!",
        description: "Ekibimiz kısa süre içinde sizinle iletişime geçecektir.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        childAge: "",
        kvkkConsent: false,
        marketingConsent: false,
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Ad Soyad *</Label>
        <Input
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="rounded-xl"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">E-posta *</Label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="rounded-xl"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Telefon *</Label>
        <Input
          id="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="0500 000 00 00"
          className="rounded-xl"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="childAge">Çocuğunuzun Yaşı *</Label>
        <Select
          value={formData.childAge}
          onValueChange={(value) => setFormData({ ...formData, childAge: value })}
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

      <div className="space-y-4">
        <div className="flex items-start space-x-2">
          <Checkbox
            id="kvkk"
            checked={formData.kvkkConsent}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, kvkkConsent: checked as boolean })
            }
          />
          <label htmlFor="kvkk" className="text-sm text-muted-foreground leading-tight">
            KVKK kapsamında kişisel verilerimin işlenmesini kabul ediyorum. *
          </label>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="marketing"
            checked={formData.marketingConsent}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, marketingConsent: checked as boolean })
            }
          />
          <label htmlFor="marketing" className="text-sm text-muted-foreground leading-tight">
            Kampanya ve duyurulardan haberdar olmak istiyorum.
          </label>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl"
        size="lg"
      >
        {isSubmitting ? "Gönderiliyor..." : "Bilgi Al"}
      </Button>
    </form>
  );
};

export default LeadForm;

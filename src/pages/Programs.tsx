import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/data/programs";
import { Button } from "@/components/ui/button";

const Programs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedAge, setSelectedAge] = useState<string>("all");

  useEffect(() => {
    const age = searchParams.get("age");
    if (age) {
      setSelectedAge(age);
    }
  }, [searchParams]);

  const filteredPrograms =
    selectedAge === "all"
      ? programs
      : programs.filter((p) => p.ageRange.includes(selectedAge));

  const handleAgeFilter = (age: string) => {
    setSelectedAge(age);
    if (age === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ age });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4 animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              Programlarımız
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Her yaş grubuna özel, bilimsel temelli İngilizce edinim programları
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant={selectedAge === "all" ? "default" : "outline"}
              onClick={() => handleAgeFilter("all")}
              className="rounded-xl"
            >
              Tüm Programlar
            </Button>
            <Button
              variant={selectedAge === "0-2" ? "default" : "outline"}
              onClick={() => handleAgeFilter("0-2")}
              className="rounded-xl"
            >
              0-2 Yaş
            </Button>
            <Button
              variant={selectedAge === "2-5" ? "default" : "outline"}
              onClick={() => handleAgeFilter("2-5")}
              className="rounded-xl"
            >
              2-5 Yaş
            </Button>
            <Button
              variant={selectedAge === "5-10" ? "default" : "outline"}
              onClick={() => handleAgeFilter("5-10")}
              className="rounded-xl"
            >
              5-10 Yaş
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;

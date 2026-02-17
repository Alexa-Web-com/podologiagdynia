import { useState, useEffect } from "react";
import { X, ArrowLeft } from "lucide-react";
import office1 from "@/assets/office-1.jpg";
import office2 from "@/assets/office-2.jpg";
import office3 from "@/assets/office-3.jpg";
import treatment1 from "@/assets/treatment-1.jpg";
import treatment2 from "@/assets/treatment-2.jpg";
import treatment3 from "@/assets/treatment-3.jpg";
import treatment4 from "@/assets/treatment-4.jpg";
import treatment5 from "@/assets/treatment-5.jpg";
import treatment6 from "@/assets/treatment-6.jpg";
import equipment1 from "@/assets/equipment-1.jpg";
import equipment2 from "@/assets/equipment-2.jpg";
import equipment3 from "@/assets/equipment-3.jpg";
import care1 from "@/assets/care-1.png";
import care2 from "@/assets/care-2.png";
import care3 from "@/assets/care-3.png";

interface GalleryCategory {
  title: string;
  cover: string;
  images: { src: string; alt: string }[];
}

const categories: GalleryCategory[] = [
  {
    title: "Wnętrze gabinetu",
    cover: office1,
    images: [
      { src: office1, alt: "Nowoczesne wnętrze gabinetu" },
      { src: office2, alt: "Recepcja i poczekalnia" },
      { src: office3, alt: "Korytarz  gabinetu" },
    ],
  },
  {
    title: "Zabiegi podologiczne",
    cover: treatment1,
    images: [
      { src: treatment1, alt: "Profesjonalny zabieg podologiczny" },
      { src: treatment2, alt: "Zabieg w trakcie" },
      { src: treatment3, alt: "Profesjonalny zabieg podologiczny" },
      { src: treatment4, alt: "Profesjonalne środki do pielęgnacji stóp" },
      { src: treatment5, alt: "Profesjonalne środki do pielęgnacji stóp" },
      { src: treatment6, alt: "Profesjonalny zabieg podologiczny" },
    ],
  },
  {
    title: "Sprzęt specjalistyczny",
    cover: equipment1,
    images: [
      { src: equipment1, alt: "Specjalistyczne narzędzia podologiczne" },
      { src: equipment2, alt: "Narzędzia na tacy medycznej" },
      { src: equipment3, alt: "Frezarka podologiczna" },
    ],
  },
  {
    title: "Efekty pielęgnacji",
    cover: care1,
    images: [
      { src: care1, alt: "Pielęgnacja stóp" },
      { src: care2, alt: "Pielęgnacja stóp" },
      { src: care3, alt: "Pielęgnacja stóp" },
    ],
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Handle back button to close gallery/lightbox
  useEffect(() => {
    const handlePopState = () => {
      // If we popped state and we have selected image, close it
      if (selectedImage) {
        setSelectedImage(null);
      } else if (activeCategory !== null) {
        setActiveCategory(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [activeCategory, selectedImage]);

  const openCategory = (index: number) => {
    setActiveCategory(index);
    window.history.pushState({ gallery: "category" }, "");
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openImage = (src: string) => {
    setSelectedImage(src);
    window.history.pushState({ gallery: "image" }, "");
  };

  const closeCategory = () => {
    if (window.history.state?.gallery) {
      window.history.back();
    } else {
      setActiveCategory(null);
    }
  };

  const closeImage = () => {
    if (window.history.state?.gallery === "image") {
      window.history.back();
    } else {
      setSelectedImage(null);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Galeria
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zobacz nasze profesjonalne wnętrze i efekty naszej pracy
          </p>
        </div>

        {activeCategory === null ? (
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl cursor-pointer hover-lift animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openCategory(index)}
              >
                <img
                  src={cat.cover}
                  alt={cat.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">{cat.title}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-5xl mx-auto animate-fade-in">
            <button
              onClick={closeCategory}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Powrót do galerii
            </button>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              {categories[activeCategory].title}
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {categories[activeCategory].images.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl cursor-pointer group hover-lift"
                  onClick={() => openImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeImage}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              closeImage();
            }}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Powiększone zdjęcie"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;


import React from "react";
import { motion } from "framer-motion";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const ClientLogosSection: React.FC = () => {
  const clientLogos = [
    {
      src: "/lovable-uploads/f357b644-3e07-42ae-ba06-891d69045053.png",
      alt: "Gokul Buds",
      width: 180
    },
    {
      src: "/lovable-uploads/2f4bcc3d-9e61-4b5c-9997-400238fb6632.png",
      alt: "Grand Wood Furniture",
      width: 160
    },
    {
      src: "/lovable-uploads/b9c7017a-a9c6-4be3-b291-e8a955858a72.png",
      alt: "Crown Logo",
      width: 120
    },
    {
      src: "/lovable-uploads/0339aa3b-503c-4720-94bd-63d68f79557b.png",
      alt: "Spicy Paradise",
      width: 170
    },
    {
      src: "/lovable-uploads/e448ea52-d44b-410a-85c2-b139861381ad.png",
      alt: "Alexa Homestay",
      width: 150
    },
    {
      src: "/lovable-uploads/667d5a08-c0a7-4850-99e2-1c6a0bebc297.png",
      alt: "Naidu Mobiles",
      width: 160
    },
    {
      src: "/lovable-uploads/f9f0e617-1be6-42a2-bd20-f0cb36e097b1.png",
      alt: "Robo Diner",
      width: 170
    },
    {
      src: "/lovable-uploads/f78491f0-e1b3-4d56-96c6-e2d6d4065263.png",
      alt: "Sahasras Vignan",
      width: 150
    },
    {
      src: "/lovable-uploads/4e45709f-2ff3-4085-92cd-d2e57a6f6d1c.png",
      alt: "Isha Arogya",
      width: 180
    },
    {
      src: "/lovable-uploads/104a5bb6-d72e-4147-b7a1-a38a6b5e2da4.png",
      alt: "Mom Me Clinic",
      width: 160
    },
    {
      src: "/lovable-uploads/e69120ae-dd47-43a5-accc-7b681771647e.png",
      alt: "AJ Dental Care",
      width: 150
    },
    {
      src: "/lovable-uploads/cdbe76db-9973-4c37-b333-36ac4e23ebea.png",
      alt: "Lora",
      width: 140
    },
    {
      src: "/lovable-uploads/0415e558-83fa-4a11-b62c-eca6076bca9d.png",
      alt: "Crown Shield Logo",
      width: 150
    },
    {
      src: "/lovable-uploads/9a7938dc-2c11-4e5d-8b5b-57ca706af3e1.png",
      alt: "MS Sewing Machines",
      width: 160
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-t from-gray-50 to-white relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Trusted by Leading Brands
          </h2>
          <div className="w-20 h-1 bg-lasan-blue mx-auto"></div>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="py-4">
              {clientLogos.map((logo, index) => (
                <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6 pl-4">
                  <div 
                    className="h-24 flex items-center justify-center p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                  >
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="max-h-full max-w-full object-contain" 
                      style={{ width: 'auto', height: 'auto', maxWidth: logo.width ? `${logo.width}px` : '100%' }} 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogosSection;


import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const ClientLogosSection: React.FC = () => {
  const clientLogos = [
    {
      src: "/lovable-uploads/f357b644-3e07-42ae-ba06-891d69045053.png",
      alt: "Gokul Buds",
      width: 180,
      instagram: "https://www.instagram.com/thegokulbuds?igsh=MWdib2c1djFpYWw1NQ=="
    },
    {
      src: "/lovable-uploads/2f4bcc3d-9e61-4b5c-9997-400238fb6632.png",
      alt: "Grand Wood Furniture",
      width: 160,
      instagram: "https://www.instagram.com/grandwood_furniture_tpt?igsh=bmNiamFwMjc1c25s"
    },
    {
      src: "/lovable-uploads/b9c7017a-a9c6-4be3-b291-e8a955858a72.png",
      alt: "Crown Logo",
      width: 120,
      instagram: "https://www.instagram.com/dharsandressessilks/"
    },
    {
      src: "/lovable-uploads/0339aa3b-503c-4720-94bd-63d68f79557b.png",
      alt: "Spicy Paradise",
      width: 170,
      instagram: "https://www.instagram.com/spicyparadise_official?igsh=MXd4bjdpNXI2cXJ6Yw=="
    },
    {
      src: "/lovable-uploads/e448ea52-d44b-410a-85c2-b139861381ad.png",
      alt: "Alexa Homestay",
      width: 150,
      instagram: "https://www.instagram.com/alexa_homestay_tirupati?igsh=cWs1cGZoZWw0ajd1"
    },
    {
      src: "/lovable-uploads/667d5a08-c0a7-4850-99e2-1c6a0bebc297.png",
      alt: "Naidu Mobiles",
      width: 160,
      instagram: "https://www.instagram.com/naidumobiles_tirupati?igsh=Y3hrbHNmYjhyeDN2"
    },
    {
      src: "/lovable-uploads/f9f0e617-1be6-42a2-bd20-f0cb36e097b1.png",
      alt: "Robo Diner",
      width: 170,
      instagram: "https://www.instagram.com/therobodiner?igsh=MTVldmRrbWh3cnhmbg=="
    },
    {
      src: "/lovable-uploads/f78491f0-e1b3-4d56-96c6-e2d6d4065263.png",
      alt: "Sahasras Vignan",
      width: 150,
      instagram: "https://www.instagram.com/sahasras_vignan?igsh=MTVhZXpwNnh3OGViYw=="
    },
    {
      src: "/lovable-uploads/4e45709f-2ff3-4085-92cd-d2e57a6f6d1c.png",
      alt: "Isha Arogya",
      width: 180,
      instagram: "https://www.instagram.com/ishaaarogya?igsh=YXBqMnp4N21mbXJ2"
    },
    {
      src: "/lovable-uploads/104a5bb6-d72e-4147-b7a1-a38a6b5e2da4.png",
      alt: "Mom Me Clinic",
      width: 160,
      instagram: "https://www.instagram.com/mom_and_me_clinic_?igsh=cmdldnhqcjhpMHp0"
    },
    {
      src: "/lovable-uploads/e69120ae-dd47-43a5-accc-7b681771647e.png",
      alt: "AJ Dental Care",
      width: 150,
      instagram: "https://www.instagram.com/aj_dentalcare?igsh=MTVpajVraWl3MXFwaA=="
    },
    {
      src: "/lovable-uploads/cdbe76db-9973-4c37-b333-36ac4e23ebea.png",
      alt: "Lora",
      width: 140,
      instagram: "https://www.instagram.com/loraloungetirupati/"
    },
    {
      src: "/lovable-uploads/0415e558-83fa-4a11-b62c-eca6076bca9d.png",
      alt: "Crown Shield Logo",
      width: 150,
      instagram: "https://www.instagram.com/hotelrajahamsa?igsh=dGNma2ZrZ3FqdG11"
    },
    {
      src: "/lovable-uploads/9a7938dc-2c11-4e5d-8b5b-57ca706af3e1.png",
      alt: "MS Sewing Machines",
      width: 160,
      instagram: "https://www.instagram.com/ms_enterprises_tirupati?igsh=MXZtZThsb3lraWVj"
    }
  ];

  const autoplay = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <motion.section 
      className="py-16 bg-gradient-to-t from-gray-50 to-white relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Trusted by Leading Brands
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-lasan-blue mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport({ once: true }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            <CarouselContent className="py-4">
              {clientLogos.map((logo, index) => (
                <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6 pl-4">
                  <motion.a 
                    href={logo.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-24 flex items-center justify-center p-3 rounded-lg bg-white shadow-sm transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition({ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="max-h-full max-w-full object-contain" 
                      style={{ width: 'auto', height: 'auto', maxWidth: logo.width ? `${logo.width}px` : '100%' }}
                      whileHover={{
                        filter: "brightness(1.1) saturate(1.2)",
                        transition: { duration: 0.2 }
                      }}
                    />
                  </motion.a>
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
    </motion.section>
  );
};

export default ClientLogosSection;

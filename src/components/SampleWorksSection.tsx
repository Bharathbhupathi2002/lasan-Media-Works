
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Image, Video } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface WorkItem {
  type: "poster" | "video";
  link: string;
  thumbnail?: string;
}

const SampleWorksSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const sampleWorks: WorkItem[] = [
    {
      type: "poster",
      link: "https://www.instagram.com/p/DEUqEEVNphi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      type: "poster",
      link: "https://www.instagram.com/p/DJfqjrlCR5d/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      type: "poster",
      link: "https://www.instagram.com/p/DI3IQmMytrG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      type: "poster",
      link: "https://www.instagram.com/p/DIiNh9jo214/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      type: "poster",
      link: "https://www.instagram.com/p/DJrLXckK7tA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
    },
    {
      type: "poster",
      link: "https://www.instagram.com/p/DJvltabR5KC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
    },
    {
      type: "video",
      link: "https://www.instagram.com/reel/DID-ScfApCd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
    },
    {
      type: "video",
      link: "https://www.instagram.com/reel/DJtdi75MYzE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
    },
    {
      type: "video",
      link: "https://www.instagram.com/reel/DI3PFDYSnXm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"
    },
    {
      type: "video",
      link: "https://www.instagram.com/reel/DJL69jotOc3/?utm_source=ig_web_copy_link"
    }
  ];

  // Instagram post embeds need to be transformed from normal links to embed links
  const getEmbedLink = (link: string): string => {
    // Instagram format: https://www.instagram.com/p/[POST_ID]/ or https://www.instagram.com/reel/[REEL_ID]/
    // Extract the post/reel ID from the URL
    const regex = /\/(p|reel)\/([^/?]+)/;
    const match = link.match(regex);
    
    if (match && match[2]) {
      const postId = match[2];
      const contentType = match[1]; // 'p' for post, 'reel' for reel
      
      // Return the embed URL
      return `https://www.instagram.com/${contentType}/${postId}/embed`;
    }
    
    // If unable to extract, return the original
    return link;
  };

  const filterWorks = (tab: string) => {
    if (tab === "all") return sampleWorks;
    return sampleWorks.filter(work => work.type === tab);
  };

  const filteredWorks = filterWorks(activeTab);

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 modern-pattern opacity-40"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-lasan-blue/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-lasan-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-lasan-blue to-purple-600 bg-clip-text text-transparent">
            Our Creative Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-lasan-blue to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our latest creative works that showcase our expertise in design and video production
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white/80 backdrop-blur-sm shadow-lg border border-gray-200/50 p-1 rounded-xl">
                <TabsTrigger 
                  value="all" 
                  className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium data-[state=active]:bg-lasan-blue data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                >
                  All Works
                </TabsTrigger>
                <TabsTrigger 
                  value="poster" 
                  className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium data-[state=active]:bg-lasan-blue data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                >
                  <Image className="h-4 w-4" />
                  Posters
                </TabsTrigger>
                <TabsTrigger 
                  value="video" 
                  className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium data-[state=active]:bg-lasan-blue data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                >
                  <Video className="h-4 w-4" />
                  Videos
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWorks.map((work, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:scale-105">
                      <CardContent className="p-0 aspect-square relative">
                        <iframe
                          src={getEmbedLink(work.link)}
                          className="w-full h-full border-none rounded-t-lg"
                          allowFullScreen
                          loading="lazy"
                          title={`Instagram ${work.type} ${index + 1}`}
                        ></iframe>
                        <a 
                          href={work.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 group-hover:shadow-xl"
                          aria-label="View on Instagram"
                        >
                          <Instagram className="h-5 w-5 text-pink-600" />
                        </a>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg"></div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="poster">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWorks.map((work, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:scale-105">
                      <CardContent className="p-0 aspect-square relative">
                        <iframe
                          src={getEmbedLink(work.link)}
                          className="w-full h-full border-none rounded-t-lg"
                          allowFullScreen
                          loading="lazy"
                          title={`Instagram ${work.type} ${index + 1}`}
                        ></iframe>
                        <a 
                          href={work.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 group-hover:shadow-xl"
                          aria-label="View on Instagram"
                        >
                          <Instagram className="h-5 w-5 text-pink-600" />
                        </a>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg"></div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="video">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWorks.map((work, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:scale-105">
                      <CardContent className="p-0 aspect-square relative">
                        <iframe
                          src={getEmbedLink(work.link)}
                          className="w-full h-full border-none rounded-t-lg"
                          allowFullScreen
                          loading="lazy"
                          title={`Instagram ${work.type} ${index + 1}`}
                        ></iframe>
                        <a 
                          href={work.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 group-hover:shadow-xl"
                          aria-label="View on Instagram"
                        >
                          <Instagram className="h-5 w-5 text-pink-600" />
                        </a>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg"></div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SampleWorksSection;


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
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Our Sample Works
          </h2>
          <div className="w-20 h-1 bg-lasan-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of our creative works, including posters and videos that showcase our design and production capabilities.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all" className="flex items-center gap-2">
                All
              </TabsTrigger>
              <TabsTrigger value="poster" className="flex items-center gap-2">
                <Image className="h-4 w-4" />
                Posters
              </TabsTrigger>
              <TabsTrigger value="video" className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                Videos
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorks.map((work, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0 aspect-square relative">
                      <iframe
                        src={getEmbedLink(work.link)}
                        className="w-full h-full border-none"
                        allowFullScreen
                        loading="lazy"
                        title={`Instagram ${work.type} ${index + 1}`}
                      ></iframe>
                      <a 
                        href={work.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                        aria-label="View on Instagram"
                      >
                        <Instagram className="h-5 w-5 text-pink-600" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="poster">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorks.map((work, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0 aspect-square relative">
                      <iframe
                        src={getEmbedLink(work.link)}
                        className="w-full h-full border-none"
                        allowFullScreen
                        loading="lazy"
                        title={`Instagram ${work.type} ${index + 1}`}
                      ></iframe>
                      <a 
                        href={work.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                        aria-label="View on Instagram"
                      >
                        <Instagram className="h-5 w-5 text-pink-600" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="video">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorks.map((work, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0 aspect-square relative">
                      <iframe
                        src={getEmbedLink(work.link)}
                        className="w-full h-full border-none"
                        allowFullScreen
                        loading="lazy"
                        title={`Instagram ${work.type} ${index + 1}`}
                      ></iframe>
                      <a 
                        href={work.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                        aria-label="View on Instagram"
                      >
                        <Instagram className="h-5 w-5 text-pink-600" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SampleWorksSection;

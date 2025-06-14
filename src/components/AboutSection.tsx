
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Target, TrendingUp, Shield, Clock, Award, BarChart3 } from 'lucide-react';

const AboutSection = () => {
  const coreValues = [
    {
      icon: <Lightbulb className="w-8 h-8 text-bounty-orange" />,
      title: "Innovation that Serves",
      description: "We constantly explore new ways to make restaurant management smarter and more effective."
    },
    {
      icon: <Users className="w-8 h-8 text-bounty-orange" />,
      title: "Customer-Centric Growth",
      description: "Your success is our benchmark. We build tools that deliver tangible results for your business."
    },
    {
      icon: <Target className="w-8 h-8 text-bounty-orange" />,
      title: "Efficiency Redefined",
      description: "We streamline complexities, so you can focus on your passion for food and hospitality."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-bounty-orange" />,
      title: "Profitable Partnerships",
      description: "We aim to be more than a software provider; we're your strategic ally in achieving greater profitability."
    }
  ];

  const experienceStats = [
    {
      number: "10+",
      label: "Years of Experience",
      description: "Developing enterprise solutions"
    },
    {
      number: "50+",
      label: "Restaurant Partners",
      description: "Successfully implemented BOUNTI"
    },
    {
      number: "50+",
      label: "Expert Engineers",
      description: "Dedicated to innovation"
    }
  ];

  const missionValues = [
    {
      icon: <Target className="w-8 h-8 text-bounty-orange" />,
      title: "Mission Driven",
      description: "Empowering restaurants to reach their full potential"
    },
    {
      icon: <Users className="w-8 h-8 text-bounty-orange" />,
      title: "Customer First",
      description: "Your success is our primary measure of achievement"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-bounty-orange" />,
      title: "Innovation",
      description: "Cutting-edge solutions for modern restaurants"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-bounty-orange" />,
      title: "Growth",
      description: "Proven strategies that drive real results"
    }
  ];

  const innovationFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Enterprise Security",
      description: "Bank-grade security for your data",
      highlight: true
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance",
      highlight: true,
      special: true
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Innovative Solutions",
      description: "Cutting-edge technology solutions",
      highlight: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Proven ROI",
      description: "Guaranteed return on investment",
      highlight: true
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Our Core Values Section with Blue Theme */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-bounty-navy mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="bg-gradient-to-br from-bounty-navy via-blue-800 to-bounty-navy p-12 rounded-3xl mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-0 bg-white/10 backdrop-blur-sm h-full hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="font-bold text-white text-lg mb-3">{value.title}</h3>
                    <p className="text-gray-200 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Strength of Experience Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-bounty-navy mb-6">
              The Strength of Experience, The Vision for the Future
            </h2>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/2cb91fc4-f3da-490c-aafb-fd931d028671.png" 
                alt="Decode Solutions" 
                className="h-8 mr-3"
              />
              <span className="text-lg font-semibold text-bounty-navy">Decode Solutions</span>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              BOUNTI is a proud offering from Decode Solutions, a company with a rich heritage of developing cutting-edge technological solutions for diverse industries and multinational corporations. This deep well of experience in software engineering, data analytics, and user-centric design is the bedrock upon which BOUNTI is built.
            </p>
            <p className="text-gray-700 leading-relaxed">
              While Decode Solutions explores a wide spectrum of technological advancements for various sectors, BOUNTI represents our specialized commitment to revolutionizing the restaurant industry. This focus allows us to pour all our innovation and expertise into creating the ultimate restaurant success platform.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {experienceStats.map((stat, index) => (
              <Card key={index} className="border-l-4 border-l-bounty-orange">
                <CardContent className="p-6 flex items-center">
                  <div className="bg-bounty-orange text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mr-4">
                    {stat.number}
                  </div>
                  <div>
                    <h4 className="font-bold text-bounty-navy text-lg">{stat.label}</h4>
                    <p className="text-gray-600">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* BOUNTI: Cultivating Growth Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-bounty-navy mb-6">
              BOUNTI: Cultivating Growth for Restaurants, One Smart Solution at a Time
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At BOUNTI, we believe that every restaurant, regardless of its size or style, deserves the tools to thrive in a competitive landscape. Our mission is to provide an intuitive, powerful, and adaptive restaurant management software that doesn't just manage operations but actively drives sales, enhances customer experiences, and maximizes profitability.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are committed to being your partner in growth, helping you harvest the full potential of your culinary venture.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {missionValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-bounty-navy mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Powered by Innovation Section with Orange Theme */}
        <motion.div
          className="bg-gradient-to-br from-bounty-orange via-orange-500 to-bounty-orange rounded-2xl p-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Powered by Innovation, Focused on Your Restaurant's Success
              </h2>
              <p className="text-white/90 leading-relaxed mb-6">
                BOUNTI is the dedicated restaurant management system from the forward-thinking minds at Decode Solutions. While BOUNTI is laser-focused on perfecting your restaurant's performance today, its foundation is built on technological expertise that anticipates the trends of tomorrow.
              </p>
              <div className="flex items-center">
                <span className="text-lg text-white/90">Powered by</span>
                <img 
                  src="/lovable-uploads/2cb91fc4-f3da-490c-aafb-fd931d028671.png" 
                  alt="Decode Solutions" 
                  className="h-8 ml-3"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {innovationFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className={`text-center transition-all duration-300 border-0 ${
                    feature.highlight ? 'bg-white/20 backdrop-blur-sm hover:bg-white/30' : 'bg-white/10 hover:bg-white/20'
                  } ${feature.special ? 'ring-2 ring-yellow-300 transform scale-105' : ''}`}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-3">
                      {feature.icon}
                    </div>
                    <h4 className={`font-bold mb-2 text-white ${feature.special ? 'text-yellow-100' : ''}`}>
                      {feature.title}
                    </h4>
                    <p className="text-white/80 text-sm">{feature.description}</p>
                    {feature.special && (
                      <div className="mt-2 text-xs bg-yellow-300 text-bounty-navy px-2 py-1 rounded-full inline-block font-bold">
                        24x7 Available
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

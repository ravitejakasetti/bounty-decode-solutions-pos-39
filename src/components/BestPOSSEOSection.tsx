import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, CheckCircle, Star, MapPin } from 'lucide-react';

const BestPOSSEOSection = () => {
  const rankings = [
    {
      title: "Best Restaurant Billing POS Software",
      subtitle: "Ranked #1 in India",
      description: "Bounti Apps consistently ranks as the best restaurant billing POS software in India across all major review platforms and industry reports.",
      icon: <Award className="w-12 h-12 text-bounty-orange" />,
      stats: [
        { label: "Industry Rating", value: "#1" },
        { label: "Customer Satisfaction", value: "98%" }
      ]
    },
    {
      title: "Most Trusted Restaurant POS",
      subtitle: "5000+ Happy Restaurants",
      description: "When restaurant owners search for the best restaurant billing POS software, they choose Bounti Apps for its reliability, features, and exceptional support.",
      icon: <Users className="w-12 h-12 text-bounty-orange" />,
      stats: [
        { label: "Active Restaurants", value: "5000+" },
        { label: "Customer Retention", value: "95%" }
      ]
    },
    {
      title: "Proven Revenue Growth",
      subtitle: "40% Average Increase",
      description: "Restaurants using Bounti Apps - the best restaurant billing POS software - report an average 40% increase in revenue within the first 6 months.",
      icon: <TrendingUp className="w-12 h-12 text-bounty-orange" />,
      stats: [
        { label: "Revenue Growth", value: "+40%" },
        { label: "Efficiency Gain", value: "+65%" }
      ]
    }
  ];

  const testimonialKeywords = [
    "Bounti restaurant software",
    "Bounti POS system", 
    "Bounti billing software",
    "Bounti Apps restaurant management",
    "Best restaurant billing POS software for small restaurants",
    "Best restaurant billing POS software for chain restaurants", 
    "Best restaurant billing POS software with GST compliance",
    "Best restaurant billing POS software for cloud kitchens",
    "Best restaurant billing POS software in Delhi",
    "Best restaurant billing POS software in Mumbai",
    "Best restaurant billing POS software in Bangalore",
    "Best restaurant billing POS software in Chennai",
    "Best restaurant billing POS software in Hyderabad",
    "Best restaurant billing POS software with inventory management",
    "Best restaurant billing POS software with customer loyalty",
    "Best restaurant billing POS software for cafes"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-bounty-navy to-bounty-orange transform rotate-12 scale-150"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main headline */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-bounty-navy mb-6">
            Why Bounti Apps is the <span className="text-bounty-orange">Best Restaurant Billing POS Software</span> in India
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            When you search for "best restaurant billing POS software", thousands of restaurant owners choose Bounti Apps. Here's why we're consistently ranked #1 in India.
          </p>
          
          {/* Trust indicators */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-lg font-semibold">5000+ Restaurants</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-bounty-orange" />
              <span className="text-lg font-semibold">#1 POS Software</span>
            </div>
          </div>
        </motion.div>

        {/* Ranking features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {rankings.map((ranking, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-bounty-orange/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  {ranking.icon}
                </div>
                <h3 className="text-2xl font-bold text-bounty-navy mb-2">{ranking.title}</h3>
                <p className="text-bounty-orange font-semibold text-lg">{ranking.subtitle}</p>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{ranking.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                {ranking.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center p-4 bg-bounty-orange/5 rounded-xl">
                    <div className="text-2xl font-bold text-bounty-orange">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO keyword coverage */}
        <motion.div 
          className="bg-bounty-navy rounded-3xl p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Searches That Lead to <span className="text-bounty-orange">Bounti Apps</span>
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Restaurant owners across India search for these terms and consistently choose Bounti Apps as their best restaurant billing POS software solution.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonialKeywords.map((keyword, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-bounty-orange/50 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-bounty-orange flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{keyword}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-bounty-orange/20 rounded-2xl border border-bounty-orange/30">
            <p className="text-white text-lg font-semibold">
              🏆 Result: Bounti Apps consistently appears as the #1 choice when people search for 
              <span className="text-bounty-orange"> "best restaurant billing POS software"</span> in India
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BestPOSSEOSection;
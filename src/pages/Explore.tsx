import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  MessageSquare, 
  Calendar,
  FileText,
  Settings,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Explore: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Get deep insights into your business performance with our comprehensive analytics dashboard.',
      link: '/explore/analytics',
      color: 'bg-blue-500'
    },
    {
      icon: Shield,
      title: 'Security Management',
      description: 'Protect your business with enterprise-grade security features and compliance tools.',
      link: '/explore/security',
      color: 'bg-green-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with powerful collaboration tools and real-time updates.',
      link: '/explore/collaboration',
      color: 'bg-purple-500'
    },
    {
      icon: MessageSquare,
      title: 'Communication Hub',
      description: 'Centralize all your communications in one place with integrated messaging and video calls.',
      link: '/explore/communication',
      color: 'bg-orange-500'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Optimize your time with AI-powered scheduling and automated calendar management.',
      link: '/explore/scheduling',
      color: 'bg-red-500'
    },
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Organize, share, and collaborate on documents with version control and permissions.',
      link: '/explore/documents',
      color: 'bg-indigo-500'
    },
    {
      icon: Zap,
      title: 'Automation Tools',
      description: 'Streamline your workflows with powerful automation and integration capabilities.',
      link: '/explore/automation',
      color: 'bg-yellow-500'
    },
    {
      icon: Settings,
      title: 'Custom Integrations',
      description: 'Connect with your favorite tools and services through our extensive API and integrations.',
      link: '/explore/integrations',
      color: 'bg-gray-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('explore.title')}
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              {t('explore.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {feature.description}
                </p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Start exploring our powerful features today and see how Releans can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Free
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
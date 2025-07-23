import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LanguageContextType } from '../types';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    'nav.dashboard': 'Dashboard',
    'nav.explore': 'Explore',
    'hero.title': 'Transform Your Business with Advanced Solutions',
    'hero.subtitle': 'Powerful tools and analytics to drive your business forward',
    'hero.cta': 'Get Started Free',
    'footer.contact': 'Contact Us',
    'footer.social': 'Follow Us',
    'footer.languages': 'Languages',
    'footer.legal': 'Legal',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.subtitle': 'Choose the plan that works for you',
    'about.title': 'About Releans',
    'about.subtitle': 'We are dedicated to providing innovative solutions',
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We would love to hear from you',
    'login.title': 'Welcome Back',
    'login.subtitle': 'Sign in to your account',
    'signup.title': 'Create Account',
    'signup.subtitle': 'Join thousands of satisfied customers',
    'dashboard.title': 'Dashboard',
    'dashboard.welcome': 'Welcome back',
    'explore.title': 'Explore Features',
    'explore.subtitle': 'Discover what we have to offer'
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.pricing': 'Precios',
    'nav.contact': 'Contacto',
    'nav.login': 'Iniciar Sesión',
    'nav.signup': 'Registrarse',
    'nav.dashboard': 'Panel',
    'nav.explore': 'Explorar',
    'hero.title': 'Transforma tu Negocio con Soluciones Avanzadas',
    'hero.subtitle': 'Herramientas poderosas y análisis para impulsar tu negocio',
    'hero.cta': 'Comenzar Gratis',
    'footer.contact': 'Contáctanos',
    'footer.social': 'Síguenos',
    'footer.languages': 'Idiomas',
    'footer.legal': 'Legal',
    'footer.terms': 'Términos de Servicio',
    'footer.privacy': 'Política de Privacidad',
    'footer.cookies': 'Política de Cookies',
    'pricing.title': 'Precios Simples y Transparentes',
    'pricing.subtitle': 'Elige el plan que funcione para ti',
    'about.title': 'Acerca de Releans',
    'about.subtitle': 'Estamos dedicados a brindar soluciones innovadoras',
    'contact.title': 'Ponte en Contacto',
    'contact.subtitle': 'Nos encantaría saber de ti',
    'login.title': 'Bienvenido de Vuelta',
    'login.subtitle': 'Inicia sesión en tu cuenta',
    'signup.title': 'Crear Cuenta',
    'signup.subtitle': 'Únete a miles de clientes satisfechos',
    'dashboard.title': 'Panel',
    'dashboard.welcome': 'Bienvenido de vuelta',
    'explore.title': 'Explorar Características',
    'explore.subtitle': 'Descubre lo que tenemos para ofrecer'
  },
  zh: {
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.pricing': '定价',
    'nav.contact': '联系我们',
    'nav.login': '登录',
    'nav.signup': '注册',
    'nav.dashboard': '仪表板',
    'nav.explore': '探索',
    'hero.title': '通过先进的解决方案转变您的业务',
    'hero.subtitle': '强大的工具和分析，推动您的业务向前发展',
    'hero.cta': '免费开始',
    'footer.contact': '联系我们',
    'footer.social': '关注我们',
    'footer.languages': '语言',
    'footer.legal': '法律',
    'footer.terms': '服务条款',
    'footer.privacy': '隐私政策',
    'footer.cookies': 'Cookie政策',
    'pricing.title': '简单透明的定价',
    'pricing.subtitle': '选择适合您的计划',
    'about.title': '关于Releans',
    'about.subtitle': '我们致力于提供创新解决方案',
    'contact.title': '联系我们',
    'contact.subtitle': '我们很乐意听到您的声音',
    'login.title': '欢迎回来',
    'login.subtitle': '登录您的账户',
    'signup.title': '创建账户',
    'signup.subtitle': '加入成千上万满意的客户',
    'dashboard.title': '仪表板',
    'dashboard.welcome': '欢迎回来',
    'explore.title': '探索功能',
    'explore.subtitle': '发现我们的产品'
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.about': '私たちについて',
    'nav.pricing': '料金',
    'nav.contact': 'お問い合わせ',
    'nav.login': 'ログイン',
    'nav.signup': 'サインアップ',
    'nav.dashboard': 'ダッシュボード',
    'nav.explore': '探索',
    'hero.title': '高度なソリューションでビジネスを変革',
    'hero.subtitle': 'ビジネスを前進させる強力なツールと分析',
    'hero.cta': '無料で始める',
    'footer.contact': 'お問い合わせ',
    'footer.social': 'フォローする',
    'footer.languages': '言語',
    'footer.legal': '法的',
    'footer.terms': '利用規約',
    'footer.privacy': 'プライバシーポリシー',
    'footer.cookies': 'クッキーポリシー',
    'pricing.title': 'シンプルで透明な料金',
    'pricing.subtitle': 'あなたに合ったプランを選択',
    'about.title': 'Releansについて',
    'about.subtitle': '私たちは革新的なソリューションの提供に取り組んでいます',
    'contact.title': 'お問い合わせ',
    'contact.subtitle': 'お気軽にお声がけください',
    'login.title': 'おかえりなさい',
    'login.subtitle': 'アカウントにサインイン',
    'signup.title': 'アカウント作成',
    'signup.subtitle': '何千人もの満足した顧客に参加',
    'dashboard.title': 'ダッシュボード',
    'dashboard.welcome': 'おかえりなさい',
    'explore.title': '機能を探索',
    'explore.subtitle': '私たちが提供するものを発見'
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.pricing': 'Tarifs',
    'nav.contact': 'Contact',
    'nav.login': 'Connexion',
    'nav.signup': 'S\'inscrire',
    'nav.dashboard': 'Tableau de bord',
    'nav.explore': 'Explorer',
    'hero.title': 'Transformez votre entreprise avec des solutions avancées',
    'hero.subtitle': 'Outils puissants et analyses pour faire avancer votre entreprise',
    'hero.cta': 'Commencer gratuitement',
    'footer.contact': 'Contactez-nous',
    'footer.social': 'Suivez-nous',
    'footer.languages': 'Langues',
    'footer.legal': 'Juridique',
    'footer.terms': 'Conditions de service',
    'footer.privacy': 'Politique de confidentialité',
    'footer.cookies': 'Politique de cookies',
    'pricing.title': 'Tarifs simples et transparents',
    'pricing.subtitle': 'Choisissez le plan qui vous convient',
    'about.title': 'À propos de Releans',
    'about.subtitle': 'Nous nous engageons à fournir des solutions innovantes',
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Nous aimerions avoir de vos nouvelles',
    'login.title': 'Bon retour',
    'login.subtitle': 'Connectez-vous à votre compte',
    'signup.title': 'Créer un compte',
    'signup.subtitle': 'Rejoignez des milliers de clients satisfaits',
    'dashboard.title': 'Tableau de bord',
    'dashboard.welcome': 'Bon retour',
    'explore.title': 'Explorer les fonctionnalités',
    'explore.subtitle': 'Découvrez ce que nous avons à offrir'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.en] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
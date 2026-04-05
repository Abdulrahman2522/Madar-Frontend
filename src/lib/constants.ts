import { LocalizedServices } from "@/lib/types/services-types";
import { Project } from "./types/projects-types";

// HEADER
export const LANGUAGES = [
  { code: "ar", label: "AR", flag: "/assets/icons/saudi-arabia.png" },
  { code: "en", label: "EN", flag: "/assets/icons/usa.png" },
];

// FOOTER

export const FOOTER_LINKS = [
  {
    mainTitle: { ar: "روابط سريعة", en: "Quick Links" },
    links: [
      { title: { ar: "الرئيسية", en: "Home" }, href: "/" },
      { title: { ar: "نبذة عنا", en: "About Us" }, href: "/about" },
      { title: { ar: "أعمالنا", en: "Portfolio" }, href: "/portfolio" },
      { title: { ar: "الخدمات", en: "Services" }, href: "/services" },
      { title: { ar: "تواصل معنا", en: "Contact Us" }, href: "/contact" },
    ],
  },
  {
    mainTitle: { ar: "قانوني", en: "Legal" },
    links: [
      {
        title: { ar: "سياسة الخصوصية", en: "Privacy Policy" },
        href: "/privacy",
      },
      { title: { ar: "شروط الخدمة", en: "Terms of Service" }, href: "/terms" },
      {
        title: { ar: "سياسة ملفات تعريف الارتباط", en: "Cookie Policy" },
        href: "/cookies",
      },
    ],
  },
  {
    mainTitle: { ar: "يدعم", en: "Support" },
    links: [
      { title: { ar: "مركز المساعدة", en: "Help Center" }, href: "/help" },
      { title: { ar: "الأسئلة الشائعة", en: "FAQ" }, href: "/faq" },
      {
        title: { ar: "دعم الحجز", en: "Booking Support" },
        href: "/booking-support",
      },
    ],
  },
];

export const PAYMENT_WAYS = [
  { image: "/assets/icons/payment1.svg" },
  { image: "/assets/icons/payment2.svg" },
  { image: "/assets/icons/payment3.svg" },
  { image: "/assets/icons/payment4.svg" },
  { image: "/assets/icons/payment5.svg" },
  { image: "/assets/icons/payment6.svg" },
  { image: "/assets/icons/payment7.svg" },
  { image: "/assets/icons/payment8.svg" },
];

export const SOCIALMEDIA = [
  {
    image: "/assets/icons/facebook.png",
    alt: "facebook page",
    url: "https://www.facebook.com",
  },
  {
    image: "/assets/icons/instagram.png",
    alt: "instagram page",
    url: "https://www.instagram.com",
  },
  {
    image: "/assets/icons/linkedin.png",
    alt: "linkedin page",
    url: "https://www.linkedin.com",
  },
  {
    image: "/assets/icons/twitter.png",
    alt: "twitter page",
    url: "https://www.x.com",
  },
  {
    image: "/assets/icons/youtube.png",
    alt: "youtube page",
    url: "https://www.youtube.com",
  },
];

export const INFO = [
  {
    icon: "/assets/icons/headphone.svg",
    title: { ar: "الدعم وخدمة العملاء", en: "Customer Support" },
    value: "Support@taqnit.com",
  },
  {
    icon: "/assets/icons/phone.svg",
    title: { ar: "فريق الدعم", en: "Support Team" },
    value: "+971508689113",
  },
  {
    icon: "/assets/icons/map.svg",
    title: { ar: "تفضل بزيارة مكتبنا", en: "Visit Our Office" },
    value: { ar: "المملكة العربية السعودية", en: "Saudi Arabia" },
  },
];

export const FOOTER_CONTENT = {
  description: {
    ar: "شريكك الموثوق في حلول التقنية والتسويق الرقمي. نقدم خدمات مبتكرة لتطوير أعمالك بكفاءة وسلاسة.",
    en: "Your trusted partner in technology solutions and digital marketing. We offer innovative services to grow your business efficiently.",
  },
  copyright: {
    ar: "جميع الحقوق محفوظة",
    en: "All rights reserved",
  },
  companyName: {
    ar: "مدار",
    en: "Madar",
  },
};

// services
export const SERVICES: LocalizedServices = {
  ar: [
    {
      image: "/assets/images/service-image.jpg",
      icon: "/assets/icons/systems.png",
      imageAlt: "الأنظمة ولوحات التحكم",
      title: "الأنظمة ولوحات التحكم",
      description:
        "نطور أنظمة مخصصة ولوحات تحكم مرنة تساعدك على إدارة أعمالك وتنظيم عملياتك بكفاءة عالية.",
      overlayColor: "bg-red-400/75",
    },
    {
      image: "/assets/images/service-image.jpg",
      icon: "/assets/icons/seo.png",
      imageAlt: "تحسين محركات البحث (SEO)",
      title: "تحسين محركات البحث (SEO)",
      description:
        "تحسين موقعك للظهور في نتائج البحث الأولى وزيادة عدد الزيارات من العملاء المهتمين بخدماتك.",
      overlayColor: "bg-blue-400/75",
    },
    {
      image: "/assets/images/service-image.jpg",
      icon: "/assets/icons/marketing.png",
      imageAlt: "تسويق عبر وسائل التواصل الاجتماعي",
      title: "تسويق عبر وسائل التواصل الاجتماعي",
      description:
        "محتوى جذاب وحملات مستهدفة على فيسبوك، إنستجرام، وتيك توك للوصول لجمهورك الصحيح.",
      overlayColor: "bg-yellow-500/80",
    },
    {
      image: "/assets/images/service-image.jpg",
      icon: "/assets/icons/design.png",
      imageAlt: "الهوية البصرية والتصميم",
      title: "الهوية البصرية والتصميم",
      description:
        "نبتكر تصاميم احترافية وهوية بصرية مميزة تعكس شخصية علامتك التجارية وتترك انطباعاً قوياً.",
      overlayColor: "bg-green-500/75",
    },
    {
      image: "/assets/images/service-image.jpg",
      icon: "/assets/icons/mobile.png",
      imageAlt: "تطبيقات الموبايل",
      title: "تطبيقات الموبايل",
      description:
        "نقوم ببناء تطبيقات ذكية وسهلة الاستخدام، تضمن أداءً عالياً وتجربة سلسة على مختلف الأجهزة والمنصات.",
      overlayColor: "bg-purple-400/75",
    },
    {
      image: "/assets/images/service-image.jpg",
      icon: "/assets/icons/web.png",
      imageAlt: "تصميم وتطوير المواقع",
      title: "تصميم وتطوير المواقع",
      description:
        "تصميم مواقع عصرية وسهلة الاستخدام تعكس هوية علامتك وتوفر تجربة مميزة للزوار.",
      overlayColor: "bg-violet-500/75",
    },
  ],
  en: [
    {
      image: "/assets/images/service-image.jpg",
      icon: "/assets/icons/systems.png",
      imageAlt: "Systems & Control Panels",
      title: "Systems & Control Panels",
      description:
        "We develop custom systems and flexible control panels to help you manage your business and organize operations with high efficiency.",
      overlayColor: "bg-red-400/75",
    },
    {
      image: "/assets/images/service-image.jpg",
      icon: "/assets/icons/seo.png",
      imageAlt: "Search Engine Optimization (SEO)",
      title: "Search Engine Optimization (SEO)",
      description:
        "We optimize your website to rank at the top of search results and drive more visits from customers interested in your services.",
      overlayColor: "bg-blue-400/75",
    },
    {
      image: "/assets/images/service-image.jpg",
      icon: "/assets/icons/marketing.png",
      imageAlt: "Social Media Marketing",
      title: "Social Media Marketing",
      description:
        "Engaging content and targeted campaigns on Facebook, Instagram, and TikTok to reach the right audience for your brand.",
      overlayColor: "bg-yellow-500/80",
    },
    {
      image: "/assets/images/service-image.jpg",
      icon: "/assets/icons/design.png",
      imageAlt: "Visual Identity & Design",
      title: "Visual Identity & Design",
      description:
        "We craft professional designs and distinctive visual identities that reflect your brand's personality and leave a lasting impression.",
      overlayColor: "bg-green-500/75",
    },
    {
      image: "/assets/images/service-image.jpg",
      icon: "/assets/icons/mobile.png",
      imageAlt: "Mobile Applications",
      title: "Mobile Applications",
      description:
        "We build smart, user-friendly applications with high performance and a seamless experience across all devices and platforms.",
      overlayColor: "bg-purple-400/75",
    },
    {
      image: "/assets/images/service-image.jpg",
      icon: "/assets/icons/web.png",
      imageAlt: "Website Design & Development",
      title: "Website Design & Development",
      description:
        "Modern, easy-to-use websites that reflect your brand identity and deliver a memorable experience for every visitor.",
      overlayColor: "bg-violet-500/75",
    },
  ],
};

// Projects

export const PROJECTS = [
  {
    id: 1,
    image: "/assets/images/service-image.jpg",
    brandColor: "#e91e8c",
    logoText: "/assets/icons/facebook.png",
    title: {
      ar: "موقع تيكتس للسفر والسياحة",
      en: "Tickets Travel & Tourism Platform",
    },
    description: {
      ar: "منصة سياحية متكاملة لحجز الجولات السياحية والفنادق والأنشطة بكل سهولة. تتيح للمستخدمين استكشاف الوجهات، مقارنة الخيارات، وإتمام الحجز والدفع الإلكتروني بخطوات بسيطة وآمنة.",
      en: "A comprehensive tourism platform for booking tours, hotels, and activities with ease. Users can explore destinations, compare options, and complete bookings with secure online payments in simple steps.",
    },
    href: "/projects/tickets",
    tags: ["Next.js", "Node.js", "Stripe"],
  },
  {
    id: 2,
    image: "/assets/images/service-image.jpg",
    brandColor: "#1976d2",
    logoText: "/assets/icons/facebook.png",
    title: {
      ar: "تطبيق ميد كير للرعاية الصحية",
      en: "MedCare Health & Wellness App",
    },
    description: {
      ar: "تطبيق صحي شامل يتيح للمرضى حجز المواعيد مع الأطباء، متابعة السجلات الطبية، واستشارة المختصين عن بُعد بكل سرية وأمان.",
      en: "A comprehensive health app that allows patients to book doctor appointments, track medical records, and consult specialists remotely with full privacy and security.",
    },
    href: "/projects/medcare",
    tags: ["React Native", "Firebase", "WebRTC"],
  },
  {
    id: 3,
    image: "/assets/images/service-image.jpg",
    brandColor: "#f57c00",
    logoText: "/assets/icons/facebook.png",
    title: {
      ar: "منصة شوب آي كيو للتجارة الإلكترونية",
      en: "ShopIQ E-Commerce Platform",
    },
    description: {
      ar: "متجر إلكتروني ذكي يوفر تجربة تسوق مخصصة باستخدام الذكاء الاصطناعي، مع إدارة المخزون، وتتبع الطلبات، ودعم متعدد البائعين.",
      en: "A smart e-commerce store offering a personalized shopping experience powered by AI, with inventory management, order tracking, and multi-vendor support.",
    },
    href: "/projects/shopiq",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
  },
  {
    id: 4,
    image: "/assets/images/service-image.jpg",
    brandColor: "#388e3c",
    logoText: "/assets/icons/facebook.png",
    title: {
      ar: "منصة ليرنيفاي التعليمية",
      en: "Learnify Online Learning Platform",
    },
    description: {
      ar: "منصة تعليمية تفاعلية تقدم دورات في مختلف المجالات بمحتوى فيديو عالي الجودة، اختبارات تفاعلية، وشهادات معتمدة للمتعلمين حول العالم.",
      en: "An interactive e-learning platform offering courses across various fields with high-quality video content, interactive quizzes, and certified credentials for learners worldwide.",
    },
    href: "/projects/learnify",
    tags: ["React", "Django", "AWS S3"],
  },
  {
    id: 5,
    image: "/assets/images/service-image.jpg",
    brandColor: "#5e35b1",
    logoText: "/assets/icons/facebook.png",
    title: {
      ar: "بروب فولت لإدارة العقارات",
      en: "PropVault Real Estate Management",
    },
    description: {
      ar: "نظام متكامل لإدارة العقارات يتيح عرض الوحدات السكنية والتجارية، إدارة العقود، تتبع المدفوعات، والتواصل المباشر بين الملاك والمستأجرين.",
      en: "A full-featured real estate management system for listing residential and commercial units, managing contracts, tracking payments, and enabling direct communication between landlords and tenants.",
    },
    href: "/projects/propvault",
    tags: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    id: 6,
    image: "/assets/images/service-image.jpg",
    brandColor: "#00838f",
    logoText: "/assets/icons/facebook.png",
    title: {
      ar: "تاسك فلو لإدارة المشاريع",
      en: "TaskFlow Project Management Tool",
    },
    description: {
      ar: "أداة احترافية لإدارة المشاريع وتنظيم المهام داخل الفرق، تدعم لوحات كانبان، تتبع الوقت، التقارير التحليلية، والتكامل مع أدوات العمل الشائعة.",
      en: "A professional project and task management tool for teams, featuring Kanban boards, time tracking, analytical reports, and integration with popular productivity tools.",
    },
    href: "/projects/taskflow",
    tags: ["Next.js", "Supabase", "TypeScript"],
  },
];

// Contact Faqs
export const FAQS = [
  {
    question: { ar: "ما هو مدار؟", en: "What is Madar?" },
    answer: {
      ar: "مدار هو شريكك الموثوق في حلول التقنية والتسويق الرقمي. نقدم خدمات مبتكرة لتطوير أعمالك بكفاءة وسلاسة.",
      en: "Madar is your trusted partner in technology solutions and digital marketing. We offer innovative services to grow your business efficiently.",
    },
  },
  {
    question: { ar: "ما هي خدمات مدار؟", en: "What is Madar?" },
    answer: {
      ar: "مدار هو شريكك الموثوق في حلول التقنية والتسويق الرقمي. نقدم خدمات مبتكرة لتطوير أعمالك بكفاءة وسلاسة.",
      en: "Madar is your trusted partner in technology solutions and digital marketing. We offer innovative services to grow your business efficiently.",
    },
  },
];

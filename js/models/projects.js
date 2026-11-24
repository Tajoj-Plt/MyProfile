/**
 * Model: projects for the Work page (work.html). Each one is shown in the same layout as
 * the home page "Selected work" section. Text fields have English (en) and Arabic (ar).
 * To add a project, add an entry here; `page` is where "Read more" goes.
 */
export const PROJECTS = [
  {
    slug: 'atnii-square',
    page: 'atnii.html',
    kind: { en: 'Mobile app · Data & AI', ar: 'تطبيق جوال · بيانات وذكاء اصطناعي' },
    status: { en: 'In progress', ar: 'قيد التطوير' },
    title: { en: 'Atnii Square — a knowledge<br>community for Sudan', ar: 'أتنيه — مجتمع<br>معرفي عن السودان' },
    lead: {
      en: 'A Sudanese knowledge app where people share and discuss in a community feed and groups, read in a shared library of books, articles, and videos, and ask “Ask about Sudan”, an AI assistant that answers from trusted sources with citations.',
      ar: 'تطبيق معرفي سوداني يشارك فيه الناس ويتناقشون عبر المنشورات والمجموعات، ويقرؤون في مكتبة مشتركة من الكتب والمقالات والفيديوهات، ويسألون «اسأل عن السودان»، وهو مساعد ذكي يجيب من مصادر موثوقة مع إحالات.',
    },
    features: {
      en: ['Community & groups', 'Shared library', 'Ask about Sudan AI'],
      ar: ['المجتمع والمجموعات', 'مكتبة مشتركة', 'مساعد «اسأل عن السودان»'],
    },
    tags: ['React Native', 'TypeScript', 'RAG', 'RTL', 'Clean Architecture'],
    screens: [
      { src: 'assets/app-welcome.jpg', alt: 'Atnii Square app: welcome screen' },
      { src: 'assets/app-join.jpg', alt: 'Atnii Square app: join the community' },
    ],
  },
  {
    slug: 'fawtrasmart',
    page: 'fawtrasmart.html',
    site: { href: 'https://fawtrasmart.com', label: 'fawtrasmart.com' },
    name: { en: 'FawtraSmart', ar: 'FawtraSmart' },
    kind: { en: 'ERP system · Web & mobile', ar: 'نظام ERP · ويب وجوال' },
    title: { en: 'FawtraSmart — an ERP suite<br>for growing businesses', ar: 'FawtraSmart — نظام ERP<br>للشركات النامية' },
    lead: {
      en: 'An integrated resource management system with a web dashboard and a mobile app. Teams manage sales and invoices, customers and loyalty, inventory and stock movements, finance and accounts, and HR and payroll, with real-time analytics, multi-user access, and enterprise-grade security. It works in Arabic, English, Urdu, Hindi, and Bengali.',
      ar: 'نظام متكامل لإدارة الموارد يضم لوحة تحكم على الويب وتطبيقاً للجوال. تدير الفرق من خلاله المبيعات والفواتير، والعملاء والولاء، والمخزون وحركته، والمالية والحسابات، والموارد البشرية والرواتب، مع تحليلات لحظية وتعدد المستخدمين وأمان بمستوى المؤسسات. ويعمل بالعربية والإنجليزية والأردية والهندية والبنغالية.',
    },
    features: {
      en: ['Sales & invoicing', 'Inventory & finance', 'HR & payroll'],
      ar: ['المبيعات والفواتير', 'المخزون والمالية', 'الموارد البشرية والرواتب'],
    },
    tagsLabel: { en: 'Highlights', ar: 'أبرز المزايا' },
    tags: {
      en: ['ERP', 'Web dashboard', 'Mobile app', 'Real-time analytics', 'Five languages', 'RTL', 'Dark mode'],
      ar: ['ERP', 'لوحة تحكم ويب', 'تطبيق جوال', 'تحليلات لحظية', 'خمس لغات', 'دعم RTL', 'الوضع الداكن'],
    },
    web: { src: 'assets/fawtra-web-login.webp', alt: 'FawtraSmart web dashboard: sign-in page' },
    screens: [
      { src: 'assets/fawtra-splash.jpg', alt: 'FawtraSmart app: splash screen' },
      { src: 'assets/fawtra-login.jpg', alt: 'FawtraSmart app: sign-in screen' },
      { src: 'assets/fawtra-home.jpg', alt: 'FawtraSmart app: home screen with the system modules' },
    ],
  },
];

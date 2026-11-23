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
];

(function () {
  'use strict';

  // ---------- Skills data (edit freely) ----------
  const SKILLS = [
    {
      title: 'AI & Data', icon: 'bi-stars', tint: '#ecebff', color: '#4830e8',
      tags: [['LLM APIs', 'bi-cpu', '#4830e8'], ['RAG', 'bi-search', '#8f69e3'], ['Prompt Design', 'bi-chat-square-text', '#0ea5e9'],
        ['Embeddings', 'bi-grid-3x3-gap', '#66ddd7'], ['Python', 'bi-filetype-py', '#3776ab'], ['Analytics', 'bi-graph-up', '#16a34a'],
        ['ActivityInfo', 'bi-bar-chart-line-fill', '#1a73e8'], ['ArcGIS', 'bi-globe-americas', '#2c7ac9'], ['Power BI', 'bi-bar-chart-fill', '#e6b800'], ['KoboToolbox', 'bi-clipboard2-data-fill', '#2095f3']],
    },
    {
      title: 'Cross-Platform', icon: 'bi-phone', tint: '#e3f0ff', color: '#1e6fd9',
      tags: [['React Native', 'bi-phone', '#1e88e5'], ['TypeScript', 'bi-filetype-tsx', '#3178c6'], ['Flutter', 'bi-feather', '#02569b'],
        ['Redux', 'bi-diagram-3', '#764abc'], ['Navigation', 'bi-signpost-split', '#6b7280'], ['RTL/LTR', 'bi-arrow-left-right', '#6b7280'],
        ['Localization', 'bi-translate', '#d97b2b']],
    },
    {
      title: 'Native Android', icon: 'bi-android2', tint: '#e5f8ec', color: '#3ddc84',
      tags: [['Kotlin', 'bi-code-slash', '#7f52ff'], ['Jetpack Compose', 'bi-hexagon', '#4285f4'], ['Coroutines/Flow', 'bi-lightning-charge', '#f59e0b'],
        ['Room', 'bi-database', '#555'], ['Retrofit', 'bi-hdd-network', '#22a35a'], ['Hilt', 'bi-puzzle', '#8d6e63']],
    },
    {
      title: 'Native iOS', icon: 'bi-apple', tint: '#f1f1f3', color: '#111',
      tags: [['Swift', 'bi-fire', '#f05138'], ['SwiftUI', 'bi-layers', '#1e88e5'], ['UIKit', 'bi-phone', '#111'],
        ['Combine', 'bi-bezier2', '#9333ea'], ['Core Data', 'bi-database', '#555'], ['TestFlight', 'bi-send', '#16a34a']],
    },
    {
      title: 'Backend, Data & Security', icon: 'bi-shield-lock', tint: '#fdeeee', color: '#b45353',
      tags: [['REST/JSON', 'bi-braces', '#555'], ['GraphQL', 'bi-diagram-3', '#e10098'], ['Node.js', 'bi-hexagon-fill', '#3c873a'],
        ['Firebase', 'bi-fire', '#ffa000'], ['Supabase', 'bi-lightning', '#3ecf8e'], ['OAuth/JWT', 'bi-key', '#d97b2b'], ['OWASP', 'bi-shield-check', '#555']],
    },
    {
      title: 'Quality & Delivery', icon: 'bi-check2-circle', tint: '#e6f6e9', color: '#2e7d32',
      tags: [['Unit/UI Testing', 'bi-check2-square', '#555'], ['Jest', 'bi-bug', '#c21325'], ['Sentry', 'bi-activity', '#362d59'],
        ['Git/GitHub', 'bi-github', '#111'], ['CI/CD', 'bi-arrow-repeat', '#555'], ['Fastlane', 'bi-rocket-takeoff', '#00a0e3'], ['Agile/Scrum', 'bi-kanban', '#d97b2b']],
    },
  ];

  const track = document.getElementById('skillsTrack');
  const dots = document.getElementById('skillsDots');
  let cards = [], dotBtns = [];
  function scrollToCard(i) {
    const c = cards[i];
    track.scrollTo({ left: c.offsetLeft - (track.clientWidth - c.offsetWidth) / 2, behavior: 'smooth' });
  }
  if (track && dots) {
  track.innerHTML = SKILLS.map((s, i) => {
    const n = String(i + 1).padStart(2, '0');
    const tags = s.tags.map(([t, ic, c]) => `<span class="skill-tag"><i class="bi ${ic}" style="color:${c}"></i>${t}</span>`).join('');
    return `<article class="skill-card">
      <span class="skill-ghost">${n}</span><span class="skill-num">${n}</span>
      <div class="skill-icon" style="background:${s.tint};color:${s.color}"><i class="bi ${s.icon}"></i></div>
      <h3>${s.title}</h3>
      <div class="skill-tags">${tags}</div>
    </article>`;
  }).join('');
  dots.innerHTML = SKILLS.map((_, i) => `<button aria-label="Go to card ${i + 1}"></button>`).join('');

  cards = [...track.children];
  dotBtns = [...dots.children];

  function updateActive() {
    const mid = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bestD = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid);
      if (d < bestD) { bestD = d; best = i; }
    });
    cards.forEach((c, i) => c.classList.toggle('is-active', i === best));
    dotBtns.forEach((d, i) => d.classList.toggle('active', i === best));
  }
  dotBtns.forEach((d, i) => d.addEventListener('click', () => scrollToCard(i)));
  track.addEventListener('scroll', () => requestAnimationFrame(updateActive), { passive: true });
  window.addEventListener('resize', updateActive);
  updateActive();

  // Drag to scroll (desktop)
  let down = false, startX = 0, startLeft = 0, moved = false;
  track.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse') return;
    down = true; moved = false; startX = e.clientX; startLeft = track.scrollLeft;
  });
  window.addEventListener('pointermove', e => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 4) { moved = true; track.classList.add('dragging'); }
    track.scrollLeft = startLeft - dx;
  });
  window.addEventListener('pointerup', () => {
    if (!down) return;
    down = false; track.classList.remove('dragging');
    if (moved) { updateActive(); scrollToCard(cards.findIndex(c => c.classList.contains('is-active'))); }
  });
  }

  // ---------- Hero image fallback ----------
  const heroImg = document.getElementById('heroImg');
  if (heroImg) {
    const markMissing = () => heroImg.closest('.portrait-wrap').classList.add('no-img');
    heroImg.addEventListener('error', markMissing);
    if (heroImg.complete && heroImg.naturalWidth === 0) markMissing();
  }

  // ---------- Header shadow ----------
  const header = document.getElementById('siteHeader');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Language (English / Arabic) ----------
  // English is the source text in the HTML; Arabic replaces it by matching the English string.
  const AR_HTML = {
    heroTitle: 'مهندس بيانات<br>أول',
    servicesTitle: 'من الفكرة<br>إلى منتج<br>جاهز للإطلاق.',
    skillsTitle: 'أدوات مصممة<br>لإطلاق منتجات حقيقية.',
    workTitle: 'أتنيه — مجتمع<br>معرفي عن السودان',
    contactTitle: 'لديك مشروع<br>في ذهنك؟',
    articlesTitle: 'ملاحظات من البناء<br>بالبيانات.',
    workPageTitle: 'فكرة واحدة، بُنيت<br>كمنظومة متكاملة',
    p1Title: 'أتنيه<br>المجتمع', p2Title: 'اسأل عن<br>السودان',
    p3Title: 'أتنيه<br>المكتبة', p4Title: 'أتنيه<br>منصة البيانات',
    roleTitle: 'دوري يتجاوز<br>مجرد التنفيذ', ctaTitle: 'لديك فكرة تستحق<br>أن تُبنى بإتقان؟',
  };
  const AR = {
    'Available for work': 'متاح للعمل',
    'Home': 'الرئيسية', 'Articles': 'المقالات', 'Work': 'الأعمال', 'What I Do': 'ما أقدمه', 'Journey': 'المسيرة', 'Contact': 'تواصل',
    "Let's Talk": 'لنتحدث', "Let's collaborate": 'لنتعاون', 'Menu': 'القائمة',
    'I design and build reliable data platforms — pipelines, warehouses, dashboards, and AI-ready data — that turn messy information into clear decisions, from field surveys to production apps.': 'أصمم وأبني منصات بيانات موثوقة — خطوط بيانات ومستودعات ولوحات معلومات وبيانات جاهزة للذكاء الاصطناعي — تحوّل المعلومات المبعثرة إلى قرارات واضحة، من المسوحات الميدانية إلى التطبيقات الإنتاجية.',
    'CAPABILITIES': 'الخدمات', 'STACK': 'التقنيات', 'JOURNEY': 'المسيرة', 'WORK': 'الأعمال', 'CONTACT': 'تواصل', '/JOURNEY': '/المسيرة',
    'What I deliver clearly': 'ما أقدمه بوضوح',
    'I build fast, reliable, and scalable data and digital products across web, mobile, and AI — with attention to clarity, performance, and real impact.': 'أبني منتجات بيانات ومنتجات رقمية سريعة وموثوقة وقابلة للتوسع عبر الويب والجوال والذكاء الاصطناعي — مع اهتمام بالوضوح والأداء والأثر الحقيقي.',
    'Data Pipelines': 'خطوط البيانات',
    'Automated ingestion and ETL/ELT with Airflow and dbt, tested so data arrives clean and on time.': 'استيعاب آلي وعمليات ETL/ELT باستخدام Airflow وdbt، مختبرة لتصل البيانات نظيفة وفي وقتها.',
    'Data Warehouses': 'مستودعات البيانات',
    'Clear models, stable keys, and shared metrics in a warehouse teams can trust.': 'نماذج واضحة ومفاتيح ثابتة ومقاييس موحدة في مستودع تثق به الفرق.',
    'Dashboards & Maps': 'لوحات وخرائط',
    'Power BI dashboards and ArcGIS maps that answer real questions at a glance.': 'لوحات Power BI وخرائط ArcGIS تجيب عن الأسئلة الحقيقية من نظرة واحدة.',
    'AI-Ready Data': 'بيانات جاهزة للذكاء الاصطناعي',
    'Cleaned, labeled, and documented data that makes AI features accurate and fair.': 'بيانات منظفة وموسومة وموثقة تجعل ميزات الذكاء الاصطناعي دقيقة وعادلة.',
    'Tools & technologies': 'الأدوات والتقنيات',
    'Mobile, backend, AI, and delivery — the skills behind every release, from cross-platform apps to clean code and production-grade quality.':
      'الجوال والخوادم والذكاء الاصطناعي والتسليم — المهارات وراء كل إصدار، من التطبيقات متعددة المنصات إلى الكود النظيف والجودة الإنتاجية.',
    'AI & Data': 'الذكاء الاصطناعي والبيانات', 'Cross-Platform': 'متعدد المنصات', 'Native Android': 'أندرويد أصلي',
    'Native iOS': 'iOS أصلي', 'Backend, Data & Security': 'الخوادم والبيانات والأمان', 'Quality & Delivery': 'الجودة والتسليم',
    'A journey of execution and growth': 'رحلة من الإنجاز والنمو', 'Building since day one': 'نبني منذ اليوم الأول',
    'Atnii Square Mobile': 'أتنيه للجوال', 'React Native app — learning & AI companion': 'تطبيق React Native — رفيق للتعلم والذكاء الاصطناعي',
    '2026 – Present': '2026 – حتى الآن', '2025 – Present': '2025 – حتى الآن', '2024 – Present': '2024 – حتى الآن',
    'Atnii Square Platform': 'منصة أتنيه', 'Web & Cloud': 'الويب والسحابة', 'APIs, admin dashboard & AI services': 'واجهات برمجية ولوحة تحكم وخدمات ذكاء اصطناعي',
    'Client Projects': 'مشاريع العملاء', 'Sudan & Gulf': 'السودان والخليج', 'Custom apps and websites for growing businesses': 'تطبيقات ومواقع مخصصة للأعمال النامية',
    'Brand & Identity': 'العلامة والهوية', 'Atnii Square Studio': 'استوديو أتنيه', 'Visual identity, design system & launch': 'الهوية البصرية ونظام التصميم والإطلاق',
    'Selected work, built with care': 'أعمال مختارة، صُنعت بعناية',
    'From planning to production readiness: a clear bilingual user experience, the learner and mentor apps for iOS and Android, the website and admin dashboard, and the AI services that tie it all together.':
      'من التخطيط حتى الجاهزية للإنتاج: تجربة مستخدم واضحة بلغتين، وتطبيقا المتعلم والمرشد على iOS وAndroid، والموقع ولوحة التحكم، وخدمات الذكاء الاصطناعي التي تربط كل ذلك.',
    'Learner App': 'تطبيق المتعلم', 'Mentor App': 'تطبيق المرشد', 'Mobile apps': 'تطبيقات الجوال',
    'Website & admin dashboard': 'الموقع ولوحة التحكم', 'AI-ready ecosystem': 'منظومة جاهزة للذكاء الاصطناعي',
    'Built with': 'بُني باستخدام', 'Clean Architecture': 'البنية النظيفة', 'View more projects': 'عرض المزيد من المشاريع',
    "Today's lesson": 'درس اليوم', 'Intro to AI': 'مقدمة في الذكاء الاصطناعي', 'Ask Atnii Square': 'اسأل أتنيه',
    'Your AI study buddy': 'رفيقك الذكي للدراسة', 'Practice': 'تدريب', '12 exercises left': 'تبقّى 12 تمريناً',
    'Active learners': 'المتعلمون النشطون', 'Sessions': 'الجلسات', '3 today': '3 اليوم',
    "Let's build something meaningful": 'لنبنِ شيئاً ذا قيمة',
    "Tell me about your idea, and I'll help shape it into a clear, launch-ready product — whether it's a data pipeline, a dashboard, a mobile app, an AI feature, or a complete digital ecosystem.": 'أخبرني عن فكرتك، وسأساعدك على تحويلها إلى منتج واضح وجاهز للإطلاق — سواء كان خط بيانات أو لوحة معلومات أو تطبيق جوال أو ميزة ذكاء اصطناعي أو منظومة رقمية متكاملة.',
    'Contact on WhatsApp': 'تواصل عبر واتساب', 'View more work': 'عرض المزيد من الأعمال',
    'Idea discovery': 'استكشاف الفكرة', 'Planning': 'التخطيط', 'Market research': 'دراسة السوق',
    'Execution': 'التنفيذ', 'Testing': 'الاختبار', 'Launch': 'الإطلاق',
    'Share your project details': 'شارك تفاصيل مشروعك',
    "Share the essentials, and I'll reply with practical next steps for your project.": 'شارك الأساسيات، وسأرد عليك بخطوات عملية لمشروعك.',
    'Website URL': 'رابط الموقع', '(optional)': '(اختياري)', 'Name': 'الاسم', 'Please enter your name.': 'يرجى إدخال اسمك.',
    'Email': 'البريد الإلكتروني', 'Please enter a valid email.': 'يرجى إدخال بريد إلكتروني صحيح.', 'Phone number': 'رقم الهاتف',
    'Project type': 'نوع المشروع', 'Choose project type': 'اختر نوع المشروع', 'Mobile app': 'تطبيق جوال', 'Website': 'موقع إلكتروني',
    'Admin dashboard': 'لوحة تحكم', 'AI integration': 'دمج الذكاء الاصطناعي', 'Complete ecosystem': 'منظومة متكاملة',
    'Data pipeline / ETL': 'خط بيانات / ETL', 'Dashboards & reporting': 'لوحات معلومات وتقارير', 'GIS & maps': 'نظم المعلومات الجغرافية والخرائط',
    'Survey data (KoboToolbox, ActivityInfo)': 'بيانات المسوحات (KoboToolbox، ActivityInfo)', 'Something else': 'شيء آخر',
    'Pick a project type.': 'اختر نوع المشروع.', 'Short project brief': 'نبذة مختصرة عن المشروع', 'A sentence or two is enough.': 'جملة أو جملتان تكفي.',
    'Send request': 'إرسال الطلب',
    'Your request goes straight to my inbox. WhatsApp is still available if you prefer a faster reply.': 'يصل طلبك مباشرة إلى بريدي. واتساب متاح أيضاً إن كنت تفضل رداً أسرع.',
    'From raw data to clear decisions — I build systems that launch and endure.': 'من البيانات الخام إلى قرارات واضحة — أبني أنظمة تنطلق وتدوم.',
    'Explore': 'استكشف', 'Social': 'التواصل', 'Back to top': 'العودة للأعلى',
    'tajoj-plt · Altgani Motasim. All rights reserved.': 'tajoj-plt · Altgani Motasim. جميع الحقوق محفوظة.',
    "Thanks! I'll get back to you shortly.": 'شكراً! سأتواصل معك قريباً.',
    // Articles (home page)
    'ARTICLES': 'المقالات', 'Articles & insights': 'مقالات ورؤى',
    'Write-ups on data engineering, analytics, and the lessons behind Atnii Square, shared to help other builders move faster.':
      'كتابات عن هندسة البيانات والتحليلات والدروس المستفادة من أتنيه، أشاركها لمساعدة البنّائين الآخرين على التقدم أسرع.',
    'Data engineering': 'هندسة البيانات', 'Humanitarian data': 'البيانات الإنسانية', 'Visualization': 'تصوير البيانات',
    'Oct 2026': 'أكتوبر 2026', 'Sep 2026': 'سبتمبر 2026', 'Aug 2026': 'أغسطس 2026',
    '6 min read': '6 دقائق قراءة', '8 min read': '8 دقائق قراءة', '5 min read': '5 دقائق قراءة',
    'Building reliable data pipelines with Airflow and dbt': 'بناء خطوط بيانات موثوقة باستخدام Airflow وdbt',
    'How I structure ingestion, testing, and modeling so dashboards stay trustworthy as data grows.': 'كيف أنظم الاستيعاب والاختبار والنمذجة لتبقى اللوحات موثوقة مع نمو البيانات.',
    'From KoboToolbox surveys to clean, analysis-ready data': 'من مسوحات KoboToolbox إلى بيانات نظيفة جاهزة للتحليل',
    'Practical steps for turning messy field survey exports into datasets teams can actually use.': 'خطوات عملية لتحويل ملفات المسوحات الميدانية الفوضوية إلى بيانات يمكن للفرق استخدامها فعلاً.',
    'Mapping impact with ArcGIS and Power BI': 'رسم خريطة الأثر باستخدام ArcGIS وPower BI',
    'Combining maps and dashboards to tell a clear story about where programs reach people.': 'الجمع بين الخرائط واللوحات لرواية قصة واضحة عن أماكن وصول البرامج إلى الناس.',
    'Read article': 'اقرأ المقال',
    'Show more': 'عرض المزيد', 'Analytics': 'التحليلات', 'AI': 'الذكاء الاصطناعي', 'Career': 'المسيرة المهنية',
    'Jul 2026': 'يوليو 2026', 'Jun 2026': 'يونيو 2026', 'May 2026': 'مايو 2026', '7 min read': '7 دقائق قراءة', '4 min read': '4 دقائق قراءة',
    'Designing a data warehouse for a learning platform': 'تصميم مستودع بيانات لمنصة تعليمية',
    'Choosing models, keys, and layers so product and impact questions are easy to answer.': 'اختيار النماذج والمفاتيح والطبقات لتسهل الإجابة عن أسئلة المنتج والأثر.',
    'Making education data ready for AI features': 'تجهيز بيانات التعليم لميزات الذكاء الاصطناعي',
    'Cleaning, labeling, and documenting data so AI features stay accurate and fair.': 'تنظيف البيانات وتوسيمها وتوثيقها لتبقى ميزات الذكاء الاصطناعي دقيقة وعادلة.',
    'What I learned moving into data engineering': 'ما تعلمته في انتقالي إلى هندسة البيانات',
    'Lessons on tools, habits, and thinking in systems from my path into data work.': 'دروس عن الأدوات والعادات والتفكير المنظومي من رحلتي إلى عالم البيانات.',
    // Project page (work.html)
    'Back to articles': 'العودة للمقالات', 'More articles': 'مقالات أخرى', 'All articles': 'كل المقالات',
    'Back home': 'العودة للرئيسية', 'The Atnii Square project': 'مشروع أتنيه', 'ATNII SQUARE': 'أتنيه',
    'Atnii Square brings learners, mentors, and data together. Here is how each part was planned, designed, and built, from the mobile apps people use every day to the data platform that powers them.':
      'تجمع أتنيه بين المتعلمين والمرشدين والبيانات. إليك كيف خُطط لكل جزء وصُمم وبُني، من تطبيقات الجوال التي يستخدمها الناس يومياً إلى منصة البيانات التي تشغّلها.',
    'In progress': 'قيد التطوير', 'Website & dashboard': 'الموقع ولوحة التحكم', 'Data & AI platform': 'منصة البيانات والذكاء الاصطناعي',
    'My role': 'دوري', 'Product planning': 'تخطيط المنتج', 'Data & AI': 'البيانات والذكاء الاصطناعي', 'UX/UI design': 'تصميم التجربة والواجهة',
    'Implementation': 'التنفيذ', 'Delivery': 'التسليم', 'Coming soon': 'قريباً',
    'An AI study companion that makes learning clear, guided, and personal': 'رفيق دراسي بالذكاء الاصطناعي يجعل التعلم واضحاً وموجهاً وشخصياً',
    'A mobile app for learners with daily lessons, guided practice, progress tracking, and an AI assistant that answers questions in Arabic and English. Built for real connectivity conditions, with offline-friendly content and a calm, focused interface.':
      'تطبيق جوال للمتعلمين يضم دروساً يومية وتدريباً موجهاً وتتبعاً للتقدم ومساعداً ذكياً يجيب عن الأسئلة بالعربية والإنجليزية. مصمم لظروف الاتصال الحقيقية، بمحتوى يعمل دون إنترنت وواجهة هادئة ومركزة.',
    'I shaped the learning journey from the first lesson to daily habits, designed the core flows, and built the app with an AI layer that explains, quizzes, and adapts to each learner.':
      'صممت رحلة التعلم من الدرس الأول حتى العادات اليومية، ورسمت التدفقات الأساسية، وبنيت التطبيق بطبقة ذكاء اصطناعي تشرح وتختبر وتتكيف مع كل متعلم.',
    'Lessons & practice': 'الدروس والتدريب', 'AI assistant': 'مساعد ذكي', 'Progress tracking': 'تتبع التقدم',
    'Arabic & English': 'العربية والإنجليزية', 'Offline-friendly': 'يعمل دون اتصال',
    'A workspace for mentors to guide learners and track their growth': 'مساحة عمل للمرشدين لتوجيه المتعلمين ومتابعة نموهم',
    'A companion app for mentors to follow their learners, schedule sessions, review progress, and spot who needs help early, using clear dashboards instead of spreadsheets.':
      'تطبيق مرافق للمرشدين لمتابعة متعلميهم وجدولة الجلسات ومراجعة التقدم واكتشاف من يحتاج المساعدة مبكراً، عبر لوحات واضحة بدلاً من جداول البيانات.',
    'I designed the mentor experience around quick daily check-ins and built the analytics views that turn learner activity into simple, actionable signals.':
      'صممت تجربة المرشد حول متابعات يومية سريعة، وبنيت واجهات التحليلات التي تحوّل نشاط المتعلمين إلى مؤشرات بسيطة قابلة للتنفيذ.',
    'Mentor dashboard': 'لوحة المرشد', 'Session scheduling': 'جدولة الجلسات', 'Learner analytics': 'تحليلات المتعلمين',
    'Notifications': 'الإشعارات', 'Role-based access': 'صلاحيات حسب الدور',
    'A clear public website and an admin dashboard that runs the platform': 'موقع عام واضح ولوحة تحكم تدير المنصة',
    'The public website explains Atnii Square and brings new learners in, while the admin dashboard manages content, users, mentors, and reporting from one place.':
      'يعرّف الموقع العام بأتنيه ويجذب متعلمين جدداً، بينما تدير لوحة التحكم المحتوى والمستخدمين والمرشدين والتقارير من مكان واحد.',
    'I structured the content and messaging, designed the responsive pages, and built the admin tools that keep the platform running day to day.':
      'نظمت المحتوى والرسائل، وصممت الصفحات المتجاوبة، وبنيت أدوات الإدارة التي تُبقي المنصة تعمل يوماً بيوم.',
    'Marketing website': 'موقع تسويقي', 'Content management': 'إدارة المحتوى', 'Reporting': 'التقارير', 'Responsive': 'متجاوب',
    'The data engineering backbone that turns activity into insight': 'العمود الفقري لهندسة البيانات الذي يحوّل النشاط إلى رؤى',
    'Pipelines collect data from the apps, field surveys, and partner systems, clean and model it in a central warehouse, and serve dashboards, maps, and AI features. This is where my data engineering work sits at the heart of Atnii Square.':
      'تجمع خطوط البيانات المعلومات من التطبيقات والمسوحات الميدانية وأنظمة الشركاء، وتنظفها وتنمذجها في مستودع مركزي، ثم تغذي اللوحات والخرائط وميزات الذكاء الاصطناعي. هنا يقع عملي في هندسة البيانات في قلب أتنيه.',
    'Data architecture': 'معمارية البيانات', 'Pipelines': 'خطوط البيانات', 'Modeling': 'النمذجة', 'Dashboards': 'لوحات المعلومات', 'AI features': 'ميزات الذكاء الاصطناعي',
    'I designed the data architecture end to end: ingestion from KoboToolbox, ActivityInfo, and app events, orchestration with Airflow, modeling with dbt, and reporting through Power BI and ArcGIS.':
      'صممت معمارية البيانات من البداية إلى النهاية: الاستيعاب من KoboToolbox وActivityInfo وأحداث التطبيقات، والتنسيق عبر Airflow، والنمذجة باستخدام dbt، والتقارير عبر Power BI وArcGIS.',
    'Data warehouse': 'مستودع البيانات', 'Power BI dashboards': 'لوحات Power BI', 'GIS mapping': 'الخرائط الجغرافية',
    'Survey data': 'بيانات المسوحات', 'AI-ready data': 'بيانات جاهزة للذكاء الاصطناعي', 'Ask about it': 'اسأل عنها',
    'Collect': 'الجمع', 'Insight': 'الرؤى', 'App events': 'أحداث التطبيق', 'Atnii Square warehouse': 'مستودع أتنيه', 'AI models': 'نماذج الذكاء الاصطناعي',
    'ROLE': 'الدور', 'From idea to product': 'من الفكرة إلى المنتج',
    'On Atnii Square I treat the product as one journey: understanding the idea, designing the data behind it, shaping the experience, and building it so it is clear, reliable, and ready to grow.':
      'في أتنيه أتعامل مع المنتج كرحلة واحدة: فهم الفكرة، وتصميم البيانات خلفها، وتشكيل التجربة، وبناؤه ليكون واضحاً وموثوقاً وجاهزاً للنمو.',
    'Product understanding': 'فهم المنتج',
    'Turning the idea into a clear direction and finding what readers and community members actually need.': 'تحويل الفكرة إلى اتجاه واضح ومعرفة ما يحتاجه القراء وأعضاء المجتمع فعلاً.',
    'Designing how data is collected, modeled, and served so every feature and report can trust it.': 'تصميم طريقة جمع البيانات ونمذجتها وتقديمها لتكون كل ميزة وكل تقرير مبنياً على بيانات موثوقة.',
    'Full implementation': 'التنفيذ الكامل',
    'Building the apps, dashboards, and pipelines, and keeping the code maintainable and scalable.': 'بناء التطبيقات واللوحات وخطوط البيانات، مع الحفاظ على كود قابل للصيانة والتوسع.',
    'Delivery refinement': 'صقل التسليم',
    'Polishing details, performance, and motion so the product feels ready for real use.': 'تحسين التفاصيل والأداء والحركة ليبدو المنتج جاهزاً للاستخدام الحقيقي.',
    'Whether it is an app, a website, a data platform, or a complete digital product, I can help turn it into something clear, usable, and ready to grow.':
      'سواء كان تطبيقاً أو موقعاً أو منصة بيانات أو منتجاً رقمياً متكاملاً، يمكنني مساعدتك في تحويله إلى شيء واضح وسهل الاستخدام وجاهز للنمو.',
    'Start your project': 'ابدأ مشروعك', 'Contact me': 'تواصل معي',
    // Atnii Square (real app)
    'A Sudanese knowledge app where people share and discuss in a community feed and groups, read in a shared library of books, articles, and videos, and ask “Ask about Sudan”, an AI assistant that answers from trusted sources with citations.':
      'تطبيق معرفي سوداني يشارك فيه الناس ويتناقشون عبر المنشورات والمجموعات، ويقرؤون في مكتبة مشتركة من الكتب والمقالات والفيديوهات، ويسألون «اسأل عن السودان»، وهو مساعد ذكي يجيب من مصادر موثوقة مع إحالات.',
    'Community & groups': 'المجتمع والمجموعات', 'Shared library': 'مكتبة مشتركة', 'Ask about Sudan AI': 'مساعد «اسأل عن السودان»',
    'Community app — feed, groups, library & AI': 'تطبيق مجتمعي — منشورات ومجموعات ومكتبة وذكاء اصطناعي',
    'Atnii Square is a community app for knowledge about Sudan: people share and discuss in a feed and groups, read in a shared library, and ask an AI assistant grounded in trusted sources. Here is how each part was planned, designed, and built.':
      'أتنيه تطبيق مجتمعي للمعرفة عن السودان: يشارك الناس ويتناقشون في المنشورات والمجموعات، ويقرؤون في مكتبة مشتركة، ويسألون مساعداً ذكياً يعتمد على مصادر موثوقة. إليك كيف خُطط لكل جزء وصُمم وبُني.',
    'AI assistant': 'مساعد ذكي', 'In-app library': 'مكتبة داخل التطبيق',
    'A social space to share, discuss, and learn about Sudan together': 'مساحة اجتماعية للمشاركة والنقاش والتعلم عن السودان معاً',
    'The heart of the app: a community feed for posts and book recommendations, groups such as “Readings in Sudan’s history”, live discussions, and a personal profile with followers, posts, and activity. Built right-to-left first, with a calm dark interface.':
      'قلب التطبيق: صفحة منشورات للمجتمع وترشيحات الكتب، ومجموعات مثل «قراءات في تاريخ السودان»، ونقاشات حية، وملف شخصي بالمتابعين والمشاركات والنشاط. مصمم بالعربية أولاً بواجهة داكنة هادئة.',
    'I shaped the community experience from the feed to groups and profiles, designed the core flows, and built the app with the data model and activity tracking behind it.':
      'صممت تجربة المجتمع من صفحة المنشورات إلى المجموعات والملفات الشخصية، ورسمت التدفقات الأساسية، وبنيت التطبيق مع نموذج البيانات وتتبع النشاط خلفه.',
    'Community feed': 'صفحة المجتمع', 'Groups': 'المجموعات', 'Discussions': 'النقاشات', 'Profiles': 'الملفات الشخصية', 'Arabic first': 'العربية أولاً',
    'An AI assistant that answers from trusted sources, not guesses': 'مساعد ذكي يجيب من مصادر موثوقة لا بالتخمين',
    'Ask about Sudan answers questions with answers grounded in reliable references and numbered citations you can open. Each answer links to related books, articles, videos, and posts inside Atnii Square, and when no source covers a question, it says so clearly instead of guessing.':
      'يجيب «اسأل عن السودان» عن الأسئلة بإجابات مبنية على مراجع موثوقة مع إحالات مرقمة يمكنك فتحها. ترتبط كل إجابة بكتب ومقالات وفيديوهات ومنشورات ذات صلة داخل أتنيه، وعندما لا يجد مصدراً يغطي السؤال يخبرك بوضوح بدلاً من التخمين.',
    'I designed the retrieval pipeline behind the assistant: preparing and indexing Atnii Square’s content, grounding every answer in sources, and linking results back to the app.':
      'صممت خط الاسترجاع خلف المساعد: تجهيز محتوى أتنيه وفهرسته، وبناء كل إجابة على مصادر، وربط النتائج بالتطبيق.',
    'Source-grounded answers': 'إجابات مبنية على المصادر', 'Citations': 'إحالات', 'Linked content': 'محتوى مرتبط', 'Honest when unsure': 'صريح عند عدم التأكد',
    'Books, articles, and videos about Sudan in one shared library': 'كتب ومقالات وفيديوهات عن السودان في مكتبة مشتركة واحدة',
    'A library of books, articles, and videos that the community reads together. Items connect to reading groups and discussions, and the AI assistant uses the same library as its trusted sources.':
      'مكتبة من الكتب والمقالات والفيديوهات يقرؤها المجتمع معاً. ترتبط عناصرها بمجموعات القراءة والنقاشات، ويستخدم المساعد الذكي المكتبة نفسها كمصادره الموثوقة.',
    'I structured the library content and metadata, built the search and categories, and made it the shared source for both reading groups and the AI assistant.':
      'نظمت محتوى المكتبة وبياناتها الوصفية، وبنيت البحث والتصنيفات، وجعلتها المصدر المشترك لمجموعات القراءة والمساعد الذكي.',
    'Books': 'كتب', 'Articles': 'المقالات', 'Videos': 'فيديوهات', 'Search': 'البحث', 'Reading groups': 'مجموعات القراءة', 'Read my articles': 'اقرأ مقالاتي',
    'Library': 'المكتبة', 'History of Sudan': 'تاريخ السودان', 'Community health guide': 'دليل صحة المجتمع', 'Video: Nile kingdoms': 'فيديو: ممالك النيل',
    'Article: Sudanese poetry': 'مقال: الشعر السوداني', 'Kush & Meroë': 'كوش ومروي', 'Reading notes': 'ملاحظات القراءة',
    'Pipelines collect posts, group activity, library reads, and AI questions, clean and model them in a central warehouse, and power dashboards and the AI assistant’s index. This is where my data engineering work sits at the heart of Atnii Square.':
      'تجمع خطوط البيانات المنشورات ونشاط المجموعات وقراءات المكتبة وأسئلة المساعد الذكي، وتنظفها وتنمذجها في مستودع مركزي، وتغذي لوحات المعلومات وفهرس المساعد الذكي. هنا يقع عملي في هندسة البيانات في قلب أتنيه.',
    'I designed the data architecture end to end: ingestion from the app and content sources, orchestration with Airflow, modeling with dbt, and reporting through Power BI.':
      'صممت معمارية البيانات من البداية إلى النهاية: الاستيعاب من التطبيق ومصادر المحتوى، والتنسيق عبر Airflow، والنمذجة باستخدام dbt، والتقارير عبر Power BI.',
    'Content indexing': 'فهرسة المحتوى',
    // Journey (real roles) and certificates
    'Since 2019': 'منذ 2019',
    'Al Neelain University': 'جامعة النيلين', 'Sudan': 'السودان', 'Programming Language Assistant Teacher': 'مساعد تدريس لغات البرمجة',
    'CompuLearn': 'كمبيولرن', 'United Arab Emirates': 'الإمارات العربية المتحدة', 'Mobile Apps Developer': 'مطور تطبيقات جوال',
    'Melania Hotel': 'فندق ميلانيا', 'Saudi Arabia': 'المملكة العربية السعودية', 'Technical Lead': 'قائد تقني',
    'Self-employed': 'عمل حر', 'Independent': 'مستقل', 'Data Engineer': 'مهندس بيانات',
    'Training & certificates': 'التدريب والشهادات', 'Project Management Institute': 'معهد إدارة المشاريع (PMI)',
    'Project Management Professional (PMP)®': 'محترف إدارة المشاريع (PMP)®',
    'PMI Professional in Business Analysis (PMI-PBA)®': 'محترف تحليل الأعمال من PMI ‏(PMI-PBA)®',
    'Issued 11 Feb 2026': 'صدرت في 11 فبراير 2026', 'Valid until 11 Feb 2029': 'صالحة حتى 11 فبراير 2029',
    'Issued 09 Feb 2026': 'صدرت في 09 فبراير 2026', 'Valid until 09 Feb 2029': 'صالحة حتى 09 فبراير 2029',
    'Open menu': 'فتح القائمة', 'Close': 'إغلاق', 'Toggle dark mode': 'تبديل الوضع الداكن', 'Switch language': 'تغيير اللغة',
  };
  const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
  const norm = t => t.replace(/\s+/g, ' ').trim();

  if (lang === 'ar') {
    document.title = document.documentElement.dataset.titleAr || 'tajoj-plt · Altgani Motasim';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const html = AR_HTML[el.dataset.i18n];
      if (html) el.innerHTML = html;
    });
    const skip = el => el.closest('script, style, .ticker, .hero-name, [data-i18n]');
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const key = norm(node.textContent);
      if (!key || !AR[key] || skip(node.parentElement)) return;
      const lead = /^\s/.test(node.textContent) ? ' ' : '';
      const trail = /\s$/.test(node.textContent) ? ' ' : '';
      node.textContent = lead + AR[key] + trail;
    });
    document.querySelectorAll('[aria-label]').forEach(el => {
      const t = AR[el.getAttribute('aria-label')];
      if (t) el.setAttribute('aria-label', t);
    });
  }

  // Header language controls
  document.querySelectorAll('.lang-flag').forEach(el => { el.textContent = lang === 'ar' ? '🇸🇩' : '🇬🇧'; });
  document.querySelectorAll('.lang-name').forEach(el => { el.textContent = lang === 'ar' ? 'العربية' : 'English'; });
  document.querySelectorAll('.lang-short').forEach(el => { el.textContent = lang === 'ar' ? 'EN' : 'ع'; });
  document.querySelectorAll('.lang-other').forEach(el => { el.textContent = lang === 'ar' ? 'English' : 'العربية'; });
  document.querySelectorAll('[data-lang]').forEach(el => el.classList.toggle('active', el.dataset.lang === lang));
  function switchLang(next) {
    try { localStorage.setItem('lang', next); } catch (e) { /* storage blocked: still switch for this visit */ }
    const url = new URL(location.href);
    url.searchParams.delete('lang');
    if (next === 'ar') url.searchParams.set('lang', 'ar');
    location.href = url.toString();
  }
  document.querySelectorAll('[data-lang]').forEach(el => el.addEventListener('click', e => {
    e.preventDefault();
    if (el.dataset.lang !== lang) switchLang(el.dataset.lang);
  }));
  document.querySelectorAll('[data-lang-switch]').forEach(el => el.addEventListener('click', () => switchLang(lang === 'ar' ? 'en' : 'ar')));

  // ---------- Theme (light / dark) ----------
  const root = document.documentElement;
  function paintThemeIcon() {
    const dark = root.getAttribute('data-theme') === 'dark';
    document.querySelectorAll('.theme-toggle .bi').forEach(i => { i.className = dark ? 'bi bi-sun' : 'bi bi-moon-stars'; });
    const label = dark ? (lang === 'ar' ? 'الوضع الفاتح' : 'Light mode') : (lang === 'ar' ? 'الوضع الداكن' : 'Dark mode');
    document.querySelectorAll('.theme-label').forEach(el => { el.textContent = label; });
  }
  document.querySelectorAll('.theme-toggle').forEach(btn => btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    root.setAttribute('data-bs-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* not persisted */ }
    paintThemeIcon();
  }));
  paintThemeIcon();

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  // ---------- Hero name: each word slides up out of a mask, like the section titles ----------
  const heroName = document.querySelector('.hero-name');
  if (heroName) {
    heroName.querySelectorAll(':scope > span').forEach((part, i) => {
      part.innerHTML = `<span class="hn" style="--i:${i}">${part.textContent}</span>`;
    });
    requestAnimationFrame(() => requestAnimationFrame(() => heroName.classList.add('in')));
  }

  // ---------- Titles: wrap each word so it can slide up ----------
  document.querySelectorAll('.section-title, .hero-title').forEach(el => {
    let wi = 0;
    [...el.childNodes].forEach(node => {
      if (node.nodeType !== Node.TEXT_NODE) return;
      const frag = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach(part => {
        if (!part) return;
        if (/^\s+$/.test(part)) { frag.append(' '); return; }
        const w = document.createElement('span');
        w.className = 'w';
        w.innerHTML = `<span style="--i:${wi++}">${part}</span>`;
        frag.append(w);
      });
      node.replaceWith(frag);
    });
    el.classList.add('split');
  });

  // Stagger journey rows
  document.querySelectorAll('.xp-row').forEach((row, i) => row.style.setProperty('--d', `${i * 0.08}s`));

  // ---------- Reveal on scroll ----------
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // ---------- Active nav link ----------
  const navLinks = [...document.querySelectorAll('#mainNav .nav-link-x')];
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  navLinks.forEach(l => {
    const href = l.getAttribute('href');
    const t = href.startsWith('#') ? document.querySelector(href) : null;
    if (t) spy.observe(t);
  });

  // ---------- Work: app toggle ----------
  const phones = document.getElementById('phones');
  document.querySelectorAll('.seg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.seg-btn').forEach(b => {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-selected', b === btn);
      });
      if (phones) phones.dataset.front = btn.dataset.phone;
    });
  });

  // ---------- Contact form (Bootstrap validation + toast) ----------
  const form = document.getElementById('contactForm');
  if (form) {
    const toast = new bootstrap.Toast(document.getElementById('sentToast'));
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.checkValidity()) { form.classList.add('was-validated'); return; }
      // TODO: send to your backend / form service here.
      form.reset();
      form.classList.remove('was-validated');
      toast.show();
    });
  }

  // ---------- Show more / less: animated drop down and up ----------
  function toggleExtras(container, openClass, extras, open) {
    const ease = 'cubic-bezier(.2,.7,.2,1)';
    if (reduceMotion) { container.classList.toggle(openClass, open); return; }
    if (open) {
      container.classList.add(openClass);
      extras.forEach((el, i) => {
        el.classList.add('in');
        const cs = getComputedStyle(el);
        el.style.overflow = 'hidden';
        el.animate([
          { height: '0px', paddingTop: '0px', paddingBottom: '0px', opacity: 0, transform: 'translateY(-10px)' },
          { height: el.offsetHeight + 'px', paddingTop: cs.paddingTop, paddingBottom: cs.paddingBottom, opacity: 1, transform: 'none' },
        ], { duration: 480, delay: i * 80, easing: ease, fill: 'backwards' }).finished.then(() => { el.style.overflow = ''; });
      });
    } else {
      const runs = [...extras].reverse().map((el, i) => {
        const cs = getComputedStyle(el);
        el.style.overflow = 'hidden';
        return el.animate([
          { height: el.offsetHeight + 'px', paddingTop: cs.paddingTop, paddingBottom: cs.paddingBottom, opacity: 1, transform: 'none' },
          { height: '0px', paddingTop: '0px', paddingBottom: '0px', opacity: 0, transform: 'translateY(-10px)' },
        ], { duration: 380, delay: i * 60, easing: ease, fill: 'forwards' });
      });
      Promise.all(runs.map(a => a.finished)).then(() => {
        container.classList.remove(openClass);
        extras.forEach(el => { el.style.overflow = ''; });
        runs.forEach(a => a.cancel());
      });
    }
  }

  // ---------- Articles: show more ----------
  const moreBtn = document.getElementById('articlesMore');
  if (moreBtn) {
    const list = document.getElementById('articleList');
    const label = moreBtn.querySelector('.more-label');
    const t = lang === 'ar' ? ['عرض المزيد', 'عرض أقل'] : ['Show more', 'Show less'];
    moreBtn.addEventListener('click', () => {
      const open = moreBtn.getAttribute('aria-expanded') !== 'true';
      toggleExtras(list, 'show-all', list.querySelectorAll('.is-extra'), open);
      moreBtn.setAttribute('aria-expanded', open);
      label.textContent = open ? t[1] : t[0];
    });
  }

  // ---------- Journey: show more ----------
  const xpMore = document.getElementById('xpMore');
  if (xpMore) {
    const panel = xpMore.closest('.dark-panel');
    const label = xpMore.querySelector('.more-label');
    const t = lang === 'ar' ? ['عرض المزيد', 'عرض أقل'] : ['Show more', 'Show less'];
    xpMore.addEventListener('click', () => {
      const open = xpMore.getAttribute('aria-expanded') !== 'true';
      toggleExtras(panel, 'show-all', panel.querySelectorAll('.xp-extra'), open);
      xpMore.setAttribute('aria-expanded', open);
      label.textContent = open ? t[1] : t[0];
    });
  }

  // ---------- Side menu links: close the menu, then go to the link ----------
  // (Bootstrap's data-bs-dismiss cancels navigation on <a>, so links handle closing themselves.)
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.querySelectorAll('[data-menu-link]').forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        const oc = bootstrap.Offcanvas.getInstance(mobileMenu);
        if (!oc || !mobileMenu.classList.contains('show')) return;
        e.preventDefault();
        const go = () => {
          const hashOnly = href.startsWith('#');
          const samePage = !hashOnly && new URL(href, location.href).pathname === location.pathname;
          const id = hashOnly ? href.slice(1) : (samePage ? new URL(href, location.href).hash.slice(1) : '');
          const target = id && document.getElementById(id);
          if (target) {
            history.pushState(null, '', '#' + id);
            target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
          } else {
            location.href = href;
          }
        };
        mobileMenu.addEventListener('hidden.bs.offcanvas', go, { once: true });
        oc.hide();
      });
    });
  }

  // ---------- Certificate viewer ----------
  const certModal = document.getElementById('certModal');
  if (certModal) {
    certModal.addEventListener('show.bs.modal', e => {
      const btn = e.relatedTarget;
      const img = document.getElementById('certModalImg');
      img.src = btn.dataset.cert;
      img.alt = btn.dataset.certTitle;
      document.getElementById('certModalTitle').textContent = btn.closest('.cert-card').querySelector('h4').textContent;
    });
  }

  // ---------- Floating contact button ----------
  const fab = document.getElementById('fab');
  const fabBtn = document.getElementById('fabBtn');
  const fabMenu = document.getElementById('fabMenu');
  function setFab(open) {
    fab.classList.toggle('open', open);
    fabBtn.setAttribute('aria-expanded', open);
    fabMenu.setAttribute('aria-hidden', !open);
    fabMenu.querySelectorAll('a').forEach(a => a.tabIndex = open ? 0 : -1);
  }
  fabBtn.addEventListener('click', () => setFab(!fab.classList.contains('open')));
  document.addEventListener('click', e => { if (!fab.contains(e.target)) setFab(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setFab(false); });

  // ---------- Scroll progress + watermark parallax ----------
  const progress = document.getElementById('scrollProgress');
  const watermarks = [...document.querySelectorAll('.watermark')];
  let ticking = false;
  function onScrollFx() {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.setProperty('--p', max > 0 ? scrollY / max : 0);
    if (!reduceMotion && innerWidth >= 768) {
      watermarks.forEach(w => {
        const r = w.parentElement.getBoundingClientRect();
        const offset = Math.max(-36, Math.min(36, (r.top + r.height / 2 - innerHeight / 2) * -0.06));
        w.style.setProperty('--py', `${offset.toFixed(1)}px`);
      });
    }
    ticking = false;
  }
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScrollFx); } }, { passive: true });
  onScrollFx();

  if (!reduceMotion && finePointer) {
    // ---------- 3D tilt + spotlight on service cards and phones ----------
    function addTilt(el, max) {
      el.classList.add('tilt');
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        el.classList.add('tilting');
        el.style.setProperty('--mx', `${x * 100}%`);
        el.style.setProperty('--my', `${y * 100}%`);
        el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * max}deg) rotateY(${(x - 0.5) * max}deg) translateY(-6px)`;
      });
      el.addEventListener('pointerleave', () => { el.classList.remove('tilting'); el.style.transform = ''; });
    }
    document.querySelectorAll('.svc-card').forEach(c => addTilt(c, 10));
    document.querySelectorAll('.form-card').forEach(c => addTilt(c, 3));

    document.querySelectorAll('.media-card').forEach(c => addTilt(c, 6));

    // Phones follow the cursor a little
    if (phones) {
      const phonesBox = phones.parentElement;
      phonesBox.addEventListener('pointermove', e => {
        const r = phonesBox.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        phones.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 8}deg)`;
      });
      phonesBox.addEventListener('pointerleave', () => { phones.style.transform = ''; });
      phones.style.transition = 'transform .4s var(--ease), opacity .9s var(--ease)';
    }

    // ---------- Magnetic buttons ----------
    document.querySelectorAll('.btn-ink, .btn-whatsapp, .btn-ghost-x, .fab-main').forEach(btn => {
      btn.classList.add('magnetic');
      btn.addEventListener('pointermove', e => {
        const r = btn.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        btn.style.transform = `translate(${dx * 0.22}px, ${dy * 0.35}px)`;
      });
      btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
    });
  }

  // ---------- Skills: auto-advance until the visitor interacts ----------
  if (!reduceMotion && track) {
    let paused = false;
    const pause = () => { paused = true; };
    ['pointerdown', 'wheel', 'touchstart'].forEach(ev => track.addEventListener(ev, pause, { passive: true }));
    dotBtns.forEach(d => d.addEventListener('click', pause));
    let hovering = false;
    track.addEventListener('pointerenter', () => { hovering = true; });
    track.addEventListener('pointerleave', () => { hovering = false; });
    const skillsIo = new IntersectionObserver(([en]) => { track.dataset.visible = en.isIntersecting ? '1' : ''; });
    skillsIo.observe(track);
    setInterval(() => {
      if (paused || hovering || !track.dataset.visible) return;
      const cur = cards.findIndex(c => c.classList.contains('is-active'));
      scrollToCard((cur + 1) % cards.length);
    }, 3500);
  }

  document.getElementById('year').textContent = new Date().getFullYear();
})();

/**
 * Model: articles for the home page list and the reading page (article.html?a=<slug>).
 * Each text field has an English (en) and Arabic (ar) version. Bodies are plain HTML.
 */
export const ARTICLES = [
  {
    slug: 'airflow-dbt-pipelines',
    photo: '1558494949-ef010cbdcc31',
    icon: 'bi-diagram-3', g1: '#4830e8', g2: '#8f69e3', mins: 6,
    date: { en: 'Oct 2026', ar: 'أكتوبر 2026' },
    cat: { en: 'Data engineering', ar: 'هندسة البيانات' },
    title: { en: 'Building reliable data pipelines with Airflow and dbt', ar: 'بناء خطوط بيانات موثوقة باستخدام Airflow وdbt' },
    excerpt: {
      en: 'How I structure ingestion, testing, and modeling so dashboards stay trustworthy as data grows.',
      ar: 'كيف أنظم الاستيعاب والاختبار والنمذجة لتبقى اللوحات موثوقة مع نمو البيانات.',
    },
    body: {
      en: `<p>A dashboard is only as good as the pipeline behind it. When numbers change for no clear reason, people stop trusting the data, and that trust is hard to win back. Most of my work on Atnii Square starts here: making the path from raw data to a chart predictable.</p>
<h2>Split the work into clear layers</h2>
<p>I keep three layers. <strong>Raw</strong> holds data exactly as it arrived. <strong>Staging</strong> cleans names, types, and duplicates. <strong>Marts</strong> hold the tables people actually query. Airflow moves data into raw on a schedule; dbt owns everything after that.</p>
<h2>Test before anyone sees it</h2>
<p>Every model has tests for the basics: unique keys, no unexpected nulls, accepted values for status fields. A failing test stops the run, so a broken load never reaches a dashboard. It is much cheaper to fix a pipeline at 6 a.m. than to explain a wrong number in a meeting.</p>
<h2>Make reruns safe</h2>
<p>Tasks should be idempotent: running a day twice must give the same result. I load by date partitions and overwrite rather than append. When something breaks, I can rerun the affected days without cleaning up by hand.</p>
<h2>Document as you go</h2>
<p>dbt descriptions and lineage graphs turn the project into living documentation. New teammates can see where a column comes from in minutes, and I spend less time answering the same questions.</p>
<p>None of this is fancy, and that is the point. Reliable pipelines come from small, boring habits applied every day.</p>`,
      ar: `<p>لا تكون لوحة المعلومات أفضل من خط البيانات الذي يغذيها. عندما تتغير الأرقام دون سبب واضح يفقد الناس ثقتهم في البيانات، واستعادة هذه الثقة صعبة. لذلك يبدأ معظم عملي في أتنيه من هنا: جعل الطريق من البيانات الخام إلى الرسم البياني قابلاً للتوقع.</p>
<h2>قسّم العمل إلى طبقات واضحة</h2>
<p>أعتمد ثلاث طبقات. <strong>الخام</strong> تحفظ البيانات كما وصلت تماماً. <strong>التهيئة</strong> تنظف الأسماء والأنواع والتكرارات. <strong>الجداول النهائية</strong> هي ما يستعلم عنه الناس فعلاً. ينقل Airflow البيانات إلى الطبقة الخام وفق جدول زمني، ويتولى dbt كل ما بعد ذلك.</p>
<h2>اختبر قبل أن يراها أحد</h2>
<p>لكل نموذج اختبارات للأساسيات: مفاتيح فريدة، وعدم وجود قيم فارغة غير متوقعة، وقيم مقبولة لحقول الحالة. الاختبار الفاشل يوقف التشغيل، فلا تصل عملية تحميل معطوبة إلى أي لوحة. إصلاح خط البيانات صباحاً أرخص بكثير من شرح رقم خاطئ في اجتماع.</p>
<h2>اجعل إعادة التشغيل آمنة</h2>
<p>يجب أن تعطي المهام النتيجة نفسها مهما أُعيد تشغيلها. أحمّل البيانات حسب أقسام التاريخ وأستبدلها بدلاً من الإضافة إليها، فعندما يتعطل شيء أعيد تشغيل الأيام المتأثرة دون تنظيف يدوي.</p>
<h2>وثّق أثناء العمل</h2>
<p>أوصاف dbt ومخططات تتبع المصدر تحوّل المشروع إلى توثيق حي. يرى الزملاء الجدد مصدر أي عمود خلال دقائق، وأقضي وقتاً أقل في الإجابة عن الأسئلة نفسها.</p>
<p>لا شيء من هذا معقد، وهذا هو المقصود. خطوط البيانات الموثوقة تأتي من عادات صغيرة بسيطة تُطبّق كل يوم.</p>`,
    },
  },
  {
    slug: 'kobotoolbox-clean-data',
    photo: '1543286386-713bdd548da4',
    icon: 'bi-clipboard2-data', g1: '#0ea5e9', g2: '#66ddd7', mins: 8,
    date: { en: 'Sep 2026', ar: 'سبتمبر 2026' },
    cat: { en: 'Humanitarian data', ar: 'البيانات الإنسانية' },
    title: { en: 'From KoboToolbox surveys to clean, analysis-ready data', ar: 'من مسوحات KoboToolbox إلى بيانات نظيفة جاهزة للتحليل' },
    excerpt: {
      en: 'Practical steps for turning messy field survey exports into datasets teams can actually use.',
      ar: 'خطوات عملية لتحويل ملفات المسوحات الميدانية الفوضوية إلى بيانات يمكن للفرق استخدامها فعلاً.',
    },
    body: {
      en: `<p>KoboToolbox is excellent for collecting data in the field, even offline. The export, though, is rarely ready for analysis: long column names, repeat groups in separate sheets, and choices stored as codes. Here is the process I use to get from export to a clean dataset.</p>
<h2>Pull data through the API, not by hand</h2>
<p>Downloading Excel files manually does not scale and is easy to get wrong. I use the KoboToolbox API to pull submissions on a schedule, so every refresh uses the same steps and nothing depends on who clicked export.</p>
<h2>Rename columns from the form, not by guesswork</h2>
<p>The XLSForm already describes every question. I read it to map long question paths to short, consistent column names and to translate choice codes into labels in both Arabic and English.</p>
<h2>Handle repeat groups as their own tables</h2>
<p>Household members, visits, or distributions often live in repeat groups. I keep them as separate tables linked by the submission ID instead of flattening them, which avoids duplicated rows and wrong totals.</p>
<h2>Check quality early</h2>
<p>Simple rules catch most problems: impossible ages, GPS points outside the target area, duplicated submissions, and interviews that were too short. Flagged records go to a review list rather than being deleted silently.</p>
<p>The result is a dataset that analysts and program teams can trust, refreshed automatically as new surveys come in.</p>`,
      ar: `<p>يعد KoboToolbox أداة ممتازة لجمع البيانات في الميدان حتى دون اتصال بالإنترنت، لكن الملف المُصدَّر نادراً ما يكون جاهزاً للتحليل: أسماء أعمدة طويلة، ومجموعات متكررة في أوراق منفصلة، وخيارات مخزنة كرموز. إليك الطريقة التي أتبعها للوصول إلى بيانات نظيفة.</p>
<h2>اسحب البيانات عبر الواجهة البرمجية لا يدوياً</h2>
<p>تنزيل ملفات Excel يدوياً لا يتوسع ويسهل فيه الخطأ. أستخدم واجهة KoboToolbox البرمجية لسحب الاستمارات وفق جدول زمني، فيمر كل تحديث بالخطوات نفسها ولا يعتمد شيء على من ضغط زر التصدير.</p>
<h2>سمِّ الأعمدة من الاستمارة لا بالتخمين</h2>
<p>ملف XLSForm يصف كل سؤال مسبقاً. أقرؤه لتحويل مسارات الأسئلة الطويلة إلى أسماء أعمدة قصيرة ومتسقة، وترجمة رموز الخيارات إلى تسميات بالعربية والإنجليزية.</p>
<h2>عامل المجموعات المتكررة كجداول مستقلة</h2>
<p>أفراد الأسرة والزيارات والتوزيعات غالباً ما تكون في مجموعات متكررة. أحتفظ بها كجداول منفصلة مرتبطة برقم الاستمارة بدلاً من دمجها، وهذا يمنع تكرار الصفوف والمجاميع الخاطئة.</p>
<h2>افحص الجودة مبكراً</h2>
<p>قواعد بسيطة تكشف معظم المشكلات: أعمار مستحيلة، ونقاط GPS خارج المنطقة المستهدفة، واستمارات مكررة، ومقابلات قصيرة جداً. تذهب السجلات المشبوهة إلى قائمة مراجعة بدلاً من حذفها بصمت.</p>
<p>النتيجة مجموعة بيانات يثق بها المحللون وفرق البرامج، وتتحدث تلقائياً مع وصول مسوحات جديدة.</p>`,
    },
  },
  {
    slug: 'arcgis-power-bi-impact',
    photo: '1524661135-423995f22d0b',
    icon: 'bi-globe-americas', g1: '#16a34a', g2: '#ace2a4', mins: 5,
    date: { en: 'Aug 2026', ar: 'أغسطس 2026' },
    cat: { en: 'Visualization', ar: 'تصوير البيانات' },
    title: { en: 'Mapping impact with ArcGIS and Power BI', ar: 'رسم خريطة الأثر باستخدام ArcGIS وPower BI' },
    excerpt: {
      en: 'Combining maps and dashboards to tell a clear story about where programs reach people.',
      ar: 'الجمع بين الخرائط واللوحات لرواية قصة واضحة عن أماكن وصول البرامج إلى الناس.',
    },
    body: {
      en: `<p>Tables tell you how much; maps tell you where. For programs that serve people across many locations, the "where" is often the first question decision makers ask. I use ArcGIS and Power BI together to answer both.</p>
<h2>Start from a shared location key</h2>
<p>Everything depends on joining data to places correctly. I keep one reference table of administrative areas with official codes and Arabic and English names, and every dataset is matched to it before it reaches a map.</p>
<h2>Let each tool do what it is best at</h2>
<p>ArcGIS handles spatial work: boundaries, distances, coverage areas, and layered maps. Power BI handles the numbers: trends, filters, and comparisons. Publishing ArcGIS layers into Power BI lets people click a region and see its indicators in the same view.</p>
<h2>Design for the question, not the data</h2>
<p>A good map answers one question clearly, such as which districts are under-served this month. I limit colors, use consistent scales across reports, and always show when the data was last updated.</p>
<p>When maps and dashboards share the same clean data, teams spend less time arguing about numbers and more time acting on them.</p>`,
      ar: `<p>الجداول تخبرك بالكمية، والخرائط تخبرك بالمكان. في البرامج التي تخدم الناس في مواقع كثيرة، يكون سؤال "أين؟" غالباً أول ما يطرحه صناع القرار. أستخدم ArcGIS وPower BI معاً للإجابة عن السؤالين.</p>
<h2>ابدأ بمفتاح موقع مشترك</h2>
<p>كل شيء يعتمد على ربط البيانات بالأماكن بشكل صحيح. أحتفظ بجدول مرجعي واحد للمناطق الإدارية برموزها الرسمية وأسمائها بالعربية والإنجليزية، وتُطابق كل مجموعة بيانات معه قبل أن تصل إلى أي خريطة.</p>
<h2>دع كل أداة تفعل ما تجيده</h2>
<p>يتولى ArcGIS العمل المكاني: الحدود والمسافات ومناطق التغطية والطبقات. ويتولى Power BI الأرقام: الاتجاهات والمرشحات والمقارنات. نشر طبقات ArcGIS داخل Power BI يتيح للمستخدم النقر على منطقة ورؤية مؤشراتها في الشاشة نفسها.</p>
<h2>صمم للسؤال لا للبيانات</h2>
<p>الخريطة الجيدة تجيب عن سؤال واحد بوضوح، مثل: أي المناطق لم تُخدم بما يكفي هذا الشهر؟ أقلل الألوان، وأستخدم مقاييس ثابتة بين التقارير، وأُظهر دائماً تاريخ آخر تحديث للبيانات.</p>
<p>عندما تعتمد الخرائط واللوحات على البيانات النظيفة نفسها، تقضي الفرق وقتاً أقل في الجدال حول الأرقام ووقتاً أكثر في العمل بها.</p>`,
    },
  },
  {
    slug: 'learning-platform-warehouse',
    photo: '1544383835-bda2bc66a55d',
    icon: 'bi-database', g1: '#d97b2b', g2: '#f6c177', mins: 7,
    date: { en: 'Jul 2026', ar: 'يوليو 2026' },
    cat: { en: 'Analytics', ar: 'التحليلات' },
    title: { en: 'Designing a data warehouse for a learning platform', ar: 'تصميم مستودع بيانات لمنصة تعليمية' },
    excerpt: {
      en: 'Choosing models, keys, and layers so product and impact questions are easy to answer.',
      ar: 'اختيار النماذج والمفاتيح والطبقات لتسهل الإجابة عن أسئلة المنتج والأثر.',
    },
    body: {
      en: `<p>A learning platform produces two kinds of questions. Product questions ask how people use the app. Impact questions ask whether learners actually improve. The Atnii Square warehouse is designed so both are easy to answer from the same tables.</p>
<h2>Model around events and entities</h2>
<p>Learners, mentors, courses, and lessons are entities with their own dimension tables. Things that happen, such as a lesson started, a quiz answered, or a session booked, are facts with timestamps that point to those entities.</p>
<h2>Keep keys stable</h2>
<p>Every entity gets a surrogate key that never changes, even if a learner updates their profile. Slowly changing details, such as school or region, are tracked over time so historical reports stay correct.</p>
<h2>Build a few trusted metrics</h2>
<p>Instead of letting every report compute "active learner" its own way, the warehouse defines it once. Shared metrics remove most arguments before they start.</p>
<p>The goal is not the biggest warehouse but the clearest one: a small set of well-named tables that answer real questions quickly.</p>`,
      ar: `<p>تطرح المنصة التعليمية نوعين من الأسئلة. أسئلة المنتج تسأل كيف يستخدم الناس التطبيق، وأسئلة الأثر تسأل هل يتحسن المتعلمون فعلاً. صُمم مستودع بيانات أتنيه لتسهل الإجابة عن النوعين من الجداول نفسها.</p>
<h2>انمذج حول الأحداث والكيانات</h2>
<p>المتعلمون والمرشدون والمقررات والدروس كيانات لكل منها جدول أبعاد خاص. أما ما يحدث، مثل بدء درس أو الإجابة عن اختبار أو حجز جلسة، فهي حقائق بأوقات محددة تشير إلى تلك الكيانات.</p>
<h2>حافظ على ثبات المفاتيح</h2>
<p>يحصل كل كيان على مفتاح بديل لا يتغير أبداً حتى لو حدّث المتعلم ملفه. وتُتتبع التفاصيل التي تتغير ببطء، مثل المدرسة أو المنطقة، عبر الزمن لتبقى التقارير التاريخية صحيحة.</p>
<h2>ابنِ مقاييس قليلة موثوقة</h2>
<p>بدلاً من أن يحسب كل تقرير "المتعلم النشط" بطريقته، يعرّفه المستودع مرة واحدة. المقاييس المشتركة تنهي معظم الخلافات قبل أن تبدأ.</p>
<p>الهدف ليس أكبر مستودع بل أوضحه: مجموعة صغيرة من الجداول ذات الأسماء الواضحة تجيب عن الأسئلة الحقيقية بسرعة.</p>`,
    },
  },
  {
    slug: 'education-data-for-ai',
    photo: '1677442136019-21780ecad995',
    icon: 'bi-stars', g1: '#7c3aed', g2: '#c4b5fd', mins: 6,
    date: { en: 'Jun 2026', ar: 'يونيو 2026' },
    cat: { en: 'AI', ar: 'الذكاء الاصطناعي' },
    title: { en: 'Making education data ready for AI features', ar: 'تجهيز بيانات التعليم لميزات الذكاء الاصطناعي' },
    excerpt: {
      en: 'Cleaning, labeling, and documenting data so AI features stay accurate and fair.',
      ar: 'تنظيف البيانات وتوسيمها وتوثيقها لتبقى ميزات الذكاء الاصطناعي دقيقة وعادلة.',
    },
    body: {
      en: `<p>AI features are only as good as the data they learn from and look things up in. Before Atnii Square's assistant could explain lessons or suggest practice, the content and learner data needed real preparation.</p>
<h2>Clean and structure the content</h2>
<p>Lessons were split into small, titled sections with clear topics and levels. That makes search and retrieval precise, so the assistant quotes the right part of a lesson instead of guessing.</p>
<h2>Label what matters</h2>
<p>Exercises are tagged by skill and difficulty, in both Arabic and English. Good labels let the platform recommend the next step for each learner and measure whether recommendations help.</p>
<h2>Protect learners</h2>
<p>Personal details are removed or pseudonymized before data is used for AI features, and access is limited by role. Learners' trust matters more than any single feature.</p>
<h2>Check for fairness</h2>
<p>I compare results across regions, languages, and levels to make sure the features work as well for every group, not just the largest one.</p>`,
      ar: `<p>لا تكون ميزات الذكاء الاصطناعي أفضل من البيانات التي تتعلم منها وتبحث فيها. قبل أن يتمكن مساعد أتنيه من شرح الدروس أو اقتراح التمارين، احتاج المحتوى وبيانات المتعلمين إلى تجهيز حقيقي.</p>
<h2>نظّف المحتوى وهيكله</h2>
<p>قُسمت الدروس إلى أقسام صغيرة معنونة بمواضيع ومستويات واضحة. هذا يجعل البحث والاسترجاع دقيقين، فيقتبس المساعد الجزء الصحيح من الدرس بدلاً من التخمين.</p>
<h2>وسّم ما يهم</h2>
<p>توسم التمارين حسب المهارة ومستوى الصعوبة بالعربية والإنجليزية. التوسيم الجيد يتيح للمنصة اقتراح الخطوة التالية لكل متعلم وقياس ما إذا كانت الاقتراحات مفيدة.</p>
<h2>احمِ المتعلمين</h2>
<p>تُزال البيانات الشخصية أو تُخفى هويتها قبل استخدامها في ميزات الذكاء الاصطناعي، ويُقيَّد الوصول حسب الدور. ثقة المتعلمين أهم من أي ميزة.</p>
<h2>تحقق من العدالة</h2>
<p>أقارن النتائج بين المناطق واللغات والمستويات للتأكد من أن الميزات تعمل بالجودة نفسها لكل فئة، لا للفئة الأكبر فقط.</p>`,
    },
  },
  {
    slug: 'moving-into-data-engineering',
    photo: '1531482615713-2afd69097998',
    icon: 'bi-signpost-split', g1: '#111111', g2: '#71717a', mins: 4,
    date: { en: 'May 2026', ar: 'مايو 2026' },
    cat: { en: 'Career', ar: 'المسيرة المهنية' },
    title: { en: 'What I learned moving into data engineering', ar: 'ما تعلمته في انتقالي إلى هندسة البيانات' },
    excerpt: {
      en: 'Lessons on tools, habits, and thinking in systems from my path into data work.',
      ar: 'دروس عن الأدوات والعادات والتفكير المنظومي من رحلتي إلى عالم البيانات.',
    },
    body: {
      en: `<p>Data engineering looks like a list of tools: SQL, Python, Airflow, dbt, cloud warehouses. The tools matter, but the habits behind them matter more. These are the lessons that changed how I work.</p>
<h2>SQL is the foundation</h2>
<p>Almost every problem eventually becomes a query. Getting comfortable with joins, window functions, and reading query plans paid off more than any new framework.</p>
<h2>Think in systems</h2>
<p>A pipeline is a chain of promises: this table will be fresh by 7 a.m., this column will never be empty. Writing those promises down, and testing them, is most of the job.</p>
<h2>Talk to the people who use the data</h2>
<p>The best pipeline is useless if it answers the wrong question. Short conversations with analysts and program teams saved me weeks of building the wrong thing.</p>
<h2>Start small and ship</h2>
<p>A simple pipeline that runs every day beats a perfect design that never ships. Improve it once real people depend on it.</p>`,
      ar: `<p>تبدو هندسة البيانات كقائمة أدوات: SQL وPython وAirflow وdbt والمستودعات السحابية. الأدوات مهمة، لكن العادات خلفها أهم. هذه الدروس غيرت طريقة عملي.</p>
<h2>SQL هي الأساس</h2>
<p>تتحول كل مشكلة تقريباً في النهاية إلى استعلام. إتقان الربط ودوال النوافذ وقراءة خطط التنفيذ أفادني أكثر من أي إطار عمل جديد.</p>
<h2>فكّر بالمنظومة</h2>
<p>خط البيانات سلسلة من الوعود: سيكون هذا الجدول محدثاً بحلول السابعة صباحاً، ولن يكون هذا العمود فارغاً أبداً. كتابة هذه الوعود واختبارها هي معظم العمل.</p>
<h2>تحدث مع من يستخدمون البيانات</h2>
<p>أفضل خط بيانات لا قيمة له إذا أجاب عن السؤال الخطأ. محادثات قصيرة مع المحللين وفرق البرامج وفرت عليّ أسابيع من بناء الشيء الخطأ.</p>
<h2>ابدأ صغيراً وأطلق</h2>
<p>خط بيانات بسيط يعمل كل يوم أفضل من تصميم مثالي لا يُطلق أبداً. حسّنه عندما يعتمد عليه أشخاص حقيقيون.</p>`,
    },
  },
];

/** How many articles the home page shows before "Show more". */
export const VISIBLE_ARTICLES = 3;

export const findArticle = slug => ARTICLES.find(a => a.slug === slug);

export const otherArticles = (slug, count = 3) => ARTICLES.filter(a => a.slug !== slug).slice(0, count);

/** Unsplash photo URL for an article (free to use under the Unsplash License). */
export const articlePhoto = (a, w, h) => `https://images.unsplash.com/photo-${a.photo}?w=${w}&h=${h}&fit=crop&q=70&auto=format`;

export const articleUrl = a => `article.html?a=${encodeURIComponent(a.slug)}`;

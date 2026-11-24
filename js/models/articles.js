/**
 * Model: articles for the home page list and the reading page (article.html?a=<slug>).
 * Each text field has an English (en) and Arabic (ar) version. Bodies are plain HTML.
 */
export const ARTICLES = [
  {
    slug: 'story-behind-atnii-square',
    image: { thumb: 'assets/article-atnii-thumb.png', cover: 'assets/article-atnii-cover.png' },
    icon: 'bi-book', g1: '#b45309', g2: '#f59e0b', mins: 4,
    date: { en: 'Nov 2026', ar: 'نوفمبر 2026' },
    cat: { en: 'Atnii Square', ar: 'أتنيه' },
    title: { en: 'The story behind Atnii Square', ar: 'الحكاية وراء أتنيه' },
    excerpt: {
      en: 'How an interest in Sudanese heritage grew into an open, independent knowledge ecosystem for Sudan.',
      ar: 'كيف تحوّل الاهتمام بالتراث السوداني إلى منظومة معرفية سودانية مستقلة ومفتوحة المصدر.',
    },
    body: {
      en: `<p>About two years ago, I developed a growing interest in Sudanese heritage. I began reading about the cultural, social, intellectual, and religious life of Sudan, and about everything that shapes the country. Along the way, I met and listened to people who have contributed to this heritage in different ways, including artists, academics, politicians, and religious scholars.</p>
<p>What stood out to me most was the richness of Sudan's intellectual and cultural output in almost every field. This left a strong impression on me and grew into a real passion. I did not only want to collect and document this heritage in an organized way. I wanted to find a way for people to engage with it, so that it could become real, productive knowledge.</p>
<h2>From an idea to a name</h2>
<p>I started a project that I first called "Sudan Electronic Library". It was later renamed "Suda Mind", then "Azza Mind", and finally "Atnii Square", a name chosen for its cultural meaning. The final name is still under legal review.</p>
<h2>Built with the help of many people</h2>
<p>I did not have expertise in every area the project touches, but my enthusiasm for it was strong. I sought advice from many people, including academics, intellectuals, and technical specialists. They were generous with their time and helped me in many ways.</p>
<h2>The idea</h2>
<p>The goal is to build a Sudanese knowledge ecosystem: one place that brings together Sudan's cultural and intellectual output and knowledge across all fields, where people can explore it, interact with it, and share it.</p>
<h2>Where the project stands</h2>
<p>The project is now complete and in the testing phase. In the coming period, before we release a beta version, I will share its main features. Your feedback will be very welcome.</p>
<h2>Two important principles</h2>
<ol>
<li><strong>Independence.</strong> The project is fully independent. It does not serve any organization or any political or ideological direction. Its main purpose is to share Sudanese knowledge in all its aspects.</li>
<li><strong>Open source.</strong> The project is open source at every level, and anyone interested is welcome to contribute to its development.</li>
</ol>`,
      ar: `<p>قبل نحو عامين بدأ لديّ اهتمام متزايد بالتراث السوداني عموماً، فأخذت أبحث وأطّلع على الحياة الثقافية والاجتماعية والفكرية والدينية، وعلى كل ما يشكّل السودان. والتقيت بشخصيات أضافت إلى التراث السوداني بطرق مختلفة واستمعت إليها، ومنهم فنانون وأكاديميون وسياسيون ورجال دين.</p>
<p>لفت نظري غزارة الإنتاج الفكري والثقافي لدينا في كل المجالات تقريباً، وتأثرت بذلك كثيراً حتى نما لديّ شغف كبير، لا بجمع هذا التراث وتوثيقه بشكل منظم فحسب، بل بالتفكير في كيفية تفاعل الناس معه ليتحول إلى معرفة حقيقية منتجة.</p>
<h2>من فكرة إلى اسم</h2>
<p>بدأت حينها مشروعاً سمّيته "مكتبة السودان الإلكترونية"، ثم غيّرته إلى "Suda Mind"، ثم "Azza Mind"، إلى أن وصلنا إلى "أتنيه اسكوير" لرمزية الاسم الثقافية، ولا يزال الاسم قيد التحقق من الناحية القانونية.</p>
<h2>بمساعدة كثيرين</h2>
<p>رغم قصور معرفتي في جوانب كثيرة تتعلق بالمشروع، كنت متحمساً له جداً، فاستعنت بمشورة كثيرين من الأكاديميين والمثقفين والتقنيين، وقد أفادوني في نواحٍ كثيرة ولم يقصّروا.</p>
<h2>الفكرة</h2>
<p>الفكرة عموماً هي بناء منظومة معرفية سودانية تضم كل النتاج الثقافي والفكري والمعرفة السودانية في جميع المجالات، يتفاعل معها الناس ويشاركونها.</p>
<h2>أين وصل المشروع</h2>
<p>الحمد لله، اكتمل المشروع الآن وهو في مرحلة الاختبار، وفيه مجموعة من الخصائص سأشارككم إياها في الفترة القادمة قبل إطلاق نسخة تجريبية، ونرحب جداً بآرائكم.</p>
<h2>أمران مهمان</h2>
<ol>
<li><strong>الاستقلالية.</strong> المشروع مستقل تماماً ولا يخدم أي جهة أو توجه، وهدفه الأساسي نشر المعرفة السودانية بكل جوانبها ومشاركتها.</li>
<li><strong>مفتوح المصدر.</strong> المشروع مفتوح المصدر على كل مستوياته، ومتاح للتطوير من قبل أي شخص مهتم.</li>
</ol>`,
    },
  },
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
];

/** How many articles the home page shows before "Show more" (desktop, then phones). */
export const VISIBLE_ARTICLES = 3;
export const VISIBLE_ARTICLES_MOBILE = 2;

export const findArticle = slug => ARTICLES.find(a => a.slug === slug);

export const otherArticles = (slug, count = 3) => ARTICLES.filter(a => a.slug !== slug).slice(0, count);

/**
 * Image URL for an article: its own files in assets/ (`image.thumb` for the square list
 * thumbnail, `image.cover` for the wide cover), or an Unsplash photo (`photo`, free to use
 * under the Unsplash License) cropped to the size asked for.
 */
export const articlePhoto = (a, w, h) =>
  a.image ? (w > h ? a.image.cover : a.image.thumb) : `https://images.unsplash.com/photo-${a.photo}?w=${w}&h=${h}&fit=crop&q=70&auto=format`;

export const articleUrl = a => `article.html?a=${encodeURIComponent(a.slug)}`;

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  ChevronDown,
  Globe,
  Heart,
  Phone,
  ShieldCheck,
  Sprout,
  Star,
  Users,
} from "lucide-react";

import { Logo } from "@/components/Logo";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import hero from "@/assets/hero.jpg";
import mapImg from "@/assets/map.jpg";
import principal from "@/assets/principal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "مدرسة عيون مصر | تمكين العقول، بناء المستقبل" },
      {
        name: "description",
        content:
          "مدرسة عيون مصر تجمع بين التميز الأكاديمي وبناء الشخصية والمشاركة المجتمعية لكل طالب.",
      },
      { property: "og:title", content: "مدرسة عيون مصر | تمكين العقول، بناء المستقبل" },
      {
        property: "og:description",
        content: "التميز الأكاديمي وبناء الشخصية والمشاركة المجتمعية في مدرسة عيون مصر.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  { icon: BookOpen, label: "التميز الأكاديمي", desc: "منهج متكامل يركز على الفهم العميق والتفكير النقدي" },
  { icon: ShieldCheck, label: "بناء الشخصية", desc: "قيم أخلاقية ومسؤولية اجتماعية في بيئة محفزة" },
  { icon: Users, label: "المشاركة المجتمعية", desc: "أنشطة تربط الطلاب بمجتمعهم وبيئتهم المحلية" },
  { icon: Sprout, label: "رفاهية الطلاب", desc: "دعم نفسي وأكاديمي لضمان نمو متوازن لكل طالب" },
];

const stats = [
  { value: "١٬٢٤٨", label: "طالب وطالبة" },
  { value: "٨٥", label: "معلم ومعلمة" },
  { value: "٢٥+", label: "عاماً من الخبرة" },
  { value: "٩٨٪", label: "نسبة رضا أولياء الأمور" },
];

const programs = [
  { title: "المرحلة الحضانة", grades: "من kg1  الي kg2", desc: "أساس قوي في القراءة والكتابة والرياضيات مع أنشطة إبداعية" },
  { title: "المرحلة الابتدائية", grades: "من الصف الاول إلى السادس", desc: "تعميق المفاهيم العلمية وتنمية مهارات البحث والتحليل" },
  { title: "المرحلة الاعدادية", grades: "من الصف الاول إلى الثالت", desc: "إعداد شامل للجامعة مع مسارات علمية وأدبية متنوعة" },
];

const testimonials = [
  { name: "أم عمر", text: "ابني تحسّن كثيراً في الثقة بالنفس والأداء الدراسي منذ التحاقه بمدرسة عيون مصر.", rating: 5 },
  { name: "أبو سارة", text: "التواصل مع المعلمين ممتاز، ونحن دائماً على اطلاع بكل ما يخص ابنتنا.", rating: 5 },
  { name: "أم يوسف", text: "الأنشطة اللاصفية المتنوعة ساعدت ابني على اكتشاف مواهبه واهتماماته.", rating: 5 },
];

const news = [
  { date: "٢٠ مايو ٢٠٢٥", title: "إطلاق برنامج الأنشطة الصيفية ٢٠٢٥", tag: "أنشطة" },
  { date: "١٨ مايو ٢٠٢٥", title: "فوز فريق الروبوتات بالمركز الأول على مستوى المحافظة", tag: "إنجازات" },
  { date: "١٥ مايو ٢٠٢٥", title: "أنشطة ورحلات ترفيهية وتعليمية تمنح الطلاب تجارب جديدة خارج الفصل الدراسي.", tag: "فعاليات" },
  { date: "١٠ مايو ٢٠٢٥", title: "افتتاح المختبر العلمي الجديد", tag: "مرافق" },
];

const faqs = [
  { q: "ما هي ساعات الدوام الرسمية؟", a: "من الأحد إلى الخميس، من الساعة ٧:٣٠ صباحاً حتى ٢:٣٠ مساءً." },
  { q: "هل توفر المدرسة خدمة النقل؟", a: "نعم، نوفر حافلات مدرسية تغطي معظم مناطق ٦ أكتوبر والمحافظات المجاورة." },
  { q: "كيف يمكنني متابعة أداء ابني؟", a: "من خلال بوابة أولياء الأمور الإلكترونية التي تعرض الدرجات والحضور والرسوم." },
  { q: "ما هي أنشطة ما بعد الدوام؟", a: "نوفر كرة القدم، الكاراتيه، الرسم، الروبوتات، المسرح والكورال." },
];

const gallery = [g1, g2, g3, g4, g5, g6];

function Home() {
  return (
    <div className="min-h-screen bg-card font-arabic">
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-bold lg:flex">
            <a href="#home" className="border-b-2 border-gold pb-1 text-brand">
              الرئيسية
            </a>
            <a href="#about" className="text-foreground/80 hover:text-brand">
              عن المدرسة
            </a>
            <a href="#programs" className="text-foreground/80 hover:text-brand">
              المراحل
            </a>
            <a href="#activities" className="text-foreground/80 hover:text-brand">
              الأنشطة
            </a>
            <a href="#news" className="text-foreground/80 hover:text-brand">
              الأخبار
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-brand">
              تواصل معنا
            </a>
          </nav>
          <Link
            to="/login"
            className="rounded-full bg-brand px-8 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
          >
            تسجيل الدخول
          </Link>
        </div>
      </header>

      <section id="home" className="relative">
        <img
          src={hero}
          alt="طلاب مدرسة عيون مصر في الفصل والمختبر والملعب والمسرح"
          width={1920}
          height={620}
          className="h-[380px] w-full object-cover md:h-[480px]"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-brand-dark/50 px-6">
          <div className="max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold leading-tight text-white drop-shadow md:text-5xl">
              تمكين العقول، بناء المستقبل:
              <br />
              رؤية مدرسة عيون مصر
            </h1>
            <p className="mt-4 text-base font-semibold text-white/90 md:text-lg">
              مؤسسة تعليمية مصرية حديثة تجمع بين التميز الأكاديمي والقيم الأصيلة
            </p>
            <a
              href="#about"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 text-sm font-bold text-brand-dark transition-colors hover:bg-gold/90"
            >
              اكتشف المزيد
              <ChevronDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-brand py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center text-white">
              <div className="text-3xl font-extrabold md:text-4xl">{value}</div>
              <div className="mt-1 text-sm font-semibold text-white/80">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div>
            <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">عن المدرسة</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              مدرسة عيون مصر مؤسسة تعليمية مصرية حديثة تُنمّي فضول الطلاب وتدعم كل متعلم. يجمع
              معلّمونا بين منهج وطني قوي ومشاريع إبداعية ورياضة وفنون، لينمو الطلاب أكاديمياً
              وشخصياً. نبني الشخصية ونشجّع المسؤولية ونُبقي العائلات قريبة من رحلة التعلّم.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              تأسست المدرسة عام 1999 برؤية واضحة: تقديم تعليم عالي الجودة يواكب متطلبات العصر
              مع الحفاظ على الهوية المصرية والقيم العربية الأصيلة. نؤمن بأن كل طفل يمتلك
              إمكانات فريدة تستحق الاكتشاف والرعاية.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {pillars.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="rounded-xl border border-border bg-card p-4 shadow-card">
                <Icon className="h-7 w-7 text-brand" strokeWidth={1.6} />
                <div className="mt-3 text-sm font-bold text-foreground">{label}</div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-5 rounded-xl border-r-4 border-gold bg-brand-soft/70 p-6 md:flex-row">
          <img
            src={principal}
            alt="مدير مدرسة عيون مصر"
            loading="lazy"
            width={640}
            height={640}
            className="h-32 w-32 shrink-0 rounded-lg border-2 border-gold object-cover"
          />
          <blockquote className="text-base font-semibold leading-relaxed text-foreground md:text-lg">
            «أهلاً بكم في <span className="text-brand">مدرسة عيون مصر</span>، حيث نُوفّر{" "}
            <span className="text-brand">بيئة تعليمية داعمة وملهمة</span> لكل طالب. لنحقق
            العظمة معاً.»
            <footer className="mt-3 text-sm font-bold text-muted-foreground">
              — أحمد محمد، مدير المدرسة
            </footer>
          </blockquote>
        </div>
      </section>

      <section id="programs" className="bg-brand-soft/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-extrabold text-foreground md:text-3xl">
            المراحل الدراسية
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
            برامج تعليمية مصممة بعناية لتلبية احتياجات كل مرحلة عمرية
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {programs.map(({ title, grades, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-brand">{title}</h3>
                <div className="mt-1 text-xs font-bold text-gold">{grades}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-extrabold text-foreground md:text-3xl">
          لماذا تختار عيون مصر؟
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Award, title: "اعتماد أكاديمي", desc: "منهج معتمد من وزارة التربية والتعليم مع معايير دولية" },
            { icon: Heart, title: "بيئة تعليمية آمنة", desc: "نهتم بتوفير بيئة تعليمية منظمة وآمنة تساعد الطلاب على التعلم والنمو." },
            { icon: Star, title: "معلمون متميزون", desc: "فريق تدريسي ذو خبرة وشغف بالتعليم" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 rounded-xl border border-border p-5 shadow-card">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-soft">
                <Icon className="h-6 w-6 text-gold" />
              </span>
              <div>
                <h3 className="font-extrabold text-brand">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="activities" className="bg-brand-soft/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-extrabold text-foreground md:text-3xl">
            معرض الأنشطة والفعاليات
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
            لحظات من حياة مدرسية حافلة بالإبداع والإنجاز
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {gallery.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`نشاط مدرسي ${i + 1}`}
                loading="lazy"
                width={640}
                height={512}
                className="h-32 w-full rounded-lg border border-border object-cover md:h-36"
              />
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-extrabold text-foreground md:text-3xl">
          آخر الأخبار
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {news.map((item) => (
            <article key={item.title} className="rounded-xl border border-border p-5 shadow-card">
              <div className="flex items-center gap-2">
                <span className="rounded bg-gold-soft px-2 py-0.5 text-xs font-bold text-gold">
                  {item.tag}
                </span>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
              <h3 className="mt-3 font-extrabold text-brand">{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-soft/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-extrabold text-foreground md:text-3xl">
            آراء أولياء الأمور
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map(({ name, text, rating }) => (
              <blockquote key={name} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="flex gap-1">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">«{text}»</p>
                <footer className="mt-4 text-sm font-bold text-brand">{name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-extrabold text-foreground md:text-3xl">
          الأسئلة الشائعة
        </h2>
        <div className="mx-auto mt-10 max-w-2xl space-y-4">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group rounded-xl border border-border bg-card shadow-card">
              <summary className="cursor-pointer list-none px-5 py-4 font-bold text-brand marker:content-none">
                <span className="flex items-center justify-between">
                  {q}
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </span>
              </summary>
              <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                {a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-brand-soft/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:items-start">
            <div>
              <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">تواصل معنا</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                يسعدنا استقبال استفساراتكم. تواصلوا معنا عبر الهاتف أو زورونا في المدرسة.
              </p>
              <div className="mt-6 space-y-4">
                {["٠٢-٣٨٣٥٢٣٩٩", "٠٢-٣٨٣٥٢٥٦٧٨"].map((phone) => (
                  <div key={phone} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand">
                      <Phone className="h-5 w-5 text-white" />
                    </span>
                    <span className="text-sm font-semibold text-foreground">{phone}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg border border-border bg-card p-4">
                <div className="text-xs font-bold text-brand">العنوان</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  ٦ أكتوبر، الجيزة، جمهورية مصر العربية
                </div>
              </div>
            </div>
            <img
              src={mapImg}
              alt="خريطة موقع مدرسة عيون مصر في مصر"
              loading="lazy"
              width={1280}
              height={640}
              className="h-56 w-full rounded-lg border border-border object-cover md:h-72"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-brand py-10 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <Logo variant="light" />
              <p className="mt-4 text-sm text-white/70">
                مؤسسة تعليمية رائدة في ٦ أكتوبر منذ عام 1999
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gold">روابط سريعة</h4>
              <div className="mt-3 space-y-2 text-sm text-white/80">
                <a href="#about" className="block hover:text-gold">عن المدرسة</a>
                <a href="#programs" className="block hover:text-gold">المراحل الدراسية</a>
                <a href="#activities" className="block hover:text-gold">الأنشطة</a>
                <Link to="/login" className="block hover:text-gold">بوابة أولياء الأمور</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gold">ساعات العمل</h4>
              <div className="mt-3 space-y-1 text-sm text-white/80">
                <p>الأحد – الخميس: ٧:٣٠ ص – ٢:٣٠ م</p>
                <p>السبت: ٩:٠٠ ص – ١:٠٠ م (استقبال)</p>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-white/15 pt-6 text-center text-sm text-white/60">
            © ٢٠٢٥ مدرسة عيون مصر. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
}

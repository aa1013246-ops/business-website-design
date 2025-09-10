import Image from "next/image";

export default function Home() {
  return (
    <div dir="rtl" className="font-sans min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur border-b">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Image src="/next.svg" alt="الشعار" width={36} height={36} className="dark:invert" />
            <span className="font-heading text-lg font-bold">مكتب مصادر لإستقدام العمالة المنزلية</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#hero" className="hover:text-primary">الرئيسية</a>
            <a href="#services" className="hover:text-primary">خدماتنا</a>
            <a href="#about" className="hover:text-primary">من نحن</a>
            <a href="#contact" className="hover:text-primary">تواصل</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="container mx-auto grid md:grid-cols-2 gap-8 py-14 md:py-20 items-center">
        <div className="space-y-5">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            حلول موثوقة لإستقدام العمالة المنزلية في الرياض
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            نوفر لك كوادر منزلية مدرّبة من جنسيات متعددة بإجراءات سريعة وشفافة، وفق أنظمة وزارة الموارد البشرية.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90">
              اطلب عرض سعر الآن
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-medium hover:bg-accent">
              استكشف الخدمات
            </a>
          </div>
        </div>
        <div className="rounded-2xl border bg-card p-6">
          <Image src="/vercel.svg" alt="صورة تعريفية" width={600} height={400} className="w-full h-auto dark:invert" />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary/50 border-y">
        <div className="container mx-auto py-14 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">خدماتنا</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border bg-card p-6 space-y-2">
              <h3 className="font-semibold">استقدام عاملات منزليات</h3>
              <p className="text-muted-foreground text-sm">اختيارات متعددة وفق متطلبات الأسرة وخبراتها السابقة.</p>
            </div>
            <div className="rounded-xl border bg-card p-6 space-y-2">
              <h3 className="font-semibold">استقدام سائقين خاصين</h3>
              <p className="text-muted-foreground text-sm">إجراءات سريعة وفحص مهني للتأكد من الكفاءة.</p>
            </div>
            <div className="rounded-xl border bg-card p-6 space-y-2">
              <h3 className="font-semibold">متابعة ما بعد الوصول</h3>
              <p className="text-muted-foreground text-sm">ضمان وبدائل وفق العقود المعتمدة ودعم مستمر.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container mx-auto py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">من نحن</h2>
            <p className="text-muted-foreground">
              مكتب مصادر لإستقدام العمالة المنزلية بالرياض، نلتزم بتقديم خدمات احترافية متوافقة مع الأنظمة،
              وشراكات موثوقة في عدة دول لضمان الجودة والسرعة.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              <li className="rounded-lg border bg-card p-3">عقود معتمدة ورسميّة</li>
              <li className="rounded-lg border bg-card p-3">شفافية في التكاليف والمدة</li>
              <li className="rounded-lg border bg-card p-3">فحص وخبرة مسبقة</li>
              <li className="rounded-lg border bg-card p-3">دعم ما بعد التوظيف</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-card p-4">
            <Image src="/window.svg" alt="حول المكتب" width={640} height={420} className="w-full h-auto dark:invert" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-secondary/50 border-t">
        <div className="container mx-auto py-14 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">تواصل معنا</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-card p-6 space-y-3">
              <p className="text-muted-foreground">العنوان: 2393 ابي الوليد بن عبدالله، النزهة، الرياض 12473</p>
              <p className="text-muted-foreground">الهاتف: 0500000000</p>
              <a href="https://www.google.com/maps/place/%D9%85%D9%83%D8%AA%D8%A8+%D9%85%D8%B5%D8%A7%D8%AF%D8%B1+%D9%84%D8%A5%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85+%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9+%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%D9%8A%D8%A9%E2%80%AD/@24.7546224,46.6984726,16z" target="_blank" rel="noopener noreferrer" className="inline-flex text-sm text-primary hover:underline">
                فتح الموقع على الخرائط
              </a>
            </div>
            <div className="rounded-xl border overflow-hidden">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.366028202738!2d46.6984726!3d24.7546224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0179216f048d%3A0x9a303f88e73889e7!2z2YXYsdmD2LIg2KfZhNiz2YTZiSA2KfZhNin2YXYqtmF2YrYuSDYp9mE2KfYqtiv2YrYp9ix2Kkg2KfZhNiv2YTZiNin2YTYqSDYp9mE2YfZhdmI2KfYqCDYp9mE2KfZhtmK2KfYsdmK2Kk!5e0!3m2!1sar!2ssa!4v1700000000000!5m2!1sar!2ssa"
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-muted-foreground">© {new Date().getFullYear()} مكتب مصادر. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-primary">الخدمات</a>
            <a href="#about" className="hover:text-primary">من نحن</a>
            <a href="#contact" className="hover:text-primary">تواصل</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
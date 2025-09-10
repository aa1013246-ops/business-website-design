import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur border-b">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Image src="/next.svg" alt="Logo" width={36} height={36} className="dark:invert" />
            <span className="font-heading text-lg font-bold">Masader Recruitment</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#hero" className="hover:text-primary">Home</a>
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="container mx-auto grid md:grid-cols-2 gap-8 py-14 md:py-20 items-center">
        <div className="space-y-5">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Reliable Domestic Worker Recruitment in Riyadh
          </h1>
          <p className="text-muted-foreground text-base md:text-lg">
            Trained staff from multiple nationalities with fast, transparent procedures compliant with regulations.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90">
              Get a Quote
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-medium hover:bg-accent">
              Explore Services
            </a>
          </div>
        </div>
        <div className="rounded-2xl border bg-card p-6">
          <Image src="/vercel.svg" alt="Illustration" width={600} height={400} className="w-full h-auto dark:invert" />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary/50 border-y">
        <div className="container mx-auto py-14 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border bg-card p-6 space-y-2">
              <h3 className="font-semibold">Domestic Workers</h3>
              <p className="text-muted-foreground text-sm">Multiple options tailored to your household needs and prior experience.</p>
            </div>
            <div className="rounded-xl border bg-card p-6 space-y-2">
              <h3 className="font-semibold">Private Drivers</h3>
              <p className="text-muted-foreground text-sm">Fast processing and professional screening to ensure competence.</p>
            </div>
            <div className="rounded-xl border bg-card p-6 space-y-2">
              <h3 className="font-semibold">Post-Arrival Support</h3>
              <p className="text-muted-foreground text-sm">Warranty, replacements per contracts, and ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container mx-auto py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">About Us</h2>
            <p className="text-muted-foreground">
              We provide professional recruitment services aligned with regulations and trusted partnerships across countries to ensure quality and speed.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              <li className="rounded-lg border bg-card p-3">Official, approved contracts</li>
              <li className="rounded-lg border bg-card p-3">Transparent costs and timelines</li>
              <li className="rounded-lg border bg-card p-3">Pre-screened experience</li>
              <li className="rounded-lg border bg-card p-3">After-hire support</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-card p-4">
            <Image src="/window.svg" alt="About" width={640} height={420} className="w-full h-auto dark:invert" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-secondary/50 border-t">
        <div className="container mx-auto py-14 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-card p-6 space-y-3">
              <p className="text-muted-foreground">Address: 2393 Abi Al-Walid Bin Abdullah, Al-Nuzha, Riyadh 12473</p>
              <p className="text-muted-foreground">Phone: 0500000000</p>
              <a href="https://www.google.com/maps/place/%D9%85%D9%83%D8%AA%D8%A8+%D9%85%D8%B5%D8%A7%D8%AF%D8%B1+%D9%84%D8%A5%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85+%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9+%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84%D9%8A%D8%A9%E2%80%AD/@24.7546224,46.6984726,16z" target="_blank" rel="noopener noreferrer" className="inline-flex text-sm text-primary hover:underline">
                Open in Google Maps
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
          <p className="text-muted-foreground">© {new Date().getFullYear()} Masader. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-primary">Services</a>
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
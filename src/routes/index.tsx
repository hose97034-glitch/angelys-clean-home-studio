import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { FeatureCarousel } from "@/components/ui/feature-carousel";
import { GlassTestimonialSwiper } from "@/components/ui/glass-testimonial-swiper";
import { BUSINESS, REELS, SERVICES } from "@/lib/business-content";
import detailImage from "@/assets/luxury-cleaning-detail.jpg";
import heroImage from "@/assets/luxury-cleaning-hero.jpg";
import showcaseImage from "@/assets/luxury-cleaning-showcase.jpg";

const serviceImages = { hero: heroImage, showcase: showcaseImage, detail: detailImage };

const values = [
  { title: "Care in every detail", text: "A considered approach to the rooms, finishes and belongings that make your home yours." },
  { title: "A personal touch", text: "A warm, attentive experience, shaped around the way you want your home to feel." },
  { title: "Thoughtful cleaning", text: "A fresh, comfortable home—with the right service for the moment you are in." },
];

const steps = [
  { title: "Let’s talk", text: "Call to tell us about your home and what you have in mind.", icon: Phone },
  { title: "Choose a service", text: "Find the kind of cleaning that feels right for your space.", icon: Sparkles },
  { title: "Plan the details", text: "Connect with Angely to discuss timing and your preferences.", icon: Clock3 },
  { title: "Enjoy coming home", text: "Look forward to a clean space and a fresh feeling.", icon: Check },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Angely González Clean Services | Clean Homes, Happy Days" },
      { name: "description", content: "Explore home cleaning, deep cleaning, move-in / move-out, post-construction, carpet & upholstery services from Angely González Clean Services." },
      { property: "og:title", content: "Angely González Clean Services | Clean Homes, Happy Days" },
      { property: "og:description", content: "Clean Spaces • Fresh Living • Lasting Impressions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function closeMenu() { setMenuOpen(false); }

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand-lockup" href="#home" aria-label={`${BUSINESS.name} home`}>
          <span className="brand-mark" aria-hidden="true">A</span>
          <span className="brand-wordmark">
            <span className="brand-name">Angely González</span>
            <span className="brand-description">Clean Services</span>
          </span>
        </a>
        <nav id="primary-navigation" className={`site-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {[["About", "#about"], ["Services", "#services"], ["Gallery", "#gallery"], ["Our process", "#how-it-works"], ["Contact", "#contact"]].map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <a className="header-phone" href={BUSINESS.phoneLink}><Phone aria-hidden="true" />{BUSINESS.phone}</a>
        <Button
          className="mobile-menu"
          variant="outline"
          size="icon"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</Button>
      </header>

      <section className="hero" id="home" aria-labelledby="home-title">
        <img className="hero-image" src={heroImage} width={1792} height={1024} alt="Serene sunlit living room with elegant details" fetchPriority="high" />
        <div className="hero-wash" aria-hidden="true" />
        <div className="hero-copy">
          <span className="eyebrow">A home, beautifully refreshed</span>
          <h1 id="home-title">Come home<br />to <em>something</em><br />beautiful.</h1>
          <p className="hero-tagline">{BUSINESS.tagline}</p>
          <p className="hero-support">{BUSINESS.supportingLine}</p>
          <div className="hero-actions">
            <Button asChild className="button-luxe"><a href="#contact">Arrange a cleaning <ArrowUpRight aria-hidden="true" /></a></Button>
            <a className="hero-call" href={BUSINESS.phoneLink}><Phone aria-hidden="true" />{BUSINESS.phone}</a>
          </div>
        </div>
        <a className="hero-quiet-note" href="#about">The Angely González approach <ArrowDown aria-hidden="true" /></a>
      </section>

      <div className="intro-band" aria-label="Brand promise">
        <p className="intro-phrase">{BUSINESS.supportingLine}</p>
        <div className="intro-item"><strong>A clean space</strong>Thoughtful services for the rooms you live in.</div>
        <div className="intro-item"><strong>A fresh feeling</strong>Home care, with a personal point of view.</div>
      </div>

      <section className="section" id="about">
        <div className="about-layout reveal">
          <div className="about-image-wrap">
            <img src={detailImage} width={1408} height={1024} alt="Freshly cleaned marble bathroom, folded towels and eucalyptus" loading="lazy" />
            <span className="about-image-accent" aria-hidden="true" />
          </div>
          <div className="about-copy">
            <span className="eyebrow">A little about us</span>
            <h2 className="section-title">Your home,<br />in <em>good hands.</em></h2>
            <p>At Angely González Clean Services, a clean home is a feeling as much as it is a space. Each visit begins with listening—then giving your rooms the care they need to feel fresh, welcoming and ready for the moments ahead.</p>
            <p>From regular residential care to a move or a post-construction refresh, choose a service that suits your home and your next chapter.</p>
            <div className="about-quote"><Sparkles aria-hidden="true" /> A thoughtful clean. A happier home.</div>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading centered reveal">
          <span className="eyebrow">Made for your home</span>
          <h2 className="section-title">Room for a <em>fresh start.</em></h2>
          <p className="section-description">Choose a cleaning service for the way you live, the home you love and the moment you’re in.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((service) => (
            <article className="service-item reveal" key={service.number}>
              <div className="service-image">
                <img src={serviceImages[service.image]} alt={`A bright, freshly cleaned home for ${service.name.toLowerCase()}`} width={1536} height={1024} loading="lazy" />
                <span className="service-number">{service.number}</span>
              </div>
              <div className="service-info">
                <div><h3>{service.name}</h3><p>{service.note}</p></div>
                <ArrowUpRight className="service-arrow" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section values-section" id="why-us">
        <div className="reveal">
          <span className="eyebrow">The little things matter</span>
          <h2 className="section-title">Care, in every<br /><em>corner.</em></h2>
          <p className="section-description">The feeling of a well-cared-for home isn’t just about what sparkles. It’s about how you feel when you walk through the door.</p>
        </div>
        <div className="values-list reveal">
          {values.map((value, index) => (
            <article className="value-item" key={value.title}>
              <span className="value-number">0{index + 1}</span>
              <div><h3>{value.title}</h3><p>{value.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-band" id="gallery">
        <div className="gallery-band-inner">
          <div className="section-heading reveal">
            <span className="eyebrow">A home, at its best</span>
            <h2 className="section-title">The beauty of<br /><em>a fresh beginning.</em></h2>
          </div>
          <a className="hero-call" href={BUSINESS.phoneLink}>Ask about a service <ArrowRight aria-hidden="true" /></a>
        </div>
        <div className="reveal"><FeatureCarousel /></div>
      </section>

      <section className="section before-after-section" id="before-after">
        <div className="section-heading centered reveal">
          <span className="eyebrow">The beauty of a reset</span>
          <h2 className="section-title">See it <em>in a new light.</em></h2>
          <p className="section-description">Two glimpses of home. Every space has its own story and its own fresh start.</p>
        </div>
        <div className="before-after-grid reveal">
          <div className="before-after-panel"><img src={heroImage} alt="Sunlight falling across a serene living space" width={1792} height={1024} loading="lazy" /><span>A moment before</span></div>
          <div className="before-after-panel after"><img src={showcaseImage} alt="A refreshed, welcoming living room and kitchen" width={1536} height={1024} loading="lazy" /><span>A breath of fresh air</span></div>
        </div>
        <p className="before-after-note">Editorial home imagery shown. Real before-and-after photos can be added here.</p>
      </section>

      <section className="section reels-section" id="reels">
        <div className="section-heading centered reveal">
          <span className="eyebrow">A closer look</span>
          <h2 className="section-title">Little moments, <em>beautifully clean.</em></h2>
          <p className="section-description">A space for your videos.</p>
        </div>
        <div className="reels-grid reveal">
          {REELS.map((reel) => (
            <article className="reel-item" key={reel}>
              <div className="reel-placeholder" role="img" aria-label={`Empty 9 by 16 reel video placeholder ${reel}`}>
                <span className="reel-index">{reel}</span>
                <span className="reel-center-mark" aria-hidden="true" />
              </div>
              <p>Reel {reel}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonials-section" id="testimonials">
        <div className="testimonials-grid">
          <div className="testimonials-copy reveal">
            <span className="eyebrow">Kind words, in time</span>
            <h2 className="section-title">A note from <em>your neighbors.</em></h2>
            <p className="section-description">Your clients’ words belong here. Replace each card with a review shared by a real client.</p>
          </div>
          <div className="reveal"><GlassTestimonialSwiper /></div>
        </div>
      </section>

      <section className="section steps-section" id="how-it-works">
        <div className="section-heading centered reveal">
          <span className="eyebrow">A simple beginning</span>
          <h2 className="section-title">From hello <em>to home.</em></h2>
          <p className="section-description">A personal conversation is the first step toward a cleaner, happier home.</p>
        </div>
        <div className="steps-grid reveal">
          {steps.map((step, index) => (
            <article className="step-item" key={step.title}>
              <span className="step-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section map-section" id="service-area">
        <div className="map-layout reveal">
          <div className="map-copy">
            <span className="eyebrow">Service area</span>
            <h2 className="section-title">Find your<br /><em>place on the map.</em></h2>
            <p className="section-description">We’d love to hear where home is. Get in touch to confirm service availability for your address.</p>
            <div className="map-notice">Coverage details have not been provided yet. No business pin or service boundary is displayed.</div>
          </div>
          <div>
            <iframe
              className="map-frame"
              title="Interactive world map — move and zoom to explore"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-25%2C-22%2C25%2C22&layer=mapnik"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className="map-acknowledgement">Interactive map for general reference. No specific cleaning service location or service area has been marked.</p>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="reveal">
          <span className="eyebrow">Let’s make room for happy days</span>
          <h2 className="section-title">Start with a<br /><em>conversation.</em></h2>
          <p className="contact-detail">Tell us a little about your home.</p>
        </div>
        <div className="contact-options reveal">
          <div>
            <span className="micro-label">Call Angely</span>
            <div className="contact-actions">
              <Button asChild className="button-luxe"><a href={BUSINESS.phoneLink}><Phone aria-hidden="true" />{BUSINESS.phone}</a></Button>
              <a className="contact-callout" href={BUSINESS.phoneLink}>Request a cleaning <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand-lockup footer-brand" href="#home">
            <span className="brand-mark" aria-hidden="true">A</span>
            <span className="brand-wordmark"><span className="brand-name">Angely González</span><span className="brand-description">Clean Services</span></span>
          </a>
          <p className="footer-note">{BUSINESS.tagline}<br />{BUSINESS.supportingLine}</p>
          <a className="footer-phone" href={BUSINESS.phoneLink}>{BUSINESS.phone}</a>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} {BUSINESS.name}</span><a className="footer-note" href="#home">Back to the beginning <ChevronDown aria-hidden="true" /></a></div>
      </footer>
    </main>
  );
}

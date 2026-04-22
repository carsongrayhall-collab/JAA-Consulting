import Image from "next/image";
import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";
import { ContentSlider } from "@/components/ContentSlider";
import { PartnerLogoStrip } from "@/components/PartnerLogoStrip";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import {
  heroQuote,
  partnerLogos,
  whatIDoSlides,
  whySlides
} from "@/lib/content";

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen bg-parchment">
      <div className="mx-auto max-w-shell px-4 pb-16 md:px-6">
        <Header />

        <section className="grid gap-10 pb-12 pt-8 lg:grid-cols-[1.02fr_1fr]" id="solutions">
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="section-card relative aspect-[0.87] overflow-hidden">
                <Image
                  src="/images/headshot.jpg"
                  alt="Portrait of John A Andrews"
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  quality={100}
                  priority
                  className="object-cover"
                />
              </div>
              <p className="text-[0.7rem] tracking-[0.06em] text-mutedTone">
                John A Andrews, Former Chief underwriting Officer, International at Hadron Insurance
              </p>
            </div>

            <ContentSlider slides={whySlides} minHeight={300} />

            <div className="relative aspect-[1.8] overflow-hidden md:-mx-12 md:scale-[1.28]">
              <Image
                src="/images/wave.svg"
                alt="Decorative wave graphic"
                fill
                sizes="(max-width: 1024px) 100vw, 620px"
                className="object-contain"
              />
            </div>
          </div>

          <div className="space-y-10 lg:pt-20">
            <section className="space-y-5 pt-2 lg:pt-10">
              <SectionTitle id="who-i-am-title" title="Who I Am" align="center" />
              <p className="mx-auto max-w-[26ch] text-center font-body text-[1rem] leading-7 text-text">
                &ldquo;{heroQuote}&rdquo;
              </p>
            </section>

            <div className="relative aspect-[1.82] overflow-hidden md:-mx-20 md:scale-[1.56] lg:-mx-24 lg:scale-[1.66]">
              <Image
                src="/images/globe.svg"
                alt="Decorative portfolio network globe"
                fill
                sizes="(max-width: 1024px) 100vw, 860px"
                className="object-contain"
              />
            </div>

            <section className="space-y-5 lg:pt-[100px]">
              <ContentSlider slides={whatIDoSlides} minHeight={300} titleAlign="right" />
            </section>
          </div>
        </section>

        <div className="space-y-12 pb-8">
          <PartnerLogoStrip logos={partnerLogos} />
          <ContactForm />
        </div>
      </div>
      <Footer />
    </main>
  );
}

import * as React from "react";
import { ArrowLeft, ArrowRight, MoveUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { BUSINESS } from "@/lib/business-content";
import detailImage from "@/assets/luxury-cleaning-detail.jpg";
import heroImage from "@/assets/luxury-cleaning-hero.jpg";
import showcaseImage from "@/assets/luxury-cleaning-showcase.jpg";

const features = [
  {
    index: "01",
    name: "A little more light",
    description: "Beautifully reset rooms, ready to feel like yours again.",
    image: showcaseImage,
    alt: "Bright, impeccably refreshed living room and kitchen",
  },
  {
    index: "02",
    name: "Consider every detail",
    description: "A quieter kind of luxury lives in the smallest details.",
    image: detailImage,
    alt: "Crisp, sparkling marble bathroom and carefully folded towels",
  },
  {
    index: "03",
    name: "Make space for home",
    description: "Thoughtful cleaning for the rooms that make a house yours.",
    image: heroImage,
    alt: "Sunlit, artfully composed residence in soft morning light",
  },
] as const;

export function FeatureCarousel() {
  const [active, setActive] = React.useState(0);
  const apiRef = React.useRef<Parameters<NonNullable<React.ComponentProps<typeof Carousel>["setApi"]>>[0] | null>(null);

  const setApi = React.useCallback((api: NonNullable<typeof apiRef.current>) => {
    apiRef.current = api;
    const update = () => setActive(api.selectedScrollSnap());
    api.on("select", update);
    update();
  }, []);

  return (
    <div className="feature-showcase">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, duration: 36 }}
        aria-label={`${BUSINESS.name} property photography`}
      >
        <CarouselContent className="ml-0">
          {features.map((feature) => (
            <CarouselItem key={feature.index} className="basis-full pl-0">
              <article className="feature-frame">
                <img
                  className="feature-frame-image"
                  src={feature.image}
                  width={1792}
                  height={1024}
                  alt={feature.alt}
                />
                <div className="feature-frame-caption">
                  <span className="micro-label">A home, considered</span>
                  <h3>{feature.name}</h3>
                  <p>{feature.description}</p>
                </div>
                <a className="feature-contact-link" href={BUSINESS.phoneLink} aria-label={`Call ${BUSINESS.phone}`}>
                  <MoveUpRight aria-hidden="true" />
                </a>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="feature-controls">
        <span className="feature-counter"><span>{String(active + 1).padStart(2, "0")}</span> / 03</span>
        <div className="feature-arrows">
          <Button aria-label="Previous image" variant="outline" size="icon" className="round-arrow" onClick={() => apiRef.current?.scrollPrev()}>
            <ArrowLeft aria-hidden="true" />
          </Button>
          <Button aria-label="Next image" variant="outline" size="icon" className="round-arrow" onClick={() => apiRef.current?.scrollNext()}>
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
}
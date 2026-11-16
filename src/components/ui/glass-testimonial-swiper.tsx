import * as React from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TESTIMONIAL_PLACEHOLDERS } from "@/lib/business-content";

export function GlassTestimonialSwiper() {
  const [active, setActive] = React.useState(0);
  const pointerStart = React.useRef<number | null>(null);

  function advance(direction: number) {
    setActive((current) =>
      (current + direction + TESTIMONIAL_PLACEHOLDERS.length) % TESTIMONIAL_PLACEHOLDERS.length,
    );
  }

  return (
    <div
      className="testimonial-stage"
      aria-label="Client testimonial placeholders"
      onPointerDown={(event) => { pointerStart.current = event.clientX; }}
      onPointerUp={(event) => {
        if (pointerStart.current === null) return;
        const distance = event.clientX - pointerStart.current;
        if (Math.abs(distance) > 44) advance(distance > 0 ? -1 : 1);
        pointerStart.current = null;
      }}
      onPointerCancel={() => { pointerStart.current = null; }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") advance(-1);
        if (event.key === "ArrowRight") advance(1);
      }}
      role="region"
      tabIndex={0}
    >
      {TESTIMONIAL_PLACEHOLDERS.map((testimonial, index) => {
        const relative = (index - active + TESTIMONIAL_PLACEHOLDERS.length) % TESTIMONIAL_PLACEHOLDERS.length;
        return (
          <article
            key={testimonial.label}
            className={`testimonial-glass testimonial-glass-${relative}`}
            aria-hidden={relative !== 0}
            style={{ zIndex: TESTIMONIAL_PLACEHOLDERS.length - relative }}
          >
            <span className="testimonial-quote-mark"><Quote aria-hidden="true" /></span>
            <p className="testimonial-placeholder-copy">{testimonial.text}</p>
            <div className="testimonial-byline">
              <span className="testimonial-avatar" aria-hidden="true">AG</span>
              <div>
                <p className="testimonial-client-name">{testimonial.label}</p>
                <span className="testimonial-edit-note">Editable review placeholder</span>
              </div>
            </div>
          </article>
        );
      })}
      <div className="testimonial-controls">
        <Button aria-label="Previous testimonial placeholder" variant="outline" size="icon" className="round-arrow" onClick={() => advance(-1)}>
          <ArrowLeft aria-hidden="true" />
        </Button>
        <span aria-live="polite">0{active + 1} <span>/ 03</span></span>
        <Button aria-label="Next testimonial placeholder" variant="outline" size="icon" className="round-arrow" onClick={() => advance(1)}>
          <ArrowRight aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
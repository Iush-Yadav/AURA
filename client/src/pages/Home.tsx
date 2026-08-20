/**
 * AURA design reminder: Experimental editorial cinema. The supplied mask video and real-identity
 * portrait lead the story; acid green is a rare signal, not a decorative glow.
 */
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { Button } from "@/components/ui/button";
import GravitationalVortex from "@/components/ui/gravitational-vortex";
import TextRevealBlur from "@/components/ui/text-reveal-blur";
import DigitalTwinSection from "@/components/ui/digital-twin-section";

const questions = [
  "Why is my skin changing?",
  "Is this routine working?",
  "Why am I breaking out again?",
  "Is my hair actually getting thinner?",
  "Should I change my products?",
  "Who am I supposed to believe?",
];

const noiseWords = [
  "GOOGLE",
  "INSTAGRAM",
  "TIKTOK",
  "REDDIT",
  "YOUTUBE",
  "REVIEWS",
  "INFLUENCERS",
  "PRODUCTS",
  "INGREDIENTS",
  "ROUTINES",
];

const workflow = [
  ["01", "OBSERVE", "Notice what changes."],
  ["02", "UNDERSTAND", "Put each change in context."],
  ["03", "PERSONALIZE", "Learn what matters to you."],
  ["04", "MEASURE", "See patterns across time."],
  ["05", "LEARN", "Keep the story moving."],
];

const capabilities = [
  ["Skin intelligence", "Track observable changes and trends."],
  ["Hair intelligence", "See hair-related changes in the context of time."],
  ["Routine intelligence", "Understand consistency and routine shifts."],
  ["Ingredient intelligence", "Learn what ingredients do and why they may matter."],
  ["Progress intelligence", "Compare change across weeks and months."],
  ["Personal AI", "Ask questions with your own history in view."],
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const heroCharacterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const moveHeroCharacter = (event: ReactPointerEvent<HTMLElement>) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const horizontal = ((event.clientX - left) / width - 0.5) * 20;
    const vertical = ((event.clientY - top) / height - 0.5) * 12;
    heroCharacterRef.current?.style.setProperty("--hero-shift-x", `${horizontal.toFixed(1)}px`);
    heroCharacterRef.current?.style.setProperty("--hero-shift-y", `${vertical.toFixed(1)}px`);
  };

  const resetHeroCharacter = () => {
    heroCharacterRef.current?.style.setProperty("--hero-shift-x", "0px");
    heroCharacterRef.current?.style.setProperty("--hero-shift-y", "0px");
  };

  return (
    <div className="aura-site" id="top">
      <header className={`aura-nav ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand-lockup" href="#top" aria-label="AURA home">
          <img src="/images/aura-signal-logo.png" alt="" />
          <span>AURA</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#how-it-works">How it works</a>
          <button type="button" onClick={() => setWaitlistOpen(true)}>
            Waitlist <ArrowUpRight size={15} aria-hidden="true" />
          </button>
        </nav>

        <button
          className="mobile-menu-trigger"
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#how-it-works" onClick={closeMenu}>How it works</a>
            <button type="button" onClick={() => { closeMenu(); setWaitlistOpen(true); }}>
              Join the waitlist
            </button>
          </nav>
        )}
      </header>

      <main>
        <section className="mask-scene scene" aria-labelledby="mask-title" onPointerMove={moveHeroCharacter} onPointerLeave={resetHeroCharacter}>
          <GravitationalVortex 
            backgroundColor="transparent"
            style={{ minWidth: 0, minHeight: 0 }}
          />
          <div className="mask-grain" aria-hidden="true" />
          <div className="mask-halo halo-one" aria-hidden="true" />
          <div className="mask-halo halo-two" aria-hidden="true" />
          <div className="video-frame hero-character" ref={heroCharacterRef} aria-hidden="true">
            <video autoPlay muted loop playsInline preload="metadata">
              <source src="/character-video.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="scene-code">01 / THE MASK</div>
          <div className="mask-copy">
            <p className="eyebrow">A QUIET BEGINNING</p>
            <h1 id="mask-title">
              <TextRevealBlur
                texts={[
                  "BEHIND EVERY MASK, THERE'S A YOU",
                  "AURA WANTS TO UNDERSTAND WHAT'S UNDERNEATH"
                ]}
                font={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontSize: 'clamp(2.5rem, 5vw, 6rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.06em',
                  lineHeight: 0.85,
                  textAlign: 'left'
                }}
                color="var(--paper)"
                blobSize={12}
              />
            </h1>
            <p className="mask-whisper">The question is: do you know it?</p>
          </div>
          <a className="scroll-cue" href="#reveal">
            <span>Enter the story</span>
            <ArrowDown size={17} aria-hidden="true" />
          </a>
        </section>

        <section className="reveal-scene" id="reveal" aria-labelledby="reveal-title">
          <div className="reveal-copy">
            <p className="scene-code dark-code">02 / THE REVEAL</p>
            <p className="eyebrow dark-eyebrow">THE THINGS WE HIDE</p>
            <h2 id="reveal-title">THE PROBLEM<br />ISN&apos;T <em>YOU.</em></h2>
            <p className="body-copy">
              It&apos;s that you&apos;ve been left to figure yourself out alone—between shifting routines,
              changing skin, and more advice than anyone can hold.
            </p>
          </div>
          <figure className="portrait-aperture">
            <div className="portrait-index">REAL / 01</div>
            <img src="/images/image2.jpeg" alt="AURA's real identity character portrait" />
            <figcaption>A person, not a problem to solve.</figcaption>
          </figure>
        </section>

        <section className="questions-scene scene" aria-labelledby="questions-title">
          <div className="scene-code">03 / THE QUESTIONS</div>
          <h2 id="questions-title" className="sr-only">The questions we all ask</h2>
          <div className="questions-portrait" aria-hidden="true">
            <img src="/images/image.jpg" alt="" />
          </div>
          <div className="question-field" aria-label="Common questions about appearance and routines">
            {questions.map((question, index) => (
              <p className={`question question-${index + 1}`} key={question}>{question}</p>
            ))}
          </div>
          <div className="question-footer">
            <span>Every question is personal.</span>
            <span>Every answer should be, too.</span>
          </div>
        </section>

        <section className="noise-scene scene" aria-labelledby="noise-title">
          <img className="noise-art" src="/images/image1.jpeg" alt="Abstract noise resolving into a green line" />
          <div className="scene-code">04 / THE NOISE</div>
          <div className="noise-words" aria-hidden="true">
            {noiseWords.map((word) => <span key={word}>{word}</span>)}
          </div>
          <div className="noise-statement">
            <p>TRY. WAIT. GUESS. REPEAT.</p>
            <h2 id="noise-title">TOO MUCH ADVICE.<br /><span>NOT ENOUGH UNDERSTANDING.</span></h2>
          </div>
        </section>

        <section className="quiet-pause" aria-label="A moment of calm">
          <p className="scene-code dark-code">04.5 / A PAUSE</p>
          <p className="quiet-observation">A changing face is not a failure.<br />It&apos;s a record of a life in motion.</p>
          <p className="quiet-caption">AURA is being built to help you read it with more care.</p>
        </section>

        <section className="aura-intro scene" id="about" aria-labelledby="aura-title">
          <img className="observation-art" src="/images/aura-observation-field.jpg" alt="Abstract AURA observation field" />
          <div className="scene-code">05 / AURA</div>
          <div className="aura-intro-grid">
            <div>
              <p className="eyebrow">MEET AURA</p>
              <div className="aura-signature" aria-label="AURA signature mark">
                <img src="/images/aura-signal-logo.png" alt="" />
                <span>AURA</span>
              </div>
              <h2 id="aura-title">WHAT IF<br />SOMETHING COULD<br /><em>ACTUALLY LEARN YOU?</em></h2>
            </div>
            <div className="aura-definition">
              <p>AURA is being built as a personal intelligence layer for your skin, hair, routines, and progress.</p>
              <p className="definition-emphasis">Not a one-time scan. Not another generic recommendation. A system designed to get to know you over time.</p>
            </div>
          </div>
        </section>

        <section className="time-scene scene" aria-labelledby="time-title">
          <img className="timeline-art" src="/images/aura-longitudinal-timeline.jpg" alt="A luminous line representing continuity over time" />
          <div className="scene-code">06 / LONGITUDINAL INTELLIGENCE</div>
          <div className="time-title-wrap">
            <p className="eyebrow">A MOMENT / A STORY</p>
            <h2 id="time-title">ONE PHOTO SHOWS<br />A MOMENT.</h2>
            <p className="serif-line">AURA learns the story.</p>
          </div>
          <p className="timeline-summary">Every observation can contribute to an evolving understanding of you.</p>
        </section>

        <DigitalTwinSection />

        <section className="workflow-scene scene" id="how-it-works" aria-labelledby="workflow-title">
          <div className="scene-code">08 / HOW AURA WORKS</div>
          <div className="workflow-intro">
            <p className="eyebrow">ONE CONTINUOUS SYSTEM</p>
            <h2 id="workflow-title">THE LOOP<br />LEARNS <em>WITH YOU.</em></h2>
          </div>
          <ol className="workflow-track">
            {workflow.map(([number, title, description]) => (
              <li key={number}>
                <span className="workflow-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="difference-scene" aria-labelledby="difference-title">
          <div className="difference-side old-way">
            <p className="scene-code">09 / THE OLD WAY</p>
            <p className="side-label">THE OLD WAY</p>
            <ul><li>Search</li><li>Scroll</li><li>Buy</li><li>Try</li><li>Guess</li></ul>
          </div>
          <div className="difference-side aura-way">
            <p className="side-label">AURA</p>
            <ul><li>Observe</li><li>Understand</li><li>Personalize</li><li>Measure</li><li>Learn</li></ul>
          </div>
          <div className="difference-question">
            <p>Don&apos;t just ask: <span>what should I use?</span></p>
            <h2 id="difference-title">ASK: WHAT IS<br />HAPPENING TO <em>ME?</em></h2>
          </div>
        </section>

        <section className="capabilities-scene scene" aria-labelledby="capabilities-title">
          <div className="scene-code">10 / WHAT AURA WILL UNDERSTAND</div>
          <div className="capabilities-heading">
            <h2 id="capabilities-title">WHAT AURA<br />IS <em>LISTENING FOR.</em></h2>
            <p>AURA is being built to make your own observations easier to follow, across the things that shape how you feel.</p>
          </div>
          <div className="capability-list">
            {capabilities.map(([title, description], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className="medical-note">AURA is not a medical diagnosis tool. It is being designed to help you understand what you observe.</p>
        </section>

        <section className="trust-scene" aria-labelledby="trust-title">
          <div>
            <p className="scene-code dark-code">11 / TRUST</p>
            <h2 id="trust-title">INTELLIGENCE<br />BEFORE <em>COMMERCE.</em></h2>
          </div>
          <div className="trust-copy">
            <p>AURA is being built to help you understand your choices—not simply sell you more of them.</p>
            <ul><li>Evidence</li><li>Transparency</li><li>Personalization</li><li>Privacy</li><li>User control</li><li>Responsible AI</li></ul>
          </div>
        </section>

        <section className="future-scene scene" aria-labelledby="future-title">
          <div className="scene-code">12 / THE FUTURE</div>
          <p className="eyebrow">A LONGER VIEW</p>
          <h2 id="future-title"><span>SKIN</span><i>↓</i><span>HAIR</span><i>↓</i><span>ROUTINES</span><i>↓</i><span>LIFESTYLE</span><i>↓</i><span>WELLNESS</span></h2>
          <p className="future-statement">Start with what you can see.<br />Build toward what you can understand.</p>
        </section>

        <section className="final-scene scene" id="waitlist" aria-labelledby="final-title">
          <div className="final-sweep final-sweep-one" aria-hidden="true" />
          <div className="final-sweep final-sweep-two" aria-hidden="true" />
          <div className="final-corner final-corner-top" aria-hidden="true" />
          <div className="final-corner final-corner-bottom" aria-hidden="true" />
          <div className="final-content">
            <div className="final-meta"><span>13 / COMING SOON</span><span>EARLY ACCESS / 2026</span></div>
            <p className="eyebrow">AURA IS BEING BUILT</p>
            <h2 id="final-title">THE NEXT VERSION<br />OF YOU <em>IS LISTENING.</em></h2>
            <p className="final-subtitle">More context. Less guessing. One continuous story.</p>
            <div className="final-action-row">
              <Button className="waitlist-button" onClick={() => setWaitlistOpen(true)}>
                Join the waitlist <ArrowUpRight size={18} aria-hidden="true" />
              </Button>
              <span>OPENING SIGNALS<br />EARLY MEMBERS</span>
            </div>
          </div>
          <div className="final-portal" aria-hidden="true">
            <div className="portal-ring portal-ring-one" />
            <div className="portal-ring portal-ring-two" />
            <div className="portal-core"><img src="/images/aura-signal-logo.png" alt="" /></div>
            <p>AURA / SIGNAL ACTIVE</p>
          </div>
          <div className="footer-mark"><img src="/images/aura-signal-logo.png" alt="" /> AURA / 2026</div>
        </section>
      </main>

      {waitlistOpen && (
        <div className="waitlist-overlay" role="dialog" aria-modal="true" aria-labelledby="waitlist-title">
          <div 
            className="waitlist-dialog" 
            style={{ 
              backgroundImage: 'url(/images/image5.jpeg)', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              color: '#f3f0e8',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div className="absolute inset-0 bg-black/40 pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true" />
            
            <button className="dialog-close" type="button" style={{ color: '#f3f0e8', zIndex: 10 }} onClick={() => setWaitlistOpen(false)} aria-label="Close waitlist notice"><X size={20} /></button>
            <img src="/images/aura-signal-logo.png" alt="" className="brightness-0 invert relative" style={{ zIndex: 10, alignSelf: 'flex-start' }} />
            <p className="scene-code relative" style={{ color: 'rgba(243, 240, 232, 0.7)', zIndex: 10 }}>WAITLIST / COMING SOON</p>
            <h2 id="waitlist-title" className="relative" style={{ zIndex: 10 }}>THE FIRST<br />SIGNAL IS<br /><em>ALMOST HERE.</em></h2>
            <p className="relative" style={{ color: '#f3f0e8', zIndex: 10, flexGrow: 1 }}>AURA is in private build. Public waitlist access will open as the experience takes shape.</p>
            <div className="relative mt-auto" style={{ zIndex: 10 }}>
              <Button onClick={() => setWaitlistOpen(false)} style={{ backgroundColor: '#c8ff00', color: '#11110f' }}>Return to AURA</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

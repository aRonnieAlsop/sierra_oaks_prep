
import { useEffect, useRef, useState } from "react";
import "./App.css";

// =====================================================
// SIERRA OAKS PREPARATORY
// MEDIA IMPORTS
// =====================================================

import photo1 from "./assets/sierraOaks1.jpg";
import photo3 from "./assets/sierraOaks3.JPEG";
import photo4 from "./assets/sierraOaks4.JPEG";
import photo5 from "./assets/sierraOaks5.JPEG";
import photo6 from "./assets/sierraOaks6.JPEG";
import photo8 from "./assets/sierraOaks8.JPEG";
import photo10 from "./assets/sierraOaks10.JPEG";

import movie2 from "./assets/sierraOaksMovie2.MOV";
import movie7 from "./assets/sierraOaksMovie7.MOV";
import movie9 from "./assets/sierraOaksMovie9.MOV";
import movie10 from "./assets/sierraOaksMovie10.MOV";
import movie11 from "./assets/sierraOaksMovie11.MOV";

// =====================================================
// MEDIA LIBRARY
// Images and videos alternate.
// No two videos appear next to one another.
// =====================================================

const media = [
  {
    src: photo1,
    type: "image",
    label: "Learning and discovery",
  },
  {
    src: movie2,
    type: "video",
    label: "Movement and discipline",
  },
  {
    src: photo3,
    type: "image",
    label: "Exploration",
  },
  {
    src: movie7,
    type: "video",
    label: "Skating practice",
  },
  {
    src: photo4,
    type: "image",
    label: "Creative practice",
  },
  {
    src: movie9,
    type: "video",
    label: "Artistry in motion",
  },
  {
    src: photo5,
    type: "image",
    label: "Learning in practice",
  },
  {
    src: movie10,
    type: "video",
    label: "Practice and perseverance",
  },
  {
    src: photo6,
    type: "image",
    label: "Everyday discoveries",
  },
  {
    src: movie11,
    type: "video",
    label: "The learning journey",
  },
  {
    src: photo8,
    type: "image",
    label: "Experiential learning",
  },
  {
    src: photo10,
    type: "image",
    label: "Curiosity",
  },
];

// =====================================================
// OPENING FILM SEQUENCE
// =====================================================

const scenes = [
  {
    mediaIndex: 0,
    label: "01 / CURIOSITY",
    title: "Learning how to learn.",
    description:
      "A school shaped by curiosity, grounded in purpose.",
  },
  {
    mediaIndex: 1,
    label: "02 / DISCIPLINE",
    title: "Progress at your own pace.",
    description:
      "Time to master what challenges us. Room to advance where we thrive.",
  },
  {
    mediaIndex: 2,
    label: "03 / DISCOVERY",
    title: "Follow the questions.",
    description:
      "An education that makes room for interests, imagination, and inquiry.",
  },
  {
    mediaIndex: 3,
    label: "04 / MOVEMENT",
    title: "Learning in motion.",
    description:
      "Where physical discipline and artistic expression meet.",
  },
  {
    mediaIndex: 4,
    label: "05 / CREATIVITY",
    title: "The freedom to explore.",
    description:
      "Creative pursuits invite new ways of thinking.",
  },
  {
    mediaIndex: 5,
    label: "06 / EXPRESSION",
    title: "Artistry in motion.",
    description:
      "Learning through movement, practice, and expression.",
  },
  {
    mediaIndex: 6,
    label: "07 / EXPLORATION",
    title: "Discover something new.",
    description:
      "Everyday experiences become opportunities for learning.",
  },
  {
    mediaIndex: 7,
    label: "08 / PERSEVERANCE",
    title: "The value of practice.",
    description:
      "Confidence grows through dedication and discovery.",
  },
  {
    mediaIndex: 8,
    label: "09 / WONDER",
    title: "A world worth exploring.",
    description:
      "Curiosity connects learning to the world around us.",
  },
  {
    mediaIndex: 9,
    label: "10 / POSSIBILITY",
    title: "Always becoming.",
    description:
      "Learning is a journey shaped by experience.",
  },
  {
    mediaIndex: 10,
    label: "11 / EXPERIENCE",
    title: "Beyond the classroom.",
    description:
      "Meaningful learning happens wherever curiosity leads.",
  },
  {
    mediaIndex: 11,
    label: "12 / CURIOSITY",
    title: "Curiosity over convention.",
    description:
      "An individualized education grounded in meaningful discovery.",
  },
];

// =====================================================
// SHARED FILM MEDIA COMPONENT
// =====================================================

function FilmMedia({
  item,
  className = "",
  autoPlay = true,
}) {
  if (!item) return null;

  return (
    <div className={`film-frame ${className}`}>
      {item.type === "video" ? (
        <video
          src={item.src}
          autoPlay={autoPlay}
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <img
          src={item.src}
          alt={item.label}
          loading="eager"
        />
      )}

      <div
        className="film-grain"
        aria-hidden="true"
      />
    </div>
  );
}


function CinematicHero() {
  const [activeScene, setActiveScene] = useState(0);
  const [sliding, setSliding] = useState(false);
  const slidingRef = useRef(false);

  const SLIDE_DURATION = 1100;
  const SCENE_DURATION = 7500;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      slidingRef.current = true;
      setSliding(true);
    }, SCENE_DURATION);

    return () => window.clearTimeout(timer);
  }, [activeScene]);

  useEffect(() => {
    if (!sliding) return;

    const timer = window.setTimeout(() => {
      setActiveScene(
        (current) => (current + 1) % scenes.length
      );
      slidingRef.current = false;
      setSliding(false);
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timer);
  }, [sliding]);

  const nextIndex = (activeScene + 1) % scenes.length;
  const afterNextIndex = (activeScene + 2) % scenes.length;

  const scene = scenes[activeScene];

  const advanceTo = (index) => {
    if (slidingRef.current) return;
    setActiveScene(index);
    setSliding(false);
  };

  return (
    <>
      <header className="site-header">
        <div className="site-wordmark">
          Sierra Oaks Preparatory
        </div>
      </header>

      <section
        className="hero"
        aria-label="Sierra Oaks film sequence"
      >
        <div
          className="hero-stage"
          style={{
            display: "block",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="hero-filmstrip"
            style={{
              display: "flex",
              width: "175%",
              height: "100%",
              gap: "0.7%",
              transform: sliding
                ? "translateX(-42.86%)"
                : "translateX(0)",
              transition: sliding
                ? `transform ${SLIDE_DURATION}ms cubic-bezier(0.76, 0, 0.24, 1)`
                : "none",
              willChange: "transform",
            }}
          >
            {[activeScene, nextIndex, afterNextIndex].map(
              (index) => (
                <div
                  key={index}
                  style={{
                    flex: "0 0 42.3%",
                    minWidth: 0,
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: "9px",
                  }}
                >
                  <FilmMedia
                    item={media[scenes[index].mediaIndex]}
                    className="hero-panel"
                  />
                </div>
              )
            )}
          </div>
        </div>

        <div className="hero-caption">
          <div className="scene-copy">
            <div className="scene-number">
              {scene.label}
            </div>

            <h1 className="hero-title">
              {scene.title}
            </h1>

            <p className="hero-description">
              {scene.description}
            </p>
          </div>

          <div
            className="scene-progress"
            aria-label="Film scenes"
          >
            {scenes.map((item, index) => (
              <button
                key={item.label}
                type="button"
                className={`scene-progress-item ${
                  index === activeScene
                    ? "is-active"
                    : ""
                }`}
                aria-label={`Show scene ${index + 1}`}
                onClick={() => advanceTo(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


// =====================================================
// EDUCATIONAL PHILOSOPHY
// =====================================================

function Philosophy() {
  return (
    <section className="section section--narrow">
      <div className="section-inner">
        <div className="section-label">
          Our Educational Philosophy
        </div>

        <h2 className="section-heading">
          An education beyond the classroom.
        </h2>

        <div className="section-text">
          <p>
            At Sierra Oaks Preparatory, education
            begins with curiosity. We believe
            meaningful learning happens when
            strong academic foundations meet
            the freedom to explore individual
            interests, develop new skills, and
            pursue questions worth asking.
          </p>

          <p>
            Our individualized approach allows
            students to progress according to
            their understanding rather than a
            predetermined pace. We take the
            time necessary to build confidence
            where challenges arise, while
            encouraging advancement wherever
            readiness and ability allow.
          </p>

          <p>
            Consistent instruction in mathematics
            and language arts provides a foundation
            for a broader education shaped by
            discovery, creative expression,
            physical discipline, cultural
            understanding, and hands-on experience.
          </p>
        </div>
      </div>
    </section>
  );
}

// =====================================================
// EDUCATIONAL PILLARS
// =====================================================

const pillars = [
  {
    number: "01",
    title: "Academic Foundations",
    description:
      "Mathematics and language arts remain consistent areas of study. Instruction responds to individual strengths and challenges, allowing advancement where understanding is strong and additional attention where needed.",
  },
  {
    number: "02",
    title: "Creative Exploration",
    description:
      "Student interests become opportunities to connect disciplines. Filmmaking, visual storytelling, technology, and creative projects invite inquiry across traditional subject boundaries.",
  },
  {
    number: "03",
    title: "Movement & Discipline",
    description:
      "Figure skating and physical education encourage coordination, artistic expression, resilience, focused practice, and the pursuit of long-term goals.",
  },
  {
    number: "04",
    title: "Language & Culture",
    description:
      "Bilingual learning experiences, fine arts, history, and cultural exploration encourage communication, critical thinking, and an appreciation for diverse perspectives.",
  },
];

function EducationalApproach() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-label">
          The Sierra Oaks Approach
        </div>

        <h2 className="section-heading">
          Curiosity. Discipline. Discovery.
        </h2>

        <div className="pillars">
          {pillars.map((pillar) => (
            <article
              className="pillar"
              key={pillar.number}
            >
              <div className="pillar-number">
                {pillar.number}
              </div>

              <h3 className="pillar-title">
                {pillar.title}
              </h3>

              <p className="pillar-description">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// =====================================================
// EDUCATIONAL LEADERSHIP
// =====================================================

function EducationalLeadership() {
  return (
    <section className="section section--narrow">
      <div className="section-inner">
        <div className="section-label">
          Educational Leadership
        </div>

        <h2 className="section-heading">
          Different disciplines. A shared philosophy.
        </h2>

        <div className="section-text">
          <p>
            Our educational approach draws upon
            backgrounds in behavioral sciences,
            philosophy, technology, fine arts,
            and history, alongside bilingual
            instruction and cultural learning.
          </p>

          <p>
            Together, these perspectives support
            an interdisciplinary environment
            where analytical thinking, creativity,
            and independent inquiry are encouraged.
          </p>
        </div>
      </div>
    </section>
  );
}

// =====================================================
// BOTTOM PHOTO / VIDEO CAROUSEL
// No heading, description, or play indicators.
// =====================================================

function SchoolGallery() {
  const galleryRef = useRef(null);
  const directionRef = useRef(0);
  const frameRef = useRef(null);

  useEffect(() => {
    let lastTime = 0;

    const animate = (time) => {
      const gallery = galleryRef.current;

      if (gallery && directionRef.current !== 0) {
        const elapsed = lastTime
          ? Math.min(time - lastTime, 50)
          : 16;

        gallery.scrollLeft +=
          directionRef.current * elapsed * 0.35;
      }

      lastTime = time;

      frameRef.current =
        window.requestAnimationFrame(animate);
    };

    frameRef.current =
      window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(
          frameRef.current
        );
      }
    };
  }, []);

  const updateDirection = (event) => {
    if (event.pointerType === "touch") {
      directionRef.current = 0;
      return;
    }

    const bounds =
      event.currentTarget.getBoundingClientRect();

    const relativeX =
      (event.clientX - bounds.left) /
      bounds.width;

    if (relativeX < 0.18) {
      directionRef.current = -1;
    } else if (relativeX > 0.82) {
      directionRef.current = 1;
    } else {
      directionRef.current = 0;
    }
  };

  return (
    <section
      className="gallery-section"
      aria-label="Sierra Oaks photo and film gallery"
    >
      <div
        className="gallery-viewport"
        onPointerMove={updateDirection}
        onPointerLeave={() => {
          directionRef.current = 0;
        }}
      >
        <div
          className="gallery-track"
          ref={galleryRef}
        >
          {media.map((item, index) => (
            <div
              className="gallery-item film-frame"
              key={`${item.src}-${index}`}
              style={{
                "--media-ratio":
                  item.type === "video"
                    ? "3 / 4"
                    : "4 / 5",
              }}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onMouseEnter={(event) => {
                    event.currentTarget
                      .play()
                      .catch(() => {});
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.pause();
                  }}
                  onClick={(event) => {
                    const video =
                      event.currentTarget;

                    if (video.paused) {
                      video
                        .play()
                        .catch(() => {});
                    } else {
                      video.pause();
                    }
                  }}
                  aria-label={item.label}
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                />
              )}

              <div
                className="film-grain"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =====================================================
// WEBSITE IN WAITING
// =====================================================

function WebsiteInWaiting() {
  return (
    <section className="waiting-section">
      <div className="waiting-inner">
        <div className="section-label">
          A Note on Our Website
        </div>

        <h2 className="waiting-title">
          A website in waiting.
        </h2>

        <p className="waiting-text">
          In keeping with our interest-led
          approach to education, we have
          chosen to keep our digital presence
          intentionally simple. When student
          curiosity turns toward web development,
          programming, and digital design,
          we look forward to making the
          development of this website part
          of the learning experience itself.
        </p>

        <p className="waiting-closing">
          Until then, we're busy learning elsewhere.
        </p>
      </div>
    </section>
  );
}

// =====================================================
// APP
// =====================================================

export default function App() {
  return (
    <main className="site">
      <CinematicHero />

      <Philosophy />

      <hr className="editorial-divider" />

      <EducationalApproach />

      <hr className="editorial-divider" />

      <EducationalLeadership />

      <SchoolGallery />

      <WebsiteInWaiting />

      <footer className="site-footer">
        <div className="footer-text">
          Sierra Oaks Preparatory
        </div>

        <div className="footer-text">
          Independent Private Education · California
        </div>
      </footer>
    </main>
  );
}

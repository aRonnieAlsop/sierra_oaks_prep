
import { useEffect, useRef, useState } from "react";
import "./App.css";

// =====================================================
// SIERRA OAKS PREPARATORY
// Media imports — from src/assets
// =====================================================

import hero from "./assets/hero.png";

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
// =====================================================

const media = [
  { src: hero, type: "image", label: "Sierra Oaks" },
  { src: photo1, type: "image", label: "Learning & discovery" },
  { src: movie2, type: "video", label: "Movement & discipline" },
  { src: photo3, type: "image", label: "Exploration" },
  { src: photo4, type: "image", label: "Creative practice" },
  { src: photo5, type: "image", label: "Learning in practice" },
  { src: photo6, type: "image", label: "Everyday discoveries" },
  { src: movie7, type: "video", label: "Skating practice" },
  { src: photo8, type: "image", label: "Experiential learning" },
  { src: movie9, type: "video", label: "Artistry in motion" },
  { src: photo10, type: "image", label: "Curiosity" },
  { src: movie10, type: "video", label: "Practice & perseverance" },
  { src: movie11, type: "video", label: "The learning journey" },
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
    mediaIndex: 2,
    label: "02 / DISCIPLINE",
    title: "Progress at your own pace.",
    description:
      "Time to master what challenges us. Room to advance where we thrive.",
  },
  {
    mediaIndex: 4,
    label: "03 / DISCOVERY",
    title: "Follow the questions.",
    description:
      "An education that makes room for interests, imagination, and inquiry.",
  },
  {
    mediaIndex: 9,
    label: "04 / EXPRESSION",
    title: "Learning in motion.",
    description:
      "Where artistic expression, physical discipline, and academic curiosity meet.",
  },
  {
    mediaIndex: 12,
    label: "05 / POSSIBILITY",
    title: "Curiosity over convention.",
    description:
      "An individualized education grounded in meaningful discovery.",
  },
];

// =====================================================
// SHARED MEDIA COMPONENT
// =====================================================

function FilmMedia({
  item,
  className = "",
  autoPlay = true,
  controls = false,
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
          controls={controls}
          preload="metadata"
        />
      ) : (
        <img src={item.src} alt={item.label} loading="lazy" />
      )}
      <div className="film-grain" aria-hidden="true" />
    </div>
  );
}

// =====================================================
// HERO
// =====================================================

function CinematicHero() {
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveScene((current) => (current + 1) % scenes.length);
    }, 7500);

    return () => window.clearInterval(interval);
  }, []);

  const scene = scenes[activeScene];
  const nextScene = scenes[(activeScene + 1) % scenes.length];

  return (
    <>
      <header className="site-header">
        <div className="site-wordmark">
          Sierra Oaks Preparatory
        </div>
      </header>

      <section className="hero" aria-label="Sierra Oaks film sequence">
        <div className="hero-stage" key={activeScene}>
          <FilmMedia
            item={media[scene.mediaIndex]}
            className="hero-panel hero-panel--main"
          />

          <FilmMedia
            item={media[nextScene.mediaIndex]}
            className="hero-panel hero-panel--preview"
          />
        </div>

        <div className="hero-caption">
          <div className="scene-copy" key={activeScene}>
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

          <div className="scene-progress" aria-label="Film scenes">
            {scenes.map((item, index) => (
              <button
                key={item.label}
                type="button"
                className={`scene-progress-item ${
                  index === activeScene ? "is-active" : ""
                }`}
                aria-label={`Show scene ${index + 1}`}
                aria-current={index === activeScene ? "step" : undefined}
                onClick={() => setActiveScene(index)}
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
            At Sierra Oaks Preparatory, education begins with
            curiosity. We believe meaningful learning happens
            when strong academic foundations meet the freedom
            to explore individual interests, develop new
            skills, and pursue questions worth asking.
          </p>

          <p>
            Our individualized approach allows students to
            progress according to their understanding rather
            than a predetermined pace. We take the time
            necessary to build confidence where challenges
            arise, while encouraging advancement wherever
            readiness and ability allow.
          </p>

          <p>
            Consistent instruction in mathematics and language
            arts provides a foundation for a broader education
            shaped by discovery, creative expression, physical
            discipline, cultural understanding, and hands-on
            experience.
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
            <article className="pillar" key={pillar.number}>
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
            Our educational approach draws upon backgrounds
            in behavioral sciences, philosophy, technology,
            fine arts, and history, alongside bilingual
            instruction and cultural learning.
          </p>

          <p>
            Together, these perspectives support an
            interdisciplinary environment where analytical
            thinking, creativity, and independent inquiry
            are encouraged.
          </p>
        </div>
      </div>
    </section>
  );
}

// =====================================================
// MIXED PHOTO / VIDEO GALLERY
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
        const elapsed = lastTime ? Math.min(time - lastTime, 50) : 16;
        gallery.scrollLeft += directionRef.current * elapsed * 0.35;
      }

      lastTime = time;
      frameRef.current = window.requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const updateDirection = (event) => {
    if (event.pointerType === "touch") {
      directionRef.current = 0;
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;

    if (relativeX < 0.18) {
      directionRef.current = -1;
    } else if (relativeX > 0.82) {
      directionRef.current = 1;
    } else {
      directionRef.current = 0;
    }
  };

  return (
    <section className="gallery-section">
      <div className="gallery-heading">
        <div className="section-label">
          Life at Sierra Oaks
        </div>

        <h2 className="section-heading">
          Learning in practice.
        </h2>

        <p className="section-text">
          A collection of moments from the experiences,
          explorations, and creative pursuits that shape
          our days.
        </p>
      </div>

      <div
        className="gallery-viewport"
        onPointerMove={updateDirection}
        onPointerLeave={() => {
          directionRef.current = 0;
        }}
      >
        <div className="gallery-track" ref={galleryRef}>
          {media.map((item, index) => (
            <div
              className="gallery-item film-frame"
              key={`${item.src}-${index}`}
              style={{
                "--media-ratio":
                  item.type === "video" ? "3 / 4" : "4 / 5",
              }}
            >
              {item.type === "video" ? (
                <>
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(event) => {
                      event.currentTarget.play().catch(() => {});
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.pause();
                    }}
                    onClick={(event) => {
                      const video = event.currentTarget;

                      if (video.paused) {
                        video.play().catch(() => {});
                      } else {
                        video.pause();
                      }
                    }}
                    aria-label={item.label}
                  />

                  <div className="video-indicator">
                    ▶ FILM
                  </div>
                </>
              ) : (
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                />
              )}

              <div className="film-grain" aria-hidden="true" />
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
          In keeping with our interest-led approach to
          education, we have chosen to keep our digital
          presence intentionally simple. When student
          curiosity turns toward web development,
          programming, and digital design, we look forward
          to making the development of this website part
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

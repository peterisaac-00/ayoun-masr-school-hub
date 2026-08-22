import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Phone, ShieldCheck, Users, Sprout } from "lucide-react";

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
      { title: "Ayoun Masr School | Empowering Minds, Shaping Futures" },
      {
        name: "description",
        content:
          "Ayoun Masr School combines academic excellence, character building and community engagement for every student.",
      },
      { property: "og:title", content: "Ayoun Masr School | Empowering Minds, Shaping Futures" },
      {
        property: "og:description",
        content:
          "Academic excellence, character building and community engagement at Ayoun Masr School.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  { icon: BookOpen, label: "Academic Excellence" },
  { icon: ShieldCheck, label: "Character Building" },
  { icon: Users, label: "Community Engagement" },
  { icon: Sprout, label: "Student Wellbeing" },
];

const gallery = [g1, g2, g3, g4, g5, g6];

function Home() {
  return (
    <div className="min-h-screen bg-card font-sans">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-bold lg:flex">
            <a href="#home" className="border-b-2 border-gold pb-1 text-brand">
              Home
            </a>
            <a href="#about" className="text-foreground/80 hover:text-brand">
              About
            </a>
            <a href="#activities" className="text-foreground/80 hover:text-brand">
              Activities
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-brand">
              Contact
            </a>
          </nav>
          <Link
            to="/login"
            className="rounded-full bg-brand px-8 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
          >
            Login
          </Link>
        </div>
      </header>

      <section id="home" className="relative">
        <img
          src={hero}
          alt="Students of Ayoun Masr School in class, in the science lab, in art class, on the football field and on stage"
          width={1920}
          height={620}
          className="h-[340px] w-full object-cover md:h-[420px]"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-brand-dark/45 px-6">
          <h1 className="max-w-3xl text-center text-3xl font-extrabold leading-tight text-white drop-shadow md:text-5xl">
            Empowering Minds, Shaping Futures:
            <br />
            Ayoun Masr School Vision.
          </h1>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-start">
          <div>
            <h2 className="text-2xl font-extrabold text-foreground">About the school</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Ayoun Masr is a modern Egyptian school where curiosity is nurtured and every learner
              is supported. Our teachers combine a strong national curriculum with creative
              projects, sports and the arts, so students grow academically and personally. We build
              character, encourage responsibility, and keep families close to the learning journey.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {pillars.map(({ icon: Icon, label }) => (
              <div key={label} className="text-center">
                <Icon className="mx-auto h-7 w-7 text-foreground" strokeWidth={1.6} />
                <div className="mt-2 text-sm font-bold leading-tight text-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-5 rounded-xl border-r-4 border-gold bg-brand-soft/70 p-5 md:flex-row">
          <img
            src={principal}
            alt="Principal of Ayoun Masr School"
            loading="lazy"
            width={640}
            height={640}
            className="h-28 w-28 shrink-0 rounded-lg border-2 border-gold object-cover"
          />
          <blockquote className="text-base font-semibold leading-relaxed text-foreground">
            "Welcome to <span className="text-brand">Ayoun Masr</span>, where we foster a{" "}
            <span className="text-brand">supportive and inspiring learning environment</span> for
            every student. Let's achieve greatness together."
            <footer className="mt-2 text-sm font-bold text-muted-foreground">
              — Ahmed Mohamed, Principal
            </footer>
          </blockquote>
        </div>
      </section>

      <section id="activities" className="mx-auto max-w-6xl px-6 pb-12">
        <h2 className="text-center text-2xl font-extrabold text-foreground">
          Activities and Events Gallery
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-6">
          {gallery.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Ayoun Masr school activity ${i + 1}`}
              loading="lazy"
              width={640}
              height={512}
              className="h-28 w-full rounded-lg border border-border object-cover"
            />
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-8 md:grid-cols-[1fr_1.6fr] md:items-start">
          <div>
            <h2 className="text-2xl font-extrabold text-foreground">Contact and Location</h2>
            <div className="mt-4 space-y-3">
              {["003-223 2399", "082-253 5678"].map((phone) => (
                <div key={phone} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand">
                    <Phone className="h-4 w-4 text-white" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">{phone}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={mapImg}
            alt="Map showing the location of Ayoun Masr School in Egypt"
            loading="lazy"
            width={1280}
            height={640}
            className="h-48 w-full rounded-lg border border-border object-cover md:h-56"
          />
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-muted-foreground">
          © 2025 Ayoun Masr School. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

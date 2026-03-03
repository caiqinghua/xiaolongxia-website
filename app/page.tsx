import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    quote:
      "Setup @openclaw by @steipete yesterday. All I have to say is, wow.",
    author: "@jonahships_",
  },
  {
    quote:
      "Persistent memory, persona onboarding, comms integration, heartbeats. End result is AWESOME.",
    author: "@AryehDubois",
  },
  {
    quote:
      "The first time I have felt like I am living in the future since the launch of ChatGPT.",
    author: "@davemorin",
  },
  {
    quote:
      "Autonomous Claude Code loops from my phone. Fix tests via Telegram and get progress updates.",
    author: "@mirthtime",
  },
];

const ctaLinks = [
  { label: "GitHub", href: "https://github.com/openclaw/openclaw" },
  { label: "Documentation", href: "https://github.com/openclaw/openclaw#readme" },
  { label: "Showcase", href: "https://openclaw.ai/showcase" },
  { label: "ClawHub", href: "https://clawhub.ai" },
];

const sponsors = ["OpenAI", "Vercel", "Blacksmith", "Convex"];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050810] text-[#ecf5ff]">
      <div className="pointer-events-none absolute inset-0 starfield" />
      <div className="pointer-events-none absolute inset-0 nebula-glow" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:py-14">
        <header className="space-y-7 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-4xl shadow-[0_0_80px_rgba(0,229,204,0.25)]">
            🦞
          </div>
          <div className="space-y-3">
            <h1 className="font-display text-5xl leading-none tracking-tight sm:text-7xl">
              OpenClaw
            </h1>
            <p className="text-xl font-medium text-[#00e5cc] sm:text-2xl">
              The AI that actually does things.
            </p>
          </div>
          <p className="mx-auto max-w-3xl text-balance text-base text-[#c4d3e6] sm:text-lg">
            Clears your inbox, sends emails, manages your calendar, checks you
            in for flights. All from WhatsApp, Telegram, or any chat app you
            already use.
          </p>
        </header>

        <a
          className="group"
          href="https://openclaw.ai/blog/virustotal-partnership"
          target="_blank"
          rel="noreferrer"
        >
          <Card className="border-[#1d2d40] bg-[#0c1320]/80 backdrop-blur transition hover:border-[#00e5cc]/60">
            <CardContent className="flex items-center gap-4 p-4 sm:p-5">
              <Badge className="bg-[#ff5b6f] text-white">New</Badge>
              <span className="flex-1 text-sm sm:text-base">
                OpenClaw Partners with VirusTotal for Skill Security
              </span>
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </CardContent>
          </Card>
        </a>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl sm:text-3xl">What People Say</h2>
            <a
              href="https://openclaw.ai/shoutouts"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[#94b6d6] hover:text-[#00e5cc]"
            >
              View all
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((item) => (
              <Card
                key={item.author}
                className="border-[#1c2a3a] bg-[#0a111d]/85 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
              >
                <CardContent className="space-y-3 p-5">
                  <p className="text-sm text-[#d7e4f2]">{item.quote}</p>
                  <p className="text-xs text-[#00e5cc]">{item.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ctaLinks.map((item) => (
            <Button
              key={item.label}
              asChild
              variant="outline"
              className="h-auto justify-start border-[#29445f] bg-[#0a121f] py-4 text-left text-[#d8e7f8] hover:bg-[#122137] hover:text-white"
            >
              <a href={item.href} target="_blank" rel="noreferrer">
                <span className="font-medium">{item.label}</span>
              </a>
            </Button>
          ))}
        </section>

        <section className="rounded-2xl border border-[#1f3550] bg-[#0a1322]/80 p-5 backdrop-blur sm:p-7">
          <div className="mb-4 flex items-center gap-2 text-[#00e5cc]">
            <Sparkles className="size-4" />
            <h2 className="font-display text-2xl text-white">Stay in the Loop</h2>
          </div>
          <p className="mb-5 text-sm text-[#b5c9de]">
            Get updates on new features, integrations, and lobster wisdom.
          </p>
          <form className="flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="your@email.com"
              className="border-[#2a4362] bg-[#0a111b] text-white placeholder:text-[#6f8cae]"
            />
            <Button className="bg-[#00e5cc] text-[#022627] hover:bg-[#22f4de]">
              Subscribe
            </Button>
          </form>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Star className="size-4 text-[#ff7a8f]" />
            <h2 className="font-display text-2xl">Sponsors</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sponsors.map((sponsor) => (
              <Card
                key={sponsor}
                className="border-[#243955] bg-[#0b1624] py-6 text-center text-lg font-semibold tracking-wide text-[#d9e9fb]"
              >
                {sponsor}
              </Card>
            ))}
          </div>
        </section>

        <Separator className="bg-[#203449]" />

        <footer className="space-y-3 pb-2 text-center text-sm text-[#8ba7c5]">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="https://openclaw.ai/blog" target="_blank" rel="noreferrer">
              Blog
            </a>
            <a
              href="https://openclaw.ai/showcase"
              target="_blank"
              rel="noreferrer"
            >
              Showcase
            </a>
            <a
              href="https://openclaw.ai/integrations"
              target="_blank"
              rel="noreferrer"
            >
              Integrations
            </a>
            <a href="https://trust.openclaw.ai/" target="_blank" rel="noreferrer">
              Trust
            </a>
          </div>
          <p>Built by xlongxia, a space lobster AI, by caiqinghua & community.</p>
        </footer>
      </div>
    </main>
  );
}

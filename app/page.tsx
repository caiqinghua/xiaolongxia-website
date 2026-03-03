"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

type Locale = "zh" | "en";

const copy = {
  zh: {
    brand: "小龙虾（OpenClaw）",
    slogan: "真正能把事情做完的 AI 助手。",
    description:
      "帮你清邮箱、发邮件、管日程、处理待办。你只需要在常用聊天工具里发一句话，小龙虾就会在后台执行。",
    latest: "查看小龙虾文档：安装、配置与技能开发指南",
    latestBadge: "最新",
    testimonialsTitle: "用户反馈",
    viewMore: "查看更多",
    ctas: [
      { label: "官网", href: "https://xiaolongxia.org" },
      { label: "文档", href: "https://docs.xiaolongxia.org" },
      { label: "GitHub", href: "https://github.com/openclaw/openclaw" },
      { label: "下载技能", href: "https://clawhub.ai" },
    ],
    communityTitle: "openclaw 中文社区",
    communityDesc: "加入社区讨论、分享实践经验、同步版本更新。",
    communityActions: [
      { label: "进入中文社区", href: "https://docs.xiaolongxia.org" },
      { label: "查看本地部署", href: "https://docs.xiaolongxia.org" },
      { label: "部署指南", href: "https://docs.xiaolongxia.org" },
    ],
    newsletterTitle: "订阅更新",
    newsletterDesc: "获取新功能、集成能力和技能生态的最新动态。",
    newsletterPlaceholder: "请输入你的邮箱",
    newsletterButton: "立即订阅",
    sponsorsTitle: "赞助方",
    footer: ["官网", "文档", "GitHub", "帮助中心"],
    footerLine: "由 xlongxia 构建的小龙虾个人 AI 助手，联合 caiqinghua 与社区共建。",
  },
  en: {
    brand: "OpenClaw",
    slogan: "The AI assistant that actually gets things done.",
    description:
      "Clear inboxes, send emails, manage calendars, and handle recurring tasks. Just message it in your chat app and Xiaolongxia executes in the background.",
    latest: "Read the docs: installation, configuration, and skill development",
    latestBadge: "New",
    testimonialsTitle: "What People Say",
    viewMore: "View all",
    ctas: [
      { label: "Website", href: "https://xiaolongxia.org" },
      { label: "Docs", href: "https://docs.xiaolongxia.org" },
      { label: "GitHub", href: "https://github.com/openclaw/openclaw" },
      { label: "Skills", href: "https://clawhub.ai" },
    ],
    communityTitle: "openclaw Chinese Community",
    communityDesc:
      "Join discussions, share real workflows, and follow release updates.",
    communityActions: [
      { label: "Chinese Community", href: "https://docs.xiaolongxia.org" },
      { label: "Local Deployment", href: "https://docs.xiaolongxia.org" },
      { label: "Deployment Guide", href: "https://docs.xiaolongxia.org" },
    ],
    newsletterTitle: "Stay in the Loop",
    newsletterDesc: "Get updates on new features, integrations, and skills.",
    newsletterPlaceholder: "Enter your email",
    newsletterButton: "Subscribe",
    sponsorsTitle: "Sponsors",
    footer: ["Website", "Docs", "GitHub", "Help Center"],
    footerLine:
      "Built by xlongxia, co-created with caiqinghua and the community.",
  },
} satisfies Record<Locale, any>;

const testimonials = {
  zh: [
    "昨天刚把小龙虾接入工作流，第一感觉就是：这也太能干了。",
    "持续记忆、角色初始化、通讯集成、心跳任务全都打通，整体体验非常强。",
    "这是我自 ChatGPT 发布后，第一次真切感到“未来已经来了”。",
    "我直接在手机上发消息，它就能自主跑代码循环、修测试并同步进度。",
  ],
  en: [
    "Set up Xiaolongxia yesterday and immediately felt: wow, this is powerful.",
    "Persistent memory, persona onboarding, integrations, and heartbeats all work together.",
    "First time since ChatGPT launch that I truly felt the future is already here.",
    "I can trigger autonomous coding loops from my phone and get progress updates.",
  ],
} satisfies Record<Locale, string[]>;

const sponsors = ["OpenAI", "Vercel", "Blacksmith", "Convex"];

export default function Home() {
  const [locale, setLocale] = useState<Locale>("zh");
  const t = useMemo(() => copy[locale], [locale]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050810] text-[#ecf5ff]">
      <div className="pointer-events-none absolute inset-0 starfield" />
      <div className="pointer-events-none absolute inset-0 nebula-glow" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:py-14">
        <div className="flex justify-end gap-2">
          <Button
            variant={locale === "zh" ? "default" : "outline"}
            onClick={() => setLocale("zh")}
            className="h-8 px-3"
          >
            中文
          </Button>
          <Button
            variant={locale === "en" ? "default" : "outline"}
            onClick={() => setLocale("en")}
            className="h-8 px-3"
          >
            EN
          </Button>
        </div>

        <header className="space-y-7 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-4xl shadow-[0_0_80px_rgba(0,229,204,0.25)]">
            🦞
          </div>
          <div className="space-y-3">
            <h1 className="font-display text-5xl leading-none tracking-tight sm:text-7xl">
              {t.brand}
            </h1>
            <p className="text-xl font-medium text-[#00e5cc] sm:text-2xl">{t.slogan}</p>
          </div>
          <p className="mx-auto max-w-3xl text-balance text-base text-[#c4d3e6] sm:text-lg">
            {t.description}
          </p>
        </header>

        <a className="group" href="https://docs.xiaolongxia.org" target="_blank" rel="noreferrer">
          <Card className="border-[#1d2d40] bg-[#0c1320]/80 backdrop-blur transition hover:border-[#00e5cc]/60">
            <CardContent className="flex items-center gap-4 p-4 sm:p-5">
              <Badge className="bg-[#ff5b6f] text-white">{t.latestBadge}</Badge>
              <span className="flex-1 text-sm sm:text-base">{t.latest}</span>
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </CardContent>
          </Card>
        </a>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl sm:text-3xl">{t.testimonialsTitle}</h2>
            <a href="https://docs.xiaolongxia.org" target="_blank" rel="noreferrer" className="text-sm text-[#94b6d6] hover:text-[#00e5cc]">
              {t.viewMore}
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials[locale].map((quote, i) => (
              <Card
                key={i}
                className="border-[#1c2a3a] bg-[#0a111d]/85 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
              >
                <CardContent className="space-y-3 p-5">
                  <p className="text-sm text-[#d7e4f2]">{quote}</p>
                  <p className="text-xs text-[#00e5cc]">@community</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.ctas.map((item: { label: string; href: string }) => (
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
            <h2 className="font-display text-2xl text-white">{t.communityTitle}</h2>
          </div>
          <p className="mb-4 text-sm text-[#b5c9de]">{t.communityDesc}</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {t.communityActions.map((item: { label: string; href: string }) => (
              <Button key={item.label} asChild variant="outline" className="border-[#2a4362] bg-[#0a111b]">
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              </Button>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[#1f3550] bg-[#0a1322]/80 p-5 backdrop-blur sm:p-7">
          <div className="mb-4 flex items-center gap-2 text-[#00e5cc]">
            <Sparkles className="size-4" />
            <h2 className="font-display text-2xl text-white">{t.newsletterTitle}</h2>
          </div>
          <p className="mb-5 text-sm text-[#b5c9de]">{t.newsletterDesc}</p>
          <form className="flex flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder={t.newsletterPlaceholder}
              className="border-[#2a4362] bg-[#0a111b] text-white placeholder:text-[#6f8cae]"
            />
            <Button className="bg-[#00e5cc] text-[#022627] hover:bg-[#22f4de]">
              {t.newsletterButton}
            </Button>
          </form>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Star className="size-4 text-[#ff7a8f]" />
            <h2 className="font-display text-2xl">{t.sponsorsTitle}</h2>
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
            <a href="https://xiaolongxia.org" target="_blank" rel="noreferrer">
              {t.footer[0]}
            </a>
            <a href="https://docs.xiaolongxia.org" target="_blank" rel="noreferrer">
              {t.footer[1]}
            </a>
            <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noreferrer">
              {t.footer[2]}
            </a>
            <a href="https://docs.xiaolongxia.org" target="_blank" rel="noreferrer">
              {t.footer[3]}
            </a>
          </div>
          <p>{t.footerLine}</p>
        </footer>
      </div>
    </main>
  );
}

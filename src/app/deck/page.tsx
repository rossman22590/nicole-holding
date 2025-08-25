"use client";

import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";

function useCountUp(target: number, durationMs = 1000) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);
  return val;
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
      {children}
    </div>
  );
}

function CoverPanel() {
  return (
    <div className="w-full max-w-3xl">
      <div className="relative rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 animate-pulse" />
        <div className="relative">
          <div className="text-6xl md:text-7xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">NICOLE</span>
          </div>
          <p className="mt-4 text-xl text-slate-700">The embedded AI layer — private, fast, human.</p>
        </div>
      </div>
    </div>
  );
}

function VisionPanel() {
  const items = [
    { t: "Private", d: "Runs on your devices" },
    { t: "Present", d: "Understands context" },
    { t: "Helpful", d: "Acts across apps" },
  ];
  return (
    <div className="w-full max-w-5xl grid sm:grid-cols-3 gap-4 text-left">
      {items.map((x, i) => (
        <motion.div key={x.t} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }} className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
          <div className="text-lg font-semibold text-slate-900">{x.t}</div>
          <div className="mt-1 text-slate-600">{x.d}</div>
        </motion.div>
      ))}
    </div>
  );
}

function WhyNowPanel() {
  const bars = [
    { t: "NPUs shipping", v: 90 },
    { t: "Latency push", v: 80 },
    { t: "Regulatory", v: 70 },
  ];
  return (
    <div className="w-full max-w-4xl space-y-4 text-left">
      {bars.map((b, i) => (
        <div key={b.t}>
          <div className="text-sm text-slate-600 mb-1">{b.t}</div>
          <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: `${b.v}%` }} transition={{ duration: 0.8, delay: 0.05 * i }} className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
          </div>
        </div>
      ))}
    </div>
  );
}

function ProblemPanel() {
  const left = ["Ephemeral context", "High cost", "Cloud-only availability"];
  const right = ["Persistent memory", "Low latency cost", "Offline-first"];
  return (
    <div className="w-full max-w-5xl grid sm:grid-cols-2 gap-4 text-left">
      <Card>
        <div className="text-lg font-semibold text-slate-900">Cloud-only</div>
        <ul className="mt-2 space-y-2 text-slate-700">
          {left.map((x) => (
            <li key={x} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-500" />{x}</li>
          ))}
        </ul>
      </Card>
      <Card>
        <div className="text-lg font-semibold text-slate-900">On-device</div>
        <ul className="mt-2 space-y-2 text-slate-700">
          {right.map((x) => (
            <li key={x} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />{x}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

function SolutionPanel() {
  const nodes = ["Perception", "Memory", "Planning", "Actions"];
  return (
    <div className="relative w-full max-w-4xl grid grid-cols-2 gap-4 text-left">
      {/* simple connector background */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        <path d="M10 20 L90 20 M10 80 L90 80 M10 20 L10 80 M90 20 L90 80" stroke="#e2e8f0" strokeWidth="1" />
      </svg>
      {nodes.map((n, i) => (
        <motion.div key={n} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }} className="relative rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
          <div className="text-lg font-semibold text-slate-900">{n}</div>
          <div className="mt-1 text-slate-600">Edge-first module</div>
        </motion.div>
      ))}
    </div>
  );
}

function ProductPanel() {
  return (
    <div className="w-full max-w-5xl grid sm:grid-cols-2 gap-4 text-left">
      <Card>
        <div className="text-lg font-semibold text-slate-900">NICOLE App</div>
        <ul className="mt-2 space-y-2 text-slate-700">
          <li className="flex gap-2 items-start"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500"/>Lifetime license</li>
          <li className="flex gap-2 items-start"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500"/>Private on-device</li>
          <li className="flex gap-2 items-start"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500"/>Cross-device sync</li>
        </ul>
      </Card>
      <Card>
        <div className="text-lg font-semibold text-slate-900">OEM SDK</div>
        <ul className="mt-2 space-y-2 text-slate-700">
          <li className="flex gap-2 items-start"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500"/>Drop-in integration</li>
          <li className="flex gap-2 items-start"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500"/>Vendor-agnostic</li>
          <li className="flex gap-2 items-start"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500"/>Admin tools</li>
        </ul>
      </Card>
    </div>
  );
}

function MoatPanel() {
  const items = [
    { t: "On-device", c: "Latency + privacy" },
    { t: "Memory graph", c: "Sticky UX" },
    { t: "Safety layer", c: "Deterministic policy" },
  ];
  return (
    <div className="w-full max-w-5xl grid sm:grid-cols-3 gap-4 text-left">
      {items.map((x, i) => (
        <motion.div key={x.t} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }} className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
          <div className="text-lg font-semibold text-slate-900">{x.t}</div>
          <div className="mt-1 text-slate-600">{x.c}</div>
        </motion.div>
      ))}
    </div>
  );
}

function TechPanel() {
  const layers = [
    { t: "Apps & SDK", c: 24 },
    { t: "Planner", c: 18 },
    { t: "Memory/Safety", c: 14 },
    { t: "Runtime (NPU/GPU)", c: 10 },
  ];
  return (
    <div className="w-full max-w-3xl space-y-3 text-left">
      {layers.map((l, i) => (
        <div key={l.t}>
          <div className="text-sm text-slate-600 mb-1">{l.t}</div>
          <div className="h-8 bg-slate-200 rounded-xl overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: `${l.c}rem` }} transition={{ duration: 0.7, delay: 0.05 * i }} className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
}

function ModelPanel() {
  const items = [
    { t: "Consumer", d: "Lifetime license" },
    { t: "OEM", d: "SDK + support" },
    { t: "Enterprise", d: "Seat pricing" },
  ];
  return (
    <div className="w-full max-w-4xl grid sm:grid-cols-3 gap-4 text-left">
      {items.map((x) => (
        <Card key={x.t}>
          <div className="text-lg font-semibold text-slate-900">{x.t}</div>
          <div className="mt-1 text-slate-600">{x.d}</div>
        </Card>
      ))}
    </div>
  );
}

function TeamPanel() {
  const members = [
    { n: "Nicole", r: "CEO — Product" },
    { n: "Ross", r: "CTO — Edge ML" },
    { n: "Advisors", r: "HCI & Silicon" },
  ];
  return (
    <div className="w-full max-w-5xl grid sm:grid-cols-3 gap-4 text-left">
      {members.map((m, i) => (
        <motion.div key={m.n} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }} className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 mb-3" />
          <div className="text-lg font-semibold text-slate-900">{m.n}</div>
          <div className="text-slate-600">{m.r}</div>
        </motion.div>
      ))}
    </div>
  );
}

function ClosePanel() {
  return (
    <div className="w-full max-w-xl text-center">
      <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-10 shadow-sm">
        <div className="text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">We&#x27;re raising</span>
        </div>
        <p className="mt-3 text-slate-700">Accelerate OEM integrations. Warm intros welcome. Live demo available.</p>
        <div className="mt-6 text-slate-600">invest@nickcall.com</div>
      </div>
    </div>
  );
}

function MarketPanel() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const Donut = ({ label, value, color }: { label: string; value: number; color: string }) => {
    const pct = Math.max(0, Math.min(100, value));
    const C = 2 * Math.PI * 15.915;
    const dash = (pct / 100) * C;
    return (
      <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur shadow-sm">
        <div className="w-40 h-40">
          <svg viewBox="0 0 42 42" className="w-full h-full rotate-[-90deg]">
            <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#e2e8f0" strokeWidth="6" />
            <circle
              cx="21"
              cy="21"
              r="15.915"
              fill="transparent"
              stroke={color}
              strokeWidth="6"
              strokeDasharray={`${C}`}
              strokeDashoffset={mounted ? C - dash : C}
              style={{ transition: "stroke-dashoffset 1000ms ease" }}
            />
          </svg>
        </div>
        <div className="mt-3 text-2xl font-semibold text-slate-900">{label}</div>
        <div className="text-slate-600">{value}% share</div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl grid sm:grid-cols-2 gap-4">
      <Donut label="TAM Coverage" value={68} color="#6366f1" />
      <Donut label="SAM Penetration" value={24} color="#10b981" />
    </div>
  );
}

function EconomicsPanel() {
  const cogs = useCountUp(0.08, 1000);
  const ltv = useCountUp(38, 1000);
  const cac = useCountUp(6, 1000);
  const payback = useCountUp(30, 1000);

  const Card = ({ k, v }: { k: string; v: React.ReactNode }) => (
    <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm text-center">
      <div className="text-sm uppercase tracking-widest text-slate-500">{k}</div>
      <div className="mt-1 text-4xl font-bold text-slate-900">{v}</div>
    </div>
  );

  return (
    <div className="w-full max-w-4xl grid sm:grid-cols-4 gap-4">
      <Card k="COGS/hr" v={`$${cogs.toFixed(2)}`} />
      <Card k="LTV" v={`$${Math.round(ltv)}`} />
      <Card k="CAC" v={`$${Math.round(cac)}`} />
      <Card k="Payback" v={`&lt; ${Math.round(payback)}d`} />
    </div>
  );
}

function RoadmapPanel() {
  const items = [
    { t: "Q3 &#39;25", d: "Wearable SDK beta" },
    { t: "Q4 &#39;25", d: "Home hub integration" },
    { t: "Q1 &#39;26", d: "Enterprise admin suite" },
    { t: "Q2 &#39;26", d: "Auto + XR pilots" },
  ];
  return (
    <div className="w-full max-w-5xl grid md:grid-cols-4 gap-4">
      {items.map((s, idx) => (
        <motion.div
          key={s.t}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * idx, duration: 0.4 }}
          className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600">
            <span className="h-2 w-2 rounded-full bg-indigo-500" /> {s.t}
          </div>
          <div className="mt-3 text-slate-900 font-semibold">{s.d}</div>
        </motion.div>
      ))}
    </div>
  );
}

export default function DeckPage() {
  const slides = useMemo(
    () => [
      {
        k: "cover",
        title: "NICOLE",
        subtitle: "The embedded AI layer",
        sub: "On-device intelligence. Private. Fast. Human.",
      },
      {
        k: "vision",
        title: "Vision",
        subtitle: "Human-centered AI that lives on your devices",
        bullets: [
          "Private, low-latency, context-aware",
          "Cross-device presence and memory",
          "Designed for consumer and enterprise"
        ],
      },
      {
        k: "why-now",
        title: "Why now",
        subtitle: "Edge AI inflection",
        bullets: [
          "NPUs shipping at scale in 2025+",
          "Latency + cost push inference on-device",
          "Regulation favors data sovereignty"
        ],
      },
      {
        k: "problem",
        title: "Problem",
        subtitle: "Cloud-only assistants don&#39;t persist or respect privacy",
        bullets: [
          "Ephemeral context, weak memory",
          "High cost per interaction",
          "Limited offline availability"
        ],
      },
      {
        k: "solution",
        title: "Solution",
        subtitle: "On-device agent platform",
        bullets: [
          "Perception, memory, planning, actions",
          "Edge-first; syncs securely to cloud",
          "Unified SDK across vendors"
        ],
      },
      {
        k: "product",
        title: "Product",
        subtitle: "NICOLE app + OEM SDK",
        bullets: [
          "Consumer app: lifetime license",
          "SDK: drop-in for phones, wearables, home",
          "Admin suite for enterprise"
        ],
      },
      {
        k: "kpis",
        title: "Traction",
        subtitle: "Early signals",
        bullets: [
          "82k MAU, NPS 72",
          "$420k ARR, +28% MoM",
          "24 enterprise pilots"
        ],
      },
      {
        k: "market",
        title: "Market",
        subtitle: "$48B TAM, $9.2B SAM",
        bullets: [
          "Mobile, wearables, home, auto, XR",
          "Consumer + enterprise dual motion"
        ],
      },
      {
        k: "moat",
        title: "Moat",
        subtitle: "On-device architecture + memory graph + safety",
        bullets: [
          "Latency + privacy advantages",
          "Sticky personal memory",
          "Deterministic policy layer"
        ],
      },
      {
        k: "tech",
        title: "Technology",
        subtitle: "Edge-first stack",
        bullets: [
          "Unified planner with multi-modal perception",
          "Vendor-agnostic acceleration (NPU/GPU)",
          "Deterministic safety runtime"
        ],
      },
      {
        k: "model",
        title: "Business model",
        subtitle: "Consumer + OEM + Enterprise",
        bullets: [
          "Lifetime consumer license",
          "OEM SDK licensing + support",
          "Enterprise seat pricing"
        ],
      },
      {
        k: "economics",
        title: "Unit economics",
        subtitle: "Efficient at scale",
        bullets: [
          "COGS ~$0.08/hr",
          "LTV ~$38 | CAC ~$6",
          "<30 day payback"
        ],
      },
      {
        k: "roadmap",
        title: "Roadmap",
        subtitle: "12–18 months",
        bullets: [
          "Wearable SDK beta (Q3 '25)",
          "Home hub integration (Q4 '25)",
          "Enterprise admin (Q1 '26)"
        ],
      },
      {
        k: "team",
        title: "Team",
        subtitle: "Shipped ML at scale",
        bullets: [
          "Nicole — CEO (Product, ex-Apple AI/ML)",
          "Ross — CTO (Edge inference, ex-Google Research)",
          "Advisors across HCI & silicon"
        ],
      },
      {
        k: "close",
        title: "We&#39;re raising",
        subtitle: "Accelerate OEM integrations",
        bullets: [
          "Warm intros welcome",
          "Live demo available",
          "invest@nickcall.com"
        ],
      },
    ],
    []
  );

  const [i, setI] = useState(0);
  const total = slides.length;
  const [playing, setPlaying] = useState(false);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useTransform(mouseX, [0, 1], [-10, 10]);
  const parallaxY = useTransform(mouseY, [0, 1], [-10, 10]);

  const go = useCallback(
    (dir: 1 | -1) => setI((prev) => Math.min(total - 1, Math.max(0, prev + dir))),
    [total]
  );

  // Deep link support (?s=key)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const sp = new URLSearchParams(window.location.search);
    const key = sp.get("s");
    if (key) {
      const idx = slides.findIndex((s) => s.k === key);
      if (idx >= 0) setI(idx);
    }
  }, [slides]);

  // Update query param on slide change
  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    url.searchParams.set("s", slides[i].k);
    window.history.replaceState({}, "", url.toString());
  }, [i, slides]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") go(1);
      if (e.key === "ArrowLeft" || e.key === "PageUp" || e.key === "Backspace") go(-1);
      if (e.key === "Home") setI(0);
      if (e.key === "End") setI(total - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, total]);

  // Autoplay when playing
  useEffect(() => {
    if (!playing) return;
    let id: number;
    const step = () => {
      setI((prev) => (prev < total - 1 ? prev + 1 : 0));
      id = window.setTimeout(step, 3500);
    };
    id = window.setTimeout(step, 3500);
    return () => window.clearTimeout(id);
  }, [playing, total]);

  // Pause autoplay on user interaction
  const userInteract = useCallback(() => {
    if (playing) setPlaying(false);
  }, [playing]);

  const variants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  // Fullscreen helpers
  const toggleFullscreen = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    const doc = document;
    if (!doc.fullscreenElement) {
      el.requestFullscreen?.();
    } else {
      doc.exitFullscreen?.();
    }
  }, []);

  // Share link with current slide
  const share = useCallback(async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied");
    } catch {
      alert(url);
    }
  }, []);

  // Pointer/parallax tracking
  const onMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    mouseX.set(nx);
    mouseY.set(ny);
  };

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      userInteract();
      go(dx < 0 ? 1 : -1);
    }
    touchStartX.current = null;
  };

  // Slide-specific backgrounds
  const bgFor = (key: string) => {
    switch (key) {
      case "cover":
        return "from-slate-50 to-blue-50";
      case "vision":
        return "from-indigo-50 to-purple-50";
      case "kpis":
        return "from-emerald-50 to-teal-50";
      case "tech":
        return "from-blue-50 to-cyan-50";
      default:
        return "from-white to-blue-50";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-900" onMouseMove={onMouseMove}>
      <section className="relative min-h-screen pt-28 pb-12 flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div ref={containerRef} className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          {/* Header / Controls */}
          <div className="flex items-center justify-between mb-6">
            <Link href="/" className="text-sm text-slate-600 hover:text-slate-800">← Home</Link>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50"
                onClick={() => setPlaying((p) => !p)}
              >
                {playing ? "Pause" : "Play"}
              </button>
              <button
                className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50"
                onClick={() => {
                  userInteract();
                  go(-1);
                }}
              >
                Prev
              </button>
              <button
                className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50"
                onClick={() => {
                  userInteract();
                  go(1);
                }}
              >
                Next
              </button>
              <button
                className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50"
                onClick={toggleFullscreen}
              >
                Fullscreen
              </button>
              <button
                className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50"
                onClick={share}
              >
                Share
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-2 w-full bg-white/60 rounded-full overflow-hidden shadow-sm border border-slate-200">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
              style={{ width: `${((i + 1) / total) * 100}%` }}
            />
          </div>

          {/* Slide viewport */}
          <div
            ref={viewportRef}
            className="mt-6 relative aspect-[16/9] w-full rounded-3xl bg-white border border-slate-200 shadow-lg overflow-hidden cursor-pointer"
            onClick={() => {
              userInteract();
              go(1);
            }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${bgFor(slides[i].k)}`} />
            {/* Parallax accents */}
            <motion.div
              className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-indigo-200/40 blur-3xl"
              style={{ x: parallaxX, y: parallaxY }}
            />
            <motion.div
              className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-blue-200/40 blur-3xl"
              style={{ x: parallaxX, y: parallaxY }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[i].k}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                className="relative h-full w-full p-8 sm:p-12 flex flex-col justify-center items-center text-center"
              >
                {slides[i].k !== "cover" && (
                  <>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
                      <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {slides[i].title}
                      </span>
                    </h1>
                    {slides[i].subtitle && (
                      <p className="text-2xl md:text-3xl text-slate-700 max-w-4xl mb-8">
                        {slides[i].subtitle}
                      </p>
                    )}
                  </>
                )}
                {slides[i].k === "cover" ? (
                  <CoverPanel />
                ) : slides[i].k === "vision" ? (
                  <VisionPanel />
                ) : slides[i].k === "why-now" ? (
                  <WhyNowPanel />
                ) : slides[i].k === "problem" ? (
                  <ProblemPanel />
                ) : slides[i].k === "solution" ? (
                  <SolutionPanel />
                ) : slides[i].k === "product" ? (
                  <ProductPanel />
                ) : slides[i].k === "moat" ? (
                  <MoatPanel />
                ) : slides[i].k === "tech" ? (
                  <TechPanel />
                ) : slides[i].k === "model" ? (
                  <ModelPanel />
                ) : slides[i].k === "team" ? (
                  <TeamPanel />
                ) : slides[i].k === "close" ? (
                  <ClosePanel />
                ) : slides[i].k === "kpis" ? (
                  <KpiPanel onInteract={userInteract} />
                ) : slides[i].k === "market" ? (
                  <MarketPanel />
                ) : slides[i].k === "economics" ? (
                  <EconomicsPanel />
                ) : slides[i].k === "roadmap" ? (
                  <RoadmapPanel />
                ) : Array.isArray(slides[i].bullets) ? (
                  <ul className="text-lg md:text-xl text-slate-700 space-y-2 max-w-3xl">
                    {slides[i].bullets!.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-left mx-auto">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </motion.div>
            </AnimatePresence>

            {/* Slide number */}
            <div className="absolute bottom-4 left-4 text-sm text-slate-500 select-none">
              {i + 1} / {total}
            </div>

            {/* Nav buttons */}
            <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
              {Array.from({ length: total }).map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 w-6 rounded-full transition-colors ${
                    idx === i ? "bg-indigo-600" : "bg-slate-300"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    userInteract();
                    setI(idx);
                  }}
                />
              ))}
            </div>

            {/* Left/Right hit areas */}
            <button
              aria-label="Previous slide"
              className="absolute left-0 top-0 h-full w-1/3"
              onClick={(e) => {
                e.stopPropagation();
                userInteract();
                go(-1);
              }}
            />
            <button
              aria-label="Next slide"
              className="absolute right-0 top-0 h-full w-1/3"
              onClick={(e) => {
                e.stopPropagation();
                userInteract();
                go(1);
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function KpiPanel({ onInteract }: { onInteract: () => void }) {
  const mau = useCountUp(82000, 1200);
  const arr = useCountUp(420000, 1200);
  const pilots = useCountUp(24, 900);
  const pathLen = 140; // arbitrary for sparkline animation
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const fmtK = (n: number) => {
    if (n >= 1000) return `${Math.round(n / 1000)}k`;
    return Math.round(n).toString();
  };
  const fmtMoney = (n: number) => {
    if (n >= 1000) return `$${Math.round(n / 1000)}k`;
    return `$${Math.round(n)}`;
  };

  return (
    <div className="w-full max-w-4xl grid sm:grid-cols-3 gap-4 text-left">
      <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
        <div className="text-sm uppercase tracking-widest text-slate-500">MAU</div>
        <div className="mt-1 text-4xl font-bold text-slate-900">{fmtK(mau)}</div>
        <Sparkline animate={mounted} color="#6366f1" />
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
        <div className="text-sm uppercase tracking-widest text-slate-500">ARR</div>
        <div className="mt-1 text-4xl font-bold text-slate-900">{fmtMoney(arr)}</div>
        <Sparkline animate={mounted} color="#10b981" />
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm">
        <div className="text-sm uppercase tracking-widest text-slate-500">Pilots</div>
        <div className="mt-1 text-4xl font-bold text-slate-900">{Math.round(pilots)}</div>
        <Sparkline animate={mounted} color="#8b5cf6" />
      </div>
      <button
        className="sm:col-span-3 mt-2 text-sm text-slate-600 hover:text-slate-800 underline"
        onClick={onInteract}
      >
        Pause autoplay on interact
      </button>
    </div>
  );
}

function Sparkline({ animate, color }: { animate: boolean; color: string }) {
  return (
    <svg viewBox="0 0 120 36" className="w-full h-10 mt-3" aria-hidden>
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity=".4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M2 30 L18 26 L34 28 L50 22 L66 18 L82 12 L98 16 L118 8" fill="none" stroke={color} strokeWidth="2" style={{ strokeDasharray: 160, strokeDashoffset: animate ? 0 : 160, transition: "stroke-dashoffset 1s ease" }} />
      <circle cx="118" cy="8" r="2.5" fill={color} />
    </svg>
  );
}

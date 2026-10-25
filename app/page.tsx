
import Link from "next/link";

const features = [
  {
    icon: "✳",
    title: "Personalized Roadmaps",
    description:
      "Get a learning path designed around your goals, current skills, and daily schedule.",
  },
  {
    icon: "✦",
    title: "Your AI Tutor",
    description:
      "Understand difficult concepts through personalized explanations, examples, and practice.",
  },
  {
    icon: "↗",
    title: "Real-World Projects",
    description:
      "Turn knowledge into practical skills with guided projects and meaningful feedback.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090f] text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-xl font-bold">
            S
          </div>

          <span className="text-xl font-semibold">
            SkillForge <span className="text-violet-400">AI</span>
          </span>
        </a>

        <div className="hidden gap-8 text-sm text-gray-400 md:flex">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-white">
            How it works
          </a>
          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-xl px-3 py-3 text-sm text-gray-300 transition hover:text-white"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="rounded-xl border border-white/15 px-5 py-3 text-sm hover:border-violet-400"
          >
            Create account
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="relative">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            Your personal AI learning mentor
          </div>

          <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Learn any skill.
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Build your future.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
            Go from beginner to confident builder with personalized roadmaps,
            an AI tutor, hands-on practice, and real-world projects.
          </p>

          <div id="get-started" className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/roadmap"
              className="rounded-xl bg-violet-600 px-7 py-4 font-medium transition hover:bg-violet-500"
            >
              Build My Roadmap →
            </Link>

            <a
              href="#features"
              className="rounded-xl border border-white/10 px-7 py-4 text-gray-300 transition hover:bg-white/5"
            >
              Explore Features
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm text-gray-500">
            <span>✓ Personalized learning</span>
            <span>✓ Practical projects</span>
            <span>✓ Your own pace</span>
          </div>
        </div>

        {/* Learning Roadmap Preview */}
        <div className="relative">
          <div className="absolute -inset-5 rounded-3xl bg-violet-500/10 blur-3xl" />

          <div className="relative rounded-3xl border border-white/10 bg-[#11111b] p-6 shadow-2xl sm:p-8">
            <p className="text-xs tracking-widest text-gray-500">
              YOUR LEARNING ROADMAP
            </p>

            <h2 className="mt-3 text-2xl font-semibold">AI Engineer</h2>

            <p className="mt-2 text-sm text-gray-400">
              Your journey, one step at a time.
            </p>

            <div className="mt-7 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Illustrative progress</span>
                <span className="text-violet-300">25%</span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-1/4 rounded-full bg-gradient-to-r from-violet-500 to-blue-400" />
              </div>
            </div>

            <div className="mt-7 space-y-6">
              {[
                {
                  title: "Python Fundamentals",
                  description: "Variables, functions and data structures",
                  status: "Completed",
                },
                {
                  title: "Data Structures & Algorithms",
                  description: "Problem-solving and algorithmic thinking",
                  status: "In progress",
                },
                {
                  title: "Machine Learning",
                  description: "Models, training and evaluation",
                  status: "Upcoming",
                },
                {
                  title: "Build an AI Application",
                  description: "LLMs, APIs and deployment",
                  status: "Upcoming",
                },
              ].map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-sm ${
                      index === 0
                        ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                        : index === 1
                          ? "border-violet-400/30 bg-violet-500/10 text-violet-300"
                          : "border-white/10 bg-white/5 text-gray-500"
                    }`}
                  >
                    {index === 0 ? "✓" : index + 1}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-sm font-medium">{item.title}</h3>

                      <span
                        className={`text-xs ${
                          index === 0
                            ? "text-emerald-400"
                            : index === 1
                              ? "text-violet-300"
                              : "text-gray-500"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-xl border border-violet-400/15 bg-violet-500/[0.06] p-4">
              <p className="text-sm font-medium text-violet-200">
                Your next milestone
              </p>
              <p className="mt-2 text-sm text-gray-400">
                Strengthen your problem-solving skills with practical exercises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t border-white/[0.06] bg-white/[0.015] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
              A smarter way to learn
            </p>

            <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">
              More than lessons.
              <br />
              A system for growth.
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Learn with a clear direction, get help when you need it, and
              demonstrate your skills through practical projects.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-[#101019] p-7 transition hover:-translate-y-1 hover:border-violet-400/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-2xl text-violet-300">
                  {feature.icon}
                </div>

                <p className="mt-6 text-xs text-gray-600">
                  FEATURE 0{index + 1}
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
              Your journey
            </p>

            <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">
              From &quot;I want to learn&quot; to &quot;I built it.&quot;
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Follow a structured journey that connects learning, practice,
              and real-world application.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                number: "01",
                title: "Tell us your goal",
                description:
                  "Choose your skill, starting level, and available study time.",
              },
              {
                number: "02",
                title: "Follow your roadmap",
                description:
                  "Learn concepts, practice skills, and receive personalized feedback.",
              },
              {
                number: "03",
                title: "Build real projects",
                description:
                  "Apply what you learn and demonstrate your progress.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6"
              >
                <span className="text-sm font-semibold text-violet-400">
                  {item.number}
                </span>

                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="border-t border-white/[0.06] bg-white/[0.015] px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
              Simple plans
            </p>

            <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">
              Invest in your next skill.
            </h2>

            <p className="mt-4 text-gray-400">
              Start learning for free. Upgrade when you need more.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-3">
            {[
              {
                name: "Free",
                price: "₹0",
                description: "Explore your next skill.",
                items: ["One roadmap", "Basic AI tutoring", "Progress tracking"],
              },
              {
                name: "Plus",
                price: "₹299",
                description: "Build consistent learning habits.",
                items: ["More AI tutoring", "Personalized practice", "Guided projects"],
              },
              {
                name: "Pro",
                price: "₹699",
                description: "Go deeper into your craft.",
                items: ["Higher usage limits", "Advanced projects", "Detailed feedback"],
              },
            ].map((plan) => (
              <article
                key={plan.name}
                className={`rounded-2xl border p-6 ${
                  plan.name === "Plus"
                    ? "border-violet-400/50 bg-violet-500/[0.08]"
                    : "border-white/10 bg-[#101019]"
                }`}
              >
                {plan.name === "Plus" && (
                  <p className="text-xs font-semibold uppercase tracking-widest text-violet-300">
                    Recommended
                  </p>
                )}

                <h3 className="mt-3 text-xl font-semibold">{plan.name}</h3>

                <p className="mt-2 text-sm text-gray-400">
                  {plan.description}
                </p>

                <p className="mt-6 text-3xl font-semibold">
                  {plan.price}
                  {plan.price !== "₹0" && (
                    <span className="text-sm font-normal text-gray-500">
                      /month
                    </span>
                  )}
                </p>

                <ul className="mt-7 space-y-4">
                  {plan.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-gray-300"
                    >
                      <span className="text-violet-400">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/roadmap"
                  className={`mt-8 flex justify-center rounded-xl px-4 py-3 text-sm font-medium transition ${
                    plan.name === "Plus"
                      ? "bg-violet-600 hover:bg-violet-500"
                      : "border border-white/10 hover:bg-white/5"
                  }`}
                >
                  Get started
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-gray-600">
            Illustrative pricing. Features and billing will be implemented
            before launch.
          </p>
        </div>
      </section>

      {/* Final Call To Action */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-950/70 via-[#171329] to-[#10101a] px-6 py-16 text-center sm:px-12">
          <p className="text-sm font-medium text-violet-300">
            YOUR NEXT CHAPTER STARTS HERE
          </p>

          <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">
            You have the goal.
            <br />
            Let&apos;s build the path.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
            Start with what you know today. Build toward what you want to
            achieve tomorrow.
          </p>

          <Link
            href="/roadmap"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-4 font-medium text-gray-950 transition hover:bg-gray-200"
          >
            Start Your Journey →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <p>
            © 2026 SkillForge AI. Built for curious minds.
          </p>

          <p>Learn with purpose. Build with confidence.</p>
        </div>
      </footer>
    </main>
  );
}


"use client";

import { useState } from "react";
import Link from "next/link";

export default function RoadmapPage() {
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [goal, setGoal] = useState("Get a job");
  const [studyTime, setStudyTime] = useState("2 hours");
  const [timeline, setTimeline] = useState("6 months");
  const [submitted, setSubmitted] = useState(false);
  const [skillError, setSkillError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!skill.trim()) {
      setSkillError("Enter a skill or career to build your roadmap.");
      return;
    }

    setSkillError("");
    setSubmitted(true);
  }

  const totalWeeks = timeline.startsWith("Flexible")
    ? 24
    : Number.parseInt(timeline, 10) * 4;
  const weeksPerPhase = totalWeeks / 4;
  const isExperienced = level === "Intermediate" || level === "Advanced";
  const phases = [
    {
      title: isExperienced ? "Review and fill knowledge gaps" : "Build your foundations",
      description: isExperienced
        ? `Review the core concepts of ${skill} and identify areas to strengthen.`
        : `Learn the essential concepts and tools used in ${skill}.`,
    },
    {
      title: "Develop core skills",
      description: `Practice the most important techniques for ${skill} with focused exercises.`,
    },
    {
      title: "Apply what you learn",
      description: `Work through practical tasks that build confidence using ${skill}.`,
    },
    {
      title: "Work toward your goal",
      description: `Complete a focused project or portfolio piece aligned with your goal: ${goal.toLowerCase()}.`,
    },
  ];

  return (
    <main className="min-h-screen bg-[#080812] px-5 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Navigation */}
        <nav className="mb-12 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            SkillForge <span className="text-violet-400">AI</span>
          </Link>

          <Link
            href="/"
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10"
          >
            ← Back Home
          </Link>
        </nav>

        {/* Heading */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Your learning journey starts here
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Build Your Personalized
            <span className="mt-2 block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Learning Roadmap
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
            Tell us what you want to learn. We will use your goals, current
            level, and available time to personalize your learning journey.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-violet-950/20 sm:p-8"
        >
          <div className="space-y-7">
            {/* Skill */}
            <div>
              <label
                htmlFor="skill"
                className="mb-2 block text-sm font-semibold text-gray-200"
              >
                1. What skill or career do you want to learn?
              </label>

              <input
                id="skill"
                type="text"
                value={skill}
                onChange={(event) => {
                  setSkill(event.target.value);
                  setSubmitted(false);
                  setSkillError("");
                }}
                placeholder="e.g. Web Development, Digital Marketing, Finance..."
                required
                aria-invalid={Boolean(skillError)}
                aria-describedby={skillError ? "skill-error" : undefined}
                className="w-full rounded-xl border border-white/10 bg-[#10101d] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              />

              {skillError && (
                <p id="skill-error" role="alert" className="mt-2 text-sm text-red-400">
                  {skillError}
                </p>
              )}

              <p className="mt-2 text-xs text-gray-500">
                Enter any skill, profession, or job title.
              </p>
            </div>

            {/* Current level */}
            <div>
              <label
                htmlFor="level"
                className="mb-2 block text-sm font-semibold text-gray-200"
              >
                2. What is your current skill level?
              </label>

              <select
                id="level"
                value={level}
                onChange={(event) => setLevel(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#10101d] px-4 py-3 text-sm text-white outline-none focus:border-violet-500"
              >
                <option>Complete Beginner</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>

            {/* Goal */}
            <div>
              <label
                htmlFor="goal"
                className="mb-2 block text-sm font-semibold text-gray-200"
              >
                3. What is your main goal?
              </label>

              <select
                id="goal"
                value={goal}
                onChange={(event) => setGoal(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#10101d] px-4 py-3 text-sm text-white outline-none focus:border-violet-500"
              >
                <option>Get a job</option>
                <option>Switch careers</option>
                <option>Start freelancing</option>
                <option>Build my own business</option>
                <option>Improve my existing skills</option>
                <option>Learn for personal interest</option>
              </select>
            </div>

            {/* Study time */}
            <div>
              <label
                htmlFor="studyTime"
                className="mb-2 block text-sm font-semibold text-gray-200"
              >
                4. How much time can you study daily?
              </label>

              <select
                id="studyTime"
                value={studyTime}
                onChange={(event) => setStudyTime(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#10101d] px-4 py-3 text-sm text-white outline-none focus:border-violet-500"
              >
                <option>30 minutes</option>
                <option>1 hour</option>
                <option>2 hours</option>
                <option>3 hours</option>
                <option>4+ hours</option>
              </select>
            </div>

            {/* Timeline */}
            <div>
              <label
                htmlFor="timeline"
                className="mb-2 block text-sm font-semibold text-gray-200"
              >
                5. What is your target learning timeline?
              </label>

              <select
                id="timeline"
                value={timeline}
                onChange={(event) => setTimeline(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#10101d] px-4 py-3 text-sm text-white outline-none focus:border-violet-500"
              >
                <option>1 month</option>
                <option>3 months</option>
                <option>6 months</option>
                <option>9 months</option>
                <option>12 months</option>
                <option>Flexible — recommend a timeline</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-9 w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-4 font-semibold text-white shadow-lg shadow-violet-900/20 transition hover:scale-[1.01] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-[#080812]"
          >
            Create My Learning Roadmap →
          </button>

          <p className="mt-4 text-center text-xs text-gray-500">
            Personalized learning for the career you choose.
          </p>
        </form>

        {submitted && (
          <section
            aria-live="polite"
            className="mt-8 rounded-2xl border border-violet-400/20 bg-violet-500/[0.08] p-6"
          >
            <h2 className="text-xl font-bold text-violet-300">
              Your {skill.trim()} learning roadmap
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              A starter plan based on your current level, goal, available study
              time, and target timeline.
            </p>

            <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
              <p><span className="text-gray-400">Current level: </span>{level}</p>
              <p><span className="text-gray-400">Main goal: </span>{goal}</p>
              <p><span className="text-gray-400">Study time: </span>{studyTime} daily</p>
              <p><span className="text-gray-400">Timeline: </span>{timeline}</p>
            </div>

            <ol className="mt-6 space-y-3">
              {phases.map((phase, index) => {
                const firstWeek = index * weeksPerPhase + 1;
                const lastWeek = (index + 1) * weeksPerPhase;

                return (
                  <li
                    key={phase.title}
                    className="flex gap-4 rounded-xl border border-white/10 bg-black/20 p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-sm font-semibold text-violet-300">
                      {index + 1}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="font-semibold">{phase.title}</h3>
                        <span className="text-xs text-gray-500">
                          Weeks {firstWeek}–{lastWeek}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-gray-400">
                        {phase.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <p className="mt-5 rounded-lg bg-black/20 p-3 text-xs leading-5 text-gray-400">
              This is a suggested starter outline generated in your browser.
              It is not AI-generated, and you can adjust the form to create
              another plan.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}

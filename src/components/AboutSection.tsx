import { Button } from "@/components/ui/button";
import {
  Download, Mail, Briefcase, GraduationCap, Sparkles,
  Terminal, Globe2, ShieldCheck, Calendar, Trophy, MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

/* ─────────────────────────────────────────────
   EXPERIENCE DATA
   ───────────────────────────────────────────── */
const experience = [
  {
    logo: "/logos/ck.jpg",
    company: "CloudKaptan Consultancy Services",
    location: "Kolkata, West Bengal, India",
    roles: [
      {
        title: "CLM Expert",
        mode: "On-site",
        period: "Dec 2025 – Present",
        current: true,
        color: "blue",
        groups: [
          {
            label: "Global CLM Strategy & Engineering",
            bullets: [
              "Spearheaded the Private Sale Agreement workflow for London stakeholders; conducted deep-dive business analysis to translate complex financial flows into high-efficiency automated systems.",
              "Engineered sophisticated business logic using Custom XML and C# Expression Scripts, optimising multi-party approval chains and intricate financial conditions for Private Sale workstreams.",
              "Led DocuSign CLM deployment across six international hubs — London, NY, Geneva, Milan, Hong Kong, Zurich — ensuring 100% regional compliance for Consignment and NDA workstreams.",
              "Architected a Git-based versioning framework for CLM using GitHub for JSON configurations and C# scripts to enable traceable change management and collaborative CI/CD.",
              "Established a scalable Environment Strategy (Dev/UAT/Prod), standardising testing protocols and migration paths for zero-downtime deployments.",
            ],
          },
        ],
      },
      {
        title: "Salesforce Developer",
        mode: "On-site",
        period: "Nov 2025 – Dec 2025",
        current: false,
        color: "purple",
        groups: [
          {
            label: "Salesforce Development & Optimisation",
            bullets: [
              "Developed bulkified Apex trigger frameworks and optimised SOQL/SOSL queries to handle enterprise data volumes while adhering strictly to Salesforce Governor Limits.",
              "Built custom Visualforce interfaces and Apex controllers supporting complex form handling, real-time validation, and automated CRM document generation.",
              "Bridged declarative and programmatic solutions by integrating Record-Triggered/Screen Flows with Apex logic, maintaining 85%+ code coverage for deployment readiness.",
            ],
          },
        ],
      },
    ],
  },
  {
    logo: "/logo/image.webp",
    company: "Soefia Education Incorporated",
    location: "Boston, Massachusetts, United States",
    roles: [
      {
        title: "Software Engineer (Intern)",
        mode: "Remote",
        period: "Jul 2025 – Aug 2025",
        current: false,
        color: "teal",
        groups: [
          {
            label: "Cloud & Backend Engineering",
            bullets: [
              "Assisted in deploying a multi-tenant architecture on AWS — configuring ECS tasks, creating S3 buckets, setting up Amplify namespaces, and managing credentials securely via AWS Secrets Manager.",
              "Enhanced backend resilience by identifying and resolving API edge cases through rigorous unit testing with pytest.",
              "Performed functional testing and systematically reported bugs and system failures, enabling the team to resolve issues efficiently and improve product quality.",
            ],
          },
        ],
      },
    ],
  },
];

/* ─────────────────────────────────────────────
   COLOR MAPS
   ───────────────────────────────────────────── */
const colorMap = {
  blue: {
    dot: "border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.45)]",
    dotHover: "group-hover:border-blue-400",
    badge: "border-blue-500/30 text-blue-400 bg-blue-500/10",
    groupLabel: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    bullet: "bg-blue-400",
    cardHover: "hover:border-blue-500/40",
    connector: "bg-blue-500/30",
  },
  purple: {
    dot: "border-purple-500 shadow-[0_0_10px_rgba(139,92,246,0.45)]",
    dotHover: "group-hover:border-purple-400",
    badge: "border-purple-500/30 text-purple-400 bg-purple-500/10",
    groupLabel: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    bullet: "bg-purple-400",
    cardHover: "hover:border-purple-500/40",
    connector: "bg-purple-500/30",
  },
  teal: {
    dot: "border-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.45)]",
    dotHover: "group-hover:border-teal-400",
    badge: "border-teal-500/30 text-teal-400 bg-teal-500/10",
    groupLabel: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    bullet: "bg-teal-400",
    cardHover: "hover:border-teal-500/40",
    connector: "bg-teal-500/30",
  },
};

/* ─────────────────────────────────────────────
   EXPERIENCE TIMELINE COMPONENT
   ───────────────────────────────────────────── */
const ExperienceTimeline = () => {
  return (
    <section className="space-y-12">
      <div className="flex items-center gap-4">
        <div className="h-px flex-grow bg-slate-800" />
        <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50 text-slate-300">
          <Briefcase className="w-4 h-4" />
          <span className="text-sm font-bold tracking-widest uppercase">Experience</span>
        </div>
        <div className="h-px flex-grow bg-slate-800" />
      </div>

      <div className="space-y-16">
        {experience.map((company, ci) => (
          <div key={ci}>
            {/* Company header */}
            <div className="flex items-center gap-4 mb-6 pl-12">
              <div className="w-10 h-10 rounded-xl border border-slate-700 bg-slate-900 flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={company.logo}
                  alt={company.company}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.innerHTML = `<span class="text-xs font-bold text-slate-400">${company.company.slice(0, 2).toUpperCase()}</span>`;
                  }}
                />
              </div>
              <div>
                <p className="text-white font-bold text-base leading-tight">{company.company}</p>
                <p className="text-slate-500 text-xs flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3" /> {company.location}
                </p>
              </div>
            </div>

            {/* Roles timeline */}
            <div className="relative pl-12">
              {/* Vertical track */}
              <div className="absolute left-[15px] top-0 bottom-0 w-px">
                <div className="h-full w-full bg-gradient-to-b from-blue-500 via-purple-500/60 to-slate-800/20 opacity-40" />
              </div>

              <div className="space-y-6">
                {company.roles.map((role, ri) => {
                  const c = colorMap[role.color] || colorMap.blue;
                  return (
                    <div key={ri} className="relative group">
                      {/* Timeline dot */}
                      <div
                        className={`absolute -left-[33px] top-[18px] w-[14px] h-[14px] rounded-full bg-slate-950 border-2 z-10 transition-all duration-300 ${c.dot} ${c.dotHover} group-hover:scale-150`}
                      />
                      {/* Connector */}
                      <div className={`absolute -left-[19px] top-[24px] w-[20px] h-px ${c.connector}`} />

                      {/* Role card */}
                      <div
                        className={`border border-slate-800 ${c.cardHover} bg-slate-900/40 backdrop-blur-sm rounded-2xl p-5 transition-all duration-300 hover:bg-slate-900/60 hover:translate-x-1`}
                      >
                        {/* Top row */}
                        <div className="flex items-start justify-between gap-3 flex-wrap mb-4">
                          <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="text-white font-bold text-[15px] leading-tight">{role.title}</h3>
                            {role.current && (
                              <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-[11px] font-medium border px-2.5 py-1 rounded-lg flex items-center gap-1.5 ${c.badge}`}>
                              <Calendar className="w-3 h-3" /> {role.period}
                            </span>
                            <span
                              className={`text-[11px] font-medium border px-2.5 py-1 rounded-lg ${
                                role.mode === "Remote"
                                  ? "border-teal-500/30 text-teal-400 bg-teal-500/10"
                                  : "border-slate-700 text-slate-400 bg-slate-800/50"
                              }`}
                            >
                              {role.mode}
                            </span>
                          </div>
                        </div>

                        <div className="h-px bg-slate-800 mb-4" />

                        {/* Bullet groups */}
                        <div className="space-y-4">
                          {role.groups.map((group, gi) => (
                            <div key={gi}>
                              <span className={`text-[10px] font-bold tracking-widest uppercase border px-2.5 py-1 rounded-md inline-block mb-3 ${c.groupLabel}`}>
                                {group.label}
                              </span>
                              <ul className="space-y-2.5">
                                {group.bullets.map((b, bi) => (
                                  <li key={bi} className="flex gap-3 text-slate-400 text-[13px] leading-relaxed">
                                    <span className={`w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0 ${c.bullet}`} />
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   MAIN ABOUT SECTION
   ───────────────────────────────────────────── */
const AboutSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      description: "ritankar.jana.official@gmail.com",
      action: "Send Email",
      url: "mailto:ritankar.jana.official@gmail.com",
      color: "text-red-500",
    },
  ];

  const education = [
    {
      logo: "/logo/png-clipart-academy-of-technology-asansol-engineering-college-maulana-abul-kalam-azad-university-of-technology-hooghly-institute-of-technology-technology-blue-angle.png",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Academy of Technology",
      period: "2021 - 2025",
      score: "8.92 CGPA",
      scoreType: "cgpa",
      description:
        "Started as the quiet kid in the back, but college flipped the script. 🌋 From compiler crashes to canteen banter, I found my tribe in the last three benches. 💬 Coding algorithms and cracking jokes — those moments shaped me as much as the degree. Friendship, growth, and a whole lot of laughs? Nailed it. 🚀",
    },
    {
      logo: "/logo/wwa_cossipore_english_school_logo.jpg",
      degree: "ISC - Class XI to XII",
      institution: "W.W.A Cossipore English School",
      period: "2018 - 2020",
      score: "89.5%",
      scoreType: "percentage",
      description:
        "Scored 89.5% while geeking out on Physics, Chemistry, and Math. 📐 Biology? We kept a polite distance. 😎 Math was my playground — logic puzzles that felt like games. Physics sparked cosmic curiosity, and Organic Chemistry? Doodling molecules was my jam. 🧬 CS sealed the deal, blending logic with creativity. ✨",
    },
    {
      logo: "/logo/wwa_cossipore_english_school_logo.jpg",
      degree: "LKG to Class X (ICSE)",
      institution: "W.W.A Cossipore English School",
      period: "2006 - 2018",
      score: "90.8%",
      scoreType: "percentage",
      description:
        "W.W.A CES was my second home. From LKG scribbles to Class 10 Java sparks, I grew up here. 💻 That first line of code in Class 9? Pure magic. Quizzes, IT fests, and stage moments fueled my curiosity. 🧠 It wasn't just school — it was where I discovered tech and myself. 🌟",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#030712] text-slate-200 selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-32">

          {/* ── About Me ── */}
          <section className="animate-[fadeIn_1s_ease-out]">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">

              {/* Left: Photo card + vibe card below */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                <Card className="w-full border-slate-800 bg-slate-900/50 backdrop-blur-xl overflow-hidden group">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src="RITANKAR JANA CASUAL PHOTO.jpg"
                      alt="Ritankar Jana"
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  </div>
                  <CardContent className="p-6">
                    <h1 className="text-2xl font-bold text-white mb-1">Ritankar Jana</h1>
                    <p className="text-blue-400 text-sm font-medium mb-4">Enterprise Solutions Architect</p>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl py-6">
                      <Link to="/resume.pdf" target="_blank">
                        <Download className="mr-2 h-4 w-4" /> Download CV
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Personal Vibe — below photo */}
                <div className="p-4 rounded-3xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/50 transition-all flex items-center gap-4">
                  <div className="flex -space-x-2 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800/80 flex items-center justify-center text-lg">
                      ⚽
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800/80 flex items-center justify-center text-lg">
                      📸
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed italic">
                    Off-clock? I'm chasing footballs ⚽ or hunting sunsets with my Canon 200D 📸.
                  </p>
                </div>
              </div>

              {/* Right: info grid */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 self-start">

                {/* Row 1: Technical Profile — full width */}
                <div className="md:col-span-2 p-6 rounded-3xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/50 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0">
                      <Terminal className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Technical Profile</h3>
                      <p className="text-slate-400 leading-relaxed">
                        Hi, I'm Ritankar Jana 👋 — a B.Tech CSE graduate from AOT (CGPA: 8.92). Currently working at
                        CloudKaptan, I focus on enterprise architecture and backend engineering, building scalable
                        automated systems that translate complex business needs into robust production-ready solutions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 2: Global Strategy + System Rigor */}
                <div className="p-6 rounded-3xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/50 transition-all">
                  <Globe2 className="w-6 h-6 text-emerald-400 mb-4" />
                  <h3 className="font-bold text-white mb-2">Global Strategy</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Spearheading digital transformation for international clients by delivering scalable backend
                    solutions and automation-driven workflows with enterprise-grade reliability.
                  </p>
                </div>

                <div className="p-6 rounded-3xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/50 transition-all">
                  <ShieldCheck className="w-6 h-6 text-purple-400 mb-4" />
                  <h3 className="font-bold text-white mb-2">System Rigor</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    I specialize in backend engineering — designing scalable systems, optimizing performance
                    bottlenecks, and delivering enterprise-grade reliability.
                  </p>
                </div>

                {/* Row 3: Learning Rate quote — full width */}
                <div className="md:col-span-2 p-4 rounded-3xl border border-blue-500/20 bg-blue-600/10 hover:bg-blue-600/15 transition-all flex items-center justify-center text-center">
                  <p className="text-sm font-medium text-blue-400 leading-relaxed">
                    "A neural net with a killer learning rate." 🚀
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* ── Experience Timeline ── */}
          <ExperienceTimeline />

          {/* ── Education ── */}
          <section className="space-y-16">
            <div className="flex items-center gap-4">
              <div className="h-px flex-grow bg-slate-800" />
              <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50 text-slate-300">
                <GraduationCap className="w-4 h-4" />
                <span className="text-sm font-bold tracking-widest uppercase">Education Journey</span>
              </div>
              <div className="h-px flex-grow bg-slate-800" />
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-slate-800 opacity-30 hidden md:block" />

              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center justify-between md:justify-normal group ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 -translate-x-1/2 z-10 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                    <div className="w-full md:w-[45%] pl-16 md:pl-0">
                      <Card className="border-slate-800 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-300 hover:border-slate-700 shadow-xl group/card relative overflow-hidden">
                        <div className="absolute top-0 right-0 px-4 py-1 bg-blue-600/20 text-blue-400 text-xs font-bold rounded-bl-xl border-l border-b border-blue-500/20">
                          {edu.score}
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-white/5 p-2 flex items-center justify-center border border-white/10">
                              <img
                                src={edu.logo}
                                alt="Institution Logo"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div>
                              <h4 className="text-white font-bold text-lg leading-tight group-hover/card:text-blue-400 transition-colors">
                                {edu.degree}
                              </h4>
                              <p className="text-slate-500 text-xs flex items-center gap-1 mt-1">
                                <MapPin className="w-3 h-3" /> {edu.institution}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 mb-4">
                            <Badge
                              variant="outline"
                              className="text-[10px] border-slate-700 text-slate-400 py-0 flex items-center gap-1"
                            >
                              <Calendar className="w-3 h-3" /> {edu.period}
                            </Badge>
                            <Badge
                              variant="outline"
                              className="text-[10px] border-blue-500/30 text-blue-400 py-0 flex items-center gap-1"
                            >
                              <Trophy className="w-3 h-3" /> {edu.scoreType.toUpperCase()}
                            </Badge>
                          </div>
                          <p className="text-slate-400 text-xs leading-relaxed italic border-l-2 border-slate-800 pl-3">
                            {edu.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="hidden md:block w-[45%]" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Footer / Contact ── */}
          {/* <section className="pt-12 border-t border-slate-800 space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              Let's Build Together <Sparkles className="text-yellow-500 w-5 h-5" />
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Currently open to Full-time roles, Freelance, and Consulting.
            </p>
            {contactMethods.map((method, i) => (
              <Button
                key={i}
                variant="outline"
                className="w-full justify-start gap-4 border-slate-800 bg-slate-900/50 hover:bg-slate-800 h-14 rounded-2xl"
                asChild
              >
                <a href={method.url}>
                  <method.icon className={`w-5 h-5 ${method.color}`} />
                  <div className="text-left">
                    <p className="text-xs text-slate-500 font-bold uppercase">{method.title}</p>
                    <p className="text-sm">{method.description}</p>
                  </div>
                </a>
              </Button>
            ))}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Core Interests</h4>
              <div className="flex flex-wrap gap-2">
                {["Scalable Architecture", "Generative AI", "Global Rollouts", "DevOps CI/CD"].map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="border-slate-800 text-slate-400 py-1.5 px-3 rounded-lg bg-slate-900/20"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </section> */}

        </div>
      </div>
    </div>
  );
};

export default AboutSection;
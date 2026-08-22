import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TeamMembers from "./Team.json";

export default function Team() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeYear, setActiveYear] = useState("present");

  const categoryMap = {
    opnl: "Operations",
    technicals: "Technicals",
    "social-media": "Social Media",
    marketing: "Marketing",
    outreach: "Outreach",
  };

  const headData = {
    present: [
      {
        img: "/images/Aryan.jpeg",
        name: "Aryan Poonia",
        role: "Joint Secretary",
        email: "ce240004008@iiti.ac.in",
        insta: "https://www.instagram.com/aryanpoonia44",
        linkedin: "https://www.linkedin.com/in/aryan-poonia-0b255a322",
      },
      {
        img: "/images/shukla.png",
        name: "Lakshya Shukla",
        role: "General Secretary Sports",
        email: "mems240005027@iiti.ac.in",
        insta: "https://www.instagram.com/lakshya.sl",
        linkedin: "https://www.linkedin.com/in/lakshya-shukla-853542345",
      },
      {
        img: "/images/utkarsh.jpg",
        name: "Utkarsh Sharma",
        role: "Joint Secretary",
        email: "che240008033@iiti.ac.in",
        insta: "https://instagram.com/utkarsh.0706",
        linkedin: "https://www.linkedin.com/in/utkarsh-s20",
      },
    ],

    "2025-26": [
      // {
      //   img: "/images/placeholder.png",
      //   name: "Previous JS 1",
      //   role: "Joint Secretary",
      //   email: "prev1@iiti.ac.in",
      // },
      {
        img: "",
        name: "Prayag Lakhani",
        role: "General Secretary Sports",
        email: "",
      },
      // {
      //   img: "/images/placeholder.png",
      //   name: "Previous JS 2",
      //   role: "Joint Secretary",
      //   email: "prev2@iiti.ac.in",
      // },
    ],

    "2024-25": [
      // {
      //   img: "/images/placeholder.png",
      //   name: "Previous JS 1",
      //   role: "Joint Secretary",
      //   email: "prev1@iiti.ac.in",
      // },
      {
        img: "",
        name: "Nikhil Eswaran",
        role: "General Secretary Sports",
        email: "",
      },
      // {
      //   img: "/images/placeholder.png",
      //   name: "Previous JS 2",
      //   role: "Joint Secretary",
      //   email: "prev2@iiti.ac.in",
      // },
    ],

    "2023-24": [
      // {
      //   img: "/images/placeholder.png",
      //   name: "Previous JS 1",
      //   role: "Joint Secretary",
      //   email: "prev1@iiti.ac.in",
      // },
      {
        img: "",
        name: "Kartikeya Sharma",
        role: "General Secretary Sports",
        email: "",
      },
      // {
      //   img: "/images/placeholder.png",
      //   name: "Previous JS 2",
      //   role: "Joint Secretary",
      //   email: "prev2@iiti.ac.in",
      // },
    ],

  };

  const years = [
    { key: "present", label: "Present" },
    { key: "2025-26", label: "2025-26" },
    { key: "2024-25", label: "2024-25" },
    { key: "2023-24", label: "2023-24" },
  ];

  const groups = [
    {
      key: "opnl",
      title: "Operations",
      subtitle: "Operations & Logistics",
      id: "01",
      img: "/images/opnl.jpg",
    },
    {
      key: "technicals",
      title: "Technicals",
      subtitle: "Development & Tech",
      id: "02",
      img: "/images/tech.jpg",
    },
    {
      key: "social-media",
      title: "Social Media",
      subtitle: "Cinematography",
      id: "03",
      img: "/images/social.webp",
    },
    {
      key: "marketing",
      title: "Marketing",
      subtitle: "Marketing",
      id: "04",
      img: "/images/marketing.webp",
    },
    {
      key: "outreach",
      title: "Outreach",
      subtitle: "Outreach",
      id: "05",
      img: "/images/outreach.webp",
    },
  ];

  const getGoogleDriveImage = (link) => {
    if (!link) return "/images/placeholder.png";

    const idMatch = link.match(/id=([^&]+)/);

    return idMatch
      ? `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w1000`
      : link;
  };

  const getSocialLink = (link, platform) => {
    if (!link || link === "Not use" || link === "null") return null;
    if (link.startsWith("http")) return link;

    return platform === "instagram"
      ? `https://www.instagram.com/${link}`
      : `https://www.linkedin.com/in/${link}`;
  };

  const getRoleRank = (role) => {
    const value = (role || "").toLowerCase();

    if (value.includes("head") && !value.includes("co-head")) return 1;
    if (value.includes("co-head")) return 2;
    if (value.includes("member")) return 3;
    if (value.includes("volunteer")) return 4;

    return 5;
  };

  const activeGroupData = groups.find(
    (group) => group.key === selectedCategory
  );

  const activeMembers =
    selectedCategory !== "All"
      ? TeamMembers.filter(
        (member) => member.Team === categoryMap[selectedCategory]
      ).sort((a, b) => getRoleRank(a.role) - getRoleRank(b.role))
      : [];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 pt-8 pb-16 font-poppins text-slate-100">
      {/* Background effects */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.16, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-10 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center">
        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-8 text-center"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500 opacity-20 blur-3xl" />

          <span className="relative z-10 mb-3 block text-xs font-black uppercase tracking-[0.4em] text-teal-400">
            The Backbone
          </span>

          <h1 className="relative z-10 mb-5 text-5xl font-black leading-none tracking-tight text-slate-100 md:text-7xl">
            Meet the{" "}
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Team
            </span>
          </h1>

          <div className="relative z-10 mx-auto h-1.5 w-20 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400" />
        </motion.header>

        {/* Year buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {years.map((year) => (
            <button
              key={year.key}
              onClick={() => setActiveYear(year.key)}
              className={`rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 sm:px-6 sm:py-3 sm:text-sm ${activeYear === year.key
                ? "border-teal-500 bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/20"
                : "border-slate-800 bg-slate-900/70 text-slate-400 hover:border-teal-500/50 hover:text-teal-400"
                }`}
            >
              {year.label}
            </button>
          ))}
        </div>

        {/* Heads section */}
        {/*
          Important:
          - Fixed height prevents the page from jumping.
          - absolute positioning keeps GS and JS in the same places.
          - only opacity changes when year changes.
        */}
        <div className="relative mb-12 h-[430px] w-full sm:h-[470px] md:h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 flex items-start justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10"
            >
              {headData[activeYear].map((head, index) => {
                const isCenter = index === 1;

                const imageSize = isCenter
                  ? "h-52 w-32 sm:h-64 sm:w-36 md:h-72 md:w-44 lg:h-80 lg:w-48"
                  : "h-44 w-28 sm:h-56 sm:w-32 md:h-64 md:w-36 lg:h-72 lg:w-40";

                return (
                  <motion.div
                    key={`${activeYear}-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.35,
                    }}
                    className="group flex w-[30%] max-w-[220px] flex-col items-center"
                  >
                    {/* Image */}
                    <div
                      className={`relative ${imageSize} overflow-hidden rounded-full border-4 border-slate-700/80 bg-slate-800/50 shadow-xl shadow-black/50 transition-all duration-500 group-hover:border-teal-400/70 group-hover:shadow-teal-500/20`}
                    >
                      <motion.img
                        key={`${activeYear}-${head.img}`}
                        src={head.img}
                        alt={head.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 h-full w-full object-cover brightness-110 contrast-110"
                        whileHover={{ scale: 1.1 }}
                        onError={(event) => {
                          event.currentTarget.src =
                            "/images/placeholder.png";
                        }}
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
                    </div>

                    {/* Details */}
                    <div className="mt-5 min-h-[125px] w-full text-center">
                      <h2 className="text-sm font-black text-slate-100 transition-colors duration-300 group-hover:text-teal-400 sm:text-base md:text-xl">
                        {head.name}
                      </h2>

                      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-teal-400/90 sm:text-[10px] md:text-xs">
                        {head.role}
                      </p>

                      <div className="mt-3 flex justify-center gap-2">
                        {getSocialLink(head.insta, "instagram") && (
                          <a
                            href={getSocialLink(head.insta, "instagram")}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${head.name} Instagram`}
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-800/70 text-xs text-slate-300 transition hover:bg-pink-500 hover:text-white"
                          >
                            ◎
                          </a>
                        )}

                        {getSocialLink(head.linkedin, "linkedin") && (
                          <a
                            href={getSocialLink(head.linkedin, "linkedin")}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${head.name} LinkedIn`}
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-800/70 text-xs font-bold text-slate-300 transition hover:bg-blue-600 hover:text-white"
                          >
                            in
                          </a>
                        )}
                      </div>

                      {head.email && (
                        <a
                          href={`mailto:${head.email}`}
                          className="mt-2 block truncate text-[9px] text-slate-500 transition hover:text-teal-400 sm:text-[11px]"
                        >
                          {head.email}
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Team filter buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-8 w-full overflow-x-auto pb-3"
        >
          <div className="flex min-w-max justify-center gap-3 px-2">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`rounded-full border-2 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all ${selectedCategory === "All"
                ? "border-teal-500 bg-teal-500 text-slate-950"
                : "border-slate-800 bg-slate-900/70 text-slate-400 hover:border-teal-500/50 hover:text-teal-400"
                }`}
            >
              All Teams
            </button>

            {groups.map((group) => (
              <button
                key={group.key}
                onClick={() => setSelectedCategory(group.key)}
                className={`rounded-full border-2 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all ${selectedCategory === group.key
                  ? "border-teal-500 bg-teal-500 text-slate-950"
                  : "border-slate-800 bg-slate-900/70 text-slate-400 hover:border-teal-500/50 hover:text-teal-400"
                  }`}
              >
                {group.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Team content */}
        <div className="min-h-[400px] w-full">
          <AnimatePresence mode="wait">
            {selectedCategory === "All" ? (
              <motion.div
                key="all"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5"
              >
                {groups.map((group) => (
                  <motion.button
                    key={group.key}
                    variants={itemVariants}
                    whileHover={{ y: -6 }}
                    onClick={() => setSelectedCategory(group.key)}
                    className="group overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 text-left shadow-lg transition-all hover:border-teal-500/30 hover:shadow-teal-500/10"
                  >
                    <div className="relative h-32 overflow-hidden sm:h-40">
                      <img
                        src={group.img}
                        alt={group.title}
                        className="h-full w-full object-cover brightness-110 contrast-110 transition duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-slate-950/10" />
                      <span className="absolute right-3 top-3 rounded-full bg-slate-900/80 px-2 py-1 text-xs font-black text-teal-400">
                        {group.id}
                      </span>
                    </div>

                    <div className="p-4">
                      <span className="text-[9px] font-black uppercase tracking-widest text-teal-400">
                        {group.subtitle}
                      </span>

                      <h3 className="mt-1 text-base font-black text-slate-100">
                        {group.title}
                      </h3>

                      <p className="mt-3 text-xs font-bold text-slate-400 transition group-hover:text-teal-400">
                        View Members →
                      </p>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            ) : (
              <motion.section
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="w-full"
              >
                <h2 className="mb-10 text-center text-3xl font-black">
                  {activeGroupData?.title}{" "}
                  <span className="text-teal-400">Team Members</span>
                </h2>

                {activeMembers.length > 0 ? (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                  >
                    {activeMembers.map((member, index) => {
                      const instagram = getSocialLink(
                        member["Instagram Profile link"],
                        "instagram"
                      );

                      const linkedin = getSocialLink(
                        member["Linkedin Profile link"],
                        "linkedin"
                      );

                      return (
                        <motion.div
                          key={member.id || `${member.name}-${index}`}
                          variants={itemVariants}
                          whileHover={{ y: -5 }}
                          className="group text-center"
                        >
                          <div className="relative mx-auto mb-3 h-28 w-28">
                            <img
                              src={getGoogleDriveImage(member.img)}
                              alt={member.name}
                              referrerPolicy="no-referrer"
                              className="h-full w-full rounded-full border-4 border-slate-800/80 object-cover brightness-110 contrast-110 shadow-lg transition duration-500 group-hover:scale-105"
                              onError={(event) => {
                                event.currentTarget.src =
                                  "/images/placeholder.png";
                              }}
                            />

                            <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                              {instagram && (
                                <a
                                  href={instagram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="rounded-full bg-pink-500 px-2 py-1 text-xs text-white"
                                >
                                  ◎
                                </a>
                              )}

                              {linkedin && (
                                <a
                                  href={linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="rounded-full bg-blue-600 px-2 py-1 text-xs font-bold text-white"
                                >
                                  in
                                </a>
                              )}
                            </div>
                          </div>

                          <h3 className="mt-5 text-sm font-black text-slate-100 group-hover:text-teal-400">
                            {member.name}
                          </h3>

                          <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-slate-400">
                            {member.role}
                          </p>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                ) : (
                  <div className="rounded-3xl border-2 border-dashed border-slate-800 py-16 text-center text-slate-500">
                    Members coming soon
                  </div>
                )}

                <div className="flex justify-center pt-12">
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="rounded-xl border border-slate-700 bg-slate-800/50 px-8 py-3 text-xs font-bold uppercase tracking-widest text-slate-300 transition hover:bg-teal-500 hover:text-slate-950"
                  >
                    Back to All Teams
                  </button>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
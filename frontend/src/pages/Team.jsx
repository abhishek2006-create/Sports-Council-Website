import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TeamMembers from "./Team.json";

export default function Team() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoryMap = {
    "opnl": "Operations",
    "technicals": "Technicals",
    "social-media": "Social Media",
    "marketing": "Marketing",
    "outreach": "Outreach",
  };

  const heads = [
    { img: "/images/Aryan.jpeg", name: "Aryan Poonia", role: "Joint Secretary", insta: "https://www.instagram.com/aryanpoonia44?utm_source=qr&igsh=cnZnZGtmYTkxa245", linkedin: "https://www.linkedin.com/in/aryan-poonia-0b255a322?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { img: "/images/shukla.png", name: "Lakshya Shukla", role: "General Secretary Sports", insta: "https://www.instagram.com/lakshya.sl?igsh=ZXRpNW44eHQwcnRw", linkedin: "https://www.linkedin.com/in/lakshya-shukla-853542345?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { img: "/images/utkarsh.jpg", name: "Utkarsh Sharma", role: "Joint Secretary", insta: "https://instagram.com/utkarsh.0706?utm_source=qr&igsh=MTN0ZWk0M2JjN3U1Nw==", linkedin: "https://www.linkedin.com/in/utkarsh-s20?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  ];

  const getGoogleDriveImage = (link) => {
    if (!link) return "https://via.placeholder.com/200";
    const idMatch = link.match(/id=([^&]+)/);
    if (idMatch && idMatch[1]) {
      return `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w1000`;
    }
    return link;
  };

  const getSocialLink = (link, platform) => {
    if (!link || link === "Not use" || link === "null") return null;
    if (link.startsWith("http")) return link;
    if (platform === "instagram") return `https://www.instagram.com/${link}`;
    if (platform === "linkedin") return `https://www.linkedin.com/in/${link}`;
    return link;
  };

  const getRoleRank = (role) => {
    const r = (role || "").toLowerCase();
    if (r.includes("head") && !r.includes("co-head")) return 1;
    if (r.includes("co-head")) return 2;
    if (r.includes("member")) return 3;
    if (r.includes("volunteer")) return 4;
    return 5;
  };

  const groups = [
    { key: "opnl", title: "Operations", subtitle: "Operations & Logistics", id: "01", img: "/images/opnl.jpg" },
    { key: "technicals", title: "Technicals", subtitle: "Development & Tech", id: "02", img: "/images/tech.jpg" },
    { key: "social-media", title: "Social Media", subtitle: "Cinematography", id: "03", img: "/images/social.webp" },
    { key: "marketing", title: "Marketing", subtitle: "marketing", id: "04", img: "/images/marketing.webp" },
    { key: "outreach", title: " Outreach", subtitle: "Outreach ", id: "05", img: "/images/outreach.webp" },
  ];

  const activeGroupData = groups.find((g) => g.key === selectedCategory);
  const activeMembers = selectedCategory !== "All"
    ? TeamMembers
      .filter((member) => member.Team === categoryMap[selectedCategory])
      .sort((a, b) => getRoleRank(a.role) - getRoleRank(b.role))
    : [];

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="pt-5 pb-20 min-h-screen font-poppins bg-slate-950 text-slate-100 selection:bg-teal-500 selection:text-white relative overflow-hidden">

      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.16, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 flex flex-col items-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-teal-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div>
          <span className="text-teal-400 text-xs font-black uppercase tracking-[0.4em] block mb-3 relative z-10">
            The Backbone
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-100 leading-none mb-6 relative z-10 tracking-tight">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Team</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto rounded-full relative z-10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full mb-16"
        >
          <div className="flex justify-center items-end gap-4 sm:gap-6 md:gap-8 lg:gap-10 flex-wrap">
            {heads.map((head, idx) => {
              const isCenter = idx === 1;
              const heightClass = isCenter
                ? "h-64 sm:h-72 md:h-80 lg:h-96"
                : "h-56 sm:h-64 md:h-72 lg:h-80";
              const widthClass = isCenter
                ? "w-36 sm:w-40 md:w-48 lg:w-56"
                : "w-32 sm:w-36 md:w-40 lg:w-48";

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 60, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.4 + idx * 0.15, duration: 0.7, ease: "easeOut" }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="group flex flex-col items-center"
                >
                  <div className={`relative ${widthClass} ${heightClass} rounded-full overflow-hidden border-4 border-slate-700/80 group-hover:border-teal-400/70 shadow-xl shadow-black/50 group-hover:shadow-teal-500/20 transition-all duration-500 bg-slate-800/50`}>
                    <motion.img
                      src={head.img}
                      alt={head.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                      onError={(e) => { e.target.src = "https://via.placeholder.com/300x400?text=Head"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + idx * 0.15, duration: 0.5 }}
                    className="text-center mt-5"
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-100 group-hover:text-teal-400 transition-colors duration-300">
                      {head.name}
                    </h3>
                    <p className="text-teal-400/90 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] mt-1">
                      {head.role}
                    </p>

                    <div className="flex justify-center gap-2 mt-3">
                      {head.insta && (
                        <a
                          href={head.insta}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-800/60 border border-slate-700 text-slate-400 hover:bg-pink-500 hover:text-white hover:border-pink-500 hover:scale-110 transition-all duration-300"
                        >
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      )}
                      {head.linkedin && (
                        <a
                          href={head.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-800/60 border border-slate-700 text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110 transition-all duration-300"
                        >
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.321c0-4.608 5.472-4.474 5.472 0v8.321h5v-9.643c0-6.918-7.416-6.671-9.356-3.791v-2.887z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-16 w-full overflow-x-auto pb-4 hide-scrollbar"
        >
          <div className="flex justify-center min-w-max gap-3 md:gap-4 px-2">
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory("All")}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 ${selectedCategory === "All"
                ? "bg-teal-500 border-teal-500 text-slate-950 shadow-lg shadow-teal-500/20 scale-105"
                : "bg-slate-900/60 backdrop-blur-md border-slate-800 text-slate-400 hover:border-teal-500/50 hover:text-teal-400"
                }`}
            >
              All Teams
            </motion.button>
            {groups.map((group) => (
              <motion.button
                key={group.key}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(group.key)}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 ${selectedCategory === group.key
                  ? "bg-teal-500 border-teal-500 text-slate-950 shadow-lg shadow-teal-500/20 scale-105"
                  : "bg-slate-900/60 backdrop-blur-md border-slate-800 text-slate-400 hover:border-teal-500/50 hover:text-teal-400"
                  }`}
              >
                {group.title.replace(" Team", "")}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="w-full min-h-[400px]">
          <AnimatePresence mode="wait">
            {selectedCategory === "All" ? (
              <motion.div
                key="all-teams"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: 20, transition: { duration: 0.25 } }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {groups.map((group, index) => (
                  <motion.div
                    key={group.key}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedCategory(group.key)}
                    className="group cursor-pointer bg-slate-900/60 backdrop-blur-md rounded-3xl border border-slate-800/80 shadow-lg hover:shadow-teal-500/10 hover:border-teal-500/30 transition-all duration-500 overflow-hidden flex flex-col h-full"
                  >
                    <div className="relative h-56 overflow-hidden bg-slate-800/50">
                      <motion.img
                        src={group.img}
                        alt={group.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.7 }}
                      />
                      <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition-colors"></div>
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg border border-slate-800/80"
                      >
                        <span className="text-teal-400 font-black text-xs">{group.id}</span>
                      </motion.div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col items-start">
                      <span className="text-teal-400 text-[10px] font-black uppercase tracking-widest mb-2">
                        {group.subtitle}
                      </span>
                      <h3 className="text-2xl font-black text-slate-100 mb-3 leading-tight">
                        {group.title}
                      </h3>
                      <div className="mt-auto pt-4 flex items-center text-slate-300 font-bold text-sm group-hover:text-teal-400 transition-colors">
                        View Members <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.45 }}
                className="animate-slideUp space-y-12"
              >
                <div className="max-w-5xl mx-auto">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-center text-3xl font-black text-slate-100 mb-12"
                  >
                    {activeGroupData?.title} <span className="text-teal-400">Team Members</span>
                  </motion.h3>

                  {activeMembers.length > 0 ? (
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 justify-items-center"
                    >
                      {activeMembers.map((member, idx) => {
                        const instaLink = getSocialLink(member["Instagram Profile link"], "instagram");
                        const linkedinLink = getSocialLink(member["Linkedin Profile link"], "linkedin");

                        return (
                          <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="group flex flex-col items-center"
                          >
                            <div className="relative mb-6">
                              <motion.div
                                className="absolute -inset-2 rounded-full border border-dashed border-teal-500/50 opacity-30 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-700"
                                initial={{ rotate: 0 }}
                                whileHover={{ rotate: 90 }}
                              />

                              <motion.img
                                src={getGoogleDriveImage(member.img)}
                                alt={member.name}
                                referrerPolicy="no-referrer"
                                className="relative w-40 h-40 rounded-full object-cover border-4 border-slate-800/80 shadow-lg group-hover:scale-105 transition-transform duration-500 bg-slate-800/50"
                                onError={(e) => { e.target.src = "https://via.placeholder.com/200?text=No+Image"; }}
                                whileHover={{ scale: 1.05 }}
                              />

                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileHover={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-2"
                              >
                                {instaLink && (
                                  <a
                                    href={instaLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-slate-900/80 backdrop-blur-sm p-2 rounded-full border border-slate-800/80 shadow-md hover:scale-110 hover:bg-pink-500 hover:text-white transition-all duration-300"
                                  >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                  </a>
                                )}
                                {linkedinLink && (
                                  <a
                                    href={linkedinLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-slate-900/80 backdrop-blur-sm p-2 rounded-full border border-slate-800/80 shadow-md hover:scale-110 hover:bg-blue-600 hover:text-white transition-all duration-300"
                                  >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.321c0-4.608 5.472-4.474 5.472 0v8.321h5v-9.643c0-6.918-7.416-6.671-9.356-3.791v-2.887z" />
                                    </svg>
                                  </a>
                                )}
                              </motion.div>
                            </div>
                            <div className="text-center">
                              <h3 className="text-xl font-black text-slate-100 mb-1 group-hover:text-teal-400 transition-colors">
                                {member.name}
                              </h3>
                              <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                                {member.role}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col items-center justify-center py-16 opacity-50 border-2 border-dashed border-slate-800/50 rounded-3xl bg-slate-900/30"
                    >
                      <svg className="w-12 h-12 text-slate-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <h3 className="text-lg font-bold text-slate-500">Members coming soon</h3>
                    </motion.div>
                  )}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-center pt-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory("All")}
                    className="px-8 py-3 bg-slate-800/50 hover:bg-teal-500 text-slate-300 hover:text-slate-950 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 border border-slate-700"
                  >
                    Back to All Teams
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
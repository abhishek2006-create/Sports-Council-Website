import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Staff() {
    const [openPrevious, setOpenPrevious] = useState(null);
    const [showAllLegacy, setShowAllLegacy] = useState(false);

    const faculty = [
        {
            key: "Staff01",
            title: "Prof. Amod C. Umarikar",
            Subtitle: "Dean of Student Affairs",
            email: "dsoa@iiti.ac.in",
            img: "/images/dosa_sir.jpeg",
            previousHolders: [
                { name: "Prof. Ram Bilas", year: "2023 - 24", img: "/images/prev/dosa1.jpg", description: "Led student welfare & sports infrastructure expansion." },
                { name: "Prof. Anand Parey", year: "2022 - 23", img: "/images/prev/dosa2.jpg", description: "Introduced the inter-hostel championship format." },
                { name: "Prof. Ashutosh Mishra", year: "2021 - 22", img: "/images/prev/dosa3.jpg", description: "Oversaw post-pandemic revival of campus sports." }
            ]
        },
        {
            key: "Staff02",
            title: "Dr. Swaminathan Ramabadran",
            Subtitle: "Convenor",
            email: "swamiramabadran@iiti.ac.in",
            img: "/images/swami_sir.png",
            previousHolders: [
                { name: "Dr. Kiran Bala", year: "2023 - 24", img: "/images/prev/con1.jpg", description: "Streamlined the sports council budget process." },
                { name: "Dr. Vimal Bhatia", year: "2022 - 23", img: "/images/prev/con2.jpg", description: "Launched the annual sports fest 'Aaghaz'." },
                { name: "Dr. Neelesh Jain", year: "2021 - 22", img: "/images/prev/con3.jpg", description: "Formalised the club selection guidelines." }
            ]
        },
          {
            key: "Staff04",
            title: "Dr. Bibekananda Maji",
            Subtitle: "Co-Convenor-2",
            email: "bibekanandamaji@iiti.ac.in",
            img: "/images/maji_sir.jpeg",
            previousHolders: [
                { name: "Dr. Arti Kashyap", year: "2023 - 24", img: "/images/prev/co4.jpg", description: "Promoted women's participation in campus sports." },
                { name: "Dr. Sudeshna Chattopadhyay", year: "2022 - 23", img: "/images/prev/co5.jpg", description: "Coordinated the Inter-IIT hosting committee." },
                { name: "Dr. Amod Kumar", year: "2021 - 22", img: "/images/prev/co6.jpg", description: "Started the fitness awareness drive." }
            ]
        },
        {
            key: "Staff03",
            title: "Dr. Gaurav Chauhan",
            Subtitle: "Co-Convenor",
            email: "gaurav@iiti.ac.in",
            img: "/images/gaurav_sir.png",
            previousHolders: [
                { name: "Dr. Sarika Jain", year: "2023 - 24", img: "/images/prev/co1.jpg", description: "Handled club fund allocation & audits." },
                { name: "Dr. Manish Sharma", year: "2022 - 23", img: "/images/prev/co2.jpg", description: "Mentored the athletics and aquatics teams." },
                { name: "Dr. Pankaj Sharma", year: "2021 - 22", img: "/images/prev/co3.jpg", description: "Improved sports gear procurement system." }
            ]
        },
      
        {
            key: "Staff05",
            title: "Mr. Vishal Pillai",
            Subtitle: "Deputy Sports Officer",
            email: "dso@iiti.ac.in",
            img: "/images/pillai_sir.png",
            previousHolders: [
                { name: "Mr. Rajesh Verma", year: "2023 - 24", img: "/images/prev/dso1.jpg", description: "Managed Inter-IIT contingent training programs." },
                { name: "Mr. Sanjay Kumar", year: "2022 - 23", img: "/images/prev/dso2.jpg", description: "Set up the strength & conditioning facility." },
                { name: "Mr. Deepak Yadav", year: "2021 - 22", img: "/images/prev/dso3.jpg", description: "Coordinated coaching staff recruitment." }
            ]
        }

    ];

    const containerVariants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const togglePrevious = (key) => {
        setOpenPrevious(openPrevious === key ? null : key);
    };

    const toggleAllLegacy = () => {
        const next = !showAllLegacy;
        setShowAllLegacy(next);
        setOpenPrevious(null); // reset individual toggles
    };

    /* helper: is the legacy section open for this card? */
    const isOpen = (key) => showAllLegacy || openPrevious === key;

    return (
        <div className="bg-slate-950 min-h-screen w-full pt-5 pb-20 px-4 font-poppins text-slate-100 selection:bg-teal-500 selection:text-white relative overflow-hidden">

            {/* ================= BACKGROUND GLOWS ================= */}
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

            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* ================= HEADER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14 relative"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-teal-500 opacity-20 blur-3xl rounded-full pointer-events-none" />

                    <span className="text-teal-400 text-xs font-black uppercase tracking-[0.3em] block mb-3 relative z-10">
                        Our Pillars
                    </span>

                    <h1 className="text-4xl md:text-5xl font-black text-slate-100 mb-6 relative z-10 tracking-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Functionaries</span>
                    </h1>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 64 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-1 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto rounded-full relative z-10"
                    />

                    {/* ---------- GLOBAL LEGACY TOGGLE ---------- */}
                    <div className="mt-8 flex justify-center relative z-10">
                        <button
                            onClick={toggleAllLegacy}
                            className={`group flex items-center gap-3 px-6 py-3 rounded-full border text-sm font-bold uppercase tracking-widest transition-all duration-300
                                ${showAllLegacy
                                    ? "bg-teal-500 text-slate-950 border-teal-400 shadow-[0_0_25px_rgba(20,184,166,0.35)]"
                                    : "bg-slate-900/60 text-slate-300 border-slate-700 hover:border-teal-500/50 hover:text-teal-400"}`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {showAllLegacy ? "Hide Legacy (Last 3 Years)" : "View Legacy (Last 3 Years)"}
                        </button>
                    </div>
                </motion.div>

                {/* ================= STAFF GRID ================= */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-start justify-items-center"
                >
                    {faculty.map((member) => (
                        <motion.div
                            key={member.key}
                            variants={itemVariants}
                            whileHover={{ y: -6 }}
                            className="group relative w-full bg-slate-900/60 backdrop-blur-md rounded-[2rem] border border-slate-800/80 hover:border-teal-500/30 p-6 flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_20px_40px_rgba(20,184,166,0.15)] overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-bl-full group-hover:bg-teal-500/10 transition-colors pointer-events-none" />

                            {/* CURRENT BADGE */}
                            <span className="absolute top-4 left-4 text-[9px] font-black uppercase tracking-widest text-teal-400 bg-teal-500/10 border border-teal-500/20 px-2 py-1 rounded-full z-10">
                                Current
                            </span>

                            {/* PHOTO */}
                            <div className="relative mb-5 mt-4 w-28 h-28 z-10">
                                <div className="absolute inset-0 bg-teal-500 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500" />
                                <motion.img
                                    src={member.img}
                                    alt={member.title}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative w-full h-full rounded-full object-cover border-[3px] border-slate-800/80 group-hover:border-teal-500/50 shadow-lg transition-colors duration-500 bg-slate-800/50"
                                />
                                <div className="absolute bottom-1 right-1 bg-teal-500 text-slate-950 p-1.5 rounded-full border-2 border-slate-900 shadow-sm z-10">
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="text-base font-black text-slate-100 mb-1 group-hover:text-teal-400 transition-colors relative z-10 leading-snug">
                                {member.title}
                            </h3>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-5 relative z-10">
                                {member.Subtitle}
                            </p>

                            <div className="w-full h-px bg-slate-800 mb-4 group-hover:bg-teal-500/20 transition-colors relative z-10" />

                            <div className="space-y-2 w-full relative z-10">

                                {/* EMAIL */}
                                <a
                                    href={`mailto:${member.email}`}
                                    className="flex items-center justify-center gap-2 text-xs text-slate-400 hover:text-slate-100 transition-colors p-2 rounded-xl hover:bg-slate-800/50"
                                >
                                    <svg className="w-4 h-4 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="font-medium truncate">{member.email}</span>
                                </a>

                                {/* ---------- PREVIOUS HOLDERS BUTTON ---------- */}
                                {member.previousHolders?.length > 0 && (
                                    <button
                                        onClick={() => togglePrevious(member.key)}
                                        className={`w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border transition-all duration-300
                                            ${isOpen(member.key)
                                                ? "bg-teal-500/10 border-teal-500/40 text-teal-400"
                                                : "bg-slate-800/60 border-slate-700 text-slate-300 hover:border-teal-500/40 hover:text-teal-400"}`}
                                    >
                                        <span className="text-[11px] font-bold uppercase tracking-wider">
                                            Previous ({member.previousHolders.length})
                                        </span>
                                        <motion.span
                                            animate={{ rotate: isOpen(member.key) ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-[10px]"
                                        >
                                            ▼
                                        </motion.span>
                                    </button>
                                )}

                                {/* ---------- PREVIOUS HOLDERS TIMELINE ---------- */}
                                <AnimatePresence initial={false}>
                                    {isOpen(member.key) && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-4 mt-1 border-t border-slate-800 text-left">
                                                <h4 className="text-[10px] font-black uppercase tracking-widest text-teal-400 mb-3 text-center">
                                                    Past 3 Years
                                                </h4>

                                                <div className="relative space-y-3 pl-4 before:absolute before:left-1 before:top-2 before:bottom-2 before:w-px before:bg-slate-800">
                                                    {member.previousHolders.map((holder, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.08 }}
                                                            className="relative bg-slate-800/40 rounded-xl p-3 border border-slate-800 hover:border-teal-500/30 transition-colors"
                                                        >
                                                            {/* timeline dot */}
                                                            <span className="absolute -left-[13px] top-5 w-2 h-2 rounded-full bg-teal-500 ring-4 ring-slate-900" />

                                                            <div className="flex gap-3 items-start">
                                                                <img
                                                                    src={holder.img}
                                                                    alt={holder.name}
                                                                    onError={(e) => { e.target.src = "/images/placeholder.png"; }}
                                                                    className="w-10 h-10 rounded-full object-cover border-2 border-slate-700 flex-shrink-0 bg-slate-800"
                                                                />
                                                                <div className="min-w-0">
                                                                    <p className="text-xs font-bold text-slate-100 leading-tight">
                                                                        {holder.name}
                                                                    </p>
                                                                    <p className="text-[10px] text-teal-400 font-bold mt-0.5">
                                                                        {holder.year}
                                                                    </p>
                                                                    <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
                                                                        {holder.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
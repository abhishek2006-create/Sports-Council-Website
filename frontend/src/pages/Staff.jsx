import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Staff() {
    const [openPrevious, setOpenPrevious] = useState(null);

    const faculty = [
        { key: "Staff01", title: "Prof. Amod C. Umarikar ", Subtitle: " Dean of Student Affairs", email: "dsoa@iiti.ac.in", img: "/images/dosa_sir.jpeg" },
        { key: "Staff02", title: "Mr. Vishal Pillai ", Subtitle: "Deputy Sports Officer", email: "dso@iiti.ac.in", img: "/images/pillai_sir.png" },
        { key: "Staff02", title: "Dr. Swaminathan sir", Subtitle: "Convenor", email: "swamiramabadran@iiti.ac.in", img: "/images/swami_sir.png" },
        { key: "Staff04", title: "Dr. Gaurav chahan", Subtitle: "Co-convenor", email: "gaurav@iiti.ac.in", img: "/images/gaurav_sir.png" },
        { key: "Staff05", title: "Dr. Bibekananda Maji", Subtitle: "Co-convenor", email: "bibekanandamaji@iiti.ac.in", img: "/images/maji_sir.jpeg" }
    ];

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },

        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const togglePrevious = (key) => {
        setOpenPrevious(
            openPrevious === key ? null : key
        );
    };

    return (
        <div className="bg-slate-950 min-h-screen w-full pt-5 pb-20 px-4 font-poppins text-slate-100 selection:bg-teal-500 selection:text-white relative overflow-hidden">

            <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.12, 0.2, 0.12]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-0 left-1/4
                w-[500px] h-[500px]
                bg-teal-500/10 rounded-full
                blur-[120px] pointer-events-none"
            />

            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.16, 0.1]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-10 right-1/4
                w-[400px] h-[400px]
                bg-emerald-500/10 rounded-full
                blur-[120px] pointer-events-none"
            />


            {/* ================= MAIN CONTAINER ================= */}

            <div className="max-w-[1400px] mx-auto relative z-10">


                {/* ================= PAGE HEADING ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 relative"
                >

                    {/* Heading Glow */}

                    <div
                        className="absolute top-1/2 left-1/2
                        -translate-x-1/2 -translate-y-1/2
                        w-32 h-32
                        bg-teal-500 opacity-20
                        blur-3xl rounded-full
                        pointer-events-none"
                    />

                    <span
                        className="text-teal-400 text-xs
                        font-black uppercase
                        tracking-[0.3em]
                        block mb-3 relative z-10"
                    >
                        Our Pillars
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-100 mb-6 relative z-10 tracking-tight">
                        Faculty & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Staff</span>
                    </h1>

                    <motion.div
                        initial={{
                            width: 0
                        }}
                        animate={{
                            width: 64
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2
                        }}
                        className="h-1
                        bg-gradient-to-r
                        from-teal-400
                        to-emerald-400
                        mx-auto rounded-full
                        relative z-10"
                    />

                </motion.div>


                {/* ================= STAFF GRID ================= */}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
                >

                    {faculty.map((member) => (

                        <motion.div
                            key={member.key}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="group relative w-full bg-slate-900/60 backdrop-blur-md rounded-[2rem] border border-slate-800/80 hover:border-teal-500/30 p-6 flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_20px_40px_rgba(20,184,166,0.15)] overflow-hidden"
                        >

                            {/* ================= CARD DECORATION ================= */}

                            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-bl-full group-hover:bg-teal-500/10 transition-colors pointer-events-none"></div>

                            <div className="relative mb-6 w-32 h-32 z-10">
                                <div className="absolute inset-0 bg-teal-500 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>
                                <motion.img
                                    src={member.img}
                                    alt={member.title}
                                    whileHover={{
                                        scale: 1.05
                                    }}
                                    transition={{
                                        duration: 0.5
                                    }}
                                    className="relative
                                    w-full h-full
                                    rounded-full
                                    object-cover
                                    border-[3px]
                                    border-slate-800/80
                                    group-hover:border-teal-500/50
                                    shadow-lg
                                    transition-colors
                                    duration-500
                                    bg-slate-800/50"
                                />

                                {/* Verification Icon */}

                                <div
                                    className="absolute
                                    bottom-1 right-1
                                    bg-teal-500
                                    text-slate-950
                                    p-1.5 rounded-full
                                    border-2 border-slate-900
                                    shadow-sm z-10"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="3"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>

                            </div>

                            <h3 className="text-xl font-black text-slate-100 mb-1 group-hover:text-teal-400 transition-colors relative z-10">
                                {member.title}
                            </h3>
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 relative z-10">
                                {member.Subtitle}
                            </p>


                            <div className="w-full h-px bg-slate-800 mb-6 group-hover:bg-teal-500/20 transition-colors relative z-10"></div>

                            <div className="space-y-3 w-full relative z-10">

                                <a
                                    href={`mailto:${member.email}`}
                                    className="flex items-center
                                    justify-center gap-3
                                    text-sm text-slate-400
                                    hover:text-slate-100
                                    transition-colors
                                    p-2 rounded-xl
                                    hover:bg-slate-800/50"
                                >

                                    <svg
                                        className="w-4 h-4
                                        text-teal-400
                                        flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>

                                    <span
                                        className="font-medium
                                        truncate"
                                    >
                                        {member.email}
                                    </span>

                                </a>


                                {/* ================= PREVIOUS HOLDERS BUTTON ================= */}

                                {member.previousHolders &&
                                    member.previousHolders.length > 0 && (

                                        <button
                                            onClick={() =>
                                                togglePrevious(
                                                    member.key
                                                )
                                            }
                                            className="w-full mt-3
                                            flex items-center
                                            justify-center gap-2
                                            py-3 px-4
                                            rounded-xl
                                            bg-slate-800/60
                                            hover:bg-teal-500/10
                                            border border-slate-700
                                            hover:border-teal-500/40
                                            text-slate-300
                                            hover:text-teal-400
                                            transition-all
                                            duration-300"
                                        >

                                            <span
                                                className="text-sm
                                                font-semibold"
                                            >
                                                Previous Holders
                                            </span>

                                            <motion.span
                                                animate={{
                                                    rotate:
                                                        openPrevious ===
                                                            member.key
                                                            ? 180
                                                            : 0
                                                }}
                                                transition={{
                                                    duration: 0.3
                                                }}
                                            >
                                                ▼
                                            </motion.span>

                                        </button>

                                    )}


                                {/* ================= PREVIOUS HOLDERS DROPDOWN ================= */}

                                <AnimatePresence>

                                    {openPrevious === member.key && (

                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0
                                            }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0
                                            }}
                                            transition={{
                                                duration: 0.35
                                            }}
                                            className="overflow-hidden"
                                        >

                                            <div
                                                className="pt-4 mt-2
                                                border-t
                                                border-slate-800"
                                            >

                                                <h4
                                                    className="text-xs
                                                    font-black
                                                    uppercase
                                                    tracking-widest
                                                    text-teal-400
                                                    mb-4"
                                                >
                                                    Previous Holders
                                                </h4>


                                                <div
                                                    className="space-y-4"
                                                >

                                                    {member.previousHolders.map(
                                                        (
                                                            holder,
                                                            index
                                                        ) => (

                                                            <div
                                                                key={index}
                                                                className="flex
                                                                gap-3
                                                                items-start
                                                                bg-slate-800/40
                                                                rounded-xl
                                                                p-3
                                                                text-left
                                                                border
                                                                border-slate-800"
                                                            >

                                                                {/* Previous Holder Image */}

                                                                <img
                                                                    src={
                                                                        holder.img
                                                                    }
                                                                    alt={
                                                                        holder.name
                                                                    }
                                                                    className="w-12
                                                                    h-12
                                                                    rounded-full
                                                                    object-cover
                                                                    border-2
                                                                    border-slate-700
                                                                    flex-shrink-0"
                                                                />


                                                                {/* Previous Holder Information */}

                                                                <div
                                                                    className="min-w-0"
                                                                >

                                                                    <p
                                                                        className="text-sm
                                                                        font-bold
                                                                        text-slate-100"
                                                                    >
                                                                        {
                                                                            holder.name
                                                                        }
                                                                    </p>

                                                                    <p
                                                                        className="text-xs
                                                                        text-teal-400
                                                                        font-semibold
                                                                        mt-1"
                                                                    >
                                                                        {
                                                                            holder.year
                                                                        }
                                                                    </p>

                                                                    <p
                                                                        className="text-xs
                                                                        text-slate-400
                                                                        mt-2
                                                                        leading-relaxed"
                                                                    >
                                                                        {
                                                                            holder.description
                                                                        }
                                                                    </p>

                                                                </div>

                                                            </div>

                                                        )
                                                    )}

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
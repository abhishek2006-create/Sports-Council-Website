import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import clubs from "./Clubsdata.json";

export default function ClubDetail() {
    const { clubname } = useParams();

    const [showPreviousHeads, setShowPreviousHeads] = useState(false);

    const club = clubs.find((c) => c.name === clubname);

    if (!club)
        return (
            <div
                className="pt-28 pb-20 min-h-screen
                bg-slate-950 text-slate-100
                font-poppins flex flex-col
                items-center justify-center
                relative overflow-hidden
                selection:bg-teal-500
                selection:text-white"
            >

                <div
                    className="absolute top-1/2 left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-64 h-64
                    bg-teal-500/10
                    rounded-full
                    blur-[100px]
                    pointer-events-none"
                />

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    className="text-center relative z-10"
                >

                    <h2 className="text-3xl font-black text-slate-100">
                        Club not found!
                    </h2>

                    <p className="text-slate-400 mt-2">
                        Please check the URL and try again.
                    </p>

                </motion.div>

            </div>
        );

    return (
        <div
            className="pt-28 pb-16 px-4 md:px-10
            min-h-screen font-poppins
            bg-slate-950 text-slate-100
            flex flex-col items-center
            relative overflow-hidden
            selection:bg-teal-500
            selection:text-white"
        >

            {/* ================================================= */}
            {/* BACKGROUND EFFECTS */}
            {/* ================================================= */}

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
                bg-teal-500/10
                rounded-full
                blur-[120px]
                pointer-events-none"
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
                bg-emerald-500/10
                rounded-full
                blur-[120px]
                pointer-events-none"
            />


            {/* ================================================= */}
            {/* MAIN CARD */}
            {/* ================================================= */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: 30
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.6
                }}
                className="max-w-4xl w-full
                bg-slate-900/60
                backdrop-blur-md
                p-8 md:p-12
                rounded-3xl
                shadow-2xl
                shadow-black/40
                border border-slate-800/80
                relative z-10"
            >


                {/* ================================================= */}
                {/* TITLE */}
                {/* ================================================= */}

                <h1
                    className="text-4xl md:text-5xl
                    font-black text-slate-100
                    mb-8 text-center
                    leading-tight tracking-tight"
                >

                    {club.name}{" "}

                    <span
                        className="text-transparent
                        bg-clip-text
                        bg-gradient-to-r
                        from-teal-400
                        to-emerald-400"
                    >
                        Excellence
                    </span>

                </h1>


                {/* ================================================= */}
                {/* DESCRIPTION */}
                {/* ================================================= */}

                <div className="mt-10">

                    <p
                        className="text-lg md:text-xl
                        text-slate-400
                        leading-relaxed
                        text-justify"
                    >
                        {club.description}
                    </p>

                </div>


                <hr className="my-12 border-slate-800" />


                {/* ================================================= */}
                {/* CURRENT CLUB HEAD */}
                {/* ================================================= */}

                <div className="mb-10">

                    <h3
                        className="text-center text-xs
                        font-black uppercase
                        tracking-[0.3em]
                        text-teal-400 mb-8"
                    >
                        Club Leadership
                    </h3>


                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            delay: 0.3
                        }}
                        className="flex flex-col
                        items-center"
                    >

                        {/* Current Head Image */}

                        <div className="relative group">

                            <div
                                className="absolute -inset-1
                                bg-teal-500
                                rounded-full
                                blur
                                opacity-25
                                group-hover:opacity-50
                                transition duration-300"
                            />

                            <img
                                src={
                                    club.head?.photo ||
                                    "https://via.placeholder.com/150"
                                }
                                alt={club.head?.name}
                                className="relative
                                w-32 h-32
                                rounded-full
                                object-cover
                                border-4
                                border-slate-950
                                shadow-lg
                                bg-slate-800"
                            />

                        </div>


                        {/* Current Head Name */}

                        <h4
                            className="mt-4
                            text-2xl
                            font-black
                            text-slate-100"
                        >
                            {club.head?.name || "Lead Name"}
                        </h4>


                        <p
                            className="text-teal-400
                            font-bold
                            uppercase
                            tracking-widest
                            text-sm"
                        >
                            Current Club Head
                        </p>

                    </motion.div>

                </div>


                {/* ================================================= */}
                {/* PREVIOUS HEADS BUTTON */}
                {/* ================================================= */}

                {club.previousHeads &&
                    club.previousHeads.length > 0 && (

                    <div className="mb-12">

                        <button
                            onClick={() =>
                                setShowPreviousHeads(
                                    !showPreviousHeads
                                )
                            }
                            className="mx-auto
                            flex items-center
                            justify-center
                            gap-3
                            px-6 py-3
                            rounded-xl
                            bg-slate-800/70
                            border border-slate-700
                            hover:border-teal-500/50
                            hover:bg-teal-500/10
                            text-slate-300
                            hover:text-teal-400
                            transition-all
                            duration-300"
                        >

                            <span
                                className="font-semibold"
                            >
                                Previous Club Heads
                            </span>


                            <motion.span
                                animate={{
                                    rotate:
                                        showPreviousHeads
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


                        {/* ================================================= */}
                        {/* PREVIOUS HEADS DROPDOWN */}
                        {/* ================================================= */}

                        <AnimatePresence>

                            {showPreviousHeads && (

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
                                        duration: 0.4
                                    }}
                                    className="overflow-hidden"
                                >

                                    <div
                                        className="mt-8
                                        border-t
                                        border-slate-800
                                        pt-8"
                                    >

                                        <h3
                                            className="text-center
                                            text-xs
                                            font-black
                                            uppercase
                                            tracking-[0.3em]
                                            text-teal-400
                                            mb-8"
                                        >
                                            Previous Club Heads
                                        </h3>


                                        {/* Previous Heads Grid */}

                                        <div
                                            className="grid
                                            grid-cols-1
                                            sm:grid-cols-2
                                            gap-5"
                                        >

                                            {club.previousHeads.map(
                                                (holder, index) => (

                                                    <motion.div
                                                        key={index}
                                                        initial={{
                                                            opacity: 0,
                                                            y: 20
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            y: 0
                                                        }}
                                                        transition={{
                                                            delay:
                                                                index *
                                                                0.1
                                                        }}
                                                        className="bg-slate-800/40
                                                        border
                                                        border-slate-800
                                                        rounded-2xl
                                                        p-5
                                                        flex
                                                        items-center
                                                        gap-4
                                                        hover:border-teal-500/30
                                                        hover:bg-slate-800/60
                                                        transition-all
                                                        duration-300"
                                                    >

                                                        {/* Previous Head Image */}

                                                        <div
                                                            className="relative
                                                            flex-shrink-0"
                                                        >

                                                            <div
                                                                className="absolute
                                                                -inset-1
                                                                bg-teal-500/20
                                                                rounded-full
                                                                blur-sm"
                                                            />

                                                            <img
                                                                src={
                                                                    holder.photo ||
                                                                    "https://via.placeholder.com/100"
                                                                }
                                                                alt={
                                                                    holder.name
                                                                }
                                                                className="relative
                                                                w-20
                                                                h-20
                                                                rounded-full
                                                                object-cover
                                                                border-2
                                                                border-slate-700
                                                                bg-slate-800"
                                                            />

                                                        </div>


                                                        {/* Previous Head Details */}

                                                        <div
                                                            className="min-w-0"
                                                        >

                                                            <h4
                                                                className="text-base
                                                                font-black
                                                                text-slate-100"
                                                            >
                                                                {
                                                                    holder.name
                                                                }
                                                            </h4>


                                                            <p
                                                                className="text-xs
                                                                font-bold
                                                                text-teal-400
                                                                uppercase
                                                                tracking-wider
                                                                mt-1"
                                                            >
                                                                {
                                                                    holder.year
                                                                }
                                                            </p>


                                                            <p
                                                                className="text-sm
                                                                text-slate-400
                                                                mt-2
                                                                leading-relaxed"
                                                            >
                                                                {
                                                                    holder.description
                                                                }
                                                            </p>

                                                        </div>

                                                    </motion.div>

                                                )
                                            )}

                                        </div>

                                    </div>

                                </motion.div>

                            )}

                        </AnimatePresence>

                    </div>

                )}


                {/* ================================================= */}
                {/* GALLERY */}
                {/* ================================================= */}

                <div className="mb-12">

                    <h3
                        className="text-center text-xs
                        font-black uppercase
                        tracking-[0.3em]
                        text-teal-400 mb-8"
                    >
                        Club Gallery
                    </h3>


                    <div
                        className="grid
                        grid-cols-1
                        sm:grid-cols-2
                        md:grid-cols-3
                        gap-6"
                    >

                        {club.gallery?.map(
                            (image, index) => (

                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1
                                    }}
                                    transition={{
                                        delay:
                                            index * 0.1
                                    }}
                                    className="overflow-hidden
                                    rounded-2xl
                                    border
                                    border-slate-800
                                    bg-slate-900
                                    shadow-lg"
                                >

                                    <img
                                        src={image}
                                        alt={`Gallery ${
                                            index + 1
                                        }`}
                                        className="w-full
                                        h-56
                                        object-cover
                                        hover:scale-110
                                        transition-transform
                                        duration-500"
                                    />

                                </motion.div>

                            )
                        )}

                    </div>

                </div>


                {/* ================================================= */}
                {/* FOOTER TAGS */}
                {/* ================================================= */}

                <div
                    className="mt-10 pt-8
                    border-t
                    border-slate-800
                    flex flex-wrap
                    justify-center
                    gap-4"
                >

                    <span
                        className="px-6 py-2
                        bg-teal-500
                        text-slate-950
                        rounded-full
                        font-bold text-sm
                        tracking-wide
                        shadow-lg
                        shadow-teal-500/20"
                    >
                        Active Club
                    </span>


                    <span
                        className="px-6 py-2
                        bg-teal-500/10
                        text-teal-400
                        border
                        border-teal-500/30
                        rounded-full
                        font-bold text-sm
                        tracking-wide"
                    >
                        IIT Indore
                    </span>

                </div>

            </motion.div>

        </div>
    );
}
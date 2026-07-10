import DisplayContext from '../context/DisplayContext';
import { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const categoryContent = {
  "JOSH 5.0": {
    title: "JOSH",
    img: "https://res.cloudinary.com/dats2xfzl/image/upload/v1783662509/Gemini_Generated_Image_mbu54zmbu54zmbu5_janxqv.png",
    route: "/events/josh",
    tagline: "Unleash the Fire Within",
    description:
      "JOSH 2.0 is the annual sports fest of IIT Indore featuring high-energy competitions, inter-college participation, and a celebration of sportsmanship."
  },
  "General Championship": {
    title: "General Championship",
    img: "https://res.cloudinary.com/dats2xfzl/image/upload/v1783665120/gemini-2.5-flash-image_remove_everything_written_except_General_Champianship_make_correction_in_spellin-0_zbn6np.jpg",
    route: "/events/gc",
    tagline: "The Ultimate Battle for Glory",
    description:
      "The General Championship is a year-long competition among hostels across multiple sports to crown the best overall hostel."
  },
  "Shaurya": {
    title: "Shaurya",
    img: "https://res.cloudinary.com/dats2xfzl/image/upload/v1783662768/Gemini_Generated_Image_8z4yrh8z4yrh8z4y_lggehg.png",
    route: "/events/shaurya",
    tagline: "Unity through Competition",
    description:
      "Shaurya celebrates competitive spirit, strength, teamwork, and sportsmanship."
  }
};

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Events() {
  const { getEvents } = useContext(DisplayContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    getEvents();
  }, []);

  const [currentEvents] = useState([
    // {
    //   id: 1,
    //   title: "Inter-Hostel Cricket",
    //   route: "/events/cricket",
    //   date: "15 Feb 2025",
    //   status: "live",
    // },
    // {
    //   id: 1,
    //   title: "Inter-Hostel Cricket",
    //   route: "/events/cricket",
    //   date: "15 Feb 2025",
    //   status: "upcoming",
    // },
    // {
    //   id: 1,
    //   title: "Inter-Hostel Cricket",
    //   route: "/events/cricket",
    //   date: "15 Feb 2025",
    //   status: "completed",
    // },
  ]);

  const getStatusRank = (status) => {
    switch (status) {
      case "live": return 1;
      case "upcoming": return 2;
      case "completed": return 3;
      default: return 4;
    }
  };

  const sortedEvents = [...currentEvents].sort(
    (a, b) => getStatusRank(a.status) - getStatusRank(b.status)
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "live": return "bg-red-500";
      case "upcoming": return "bg-amber-500";
      case "completed": return "bg-emerald-500";
      default: return "bg-slate-500";
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "live": return "Live";
      case "upcoming": return "Upcoming";
      case "completed": return "Completed";
      default: return "";
    }
  };

  return (
    <div className="pt-5 pb-20 min-h-screen font-poppins bg-slate-950 text-slate-100 selection:bg-teal-500 selection:text-white relative overflow-hidden">

      {/* Background Blobs */}
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
          className="text-center mb-16 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-teal-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div>
          <span className="text-teal-400 text-xs font-black uppercase tracking-[0.4em] block mb-3 relative z-10">
            Institutional Spirit
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-100 leading-none mb-6 relative z-10 tracking-tight">
            Flagship{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Events
            </span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto rounded-full relative z-10"
          />
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
              whileTap={{ scale: 0.96 }}
              onClick={() => setSelectedCategory("All")}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 ${selectedCategory === "All"
                ? "bg-teal-500 border-teal-500 text-slate-950 shadow-lg shadow-teal-500/20 scale-105"
                : "bg-slate-900/60 backdrop-blur-md border-slate-800 text-slate-400 hover:border-teal-500/50 hover:text-teal-400"
                }`}
            >
              Current Events
            </motion.button>
            {Object.keys(categoryContent).map((key) => (
              <motion.button
                key={key}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedCategory(key)}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 ${selectedCategory === key
                  ? "bg-teal-500 border-teal-500 text-slate-950 shadow-lg shadow-teal-500/20 scale-105"
                  : "bg-slate-900/60 backdrop-blur-md border-slate-800 text-slate-400 hover:border-teal-500/50 hover:text-teal-400"
                  }`}
              >
                {key}
              </motion.button>
            ))}
          </div>
        </motion.div>
        <div className="w-full min-h-[300px]">
          <AnimatePresence mode="wait">

            {selectedCategory === "All" ? (
              <motion.div
                key="all-events"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20, transition: { duration: 0.25 } }}
                transition={{ duration: 0.4 }}
                className="max-w-2xl mx-auto w-full"
              >
                {sortedEvents.length > 0 ? (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col divide-y divide-slate-800/80 border border-slate-800/80 rounded-2xl overflow-hidden bg-slate-900/40 backdrop-blur-md"
                  >
                    {sortedEvents.map((event) => (
                      <motion.button
                        key={event.id}
                        variants={itemVariants}
                        onClick={() => navigate(event.route)}
                        className={`group flex items-center justify-between gap-4 px-6 py-5 transition-colors duration-300 text-left ${event.status === "completed"
                          ? "hover:bg-slate-800/30 opacity-60 hover:opacity-100"
                          : "hover:bg-slate-800/40"
                          }`}
                      >
                        <div className="flex items-center gap-4">
                          <span
                            className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${getStatusColor(event.status)} ${event.status === "live" ? "animate-pulse" : ""
                              }`}
                          />
                          <div>
                            <div className="flex items-center gap-3">
                              <h3
                                className={`font-bold text-base group-hover:text-teal-400 transition-colors ${event.status === "completed"
                                  ? "text-slate-400 line-through decoration-slate-600"
                                  : "text-slate-100"
                                  }`}
                              >
                                {event.title}
                              </h3>
                              <span
                                className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${event.status === "live"
                                  ? "text-red-400 border-red-500/30 bg-red-500/10"
                                  : event.status === "upcoming"
                                    ? "text-amber-400 border-amber-500/30 bg-amber-500/10"
                                    : "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
                                  }`}
                              >
                                {getStatusLabel(event.status)}
                              </span>
                            </div>
                            <span className="text-slate-500 text-xs font-medium">
                              {event.date}
                            </span>
                          </div>
                        </div>

                        <span className="text-slate-500 group-hover:text-teal-400 group-hover:translate-x-1 transition-all duration-300 text-lg flex-shrink-0">
                          →
                        </span>
                      </motion.button>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center py-10"
                  >
                    <div className="relative max-w-lg w-full bg-slate-900/50 backdrop-blur-md rounded-[2.5rem] border border-slate-800/80 shadow-2xl shadow-black/30 p-12 md:p-16 text-center overflow-hidden">

                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none" />
                      <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />

                      <motion.div
                        animate={{
                          y: [0, -12, 0],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative z-10 mb-8 inline-flex items-center justify-center"
                      >
                        <div className="relative">

                          <motion.div
                            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                            className="absolute inset-0 w-24 h-24 bg-teal-500/20 rounded-full"
                          />

                          <div className="w-24 h-24 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-full flex items-center justify-center border-2 border-teal-500/30 shadow-lg shadow-teal-500/10">
                            <svg
                              className="w-10 h-10 text-teal-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative z-10"
                      >
                        <h3 className="text-3xl md:text-4xl font-black text-slate-100 mb-3 tracking-tight">
                          Coming{" "}
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                            Soon
                          </span>
                        </h3>

                        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-sm mx-auto">
                          Exciting sports events are being planned! Stay tuned for upcoming
                          tournaments, matches, and competitions.
                        </p>

                        <div className="flex justify-center gap-2 mb-8">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 1, 0.3],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut",
                              }}
                              className="w-2 h-2 bg-teal-400 rounded-full"
                            />
                          ))}
                        </div>

                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mx-auto mb-6" />

                        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                          <div className="flex items-center justify-center gap-2 text-slate-500 text-xs font-medium">
                            <svg className="w-4 h-4 text-teal-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            Notifications enabled
                          </div>
                          <div className="flex items-center justify-center gap-2 text-slate-500 text-xs font-medium">
                            <svg className="w-4 h-4 text-teal-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Updates will appear here
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="mt-8 text-slate-500 text-sm"
                    >
                      Meanwhile, explore our{" "}
                      <button
                        onClick={() => setSelectedCategory("JOSH 5.0")}
                        className="text-teal-400 hover:text-teal-300 font-bold underline underline-offset-4 transition-colors"
                      >
                        flagship events
                      </button>{" "}
                      →
                    </motion.p>
                  </motion.div>

                )}
              </motion.div>

            ) : (

              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="max-w-6xl mx-auto bg-slate-900/60 backdrop-blur-md rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.4)] border border-slate-800/80 overflow-hidden flex flex-col md:flex-row"
              >
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="md:w-1/2 relative min-h-[300px] md:min-h-[500px]"
                >
                  <img
                    src={categoryContent[selectedCategory].img}
                    alt={categoryContent[selectedCategory].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 to-transparent mix-blend-multiply"></div>
                  <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="absolute top-6 left-6 bg-slate-950/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-slate-800/80"
                  >
                    <span className="text-teal-400 font-bold text-xs uppercase tracking-wide">
                      Featured Event
                    </span>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-slate-900/40 relative"
                >
                  <div className="absolute top-4 right-6 text-9xl font-black text-slate-800/40 select-none pointer-events-none">
                    {selectedCategory.charAt(0)}
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.25 }}
                      className="inline-block px-3 py-1 mb-4 border border-teal-500/50 rounded-full"
                    >
                      <span className="text-teal-400 font-bold uppercase tracking-[0.1em] text-xs">
                        {categoryContent[selectedCategory].tagline}
                      </span>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.3 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-100 mb-8 leading-[1.1]"
                    >
                      {categoryContent[selectedCategory].title}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.35 }}
                      className="text-lg text-slate-400 leading-relaxed text-justify mb-10 font-medium"
                    >
                      {categoryContent[selectedCategory].description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.4 }}
                      className="flex flex-wrap gap-4"
                    >
                      <motion.button
                        whileHover={{ y: -4, scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => navigate(categoryContent[selectedCategory].route)}
                        className="px-8 py-4 bg-teal-500 text-slate-950 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-teal-600 transition-all duration-300 shadow-xl shadow-teal-500/20"
                      >
                        View Details
                      </motion.button>
                      <motion.button
                        whileHover={{ y: -4, scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setSelectedCategory("All")}
                        className="px-8 py-4 bg-slate-800 text-slate-100 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-slate-700 transition-all duration-300 border border-slate-700"
                      >
                        Back
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
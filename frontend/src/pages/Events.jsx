import DisplayContext from '../context/DisplayContext';
import { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const categoryContent = {
  "JOSH 2.0": {
    title: "JOSH",
    img: "",
    tagline: "Unleash the Fire Within",
    description:
      "JOSH 2.0 is the annual sports fest of IIT Indore featuring high-energy competitions, inter-college participation, and a celebration of sportsmanship."
  },
  "General Championship": {
    title: "General Championship",
    img: "",
    tagline: "The Ultimate Battle for Glory",
    description:
      "The General Championship is a year-long competition among hostels across multiple sports to crown the best overall hostel."
  },
  "Inter Hostel": {
    title: "Inter Hostel",
    img: "",
    tagline: "Unity through Competition",
    description:
      "Inter Hostel tournaments encourage competitive spirit among hostels in various indoor and outdoor sports."
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
  const { getEvents, events } = useContext(DisplayContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    getEvents();
  }, []);
  const findEventId = (categoryKey) => {
    if (!events || events.length === 0) return null;

    const keyword = categoryKey.toLowerCase();

    const matched = events.find((e) =>
      e.Title?.toLowerCase().includes(keyword) ||
      keyword.includes(e.Title?.toLowerCase())
    );

    return matched ? matched.id : null;
  };

  const handleViewDetails = (categoryKey) => {
    const eventId = findEventId(categoryKey);
    if (eventId) {
      navigate(`/events/${eventId}`);
    } else {
      alert("Event details not available yet. Check back soon!");
    }
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
              All Events
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

        <div className="w-full min-h-[400px]">
          <AnimatePresence mode="wait">

            {selectedCategory === "All" ? (
              <motion.div
                key="all-events"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: 20, transition: { duration: 0.25 } }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {Object.entries(categoryContent).map(([key, data]) => (
                  <motion.div
                    key={key}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedCategory(key)}
                    className="group cursor-pointer bg-slate-900/60 backdrop-blur-md rounded-3xl border border-slate-800/80 shadow-lg hover:shadow-[0_20px_40px_rgba(20,184,166,0.15)] hover:border-teal-500/30 transition-all duration-500 overflow-hidden flex flex-col h-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={data.img}
                        alt={data.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.7 }}
                      />
                      <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/10 transition-colors"></div>
                    </div>

                    <div className="p-8 flex-1 flex flex-col items-start">
                      <span className="text-teal-400 text-[10px] font-black uppercase tracking-widest mb-2">
                        {data.tagline}
                      </span>
                      <h3 className="text-2xl font-black text-slate-100 mb-3 leading-tight">
                        {data.title}
                      </h3>
                      <div className="mt-auto pt-4 flex items-center text-slate-300 font-bold text-sm group-hover:text-teal-400 transition-colors">
                        Read More{" "}
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
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
                        onClick={() => handleViewDetails(selectedCategory)}
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
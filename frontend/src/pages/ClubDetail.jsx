import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import clubs from "./Clubsdata.json";

export default function ClubDetail() {
  const { clubname } = useParams();
  const club = clubs.find((c) => c.name === clubname);

  if (!club)
    return (
      <div className="pt-28 pb-20 min-h-screen bg-slate-950 text-slate-100 font-poppins flex flex-col items-center justify-center relative overflow-hidden selection:bg-teal-500 selection:text-white">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center relative z-10"
        >
          <h2 className="text-3xl font-black text-slate-100">Club not found!</h2>
          <p className="text-slate-400 mt-2">Please check the URL and try again.</p>
        </motion.div>
      </div>
    );

  return (
    <div className="pt-28 pb-16 px-4 md:px-10 min-h-screen font-poppins bg-slate-950 text-slate-100 flex flex-col items-center relative overflow-hidden selection:bg-teal-500 selection:text-white">

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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full bg-slate-900/60 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl shadow-black/40 border border-slate-800/80 relative z-10"
      >

        <h1 className="text-4xl md:text-5xl font-black text-slate-100 mb-8 text-center leading-tight tracking-tight">
          {club.name} <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Excellence</span>
        </h1>

        <div className="mt-10">
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed text-justify">
            {club.description}
          </p>
        </div>

        <hr className="my-12 border-slate-800" />

        <div className="mb-16">
          <h3 className="text-center text-xs font-black uppercase tracking-[0.3em] text-teal-400 mb-8">
            Club Leadership
          </h3>

          <div
            className={`grid gap-10 justify-items-center ${club.CoHead?.name ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
              }`}
          >
            {/* Club Head */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-teal-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>

                <img
                  src={club.head?.photo || "https://via.placeholder.com/150"}
                  alt={club.head?.name || "Club Head"}
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-slate-950 shadow-lg bg-slate-800"
                />
              </div>

              <h4 className="mt-4 text-2xl font-black text-slate-100">
                {club.head?.name || "Lead Name"}
              </h4>

              <p className="text-teal-400 font-bold uppercase tracking-widest text-sm">
                Club Head
              </p>
            </motion.div>

            {club.CoHead?.name && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-teal-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>

                  <img
                    src={club.CoHead.photo || "https://via.placeholder.com/150"}
                    alt={club.CoHead.name}
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-slate-950 shadow-lg bg-slate-800"
                  />
                </div>

                <h4 className="mt-4 text-2xl font-black text-slate-100">
                  {club.CoHead.name}
                </h4>

                <p className="text-teal-400 font-bold uppercase tracking-widest text-sm">
                  Co-Head
                </p>
              </motion.div>
            )}
          </div>
        </div>

        {/* <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-teal-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <img
                src={club.CoHead?.photo || "https://via.placeholder.com/150"}
                alt={club.CoHead?.name}
                className="relative w-32 h-32 rounded-full object-cover border-4 border-slate-950 shadow-lg bg-slate-800"
              />
            </div>
            <h4 className="mt-4 text-2xl font-black text-slate-100">{club.CoHead?.name || "Lead Name"}</h4>
            <p className="text-teal-400 font-bold uppercase tracking-widest text-sm"> Co-Head</p>
          </motion.div>
        </div> */}

        {/* <div className="mb-12">
          <h3 className="text-center text-xs font-black uppercase tracking-[0.3em] text-teal-400 mb-8">Core Members</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {club.members?.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="flex flex-col items-center group"
              >
                <img
                  src={member.photo || "https://via.placeholder.com/100"}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-slate-800 group-hover:border-teal-500 transition-colors duration-300 shadow-md bg-slate-800"
                />
                <p className="mt-3 font-bold text-slate-100 text-center leading-tight group-hover:text-teal-400 transition-colors">{member.name}</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter mt-1">{member.role || "Member"}</p>
              </motion.div>
            ))}
          </div>
        </div> */}

        <div className="mb-12">
          <h3 className="text-center text-xs font-black uppercase tracking-[0.3em] text-teal-400 mb-8">
            Club Gallery
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {club.gallery?.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800 flex flex-wrap justify-center gap-4">
          <span className="px-6 py-2 bg-teal-500 text-slate-950 rounded-full font-bold text-sm tracking-wide shadow-lg shadow-teal-500/20">
            Active Club
          </span>
          <span className="px-6 py-2 bg-teal-500/10 text-teal-400 border border-teal-500/30 rounded-full font-bold text-sm tracking-wide">
            IIT Indore
          </span>
        </div>
      </motion.div>
    </div>
  );
}
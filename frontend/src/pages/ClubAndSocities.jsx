import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import clubs from "./Clubsdata.json";

export default function ClubsGallery() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen pt-5 pb-16 px-6 md:px-12 font-poppins bg-slate-950 text-slate-100 relative overflow-hidden selection:bg-teal-500 selection:text-white">

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

      <div className="relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal-400 text-xs font-black uppercase tracking-[0.4em] block mb-3">
            Sports Society
          </span>

          <h1 className="text-5xl md:text-6xl font-black text-slate-100 mb-4 tracking-tight">
            Sports <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Clubs</span>
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto mb-8 rounded-full"
          />

          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Welcome to the Sports page! Explore our diverse range of athletic
            clubs and societies at IIT Indore.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto"
        >
          {clubs.map((club) => (
            <motion.div key={club.id} variants={itemVariants}>
              <Link to={`/clubs/${club.name}`} className="group no-underline">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-slate-900/60 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-800/80 shadow-lg hover:shadow-[0_20px_40px_rgba(20,184,166,0.15)] hover:border-teal-500/30 transition-all duration-500"
                >

                  <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-bl-full group-hover:bg-teal-500/10 transition-colors pointer-events-none"></div>

                  <div className="relative overflow-hidden">
                    <motion.img
                      src={
                        club.image ||
                        "https://imgs.search.brave.com/IwVBQDwOl6ndfg_gEt79gTw0Oza_V68JpuFgCUh8BFI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBnLzA4LzA1LzIzLzc4LzM2MF9GXzgwNTIzNzgwMV8xYm5oYkZ2aWl6VVJkSUVGeVRXNWlDaEFia0k1Y1VuWS5qcGc"
                      }
                      alt={club.name}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-black text-slate-100 group-hover:text-teal-400 transition-colors duration-300">
                      {club.name}
                    </h3>
                    <div className="mt-4 flex justify-center items-center">
                      <p className="text-teal-400 text-xs font-bold uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-300">
                        View Details
                      </p>
                      <span className="ml-2 text-teal-400 transform group-hover:translate-x-2 transition-transform duration-300">
                        →
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
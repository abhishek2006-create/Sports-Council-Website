import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-slate-950 font-poppins text-white overflow-hidden py-24 px-6">

      {/* Background Glow */}
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
        className="absolute top-0 left-1/2 -translate-x-1/2
        w-[500px] h-[500px]
        bg-teal-500/10 rounded-full
        blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal-400 text-xs font-black uppercase tracking-[0.3em] block mb-3">
            Get In Touch
          </span>

          <h1 className="text-4xl md:text-6xl font-black text-slate-100">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Sports Council
            </span>
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto mt-6 rounded-full"
          />
        </motion.div>


        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* GS Sports */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900/70 backdrop-blur-md
            rounded-3xl border border-slate-800
            p-8 hover:border-teal-500/50
            transition-all duration-300"
          >

            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 rounded-2xl
              bg-teal-500/10
              flex items-center justify-center
              text-teal-400 text-2xl">
                ⚽
              </div>

              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  General Secretary
                </p>

                <h2 className="text-2xl font-bold text-white">
                  GS Sports
                </h2>
              </div>

            </div>

            <div className="border-t border-slate-800 pt-5">

              <p className="text-slate-400 text-sm mb-2">
                Email
              </p>

              <a
                href="mailto:gs.sports@iiti.ac.in"
                className="text-teal-400 font-semibold hover:text-emerald-400 transition-colors"
              >
                gs.sports@iiti.ac.in
              </a>

            </div>

          </motion.div>


          {/* Joint Secretaries */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-900/70 backdrop-blur-md
            rounded-3xl border border-slate-800
            p-8 hover:border-teal-500/50
            transition-all duration-300"
          >

            <div className="flex items-center gap-4 mb-6">

              <div className="w-14 h-14 rounded-2xl
              bg-teal-500/10
              flex items-center justify-center
              text-teal-400 text-2xl">
                👥
              </div>

              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Student Representatives
                </p>

                <h2 className="text-2xl font-bold text-white">
                  Joint Secretaries
                </h2>
              </div>

            </div>

            <div className="border-t border-slate-800 pt-5 space-y-4">

              {/* Joint Secretary 1 */}
              <div>
                <p className="text-white font-semibold">
                  Joint Secretary 1
                </p>

                <a
                  href="mailto:jointsecretary1@iiti.ac.in"
                  className="text-teal-400 text-sm hover:text-emerald-400 transition-colors"
                >
                  email id
                </a>
              </div>


              {/* Joint Secretary 2 */}
              <div>
                <p className="text-white font-semibold">
                  Joint Secretary 2
                </p>

                <a
                  href="mailto:jointsecretary2@iiti.ac.in"
                  className="text-teal-400 text-sm hover:text-emerald-400 transition-colors"
                >
                  jointsecretary2@iiti.ac.in
                </a>
              </div>

            </div>

          </motion.div>


          {/* Sports Council */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2
            bg-slate-900/70 backdrop-blur-md
            rounded-3xl border border-slate-800
            p-8 md:p-10
            hover:border-teal-500/50
            transition-all duration-300"
          >

            <div className="flex flex-col md:flex-row
            md:items-center md:justify-between gap-6">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl
                bg-teal-500/10
                flex items-center justify-center
                text-teal-400 text-3xl">
                  🏆
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Official Contact
                  </p>

                  <h2 className="text-3xl font-bold text-white">
                    Sports Council
                  </h2>
                </div>

              </div>


              <div className="md:text-right">

                <p className="text-slate-400 text-sm mb-2">
                  Email
                </p>

                <a
                  href="mailto:sports.council@iiti.ac.in"
                  className="text-teal-400 text-lg font-semibold
                  hover:text-emerald-400 transition-colors"
                >
                  sports.council@iiti.ac.in
                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </div>
  );
}
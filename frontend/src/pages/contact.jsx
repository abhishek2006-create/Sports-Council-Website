import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
<<<<<<< HEAD
    <div className="relative min-h-[85vh] bg-slate-950 font-poppins selection:bg-teal-500 selection:text-white overflow-hidden flex items-center justify-center py-10 px-4">
=======
    <div className="relative min-h-screen bg-slate-950 font-poppins text-white overflow-hidden py-24 px-6">
>>>>>>> 3b862deb7ebd33e859319ebaf76013a706c9ca27

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
<<<<<<< HEAD
          className="text-center mb-6"
=======
          className="text-center mb-16"
>>>>>>> 3b862deb7ebd33e859319ebaf76013a706c9ca27
        >
          <span className="text-teal-400 text-xs font-black uppercase tracking-[0.3em] block mb-2">
            Get In Touch
          </span>
<<<<<<< HEAD
          <h1 className="text-3xl md:text-5xl font-black text-slate-100 leading-none mb-3 tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">& Feedback</span>
=======

          <h1 className="text-4xl md:text-6xl font-black text-slate-100">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Sports Council
            </span>
>>>>>>> 3b862deb7ebd33e859319ebaf76013a706c9ca27
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.6, delay: 0.2 }}
<<<<<<< HEAD
            className="h-1 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-slate-900/60 backdrop-blur-md rounded-2xl shadow-2xl shadow-black/40 border border-slate-800/80 p-6 md:p-8 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center justify-between bg-slate-800/50 rounded-2xl p-5 mb-6 border border-slate-700">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
=======
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
>>>>>>> 3b862deb7ebd33e859319ebaf76013a706c9ca27
              </div>

              <div>
<<<<<<< HEAD
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Email Us</p>
                <p className="text-slate-100 font-bold text-base">sports.council@iiti.ac.in</p>
              </div>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">IITI Sports Council</p>
              <p className="text-teal-400 font-bold text-xs">We listen to your voice</p>
            </div>
          </div>

          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group">
                <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest group-focus-within:text-teal-400 transition-colors">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm font-medium focus:bg-slate-900/50 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300"
                />
              </div>

              <div className="group">
                <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest group-focus-within:text-teal-400 transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm font-medium focus:bg-slate-900/50 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group">
                <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest group-focus-within:text-teal-400 transition-colors">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+91 98765..."
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm font-medium focus:bg-slate-900/50 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300"
                />
              </div>

              <div className="group">
                <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest group-focus-within:text-teal-400 transition-colors">
                  Select Sport / Topic
                </label>
                <div className="relative">
                  <select
                    name="sport"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-100 text-sm font-medium focus:bg-slate-900/50 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="General Query">General Query</option>
                    {clubs && clubs.map((club, index) => (
                      <option value={club.name} key={index}>{club.name}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
=======
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
                  href="mailto:ce240004008@iiti.ac.in"
                  className="text-teal-400 text-sm hover:text-emerald-400 transition-colors"
                >
                  ce240004008@iiti.ac.in
                </a>
              </div>


              {/* Joint Secretary 2 */}
              <div>
                <p className="text-white font-semibold">
                  Joint Secretary 2
                </p>

                <a
                  href="mailto:che240008033@iiti.ac.in"
                  className="text-teal-400 text-sm hover:text-emerald-400 transition-colors"
                >
                  che240008033@iiti.ac.in
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
>>>>>>> 3b862deb7ebd33e859319ebaf76013a706c9ca27
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

<<<<<<< HEAD
            <div className="group">
              <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest group-focus-within:text-teal-400 transition-colors">
                Short Summary
              </label>
              <input
                type="text"
                name="summary"
                placeholder="One line description of your query"
                required
                className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm font-medium focus:bg-slate-900/50 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300"
              />
            </div>

            <div className="group">
              <label className="block text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-widest group-focus-within:text-teal-500 transition-colors">
                Detailed Description
              </label>
              <textarea
                name="details"
                rows="3"
                placeholder="Tell us more..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm font-medium focus:bg-slate-900/50 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={!loading ? { scale: 1.02 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              type="submit"
              disabled={loading}
              className={`w-full font-black py-3 rounded-xl shadow-lg transition-all duration-300 transform uppercase tracking-[0.2em] text-[10px] mt-1
                ${loading
                  ? 'bg-slate-800 cursor-not-allowed text-slate-500 shadow-none'
                  : 'bg-teal-500 hover:bg-emerald-500 text-slate-950 hover:shadow-teal-500/30 hover:-translate-y-1 active:scale-95'}`}
            >
              {loading ? 'Sending...' : 'Submit Message'}
            </motion.button>
          </form>
        </motion.div>
=======
          </motion.div>

        </div>

>>>>>>> 3b862deb7ebd33e859319ebaf76013a706c9ca27
      </div>

    </div>
  );
}
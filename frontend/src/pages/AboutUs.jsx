import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const AboutUs = ({ stats }) => {
  return (
    <section className="bg-slate-950 py-20 px-6 md:px-16 w-full relative overflow-hidden font-poppins" id="about">

      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <span className="h-1 w-12 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"></span>
            <span className="text-teal-400 font-black uppercase tracking-[0.3em] text-xs">Who We Are</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-100 mb-6 leading-tight tracking-tight">
            Building a Legacy of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Sports Excellence
            </span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            The Sports Council of IIT Indore manages a wide array of sports and fitness clubs,
            promoting an active lifestyle on campus. We believe that sports are not just about
            winning, but about character building, teamwork, and resilience.
          </p>

          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Each year, we host major events like <strong className="text-slate-200">Lakshya</strong>, <strong className="text-slate-200">Josh</strong>, and the <strong className="text-slate-200">General Championship</strong>,
            highlighting student talent and fostering a spirit of healthy competition.
          </p>

          <button className="text-teal-400 font-bold flex items-center group">
            <Link to="/team">Learn More About Our Team</Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {stats && stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-slate-900/60 backdrop-blur-md p-6 rounded-3xl border border-slate-800/80 shadow-lg hover:shadow-teal-500/10 hover:border-teal-500/30 transition-all text-center group overflow-hidden"
            >

              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-bl-full group-hover:bg-teal-500/10 transition-colors pointer-events-none"></div>

              <div className="text-4xl md:text-5xl font-black text-teal-400 mb-2 group-hover:scale-110 transition-transform duration-300 relative z-10">
                {stat.Stat_number}
              </div>
              <div className="text-slate-400 font-bold text-xs md:text-sm uppercase tracking-[0.15em] relative z-10">
                {stat.Stat_name}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
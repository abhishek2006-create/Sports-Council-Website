import React, { useContext, useEffect } from 'react';
import DisplayContext from '../context/DisplayContext';

import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';

export default function Home() {
  const { updates, getUpdates, stats, getStats } = useContext(DisplayContext);

  useEffect(() => {
    getUpdates();
    getStats();
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-slate-950 font-poppins selection:bg-teal-500 selection:text-white">

      <section className="relative bg-slate-950 min-h-[90vh] flex items-center px-6 md:px-16 py-12 overflow-hidden">

        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center md:text-left"
          >
            <span className="text-teal-400 text-xs font-black uppercase tracking-[0.3em] block">
              Sports Council Management
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                Sports Council
              </span>
            </h1>
            <h2 className="text-4xl md:text-5xl font-black text-slate-100 tracking-tight">
              IIT Indore
            </h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
              Dedicated to fostering a vibrant sports culture, promoting physical
              well-being, and achieving excellence in various athletic disciplines at IIT Indore.
            </p>

            <div className="pt-4">
              <Link to="/clubs">
                <button className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-black py-3 px-8 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-teal-500/20 hover:shadow-xl transform hover:-translate-y-1 active:scale-95">
                  Explore Sports
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="p-1 rounded-3xl bg-gradient-to-br from-teal-400/40 to-emerald-400/40">
              <img
                src="/images/G2.png"
                alt="IIT Indore Sports Team"
                className="w-full h-auto object-cover rounded-3xl shadow-2xl bg-slate-950"
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* ================= Official Fest Section ================= */}
<section className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-6">
  <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

    {/* Left Content */}
    <div className="lg:w-1/2">
      <span className="text-teal-400 font-semibold uppercase tracking-wider">
        Official College Sports Fest
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
        Lakshya
      </h2>

      <p className="text-slate-300 text-lg leading-relaxed mb-8">
        Experience IIT Indore's flagship sports festival featuring
        thrilling competitions, exciting events, inspiring athletes,
        workshops, and unforgettable moments that bring together
        participants from colleges across the country.
      </p>

      <a
        href="/fest"
        className="inline-block bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white font-semibold px-7 py-3 rounded-xl shadow-lg transition duration-300"
      >
        Explore Fest →
      </a>
    </div>

    {/* Right Image */}
    <div className="lg:w-1/2 flex justify-center">
      <div className="p-1 rounded-3xl bg-gradient-to-br from-teal-400/40 to-emerald-400/40">
        <img
          src="https://ik.imagekit.io/q3cb0c9v5/lakshya/about/sport0.jpg?tr=w-3840,c-at_max"
          alt="Lakshya Sports Fest"
          className="rounded-3xl shadow-2xl w-full max-w-xl object-cover bg-slate-950"
        />
      </div>
    </div>

  </div>
</section>

      {/* <div className='relative bg-slate-950 py-16 w-full overflow-hidden'>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-teal-400 text-xs font-black uppercase tracking-[0.3em] block text-center mb-3">
            Numbers That Matter
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-100 text-center mb-12 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Impact</span>
          </h2>

          <div className='flex flex-wrap justify-center gap-8'>
            {stats && stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className='group relative bg-slate-900/60 backdrop-blur-md h-[180px] w-[180px] md:h-[220px] md:w-[220px] flex flex-col justify-center items-center rounded-3xl shadow-lg hover:shadow-teal-500/10 border border-slate-800/80 hover:border-teal-500/30 cursor-pointer transition-all overflow-hidden'
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-bl-full group-hover:bg-teal-500/10 transition-colors pointer-events-none"></div>

                <div className='text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wider text-center mb-2 relative z-10'>
                  {stat.Stat_name}
                </div>
                <div className='text-3xl md:text-4xl font-black text-teal-400 relative z-10'>
                  {stat.Stat_number}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div> */}
      {/* <div className='relative bg-slate-950 py-16 w-full overflow-hidden'>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <span className="text-teal-400 text-xs font-black uppercase tracking-[0.3em] block text-center mb-3">
            News Feed
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-100 text-center mb-12 tracking-tight">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Updates</span>
          </h2>

          <div className='space-y-6'>
            {updates && updates.map((update, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='group relative bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-teal-500/10 border border-slate-800/80 hover:border-teal-500/30 border-l-4 border-l-teal-500 transition-all overflow-hidden'
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-bl-full group-hover:bg-teal-500/10 transition-colors pointer-events-none"></div>

                <h3 className='text-xl md:text-2xl font-black text-slate-100 mb-2 relative z-10'>
                  {update.Title}
                </h3>
                <a
                  href={update.Link}
                  target='_blank'
                  rel="noreferrer"
                  className='text-teal-400 hover:text-emerald-400 font-bold underline break-all transition-colors relative z-10'
                >
                  View Details &rarr;
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div> */}

      <AboutUs />

    </div>
  );
}
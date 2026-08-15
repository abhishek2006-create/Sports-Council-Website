import React, { useContext, useEffect, useState } from 'react';
import DisplayContext from '../context/DisplayContext';

import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';

const flagshipEvents = [
  {
    id: "lakshya",
    title: "Lakshya",
    tagline: "Official College Sports Fest",
    description: "IIT Indore's flagship sports festival, bringing together athletes, competition, teamwork, and unforgettable sporting experiences from colleges across the nation. Experience thrilling competitions, exciting events, workshops, and energetic crowds.",
    img: "https://res.cloudinary.com/dats2xfzl/image/upload/v1783171452/lakshya_vbo9ry.jpg",
    instagram: "https://www.instagram.com/lakshya_iiti/",
    highlights: [
      { title: "Competitions", text: "Participate in inter-college sports tournaments across multiple disciplines." },
      { title: "Team Spirit", text: "Celebrate leadership, discipline, collaboration, and healthy competition." },
      { title: "Campus Energy", text: "Experience exciting matches, cheering crowds, and vibrant moments." }
    ],
    stats: [
      ["20+", "Colleges"],
      ["15+", "Sports"],
      ["1500+", "Athletes"],
      ["4 Days", "Fest duration"]
    ],
    gallery: [
      "https://res.cloudinary.com/dats2xfzl/image/upload/v1783171452/lakshya_vbo9ry.jpg",
      "/images/fest1.JPG",
      "/images/fest2.JPG",
      "/images/fest3.JPG"
    ]
  },
  {
    id: "josh",
    title: "Josh",
    tagline: "Unleash the Fire Within",
    description: "JOSH is IIT Indore's annual sports festival that celebrates determination, sportsmanship, teamwork, and the competitive spirit through exciting sporting events for the freshers. Students compete across numerous sports representing their teams.",
    img: "https://res.cloudinary.com/dats2xfzl/image/upload/v1783512684/IMG-20230912-WA0025_lcgz2e.jpg",
    instagram: "https://www.instagram.com/sports_iit_indore/",
    highlights: [
      { title: "Competitions", text: "Multiple sporting events conducted throughout the festival." },
      { title: "Team Spirit", text: "Teams compete with passion, determination and unity." },
      { title: "Campus Atmosphere", text: "Energetic crowds, cheering spectators and unforgettable moments." }
    ],
    stats: [
      ["10+", "Sports"],
      ["400+", "Participants"],
      ["50+", "Matches"],
      ["20+ Days", "Celebration"]
    ],
    gallery: [
      "https://res.cloudinary.com/dats2xfzl/image/upload/v1783511878/IMG-20250816-WA0007_sbdmee.jpg",
      "https://res.cloudinary.com/dats2xfzl/image/upload/v1783511980/IMG_20250825_195715189_1_mshbh5.jpg",
      "https://res.cloudinary.com/dats2xfzl/image/upload/v1783511870/IMG-20250817-WA0015_q4xcfd.jpg",
      "https://res.cloudinary.com/dats2xfzl/image/upload/v1783511585/IMG-20250902-WA0030_htwjej.jpg"
    ]
  },
  {
    id: "shaurya",
    title: "Shaurya",
    tagline: "Strength • Spirit • Victory",
    description: "Shaurya celebrates courage, endurance, teamwork, and the spirit of sports through exciting competitions and energetic campus participation. This is IIT Indore's Inter-Hostel event that brings students together to compete and showcase athletic potential.",
    img: "https://res.cloudinary.com/dats2xfzl/image/upload/v1783515886/IMG_20260129_205354_to1clx.jpg",
    instagram: "https://www.instagram.com/sports_iit_indore/",
    highlights: [
      { title: "Courage", text: "Shaurya encourages students to push limits and perform with confidence." },
      { title: "Hostel Pride", text: "Athletes compete with coordination, unity, and shared determination for hostels." },
      { title: "Sporting Excellence", text: "The event promotes discipline, fitness, sportsmanship, and excellence." }
    ],
    stats: [
      ["10+", "Events"],
      ["750+", "Participants"],
      ["Multiple", "Teams"],
      ["1", "Spirit"]
    ],
    gallery: [
      "https://res.cloudinary.com/dats2xfzl/image/upload/v1783514825/20260129_185012_khfgpz.jpg",
      "https://res.cloudinary.com/dats2xfzl/image/upload/v1783514445/IMG_20260131_190610_xwqikt.jpg",
      "https://res.cloudinary.com/dats2xfzl/image/upload/v1783514169/IMG_20260131_190612_fa8aw9.jpg",
      "https://res.cloudinary.com/dats2xfzl/image/upload/v1783514812/IMG_20260129_195900_q7hpgg.jpg"
    ]
  },
  {
    id: "gc",
    title: "General Championship",
    tagline: "Year-wise Championship",
    description: "The General Championship is the most prestigious inter-year competition at IIT Indore where every point matters and every batch competes for ultimate glory. Ranging across 2 months, it fosters batchmate bonding and healthy rivalry.",
    img: "/images/fest7.JPG",
    instagram: "https://www.instagram.com/sports_iit_indore/",
    highlights: [
      { title: "Pride", text: "Every athlete competes to earn points and bring glory to their year team." },
      { title: "Multiple Sports", text: "Events span cricket, football, badminton, volleyball, athletics and many more." },
      { title: "2-Month Battle", text: "GC continues throughout the academic year with points accumulated across tournaments." }
    ],
    stats: [
      ["6+", "Teams"],
      ["15+", "Sports"],
      ["1000+", "Participants"],
      ["1", "Champion"]
    ],
    gallery: [
      "/images/fest7.JPG",
      "/images/fest8.JPG",
      "/images/fest9.JPG",
      "/images/fest10.JPG"
    ]
  }
];

export default function Home() {
  const { updates, getUpdates, stats, getStats } = useContext(DisplayContext);
  const [activeEvent, setActiveEvent] = useState(null);

  useEffect(() => {
    getUpdates();
    getStats();
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-slate-950 font-poppins selection:bg-teal-500 selection:text-white">

      <section className="relative bg-slate-950 min-h-[90vh] flex items-center px-6 md:px-16 py-12 overflow-hidden">

        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <img
            src="/images/sports_logo.jpeg"
            alt="Sports Council Logo Background"
            className="w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] object-cover opacity-[0.06] rounded-full filter blur-[1px]"
          />
        </div>

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
      <section className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 px-6 relative z-10 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-teal-400 font-semibold uppercase tracking-wider text-xs block mb-2">
              Our Pride
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Events</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {flagshipEvents.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ y: -6 }}
                className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800/80 overflow-hidden shadow-lg flex flex-col h-full group transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-teal-400 font-bold uppercase tracking-wider text-[10px] block mb-1">
                      {event.tagline}
                    </span>
                    <h3 className="text-2xl font-black text-white leading-tight">
                      {event.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {event.description}
                  </p>
                  <div className="flex gap-3 mt-auto">
                    <button
                      onClick={() => setActiveEvent(event)}
                      className="flex-grow bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold py-2.5 px-3 rounded-xl text-[11px] uppercase tracking-wider transition-all duration-300 text-center"
                    >
                      Quick View
                    </button>
                    <Link
                      to={event.id === "lakshya" ? "/fest" : (event.id === "josh" ? "/events/josh" : (event.id === "shaurya" ? "/events/shaurya" : "/events/gc"))}
                      className="flex-grow border border-slate-700 hover:border-teal-500/50 hover:bg-teal-500/5 text-slate-200 font-bold py-2.5 px-3 rounded-xl text-[11px] uppercase tracking-wider transition-all duration-300 text-center"
                    >
                      Open Page
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveEvent(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl z-10 flex flex-col selection:bg-teal-500 selection:text-white"
            >
              <div className="relative h-48 md:h-64 flex-shrink-0">
                <img
                  src={activeEvent.img}
                  alt={activeEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <button
                  onClick={() => setActiveEvent(null)}
                  className="absolute top-4 right-4 bg-slate-950/70 hover:bg-slate-950 border border-slate-800 hover:border-slate-700 text-white rounded-full p-2.5 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-6 left-6 md:left-8">
                  <span className="text-teal-400 font-bold uppercase tracking-widest text-xs md:text-sm">
                    {activeEvent.tagline}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black text-white mt-1">
                    {activeEvent.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-8 flex-grow">
                {/* Description */}
                <div>
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed text-justify">
                    {activeEvent.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-teal-400 font-bold uppercase tracking-wider text-xs mb-4">
                    Key Highlights
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {activeEvent.highlights.map((highlight, idx) => (
                      <div key={idx} className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80">
                        <h5 className="text-white font-bold text-base mb-2">{highlight.title}</h5>
                        <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{highlight.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-teal-400 font-bold uppercase tracking-wider text-xs mb-4">
                    Stats at a Glance
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {activeEvent.stats.map((stat, idx) => (
                      <div key={idx} className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/50 text-center">
                        <div className="text-2xl md:text-3xl font-black text-teal-400">{stat[0]}</div>
                        <div className="text-slate-400 text-xs mt-1">{stat[1]}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h4 className="text-teal-400 font-bold uppercase tracking-wider text-xs mb-4">
                    Glimpses / Gallery
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {activeEvent.gallery.map((imgUrl, idx) => (
                      <div key={idx} className="h-32 md:h-40 rounded-xl overflow-hidden border border-slate-800">
                        <img
                          src={imgUrl}
                          alt="Gallery"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-4 items-center justify-between">
                  <a
                    href={activeEvent.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-bold text-sm transition-colors"
                  >
                    <span>Follow on Instagram 📸</span>
                  </a>
                  <button
                    onClick={() => setActiveEvent(null)}
                    className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  "/fest1.JPG",
  "/fest2.JPG",
  "/fest3.JPG",
  "/fest4.JPG",
  "/fest5.JPG",
  "/fest6.JPG",
];

export default function Josh() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-poppins">

      {/* Hero */}
      <section
        className="relative h-[75vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/fest1.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-6">
          <span className="text-teal-300 uppercase tracking-[0.35em] font-bold">
            UNLEASH THE FIRE WITHIN
          </span>

          <h1 className="text-6xl md:text-8xl font-black mt-5">
            JOSH
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-slate-200 text-lg md:text-xl">
            JOSH is IIT Indore's annual sports festival that celebrates
            determination, sportsmanship, teamwork, and the competitive spirit
            through exciting sporting events for the freshers.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto text-center">

          <span className="text-teal-400 uppercase tracking-widest font-bold">
            About
          </span>

          <h2 className="text-5xl font-black mt-4 mb-8">
            What is JOSH?
          </h2>

          <p className="text-slate-300 text-lg leading-8">
            JOSH is the flagship intra-college sports festival of IIT Indore for freshers.
            Students compete across numerous sports while representing their
            teams. The event promotes discipline, leadership,
            teamwork and healthy competition while creating unforgettable
            memories on campus in the first year itself.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-6 bg-slate-950">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-5xl font-black mb-16">
            Event Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Competitions",
                text: "Multiple sporting events conducted throughout the festival."
              },
              {
                title: "Team Spirit",
                text: "Teams compete with passion, determination and unity."
              },
              {
                title: "Campus Atmosphere",
                text: "Energetic crowds, cheering spectators and unforgettable moments."
              }
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-slate-900 rounded-3xl p-8 border border-teal-400/20"
              >

                <h3 className="text-2xl font-bold text-teal-400 mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-300">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Gallery */}

      <section className="py-20 px-6 bg-slate-900">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-5xl font-black mb-14">
            Gallery
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {galleryImages.map((img, index) => (

              <motion.div
                whileHover={{ scale: 1.03 }}
                key={index}
                className="rounded-3xl overflow-hidden"
              >

                <img
                  src={img}
                  alt=""
                  className="w-full h-72 object-cover"
                />

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-20 px-6 bg-slate-950">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-5xl font-black mb-14">
            JOSH at a Glance
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              ["20+", "Sports"],
              ["500+", "Participants"],
              ["100+", "Matches"],
              ["3 Days", "Celebration"]
            ].map((item, index) => (

              <div
                key={index}
                className="bg-slate-900 rounded-3xl p-8 text-center"
              >
                <h1 className="text-5xl font-black text-teal-400">
                  {item[0]}
                </h1>

                <p className="mt-3 text-slate-300">
                  {item[1]}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Contact */}

      <section className="py-20 text-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

        <h2 className="text-4xl font-black mb-6">
          Stay Updated
        </h2>

        <p className="text-slate-300 mb-10">
          Follow the Sports Council for announcements regarding JOSH,
          registrations and schedules.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href="https://www.instagram.com/sports_iit_indore/"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 font-semibold"
          >
            Instagram
          </a>

          <a
            href="/events"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 font-semibold"
          >
            Back to Events
          </a>

        </div>

      </section>

    </div>
  );
}
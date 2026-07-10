import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  "/images/fest7.JPG",
  "/images/fest8.JPG",
  "/images/fest9.JPG",
  "/images/fest10.JPG",
  "/images/fest11.JPG",
  "/images/fest12.jpg",
];

export default function GC() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-poppins">

      {/* Hero */}
      <section
        className="relative h-[75vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/fest7.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-6">
          <span className="text-teal-300 uppercase tracking-[0.35em] font-bold">
            Year-wise Championship
          </span>

          <h1 className="text-6xl md:text-8xl font-black mt-5">
            General Championship
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-slate-200 text-lg md:text-xl">
            The General Championship is the most prestigious inter-year
            competition at IIT Indore where every point matters and every match
            contributes towards pride of ur team.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto text-center">

          <span className="text-teal-400 uppercase tracking-widest font-bold">
            About GC
          </span>

          <h2 className="text-5xl font-black mt-4 mb-8">
            Compete for Glory
          </h2>

          <p className="text-slate-300 text-lg leading-8">
            The General Championship (GC) is a 2 month-long sporting competition
            among each year students at IIT Indore. Students represent their year(1st,2nd,3rd,etc.) across
            various sports, earning valuable points that determine the overall
            champion. GC builds teamwork, leadership, resilience, and batchmate bonding
            spirit.
          </p>

        </div>
      </section>

      {/* Highlights */}

      <section className="py-20 px-6 bg-slate-950">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-5xl font-black mb-16">
            Why GC is Special
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Pride",
                text: "Every athlete competes to earn points and bring glory to their year team."
              },
              {
                title: "Multiple Sports",
                text: "Events span cricket, football, badminton, volleyball, athletics and many more."
              },
              {
                title: "2 month-long Competition",
                text: "GC continues throughout the academic year with points accumulated across tournaments."
              }
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-slate-900 rounded-3xl border border-teal-400/20 p-8"
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
            GC Gallery
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {galleryImages.map((img, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
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

      {/* Sports */}

      <section className="py-20 px-6 bg-slate-950">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-5xl font-black mb-16">
            Sports Included
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Football",
              "Cricket",
              "Basketball",
              "Badminton",
              "Table Tennis",
              "Volleyball",
              "Chess",
              "Athletics"
            ].map((sport, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-900 rounded-2xl py-8 text-center border border-slate-800 hover:border-teal-400 transition"
              >

                <h3 className="text-xl font-bold">
                  {sport}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="py-20 px-6 bg-slate-900">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-5xl font-black mb-16">
            GC by Numbers
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              ["6+", "Teams"],
              ["20+", "Sports"],
              ["1000+", "Participants"],
              ["1", "Champion"]
            ].map((item, index) => (

              <div
                key={index}
                className="bg-slate-950 rounded-3xl p-8 text-center"
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

      {/* Footer */}

      <section className="py-20 text-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">

        <h2 className="text-4xl font-black mb-6">
          Stay Updated
        </h2>

        <p className="text-slate-300 mb-10">
          Follow the Sports Council for schedules, fixtures, standings,
          and General Championship announcements.
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
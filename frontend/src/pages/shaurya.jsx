import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  "https://res.cloudinary.com/dats2xfzl/image/upload/v1783514825/20260129_185012_khfgpz.jpg",
  "https://res.cloudinary.com/dats2xfzl/image/upload/v1783514445/IMG_20260131_190610_xwqikt.jpg",
  "https://res.cloudinary.com/dats2xfzl/image/upload/v1783514169/IMG_20260131_190612_fa8aw9.jpg",
  "https://res.cloudinary.com/dats2xfzl/image/upload/v1783514812/IMG_20260129_195900_q7hpgg.jpg",
  "https://res.cloudinary.com/dats2xfzl/image/upload/v1783513884/IMG-20260130-WA0014_d0zpxq.jpg",
  "https://res.cloudinary.com/dats2xfzl/image/upload/v1783513973/IMG-20260129-WA0070_jdllzk.jpg",
  "https://res.cloudinary.com/dats2xfzl/image/upload/v1783515859/20260129_192623_fnxim8.jpg",
  "https://res.cloudinary.com/dats2xfzl/image/upload/v1783515886/IMG_20260129_205354_to1clx.jpg",
  "https://res.cloudinary.com/dats2xfzl/image/upload/v1783514864/20260129_185024_zikwbg.jpg",
  "https://res.cloudinary.com/dats2xfzl/image/upload/v1783514850/20260129_192700_cfeyvr.jpg",
  "https://res.cloudinary.com/dats2xfzl/image/upload/v1783515880/20260129_190810_w8mdag.jpg"
];

export default function Shaurya() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-poppins">

      <section
        className="relative h-[75vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dats2xfzl/image/upload/v1783515886/IMG_20260129_205354_to1clx.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-6 text-white">
          <span className="text-teal-300 uppercase tracking-[0.35em] font-bold">
            Strength • Spirit • Victory
          </span>

          <h1 className="text-6xl md:text-8xl font-black mt-5 text-white">
            Shaurya
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-slate-200 text-lg md:text-xl">
            Shaurya celebrates courage, endurance, teamwork, and the spirit of
            sports through exciting competitions and energetic campus
            participation.This is IIT Indore's Inter-Hostel event.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-teal-400 uppercase tracking-widest font-bold">
            About Shaurya
          </span>

          <h2 className="text-5xl font-black mt-4 mb-8">
            A Celebration of Courage and Competition
          </h2>

          <p className="text-slate-300 text-lg leading-8">
            Shaurya is a sports event that brings students together to compete,
            collaborate, and showcase their athletic potential. It focuses on
            discipline, competitive spirit, resilience, and the pride of
            representing one's hostel team.
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
                title: "Courage",
                text: "Shaurya encourages students to push limits and perform with confidence.",
              },
              {
                title: "Hostel Pride",
                text: "Athletes compete with coordination, unity, and shared determination for their hostels.",
              },
              {
                title: "Sporting Excellence",
                text: "The event promotes discipline, fitness, sportsmanship, and excellence.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-slate-900 rounded-3xl border border-teal-400/20 p-8"
              >
                <h3 className="text-2xl font-bold text-teal-400 mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl font-black mb-14">
            Shaurya Gallery
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
                  alt={`Shaurya ${index + 1}`}
                  loading="lazy"
                  className="w-full h-72 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-5xl font-black mb-14">
            Shaurya at a Glance
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              ["10+", "Events"],
              ["750+", "Participants"],
              ["Multiple", "Teams"],
              ["1", "Spirit"],
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-3xl p-8 text-center"
              >
                <h1 className="text-5xl font-black text-teal-400">
                  {item[0]}
                </h1>

                <p className="mt-3 text-slate-300">{item[1]}</p>
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
          Follow the Sports Council for Shaurya registrations, schedules,
          fixtures, and announcements.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://www.instagram.com/sports_iit_indore//"
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

import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  "/images/fest1.JPG",
  "/images/fest2.JPG",
  "/images/fest3.JPG",
  "/images/fest4.JPG",
  "/images/fest5.JPG",
  "/images/fest6.JPG",
  "/images/fest7.JPG",
  "/images/fest8.JPG",
  "/images/fest9.JPG",
  "/images/fest10.JPG",
  "/images/fest11.JPG",
  "/images/fest12.jpg",
  "/images/fest13.JPG",
  "/images/fest14.JPG",
  "/images/fest15.JPG",
  "/images/fest16.JPG",
  "/images/fest17.JPG",
  "/images/fest18.JPG",
  "/images/fest19.JPG"
];

export default function Fest() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-teal-500/20 blur-[120px]"></div>

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-[120px]"></div>
      </div>
      {/* Hero Section */}
      <motion.section
        className="relative h-[75vh] flex items-center justify-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dats2xfzl/image/upload/v1783171452/lakshya_vbo9ry.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 1, -1, 0],
          }}

        ></motion.div>

        <motion.div
          className="relative z-10 text-center px-6"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},

          }}
        ><motion.span
          variants={{
            hidden: {
              opacity: 0,
              y: 40,
            },
            show: {
              opacity: 1,
              y: 0,
            },
          }}

          className="text-teal-300 text-lg font-semibold uppercase tracking-[0.25em]"
        >
            Official College Sports Fest
          </motion.span>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-extrabold text-white mt-4 mb-6"
          >
            Lakshya
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 25 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-slate-200 text-lg md:text-xl leading-relaxed"
          >
            IIT Indore's flagship sports festival, bringing together athletes,
            competition, teamwork, and unforgettable sporting experiences from
            colleges across the nation.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section className="py-20 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-teal-400 font-semibold uppercase tracking-wider"
          >
            About Lakshya
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mt-3">
            Where passion meets sportsmanship
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-slate-300 text-lg leading-relaxed"
          >
            Lakshya is the official sports fest of IIT Indore, celebrating
            athletic excellence, teamwork, discipline, and competitive spirit.
            The fest features exciting tournaments, energetic crowds, memorable
            matches, and participation from students across different colleges.
          </motion.p>
        </div>
      </motion.section>

      {/* Details Cards */}
      <motion.section className="py-20 px-6 bg-slate-950"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <motion.div className="bg-slate-900/80 border border-teal-400/20 rounded-2xl p-6 shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            whileHover={{
              rotateX: 10,
              rotateY: -10,
              scale: 1.05,
              y: -12,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h3 className="text-2xl font-bold text-teal-400 mb-3">
              Competitions
            </h3>
            <p className="text-slate-300">
              Participate in inter-college sports tournaments and team events
              across multiple disciplines.
            </p>
          </motion.div>

          <motion.div
            className="bg-slate-900/80 border border-teal-400/20 rounded-2xl p-6 shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            whileHover={{
              rotateX: 10,
              rotateY: -10,
              scale: 1.05,
              y: -12,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h3 className="text-2xl font-bold text-teal-400 mb-3">
              Team Spirit
            </h3>
            <p className="text-slate-300">
              Celebrate leadership, discipline, collaboration, and the spirit of
              healthy competition.
            </p>
          </motion.div>

          <motion.div
            className="bg-slate-900/80 border border-teal-400/20 rounded-2xl p-6 shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.24 }}
            whileHover={{
              rotateX: 10,
              rotateY: -10,
              scale: 1.05,
              y: -12,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h3 className="text-2xl font-bold text-teal-400 mb-3">
              Campus Energy
            </h3>
            <p className="text-slate-300">
              Experience exciting matches, cheering crowds, vibrant moments, and
              the energetic atmosphere of IIT Indore.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery */}
      <div className="relative py-6">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-[150px]"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-5 px-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: (index % 6) * 0.05,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.06,
                rotateY: 8,
                rotateX: 4,
                y: -10,
                transition: {
                  duration: 0.45,
                  ease: "easeInOut",
                },
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
              className="group relative p-1 rounded-2xl bg-gradient-to-br from-teal-400/40 to-emerald-400/40 cursor-pointer overflow-hidden shadow-xl"
            >
              <img
                src={img}
                alt={`Lakshya gallery ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-64 object-cover rounded-2xl bg-slate-950"
              />

              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
      {/* Official Website Link */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Want to know more?
        </h2>

        <p className="text-slate-300 mb-8">
          NEW EDITION COMING SOON....!!
        </p>
        <a
          href="https://www.instagram.com/lakshya_iiti/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white font-semibold px-8 py-3 rounded-xl transition duration-300"
        >
          Follow on Instagram 📸
        </a>

      </section>
    </div>
  );
}
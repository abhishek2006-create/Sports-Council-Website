import React from "react";
import { motion } from "framer-motion";
import facilities from "../pages/Facilitiesdata.json";

const Facilities = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 px-6 py-16">

      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight"
        >
          Sports Facilities
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 max-w-xl mx-auto text-sm md:text-base"
        >
          World-class amenities for every athlete.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

        {facilities.map((facility, index) => (
          <motion.div
            key={facility.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group bg-slate-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800/60 hover:border-teal-500/50 hover:shadow-[0_0_20px_rgba(20,184,166,0.15)] transition-all duration-300"
          >
            {/* Compact Image */}
            <div className="h-36 overflow-hidden relative">
              <img
                src={facility.image}
                alt={facility.name}
                className="w-full h-full object-cover brightness-110 contrast-125 saturate-110 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>

            {/* Compact Content */}
            <div className="p-4">
              <h2 className="text-base font-bold mb-1.5 truncate">
                {facility.name}
              </h2>
              <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                {facility.description}
              </p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Facilities;
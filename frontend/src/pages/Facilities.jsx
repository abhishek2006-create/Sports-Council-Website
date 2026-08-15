import React from "react";
import { motion } from "framer-motion";
import facilities from "../pages/Facilitiesdata.json";

const Facilities = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white px-6 py-20">

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Sports Facilities
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Explore the sports facilities available at IIT Indore.
        </motion.p>

      </div>

      {/* Facilities Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {facilities.map((facility, index) => (

          <motion.div
            key={facility.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            whileHover={{ y: -8 }}
            className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500 transition-all duration-300 shadow-lg"
          >

            {/* Image */}
            <div className="h-56 overflow-hidden">

              <img
                src={facility.image}
                alt={facility.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />

            </div>

            {/* Content */}
            <div className="p-6">

              <h2 className="text-2xl font-semibold mb-3">
                {facility.name}
              </h2>

              <p className="text-gray-400 leading-relaxed">
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
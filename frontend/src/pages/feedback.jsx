import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import DisplayContext from '../context/DisplayContext';
import ThankYouPopup from './ThankYouPopup';
import clubs from './Clubsdata.json';

export default function Feedback() {
  const { SaveMessage } = useContext(DisplayContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await SaveMessage(e);
      setIsPopupOpen(true);
      e.target.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      const errMsg = error.response?.data?.error || 'Failed to submit query. Please check your network or inputs.';
      alert(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 font-poppins selection:bg-teal-500 selection:text-white overflow-hidden flex items-center justify-center py-24 px-4">

      {/* Background Animation */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-4xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-teal-400 text-xs font-black uppercase tracking-[0.3em] block mb-3">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-100 leading-none mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Feedback</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto rounded-full"
          />
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-slate-900/60 backdrop-blur-md rounded-[2.5rem] shadow-2xl shadow-black/40 border border-slate-800/80 p-8 md:p-12 relative overflow-hidden"
        >

          {/* Contact Info Box */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-slate-800/50 rounded-2xl p-6 mb-10 border border-slate-700">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Us</p>
                <p className="text-slate-100 font-bold text-lg">sports.council@iiti.ac.in</p>
              </div>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">IITI Sports Council</p>
              <p className="text-teal-400 font-bold text-sm">We listen to your voice</p>
            </div>
          </div>

          <form onSubmit={handleFormSubmit} className="flex flex-col gap-8">

            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest group-focus-within:text-teal-400 transition-colors">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 font-medium focus:bg-slate-900/50 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300"
                />
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest group-focus-within:text-teal-400 transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 font-medium focus:bg-slate-900/50 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Phone & Sport */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest group-focus-within:text-teal-400 transition-colors">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+91 98765..."
                  required
                  className="w-full px-5 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 font-medium focus:bg-slate-900/50 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300"
                />
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest group-focus-within:text-teal-400 transition-colors">
                  Select Sport / Topic
                </label>
                <div className="relative">
                  <select
                    name="sport"
                    className="w-full px-5 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-100 font-medium focus:bg-slate-900/50 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="General Query">General Query</option>
                    {clubs && clubs.map((club, index) => (
                      <option value={club.name} key={index}>{club.name}</option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="group">
              <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest group-focus-within:text-teal-400 transition-colors">
                Short Summary
              </label>
              <input
                type="text"
                name="summary"
                placeholder="One line description of your query"
                required
                className="w-full px-5 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 font-medium focus:bg-slate-900/50 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300"
              />
            </div>

            {/* Details */}
            <div className="group">
              <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest group-focus-within:text-teal-500 transition-colors">
                Detailed Description
              </label>
              <textarea
                name="details"
                rows="5"
                placeholder="Tell us more..."
                className="w-full px-5 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 font-medium focus:bg-slate-900/50 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={!loading ? { scale: 1.02 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              type="submit"
              disabled={loading}
              className={`w-full font-black py-4 rounded-xl shadow-lg transition-all duration-300 transform uppercase tracking-[0.2em] text-xs mt-2
                ${loading
                  ? 'bg-slate-800 cursor-not-allowed text-slate-500 shadow-none'
                  : 'bg-teal-500 hover:bg-emerald-500 text-slate-950 hover:shadow-teal-500/30 hover:-translate-y-1 active:scale-95'}`}
            >
              {loading ? 'Sending...' : 'Submit Message'}
            </motion.button>

          </form>
        </motion.div>
      </div>

      <ThankYouPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}
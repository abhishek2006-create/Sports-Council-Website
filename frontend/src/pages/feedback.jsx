import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import DisplayContext from '../context/DisplayContext';
import ThankYouPopup from './ThankYouPopup';
import clubs from './Clubsdata.json';

export default function Contact() {
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
<<<<<<< HEAD
    <div className="relative min-h-[85vh] bg-white font-poppins selection:bg-[#00a896] selection:text-white overflow-hidden flex items-center justify-center py-8 px-4">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00a896] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
=======
    <div className="relative min-h-screen bg-slate-950 font-poppins selection:bg-teal-500 selection:text-white overflow-hidden flex items-center justify-center py-24 px-4">

      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"
      />
>>>>>>> 3b862deb7ebd33e859319ebaf76013a706c9ca27

      <div className="relative z-10 w-full max-w-4xl">

<<<<<<< HEAD
        <div className="text-center mb-4">
          <span className="text-[#00a896] text-xs font-black uppercase tracking-[0.3em] block mb-2">
            We Value Your Voice
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-[#1a1c24] leading-none mb-2 tracking-tight">
            Feedback <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a896] to-[#017a6c]">Form</span>
          </h1>
          <div className="w-16 h-1 bg-[#1a1c24] mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100 p-5 relative">

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="group">
              <label className="block text-[10px] font-bold text-[#1a1c24] mb-1.5 uppercase tracking-widest group-focus-within:text-[#00a896] transition-colors">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-100 text-[#1a1c24] placeholder-gray-400 text-sm font-medium focus:bg-white focus:border-[#00a896] focus:ring-4 focus:ring-[#00a896]/10 outline-none transition-all duration-300"
              />
            </div>

            <div className="group">
              <label className="block text-[10px] font-bold text-[#1a1c24] mb-1.5 uppercase tracking-widest group-focus-within:text-[#00a896] transition-colors">
                Select Sport
              </label>
              <div className="relative">
                <select
                  name="sport"
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-100 text-[#1a1c24] text-sm font-medium focus:bg-white focus:border-[#00a896] focus:ring-4 focus:ring-[#00a896]/10 outline-none transition-all duration-300 appearance-none cursor-pointer"
                >
                  {clubs.map((club, index) => (
                    <option value={club.name} key={index}>{club.name}</option>
                  ))}
                </select>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
=======
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-slate-900/60 backdrop-blur-md rounded-[2.5rem] shadow-2xl shadow-black/40 border border-slate-800/80 p-8 md:p-12 relative overflow-hidden"
        >
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
>>>>>>> 3b862deb7ebd33e859319ebaf76013a706c9ca27
                </div>
              </div>
            </div>

            <div className="group">
<<<<<<< HEAD
              <label className="block text-[10px] font-bold text-[#1a1c24] mb-1.5 uppercase tracking-widest group-focus-within:text-[#00a896] transition-colors">
=======
              <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest group-focus-within:text-teal-400 transition-colors">
>>>>>>> 3b862deb7ebd33e859319ebaf76013a706c9ca27
                Short Summary
              </label>
              <input
                type="text"
                name="summary"
                placeholder="One line description of your query"
                required
<<<<<<< HEAD
                className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-100 text-[#1a1c24] placeholder-gray-400 text-sm font-medium focus:bg-white focus:border-[#00a896] focus:ring-4 focus:ring-[#00a896]/10 outline-none transition-all duration-300"
=======
                className="w-full px-5 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 font-medium focus:bg-slate-900/50 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300"
>>>>>>> 3b862deb7ebd33e859319ebaf76013a706c9ca27
              />
            </div>

            <div className="group">
<<<<<<< HEAD
              <label className="block text-[10px] font-bold text-[#1a1c24] mb-1.5 uppercase tracking-widest group-focus-within:text-[#00a896] transition-colors">
=======
              <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest group-focus-within:text-teal-500 transition-colors">
>>>>>>> 3b862deb7ebd33e859319ebaf76013a706c9ca27
                Detailed Description
              </label>
              <textarea
                name="details"
<<<<<<< HEAD
                rows="3"
                placeholder="Tell us more about your experience..."
                className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-100 text-[#1a1c24] placeholder-gray-400 text-sm font-medium focus:bg-white focus:border-[#00a896] focus:ring-4 focus:ring-[#00a896]/10 outline-none transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full font-black py-3 rounded-full shadow-lg transition-all duration-300 transform uppercase tracking-[0.2em] text-xs mt-1
                ${status === 'loading'
                  ? 'bg-gray-200 cursor-not-allowed text-gray-400 shadow-none'
                  : 'bg-[#1a1c24] hover:bg-[#00a896] text-white hover:shadow-[#00a896]/30 hover:-translate-y-1 active:scale-95'}`}
            >
              {status === 'loading' ? 'Sending...' : 'Submit Feedback'}
            </button>

            {status === 'success' && (
              <div className="p-4 bg-[#f0fdfa] text-[#00a896] border border-[#00a896]/20 rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2 animate-bounce">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Message Sent Successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-50 text-red-600 border border-red-100 rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                Failed to send. Please check connectivity.
              </div>
            )}
=======
                rows="5"
                placeholder="Tell us more..."
                className="w-full px-5 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 font-medium focus:bg-slate-900/50 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 outline-none transition-all duration-300 resize-none"
              ></textarea>
            </div>

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
>>>>>>> 3b862deb7ebd33e859319ebaf76013a706c9ca27
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
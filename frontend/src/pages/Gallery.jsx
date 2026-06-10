import galleryImages from "../pages/GalleryData";
import { useState, useEffect } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="pt-5 pb-20 min-h-screen font-poppins bg-slate-950 text-slate-100 selection:bg-teal-500 selection:text-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 relative overflow-hidden">


        <div className="text-center mb-16 relative">

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-teal-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div>

          <span className="text-teal-400 text-xs font-black uppercase tracking-[0.4em] block mb-3 relative z-10">
            Visual Journey
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-100 leading-none mb-6 relative z-10 tracking-tight">
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Gallery</span>
          </h1>
          <div className="w-24 h-1.5 bg-teal-500 mx-auto rounded-full relative z-10"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 animate-fadeIn">
          {galleryImages?.map((img, index) => (
            <button
              key={img.id || index}
              type="button"
              onClick={() => setSelectedImage(img)}
              className="group relative h-64 w-full overflow-hidden rounded-3xl bg-slate-900/60 backdrop-blur-sm shadow-md focus:outline-none transition-all duration-500 hover:-translate-y-2 hover:shadow-teal-500/20"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/50 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                  <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-opacity duration-300"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full flex flex-col items-center animate-scaleIn"
            >

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:right-4 group flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors"
                aria-label="Close image"
              >
                <span className="text-sm font-bold uppercase tracking-widest hidden md:block">Close</span>
                <div className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center group-hover:border-teal-400 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </button>


              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-slate-800"
              />

              {selectedImage.alt && (
                <div className="mt-4 px-6 py-3 bg-slate-950/50 backdrop-blur-sm rounded-full border border-slate-800 text-slate-300">
                  <p className="text-sm font-medium tracking-wide">
                    {selectedImage.alt}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
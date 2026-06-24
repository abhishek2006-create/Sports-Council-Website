import React from "react";

const galleryImages = [
  "fest1.JPG",
  "fest2.JPG",
  "fest3.JPG",
  "fest4.JPG",
  "fest5.JPG",
  "fest6.JPG",
  "fest7.JPG",
  "fest8.JPG",
  "fest9.JPG",
  "fest10.JPG",
  "fest11.JPG","fest12.jpg","fest13.JPG","fest14.JPG","fest15.JPG","fest16.JPG","fest17.JPG",
  "fest18.JPG","fest19.JPG"
];

export default function Fest() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section
        className="relative h-[75vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://media.licdn.com/dms/image/v2/D4D3DAQGJkDdR1tOzbw/image-scale_191_1128/image-scale_191_1128/0/1688467482843/lakshyafest_iit_indore_cover?e=2147483647&v=beta&t=hGwv8FI_OYQdhTqnOJ8sDDNTaMvOqTfquIzU9WaNre4')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 text-center px-6">
          <span className="text-teal-300 text-lg font-semibold uppercase tracking-[0.25em]">
            Official College Sports Fest
          </span>

          <h1 className="text-6xl md:text-8xl font-extrabold text-white mt-4 mb-6">
            Lakshya
          </h1>

          <p className="max-w-3xl mx-auto text-slate-200 text-lg md:text-xl leading-relaxed">
            IIT Indore's flagship sports festival, bringing together athletes,
            competition, teamwork, and unforgettable sporting experiences from
            colleges across the nation.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-teal-400 font-semibold uppercase tracking-wider">
            About Lakshya
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Where passion meets sportsmanship
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed">
            Lakshya is the official sports fest of IIT Indore, celebrating
            athletic excellence, teamwork, discipline, and competitive spirit.
            The fest features exciting tournaments, energetic crowds, memorable
            matches, and participation from students across different colleges.
          </p>
        </div>
      </section>

      {/* Details Cards */}
      <section className="py-20 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900/80 border border-teal-400/20 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-teal-400 mb-3">
              Competitions
            </h3>
            <p className="text-slate-300">
              Participate in inter-college sports tournaments and team events
              across multiple disciplines.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-teal-400/20 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-teal-400 mb-3">
              Team Spirit
            </h3>
            <p className="text-slate-300">
              Celebrate leadership, discipline, collaboration, and the spirit of
              healthy competition.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-teal-400/20 rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-teal-400 mb-3">
              Campus Energy
            </h3>
            <p className="text-slate-300">
              Experience exciting matches, cheering crowds, vibrant moments, and
              the energetic atmosphere of IIT Indore.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-teal-400 font-semibold uppercase tracking-wider">
              Fest Gallery
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Moments from Lakshya
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="p-1 rounded-2xl bg-gradient-to-br from-teal-400/40 to-emerald-400/40"
              >
                <img
                  src={img}
                  alt={`Lakshya gallery ${index + 1}`}
                  className="w-full h-64 object-cover rounded-2xl bg-slate-950"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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
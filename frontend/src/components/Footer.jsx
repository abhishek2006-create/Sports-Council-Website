import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#020B2D] border-t border-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <h2 className="text-2xl font-bold text-[#28D7C5]">
              Sports Council
            </h2>
            <p className="text-white font-semibold">IIT Indore</p>

            <p className="mt-4 text-slate-400">
              Fostering excellence in athletics and promoting a healthy
              lifestyle at IIT Indore.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>

            <div className="flex flex-col gap-2">
              <Link
                to="/facilities"
                className="text-slate-400 hover:text-[#28D7C5] transition-colors"
              >
                Sports Facilities
              </Link>

              <Link
                to="/"
                className="text-slate-400 hover:text-[#28D7C5] transition-colors"
              >
                About Us
              </Link>

              <a
                href="https://studentaffairs.iiti.ac.in/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-[#28D7C5] transition-colors"
              >
                Student Affairs
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>

            <p className="text-slate-400">
              General Secretary, Sports
            </p>

            <a
              href="mailto:gssports@iiti.ac.in"
              className="text-[#28D7C5] hover:underline"
            >
              gs.sports@iiti.ac.in
            </a>

            <p className="text-slate-400 mt-4">
              IIT Indore, Simrol
              <br />
              Madhya Pradesh - 453552
            </p>
          </div>
        </div>
        <div className="border-t border-[#1E3A5F] mt-6 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">

          <div>
            © {new Date().getFullYear()} Sports Council | IIT Indore
          </div>

          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <span>Designed & Developed by</span>

            <a
              href="https://www.instagram.com/2410_abhishek.01?igsh=ZmltenNpdmU2OWsw"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-slate-300 hover:text-[#28D7C5] transition-colors ml-1"
            >
              Abhishek Bairwa
            </a>

            <span>&</span>

            <a
              href="https://www.instagram.com/im_tanush14/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-slate-300 hover:text-[#28D7C5] transition-colors"
            >
              Tanush Bansal
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
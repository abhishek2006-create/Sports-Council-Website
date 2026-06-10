import React from 'react';

export default function TeamCard({ id, Img, Name, phoneNumber, EmailID }) {
  return (
    <div
      key={id}
      className="group relative mb-5 bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-teal-500/40 rounded-3xl p-6 shadow-lg hover:shadow-teal-500/10 flex flex-col justify-center items-center h-full w-auto transition-all duration-300 overflow-hidden font-poppins"
    >

      <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-bl-full group-hover:bg-teal-500/10 transition-colors pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative w-full flex justify-center mb-6 z-10">
        <div className="p-1 rounded-2xl bg-gradient-to-br from-teal-400/40 to-emerald-400/40 group-hover:from-teal-400 group-hover:to-emerald-400 transition-all duration-300">
          <img
            src={Img}
            alt={Name}
            className="w-[300px] h-auto rounded-2xl object-cover bg-slate-950"
          />
        </div>
      </div>

      <div className="flex flex-col w-full items-center justify-start h-full text-center relative z-10">
        <span className="text-teal-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
          Council Member
        </span>
        <h2 className="text-2xl font-black tracking-tight text-slate-100">
          {Name}
        </h2>

        <div className="w-12 h-[2px] bg-gradient-to-r from-teal-400 to-emerald-400 my-4 rounded-full"></div>

        <p className="mt-2 text-sm font-medium text-slate-300">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2">
            Phone
          </span>
          {phoneNumber}
        </p>
        <p className="mt-3 text-sm font-medium text-slate-300 break-all">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2">
            Email
          </span>
          {EmailID}
        </p>
      </div>
    </div>
  );
}
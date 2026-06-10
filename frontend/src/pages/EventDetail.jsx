import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import DisplayContext from '../context/DisplayContext';

export default function EventDetail() {
    const { id } = useParams();
    const { events, getEvents } = useContext(DisplayContext);
    const [event, setEvent] = useState(null);

    useEffect(() => {
        getEvents();
    }, []);

    useEffect(() => {
        if (events && events.length > 0 && id) {
            const foundEvent = events.find(c => c.id.toString() === id.toString());
            setEvent(foundEvent);
        }
    }, [id, events]);

    if (!event) {
        return (
            <div className="pt-[75px] w-full min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center relative overflow-hidden selection:bg-teal-500 selection:text-white">

                <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-10 right-1/3 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 text-center"
                >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full border-4 border-teal-500 border-t-transparent animate-spin"></div>
                    <h2 className="text-2xl font-black text-slate-100">Loading...</h2>
                    <p className="text-slate-400 mt-2">Fetching event details</p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-[75px] w-full min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center px-5 py-10 relative overflow-hidden selection:bg-teal-500 selection:text-white">

            <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.16, 0.1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-5xl flex flex-col items-center text-center relative z-10"
            >
                <span className="text-teal-400 text-xs font-black uppercase tracking-[0.4em] block mb-3">
                    Featured Event
                </span>

                <h1 className="text-3xl md:text-5xl font-black p-5 text-slate-100 leading-tight tracking-tight">
                    {event.Title}
                </h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full"
                >
                    <img
                        src={event.Img}
                        alt={event.Title}
                        className="w-full max-w-4xl mx-auto h-auto object-cover rounded-3xl shadow-2xl border border-slate-800/80"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-8 w-full max-w-4xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 md:p-10 shadow-lg shadow-black/30 text-left"
                >
                    <h2 className="text-xs font-black uppercase tracking-[0.3em] text-teal-400 mb-4">
                        Event Description
                    </h2>
                    <p
                        className="text-base md:text-lg text-slate-400 leading-relaxed whitespace-pre-wrap text-justify"
                    >
                        {event.Description}
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
import React, { createContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = (import.meta.env.VITE_BASE_URL || '').replace(/\/+$/, '');
const apiUrl = (path) => `${BASE_URL}/backend/api${path}`;

axios.get(apiUrl('/stats/'));

const DisplayContext = createContext();
export default DisplayContext;

export const DisplayProvider = ({ children }) => {
    let [team, setTeam] = useState(() =>
        Cookies.get('team') ? JSON.parse(Cookies.get('team')) : null
    );
    let [gallery, setGallery] = useState(() =>
        Cookies.get('gallery') ? JSON.parse(Cookies.get('gallery')) : null
    );
    let [hallOfFame, setHallOfFame] = useState(() =>
        Cookies.get('hallOfFame') ? JSON.parse(Cookies.get('hallOfFame')) : null
    );
    let [clubs, setClubs] = useState(() =>
        Cookies.get('clubs') ? JSON.parse(Cookies.get('clubs')) : null
    );
    let [clubMembers, setClubMembers] = useState(() =>
        Cookies.get('clubMembers') ? JSON.parse(Cookies.get('clubMembers')) : null
    );
    let [clubRules, setClubRules] = useState(() =>
        Cookies.get('clubRules') ? JSON.parse(Cookies.get('clubRules')) : null
    );
    let [events, setEvents] = useState(() =>
        Cookies.get('events') ? JSON.parse(Cookies.get('events')) : null
    );
    let [updates, setUpdates] = useState(() =>
        Cookies.get('updates') ? JSON.parse(Cookies.get('updates')) : null
    );
    let [stats, setStats] = useState(() =>
        Cookies.get('stats') ? JSON.parse(Cookies.get('stats')) : null
    );
    let [messages, setMessages] = useState([]);


    let getTeams = () => {
        axios.get(apiUrl('/teams/'))
            .then((response) => {
                console.log(response.data);
                setTeam(response.data);
                Cookies.set('team', JSON.stringify(response.data));
            })
            .catch((error) => console.log(error));
    };

    let getGallery = () => {
        axios.get(apiUrl('/gallery/'))
            .then((response) => {
                console.log(response.data.Gallery, response.data.HallOfFame);
                setGallery(response.data.Gallery);
                setHallOfFame(response.data.HallOfFame);
                Cookies.set('gallery', JSON.stringify(response.data.Gallery));
                Cookies.set('hallOfFame', JSON.stringify(response.data.HallOfFame));
            })
            .catch((error) => console.log(error));
    };

    let getClubs = () => {
        axios.get(apiUrl('/clubs/'))
            .then((response) => {
                setClubs(response.data);
                Cookies.set('clubs', JSON.stringify(response.data));
            })
            .catch((error) => console.log(error));
    };

    let getClubMembers = (e) => {
        axios.get(apiUrl(`/clubs/${e}/`))
            .then((response) => {
                setClubMembers(response.data.club_members);
                setClubRules(response.data.rules);
                Cookies.set('clubMembers', JSON.stringify(response.data.club_members));
                Cookies.set('clubRules', JSON.stringify(response.data.rules));
                getClubs();
            })
            .catch((error) => console.log(error));
    };

    let getEvents = () => {
        axios.get(apiUrl('/events/'))
            .then((response) => {
                console.log(response.data);
                setEvents(response.data);
                Cookies.set('events', JSON.stringify(response.data));
            })
            .catch((error) => console.log(error));
    };

    let getUpdates = () => {
        axios.get(apiUrl('/updates/'))
            .then((response) => {
                console.log(response.data);
                setUpdates(response.data);
                Cookies.set('updates', JSON.stringify(response.data));
            })
            .catch((error) => console.log(error));
    };

    let getStats = () => {
        axios.get(apiUrl('/stats/'))
            .then((response) => {
                console.log(response.data);
                setStats(response.data);
                Cookies.set('stats', JSON.stringify(response.data));
            })
            .catch((error) => console.log(error));
    };

    let getMessages = () => {
        axios.get(apiUrl('/messages/'))
            .then((response) => {
                setMessages(response.data);
            })
            .catch((error) => console.log(error));
    };

    let SaveMessage = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            Name: formData.get('name'),
            Email: formData.get('email'),
            Phone_Number: formData.get('phone'),
            Sport: formData.get('sport') || 'General Query',
            ShortSummary: formData.get('summary') || '',
            Message: `
Details:
${formData.get('details') || ''}
`
        };
        try {
            const response = await axios.post(
                apiUrl('/messages/'),
                data
            );
            console.log(response.data);
            getMessages();
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const ContextData = {
        getTeams,
        team,
        getGallery,
        gallery,
        hallOfFame,
        getClubs,
        clubs,
        getClubMembers,
        clubMembers,
        getEvents,
        events,
        getUpdates,
        updates,
        getStats,
        stats,
        messages,
        getMessages,
        SaveMessage,
        clubRules,
    };

    return (
        <DisplayContext.Provider value={ContextData}>
            {children}
        </DisplayContext.Provider>
    );
};


import express from 'express';
import Facility from '../models/Facility.js';
import Event from '../models/Event.js';
import TeamMember from '../models/TeamMember.js';
import Club from '../models/Club.js';
import ClubMember from '../models/ClubMember.js';
import GalleryImage from '../models/GalleryImage.js';
import Update from '../models/Update.js';
import Message from '../models/Message.js';
import Stat from '../models/Stat.js';
import HallOfFame from '../models/HallOfFame.js';

const router = express.Router();

// 1. Get Facilities
router.get('/facilities', async (req, res) => {
  try {
    const facilities = await Facility.find();
    // Django rules serializer structure: list of rules inside each facility:
    // serializer maps rules to facilityrule_set. We return them in standard format
    // React frontend maps facility.rules.map(rule => rule.rule) so we should shape rule items as { rule: String }
    const formatted = facilities.map(fac => ({
      id: fac._id,
      Title: fac.Title,
      Description: fac.Description,
      Img: fac.Img,
      rules: fac.rules.map((rule, i) => ({ id: i, rule }))
    }));
    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Get Events
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    const formatted = events.map(ev => ({
      id: ev._id,
      Title: ev.Title,
      Description: ev.Description,
      Img: ev.Img
    }));
    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Get Team Members (Council/Staff)
router.get('/teams', async (req, res) => {
  try {
    const members = await TeamMember.find();
    const formatted = members.map(m => ({
      id: m._id,
      Role: m.Role,
      Name: m.Name,
      Img: m.Img,
      phoneNumber: m.phoneNumber,
      EmailID: m.EmailID
    }));
    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Get Clubs and Societies
router.get('/clubs', async (req, res) => {
  try {
    const clubs = await Club.find();
    const formatted = clubs.map(c => ({
      id: c._id,
      Club_Name: c.Club_Name,
      Club_logo: c.Club_logo
    }));
    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 5. Get Club Members & Rules
router.get('/clubs/:club_id', async (req, res) => {
  try {
    const { club_id } = req.params;
    const members = await ClubMember.find({ Club: club_id });
    const club = await Club.findById(club_id);
    
    const rules = club ? club.rules.map((r, i) => ({ id: i, club: club_id, rule: r })) : [];
    
    const club_members_formatted = members.map(m => ({
      id: m._id,
      Club: m.Club,
      Role: m.Role,
      Name: m.Name,
      Img: m.Img,
      phoneNumber: m.phoneNumber,
      EmailID: m.EmailID
    }));

    res.json({
      club_members: club_members_formatted,
      rules: rules
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 6. Get Gallery (includes Gallery images & Hall of Fame images)
router.get('/gallery', async (req, res) => {
  try {
    const gallery = await GalleryImage.find();
    const hallOfFame = await HallOfFame.find();

    const formattedGallery = gallery.map(g => ({
      id: g._id,
      Img: g.Img
    }));

    const formattedHallOfFame = hallOfFame.map(h => ({
      id: h._id,
      Img: h.Img
    }));

    res.json({
      Gallery: formattedGallery,
      HallOfFame: formattedHallOfFame
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 7. Get Updates
router.get('/updates', async (req, res) => {
  try {
    const updates = await Update.find();
    const formatted = updates.map(up => ({
      Title: up.Title,
      Link: up.Link
    }));
    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 8. Get Stats
router.get('/stats', async (req, res) => {
  try {
    const stats = await Stat.find();
    const formatted = stats.map(s => ({
      Stat_name: s.Stat_name,
      Stat_number: s.Stat_number
    }));
    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 9. Messages endpoints
router.route('/messages')
  .get(async (req, res) => {
    try {
      const messages = await Message.find().sort({ createdAt: -1 });
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { Name, Email, Phone_Number, Message: msgText } = req.body;
      const newMessage = new Message({
        Name,
        Email,
        Phone_Number,
        Message: msgText
      });
      await newMessage.save();
      res.status(201).json(newMessage);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

export default router;

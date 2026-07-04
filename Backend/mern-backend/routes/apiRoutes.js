import express from 'express';
import Event from '../models/Event.js';
import TeamMember from '../models/TeamMember.js';
import Club from '../models/Club.js';
import ClubMember from '../models/ClubMember.js';
import GalleryImage from '../models/GalleryImage.js';
import Update from '../models/Update.js';
import Message from '../models/Message.js';
import Stat from '../models/Stat.js';
import HallOfFame from '../models/HallOfFame.js';
import { sendQueryEmail } from '../utils/mailer.js';

const router = express.Router();

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
      const {
        Name,
        Email,
        Phone_Number,
        Message: msgText,
        Sport,
        ShortSummary
      } = req.body;

      if (!Email || !/^[^\s@]+@iiti\.ac\.in$/i.test(Email)) {
        return res.status(400).json({
          error: 'Only @iiti.ac.in email addresses are allowed to submit queries.'
        });
      }

      const newMessage = new Message({
        Name,
        Email,
        Phone_Number,
        Message: msgText,
        Sport: Sport || 'General Query',
        ShortSummary: ShortSummary || ''
      });
      await newMessage.save();

      try {
        await sendQueryEmail({
          name: Name,
          email: Email,
          phone: Phone_Number,
          sport: Sport || 'General Query',
          summary: ShortSummary,
          message: msgText
        });
      } catch (mailError) {
        console.error('Email sending failed:', mailError.message);

      }

      res.status(201).json({
        success: true,
        message: 'Query submitted successfully!',
        data: newMessage
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

export default router;

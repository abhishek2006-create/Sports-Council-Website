import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load models
import Facility from '../models/Facility.js';
import Event from '../models/Event.js';
import TeamMember from '../models/TeamMember.js';
import Club from '../models/Club.js';
import ClubMember from '../models/ClubMember.js';
import GalleryImage from '../models/GalleryImage.js';
import Update from '../models/Update.js';
import Stat from '../models/Stat.js';
import HallOfFame from '../models/HallOfFame.js';
import Message from '../models/Message.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths to frontend json files
const frontendPagesPath = path.join(__dirname, '..', '..', 'frontend', 'src', 'pages');
const teamJsonPath = path.join(frontendPagesPath, 'Team.json');
const clubsJsonPath = path.join(frontendPagesPath, 'Clubsdata.json');

const dbURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sports-council';

const seedDB = async () => {
  try {
    console.log(`Connecting to database at ${dbURI}...`);
    await mongoose.connect(dbURI);
    console.log('Connected to MongoDB. Clearing database collections...');

    // Clear existing data
    await Facility.deleteMany({});
    await Event.deleteMany({});
    await TeamMember.deleteMany({});
    await Club.deleteMany({});
    await ClubMember.deleteMany({});
    await GalleryImage.deleteMany({});
    await Update.deleteMany({});
    await Stat.deleteMany({});
    await HallOfFame.deleteMany({});
    await Message.deleteMany({});

    console.log('Database cleared. Seeding stats...');
    // Seed Stats
    const statsData = [
      { Stat_name: 'Active Sports Clubs', Stat_number: '14+' },
      { Stat_name: 'Students Engaged', Stat_number: '2500+' },
      { Stat_name: 'State of Art Facilities', Stat_number: '10+' },
      { Stat_name: 'Inter-IIT Medals Won', Stat_number: '50+' }
    ];
    await Stat.insertMany(statsData);

    console.log('Seeding updates...');
    // Seed Updates
    const updatesData = [
      { Title: 'Inter-IIT Sports Meet 2026: Team selection trials starting this week!', Link: 'https://interiit2024.iiti.ac.in/' },
      { Title: 'IIT Indore wins Badminton championship gold at Ranbhoomi!', Link: 'https://www.iiti.ac.in' },
      { Title: 'Freshers Sports Orientation scheduled for next Monday. Welcome Class of 2026!', Link: 'https://www.iiti.ac.in' },
      { Title: 'Swimming Pool guidelines updated for Summer memberships.', Link: 'https://www.iiti.ac.in' }
    ];
    await Update.insertMany(updatesData);

    console.log('Seeding facilities...');
    // Seed Facilities
    const facilitiesData = [
      {
        Title: 'Olympic-size Swimming Pool',
        Description: 'Our state-of-the-art swimming facility is open on a membership basis. It features 8 lanes, regular chemical/thermal regulation, and life guards on duty.',
        Img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1200',
        rules: [
          'Proper swimwear is mandatory before entering the pool.',
          'Showers are required before entering the pool water.',
          'Entry will only be allowed upon showing active Sports Council membership ID card.',
          'Follow instructions of the on-duty lifeguards at all times.'
        ]
      },
      {
        Title: 'Central Gymnasium',
        Description: 'Equipped with commercial-grade strength training, free weights, and cardio equipment. A dedicated physical instructor is available for training sessions.',
        Img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1200',
        rules: [
          'Sports shoes and training gear are mandatory.',
          'Re-rack weights and clean equipment after use.',
          'Quiet hours are to be maintained, no loud personal speakers.',
          'Gym slots must be booked through the student portal during peak hours.'
        ]
      },
      {
        Title: 'Football Arena & Athletic Track',
        Description: 'Full-size football turf matching national standards, surrounded by a 400m synthetic running track. Equipped with floodlights for evening matches.',
        Img: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200',
        rules: [
          'No metal spikes allowed on the athletic track (use rubber running spikes).',
          'Only clean sports footwear permitted on the synthetic turf.',
          'Maintain cleanliness: do not litter water bottles or plastic wrappers.',
          'Prior permission required for hosting external college tournaments.'
        ]
      },
      {
        Title: 'Indoor Badminton & Table Tennis Complex',
        Description: 'Air-conditioned wooden flooring complex with 4 court setups for Badminton and 6 Table Tennis tables. Used for hosting local fests and selections.',
        Img: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=1200',
        rules: [
          'Non-marking shoes are strictly mandatory on the wooden courts.',
          'Rackets and shuttles can be checked out from the store using ID cards.',
          'Court playing times are limited to 45 mins per group during rush hours.',
          'No food items or sugary drinks allowed inside the court area.'
        ]
      }
    ];
    await Facility.insertMany(facilitiesData);

    console.log('Seeding events...');
    // Seed Events
    const eventsData = [
      {
        Title: 'JOSH 2.0',
        Description: 'JOSH is the premier inter-college sports festival hosted by IIT Indore. Bringing together sports stars from all over India, featuring athletics, lawn tennis, basketball, volleyball, cricket, and more, complete with concert nights and absolute sports glory.',
        Img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1200'
      },
      {
        Title: 'General Championship',
        Description: 'A highly anticipated year-long inter-hostel tournament where hostels battle it out in a series of indoor and outdoor athletic events. It is a quest for pride, hostel unity, and overall sports supremacy.',
        Img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1200'
      },
      {
        Title: 'Inter-IIT Selections & Bootcamp',
        Description: 'Rigorous training camp and trials to form the official sports contingents representing IIT Indore at the annual Inter-IIT sports tournament. Features guidance from expert external coaches.',
        Img: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=1200'
      }
    ];
    await Event.insertMany(eventsData);

    console.log('Seeding gallery and hall of fame...');
    // Seed Gallery
    const galleryData = [
      { Img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800' },
      { Img: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800' },
      { Img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800' },
      { Img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800' },
      { Img: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=800' },
      { Img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800' }
    ];
    await GalleryImage.insertMany(galleryData);

    const hallOfFameData = [
      { Img: 'https://images.unsplash.com/photo-1578269174936-2709b5a140e4?auto=format&fit=crop&q=80&w=800' },
      { Img: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&q=80&w=800' }
    ];
    await HallOfFame.insertMany(hallOfFameData);

    // Read and seed Team members from Team.json
    if (fs.existsSync(teamJsonPath)) {
      console.log('Loading team members from Team.json...');
      const rawTeam = fs.readFileSync(teamJsonPath, 'utf8');
      const teamList = JSON.parse(rawTeam);
      
      const teamToInsert = teamList.map(member => ({
        Name: member.name,
        Role: member.role || member.Team || 'council_member',
        Img: member.img,
        phoneNumber: member.phone || '+91 99887 76655',
        EmailID: `${member.name.toLowerCase().replace(/\s+/g, '')}@iiti.ac.in`
      }));
      await TeamMember.insertMany(teamToInsert);
      console.log(`Seeded ${teamToInsert.length} council team members.`);
    } else {
      console.log('Team.json not found. Seeding default team...');
      const defaultTeam = [
        { Name: 'Aayush Yadav', Role: 'Web Dev Head', EmailID: 'ayush@iiti.ac.in', phoneNumber: '+91 88888 88888' },
        { Name: 'Abhinayan', Role: 'Marketing Head', EmailID: 'abhinayan@iiti.ac.in', phoneNumber: '+91 77777 77777' },
        { Name: 'Aryan Poonia', Role: 'OPnL Head', EmailID: 'aryan@iiti.ac.in', phoneNumber: '+91 66666 66666' }
      ];
      await TeamMember.insertMany(defaultTeam);
    }

    // Read and seed Clubs from Clubsdata.json
    if (fs.existsSync(clubsJsonPath)) {
      console.log('Loading clubs and club members from Clubsdata.json...');
      const rawClubs = fs.readFileSync(clubsJsonPath, 'utf8');
      const clubsList = JSON.parse(rawClubs);
      
      for (const clubInfo of clubsList) {
        // Create Club
        const newClub = new Club({
          Club_Name: clubInfo.name,
          Club_logo: clubInfo.image || 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=300',
          rules: [
            `Active participation in all ${clubInfo.name} sessions.`,
            `Follow safety guidelines during training.`,
            `Take care of general sports equipment checked out.`
          ]
        });
        const savedClub = await newClub.save();

        // Seed Club Head as a ClubMember
        if (clubInfo.head) {
          const clubHead = new ClubMember({
            Club: savedClub._id,
            Role: 'club_head',
            Name: clubInfo.head.name || 'TBD',
            Img: clubInfo.head.photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
            phoneNumber: '+91 99999 88888',
            EmailID: `${clubInfo.name.toLowerCase()}head@iiti.ac.in`
          });
          await clubHead.save();
        }

        // Add 2 mock members for each club for demonstrate MERN relations
        const mockMembers = [
          { Role: 'Coach', Name: `Coach Vishal (${clubInfo.name})`, Img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200', EmailID: `coach@iiti.ac.in` },
          { Role: 'club_member', Name: `Abhishek Bairwa`, Img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200', EmailID: `cse250001002@iiti.ac.in` }
        ];

        for (const m of mockMembers) {
          const freshMember = new ClubMember({
            Club: savedClub._id,
            Role: m.Role,
            Name: m.Name,
            Img: m.Img,
            phoneNumber: '+91 88290 86816',
            EmailID: m.EmailID
          });
          await freshMember.save();
        }
      }
      console.log(`Seeded ${clubsList.length} clubs and their core members.`);
    } else {
      console.log('Clubsdata.json not found. Seeding default clubs...');
      const defaultClubs = [
        { Club_Name: 'Football', rules: ['Follow safety rules'] },
        { Club_Name: 'Aquatics', rules: ['Proper swimming attire'] }
      ];
      for (const d of defaultClubs) {
        const c = await Club.create({ Club_Name: d.Club_Name, rules: d.rules });
        await ClubMember.create({ Club: c._id, Name: 'Coach Vishal', Role: 'Coach' });
      }
    }

    console.log('Database seeded successfully!');
    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error(`Database seeding failed: ${error.message}`);
    mongoose.connection.close();
    process.exit(1);
  }
};

seedDB();

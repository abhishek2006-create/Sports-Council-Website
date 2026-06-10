import mongoose from 'mongoose';

const teamMemberSchema = new mongoose.Schema({
  Role: { type: String, default: "council_member" },
  Name: { type: String, required: true },
  Img: { type: String, default: "" },
  phoneNumber: { type: String, default: "" },
  EmailID: { type: String, default: "" }
}, { timestamps: true });

const TeamMember = mongoose.model('Team', teamMemberSchema);
export default TeamMember;

import mongoose from 'mongoose';

const clubMemberSchema = new mongoose.Schema({
  Club: { type: mongoose.Schema.Types.ObjectId, ref: 'Club', required: true },
  Role: { type: String, default: "club_member" },
  Name: { type: String, required: true },
  Img: { type: String, default: "" },
  phoneNumber: { type: String, default: "" },
  EmailID: { type: String, default: "" }
}, { timestamps: true });

const ClubMember = mongoose.model('ClubTeam', clubMemberSchema);
export default ClubMember;

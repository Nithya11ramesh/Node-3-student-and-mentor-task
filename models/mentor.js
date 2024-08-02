import mongoose from 'mongoose';

const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  students: {
    type: String,
    required: true
  },

});

const mentor = mongoose.model('mentor', mentorSchema);

export default mentor;

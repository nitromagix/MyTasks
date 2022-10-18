const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  photo: {
    type: String,
    default: "/images/tv-test-pattern-146649_960_720-1502262587.png",
  },
  introduction: {
    type: String,
    default: "Welcome to YOUR portfolio site!",
  },
  description: {
    type: String,
    default:
      "Use this site to tell your unique story. All sections are customizable!",
  },
  about: {
    type: String,
    default: "I like to sleep",
  },
  interests: {
    type: String,
    default: "I like computers",
  },
  goals: {
    type: String,
    default: "I want more cats and dogs",
  },
  email: {
    type: String,
    default: "martinprost@gmail.com",
  },
  phone: {
    type: String,
    default: "424.209.8902",
  },
  instagram: {
    type: String,
    default: "instagram",
  },
  linkedin: {
    type: String,
    default: "www.linkedin.com/in/martinprost",
  },
  github: {
    type: String,
    default: "https://github.com/nitromagix",
  },
  education: {
    type: String,
    default: "Education",
  },
  education1: {
    type: String,
    default: "Education",
  },
  experience: {
    type: String,
    default: "Experience",
  },
  experience1: {
    type: String,
    default: "Experience",
  },

  portfolio: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
});

// profileSchema.methods.showEstablished = function () {
//   return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`;
// };

module.exports = mongoose.model("Profile", profileSchema);

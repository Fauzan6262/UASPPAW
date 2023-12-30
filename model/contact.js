const mongoose = require("mongoose");

const Contact = mongoose.model("Contact", {
  nama: {
    type: String,
    required: true,
  },
  panggilan: {
    type: String,
  },
  perusahaan: {
    type: String,
  },
  jabatan: {
    type: String,
  },
  nohp: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  grup: {
    type: String,
  },
});

module.exports = Contact;

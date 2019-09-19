// var mongoose = require("mongoose");
// var Schema = mongoose.Schema;

// // See http://mongoosejs.com/docs/schematypes.html

// var Person = new Schema({
//   name: String
//   //   locationGeo: { type: [Number], index: { type: "2dsphere", sparse: true } },
//   //   locationName: String,
//   //   dateAdded: { type: Date, default: Date.now }
// });

// // export 'Person' model so we can interact with it in other files
// module.exports = mongoose.model("Person", Person);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Project = new Schema(
  {
    project_name: {
      type: String
    },
    project_date: {
      type: String
    },
    project_description: {
      type: String
    },
    project_img: {
      type: String
    }
  },
  {
    collection: "project"
  }
);

module.exports = mongoose.model("Project", Project);

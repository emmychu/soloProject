const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://emmychu:cpx3T2yxNzZUOf9e@plants.uunm1mb.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'plants',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

//User model
const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  plants: [
    {
      title: String,
      id: { type: Schema.Types.ObjectId, ref: 'plant' },
    },
  ],
});

const User = mongoose.model('user', userSchema);

//Plant model

const plantSchema = new Schema({
  name: { type: String, required: true },
  location: String,
  last_water: Date,
  last_fertilizer: Date,
  last_repot: Date,
  notes: String,
});

const Plant = mongoose.model('plant', plantSchema);

module.exports = {
  Plant,
  User,
};

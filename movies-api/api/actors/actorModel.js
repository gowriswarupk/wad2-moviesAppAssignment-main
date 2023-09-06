import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ActorSchema = new Schema({
  id: { type: Number,  unique: true, required: true},
  name: {type: String, required: true },
  adult: {type: Boolean},
  gender: {type: Number},
  backdrop_path: {type: String},
  genre_ids: [{type: Number}],
  media_type: {type: String},
  original_language: {type: String},
  original_title: {type: String},
  overview: {type: String},
  poster_path: {type: String},
  release_date: {type: String},
  title: {type: String},
  video: {type: Boolean},
  vote_average: {type: Number},
  vote_count: {type: Number},
  known_for_department: {type: String},
  popularity: {type: Number},
  profile_path: {type: String}
});

export default mongoose.model('Actor', ActorSchema);
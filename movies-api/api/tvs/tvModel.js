import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const TvSchema = new Schema({
  backdrop_path: {type: String},
  first_air_date: {type: String},
  genre_ids: [{ type: Number }],
  id: { type: Number, required: true, unique: true },
  name: {type: String},
  origin_country: [{ type: String }],
  original_language: {type: String},
  original_name: {type: String},
  overview: {type: String},
  popularity: {type: Number},
  poster_path: {type: String},
  vote_average: {type: Number},
  vote_count: {type: Number},

});

TvSchema.statics.findByTVDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('Tvs', TvSchema);



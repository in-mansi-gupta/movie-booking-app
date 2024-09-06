import mongoose from "mongoose";


const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    actors: [{
        type: String,
        require: true
    }],
    releaseDate: {
        type: Date,
        require: true
    },
    posterUrl: {
        type: String,
        require: true
    },
    featured: {
        type: Boolean
    },
    bookings: [{
        type: String
    }],
    admin: {
        type: String,
        require: true
    }
});

export default mongoose.model("Movie", movieSchema);
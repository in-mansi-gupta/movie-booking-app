import mongoose from "mongoose";


const Schema = mongoose.Schema;

const adminSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minLength: 6
    },
    addedMovies: [
        {
            type: String
        },
    ],
});

export default mongoose.model("Admin", adminSchema);
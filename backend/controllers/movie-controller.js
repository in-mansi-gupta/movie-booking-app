import jwt from "jsonwebtoken";
import Movie from "../models/Movie.js";

export const addMovie = async (req, res, next) => {
    const extractedToken = req.headers.authorization.split(" ")[1];             //Bearer token
    if(!extractedToken && extractedToken.trim() === "") {
        return res.status(404).json({ message: "Invalid Token" });
    }
    
    let adminId;
    
    //  verify token
    jwt.verify(extractedToken,  process.env.SECRET_KEY, ( error, decrypted ) => {
        if(error) {
            return res.status(400).json({ message: `${error.message}`});
        } else {
            adminId = decrypted.id;
            return;
        }
    });

    //  add the new movie
    const { title, description, actors, releaseDate, posterUrl, featured } = req.body;
    if( !title && title.trim()=== "" && 
        !description && description.trim() === "" && 
        !posterUrl && posterUrl.trim() === "" 
    ) { 
        return res.status(422).json({ message: "Invalid Inputs"}); }

    let movie;
    try {
        movie = new Movie({ title, description, actors, releaseDate: new Date(`${releaseDate}`), posterUrl, featured, admin: adminId});
        movie = await movie.save();
    }
    catch (error) { return console.log(error); }

    if (!movie){
        return res.status(500).json({ message: "Request Failed"});
    }

    return res.status(201).json({ movie });

};
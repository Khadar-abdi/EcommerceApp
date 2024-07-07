import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../model/userModel.js";


const protect = asyncHandler(async(req, res, next) => {

    let token;

    token = req.cookies.jwt

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.userId).select('-password')
            next();

        } catch (error) {
            console.log(error)
            res.status(401).send({ message: 'not authorized,  token failed' })
        }
    } else {
        res.status(401).send({ message: 'not authorized, no token' })
    }

});



// admin middleware



const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401).send({ message: 'not authorized as admin' })
    }
}


export { protect, admin }
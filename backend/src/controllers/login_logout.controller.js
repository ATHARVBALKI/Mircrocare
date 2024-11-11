import asyncHandler from "../utilis/asyncHandler.js";
import { ApiError } from "../utilis/ApiError.js";
import { User } from "../models/user.model.js";
import { Doctor } from "../models/doctor.model.js"
import { generateToken } from "../utilis/jwtToken.js";
import jwt from 'jsonwebtoken';  // Import jsonwebtoken

import dotenv from 'dotenv'; // Use import syntax
dotenv.config();  // Call the config function to load environment variables



//! Login the user
export const login = asyncHandler(async (req, res) => {
    // taking the info from the user
    const { email, password } = req.body;

    // checking the info provided by the user
    if (!email || !password ) {
        throw new ApiError("Please Fill Full Form!", 400);
    }

    const user = await User.findOne({ email })
    console.log(user)

    // Check if user or doctor exists
    if (!user) {
        throw new ApiError(400, `User with ${role} role not found`);

    }
    console.log(user)
    // Check if password matches
    // const isPasswordMatched = await user.comparePassword(password);
    // if (!isPasswordMatched) {
    //     throw new ApiError("Invalid email or password", 400);
    // }
    
    let cookieName;
    if (user.role === "Admin") {
        cookieName = "adminToken";
    } else if (user.role === "Patient") {
        cookieName = "patientToken";
    } else if (user.role === "Doctor") {
        cookieName = "doctorToken";
    }

    // const cookieName = user.role === "Admin" ? "adminToken" : "patientToken";
    console.log(process.env.JWT_SECRET)
    const token = jwt.sign(
        { email: user.email, id: user._id, accountType: user.accountType },
        process.env.JWT_SECRET,
        {
            expiresIn: "24h",
        }
    );

    // Save token to user document in database
    // user = user.toObject();
    // user.token = token;
    user.password = undefined;
    // Set cookie for token and return success response
    const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        // secure: true,  Uncomment if using https
        // sameSite: "Lax", 
        httpOnly: true,
    };
    res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        Credential:"include",
        message: `User Login Success`,
    });

    
})


//! Logout Admin
export const logoutAdmin = asyncHandler(async (req, res, next) => {
    res
        .status(200)
        .cookie("adminToken", "", {
            expires: new Date(Date.now()),
            httpOnly: true,
            secure: true,
            sameSite: "None"
        })
        .json({
            success: true,
            message: "Admin logged out Successfully"
        });
})


//! Logout Patient
export const logoutPatient = asyncHandler(async (req, res, next) => {
    res
        .status(200)
        .cookie("patientToken", "", {
            expires: new Date(Date.now()),
            httpOnly: true,
            secure: true,
            sameSite: "None"
        })
        .json({
            success: true,
            message: "User logged out Successfully"
        });
})


//! Logout Doctor
export const logoutDoctor = asyncHandler(async (req, res, next) => {
    res
        .status(200)
        .cookie("doctorToken", "", {
            expires: new Date(Date.now()),
            httpOnly: true,
            secure: true,
            sameSite: "None"
        })
        .json({
            success: true,
            message: "User logged out Successfully"
        });
})
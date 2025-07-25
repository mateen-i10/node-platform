import { asyncHandler } from "../utils/asynchandler.js";

export const registerUser = asyncHandler(async (req, res) =>{
    res.status(200).json({
        message: "test response"
    })
})







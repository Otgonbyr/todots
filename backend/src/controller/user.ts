import { userModel } from "../model/User";
import { Request, Response } from "express";

type SignUpType = {
    username : {
        type: String

    }
    name : String
    password : String
    avatarimg : Buffer
}

export const signUp = async (req : Request, res : Response) => {
    try {
        const {name, password} : Required<SignUpType> = req.body
        const result = await userModel.create(name, password)
        console.log(result);
        return res.status(201).send({success : true})
    } catch (error) {
        console.log('error');
        return res.status(400).send({success : false})
    }
}
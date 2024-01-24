import { userModel } from "../model/User";
import bcrypt from "bcrypt";
import { Request, Response } from "express";

type SignUpType = {
    name : String
    password : string
    avatarimg : Buffer
}

type LogInType = {
    name : String
    password : string
}

export const signUp = async (req : Request, res : Response) => {
    try {
        const {name, password} : Required<SignUpType> = req.body
        const saltround = 10
        bcrypt.hash(password, saltround, async function(err, hash) {
            try {
                const result = await userModel.create({name, password: hash})
                console.log(result);      
            } catch (error) {
                throw new Error(JSON.stringify(error))
            }
        })
        return res.status(201).send({success : true})
    } catch (error: any) {
        if (error.code === 11000) {
            return res.status(400).send({
                success: false, error: {
                    msg: "Already existing name",
                    code: error.code
                }
            })
        }
        return res.status(400).send({success : false, error : "Invalid request"})
    }
}

export const logIn = async (req: Request, res: Response) => {
    try {
        const {name, password} : {name: string, password: string} = req.body
        const user: LogInType | null = await userModel.findOne({
            name : name
        })
        if (!user) {
            return res.status(400).send({success: false, msg:"user not found"})
        }
        bcrypt.compare(password, user.password, async function(err, result) {
            if (!result) {
                return res.send({
                    success : false,
                    msg: "name or password incorrect"
                })
            } else {
                return res.send({success : true})
            }
        })
    } catch (error) {
        console.log('error');
        
    }
}
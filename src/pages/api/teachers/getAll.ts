import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try{
        const responseData = await db.teacher.findMany();
        return res.status(200).json(responseData);
    }catch (error){
        return res.status(500).json({error:error})
    }
}
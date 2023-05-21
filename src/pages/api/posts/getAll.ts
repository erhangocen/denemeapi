import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try{
        const a = await db.post.findMany();
        return res.status(200).json({"data": a});
    }catch (error){
        return res.status(500).json({error:error})
    }
}
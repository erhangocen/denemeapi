import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try{
        const responseData = await db.post.findMany({include:{category:true}});
        return res.status(200).json({"data": responseData});
    }catch (error){
        return res.status(500).json({error:error})
    }
}
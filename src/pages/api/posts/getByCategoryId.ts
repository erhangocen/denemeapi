import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const categoryId = req.query.categoryId?.toString();

    try{
        const a = await db.post.findMany({where:{categoryId:categoryId}});
        return res.status(200).json({"data": a});
    }catch (error){
        return res.status(500).json({error:error})
    }
}
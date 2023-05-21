import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const {title} = req.body;

    try{
        await db.category.create({
            data:{
                title: title
            },
        })
        return res.status(200).json({"success": "true"});
    }catch (error){
        return res.status(500).json({error:error})
    }
}

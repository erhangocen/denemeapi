import { withMethods } from "@/lib/api-middlewares/with-methods";
import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";
import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import { type } from "os";
import { any, z } from "zod";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const {categoryId,title,image,description} = req.body;

    try{
        await db.post.create({
            data:{
                categoryId: categoryId,
                title: title,
                image: image,
                description: description
            },
        })
        return res.status(200).json({"success": "true"});
    }catch (error){
        return res.status(500).json({error:error})
    }
}

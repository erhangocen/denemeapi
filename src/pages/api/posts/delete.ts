import { withMethods } from "@/lib/api-middlewares/with-methods";
import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";
import { error } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import { type } from "os";
import { any, z } from "zod";

const handler = async(req: NextApiRequest, res: NextApiResponse) => {

    const {id} = req.body;

    try{
        await db.post.delete({where:{id:id}})
        return res.status(200).json({"success": "true"});
    }catch (error){
        return res.status(500).json({error:error})
    }
}

export default withMethods(['POST'], handler)

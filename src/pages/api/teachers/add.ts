import { withMethods } from "@/lib/api-middlewares/with-methods";
import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";


const handler = async(req: NextApiRequest, res: NextApiResponse) => {

    const {name, department} = req.body;

    try{
        await db.teacher.create({
            data:{
                name:name,
                department: department
            },
        })
        return res.status(200).json({"success": "true"});
    }catch (error){
        return res.status(500).json({error:error})
    }
}

export default withMethods(['POST'], handler)
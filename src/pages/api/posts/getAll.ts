import { withMethods } from "@/lib/api-middlewares/with-methods";
import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";


const handler = async(req: NextApiRequest, res: NextApiResponse) => {

    try{
        const responseData = await db.post.findMany({include:{category:true}});
        return res.status(200).json({"data": responseData});
    }catch (error){
        return res.status(500).json({error:error})
    }
}

export default withMethods(['GET'], handler)
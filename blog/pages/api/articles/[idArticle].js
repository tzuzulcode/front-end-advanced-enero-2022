import { doc, getDoc } from "firebase/firestore"
import { database } from "../../../database"

export default async function getById(req,res){
    const post =  await getDoc(doc(database,"articles",req.query.idArticle))

    return res.json(post.data())
}
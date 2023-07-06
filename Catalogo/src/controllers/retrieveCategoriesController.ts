
import { Prisma, PrismaClient } from "@prisma/client"
import { Request, Response } from "express"


//crear una instancia del cliente prisma 
const prisma = new PrismaClient()

export const getCategories=async(req:Request, res:Response)=>{
    // res.status(200)
    // res.json({mensaje:"Test."})    
    try{
        
        const {totalItems}= req.params
        const total =parseInt(totalItems)

        const categories=await prisma.category.findMany(            
            {
                orderBy:{
                    name:'asc'
                },
                take:total
            }
        )
        res.json(categories)

    }catch(error){
        console.log("Ocurrio un error en retrieveCategoriesController")
        res.status(503)
        res.json({error:'Ocurrio un error. El servicio no esta disponible'})
    }
}
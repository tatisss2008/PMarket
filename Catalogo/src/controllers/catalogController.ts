

import { PrismaClient } from "@prisma/client"
import { Request,Response } from "express"


const prisma=new PrismaClient()

//Logica de negocio para el microservicio carrito de compras
export const getProductInventory= async (req:Request, res:Response)=>{

    const {idProduct} =req.params
    let myProduct=parseInt(idProduct)

    if(isNaN(myProduct)){
        res.status(400)
        res.json({error:'Bad request..'})
        return 
    }

    try{
        const productInventory=await prisma.product.findUnique(
            {
                where:{
                    id:parseInt(idProduct)
                }
            }
        )
        res.json(productInventory)
    }catch(error){
        console.error("Ocurrio un error ", error)
        res.status(503)
        res.json({error:'Servcice unavailable.'})
    }
}



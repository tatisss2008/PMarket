

import { PrismaClient } from "@prisma/client"
import { Request,Response } from "express"


const prisma=new PrismaClient()

//Logica de negocio para el microservicio carrito de compras
export const getCartProducts= async (req:Request, res:Response)=>{

    try{
        const cartProduct=await prisma.cart.findMany()
        res.json(cartProduct)
    }catch(error){
        console.error("Ocurrio un error ", error)
        res.status(503)
        res.json({error:'Servcice unavailable'})
    }
}

export const addCartProducts=async (req:Request, res:Response)=>{

    const {productId, quantity}=req.body
    try{
        const cartProduct=await prisma.cart.create(
            {
                data:{
                    productId,
                    quantity
                }
            }            
        )
        res.json(cartProduct)

    }catch(error){
        console.error("Ocurrio un error insert", error)
        res.status(503)
        res.json({error:'Servcice unavailable'})
    }
}

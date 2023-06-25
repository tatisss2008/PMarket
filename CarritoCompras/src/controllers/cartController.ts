

import { PrismaClient } from "@prisma/client"
import { Request,Response } from "express"
import {check, validationResult} from 'express-validator'

const prisma=new PrismaClient()

//Logica de negocio para el microservicio carrito de compras
export const getCartProducts= async (req:Request, res:Response)=>{
    const {userId}=req.params

    try{
        const cartProduct=await prisma.cart.findMany(
            {
                where:{
                   userId:parseInt(userId) 
                }
            }
        )
        res.json(cartProduct)
    }catch(error){
        console.error("Ocurrio un error ", error)
        res.status(503)
        res.json({error:'Servcice unavailable'})
    }
}


export const addCartProducts=[
    
    check('productId').isNumeric().withMessage('el id del producto debe ser numerico'), 
    check('quantity').isNumeric().withMessage('la cantidad del producto debe ser numerico'),
    check('productId').isInt({gt:0}).withMessage('el id del producto debe ser mayor a 0'),
    check('quantity').isInt({gt:0}).withMessage('la cantidad del producto debe ser mayor a 0'),
    check('userId').isNumeric().withMessage('el usuario debe ser numerico'), 

    
    async (req:Request, res:Response)=>{

    const errors =validationResult(req)
        if(!errors.isEmpty()){
        res.status(400)
        // res.json({errors:'Hubo errores en la petición'})
        res.json({errors:errors.array()})
        return
    }

    const {productId, quantity,userId}=req.body
    try{

        const existingProduct=await prisma.cart.findFirst(
            {
                where:{
                    productId:productId,
                    userId:userId
                }
            }
        )

        if(existingProduct){
            const updateCart = await prisma.cart.update(
                {
                    where:{
                        id:existingProduct.id
                    },
                    data:{
                        quantity:{
                            increment:quantity
                        }
                    }
                }
            )

            res.json(updateCart)
        }else{
            const cartProduct=await prisma.cart.create(
                {
                    data:{
                        productId,
                        quantity,
                        userId
                    }
                }            
            )
            res.json(cartProduct)
        }
    }catch(error){
        console.error("Ocurrio un error insert", error)
        res.status(503)
        res.json({error:'Servcice unavailable..'})
    }
}
]
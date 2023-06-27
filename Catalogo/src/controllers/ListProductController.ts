

import { PrismaClient } from "@prisma/client"
import { Request,Response } from "express"


const prisma=new PrismaClient()
 
//Logica de negocio para obtener el inventario de productos en el microservicio catalogo
export const getProductList= async (req:Request, res:Response)=>{    

    try{

        // const {idProduct} =req.params
        // let myProduct=parseInt(idProduct)        


        //Numero de la Pagina
        const {totalItems} =req.params
        let items=parseInt(totalItems)        

        //Cantidad de regstros de cada pagina
        const {idPage} =req.params
        let page=parseInt(idPage)

        if(isNaN(items) || isNaN(page) ){
            res.status(400)
            res.json({error:'Bad request..'})
            return 
        }


        const productsInventory=await prisma.product.findMany(
            {
                skip:(page-1)*items,
                take:items
            }
        )
        res.json(productsInventory)
    }catch(error){
        console.error("Ocurrio un error ", error)
        res.status(503)
        res.json({error:'Servcice unavailable.'})
    }
}



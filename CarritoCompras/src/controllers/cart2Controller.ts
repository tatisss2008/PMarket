

import { PrismaClient } from "@prisma/client"
import { Request,Response } from "express"
import {check, validationResult} from 'express-validator'

const prisma=new PrismaClient()

//Logica de negocio para el microservicio carrito de compras
export const getCartTotalPrice= async (req:Request, res:Response)=>{
}
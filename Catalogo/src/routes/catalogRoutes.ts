import express  ,{Request, Response, Router} from 'express'
import { getProductInventory } from '../controllers/catalogController'

//Rutas del microservicio del carrito de compras
const myRouter:Router=Router()

myRouter.get('/:idProduct',getProductInventory)



export default myRouter
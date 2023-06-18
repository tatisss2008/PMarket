import express  ,{Request, Response, Router} from 'express'
import { addCartProducts,getCartProducts } from '../controllers/cartController'

//Rutas del microservicio del carrito de compras
const myRouter:Router=Router()

myRouter.get('/',getCartProducts)

myRouter.post('/',addCartProducts)

export default myRouter
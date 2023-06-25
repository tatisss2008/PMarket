import express  ,{Request, Response, Router} from 'express'
import { addCartProducts,getCartProducts } from '../controllers/cartController'
import { getCartTotalPrice } from '../controllers/cart2Controller'

//Rutas del microservicio del carrito de compras
const myRouter:Router=Router()

myRouter.get('/:userId',getCartProducts)

myRouter.post('/',addCartProducts)

myRouter.get('/',getCartTotalPrice)


export default myRouter
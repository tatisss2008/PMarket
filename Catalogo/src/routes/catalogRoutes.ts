import express  ,{Request, Response, Router} from 'express'
import { getProductInventory } from '../controllers/catalogController'
import { getProductList } from '../controllers/ListProductController'

//Rutas del microservicio del carrito de compras
const myRouter:Router=Router()

myRouter.get('/:idProduct',getProductInventory)
myRouter.get('/page/:idPage/items/:totalItems',getProductList)

export default myRouter
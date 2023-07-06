import express  ,{Request, Response, Router} from 'express'
import { getCategories } from "../controllers/retrieveCategoriesController";


//Crear una instancia de la clase Router
const myRouter:Router= Router()

//Definir la ruta donde voy a obtener el JSO de listado de categorias

myRouter.get('/:totalItems', getCategories)

export default myRouter
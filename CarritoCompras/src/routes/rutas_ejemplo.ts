import express, {Request, Response, Router} from 'express'


const myRouter:Router= Router()


myRouter.get(
    '/',
    (req:Request, res:Response)=>{
        
        res.send('Hola plantilla TS!!!')
    }
)

myRouter.get(
    '/mensaje/:msg',
    (req:Request, res:Response)=>{

        const myVar= req.params.msg
        
        res.send(`He recibido el mensaje ${myVar}`)
    }
)

export default myRouter
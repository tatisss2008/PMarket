import request from 'supertest'
import app from '../src/app'

test(
    'Debe obtener un codigo de respuesta exitoso',
    async ()=>{
        //Hacer la peticion
        const response = await request(app).get('/4')

        //DEfinir las afirmaciones
        expect(response.statusCode).toBe(200)
    }
)
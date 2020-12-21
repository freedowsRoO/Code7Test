import axios from 'axios';
import { Router } from 'express';
import billController from '../src/controllers/billController';

const routes = new Router();

routes.get('/users', async(req, res) => {
    try {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        const users = data;
        return res.json(users)
    }
    catch (error) {
        return res.status(400).json({ error: 'error' })
    }    
})  

routes.get('/bills/', billController.index);
routes.get('/bills/:id', billController.show);
routes.get('/userbills', billController.showbill);
routes.post('/bills', billController.store);
routes.put('/bills/:id', billController.update);
routes.delete('/bills/:id', billController.destroy);

export default routes;
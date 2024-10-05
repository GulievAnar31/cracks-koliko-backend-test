import { FastifyInstance } from 'fastify';
import { getItems } from '../controllers/itemsController';

export default async function itemRoutes(fastify: FastifyInstance) {
	fastify.get('/items', getItems);
}

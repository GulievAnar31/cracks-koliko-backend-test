import { FastifyInstance } from 'fastify';
import { deductUserBalance } from '../controllers/userController';

export default async function userRoutes(fastify: FastifyInstance) {
	fastify.post('/users/deduct', deductUserBalance);
}

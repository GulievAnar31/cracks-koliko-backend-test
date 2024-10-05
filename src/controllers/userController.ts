import { FastifyRequest, FastifyReply } from 'fastify';
import { deductBalance } from '../services/userService';

interface DeductBalanceRequest {
	userId: number;
	amount: number;
}

export async function deductUserBalance(req: FastifyRequest<{ Body: DeductBalanceRequest }>, reply: FastifyReply) {
	const { userId, amount } = req.body;

	try {
		const result = await deductBalance(userId, amount);
		reply.send(result);
	} catch (error) {
		reply.status(400).send({ error: (error as Error).message });
	}
}

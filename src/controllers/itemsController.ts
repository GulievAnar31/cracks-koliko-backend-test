import axios from 'axios';
import { FastifyReply, FastifyRequest } from 'fastify';
import cacheService from '../services/cacheService';

const ITEMS_URL = 'https://api.skinport.com/v1/items';

export async function getItems(req: FastifyRequest, reply: FastifyReply) {
	const cachedData = await cacheService.get('items');

	if (cachedData) {
		return reply.send(cachedData);
	}

	const { data } = await axios.get(ITEMS_URL);

	const result = data.map((item: any) => ({
		name: item.market_hash_name,
		tradable_min_price: item.max_price,
		non_tradable_min_price: item.min_price,
	}));

	await cacheService.set('items', result, 3600); // Cache на 1 час

	reply.send(result);
}
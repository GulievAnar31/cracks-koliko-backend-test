import Redis from 'ioredis';

const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
	throw new Error("REDIS_URL is not defined");
}

const redis = new Redis(redisUrl);

export default {
	async get(key: string) {
		const data = await redis.get(key);
		return data ? JSON.parse(data) : null;
	},

	async set(key: string, value: any, ttl: number) {
		await redis.set(key, JSON.stringify(value), 'EX', ttl);
	},
};
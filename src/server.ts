import Fastify from 'fastify';
import itemRoutes from './routes/itemsRoutes';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';

dotenv.config();

const server = Fastify();

server.register(itemRoutes);
server.register(userRoutes);

server.listen({ host: '0.0.0.0', port: 3000 }, (err, address) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Server is running on ${address}`);
});
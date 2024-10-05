import db from '../db/db';

export async function deductBalance(userId: number, amount: number) {
	const user = await db.query('SELECT balance FROM users WHERE id = $1', [userId]);

	if (user.rows.length === 0) {
		throw new Error('User not found');
	}

	const balance = user.rows[0].balance;
	if (balance < amount) {
		throw new Error('Insufficient balance');
	}

	const newBalance = balance - amount;
	await db.query('UPDATE users SET balance = $1 WHERE id = $2', [newBalance, userId]);

	return { success: true, newBalance };
}
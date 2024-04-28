import Stripe from 'stripe';
import { Config } from 'sst/node/config';
import handler from '../../core/src/handler';
import { calculateCost } from '../../core/src/cost';

export const main = handler(async (event) => {
	const { storage, source } = JSON.parse(event.body || '{}');
	const amount = calculateCost(storage);
	const description = 'Scratch charge';

	// Load our secret key
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error cannot change type defintion
	const stripe = new Stripe(Config.STRIPE_SECRET_KEY, {
		apiVersion: '2024-04-10',
	});

	await stripe.charges.create({
		source,
		amount,
		description,
		currency: 'usd',
	});

	return JSON.stringify({ status: true });
});

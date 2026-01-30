import type { Config } from 'vike/types';
import vikePhoton from 'vike-photon/config';
import vikeReact from 'vike-react/config';

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
	title: 'Ron Johnson Owuor',
	description:
		'Hello there, my name is Ron Johnson Owuor kenyan software Engineer',

	extends: [vikeReact, vikePhoton],

	photon: {
		server: '../server/entry.ts',
	},
} satisfies Config;

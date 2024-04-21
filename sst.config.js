import { AuthStack } from './stacks/AuthStack';
import { ApiStack } from './stacks/ApiStack';
import { FrontendStack } from './stacks/FrontendStack';
import { StorageStack } from './stacks/StorageStack';
export default {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	config(_input) {
		return {
			name: 'notes',
			region: 'us-east-1',
		};
	},
	stacks(app) {
		app.stack(StorageStack).stack(ApiStack).stack(AuthStack).stack(FrontendStack);
	},
};

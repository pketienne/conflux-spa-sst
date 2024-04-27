import { Table } from 'sst/node/table';
import handler from '@conflux-spa-sst/core/handler';
import dynamoDb from '@conflux-spa-sst/core/dynamodb';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const main = handler(async (event) => {
	const params = {
		TableName: Table.Notes.tableName,
		// 'KeyConditionExpression' defines the condition for the query
		// - 'userId = :userId': only return items with matching 'userId'
		//   partition key
		KeyConditionExpression: 'userId = :userId',
		// 'ExpressionAttributeValues' defines the value in the condition
		// - ':userId': defines 'userId' to be the id of the author
		ExpressionAttributeValues: {
			':userId': event.requestContext.authorizer?.iam.cognitoIdentity.identityId,
		},
	};

	const result = await dynamoDb.query(params);

	// Return the matching list of items in response body
	return JSON.stringify(result.Items);
});

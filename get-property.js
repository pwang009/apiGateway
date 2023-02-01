const AWS = require('aws-sdk');
const client = new AWS.DynamoDB.DocumentClient();

const { TABLE_NAME: TableName } = process.env;

exports.handler = async ({ pathParameters: { id }}) => {
  const { Item } = await client.get({ TableName, Key: { id }}).promise();
  if (Item) {
    return JSON.stringify(Item, null, 2);
  } else {
    return {
      statusCode: 404,
      body: 'Not Found'
    };
  }
};

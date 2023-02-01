const AWS = require('aws-sdk');
const client = new AWS.DynamoDB.DocumentClient();

const { v4: uuid } = require('uuid');

const { TABLE_NAME: TableName } = process.env;

exports.handler = async ({ body }) => {
  const Item = {
    id: uuid(),
    ...JSON.parse(body)
  };
  await client.put({ TableName, Item }).promise();
  return JSON.stringify(Item, null, 2);
};

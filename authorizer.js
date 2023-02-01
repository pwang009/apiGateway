const crypto = require('crypto');

const { SECRET_PASSWORD } = process.env;

exports.handler = async ({ queryStringParameters: { auth }}) => {
  const salt = auth.substring(0, 32);
  const hashA = auth.substring(32);
  const hashB = crypto.pbkdf2Sync(SECRET_PASSWORD, Buffer.from(salt, 'hex'), 100, 16, 'sha256').toString('hex');
  return { isAuthorized: hashA === hashB };
};

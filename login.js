const crypto = require('crypto');

const { SECRET_PASSWORD } = process.env;

exports.handler = async () => {
  const salt = crypto.randomBytes(16);
  const hash = crypto.pbkdf2Sync(SECRET_PASSWORD, salt, 100, 16, 'sha256');
  return salt.toString('hex') + hash.toString('hex');
};
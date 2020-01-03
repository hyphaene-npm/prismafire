const path = require('path');

const resolveFromCWD = finalPath => path.resolve(process.cwd(), finalPath);

module.exports = resolveFromCWD;

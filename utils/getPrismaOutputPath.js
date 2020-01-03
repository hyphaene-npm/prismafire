const argv = require('yargs').argv;

const resolveFromCWD = require('./resolveFromCWD');
const { DEFAULT_PRISMA_OUTPUT } = require('./constants');

const getPrismaOutputPath = () => resolveFromCWD(argv.output || DEFAULT_PRISMA_OUTPUT);

module.exports = getPrismaOutputPath;

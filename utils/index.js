const argv = require("yargs").argv;
const path = require("path");

const {
	DEFAULT_PRISMA_INPUT,
	DEFAULT_PRISMA_OUTPUT,
	DEFAULT_GLOB,
} = require("./constants");

const getPrismaInputPath = () =>
	path.resolve(process.cwd(), argv.input || DEFAULT_PRISMA_INPUT);

const getPrismaOutputPath = () =>
	path.resolve(process.cwd(), argv.output || DEFAULT_PRISMA_OUTPUT);

const getGlob = () => argv.glob || DEFAULT_GLOB;

module.exports = {
	getGlob,
	getPrismaInputPath,
	getPrismaOutputPath,
};

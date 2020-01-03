const argv = require('yargs').argv;

const resolveFromCWD = require('./resolveFromCWD');
const isInputExt = require('./isInputExt');
const getYmlFile = require('./getYmlFile');

const { DEFAULT_PRISMA_INPUT } = require('./constants');

const getPrismaFileContent = () => {
	if (argv.input) {
		if (isInputExt('json')) {
			return require(resolveFromCWD(argv.input));
		} else if (isInputExt('yml') || isInputExt('yaml')) {
			return getYmlFile(argv.input);
		} else {
			throw new Error('Sorry, this extension file is not handled. Please submit an issue.');
		}
	} else {
		return require(resolveFromCWD(DEFAULT_PRISMA_INPUT));
	}
};

module.exports = getPrismaFileContent;

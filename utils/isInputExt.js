const argv = require('yargs').argv;

const isInputExt = ext => argv.input.endsWith(`.${ext}`);

module.exports = isInputExt;

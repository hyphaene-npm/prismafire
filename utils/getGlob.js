const argv = require('yargs').argv;

const { DEFAULT_GLOB } = require('./constants');

const getGlob = () => argv.glob || DEFAULT_GLOB;

module.exports = getGlob;

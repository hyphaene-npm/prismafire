const fs = require('fs');
const yaml = require('js-yaml');
const argv = require('yargs').argv;

const getYmlFile = path => yaml.safeLoad(fs.readFileSync(argv.input, 'utf8'));

module.exports = getYmlFile;

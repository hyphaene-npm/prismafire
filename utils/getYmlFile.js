const fs = require('fs');
const yaml = require('js-yaml');

const getYmlFile = path => yaml.safeLoad(fs.readFileSync(path, 'utf8'));

module.exports = getYmlFile;

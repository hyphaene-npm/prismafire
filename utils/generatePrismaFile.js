const fs = require('fs');
const yaml = require('js-yaml');
const getPrismaOutputPath = require('./getPrismaOutputPath');

const generatePrismaFile = (data, files) => {
	data.datamodel = files;
	const yamlStr = yaml.safeDump(data);
	fs.writeFileSync(getPrismaOutputPath(), yamlStr, 'utf8');
};

module.exports = generatePrismaFile;

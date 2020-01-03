const argv = require('yargs').argv;
const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

const getGlob = require('./getGlob');
const getPrismaFileContent = require('./getPrismaFileContent');
const generatePrismaFile = require('./generatePrismaFile');

module.exports = {
	getGlob,
	getPrismaFileContent,
	generatePrismaFile
};

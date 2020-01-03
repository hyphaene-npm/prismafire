#!/usr/bin/env node
const glob = require('glob');

const { getGlob, getPrismaFileContent, generatePrismaFile } = require('./utils');

async function main() {
	return new Promise((resolve, reject) => {
		glob(getGlob(), (err, files) => {
			if (!err) {
				try {
					const data = getPrismaFileContent();
					generatePrismaFile(data, files);
					resolve('prisma file generated !');
				} catch (error) {
					reject(error);
				}
			} else {
				reject(err);
			}
		});
	});
}

main()
	.then(console.log)
	.catch(console.log);

#!/usr/bin/env node
const glob = require('glob');

const { getGlob, getPrismaFileContent, generatePrismaFile } = require('./utils');

glob(getGlob(), (err, files) => {
	if (!err) {
		try {
			if (files.length === 0) {
				process.exit(1);

				console.log('No files found !');
			} else {
				const data = getPrismaFileContent();
				generatePrismaFile(data, files);
				console.log('prisma file generated !');
				process.exit(0);
			}
		} catch (error) {
			console.error(error);
			process.exit(1);
		}
	} else {
		console.log(err);
		process.exit(1);
	}
});

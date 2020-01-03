#!/usr/bin/env node
const fs = require("fs");
const yaml = require("js-yaml");
const glob = require("glob");

const { getPrismaInputPath, getPrismaOutputPath, getGlob } = require("./utils");

async function main() {
	return new Promise((resolve, reject) => {
		glob(getGlob(), function(err, files) {
			const data = require(getPrismaInputPath());

			if (!err) {
				data.datamodel = files;
				const yamlStr = yaml.safeDump(data);
				fs.writeFileSync(getPrismaOutputPath(), yamlStr, "utf8");
				resolve("prisma file generated !");
			} else {
				resolve(err);
			}
		});
	});
}

main()
	.then(console.log)
	.catch(console.log);

# Prismafire
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![_](https://img.shields.io/npm/dm/prismafire)

## Purpose 

This package aims to reduce the pain of writing all datamodels on the prisma.yml file.
It will regenerate it with populating datamodels field by intropecting your project.

This is the default structure where `prismafire` will work with zero conf

```
├── src
│   └── datamodels
│       └── **/*.graphql
├── prisma.yml ( default input and default ouput )
└── package.json
```

## Installation
```
npm install -D prismafire@latest
```

## Options 
### input
If your prisma.yml is elsewhere, you can specify `--input` to indicate where to fetch the file.
### output
If your prisma.yml should be elsewhere, you can specify ```--output``` to indicate where to write the file.
### glob
You can also set a different glob to match your datamodels fils through the ```--glob``` option 

## how to use it 
### scripts 

I suggest adding two scripts on the package json : 

```json 
{
    // ...
    "scripts": {
        // ...
        "prisma":"prisma",
        "preprisma":"primafire" // or with options 
    }
}
```
then run prisma cli via the script.

This way, you'll trigger the hook to generate the prisma file before each command using it.
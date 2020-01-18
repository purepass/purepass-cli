#!/usr/bin/env node
const { Purepass, PurepassOptions } = require('purepass-core');
const commandLineArgs = require('command-line-args');
const copyPassword = require('clipboardy').writeSync;
const runInteractive = require('../lib/interactive');
const print = require('../lib/printer');
const purepass = new Purepass();

const optionDefinitions = [{
        name: 'interactive',
        type: Boolean,
        alias: 'i',
    },
    {
        name: 'secret',
        type: String,
        alias: 's',
        defaultOption: true
    },
    {
        name: 'namespace',
        type: String,
        alias: 'n'
    },
    {
        name: 'maxPasswordLength',
        type: Number,
        alias: 'l'
    },
    {
        name: 'specialCharacter',
        type: String,
        alias: 'c'
    },
    {
        name: 'copyToClipboard',
        type: Boolean,
        alias: 'p',
        defaultOption: false
    }
];

const options = commandLineArgs(optionDefinitions);

if(options.interactive) {
    runInteractive();
} else {
    const {
        secret,
        namespace,
        specialCharacter,
        maxPasswordLength,
        copyToClipboard
    } = options;
    if(!secret) {
        runInteractive();
        return;
    }
    const purepassOptions = new PurepassOptions(namespace, specialCharacter, maxPasswordLength);
    const generatedPassword = purepass.generatePassword(secret, purepassOptions);
    if(!generatedPassword) {
        throw new Error('Failed to generate password');
    }
    if(copyToClipboard) {
        copyPassword(generatedPassword);
    }
    print(generatedPassword);
}
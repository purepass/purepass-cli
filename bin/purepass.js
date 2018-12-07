
const { Purepass, PurepassOptions } = require('purepass-core');
const commandLineArgs = require('command-line-args');
const runInteractive = require('../lib/interactive');
const print = require('../lib/printer');
const purepass = new Purepass();

const optionDefinitions = [{
        name: 'interactive',
        type: Boolean,
        alias: 'i'
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
        type: Number
    },
    {
        name: 'specialCharacter',
        type: String
    }
];

const options = commandLineArgs(optionDefinitions);

if(options.interactive) {
    runInteractive();
} else {
    const {secret, namespace, specialCharacter, maxPasswordLength} = options;
    const purepassOptions = new PurepassOptions(namespace, specialCharacter, maxPasswordLength);
    const generatedPassword = purepass.generatePassword(secret, purepassOptions);
    print(generatedPassword);
}
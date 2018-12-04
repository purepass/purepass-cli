const inquirer = require('inquirer');
const chalk = require('chalk');
const {
    Purepass,
    PurepassOptions
} = require('purepass-core');
const purepass = new Purepass();

inquirer
    .prompt([{
            name: 'secret',
            type: 'input',
            message: 'what is your secret?',
            validate(secret) {
                return !!secret.length;
            }
        },
        {
            name: 'namespace',
            type: 'input',
            message: 'select a namespace, ie: fb',
            validate(namespace) {
                return namespace.length == 2
            }
        },
        {
            name: 'specialCharacter',
            type: 'input',
            message: 'select a special character ie: *',
            default: '#',
            validate(specialCharacter) {
                return specialCharacter.length == 1
            }
        },
        {
            name: 'maxPasswordLength',
            type: 'input',
            default: 64,
            message: 'set maximum password length',
            validate(maxPasswordLength) {
                return parseInt(maxPasswordLength) >= 13;
            }
        },
    ])
    .then(answers => {
        const {
            secret,
            namespace,
            specialCharacter
        } = answers;
        const maxPasswordLength = parseInt(answers.maxPasswordLength);
        const options = new PurepassOptions(namespace, specialCharacter, maxPasswordLength);
        const generatedPassword = purepass.generatePassword(secret, options);
        console.log('your new password is:\n\n');
        console.log(chalk.green(generatedPassword))
    }).catch((e) => {
        console.log(e);
    });
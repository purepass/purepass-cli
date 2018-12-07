const chalk = require('chalk');
module.exports = (generatedPassword) => {
    console.log('your new password is:\n\n');
    console.log(chalk.green(generatedPassword))
}
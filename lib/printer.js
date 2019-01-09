const chalk = require('chalk');
module.exports = (generatedPassword) => {
    console.log('your pure password is:\n');
    console.log(chalk.green(generatedPassword))
}
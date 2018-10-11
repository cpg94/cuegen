const template = require('./template');
const fs = require('fs');
const [binName] = process.argv.slice(2);

if (!binName) {
    throw Error('No .bin argument found!')
} else {
    fs.writeFile(`${binName.replace('.bin', '.cue')}`, template(binName), (error) => {
        if (error) {
            throw error
        }

        console.log('Cue File Generated 🍾');
    });
}


const template = require('../template');
const fs = require('fs');

const getFile = () => {
    const [binName] = process.argv.slice(2);
    if (!binName) {
        throw Error('No .bin argument found!')
    }

    fs.writeFile(`${process.cwd()}/${binName.replace('.bin', '.cue')}`, template(binName), (error) => {
        if (error) {
            throw error
        }

        console.log('Cue File Generated 🍾');
    });
    
}

exports.getFile = getFile



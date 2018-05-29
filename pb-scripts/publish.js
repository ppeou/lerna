const {iargs} = require('./util.js');
const prompt = require('prompt');
const fse = require('fse');

const params = iargs(process.argv, ':');
const opts = {
    key: {
        comps: '--comps',
    },
    packages: {
        path: './packages'
    }
};
const compsString = params[opts.key.comps] || '';
if(compsString !== '') {
    const compsList = compsString.split(',');
    console.log(compsList);
    compsList.forEach((c) => {
        const compPath = `${opts.packages.path}/${c}`;
        console.log(compPath);
        const {name, version} = fse.readJsonSync(`${compPath}/package.json`);
        console.log(name, version);
    });


}else {
    console.warn(`no components. use publish.js --packages:comp-a,comp-b`);
}


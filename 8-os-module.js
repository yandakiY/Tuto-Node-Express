const os = require('os');

const user = os.userInfo();
console.log(user);

const currentOs = {
    username: os.userInfo().username,
    name: os.type(),
    release: os.release(),
    TotalMem: os.totalmem(),
    FreeMem: os.freemem()
}

console.log(currentOs);
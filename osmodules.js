const os = require('os')
// info about user
const user = os.userInfo()
console.log(user)

// method returns tge system uptime in seconds
console.log('system uptime '+os.uptime())

const curresntOS = {
    name:os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(curresntOS)
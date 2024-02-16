// const name=require('./names') 
// const sayHi=require('./utils') 

// sayHi(name.firstName)
// sayHi('sajid')
// sayHi(name.lastName)

const os = require('os')  
const user= os.userInfo()
console.log(user)
console.log(`the system up time is ${os.uptime()} seconds`)
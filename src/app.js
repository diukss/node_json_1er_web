const {envs} = require('./config/env')
const {startServer} = require('./server/server')

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}




//Función agnostica autoconvocada
//agnostica porque no tiene nombre
//autoconvocada porque se convoca con los ultimos parentesis
(async() => {
main();
})()
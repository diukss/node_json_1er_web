const express = require('express')
const path = require('path')

const startServer = (options) => {
    const {port, public_path = 'public'} = options

    const app = express()
    //usar middleware:
    app.use(express.static(public_path)) //contenido estatico que se pone disponible para que se use
    app.get('*', (req,res) => {

        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, () => {
        console.log("escuchando en" + port)
    })
}

module.exports = {
    startServer
}
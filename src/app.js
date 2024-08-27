const main = () => {
    console.log("holiwi")
}



//Función agnostica autoconvocada
//agnostica porque no tiene nombre
//autoconvocada porque se convoca con los ultimos parentesis
(async() => {
main();
})()
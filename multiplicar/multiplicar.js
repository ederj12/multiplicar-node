// requires 
const fs = require('fs');

let listarTabla = (base, limite) => {
    for (let index = 1; index <= limite; index++) {
        console.log(` ${base} * ${index} = ${base * index}`);
    }
}


let crearArchivo = (base, limite) => {
    return new Promise((res, rej) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += ` ${base} * ${index} = ${base * index} \n`;
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) rej(err);
            res(`El archivo tabla-${base}.txt fue creado`);
        });


    });
};

module.exports = {
    crearArchivo,
    listarTabla
}

// let base = 4;
import inquirer from "inquirer"
import Pizza from "../models/Pizza.js"

/*LO UNICO QUE FALTA TERMINAR ES ESTOOOO XD HACEEERRRRR NO OVLIDARNOSSS xD */

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué acción quiere ejecutar?\n',
        choices: [
            {
                value: 0,
                name: `Listar pizzas`
            }, 
            {
                value: 1,
                name: `Traer una pizza`
            },
            {
                value: 2,
                name: `Actualizar pizza`
            },
            {
                value: 3,
                name: `Crear pizza`
            },
            {
                value: 4,
                name: `Borrar pizza`
            },
        ]

    }
]

const pausaOpt = [
    {
        type: 'input',
        name: 'enter',
        message: `Presione ${'ENTER'.green} para continuar`
    }
]


const inquireMenu = async() => {
    
    console.clear()

    console.log('==========================='.green)
    console.log(' Seleccione una opcion'.white)
    console.log('===========================\n'.green)

    const {opcion} = await inquirer.prompt(menuOpts)

    return opcion
    
}

const pausa = async() => {
    await inquirer.prompt(pausaOpt)
}

const leerInput = async(message) => {

    console.clear()
    const question = [ {
        type: 'input',
        name: 'desc',
        message,
        validate(value = '') {
            if (value.trim().length === 0) {
                return 'Por favor ingrese un valor'
            }
            return true
        }
    }]

    const {desc} = await inquirer.prompt(question)

    return desc.trim()
}

const confirmar = async(message) => {

    const question = [ {
        type: 'confirm',
        name: 'ok',
        message
    }]

    const {ok} =  await inquirer.prompt(question)
    return ok

}


module.exports = {
    inquireMenu,
    pausa,
    leerInput,
    confirmar
}
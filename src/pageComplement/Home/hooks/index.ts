import { IUser } from "../../../core/interfaces";

function createUserStringData(user: IUser) {
    return `{ "name": "${user.name}", "cpf": "${user.cpf}", "phone": "${user.phone}", "email": "${user.email}" }`
}

export {
    createUserStringData
}
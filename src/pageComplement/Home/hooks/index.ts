import { getLocalStorage, localStorageIsFilled, setLocalStorage, stringToArray, stringToObject } from "../../../core/hooks";
import { IUser } from "../../../core/interfaces";

function createUserStringData(user: IUser) {
    return `{ "name": "${user.name}", "cpf": "${user.cpf}", "phone": "${user.phone}", "email": "${user.email}" }`
}

function addUserInLocalStorage(user: IUser) {
    if (localStorageIsFilled('users')) {
        setLocalStorage('users', getLocalStorage('users') + "=><=" + createUserStringData(user))
    } else { setLocalStorage('users', createUserStringData(user)) }
}

function getStorageUsers(users: string) {
    return stringToArray(users).map(e => { return (stringToObject(e)) })
}



export {
    createUserStringData,
    addUserInLocalStorage,
    getStorageUsers
}
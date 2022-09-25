import { getLocalStorage, localStorageIsFilled, setLocalStorage, stringToArray, stringToObject } from "../../../core/hooks";
import { IUser } from "../../../core/interfaces";

function createDeletedUserStringData(user: IUser) {
    return `${user.cpf}`
}

function addDeletedUserInLocalStorage(user: IUser, setState: React.Dispatch<React.SetStateAction<string>>) {
    if (localStorageIsFilled('deletedUsers')) {
        setLocalStorage('deletedUsers', getLocalStorage('deletedUsers') + "=><=" + createDeletedUserStringData(user))
        setState(getLocalStorage('deletedUsers') + "=><=" + createDeletedUserStringData(user))
    } else {
        setLocalStorage('deletedUsers', createDeletedUserStringData(user))
        setState(createDeletedUserStringData(user))
    }
}

function getStorageDeletedUsers(users: string) {
    return stringToArray(users).map(e => { return (stringToObject(e)) })
}

function createUserStringData(user: IUser) {
    return `{ "name": "${user.name}", "cpf": "${user.cpf}", "phone": "${user.phone}", "email": "${user.email}" }`
}

function addEditedUserInLocalStorage(user: IUser,
    // setState: React.Dispatch<React.SetStateAction<string>>
) {
    if (localStorageIsFilled('editedUsers')) {
        setLocalStorage('editedUsers', getLocalStorage('editedUsers') + "=><=" + createUserStringData(user))
        // setState(getLocalStorage('editedUsers') + "=><=" + createUserStringData(user))
    } else {
        setLocalStorage('editedUsers', createUserStringData(user))
        // setState(createUserStringData(user))
    }
}

export {
    createDeletedUserStringData,
    addDeletedUserInLocalStorage,
    getStorageDeletedUsers,
    addEditedUserInLocalStorage,
    createUserStringData
}
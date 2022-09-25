import { IForm } from "../interfaces"

const notHaveEmptyFields = (form: IForm) => {
    let result = true
    Object.keys(form).map(e => {
        if ((form as any)[e] == '') result = false
    })
    return result
}

function checkDevice(window: { navigator: { userAgent: string } }) {
    const { navigator } = window
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true; // está utilizando celular
    }
    else {
        return false; // não é celular
    }
}

function getLocalStorage(key: string) {
    try {
        return localStorage.getItem(`@tinnova-web/${key}`)
    } catch (error) {
        console.error(error)
        return null
    }

}
function removeLocalStorage(key: string) {
    try {
        return localStorage.removeItem(`@tinnova-web/${key}`)
    } catch (error) {
        console.error(error)
    }
}
function setLocalStorage(key: string, value: string) {
    try {
        return localStorage.setItem(`@tinnova-web/${key}`, value)
    } catch (error) {
        console.error(error)
    }
}


export {
    checkDevice,
    notHaveEmptyFields,
    getLocalStorage,
    removeLocalStorage,
    setLocalStorage
}
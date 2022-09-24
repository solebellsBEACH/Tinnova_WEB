import { IForm } from "../interfaces"

const notHaveEmptyFields = (form: IForm) => {
    let result = true
    Object.keys(form).map(e => { if (e == '') result = false })
    return result
}

export {
    notHaveEmptyFields,
}
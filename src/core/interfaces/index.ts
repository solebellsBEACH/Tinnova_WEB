export interface IUsersDuckInitialState {
    loading: boolean,
    error: boolean,
    success: boolean,
    data: IUser[] | null
}; 


export interface IForm {
    name: string
    cpf: string
    phone: string
    email: string
}
export interface IUser {
    name: string
    cpf: string
    phone: string
    email: string
}
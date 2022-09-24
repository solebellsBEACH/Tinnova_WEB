export interface IHomeDuckInitialState {
    loading: boolean,
    error: boolean,
    success: boolean,
    data: [] | null
}; 


export interface IForm {
    name: string
    cpf: string
    phone: string
    email: string
}
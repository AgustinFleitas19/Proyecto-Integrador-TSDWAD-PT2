export interface UsuarioI {
    email:string,
    username:string,
    password:string,
    token?:string,
    is_staff?: boolean,
}
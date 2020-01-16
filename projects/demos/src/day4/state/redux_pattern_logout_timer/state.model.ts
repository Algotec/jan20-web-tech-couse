
export const initialState: IState = {
    counter: 0,
    loggedIn: false,
    users:[]
};

export interface User{
    firstName:string;
}
export interface IState {
    counter: number;
    loggedIn: boolean;
    users:User[];
}
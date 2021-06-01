export interface ICreatePeopleRequestDTO{
    _id: string;
    name: string;
    email: string;
    avatar: string;
    age: number;
    description: string;
    measures: {
        height: number;
        weight: number;
        imc: number;
    }
    sex: 'masculine' | 'feminine' | 'others';
}
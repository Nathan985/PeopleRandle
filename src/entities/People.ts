import { uuid } from 'uuidv4';

export class People{
    public readonly _id: string;
    public name: string;
    public email: string;
    public avatar: string;
    public age: number;
    public description: string;
    public measures?: {
        height: number;
        weight: number;
        imc: number;
    }
    public sex: 'masculine' | 'feminine' | 'others';

    constructor(props: Omit<People, '_id'>, _id?: string){
      Object.assign(this, props);

      if(!_id){
        this._id = uuid();
      }
    }
}
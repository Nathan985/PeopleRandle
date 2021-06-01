import { People } from '../../entities/People';
import { MysqlCreateConnectionRepository } from '../../repositories/implementations/MysqlCreateConnectionRepository';
import { IPeopleRepository } from '../../repositories/IPeopleRepository';
import { ICreatePeopleRequestDTO } from './CreatePeopleDTO';

export class CreatePeopleUseCase {

  constructor(
    private peopleRepository: IPeopleRepository,
    private mysqlCreateConnectionRepository: MysqlCreateConnectionRepository
  ){}

  async execute(data: ICreatePeopleRequestDTO){

    const Connection = await this.mysqlCreateConnectionRepository.execute();

    const peopleAleradyExists = await this.peopleRepository.findByEmail(data.email, Connection);
    
    if(peopleAleradyExists){
      throw new Error('People already exists.')
    }

    const people = new People(data);

    await this.peopleRepository.savePeople(people, Connection);

  }
}
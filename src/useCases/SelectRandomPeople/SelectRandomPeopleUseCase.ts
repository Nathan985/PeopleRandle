import { IPeopleRepository } from "../../repositories/IPeopleRepository";
import { MysqlCreateConnectionRepository } from '../../repositories/implementations/MysqlCreateConnectionRepository';

export class SelectRandomPeopleCaseUse {
  constructor(
    private peopleRepository: IPeopleRepository,
    private mysqlCreateConnectionRepository: MysqlCreateConnectionRepository
  ){}

  async execute(){

    const Connection = await this.mysqlCreateConnectionRepository.execute();

    const PeopleRandom = await this.peopleRepository.getHandlePeople(Connection);

    if(!PeopleRandom){
      throw new Error('No data found')
    }

    return PeopleRandom;
  }
}
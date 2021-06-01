import { SelectRandomPeopleController } from './SelectRandomPeopleController';
import { SelectRandomPeopleCaseUse } from './SelectRandomPeopleUseCase';
import {MysqlPeopleRepository} from '../../repositories/implementations/MysqlPeopleRepository';
import {MysqlCreateConnectionRepository} from '../../repositories/implementations/MysqlCreateConnectionRepository';


const mysqlPeopleRepository = new MysqlPeopleRepository();
const mysqlCreateConnectionRepository = new MysqlCreateConnectionRepository();

const selectRandomPeopleCaseUse = new SelectRandomPeopleCaseUse(
  mysqlPeopleRepository,
  mysqlCreateConnectionRepository
);

const selectRandomPeopleController = new SelectRandomPeopleController(
  selectRandomPeopleCaseUse
)

export { selectRandomPeopleCaseUse, selectRandomPeopleController };
import { MysqlCreateConnectionRepository } from '../../repositories/implementations/MysqlCreateConnectionRepository';
import { MysqlPeopleRepository } from '../../repositories/implementations/MysqlPeopleRepository';
import { CreatePeopleController } from './CreatePeopleController';
import { CreatePeopleUseCase } from './CreatePeopleUseCase';

const mysqlPeopleRepository = new MysqlPeopleRepository();
const mysqlCreateConnectionRepository = new MysqlCreateConnectionRepository();  

const createPeopleUseCase = new CreatePeopleUseCase(
  mysqlPeopleRepository,
  mysqlCreateConnectionRepository
);

const createPeopleController = new CreatePeopleController(
  createPeopleUseCase
);

export {createPeopleUseCase, createPeopleController};
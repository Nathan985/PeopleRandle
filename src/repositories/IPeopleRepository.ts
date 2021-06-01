import { People } from '../entities/People';
import { Connection } from 'mysql2/promise';

export interface IPeopleRepository {
  savePeople(People: People, Connection: Connection): Promise<void>;
  findByEmail(email: string, Connection: Connection): Promise<People>;
  getHandlePeople(Connection: Connection): Promise<People>;
}
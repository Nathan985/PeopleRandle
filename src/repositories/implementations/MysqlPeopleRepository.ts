import { People } from '../../entities/People';
import { IPeopleRepository } from '../IPeopleRepository';
import { Connection } from 'mysql2/promise'


export class MysqlPeopleRepository implements IPeopleRepository{


  async findByEmail(email: string, Connection: Connection): Promise<People>{
    try {

      const[rows] = await Connection.execute(`SELECT * FROM Tbl_People WHERE email = ?`, [email]);

      return rows[0];
    }
    
    catch{
      throw new Error("Falha ao Encontrar Email");
    }

    finally{
      Connection && Connection.end();
    }
  }

  async savePeople(people: People, Connection: Connection){
    try {

      const { _id, name, email, avatar, age, description, sex } = people;
      
      
      await Connection.execute(`INSERT INTO Tbl_People (_id, name, email, avatar, age, description, sex) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [_id, name, email, avatar, age, description, sex])
    
    } 

    catch (error) {

      throw new Error('There was a failure to register the user')
    }

    finally{
      Connection && Connection.end();
    }

  }

  async getHandlePeople(Connection: Connection){
    try {
      
      const [rows] = await Connection.execute(`SELECT * FROM Tbl_People ORDER BY rand() LIMIT 1`);
      return rows[0];
    }
    
    catch{
      throw new Error('Falha a encontrar usuarios')
    }

    finally{
      Connection && Connection.end();
    }
  }
}

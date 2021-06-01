import mysql, {Connection} from 'mysql2/promise';

export class MysqlCreateConnectionRepository{

    private host: string;
    private user: string; 
    private password: string; 
    private database: string;
    private port: string;

  constructor(){
    this.host = process.env.MYSQL_HOST, 
    this.user = process.env.MYSQL_USER, 
    this.password = process.env.MYSQL_PASSWORD, 
    this.database = process.env.MYSQL_DATABASE,
    this.port = process.env.MYSQL_PORT
  }

  async execute(){
    try{
      const conn = await mysql.createConnection({
        host: this.host, 
        user: this.user, 
        password: this.password, 
        database: this.database,
        port: Number(this.port)
      })
  
      return conn as Connection;
    }
    catch{
      throw new Error("Connection Lost");
    }
  }
}
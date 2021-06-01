import { CreatePeopleUseCase } from './CreatePeopleUseCase';

export class CreatePeopleController{

  constructor(
    private createPeopleUseCase: CreatePeopleUseCase
  ){}

  async handle(request, response): Promise<Response>{
    const {
      _id,
      name,
      email,
      avatar,
      age,
      description,
      measures,
      sex
    } = request.body;
    
    try {
      await this.createPeopleUseCase.execute({
        _id,
        name,
        email,
        avatar,
        age,
        description,
        measures,
        sex
      })
      return response.status(201).send();
    } 
    catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.' 
      })
    }
  }
}
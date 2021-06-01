import { SelectRandomPeopleCaseUse } from './SelectRandomPeopleUseCase';

export class SelectRandomPeopleController{

  constructor(
    private selectRandomPeopleCaseUse: SelectRandomPeopleCaseUse
  ){}

  async handle(response): Promise<Response>{

    try {
      const data = await this.selectRandomPeopleCaseUse.execute();
      
      return response.status(201).send({
        success: 1,
        data
      });
    } 
    catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.' 
      })
    }
  }
}
import { Team } from 'src/domain/entity/team'
import { ITeamRepository } from './repository-interface/team-repository'

export class PostTeamUseCase {
  private readonly teamRepo: ITeamRepository
  public constructor(teamRepo: ITeamRepository) {
    this.teamRepo = teamRepo
  }
  public async do(params: { name: string }) {
    const { name } = params

    const someDataEntity = new Team({
      name,
    })
    await this.teamRepo.save(someDataEntity)
  }
}

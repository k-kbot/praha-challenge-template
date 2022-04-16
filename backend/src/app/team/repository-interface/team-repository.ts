import { Team } from 'src/domain/entity/team'

export interface ITeamRepository {
  save(team: Team): Promise<Team>
}

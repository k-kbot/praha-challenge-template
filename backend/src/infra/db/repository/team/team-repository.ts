import { PrismaClient } from '@prisma/client'
import { ITeamRepository } from 'src/app/team/repository-interface/team-repository'
import { Team } from 'src/domain/entity/team'

export class TeamRepository implements ITeamRepository {
  private prismaClient: PrismaClient
  public constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient
  }

  public async save(teamEntity: Team): Promise<Team> {
    const { name } = teamEntity.getAllProperties()

    const savedTeamDatamodel = await this.prismaClient.team.create({
      data: {
        name,
      },
    })
    const savedTeamEntity = new Team({
      ...savedTeamDatamodel,
    })
    return savedTeamEntity
  }
}

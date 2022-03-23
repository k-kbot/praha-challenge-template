import { Controller, Get } from '@nestjs/common'
import { GetTeamResponse } from './response/get-team-response'
import { GetTeamUseCase } from '../../app/team/get-team-usecase'
import { PrismaClient } from '@prisma/client'
import { TeamQS } from 'src/infra/db/query-service/team-qs'

@Controller({
  path: '/teams',
})
export class TeamsController {
  @Get()
  async getTeams() {
    const prisma = new PrismaClient()
    const qs = new TeamQS(prisma)
    const usecase = new GetTeamUseCase(qs)
    const result = await usecase.do()
    const response = new GetTeamResponse({ teams: result })
    return response
  }
}

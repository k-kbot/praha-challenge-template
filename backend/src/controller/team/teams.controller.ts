import { Body, Controller, Get, Post } from '@nestjs/common'
import { GetTeamResponse } from './response/get-team-response'
import { PostTeamRequest } from './request/post-team-request'
import { GetTeamUseCase } from '../../app/team/get-team-usecase'
import { PostTeamUseCase } from '../../app/team/post-team-usecase'
import { TeamRepository } from 'src/infra/db/repository/team/team-repository'
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

  @Post()
  async postTeam(@Body() postTeamDTO: PostTeamRequest): Promise<void> {
    const prisma = new PrismaClient()
    const repo = new TeamRepository(prisma)
    const usecase = new PostTeamUseCase(repo)
    await usecase.do({
      name: postTeamDTO.name,
    })
  }
}

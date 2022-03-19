import { Controller, Get } from '@nestjs/common'

@Controller({
  path: '/teams',
})
export class TeamsController {
  @Get()
  getTeams() {
    console.log('teams')
  }
}

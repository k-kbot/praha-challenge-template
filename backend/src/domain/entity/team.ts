export class Team {
  private name: string
  public constructor(props: { name: string }) {
    const { name } = props
    this.name = name
  }

  public getAllProperties() {
    return {
      name: this.name,
    }
  }
}

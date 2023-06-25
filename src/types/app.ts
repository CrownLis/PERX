export type Settings = {
  dealers: string[]
}

export interface IApp {
  rootId: string
  start(settings: Settings): void
}

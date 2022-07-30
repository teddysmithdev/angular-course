export interface Pokemon {
    id: number,
    name: string,
    type: string,
    isCool: boolean,
    isStylish: boolean,
    acceptTerms: boolean,
  }

  export interface PokemonType {
    key: number,
    value: string
  }
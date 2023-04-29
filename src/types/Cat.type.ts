export type Cat = {
  id: number

  name: string

  /** yyyy-MM-dd */
  birthday: string

  sex: 'male' | 'female'

  isNeutralized: boolean
}
export interface DateProps {
  fromNow: (date: string) => string
  isAtLeastThirteenYearsOld: (date: Date) => boolean
}

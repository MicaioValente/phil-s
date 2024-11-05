export function hasFieldChanged(valueOne: any, valueTwo: any) {
  if (
    (valueOne === '' || valueOne === null || valueOne === undefined) &&
    (valueTwo === '' || valueTwo === null || valueTwo === undefined)
  ) {
    return false;
  }
  return valueOne !== valueTwo;
}

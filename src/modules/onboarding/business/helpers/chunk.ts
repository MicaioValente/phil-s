
export function chunkArray(array: string[], chunkSize: number): string[][] {
    let results: string[][] = [];
    while (array.length) {
      results.push(array.splice(0, chunkSize));
    }
    return results;
  }
  
export function isBase64(value: string | null): boolean {
  try {
    if (value) return btoa(atob(value)) === value;

    return false;
  } catch (err) {
    return false;
  }
}

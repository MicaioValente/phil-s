export function phonePattern(countryCode: string, value: string): string {
  const cleanedValue = value.replace(/\D/g, '');

  switch (countryCode) {
    case '+55': // Brasil: (XX) XXXXX-XXXX
    case '+91': // Índia: (XXX) XXX-XXXX
    case '+52': // México: (XXX) XXX-XXXX
      return cleanedValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    case '+1': // EUA / Canadá: (XXX) XXX-XXXX
    case '+64': // Nova Zelândia: (XXX) XXX-XXXX
    case '+61': // Austrália: XXXX XXX XXX
    case '+975': // Butão: (XXX) XXX-XXXX
      return cleanedValue.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

    case '+44': // Reino Unido: XXXXX XXXXXX
    case '+20': // Egito: (XXX) XXX XXXX
    case '+33': // França: XX XX XX XX XX
    case '+81': // Japão: XX-XXXX-XXXX
      return cleanedValue
        .replace(/(\d{5})(\d{6})/, '$1 $2')
        .replace(/(\d{6})\d+?$/, '$1');

    case '+49': // Alemanha: XXX XXX XXXX
    case '+39': // Itália: XXX XXX XXXX
    case '+34': // Espanha: XXX XXX XXX
    case '+43': // Áustria: XXX XXX XXXX
      return cleanedValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');

    case '+7': // Rússia: +7 (XXX) XXX-XX-XX
      return cleanedValue
        .replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '+7 ($1) $2-$3-$4')
        .replace(/(\d{2})\d+?$/, '$1');

    case '+27': // África do Sul: (XXX) XXX-XXXX
    case '+250': // Ruanda: (XXX) XXX-XXXX
      return cleanedValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2-$3');

    case '+82': // Coreia do Sul: XXX-XXXX-XXXX
    case '+86': // China: XXX XXXX XXXX
    case '+94': // Sri Lanka: XXX XXX XXX
      return cleanedValue
        .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1');

    case '+98': // Irã: +98 9XX XXX XXXX
    case '+996': // Quirguistão: +996 XXX XXX XXX
      return cleanedValue
        .replace(/(\d{3})(\d{3})(\d{4})/, '+98 $1 $2 $3')
        .replace(/(\d{3})\d+?$/, '$1');

    case '+31': // Países Baixos: (XXX) XXX-XXXX
    case '+32': // Bélgica: (XXX) XXX-XXXX
      return cleanedValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2-$3');

    case '+56': // Chile: (XXX) XXX-XXXX
    case '+57': // Colômbia: (XXX) XXX-XXXX
      return cleanedValue.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

    case '+91': // Índia: (XXX) XXX-XXXX
    case '+960': // Maldivas: (XXX) XXX-XXXX
      return cleanedValue
        .replace(/(\d{3})(\d{7})/, '($1) $2')
        .replace(/(\d{7})\d+?$/, '$1');

    case '+250': // Ruanda: (XXX) XXX-XXXX
    case '+253': // Djibouti: (XXX) XXX-XXXX
      return cleanedValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2-$3');

    case '+62': // Indonésia: (XXX) XXX-XXXX
    case '+63': // Filipinas: (XXX) XXX-XXXX
      return cleanedValue.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

    default:
      return cleanedValue;
  }
}

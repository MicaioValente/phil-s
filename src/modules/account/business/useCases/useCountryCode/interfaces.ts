export interface CountryCodeResponse {
  cca2: string;
  idd: {
    root: string;
    suffixes: string[];
  };
  name: {
    common: string;
  };
  flags: {
    svg: string;
    png: string;
  };
}

export interface CountryCodeReturn {
  id: string;
  acronym: string;
  code: string;
  name: string;
  flag: string;
}

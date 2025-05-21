type Country = {
    name: {
      common: string;
      official: string;
      nativeName?: {
        [lang: string]: {
          official: string;
          common: string;
        };
      };
    };
    cca2: string;
    cca3: string;
    region: string;
    subregion?: string;
    flags: {
      png: string;
      svg: string;
      alt?: string;
    };
    population: number;
    capital?: string[];
  };
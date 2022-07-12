interface ProviderConfig {
  name: string;
  logo: string;
}
interface Provider {
  [key: string]: ProviderConfig;
}
export const Providers: Provider = {
  google: {
    name: 'Google',
    logo: 'assets/google.svg',
  },
  github: {
    name: 'Github',
    logo: 'assets/github.svg',
  },
  discord: {
    name: 'Discord',
    logo: 'assets/discord.svg',
  },
  linkedin: {
    name: 'LinkedIn',
    logo: 'assets/linkedin.svg',
  },
};

export const GetProvider = (name: string | undefined) => {
  let providerConfig: any = null;

  if (!name) return providerConfig;
  Object.keys(Providers).forEach((providerName, idx: number) => {
    if (name.toLowerCase().startsWith(providerName)) {
      providerConfig = Providers[providerName];
    }
  });
  if (!providerConfig) {
    providerConfig = {
      name: 'email',
      logo: null,
    };
  }
  return providerConfig;
};

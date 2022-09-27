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

export const Avatars = {
  panda: '/assets/E065C295-62AF-4569-B938-2DEC8A918BC0.jpeg',
  giraff: '/assets/B47EA725-E11F-4C58-A334-A6452B8E56C0.jpeg',
  koala: '/assets/EC6AA3BC-44D3-45A2-AEF9-22C319B1B811.jpeg',
  doge: '/assets/45AB4EDB-AF53-41BA-9B22-74F640611FF5.jpeg',
  poloar: '/assets/95A162CD-EDCE-4020-95A1-A497E2D731AE.jpeg',
}

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

// Site-wide settings. Edit values here rather than in the templates.
export const site = {
  name: 'eHealth Implementation',
  project: 'AMBeR',
  projectLong: 'Advanced Modelling of Baltic Cancer E-Care',
  description:
    'Knowledge and tools for implementing eHealth in cancer care in the Baltic Sea region, from the Interreg South Baltic project AMBeR.',
  contactEmail: '', // TODO: add a contact address
  // Cookie-free analytics. Leave empty to disable.
  // Example: { provider: 'goatcounter', code: 'amber' }
  analytics: null as null | { provider: 'goatcounter'; code: string },
};

export const nav = [
  { href: '/model/', label: 'The AMBeR Model' },
  { href: '/stories/', label: 'Stories' },
  { href: '/local-guide/', label: 'Create your local guide' },
  { href: '/about/', label: 'About AMBeR' },
];

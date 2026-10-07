// Site-wide settings. Edit values here rather than in the templates.
export const site = {
  name: 'eHealth Implementation',
  project: 'AMBeR',
  projectLong: 'Advanced Modelling of Baltic Cancer E-Care',
  description:
    'Knowledge and tools for implementing eHealth in healthcare in the Baltic Sea region, from the Interreg South Baltic project AMBeR.',
  contactEmail: '', // TODO: add a contact address
  // Wording required by the Interreg South Baltic Communication Guidelines (sections 3.2 and 3.8)
  fundingStatement:
    'The AMBeR project is co-financed by the Interreg South Baltic Programme 2021–2027 through the European Regional Development Fund.',
  disclaimer:
    'The content of this website is the sole responsibility of its authors and can under no circumstances be regarded as reflecting the position of the European Union, the Managing Authority or the Joint Secretariat of the Interreg South Baltic Programme 2021–2027.',
  // Cookie-free analytics. Leave empty to disable.
  // Example: { provider: 'goatcounter', code: 'amber' }
  analytics: null as null | { provider: 'goatcounter'; code: string },
};

export const nav = [
  { href: '/model/', label: 'The AMBeR Model' },
  { href: '/stories/', label: 'Stories' },
  { href: '/resources/', label: 'Learnings & resources' },
  { href: '/about/', label: 'About AMBeR' },
];

// Languages offered in the language menu (machine translation by Google Translate).
// `code` is the Google Translate language code, `name` is written in the language itself.
export const languages = [
  { code: 'sv', name: 'Svenska' },
  { code: 'da', name: 'Dansk' },
  { code: 'de', name: 'Deutsch' },
  { code: 'pl', name: 'Polski' },
  { code: 'lt', name: 'Lietuvių' },
];

// Highlighted button at the end of the main menu
export const navCta = { href: '/local-guide/', label: 'Create your local guide' };

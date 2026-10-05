// Icon drawings (64 × 64). "accent" is the coloured block, "line" the outline on top.
export const icons = {
  search: {
    accent: '<circle cx="22" cy="31" r="14"/>',
    line: '<circle cx="28" cy="26" r="15"/><path d="M39 37l15 15"/>',
  },
  compass: {
    accent: '<circle cx="27" cy="37" r="18"/>',
    line: '<circle cx="34" cy="30" r="21"/><path d="M34 15l5 15-5 15-5-15z"/><circle cx="34" cy="30" r="2"/>',
  },
  people: {
    accent: '<rect x="6" y="38" width="26" height="18" rx="3"/>',
    line: '<circle cx="22" cy="20" r="7"/><path d="M9 50c0-8 5-13 13-13s13 5 13 13"/><circle cx="44" cy="22" r="6"/><path d="M38 37c2-2 4-3 7-3 6 0 10 5 10 12"/>',
  },
  clipboard: {
    accent: '<rect x="9" y="17" width="32" height="40"/>',
    line: '<rect x="16" y="10" width="34" height="46" rx="3"/><rect x="26" y="6" width="14" height="8" rx="2"/><path d="M23 27l3 3 5-6M36 28h8M23 40l3 3 5-6M36 41h8"/>',
  },
  document: {
    accent: '<rect x="9" y="16" width="30" height="40"/>',
    line: '<path d="M16 8h22l10 10v38H16z"/><path d="M38 8v10h10"/><path d="M23 28h18M23 35h18M23 42h12"/>',
  },
  lightbulb: {
    accent: '<circle cx="26" cy="27" r="15"/>',
    line: '<path d="M32 8c-9 0-15 7-15 15 0 6 3 9 6 12 2 2 3 4 3 7h12c0-3 1-5 3-7 3-3 6-6 6-12 0-8-6-15-15-15z"/><path d="M26 48h12M28 54h8"/>',
  },
  gear: {
    accent: '<circle cx="27" cy="37" r="15"/>',
    line: '<circle cx="34" cy="30" r="14"/><circle cx="34" cy="30" r="6"/><path d="M34 9v7M34 44v7M13 30h7M48 30h7M19 15l5 5M44 40l5 5M19 45l5-5M44 20l5-5"/>',
  },
  rocket: {
    accent: '<circle cx="24" cy="44" r="12"/>',
    line: '<path d="M32 6c10 6 14 16 12 28l-5 8H25l-5-8C18 22 22 12 32 6z"/><circle cx="32" cy="23" r="4"/><path d="M20 33l-6 9 8 2M44 33l6 9-8 2M28 47l4 9 4-9"/>',
  },
  chart: {
    accent: '<rect x="14" y="30" width="10" height="26"/>',
    line: '<path d="M10 8v46h46"/><rect x="19" y="34" width="8" height="20"/><rect x="31" y="24" width="8" height="30"/><rect x="43" y="14" width="8" height="40"/>',
  },
  cycle: {
    accent: '<circle cx="28" cy="35" r="16"/>',
    line: '<path d="M49 25a18 18 0 0 0-31-7"/><path d="M15 39a18 18 0 0 0 31 7"/><path d="M17 8v10h10M47 56V46H37"/>',
  },
  chat: {
    accent: '<rect x="6" y="30" width="28" height="20" rx="4"/>',
    line: '<path d="M14 10h40a4 4 0 0 1 4 4v22a4 4 0 0 1-4 4H30l-10 8v-8h-6a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4z"/><path d="M20 20h28M20 28h18"/>',
  },
  monitor: {
    accent: '<rect x="6" y="17" width="40" height="27"/>',
    line: '<rect x="12" y="10" width="44" height="30" rx="3"/><path d="M26 52h16M34 40v12"/><path d="M18 26h8l3-6 5 12 3-6h9"/>',
  },
  heart: {
    accent: '<circle cx="23" cy="36" r="14"/>',
    line: '<path d="M32 54S10 40 10 24c0-7 5-12 11-12 5 0 8 3 11 7 3-4 6-7 11-7 6 0 11 5 11 12 0 16-22 30-22 30z"/>',
  },
  calendar: {
    accent: '<rect x="8" y="20" width="34" height="36"/>',
    line: '<rect x="14" y="12" width="42" height="40" rx="3"/><path d="M14 22h42M24 8v8M46 8v8"/><path d="M22 32h6M32 32h6M42 32h6M22 42h6M32 42h6"/>',
  },
  training: {
    accent: '<rect x="14" y="34" width="30" height="18"/>',
    line: '<path d="M4 24l28-12 28 12-28 12z"/><path d="M16 30v12c0 4 7 8 16 8s16-4 16-8V30"/><path d="M60 24v14"/>',
  },
  map: {
    accent: '<path d="M6 18l18-6v40L6 58z"/>',
    line: '<path d="M10 14l16-6 14 6 16-6v42l-16 6-14-6-16 6z"/><path d="M26 8v42M40 14v42"/>',
  },
} as const;

export type IconName = keyof typeof icons;
export const iconNames = Object.keys(icons) as IconName[];

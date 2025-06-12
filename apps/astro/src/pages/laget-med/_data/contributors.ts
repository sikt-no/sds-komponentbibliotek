export interface Contributor {
  name: string;
  role: string;
  team: string;
}
export type Contributors = Contributor[];

export const team: Contributors[] = [
  [
    { name: "Sigve", role: "Design", team: "Designsystem" },
    { name: "Kim", role: "Design", team: "Designsystem" },
    { name: "Eivind", role: "Inkludering", team: "Designsystem" },
    { name: "Kristoffer", role: "Teknologi", team: "Designsystem" },
    { name: "Andreas", role: "Sjef", team: "Designsystem" },
  ],
];

export const contributors: Contributors[] = [
  [
    { name: "Vegar", role: "Teknologi", team: "Designsystem" },
    { name: "Hanne", role: "Design", team: "Designsystem" },
    { name: "Kine", role: "Teknologi", team: "Designsystem" },
    { name: "Sondre E.", role: "Design", team: "Designsystem" },
    { name: "Petter S.", role: "Design", team: "Designsystem" },
  ],
  [
    {
      name: "Kjartan",
      role: "Teknologi",
      team: "Min kompetanse",
    },
    {
      name: "Sondre S.",
      role: "Teknologi",
      team: "Min kompetanse",
    },
    { name: "Erik", role: "Teknologi", team: "Min kompetanse" },
    { name: "Vegard", role: "Teknologi", team: "Min kompetanse" },
    { name: "Hilde", role: "Design", team: "Min kompetanse" },
    { name: "Jakob", role: "Teknologi", team: "Min kompetanse" },
  ],
  [
    { name: "Sigurd", role: "Teknologi", team: "Kunnskapsdata" },
    { name: "Rolf Anders", role: "Design", team: "Kunnskapsdata" },
    { name: "Glaysa", role: "Teknologi", team: "Kunnskapsdata" },
  ],
  [
    { name: "Petter K.", role: "Teknologi", team: "Studieadmin." },
    { name: "Eirik", role: "Teknologi", team: "Studieadmin." },
    { name: "Mats", role: "Teknologi", team: "Studieadmin." },
    { name: "Marius", role: "Teknologi", team: "Studieadmin." },
    { name: "Patrick", role: "Teknologi", team: "Studieadmin." },
    { name: "An", role: "Teknologi", team: "Studieadmin." },
  ],
  [
    { name: "Christian", role: "Design", team: "Studentportal" },
    { name: "Lasse", role: "Teknologi", team: "Studentportal" },
  ],
  [{ name: "Sondre L.", role: "Teknologi", team: "Opptak Kjerne" }],
  [
    { name: "Solveig", role: "Teknologi", team: "Feide Kundeportal" },
    { name: "John-Magne", role: "Teknologi", team: "Feide Kundeportal" },
  ],
  [{ name: "Deg", role: "Din rolle", team: "Din produkt" }],
].reverse();

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
      team: "Tind",
    },
    {
      name: "Sondre S.",
      role: "Teknologi",
      team: "Tind",
    },
    { name: "Erik", role: "Teknologi", team: "Tind" },
    { name: "Vegard", role: "Teknologi", team: "Tind" },
    { name: "Hilde", role: "Design", team: "Tind" },
    { name: "Jakob", role: "Teknologi", team: "Tind" },
  ],
  [
    { name: "Sigurd", role: "Teknologi", team: "Kudaf" },
    { name: "Rolf Anders", role: "Design", team: "Kudaf" },
    { name: "Glaysa", role: "Teknologi", team: "Kudaf" },
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
  [{ name: "Deg", role: "Din rolle", team: "Ditt team" }],
].reverse();

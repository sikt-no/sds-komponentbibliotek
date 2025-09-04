export interface Contributor {
  name: string;
  role: string;
  team: string;
  id?: string;
}
export type Contributors = Contributor[];

export const team: Contributors[] = [
  [
    {
      name: "Sandra",
      role: "Design",
      team: "Designsystem",
      id: "2f66a71c-99a3-4508-b6fb-5d7dded21d2c",
    },
    {
      name: "Sigve",
      role: "Design",
      team: "Designsystem",
      id: "3c0ef45c-1308-4819-a376-4491af62c917",
    },
    {
      name: "Kim",
      role: "Design",
      team: "Designsystem",
      id: "0fe4eba1-3490-4d6a-b9f9-c822dab9b066",
    },
    {
      name: "Eivind",
      role: "Tilgjengelighet",
      team: "Designsystem",
      id: "e5aa21b0-bedb-43d0-9503-beecad3ac9c8",
    },
    {
      name: "Kristoffer",
      role: "Teknologi",
      team: "Designsystem",
      id: "935f7afe-a5f0-46cb-8398-b6eee80ec89d",
    },
    { name: "Andreas", role: "Sjef", team: "Designsystem" },
  ],
];

export const contributors: Contributors[] = [
  [
    { name: "Vegar", role: "Teknologi", team: "Designsystem" },
    { name: "Hanne", role: "Design", team: "Designsystem" },
    { name: "Petter S.", role: "Design", team: "Designsystem" },
    { name: "Sondre E.", role: "Design", team: "Designsystem" },
    { name: "Kine", role: "Teknologi", team: "Designsystem" },
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
  [{ name: "Jesper", role: "Design", team: "Læremiddelkatalogen" }],
  [{ name: "Magnus", role: "Teknologi", team: "KI-chat" }],
  [{ name: "Deg", role: "Din rolle", team: "Din produkt" }],
].reverse();

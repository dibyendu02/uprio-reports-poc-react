export const CATEGORY_CONFIG = [
  {
    key: "wellUnderstood" as const,
    title: "Well understood",
    rating: 5,
    preClass: "bg-neutral-100",
    postClass: "bg-semantic-success-100 text-semantic-success-800",
  },
  {
    key: "sillyMistakes" as const,
    title: "Understood but student makes silly mistakes",
    rating: 3,
    preClass: "bg-neutral-100",
    postClass: "bg-semantic-success-100 text-semantic-success-800",
  },
  {
    key: "needsReinforcement" as const,
    title: "Requires further reinforcement",
    rating: 2,
    preClass: "bg-neutral-100",
    postClass: "bg-accent-orange-100 text-accent-orange-900",
  },
  {
    key: "notAssessed" as const,
    title: "Categories not assessed in class",
    rating: 0,
    preClass: "bg-neutral-100",
    postClass: "bg-semantic-success-100 text-semantic-success-800",
  },
];

import { separateUppercase, combineSpaced } from '../utils/textTransform';

export const comparisonData = [
  {
    title: "All-Purpose Cleaner",
    color: "bg-[#009E00]", // Green
    competitor: "National Brand",
    rows: [
      ["Safe on Surfaces", "✔", "✔"],
      ["Cleans More Dirt & Grime", "✔", "✘"],
      ["Destroys Odor at Source", "✔", "✘"],
      ["100% Derived from Nature", "✔", "✘"],
    ],
  },
  {
    title: "Cleaner & Degreaser",
    color: "bg-[#D3242A]", // Red
    competitor: "National Brand",
    rows: [
      ["Safe on Industrial Surfaces", "✔", "✔"],
      ["100% Biodegradable", "✔", "✔"],
      ["More Grease Fighting Power", "✔", "✘"],
      ["Cuts Grease Faster", "✔", "✘"],
    ],
  },
  {
    title: "Glass Cleaner",
    color: "bg-[#22A7AD]", // Blue
    competitor: "National Brand",
    rows: [
      ["Streak-Free Shine", "✔", "✔"],
      ["Ammonia-Free Formula", "✔", "✘"],
      ["100% Derived from Nature", "✔", "✘"],
      ["100% Biodegradable", "✔", "✘"],
    ],
  },
];

// In your component:
const text = "RUGGED RED"; // Returns "RUGGED RED" 
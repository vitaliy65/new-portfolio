export interface BulbSettings {
  id: string;
  positions: { x: number; y: number; z: number; scale: number }[];
  color: number; // Hexadecimal color
  size: number;
  sectionIds: string[];
}

export const initialBulbSettings: BulbSettings[] = [
  {
    id: "bulb-1",
    positions: [
      { x: -12, y: 5, z: -10, scale: 1 }, // welcome
      { x: -9, y: -5, z: -10, scale: 1.7 }, // about
      { x: -30, y: 5, z: -10, scale: 1 }, // portfolio
      { x: -18, y: 11, z: -10, scale: 1.5 }, // contact
    ],
    color: 0x303276, // indigo
    size: 4,
    sectionIds: ["welcome", "about", "portfolio", "contact"],
  },
  {
    id: "bulb-2",
    positions: [
      { x: -8.5, y: -5, z: -20, scale: 1 }, // welcome
      { x: 8.2, y: -0.2, z: -20, scale: 1 }, // about
      { x: -30, y: -3, z: -20, scale: 1 }, // portfolio
      { x: -17, y: -10, z: -20, scale: 1.3 }, // contact
    ],
    color: 0x6623a3, // light purple
    size: 6,
    sectionIds: ["welcome", "about", "portfolio", "contact"],
  },
  {
    id: "bulb-3",
    positions: [
      { x: 8, y: 0, z: -30, scale: 1 }, // welcome
      { x: -11, y: 5, z: -30, scale: 1 }, // about
      { x: 30, y: 0, z: -30, scale: 1 }, // portfolio
      { x: 22, y: -2, z: -30, scale: 2 }, // contact
    ],
    color: 0x4a1775, // purple
    size: 6,
    sectionIds: ["welcome", "about", "portfolio", "contact"],
  },
  // Add more bulbs as needed
];

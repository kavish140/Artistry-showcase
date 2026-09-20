import heroPainting from "../assets/hero-painting.jpg";
import artistLena from "../assets/artist-lena.jpg";
import artistAdaeze from "../assets/artist-adaeze.jpg";
import artistMarco from "../assets/artist-marco.jpg";
import workTidalMemory from "../assets/work-tidal-memory.jpg";
import workAncestorsLight from "../assets/work-ancestors-light.jpg";
import workQuietField from "../assets/work-quiet-field.jpg";
import workMeridian from "../assets/work-meridian.jpg";
import workTheGathering from "../assets/work-the-gathering.jpg";
import workHorizonStudy from "../assets/work-horizon-study.jpg";

export type Artist = {
  name: string;
  city: string;
  blurb: string;
  image: string;
  tint: string;
};

export type Work = {
  id: string;
  title: string;
  artist: string;
  medium: string;
  year: string;
  price: string;
  dimensions: string;
  framing: string;
  edition: string;
  mood: string[];
  story: string;
  image: string;
  tint: string;
};

export const artists: Artist[] = [
  {
    name: "Lena Voss",
    city: "Berlin",
    blurb: "Large-scale abstraction built from layered washes and raw pigment.",
    image: artistLena,
    tint: "bg-mistblue/25",
  },
  {
    name: "Adaeze Nwosu",
    city: "Lagos",
    blurb: "Figurative works that fuse memory, ritual and bold colour.",
    image: artistAdaeze,
    tint: "bg-roseclay/20",
  },
  {
    name: "Marco Ito",
    city: "Kyoto",
    blurb: "Quiet minimalism in mineral tones and precise line.",
    image: artistMarco,
    tint: "bg-sage/25",
  },
];

export const artistByName = (name: string) => artists.find((a) => a.name === name);

export const heroImage = heroPainting;

export const works: Work[] = [
  {
    id: "tidal-memory",
    title: "Tidal Memory",
    artist: "Lena Voss",
    medium: "Oil on linen",
    year: "2024",
    price: "$18,400",
    dimensions: "150 × 120 cm (59 × 47 in)",
    framing: "Unframed, stretched on poplar bars",
    edition: "Unique work",
    mood: ["abstract", "coastal", "calm", "blue-grey"],
    story:
      "Built from eleven thin washes, each one allowed to dry for a week. The salt-bleached horizon line sits slightly below centre so the painting reads calmer in a room than on a screen.",
    image: workTidalMemory,
    tint: "bg-sand/30",
  },
  {
    id: "ancestors-light",
    title: "Ancestor's Light",
    artist: "Adaeze Nwosu",
    medium: "Acrylic on canvas",
    year: "2023",
    price: "$24,000",
    dimensions: "180 × 140 cm (71 × 55 in)",
    framing: "Floating oak frame included",
    edition: "Unique work",
    mood: ["figurative", "warm", "bold colour", "ritual"],
    story:
      "A remembered family gathering, painted from a single photograph and a great deal of invention. The ochre ground was laid first so every colour above it carries a little heat.",
    image: workAncestorsLight,
    tint: "bg-roseclay/20",
  },
  {
    id: "quiet-field",
    title: "Quiet Field",
    artist: "Marco Ito",
    medium: "Mixed media on board",
    year: "2025",
    price: "Inquire",
    dimensions: "90 × 90 cm (35 × 35 in)",
    framing: "Museum box frame, natural ash",
    edition: "Unique work",
    mood: ["minimal", "neutral", "meditative", "small space"],
    story:
      "Mineral pigment sanded back to the board in places. Ito describes it as a painting of attention rather than of a place — best hung where you pass it slowly.",
    image: workQuietField,
    tint: "bg-sage/25",
  },
  {
    id: "meridian",
    title: "Meridian",
    artist: "Lena Voss",
    medium: "Oil on panel",
    year: "2024",
    price: "$31,500",
    dimensions: "200 × 160 cm (79 × 63 in)",
    framing: "Unframed",
    edition: "Unique work",
    mood: ["abstract", "statement", "architectural", "large"],
    story:
      "The largest work in the current collection and the most structural — a single band of light cutting a field of graphite and bone. Made for a tall wall.",
    image: workMeridian,
    tint: "bg-mistblue/25",
  },
  {
    id: "the-gathering",
    title: "The Gathering",
    artist: "Adaeze Nwosu",
    medium: "Oil on canvas",
    year: "2025",
    price: "$27,800",
    dimensions: "160 × 200 cm (63 × 79 in)",
    framing: "Unframed",
    edition: "Unique work",
    mood: ["figurative", "narrative", "warm", "social"],
    story:
      "Silhouetted forms arranged like a chord. Nwosu painted it in one long month and left the underdrawing visible at the lower edge as a record of the first idea.",
    image: workTheGathering,
    tint: "bg-terracotta/15",
  },
  {
    id: "horizon-study-iv",
    title: "Horizon Study IV",
    artist: "Marco Ito",
    medium: "Gouache on paper",
    year: "2024",
    price: "$12,900",
    dimensions: "70 × 55 cm (28 × 22 in)",
    framing: "Glazed, white oak frame included",
    edition: "From a series of six studies",
    mood: ["minimal", "entry price", "quiet", "paper"],
    story:
      "The fourth of six studies made on consecutive mornings. The smallest and most affordable route into Ito's work, and the one collectors tend to live with longest.",
    image: workHorizonStudy,
    tint: "bg-sand/30",
  },
];

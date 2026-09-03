export interface ListingImage {
  src: string;
  alt: string;
}

export interface Listing {
  id: string;
  slug: string;
  status: "Active" | "Pending" | "Sold";
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet?: number;
  lotSizeSqft: number;
  yearBuilt?: number;
  mlsNumber: string;
  subdivision: string;
  hoaFee?: string;
  description: string;
  features: string[];
  heroImage: ListingImage;
  images: ListingImage[];
  listingAgent: {
    name: string;
    brokerage: string;
    phone: string;
  };
}

export const listings: Listing[] = [
  {
    id: "2507-glen-springs-way",
    slug: "2507-glen-springs-way-austin-tx",
    status: "Active",
    address: "2507 Glen Springs Way",
    city: "Austin",
    state: "TX",
    zip: "78741",
    price: 499900,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1416,
    lotSizeSqft: 7932,
    yearBuilt: 1965,
    mlsNumber: "5397672",
    subdivision: "Greenbriar Sec 01",
    description:
      "Perched above street level, 2507 Glen Springs Way pairs inviting 1960s ranch character with thoughtful updates for comfortable living today. The elevated front porch catches welcome morning and afternoon breezes, creating a peaceful place to begin or end the day. Inside, the three-bedroom, two-bath home offers two distinct living areas and a dining space conveniently located off the kitchen and open to the main living room. Cedar beams and a vaulted ceiling give the central gathering space warmth and dimension.",
    features: [
      "Large tree-shaded yard",
      "Perched above street level",
      "Back patio",
      "Two distinct living areas",
      "Adaptable bonus space",
      "Vaulted ceiling with cedar beams",
      "Vintage Austin charm",
      "Granite kitchen counters",
      "Attached garage",
    ],
    heroImage: {
      src: "/images/listing1/a6e6c2bca981d58d7aa9d72458d161f1-uncropped_scaled_within_1536_1152.webp",
      alt: "Front exterior of 2507 Glen Springs Way, a mid-century brick ranch home in Austin, Texas with a sloped roofline and landscaped front yard",
    },
    images: [
      {
        src: "/images/listing1/a6e6c2bca981d58d7aa9d72458d161f1-uncropped_scaled_within_1536_1152.webp",
        alt: "Front exterior of 2507 Glen Springs Way with brick facade and landscaped yard",
      },
      {
        src: "/images/listing1/0ca80c5500b4ba911a6254bc40a0008c-uncropped_scaled_within_1536_1152.webp",
        alt: "Entryway and living room with tile flooring and view down the front hallway",
      },
      {
        src: "/images/listing1/2ea8a6b413131eb2162928c4c18ff904-uncropped_scaled_within_1536_1152.webp",
        alt: "Living room with leather sofa, round mirror, and console table",
      },
      {
        src: "/images/listing1/474707882e7ae260ed7bc3d3ad7e9285-uncropped_scaled_within_1536_1152.webp",
        alt: "Kitchen with granite counters and dining nook beneath a vaulted, cedar-beamed ceiling",
      },
      {
        src: "/images/listing1/68d37cf97c541d0bbb85262af0d5ccf4-uncropped_scaled_within_1536_1152.webp",
        alt: "Living room with leather sofa and view toward the wood front door",
      },
      {
        src: "/images/listing1/755fdf541fcd3dac9c1e16ea68423bf9-uncropped_scaled_within_1536_1152.webp",
        alt: "Open kitchen and family room with breakfast nook and stainless appliances",
      },
      {
        src: "/images/listing1/6af813f93c478935c8463c99db04c5e9-uncropped_scaled_within_1536_1152.webp",
        alt: "Cozy bonus space beneath the roofline, styled as a reading nook with floor cushions",
      },
      {
        src: "/images/listing1/a6fb6d36c5de6f2b4200d2ab317e3be2-uncropped_scaled_within_1536_1152.webp",
        alt: "Second living area with vaulted, beamed ceiling and French doors leading to the backyard",
      },
      {
        src: "/images/listing1/663bdb138a45b7164ae5642f29e0607e-uncropped_scaled_within_1536_1152.webp",
        alt: "Back patio with seating area and French doors into the home",
      },
      {
        src: "/images/listing1/e5f5ce3d4d7f1cab3de47089198a44bb-uncropped_scaled_within_1536_1152.webp",
        alt: "Backyard with mature shade trees and wood privacy fencing",
      },
      {
        src: "/images/listing1/7a8d2533e28e7d28d7b012ba8ee1bc55-uncropped_scaled_within_1536_1152.webp",
        alt: "Bedroom with tile flooring and large window overlooking the front yard",
      },
      {
        src: "/images/listing1/848c46c2196661bfb1cbac5d7cc85fd7-uncropped_scaled_within_1536_1152.webp",
        alt: "Bedroom styled with a daybed and small desk, with a window view of the street",
      },
      {
        src: "/images/listing1/9ba8ad2cbc0037689032358f39842169-uncropped_scaled_within_1536_1152.webp",
        alt: "Primary bedroom with view to an en-suite bathroom and double closet",
      },
      {
        src: "/images/listing1/ade373ac8cc3c29291929af437abf02f-uncropped_scaled_within_1536_1152.webp",
        alt: "Bedroom with closet and gallery wall art",
      },
      {
        src: "/images/listing1/f02c5feab5c5c35273812f169b854ebf-uncropped_scaled_within_1536_1152.webp",
        alt: "Bedroom with iron bed frame, gallery wall, and windows on two walls",
      },
      {
        src: "/images/listing1/fa819ccc7268321447dff299e37e101c-uncropped_scaled_within_1536_1152.webp",
        alt: "Bedroom with iron bed frame, framed art prints, and upholstered chaise",
      },
      {
        src: "/images/listing1/7b5304c12ac276dbd0eb136ac6d9ef1f-uncropped_scaled_within_1536_1152.webp",
        alt: "Bathroom with tub-shower combination and tile surround",
      },
      {
        src: "/images/listing1/8cb0bd98f8585696dc94a8f2959a4217-uncropped_scaled_within_1536_1152.webp",
        alt: "Bathroom with dark vanity cabinet and framed mirror",
      },
    ],
    listingAgent: {
      name: "Laurel Seymour",
      brokerage: "Ashley Austin Homes",
      phone: "(512) 217-6103",
    },
  },
  {
    id: "6531-hunters-creek-ln",
    slug: "6531-hunters-creek-ln-baytown-tx",
    status: "Active",
    address: "6531 Hunters Creek Ln",
    city: "Baytown",
    state: "TX",
    zip: "77521",
    price: 274900,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2460,
    lotSizeSqft: 6181,
    yearBuilt: 2014,
    mlsNumber: "9124614",
    subdivision: "Hunters Crk Sec 2",
    hoaFee: "$550/year (Hunters Creek BT Homeowners Association)",
    description:
      "Why choose between the convenience of a one-story home and the flexibility of extra living space when you can have both? This thoughtfully designed \"1.5-story\" floor plan offers the best of both worlds, with everyday living centered on the main level and a private upstairs retreat perfect for whatever life calls for. The main floor features spacious bedrooms, plus a dedicated home office, and an open-concept living, kitchen, and dining area designed for effortless entertaining and comfortable everyday living. Upstairs, you'll find a generous bonus room with a full bathroom — ideal as a media room, game room, guest suite, home gym, or multigenerational living space. Large windows fill the home with natural light, while the versatile layout adapts to your lifestyle, whether you're working from home, hosting friends, or simply looking for room to spread out. Located in the desirable Hunters Creek/McGee Place area of Baytown, you'll enjoy convenient access to I-10 and Grand Parkway (SH 99) for an easy commute, as well as nearby shopping, dining, and everyday conveniences. Outdoor enthusiasts will appreciate being just minutes from Jenkins Park, Eddie V. Gray Wetlands Center, and Baytown Nature Center, while entertainment options like Pirates Bay Waterpark, San Jacinto Mall redevelopment, and local restaurants are all close by. The neighborhood is also served by Goose Creek CISD schools. Whether you're looking for the simplicity of one-story living or the flexibility of additional space without the maintenance of a full two-story home, 6531 Hunters Creek delivers a floor plan that's as functional as it is inviting.",
    features: [
      "Dedicated home office",
      "Private upstairs retreat / bonus room",
      "3-car attached garage",
      "Open-concept kitchen, living, and dining",
      "Primary bedroom on main level",
      "Granite counters throughout",
      "Covered front and rear porches",
      "Fenced back yard",
      "Goose Creek CISD schools",
    ],
    heroImage: {
      src: "/images/listing2/d515fc7e4defaaea9b88c2510fbf1097-uncropped_scaled_within_1536_1152.webp",
      alt: "Front exterior of 6531 Hunters Creek Ln in Baytown, Texas at dusk, stone-and-brick facade with a three-car garage",
    },
    images: [
      {
        src: "/images/listing2/d515fc7e4defaaea9b88c2510fbf1097-uncropped_scaled_within_1536_1152.webp",
        alt: "Front exterior at dusk with dramatic sky and three-car garage",
      },
      {
        src: "/images/listing2/8e2ea56b7a990447d882295d8d9424bc-uncropped_scaled_within_1536_1152.webp",
        alt: "Covered front entry with stone archway and seating area",
      },
      {
        src: "/images/listing2/a06e365648a0a1abec7e60774e3b243d-uncropped_scaled_within_1536_1152.webp",
        alt: "Daytime front exterior showing the stone-and-siding facade and driveway",
      },
      {
        src: "/images/listing2/5110930afd8f24c5e37ffc49ab56d0ec-uncropped_scaled_within_1536_1152.webp",
        alt: "Entry foyer with staircase and stained-glass front door",
      },
      {
        src: "/images/listing2/9e0b6e9e79196e0948c15c023b8fb5e3-uncropped_scaled_within_1536_1152.webp",
        alt: "Entry hallway with stained-glass front door and view into the home office",
      },
      {
        src: "/images/listing2/7f777c70982fe23e5f9b56f5c9562c45-uncropped_scaled_within_1536_1152.webp",
        alt: "Home office with French doors opening to the main living area",
      },
      {
        src: "/images/listing2/346ac30b20719d00c882684ca6c071fa-uncropped_scaled_within_1536_1152.webp",
        alt: "Living room with sectional sofa and view toward the entry and staircase",
      },
      {
        src: "/images/listing2/ec32e2f365f27d86157defb5b26d68ca-uncropped_scaled_within_1536_1152.webp",
        alt: "Open living area with hardwood and tile flooring and staircase to the upper level",
      },
      {
        src: "/images/listing2/0b9994fecf48a9ae2e218faed14fd0a6-uncropped_scaled_within_1536_1152.webp",
        alt: "Kitchen with dark cabinetry, stainless appliances, and a center island",
      },
      {
        src: "/images/listing2/22d6ac9fd01a3d0dd35b910a8a856e8b-uncropped_scaled_within_1536_1152.webp",
        alt: "Kitchen open to the family room through an archway",
      },
      {
        src: "/images/listing2/c8d3ba9e10c094eaab6a1833b14b01fc-uncropped_scaled_within_1536_1152.webp",
        alt: "Kitchen island with bar seating opening to a round dining table",
      },
      {
        src: "/images/listing2/a2620c21b7659e24676d9d2e62d5c6f8-uncropped_scaled_within_1536_1152.webp",
        alt: "Kitchen sink and island with potted plant, open to the living room",
      },
      {
        src: "/images/listing2/af89ee270e0469a0c8c7694aaf866c88-uncropped_scaled_within_1536_1152.webp",
        alt: "Breakfast nook with round table and windows on two walls",
      },
      {
        src: "/images/listing2/37b6c922f6a80d5faeb174fb91cc56ba-uncropped_scaled_within_1536_1152.webp",
        alt: "Primary bedroom with upholstered bed and access to the en-suite bathroom",
      },
      {
        src: "/images/listing2/8a880defca7e791a33b7fca8390793b7-uncropped_scaled_within_1536_1152.webp",
        alt: "Primary bathroom with dark double vanity, soaking tub, and glass shower enclosure",
      },
      {
        src: "/images/listing2/a667653666211344a32995b8ff5bc2f9-uncropped_scaled_within_1536_1152.webp",
        alt: "Walk-in closet with built-in shelving and hanging rods",
      },
      {
        src: "/images/listing2/17a9111dd5f37682fbbdc92a927c8335-uncropped_scaled_within_1536_1152.webp",
        alt: "Secondary bedroom with a desk and built-in shelving",
      },
      {
        src: "/images/listing2/5b9c0efe9061b4e96e6e8be5c6b46b77-uncropped_scaled_within_1536_1152.webp",
        alt: "Upstairs bonus room with sectional seating and large windows",
      },
    ],
    listingAgent: {
      name: "Laurel Seymour",
      brokerage: "Ashley Austin Homes",
      phone: "(512) 217-6103",
    },
  },
  {
    id: "1407-grand-ave",
    slug: "1407-grand-ave-big-wells-tx",
    status: "Active",
    address: "1407 Grand Ave",
    city: "Big Wells",
    state: "TX",
    zip: "78830",
    price: 47500,
    bedrooms: 0,
    bathrooms: 0,
    squareFeet: 1512,
    lotSizeSqft: 5000,
    mlsNumber: "2174934",
    subdivision: "Big Wells-Orig Town",
    description:
      "Unlock the potential of 1407 Grand Avenue in Big Wells, TX — a former restaurant brimming with possibilities. Situated on a high-traffic corner near South Commerce Street, this spacious commercial building features a generous dining area, full kitchen setup, and flexible layout ready for transformation. Whether you're looking to revive a local dining staple or reimagine the space entirely, this fixer-upper offers outstanding visibility and a strategic location ideal for a variety of business ventures. Bring your vision and breathe new life into this promising property!",
    features: [
      "High-traffic corner location",
      "Flexible layout",
      "Generous dining area",
      "Full kitchen setup",
      "Fixer-upper / investment opportunity",
      "Owner may carry financing",
    ],
    heroImage: {
      src: "/images/listing3/26f90bcd5f598b04a485adc3674f5eaf-uncropped_scaled_within_1536_1152.webp",
      alt: "Exterior of the former Gonzalez Restaurant building at 1407 Grand Ave in Big Wells, Texas, with orange and yellow siding",
    },
    images: [
      {
        src: "/images/listing3/26f90bcd5f598b04a485adc3674f5eaf-uncropped_scaled_within_1536_1152.webp",
        alt: "Exterior of the building with orange and yellow siding and a Gonzalez Restaurant sign",
      },
      {
        src: "/images/listing3/0088d8c5fd30c7518ff64d6b52ef4a25-uncropped_scaled_within_1536_1152.webp",
        alt: "Former dining room with orange walls, wood flooring, and the front entrance door",
      },
      {
        src: "/images/listing3/016150d4268e6fdf05b6b3c4028ae3cb-uncropped_scaled_within_1536_1152.webp",
        alt: "Dining area with built-in booth seating and a ceiling fan",
      },
      {
        src: "/images/listing3/35654748f86c9a7310241ea35c0e69a3-uncropped_scaled_within_1536_1152.webp",
        alt: "Kitchen hallway with a pass-through window, hanging pots, and a stove at the back",
      },
      {
        src: "/images/listing3/5f8335d9fbd7e728d0accf7a5e46ed97-uncropped_scaled_within_1536_1152.webp",
        alt: "Kitchen shelving with dishware, hanging pots and pans, and a sink",
      },
      {
        src: "/images/listing3/756b78a0d6a1eb68854da402736cba72-uncropped_scaled_within_1536_1152.webp",
        alt: "Former service counter with a pass-through window and built-in wood shelving",
      },
      {
        src: "/images/listing3/b22bd40de9daa7346db43c6107d2a37b-uncropped_scaled_within_1536_1152.webp",
        alt: "Kitchen with a long stainless prep table and gas stove",
      },
      {
        src: "/images/listing3/ea00ad869f5b38668d10614b6575adc5-uncropped_scaled_within_1536_1152.webp",
        alt: "Back storage area with a refrigerator, shelving, and stacked chairs",
      },
    ],
    listingAgent: {
      name: "Laurel Seymour",
      brokerage: "Ashley Austin Homes",
      phone: "(512) 217-6103",
    },
  },
  {
    id: "116-fairbanks-ave",
    slug: "116-fairbanks-ave-san-antonio-tx",
    status: "Active",
    address: "116 Fairbanks Ave",
    city: "San Antonio",
    state: "TX",
    zip: "78210",
    price: 39000,
    bedrooms: 0,
    bathrooms: 0,
    lotSizeSqft: 8150,
    mlsNumber: "1534415",
    subdivision: "Ncb 2975",
    description:
      "Build your dream home or investment property on this vacant lot in a well-established neighborhood! The previous structure has been removed, and the lot is ready for redevelopment. Utilities were previously connected — buyer to verify. Conveniently located near downtown San Antonio with easy access to major highways. Owner financing available — see attachments for details!",
    features: [
      "Vacant lot, previous structure removed",
      "Ready for redevelopment",
      "Utilities previously connected (buyer to verify)",
      "Near downtown San Antonio",
      "Easy access to major highways",
      "Owner financing available",
    ],
    heroImage: {
      src: "/images/listing4/0934e4881eab36f85cf3f139b095275d-uncropped_scaled_within_1536_1152.webp",
      alt: "Vacant, cleared lot at 116 Fairbanks Ave in San Antonio, Texas, with neighboring homes visible",
    },
    images: [
      {
        src: "/images/listing4/0934e4881eab36f85cf3f139b095275d-uncropped_scaled_within_1536_1152.webp",
        alt: "Vacant, cleared lot with neighboring homes and mature trees",
      },
      {
        src: "/images/listing4/c031aafbafae528196ae2afd2281e037-uncropped_scaled_within_1536_1152.webp",
        alt: "Street view of the vacant lot and surrounding neighborhood",
      },
    ],
    listingAgent: {
      name: "Laurel Seymour",
      brokerage: "Ashley Austin Homes",
      phone: "(512) 217-6103",
    },
  },
  {
    id: "6402-ponca-st",
    slug: "6402-ponca-st-austin-tx",
    status: "Active",
    address: "6402 Ponca St",
    city: "Austin",
    state: "TX",
    zip: "78741",
    price: 160000,
    bedrooms: 0,
    bathrooms: 0,
    lotSizeSqft: 5575,
    mlsNumber: "1045342",
    subdivision: "Cuellar Susie & Martin Subd",
    description:
      "Opportunity awaits in East Austin! This cleared and level lot offers a prime location for your custom single-family home. Situated on a quiet street just minutes from downtown, this is a great chance to build new in a rapidly appreciating area. Previous structure has been removed, and the lot is ready for your vision. Survey available.",
    features: [
      "Quiet street in East Austin",
      "Cleared and level lot",
      "Minutes from downtown Austin",
      "Previous structure removed",
      "Survey available",
      "Corner lot",
    ],
    heroImage: {
      src: "/images/listing5/14877c7570067aeb5555cd07a9137406-uncropped_scaled_within_1536_1152.webp",
      alt: "Cleared vacant lot at 6402 Ponca St in East Austin, Texas, with a neighboring red house",
    },
    images: [
      {
        src: "/images/listing5/14877c7570067aeb5555cd07a9137406-uncropped_scaled_within_1536_1152.webp",
        alt: "Street-level view of the cleared lot with a neighboring red house",
      },
      {
        src: "/images/listing5/e06060b381287e05421f853bdc08f0a0-uncropped_scaled_within_1536_1152.webp",
        alt: "Street-level view of the lot and sidewalk from the opposite angle",
      },
      {
        src: "/images/listing5/5277d148bfce890cb5d5dfefdf9c3357-uncropped_scaled_within_1536_1152.webp",
        alt: "Aerial view with the lot boundary outlined, downtown Austin skyline in the distance",
      },
      {
        src: "/images/listing5/6e844b2c965218e9ccf0932c0b79532f-uncropped_scaled_within_1536_1152.webp",
        alt: "Aerial view of the surrounding East Austin neighborhood",
      },
      {
        src: "/images/listing5/888659651f525c38afce69ab8cc912b9-uncropped_scaled_within_1536_1152.webp",
        alt: "Aerial view showing nearby streets and commercial buildings",
      },
      {
        src: "/images/listing5/94ad84ab01335c658d21829191b4cafa-uncropped_scaled_within_1536_1152.webp",
        alt: "Aerial view of the neighborhood with the Austin skyline visible in the distance",
      },
      {
        src: "/images/listing5/9abb434de311e4137da16d1248f7ced3-uncropped_scaled_within_1536_1152.webp",
        alt: "Aerial view of the neighborhood streets with downtown Austin in the background",
      },
      {
        src: "/images/listing5/ba92fc2ffa90e0758c5c02b3099faa35-uncropped_scaled_within_1536_1152.webp",
        alt: "Aerial view looking toward the Austin skyline and surrounding tree canopy",
      },
      {
        src: "/images/listing5/debd2784b696fafeae190c13587d8e02-uncropped_scaled_within_1536_1152.webp",
        alt: "Aerial view of the neighborhood with downtown Austin skyline in view",
      },
    ],
    listingAgent: {
      name: "Laurel Seymour",
      brokerage: "Ashley Austin Homes",
      phone: "(512) 217-6103",
    },
  },
];

export function getAllListings(): Listing[] {
  return listings;
}

export function getListingBySlug(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug);
}

export function formatPrice(price: number): string {
  return `$${price.toLocaleString("en-US")}`;
}

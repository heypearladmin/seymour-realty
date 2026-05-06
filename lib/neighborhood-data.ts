export interface Neighborhood {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  lifestyleAngle: string;
  image: string;
  imageAlt: string;
  overview: string;
  lifestyle: string;
  realEstateStyle: string;
  attractions: string[];
  whyPeopleMove: string;
  architecture: string;
  walkability: string;
  schools: string;
  communityVibe: string;
}

export const neighborhoods: Neighborhood[] = [
  {
    slug: "tarrytown",
    name: "Tarrytown",
    tagline: "Old Austin elegance, quietly held.",
    shortDescription:
      "A storied West Austin enclave where mature oaks, architectural pedigree, and proximity to downtown create a rare kind of timeless living.",
    lifestyleAngle: "Established, private, architecturally distinguished.",
    image:
      "/images/neighborhood-tarrytown.jpg",
    imageAlt: "Stately Tarrytown home framed by mature oak trees",
    overview:
      "Tarrytown is one of Austin's most established neighborhoods, located just west of downtown along the shores of Lake Austin. Generations of Austinites have called it home, and that continuity gives the area a quiet confidence rarely found in newer parts of the city.",
    lifestyle:
      "Daily life here moves at a thoughtful pace. Mornings on the lake, afternoons under canopied streets, dinners at neighborhood institutions. The lifestyle is residential first, urban second — close enough to downtown to be in it, far enough to step away from it.",
    realEstateStyle:
      "Tarrytown homes range from preserved mid-century estates to contemporary luxury rebuilds. Land matters here. Lot size, mature trees, and architectural character drive long-term value as much as square footage.",
    attractions: [
      "Lake Austin frontage and waterfront access",
      "Reed Park and Pease Park trails",
      "Mayfield Park and Preserve",
      "Howson Branch greenbelt",
      "Walking distance to MoPac and downtown",
    ],
    whyPeopleMove:
      "Buyers come to Tarrytown for permanence. They are looking for an address that holds its identity over decades, schools that are already established, and a neighborhood feel that does not change with each market cycle.",
    architecture:
      "Expect a thoughtful mix of original 1930s–1960s homes, classic Austin Tudor and Colonial revivals, and meticulously executed modern rebuilds. Tear-downs are common, but design review and the neighborhood's culture of restraint shape what gets built.",
    walkability:
      "Highly walkable along the central spine of Exposition and the streets near Casis Elementary. Lake-adjacent streets are quieter and more residential, designed for strolling rather than commuting.",
    schools:
      "Tarrytown is anchored by Casis Elementary, O. Henry Middle School, and Austin High School — a rare combination of strong public schools that has helped sustain demand here for generations.",
    communityVibe:
      "Established, multi-generational, and quietly social. Tarrytown is the kind of neighborhood where people know their neighbors but value privacy in equal measure.",
  },
  {
    slug: "westlake",
    name: "Westlake",
    tagline: "Hill Country views, world-class schools.",
    shortDescription:
      "Just minutes from downtown, Westlake offers privacy, elevation, and a school district that consistently ranks among the best in Texas.",
    lifestyleAngle: "Family-anchored, view-driven, prestige residential.",
    image:
      "/images/neighborhood-westlake.jpg",
    imageAlt: "Hill Country home with sweeping views in the Westlake area",
    overview:
      "Westlake sits on the rolling terrain west of MoPac and Loop 360, where Hill Country topography produces some of the most dramatic residential settings in central Texas. The lifestyle here is shaped by elevation, view corridors, and a long-standing reputation for excellent schools.",
    lifestyle:
      "Westlake life is family-anchored. Mornings begin with school drop-off, weekends with hike-and-bike trails, and evenings with the kind of sunset views that turn ordinary terraces into reasons people never leave.",
    realEstateStyle:
      "Architecture leans contemporary and contemporary-traditional, with significant variation in lot size, view corridor, and privacy. Premiums are paid for elevation, mature trees, and unobstructed Hill Country views.",
    attractions: [
      "Eanes ISD schools",
      "Barton Creek Greenbelt access points",
      "Wild Basin Wilderness Preserve",
      "Westbank shopping and dining",
      "Quick access to downtown and the lake",
    ],
    whyPeopleMove:
      "Westlake attracts families prioritizing top-tier schools, larger lots, and a sense of separation from the city's noise without losing access to it. The school district alone drives a meaningful portion of buyer demand.",
    architecture:
      "Hillside contemporary homes, transitional Texas modern, and well-preserved classics. Indoor-outdoor living is a defining theme — large windows, cantilevered terraces, and pool placements designed around the view.",
    walkability:
      "More car-oriented than central Austin, with walkability concentrated within specific developments. The trade-off is space, privacy, and access to surrounding nature.",
    schools:
      "Eanes ISD is one of the most consistently top-rated districts in Texas. Westlake High School in particular has long-standing recognition for academics, athletics, and college placement.",
    communityVibe:
      "Settled, family-focused, and quietly upscale. Community life is organized around schools, sports, and the natural landscape that surrounds it.",
  },
  {
    slug: "barton-hills",
    name: "Barton Hills",
    tagline: "Greenbelt living, walkable culture.",
    shortDescription:
      "Tucked between Zilker Park and the Barton Creek Greenbelt, this neighborhood offers a rare combination of nature, walkability, and central location.",
    lifestyleAngle: "Outdoor-first, central, creative-professional.",
    image:
      "/images/neighborhood-barton-hills.jpg",
    imageAlt: "Sunlit Barton Hills street near the greenbelt",
    overview:
      "Barton Hills sits at the meeting point of urban Austin and the natural landscape that defines the city. With Zilker Park to the north, Barton Creek to the south, and downtown just over the bridge, it has become one of Austin's most beloved walkable neighborhoods.",
    lifestyle:
      "Daily life here revolves around water, trails, and proximity. Morning runs at Lady Bird Lake, afternoons at Barton Springs, evenings at neighborhood restaurants you can walk to. The pace is active but unhurried.",
    realEstateStyle:
      "A thoughtful mix of original 1950s–1960s ranch homes and tasteful modern rebuilds. Lot size and tree canopy carry significant value, and design that respects the neighborhood's character tends to outperform.",
    attractions: [
      "Barton Creek Greenbelt",
      "Zilker Park and Barton Springs Pool",
      "Lady Bird Lake and the Butler Hike-and-Bike Trail",
      "South Lamar dining corridor",
      "ACL Live and the Long Center",
    ],
    whyPeopleMove:
      "Buyers come for the combination of nature and centrality. There are very few neighborhoods in any major city that offer trail access, swimmable creek water, and a 10-minute drive to downtown all at once.",
    architecture:
      "Mid-century ranch homes alongside Texas modern rebuilds. The strongest projects respect scale, trees, and the relationship between the home and the greenbelt.",
    walkability:
      "Strong walkability, especially toward Zilker, Barton Springs, and South Lamar. Cyclists and runners use neighborhood streets as part of their daily routine.",
    schools:
      "Anchored by Barton Hills Elementary, with O. Henry Middle School and Austin High serving the surrounding area. Strong neighborhood school identity.",
    communityVibe:
      "Outdoor-oriented, creative-professional, and tightly knit. People here tend to know their neighbors and care about preserving what makes the area unique.",
  },
  {
    slug: "south-congress",
    name: "South Congress",
    tagline: "Walkable culture, distinctly Austin.",
    shortDescription:
      "Boutiques, restaurants, music, and skyline views. South Congress is the corridor that captured Austin's identity and turned it into a destination.",
    lifestyleAngle: "Urban, cultural, design-conscious.",
    image:
      "/images/neighborhood-south-congress.jpg",
    imageAlt: "South Congress Avenue with restaurants and the Austin skyline",
    overview:
      "South Congress — SoCo to most — is Austin's most recognizable lifestyle corridor. What began as a bohemian stretch of vintage shops has matured into a layered, design-driven neighborhood that still preserves its independent character.",
    lifestyle:
      "Life on South Congress is urban and walkable. Coffee at one of a dozen neighborhood cafes, slow walks past local boutiques, dinners at restaurants with skyline views. The neighborhood rewards people who love being in the middle of things.",
    realEstateStyle:
      "An evolving mix of restored bungalows, contemporary infill, and architecturally distinct condos. Walkability and proximity to the corridor itself often outweigh raw square footage in the valuation.",
    attractions: [
      "South Congress shopping and dining",
      "The Continental Club and historic music venues",
      "Lady Bird Lake and the South Shore trails",
      "Skyline views from the Congress Bridge",
      "Easy access to downtown",
    ],
    whyPeopleMove:
      "Buyers come for culture, walkability, and identity. SoCo is the address for people who want a daily life that feels like Austin — not a version of it imported from somewhere else.",
    architecture:
      "Restored 1920s–1940s bungalows, modern infill homes, and a growing mix of architecturally distinct multifamily. Preservation matters here, and projects that respect the streetscape tend to perform best.",
    walkability:
      "Among the most walkable neighborhoods in Austin. Most daily needs — coffee, groceries, restaurants, parks — are within a short walk.",
    schools:
      "Served by AISD, with several local elementary options. Many SoCo households are professionals, creatives, and pre-family or post-family residents drawn primarily by lifestyle.",
    communityVibe:
      "Creative, design-conscious, and culturally engaged. The neighborhood attracts people who care about local independent businesses and protecting Austin's character.",
  },
  {
    slug: "east-austin",
    name: "East Austin",
    tagline: "Modern Austin, in motion.",
    shortDescription:
      "Food, design, modern architecture, and creative energy. East Austin is where the city's next chapter is being written, block by block.",
    lifestyleAngle: "Modern, creative, food-and-design-driven.",
    image:
      "/images/neighborhood-east-austin.jpg",
    imageAlt: "Modern East Austin street with contemporary infill homes",
    overview:
      "East Austin is one of the city's most layered neighborhoods, holding decades of cultural history alongside one of the most active modern development scenes in Texas. The result is a neighborhood that feels in motion in a way few others do.",
    lifestyle:
      "Daily life here is shaped by independent restaurants, coffee shops, design studios, and a rotating calendar of pop-ups and openings. The pace is creative and social, with strong neighborhood identity at the block level.",
    realEstateStyle:
      "A mix of restored historic homes, contemporary infill, and architecturally ambitious modern builds. Design quality varies widely — strong architectural execution is one of the most reliable drivers of long-term value here.",
    attractions: [
      "East 6th Street and East Cesar Chavez dining",
      "Independent coffee, retail, and galleries",
      "Lady Bird Lake east-side trails",
      "Quick access to downtown",
      "Some of Austin's most active food and design scenes",
    ],
    whyPeopleMove:
      "Buyers come to East Austin for energy and architecture. It is the part of the city most associated with what Austin is becoming, and it draws creatives, founders, and professionals who want to be near that.",
    architecture:
      "Bungalows, restored historic cottages, and contemporary modern infill. The strongest projects engage thoughtfully with the existing fabric rather than overpowering it.",
    walkability:
      "Strong in pockets, especially along East 6th, East Cesar Chavez, and Manor Road. The neighborhood is generally bike-friendly and increasingly walkable as infill matures.",
    schools:
      "Served by AISD with a mix of neighborhood schools, magnets, and charter options. Many East Austin households are pre-family professionals, but family populations are growing.",
    communityVibe:
      "Creative, modern, and culturally engaged. The neighborhood attracts people who value design, independence, and the next chapter of Austin's identity.",
  },
  {
    slug: "zilker",
    name: "Zilker",
    tagline: "Park-side living, central in every direction.",
    shortDescription:
      "A central neighborhood organized around one of Austin's most beloved parks, with quiet streets, mature trees, and easy access to everything.",
    lifestyleAngle: "Central, park-oriented, family-friendly.",
    image:
      "/images/neighborhood-zilker.jpg",
    imageAlt: "Quiet residential street near Zilker Park in Austin",
    overview:
      "Zilker is one of the few central Austin neighborhoods that feels both connected and quiet. Anchored by the park itself, surrounded by Lady Bird Lake, Barton Creek, and South Lamar, it offers a kind of central living that does not require trading away green space or calm.",
    lifestyle:
      "Mornings at the park, afternoons at the springs, evenings at neighborhood restaurants. Zilker's lifestyle is unusually balanced — it has the centrality of an urban neighborhood with the calm of a residential one.",
    realEstateStyle:
      "Mostly single-family with a thoughtful mix of original ranch homes and modern rebuilds. Tree canopy, lot size, and proximity to the park drive long-term value.",
    attractions: [
      "Zilker Metropolitan Park",
      "Barton Springs Pool",
      "Lady Bird Lake trails",
      "South Lamar dining and shopping",
      "ACL Festival and year-round park events",
    ],
    whyPeopleMove:
      "Buyers move to Zilker for the rare combination of central location and green calm. It works for families who want walkable park access and for professionals who want a quick commute without losing the neighborhood feel.",
    architecture:
      "Ranch and mid-century homes alongside contemporary infill. The strongest rebuilds preserve trees, scale carefully, and sit comfortably within the existing block.",
    walkability:
      "Strong walkability toward the park, the lake, and South Lamar. Many residents structure their daily routines around walking or biking.",
    schools:
      "Served by AISD, with strong neighborhood school identity and easy access to private school options across central Austin.",
    communityVibe:
      "Calm, central, and family-friendly. The neighborhood attracts people who want to be close to everything without feeling like they are in the middle of it.",
  },
];

export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}

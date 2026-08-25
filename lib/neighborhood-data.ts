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
  schoolEnrollment: string;
  communityVibe: string;
  medianPriceRange: string;
  pricePerSqft: string;
  marketTrend: string;
  relatedBlogSlugs: string[];
  // Optional slug into lib/lead-magnets.ts — renders a gated PDF download CTA
  leadMagnet?: string;
}

export const neighborhoods: Neighborhood[] = [
  {
    slug: "tarrytown",
    name: "Tarrytown",
    tagline: "Old Austin elegance, held with intention.",
    shortDescription:
      "A storied West Austin enclave where mature oaks, architectural pedigree, and proximity to downtown create a rare kind of timeless living.",
    lifestyleAngle: "Established, private, architecturally distinguished.",
    image: "/images/neighborhood-tarrytown.jpg",
    imageAlt: "Stately Tarrytown home framed by mature oak trees",
    overview:
      "Tarrytown is one of Austin's most established neighborhoods, located just west of downtown along the shores of Lake Austin. Generations of Austinites have called it home, and that continuity gives the area a grounded confidence rarely found in newer parts of the city.",
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
      "Highly walkable along the central spine of Exposition and the streets near Casis Elementary. Lake-adjacent streets are more residential, designed for strolling rather than commuting.",
    schools:
      "Tarrytown is anchored by Casis Elementary, O. Henry Middle School, and Austin High School — a rare combination of strong public schools that has helped sustain demand here for generations.",
    schoolEnrollment:
      "Casis Elementary (~450 students, AISD), O. Henry Middle School (~800 students), Austin High School (~2,200 students). Casis consistently ranks among AISD's most sought-after elementary zones, with school assignment directly impacting home values block by block.",
    communityVibe:
      "Established, multi-generational, and engaged. Tarrytown is the kind of neighborhood where people know their neighbors and value privacy in equal measure.",
    medianPriceRange: "$1.9M – $4.5M",
    pricePerSqft: "$700 – $1,100 / sqft",
    marketTrend:
      "Tarrytown has held value better than most Austin markets through recent cycles. Inventory remains very low, and well-maintained original homes and architect-designed rebuilds both attract competitive interest. Lot premiums for mature trees and lake proximity remain significant.",
    relatedBlogSlugs: [
      "tarrytown-austin-neighborhood-guide",
      "austin-school-districts-homebuyers-guide",
      "what-makes-austin-home-easier-to-resell",
    ],
    leadMagnet: "neighborhood-tarrytown",
  },
  {
    slug: "westlake",
    name: "Westlake",
    tagline: "Hill Country views, world-class schools.",
    shortDescription:
      "Just minutes from downtown, Westlake offers privacy, elevation, and a school district that consistently ranks among the best in Texas.",
    lifestyleAngle: "Family-anchored, view-driven, prestige residential.",
    image: "/images/neighborhood-westlake.jpg",
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
    schoolEnrollment:
      "Eanes ISD serves approximately 7,500 students across 8 campuses. Westlake High School (~2,700 students) ranks among the top public high schools in Texas. Elementary assignments vary by address — Bridge Point, Cedar Creek, Eanes, Forest Trail, and Valley View are the primary elementary feeders. Verify the specific campus assignment before purchasing.",
    communityVibe:
      "Settled, family-focused, and considered. Community life is organized around schools, sports, and the natural landscape that surrounds it.",
    medianPriceRange: "$1.6M – $5M+",
    pricePerSqft: "$580 – $950 / sqft",
    marketTrend:
      "Eanes ISD zoning continues to insulate Westlake from broader Austin softening. Demand from corporate relocators and California buyers prioritizing top public schools has kept absorption rates healthy. View-lot premiums remain strong; homes without meaningful outdoor space face longer market times.",
    relatedBlogSlugs: [
      "westlake-hills-rollingwood-neighborhood-guide",
      "austin-school-districts-homebuyers-guide",
      "austin-property-taxes-what-buyers-need-to-know",
    ],
    leadMagnet: "neighborhood-westlake-rollingwood",
  },
  {
    slug: "barton-hills",
    name: "Barton Hills",
    tagline: "Greenbelt living, walkable culture.",
    shortDescription:
      "Tucked between Zilker Park and the Barton Creek Greenbelt, this neighborhood offers a rare combination of nature, walkability, and central location.",
    lifestyleAngle: "Outdoor-first, central, creative-professional.",
    image: "/images/neighborhood-barton-hills.jpg",
    imageAlt: "Sunlit Barton Hills street near the greenbelt",
    overview:
      "Barton Hills sits at the meeting point of urban Austin and the natural landscape that defines the city. With Zilker Park to the north, Barton Creek to the south, and downtown just over the bridge, it has become one of Austin's most beloved walkable neighborhoods.",
    lifestyle:
      "Daily life here revolves around water, trails, and proximity. Morning runs at Lady Bird Lake, afternoons at Barton Springs, evenings at neighborhood restaurants you can walk to. The pace is active and intentional.",
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
    schoolEnrollment:
      "Barton Hills Elementary (~380 students, AISD) consistently draws high parent engagement and strong test scores relative to the broader AISD average. Feeds into O. Henry Middle (~800 students) and Austin High (~2,200 students). School zone assignment is block-specific — confirm before making an offer.",
    communityVibe:
      "Outdoor-oriented, creative-professional, and tightly knit. People here tend to know their neighbors and care about preserving what makes the area unique.",
    medianPriceRange: "$1.1M – $2.6M",
    pricePerSqft: "$530 – $880 / sqft",
    marketTrend:
      "Greenbelt-adjacent lots and homes with direct trail access command meaningful premiums over the Barton Hills average. Move-in-ready inventory moves quickly; homes requiring significant work sit longer. Buyer profile skews professional and family-oriented with strong interest in outdoor access.",
    relatedBlogSlugs: [
      "austin-flood-zones-homebuyers-guide",
      "austin-natives-guide-78704",
      "austin-school-districts-homebuyers-guide",
    ],
  },
  {
    slug: "south-congress",
    name: "South Congress",
    tagline: "Walkable culture, distinctly Austin.",
    shortDescription:
      "Boutiques, restaurants, music, and skyline views. South Congress is the corridor that captured Austin's identity and turned it into a destination.",
    lifestyleAngle: "Urban, cultural, design-conscious.",
    image: "/images/neighborhood-south-congress.jpg",
    imageAlt:
      "South Congress Avenue with restaurants and the Austin skyline in the distance",
    overview:
      "South Congress — SoCo to most — is Austin's most recognizable lifestyle corridor. What began as a stretch of vintage shops has matured into a layered, design-driven neighborhood that still preserves its independent character.",
    lifestyle:
      "Life on South Congress is urban and walkable. Coffee at one of a dozen neighborhood cafes, walks past local boutiques, dinners at restaurants with skyline views. The neighborhood rewards people who love being in the middle of things.",
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
    schoolEnrollment:
      "AISD serves the South Congress area with Travis Heights Elementary, Becker Elementary, and Fulmore Middle School among the primary options. The buyer profile here skews toward professionals and smaller households for whom school zone is secondary to lifestyle and walkability.",
    communityVibe:
      "Creative, design-conscious, and culturally engaged. The neighborhood attracts people who care about local independent businesses and protecting Austin's character.",
    medianPriceRange: "$750K – $1.7M",
    pricePerSqft: "$480 – $780 / sqft",
    marketTrend:
      "SoCo remains one of Austin's most liquid markets for well-executed bungalow restorations and architecturally distinct condos. Proximity to the retail and dining corridor is the primary value driver — homes a few blocks off Congress price noticeably lower. Investor interest in short-term rental-eligible properties has moderated since city STR ordinance changes.",
    relatedBlogSlugs: [
      "austin-micro-markets-explained",
      "best-neighborhoods-in-austin-by-lifestyle",
      "austin-short-term-rental-investing-airbnb-guide",
    ],
  },
  {
    slug: "east-austin",
    name: "East Austin",
    tagline: "Modern Austin, in motion.",
    shortDescription:
      "Food, design, modern architecture, and creative energy. East Austin is where the city's next chapter is being written, block by block.",
    lifestyleAngle: "Modern, creative, food-and-design-driven.",
    image: "/images/neighborhood-east-austin.jpg",
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
    schoolEnrollment:
      "Primary AISD schools serving East Austin include Metz Elementary, Govalle Elementary, and several magnet options through AISD's choice program. Growing family population is increasing demand for school zone clarity — verify specific campus assignment at the address level before purchasing.",
    communityVibe:
      "Creative, modern, and culturally engaged. The neighborhood attracts people who value design, independence, and the next chapter of Austin's identity.",
    medianPriceRange: "$600K – $1.4M",
    pricePerSqft: "$430 – $720 / sqft",
    marketTrend:
      "East Austin remains the most architecturally active part of the city, with design-forward infill delivering the strongest returns. The market has moderated from its 2022 peak but contemporary builds with strong curb appeal continue to move well. ADU-eligible lots command meaningful premiums as investors and owner-occupants increasingly factor rental income into purchase math.",
    relatedBlogSlugs: [
      "east-austin-neighborhood-guide",
      "austin-adu-guide-homeowners-buyers-2026",
      "austin-micro-markets-explained",
    ],
    leadMagnet: "neighborhood-east-austin",
  },
  {
    slug: "zilker",
    name: "Zilker",
    tagline: "Park-side living, central in every direction.",
    shortDescription:
      "A central neighborhood organized around one of Austin's most beloved parks, with residential streets, mature trees, and easy access to everything.",
    lifestyleAngle: "Central, park-oriented, family-friendly.",
    image: "/images/neighborhood-zilker.jpg",
    imageAlt: "Residential street near Zilker Park in Austin",
    overview:
      "Zilker is one of the few central Austin neighborhoods that feels both connected and grounded. Anchored by the park itself, surrounded by Lady Bird Lake, Barton Creek, and South Lamar, it offers a kind of central living that does not require trading away green space.",
    lifestyle:
      "Mornings at the park, afternoons at the springs, evenings at neighborhood restaurants. Zilker's lifestyle is unusually balanced — it has the centrality of an urban neighborhood with the residential feel of one a few miles out.",
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
      "Buyers move to Zilker for the rare combination of central location and green space. It works for families who want walkable park access and for professionals who want a quick commute without losing the neighborhood feel.",
    architecture:
      "Ranch and mid-century homes alongside contemporary infill. The strongest rebuilds preserve trees, scale carefully, and sit comfortably within the existing block.",
    walkability:
      "Strong walkability toward the park, the lake, and South Lamar. Many residents structure their daily routines around walking or biking.",
    schools:
      "Served by AISD, with strong neighborhood school identity and easy access to private school options across central Austin.",
    schoolEnrollment:
      "Zilker Elementary (~450 students, AISD) anchors the school identity for the neighborhood and is consistently well-regarded within AISD. Feeds into O. Henry Middle School and Austin High. Several private school options are within a short drive, including St. Andrew's Episcopal and St. Michael's.",
    communityVibe:
      "Central, family-friendly, and engaged. The neighborhood attracts people who want to be close to everything without feeling like they are in the middle of it.",
    medianPriceRange: "$1.0M – $2.2M",
    pricePerSqft: "$520 – $840 / sqft",
    marketTrend:
      "Park-adjacent homes in Zilker trade at a consistent premium over the broader 78704 market. Inventory is limited — the neighborhood is fully built out with minimal new development — so moves tend to be selective and deliberate. The ACL Festival window temporarily suppresses showings but does not impact pricing.",
    relatedBlogSlugs: [
      "austin-flood-zones-homebuyers-guide",
      "austin-natives-guide-78704",
      "austin-home-buying-process-search-to-close",
    ],
  },
  {
    slug: "bouldin",
    name: "Bouldin",
    tagline: "South of the river, in the middle of it all.",
    shortDescription:
      "A central south-side neighborhood that sits between South Congress, South First, and Lady Bird Lake — walkable, architecturally interesting, and unmistakably Austin.",
    lifestyleAngle: "Central south, walkable, culturally engaged.",
    image: "/images/town-lake-lifestyle-authentic.jpg",
    imageAlt:
      "Bouldin Creek area near Lady Bird Lake with the downtown Austin skyline in the background",
    overview:
      "Bouldin sits directly across the river from downtown, bordered by South Congress, South First, and Lady Bird Lake. Its compact size and central position have made it one of Austin's most consistently desirable inner-loop neighborhoods.",
    lifestyle:
      "Bouldin is a walking and biking neighborhood. Lady Bird Lake trails sit at the north edge, the South First and South Congress corridors at the east and west, and downtown is a short walk over the bridge.",
    realEstateStyle:
      "Restored bungalows, architecturally considered modern infill, and a smaller pocket of new contemporary builds. Lot size is constrained, so design quality and walkable proximity drive long-term value.",
    attractions: [
      "Lady Bird Lake and the Butler Hike-and-Bike Trail",
      "South First and South Congress corridors",
      "Bouldin Creek Cafe and neighborhood restaurants",
      "Long Center and Auditorium Shores",
      "Walking-distance downtown access",
    ],
    whyPeopleMove:
      "Buyers come to Bouldin for inner-loop walkability without giving up neighborhood feel. It works for professionals, creatives, and small families who want to be central while still living on a tree-lined block.",
    architecture:
      "Restored 1920s–1940s bungalows alongside contemporary infill. The strongest projects respect scale and the rhythm of the streetscape.",
    walkability:
      "Highly walkable. Most daily needs — coffee, restaurants, the lake — are within a short walk or bike ride.",
    schools:
      "Served by AISD with several elementary options. Many Bouldin households are professionals and pre-family or small-family residents drawn primarily by lifestyle and location.",
    schoolEnrollment:
      "Bouldin is served by Becker Elementary and Travis Heights Elementary (~350–400 students each, AISD), with Fulmore Middle School and Travis High as the secondary feeders. The buyer mix skews heavily toward lifestyle-first purchasers for whom school zone is secondary to centrality and walkability.",
    communityVibe:
      "Central, design-aware, and unmistakably Austin. The neighborhood attracts people who want to be in the middle of the city without losing their block.",
    medianPriceRange: "$850K – $1.9M",
    pricePerSqft: "$490 – $790 / sqft",
    marketTrend:
      "Bouldin is one of Austin's most consistently competitive inner-loop markets. Well-restored bungalows on tree-lined blocks attract multiple offers; larger contemporary infill on busy streets faces more negotiation. Inner-loop walkability remains the neighborhood's most durable value driver.",
    relatedBlogSlugs: [
      "austin-natives-guide-78704",
      "austin-micro-markets-explained",
      "best-neighborhoods-in-austin-by-lifestyle",
    ],
  },
  {
    slug: "clarksville",
    name: "Clarksville",
    tagline: "Historic, walkable, just west of downtown.",
    shortDescription:
      "One of Austin's oldest historic neighborhoods — small in footprint, deep in character, and walking distance to downtown, MoPac, and Lady Bird Lake.",
    lifestyleAngle: "Historic, walkable, professional-residential.",
    image: "/images/austin-neighborhood-lifestyle-authentic.jpg",
    imageAlt:
      "A walkable, tree-lined Clarksville-style block in central Austin",
    overview:
      "Clarksville is one of Austin's oldest neighborhoods, just west of downtown and immediately south of West Lynn. Its combination of historic character, walkable scale, and proximity to both downtown and Tarrytown gives it a feel almost no other central neighborhood matches.",
    lifestyle:
      "Daily life in Clarksville revolves around walking. Cafés on West Lynn, neighborhood restaurants on West 6th, the lake at the south edge, and downtown just across MoPac. The pace is residential and considered.",
    realEstateStyle:
      "Restored historic homes, smaller-lot single-family, and a handful of architecturally distinct contemporary builds. Lot size and historic character drive value here as much as square footage.",
    attractions: [
      "West Lynn cafés and neighborhood restaurants",
      "Pease Park and Shoal Creek Trail",
      "Walking-distance downtown access",
      "Proximity to Tarrytown and Pemberton Heights",
      "Lady Bird Lake at the south edge",
    ],
    whyPeopleMove:
      "Buyers come to Clarksville for character and walkability inside the urban core. It attracts professionals, smaller families, and downsizers who want a historic neighborhood that still lives like a city block.",
    architecture:
      "Restored 1890s–1930s homes alongside thoughtful contemporary infill. Preservation culture is strong and shapes what gets built.",
    walkability:
      "Among the most walkable neighborhoods in central Austin. Most daily needs are within a short walk.",
    schools:
      "Served by AISD with strong central elementary options and easy access to private schools across central Austin.",
    schoolEnrollment:
      "Clarksville is primarily served by Mathews Elementary and Bryker Woods Elementary (~300–400 students each, AISD) — both well-regarded within the district. Feeds into O. Henry Middle and Austin High. Historic preservation culture here attracts buyers who tend to prioritize neighborhood character alongside school quality.",
    communityVibe:
      "Historic, residential, and thoughtfully cosmopolitan. Clarksville attracts people who want a neighborhood with a long memory.",
    medianPriceRange: "$1.1M – $2.8M",
    pricePerSqft: "$580 – $940 / sqft",
    marketTrend:
      "Clarksville's small footprint and historic designation keep inventory extremely tight. Homes with original architectural character sell well to buyers drawn to the neighborhood's identity. Contemporary infill has faced more scrutiny — projects that respect the streetscape and scale outperform those that do not.",
    relatedBlogSlugs: [
      "austin-micro-markets-explained",
      "what-makes-austin-home-easier-to-resell",
      "best-neighborhoods-in-austin-by-lifestyle",
    ],
  },
  {
    slug: "rollingwood",
    name: "Rollingwood",
    tagline: "A small city inside Austin, with its own zip code.",
    shortDescription:
      "A pocket municipality between Westlake and downtown — Eanes schools, residential streets, and an unusually short drive to the city.",
    lifestyleAngle: "Family-anchored, Eanes-zoned, residential.",
    image: "/images/lifestyle-hill-country.jpg",
    imageAlt:
      "Rollingwood-area home tucked among oaks with rolling Hill Country terrain",
    overview:
      "Rollingwood is its own municipality, sitting just west of downtown and surrounded by the Westlake area. Its small footprint, Eanes ISD zoning, and unusually short drive to downtown make it one of central Austin's most strategic family addresses.",
    lifestyle:
      "Rollingwood life is residential and family-anchored. School drop-off, neighborhood walks, weekends on the Greenbelt or the lake, and dinner downtown without a long commute.",
    realEstateStyle:
      "A mix of preserved mid-century homes, transitional rebuilds, and architecturally considered new construction. Lot size, mature trees, and Eanes zoning carry significant long-term value.",
    attractions: [
      "Eanes ISD schools",
      "Barton Creek Greenbelt access",
      "Western Hills Athletic Club",
      "Quick MoPac access into downtown",
      "Proximity to Westlake shopping and dining",
    ],
    whyPeopleMove:
      "Buyers come to Rollingwood for Eanes schools without the longer drive of farther-west Westlake addresses. It is a deliberate, strategic choice for families balancing schools, commute, and central access.",
    architecture:
      "Preserved 1960s–1980s homes alongside transitional rebuilds and a small but growing pocket of contemporary new construction.",
    walkability:
      "Residential walkability inside the municipality. Daily errands typically involve a short drive to Westbank or downtown.",
    schools:
      "Eanes ISD — one of the most consistently top-rated districts in Texas. School zoning is a primary driver of Rollingwood demand.",
    schoolEnrollment:
      "Rollingwood feeds into Eanes Elementary (~400 students) and Hill Country Middle School, with Westlake High School (~2,700 students) as the secondary campus. Eanes ISD has a ~7,500-student total enrollment with one of the highest per-pupil performance records in Texas. The district is the single most powerful demand driver for Rollingwood home values.",
    communityVibe:
      "Family-anchored, school-engaged, and settled. The community organizes around schools, sports, and small-city civic life.",
    medianPriceRange: "$1.4M – $3.2M",
    pricePerSqft: "$560 – $920 / sqft",
    marketTrend:
      "Rollingwood's Eanes ISD zoning provides a floor that most central Austin markets lack. Buyers who cannot afford Westlake proper but want Eanes schools view Rollingwood as the strategic play — and that positioning has kept demand steady. Lot-value-driven purchases for teardown/rebuild are active, particularly for larger parcels.",
    relatedBlogSlugs: [
      "westlake-hills-rollingwood-neighborhood-guide",
      "austin-school-districts-homebuyers-guide",
      "austin-property-taxes-what-buyers-need-to-know",
    ],
    leadMagnet: "neighborhood-westlake-rollingwood",
  },
];

// The site's canonical "featured" set — surfaced on the homepage ("Six
// Places to Start") and in the Neighborhoods navigation dropdown. Keeping
// this as a single derived export means both stay in sync automatically.
export const featuredNeighborhoods: Neighborhood[] = neighborhoods.slice(0, 6);

export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}

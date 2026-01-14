// Species database with location-based data
const speciesDatabase = {
    // Asia-Pacific Region
    'asia-pacific': {
        bounds: { north: 50, south: -50, east: 180, west: 60 },
        species: [
            {
                name: 'Bengal Tiger',
                scientificName: 'Panthera tigris tigris',
                status: 'endangered',
                region: 'South Asia (India, Bangladesh, Nepal, Bhutan)',
                population: 'Approximately 2,500 in the wild',
                characteristics: 'Largest tiger subspecies, powerful build, distinctive orange coat with black stripes',
                bestSpottingTime: 'November to May (dry season)',
                bestLocations: 'Jim Corbett National Park (India), Sundarbans (India/Bangladesh), Chitwan National Park (Nepal)',
                habitat: 'Tropical and subtropical forests, grasslands, mangrove swamps',
                threats: 'Habitat loss, poaching, human-wildlife conflict',
                conservationEfforts: 'Project Tiger, protected reserves, anti-poaching patrols'
            },
            {
                name: 'Giant Panda',
                scientificName: 'Ailuropoda melanoleuca',
                status: 'vulnerable',
                region: 'Central China (Sichuan, Shaanxi, Gansu)',
                population: 'Approximately 1,800 in the wild',
                characteristics: 'Black and white fur, round face, large molars for bamboo crushing, pseudo-thumb',
                bestSpottingTime: 'April to November',
                bestLocations: 'Wolong Nature Reserve, Chengdu Research Base, Foping Nature Reserve',
                habitat: 'Bamboo forests in mountain ranges',
                threats: 'Habitat fragmentation, low birth rate, bamboo flowering cycles',
                conservationEfforts: 'Breeding programs, habitat corridors, nature reserves'
            },
            {
                name: 'Sumatran Orangutan',
                scientificName: 'Pongo abelii',
                status: 'critically-endangered',
                region: 'Northern Sumatra, Indonesia',
                population: 'Approximately 14,000 in the wild',
                characteristics: 'Long arms, reddish-brown hair, highly intelligent, arboreal lifestyle',
                bestSpottingTime: 'March to October (dry season)',
                bestLocations: 'Gunung Leuser National Park, Bukit Lawang',
                habitat: 'Tropical rainforests',
                threats: 'Deforestation, palm oil plantations, illegal pet trade',
                conservationEfforts: 'Protected national parks, rehabilitation centers, anti-deforestation campaigns'
            },
            {
                name: 'Javan Rhino',
                scientificName: 'Rhinoceros sondaicus',
                status: 'critically-endangered',
                region: 'Java, Indonesia',
                population: 'Approximately 74 individuals',
                characteristics: 'Single horn, grey-brown skin, smaller than other rhino species',
                bestSpottingTime: 'April to October',
                bestLocations: 'Ujung Kulon National Park (only remaining population)',
                habitat: 'Dense tropical lowland rainforests',
                threats: 'Extremely small population, habitat loss, diseases, natural disasters',
                conservationEfforts: 'Intensive monitoring, habitat management, potential second population establishment'
            }
        ]
    },
    
    // Africa Region
    'africa': {
        bounds: { north: 37, south: -35, east: 55, west: -20 },
        species: [
            {
                name: 'African Elephant',
                scientificName: 'Loxodonta africana',
                status: 'endangered',
                region: 'Sub-Saharan Africa',
                population: 'Approximately 415,000 in the wild',
                characteristics: 'Largest land mammal, large ears, curved tusks, highly social',
                bestSpottingTime: 'June to October (dry season)',
                bestLocations: 'Kruger National Park (South Africa), Chobe National Park (Botswana), Amboseli National Park (Kenya)',
                habitat: 'Savannas, forests, deserts, marshes',
                threats: 'Poaching for ivory, habitat loss, human-wildlife conflict',
                conservationEfforts: 'Anti-poaching units, ivory trade bans, wildlife corridors'
            },
            {
                name: 'Mountain Gorilla',
                scientificName: 'Gorilla beringei beringei',
                status: 'endangered',
                region: 'Central Africa (Uganda, Rwanda, DRC)',
                population: 'Approximately 1,063 individuals',
                characteristics: 'Large primates, thick black fur, prominent brow ridge, peaceful herbivores',
                bestSpottingTime: 'June to September, December to February (dry seasons)',
                bestLocations: 'Volcanoes National Park (Rwanda), Bwindi Impenetrable Forest (Uganda), Virunga National Park (DRC)',
                habitat: 'Montane and bamboo forests',
                threats: 'Habitat loss, poaching, diseases, civil unrest',
                conservationEfforts: 'Gorilla tourism, veterinary care, community conservation programs'
            },
            {
                name: 'Black Rhino',
                scientificName: 'Diceros bicornis',
                status: 'critically-endangered',
                region: 'Eastern and Southern Africa',
                population: 'Approximately 5,600 in the wild',
                characteristics: 'Two horns, pointed upper lip, smaller than white rhino, solitary',
                bestSpottingTime: 'May to October',
                bestLocations: 'Etosha National Park (Namibia), Ngorongoro Crater (Tanzania), Hluhluwe-iMfolozi Park (South Africa)',
                habitat: 'Savannas, shrublands, deserts',
                threats: 'Poaching for horns, habitat loss',
                conservationEfforts: 'Armed protection, translocation programs, dehorning initiatives'
            },
            {
                name: 'Ethiopian Wolf',
                scientificName: 'Canis simensis',
                status: 'endangered',
                region: 'Ethiopian Highlands',
                population: 'Approximately 500 individuals',
                characteristics: 'Red and white coat, long legs, specialized rodent hunter',
                bestSpottingTime: 'October to January (dry season)',
                bestLocations: 'Bale Mountains National Park, Simien Mountains National Park',
                habitat: 'Afroalpine grasslands and heathlands',
                threats: 'Disease from domestic dogs, habitat loss, small population size',
                conservationEfforts: 'Disease monitoring, vaccination programs, habitat protection'
            }
        ]
    },
    
    // North America Region
    'north-america': {
        bounds: { north: 75, south: 15, east: -50, west: -170 },
        species: [
            {
                name: 'California Condor',
                scientificName: 'Gymnogyps californianus',
                status: 'critically-endangered',
                region: 'Southwestern United States',
                population: 'Approximately 500 (including captive)',
                characteristics: 'Massive wingspan (9.8 ft), bald head, black feathers, scavenger',
                bestSpottingTime: 'Year-round, mornings for flight activity',
                bestLocations: 'Grand Canyon, Pinnacles National Park, Big Sur Coast',
                habitat: 'Rocky shrubland, coniferous forests, oak savannas',
                threats: 'Lead poisoning, habitat loss, power line collisions',
                conservationEfforts: 'Captive breeding, lead-free ammunition campaigns, nest monitoring'
            },
            {
                name: 'Florida Manatee',
                scientificName: 'Trichechus manatus latirostris',
                status: 'vulnerable',
                region: 'Coastal waters of Florida, USA',
                population: 'Approximately 8,800 individuals',
                characteristics: 'Large aquatic mammals, paddle-shaped tail, gentle herbivores, slow-moving',
                bestSpottingTime: 'November to March (winter months)',
                bestLocations: 'Crystal River, Blue Spring State Park, Homosassa Springs',
                habitat: 'Shallow coastal waters, rivers, springs',
                threats: 'Boat strikes, habitat loss, cold stress, water pollution',
                conservationEfforts: 'Protected areas, boat speed zones, rehabilitation programs'
            },
            {
                name: 'Polar Bear',
                scientificName: 'Ursus maritimus',
                status: 'vulnerable',
                region: 'Arctic Circle (Alaska, Canada, Greenland, Norway, Russia)',
                population: 'Approximately 26,000 in the wild',
                characteristics: 'White fur, excellent swimmers, largest land carnivore, thick blubber layer',
                bestSpottingTime: 'July to November in Churchill, Canada',
                bestLocations: 'Churchill (Canada), Svalbard (Norway), Arctic National Wildlife Refuge (Alaska)',
                habitat: 'Sea ice, coastal areas',
                threats: 'Climate change, sea ice loss, pollution, oil development',
                conservationEfforts: 'Climate action, protected areas, research programs'
            },
            {
                name: 'Mexican Wolf',
                scientificName: 'Canis lupus baileyi',
                status: 'endangered',
                region: 'Southwestern United States, Northern Mexico',
                population: 'Approximately 241 in the wild',
                characteristics: 'Smallest gray wolf subspecies, buff-colored coat with gray and rust',
                bestSpottingTime: 'Year-round, dawn and dusk',
                bestLocations: 'Gila National Forest (New Mexico), Apache-Sitgreaves National Forests (Arizona)',
                habitat: 'Mountain woodlands, forests, grasslands',
                threats: 'Genetic diversity loss, human conflict, illegal killings',
                conservationEfforts: 'Reintroduction programs, genetic management, livestock compensation'
            }
        ]
    },
    
    // South America Region
    'south-america': {
        bounds: { north: 15, south: -60, east: -30, west: -85 },
        species: [
            {
                name: 'Jaguar',
                scientificName: 'Panthera onca',
                status: 'near-threatened',
                region: 'Central and South America',
                population: 'Approximately 64,000 in the wild',
                characteristics: 'Powerful build, golden coat with black rosettes, strong bite force',
                bestSpottingTime: 'June to October (dry season)',
                bestLocations: 'Pantanal (Brazil), Amazon Rainforest, Cockscomb Basin Wildlife Sanctuary (Belize)',
                habitat: 'Rainforests, savannas, wetlands',
                threats: 'Habitat loss, poaching, human-wildlife conflict',
                conservationEfforts: 'Protected corridors, anti-poaching patrols, ecotourism'
            },
            {
                name: 'Blue-throated Macaw',
                scientificName: 'Ara glaucogularis',
                status: 'critically-endangered',
                region: 'Northern Bolivia',
                population: 'Approximately 350-400 in the wild',
                characteristics: 'Vibrant blue and yellow plumage, blue throat patch, intelligent and social',
                bestSpottingTime: 'April to October (dry season)',
                bestLocations: 'Beni Savanna, Barba Azul Nature Reserve',
                habitat: 'Palm savannas with scattered forest islands',
                threats: 'Pet trade, habitat loss, nest site competition',
                conservationEfforts: 'Artificial nest boxes, protected reserves, breeding programs'
            },
            {
                name: 'Giant Otter',
                scientificName: 'Pteronura brasiliensis',
                status: 'endangered',
                region: 'Amazon, Orinoco, and La Plata river systems',
                population: 'Approximately 5,000 individuals',
                characteristics: 'Largest otter species, social family groups, loud vocalizations',
                bestSpottingTime: 'June to October',
                bestLocations: 'Pantanal (Brazil), Manu National Park (Peru), Yasuni National Park (Ecuador)',
                habitat: 'Rivers, creeks, lakes in rainforests',
                threats: 'Habitat degradation, pollution, illegal hunting',
                conservationEfforts: 'Protected waterways, ecotourism, research programs'
            },
            {
                name: 'Andean Condor',
                scientificName: 'Vultur gryphus',
                status: 'vulnerable',
                region: 'Andes Mountains',
                population: 'Approximately 10,000 in the wild',
                characteristics: 'One of largest flying birds, distinctive white collar, scavenger',
                bestSpottingTime: 'Year-round, mornings',
                bestLocations: 'Colca Canyon (Peru), Torres del Paine (Chile), Los Glaciares National Park (Argentina)',
                habitat: 'High mountains, open grasslands, coastal areas',
                threats: 'Poisoning, hunting, habitat loss',
                conservationEfforts: 'Reintroduction programs, education, protected areas'
            }
        ]
    },
    
    // Europe Region
    'europe': {
        bounds: { north: 72, south: 35, east: 45, west: -10 },
        species: [
            {
                name: 'Iberian Lynx',
                scientificName: 'Lynx pardinus',
                status: 'endangered',
                region: 'Iberian Peninsula (Spain, Portugal)',
                population: 'Approximately 1,100 in the wild',
                characteristics: 'Spotted coat, tufted ears, short tail, specialized rabbit hunter',
                bestSpottingTime: 'January to March (breeding season)',
                bestLocations: 'Doñana National Park, Sierra de Andújar Natural Park',
                habitat: 'Mediterranean scrubland, forests',
                threats: 'Habitat loss, road mortality, decline in rabbit prey',
                conservationEfforts: 'Captive breeding, reintroduction, wildlife crossings'
            },
            {
                name: 'European Bison',
                scientificName: 'Bison bonasus',
                status: 'vulnerable',
                region: 'Poland, Belarus, Russia, Romania',
                population: 'Approximately 7,800 in the wild',
                characteristics: 'Largest land mammal in Europe, shaggy brown coat, herd behavior',
                bestSpottingTime: 'May to September',
                bestLocations: 'Białowieża Forest (Poland/Belarus), Tarcu Mountains (Romania)',
                habitat: 'Mixed forests, grasslands',
                threats: 'Limited genetic diversity, disease, habitat fragmentation',
                conservationEfforts: 'Breeding programs, reintroduction, habitat management'
            },
            {
                name: 'Mediterranean Monk Seal',
                scientificName: 'Monachus monachus',
                status: 'endangered',
                region: 'Mediterranean Sea, Eastern Atlantic',
                population: 'Approximately 700 individuals',
                characteristics: 'Dark fur, short snout, shy and elusive, coastal caves',
                bestSpottingTime: 'Year-round, early morning',
                bestLocations: 'Greek islands, Madeira (Portugal), Turkish coast',
                habitat: 'Coastal caves, rocky shores',
                threats: 'Human disturbance, fishing nets, habitat loss',
                conservationEfforts: 'Protected marine areas, fishing restrictions, monitoring'
            }
        ]
    },
    
    // Australia and Oceania Region
    'oceania': {
        bounds: { north: 10, south: -50, east: 180, west: 110 },
        species: [
            {
                name: 'Tasmanian Devil',
                scientificName: 'Sarcophilus harrisii',
                status: 'endangered',
                region: 'Tasmania, Australia',
                population: 'Approximately 25,000 in the wild',
                characteristics: 'Black fur, powerful jaw, loud screeching, nocturnal scavenger',
                bestSpottingTime: 'Year-round, at night',
                bestLocations: 'Cradle Mountain-Lake St Clair National Park, Maria Island',
                habitat: 'Forests, coastal scrublands',
                threats: 'Devil Facial Tumor Disease, road mortality, habitat loss',
                conservationEfforts: 'Disease-free insurance populations, genetic research, sanctuaries'
            },
            {
                name: 'Kakapo',
                scientificName: 'Strigops habroptilus',
                status: 'critically-endangered',
                region: 'New Zealand',
                population: 'Approximately 247 individuals',
                characteristics: 'Flightless parrot, nocturnal, mossy green feathers, strong smell',
                bestSpottingTime: 'Limited access, conservation visits only',
                bestLocations: 'Predator-free islands (Anchor, Whenua Hou)',
                habitat: 'Native forests, scrublands',
                threats: 'Predation by introduced species, low genetic diversity',
                conservationEfforts: 'Intensive management, predator-free islands, supplementary feeding'
            },
            {
                name: 'Dugong',
                scientificName: 'Dugong dugon',
                status: 'vulnerable',
                region: 'Coastal waters of Indo-Pacific',
                population: 'Unknown, declining',
                characteristics: 'Marine mammal, dolphin-like tail, seagrass grazer, gentle nature',
                bestSpottingTime: 'Year-round, early morning',
                bestLocations: 'Shark Bay (Australia), Moreton Bay, Great Barrier Reef',
                habitat: 'Shallow coastal waters with seagrass beds',
                threats: 'Habitat degradation, boat strikes, fishing nets',
                conservationEfforts: 'Protected marine areas, seagrass conservation, speed restrictions'
            }
        ]
    }
};

// Function to determine which region a coordinate falls into
function getRegionByCoordinates(lat, lng) {
    const regions = [];
    
    for (const [regionName, regionData] of Object.entries(speciesDatabase)) {
        const bounds = regionData.bounds;
        if (lat >= bounds.south && lat <= bounds.north && 
            lng >= bounds.west && lng <= bounds.east) {
            regions.push(regionName);
        }
    }
    
    return regions;
}

// Function to get species for a given location
function getSpeciesByLocation(lat, lng) {
    const regions = getRegionByCoordinates(lat, lng);
    const species = [];
    
    regions.forEach(region => {
        if (speciesDatabase[region]) {
            species.push(...speciesDatabase[region].species);
        }
    });
    
    return species;
}

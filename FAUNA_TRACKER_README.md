# Fauna Species Tracker 🦁

A web application to discover and track endangered, critically endangered, vulnerable, near-threatened, and extinct fauna species around the world.

## Features

✨ **Interactive World Map** - Explore species by clicking anywhere on the map
📍 **Geolocation Support** - Use your current location to find nearby endangered species
🌍 **Global Coverage** - Species data from Asia-Pacific, Africa, North America, South America, Europe, and Oceania
📊 **Conservation Status** - View species categorized by their IUCN conservation status
🔍 **Detailed Information** - Learn about each species including:
- Scientific names and characteristics
- Best times and locations to spot them in the wild
- Current population estimates
- Main threats and conservation efforts
- Habitat information

## How to Use

1. **Open the Application**: Open `index.html` in a web browser, or run `npm start` to start a local server
2. **Select a Location**:
   - Click the "📍 Use My Location" button to automatically detect your location
   - Or click anywhere on the map to manually pin a location
3. **View Species**: Species found in the selected region will appear in the right panel
4. **Learn More**: Click on any species card to view detailed information
5. **Clear Selection**: Click "🔄 Clear Selection" to reset and start over

## Running the Application

### Option 1: Direct Browser Access
Simply open `index.html` in your web browser.

### Option 2: Local Server (Recommended)
```bash
# Install dependencies
npm install

# Start the server
npm start
```

The application will open automatically at `http://localhost:8080`

## Species Categories

The app tracks species across five conservation status levels:
- 🔴 **Critically Endangered** - Extremely high risk of extinction
- 🟠 **Endangered** - High risk of extinction
- 🟡 **Vulnerable** - High risk of endangerment
- 🟢 **Near Threatened** - Close to qualifying as vulnerable
- ⚫ **Extinct** - No living individuals remain

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Mapping**: Leaflet.js with OpenStreetMap tiles
- **Geolocation**: Browser Geolocation API
- **Responsive Design**: Mobile and desktop friendly

## Species Data

The application includes comprehensive data on endangered fauna from around the world, including:
- Bengal Tigers, Giant Pandas, Sumatran Orangutans
- African Elephants, Mountain Gorillas, Black Rhinos
- California Condors, Florida Manatees, Polar Bears
- Jaguars, Blue-throated Macaws, Giant Otters
- Iberian Lynx, European Bison, Mediterranean Monk Seals
- Tasmanian Devils, Kakapos, Dugongs
- And many more...

## Screenshots

![Fauna Species Tracker](https://github.com/user-attachments/assets/2d089e5b-5baa-405a-8a7c-cc4fa4985136)

## Contributing

Contributions are welcome! Feel free to:
- Add more species data
- Improve the UI/UX
- Add new features
- Fix bugs
- Enhance documentation

## License

MIT License - See LICENSE file for details

## About

This application was built to raise awareness about endangered wildlife and promote conservation efforts worldwide. All species data is compiled from publicly available conservation resources and research.

---

**Note**: This is an educational tool. For the most up-to-date and accurate species information, please refer to official conservation organizations like IUCN, WWF, and local wildlife authorities.

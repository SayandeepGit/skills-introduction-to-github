// Initialize the map
let map;
let currentMarker = null;

// Initialize map on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
    setupEventListeners();
});

function initializeMap() {
    // Create map centered on world view
    map = L.map('map').setView([20, 0], 2);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
        minZoom: 2
    }).addTo(map);
    
    // Add click event to map
    map.on('click', function(e) {
        handleMapClick(e.latlng.lat, e.latlng.lng);
    });
}

function setupEventListeners() {
    // Use My Location button
    document.getElementById('useLocationBtn').addEventListener('click', function() {
        if (navigator.geolocation) {
            this.textContent = '⏳ Getting location...';
            this.disabled = true;
            
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    handleMapClick(lat, lng);
                    map.setView([lat, lng], 6);
                    this.textContent = '📍 Use My Location';
                    this.disabled = false;
                },
                (error) => {
                    alert('Unable to get your location. Please ensure location permissions are enabled.');
                    console.error('Geolocation error:', error);
                    this.textContent = '📍 Use My Location';
                    this.disabled = false;
                }
            );
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    });
    
    // Clear Selection button
    document.getElementById('clearSelectionBtn').addEventListener('click', function() {
        clearSelection();
    });
    
    // Modal close button
    document.querySelector('.close').addEventListener('click', function() {
        closeModal();
    });
    
    // Close modal when clicking outside
    document.getElementById('speciesModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
}

function handleMapClick(lat, lng) {
    // Remove existing marker if any
    if (currentMarker) {
        map.removeLayer(currentMarker);
    }
    
    // Add new marker
    currentMarker = L.marker([lat, lng]).addTo(map);
    currentMarker.bindPopup(`<b>Selected Location</b><br>Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`).openPopup();
    
    // Update location info
    const locationInfo = document.getElementById('locationInfo');
    const locationCoords = document.getElementById('locationCoords');
    locationInfo.classList.remove('hidden');
    locationCoords.textContent = `Latitude: ${lat.toFixed(4)}°, Longitude: ${lng.toFixed(4)}°`;
    
    // Get and display species for this location
    displaySpeciesForLocation(lat, lng);
}

function displaySpeciesForLocation(lat, lng) {
    const species = getSpeciesByLocation(lat, lng);
    const speciesList = document.getElementById('speciesList');
    
    if (species.length === 0) {
        speciesList.innerHTML = '<p class="placeholder">No endangered species data available for this location. Try selecting a different area.</p>';
        return;
    }
    
    // Sort species by conservation status priority
    const statusPriority = {
        'critically-endangered': 1,
        'endangered': 2,
        'vulnerable': 3,
        'near-threatened': 4,
        'extinct': 5
    };
    
    species.sort((a, b) => statusPriority[a.status] - statusPriority[b.status]);
    
    // Create species cards
    speciesList.innerHTML = species.map(sp => `
        <div class="species-card ${sp.status}" onclick="showSpeciesDetails(${JSON.stringify(sp).replace(/"/g, '&quot;')})">
            <div class="species-name">${sp.name}</div>
            <div class="species-scientific">${sp.scientificName}</div>
            <span class="species-status status-${sp.status}">
                ${formatStatus(sp.status)}
            </span>
            <div class="species-preview">
                ${sp.characteristics.substring(0, 100)}...
            </div>
        </div>
    `).join('');
}

function formatStatus(status) {
    return status
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function showSpeciesDetails(species) {
    const modal = document.getElementById('speciesModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${species.name}</h2>
            <p class="modal-scientific">${species.scientificName}</p>
            <span class="species-status status-${species.status}">
                ${formatStatus(species.status)}
            </span>
        </div>
        
        <div class="detail-section">
            <h3>🌍 Region</h3>
            <p>${species.region}</p>
        </div>
        
        <div class="detail-section">
            <h3>📊 Population</h3>
            <p>${species.population}</p>
        </div>
        
        <div class="detail-section">
            <h3>🔍 Characteristics</h3>
            <p>${species.characteristics}</p>
        </div>
        
        <div class="detail-section">
            <h3>🏞️ Habitat</h3>
            <p>${species.habitat}</p>
        </div>
        
        <div class="detail-section">
            <h3>⏰ Best Time to Spot</h3>
            <p>${species.bestSpottingTime}</p>
        </div>
        
        <div class="detail-section">
            <h3>📍 Best Locations</h3>
            <p>${species.bestLocations}</p>
        </div>
        
        <div class="detail-section">
            <h3>⚠️ Main Threats</h3>
            <p>${species.threats}</p>
        </div>
        
        <div class="detail-section">
            <h3>🛡️ Conservation Efforts</h3>
            <p>${species.conservationEfforts}</p>
        </div>
    `;
    
    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('speciesModal').classList.add('hidden');
}

function clearSelection() {
    // Remove marker
    if (currentMarker) {
        map.removeLayer(currentMarker);
        currentMarker = null;
    }
    
    // Hide location info
    document.getElementById('locationInfo').classList.add('hidden');
    
    // Reset species list
    document.getElementById('speciesList').innerHTML = '<p class="placeholder">Select a location on the map to view species data</p>';
    
    // Reset map view
    map.setView([20, 0], 2);
}

// Handle escape key to close modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

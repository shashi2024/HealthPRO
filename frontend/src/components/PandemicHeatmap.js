import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, HeatmapLayer } from '@react-google-maps/api';
import axios from 'axios';

const mapContainerStyle = {
    width: '100%',
    height: '500px'
};

const center = {
    lat: 7.8731, // Default center (Sri Lanka)
    lng: 80.7718
};

const PandemicHeatmap = () => {
    const [heatmapData, setHeatmapData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showMap, setShowMap] = useState(false);

    useEffect(() => {
        const fetchClusters = async () => {
            try {
                const today = new Date();
                const threeDaysAgo = new Date();
                threeDaysAgo.setDate(today.getDate() - 3);
                
                const response = await axios.get(`http://localhost:5000/api/pandemic/get-clusters`, {
                    params: { startDate: threeDaysAgo.toISOString(), endDate: today.toISOString() }
                });

                const clusters = response.data.clusters;
                setHeatmapData(
                    clusters.map(cluster => ({
                        location: new window.google.maps.LatLng(cluster.lat, cluster.lng),
                        weight: cluster.count
                    }))
                );
                setLoading(false);
            } catch (error) {
                console.error('Error fetching clusters:', error);
            }
        };

        fetchClusters();
    }, []);

    return (
        <div>
            <button onClick={() => setShowMap(!showMap)} className="pandemic-button">
                {showMap ? "Hide" : "Check Pandemic Crisis"}
            </button>

            {showMap && (
                <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}>
                        {!loading && <HeatmapLayer data={heatmapData} />}
                    </GoogleMap>
                </LoadScript>
            )}
        </div>
    );
};

export default PandemicHeatmap;

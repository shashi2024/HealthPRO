import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PandemicStatus = () => {
    const [clusters, setClusters] = useState([]);

    useEffect(() => {
        const fetchClusters = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/get-clusters`);
                setClusters(response.data.clusters);
            } catch (error) {
                console.error("Error fetching pandemic data", error);
            }
        };
        fetchClusters();
    }, []);

    return (
        <div>
            <h2>Pandemic Clusters</h2>
            {clusters.length > 0 ? (
                clusters.map((cluster, index) => (
                    <div key={index}>
                        <h3>Area: {cluster.area}</h3>
                        <p>Cases: {cluster.count}</p>
                    </div>
                ))
            ) : (
                <p>No active pandemic clusters detected.</p>
            )}
        </div>
    );
};

export default PandemicStatus;

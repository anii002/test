import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
    
    const mapStyles = {
        height: '50vh',
        width: '100%',
    };

    const defaultCenter = {
        lat: 37.7749, // replace with your desired latitude
        lng: -122.4194, // replace with your desired longitude
    };

    const onLoad = () => {
        console.log('Map loaded!');
    };

    const onError = (status) => {
        console.error('Error loading map:', status);
    };

    return (
        <LoadScript
            key="AIzaSyBN608gbzrkVpt_F2ML2uI6zHg7CYZsz_c"
            onLoad={onLoad}
            onError={onError}
        >
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
};


export default MapContainer;

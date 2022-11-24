import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const MapContainer = ({ closeModal }) => {

    const mapStyles = {
        height: "70vh",
        width: "40%"
    };

    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }

    return (
        <div>
            <button onClick={() => closeModal(false)}>close</button>
            <GoogleMap
                googleMapsApiKey='AIzaSyAGRFqUfpv4IpNnbudlN7oM0zBkCWNQmyY'
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
            />
        </div>
    )
}
export default MapContainer
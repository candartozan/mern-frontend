import React, { useRef, useEffect } from "react";

import "./Map.css";

const Map = (props) => {
    const mapRef = useRef();

    const { center, zoom } = props;

    useEffect(() => {
        let map;

        async function initMap() {
            const { Map } = await window.google.maps.importLibrary("maps");
            const { AdvancedMarkerElement } =
                await window.google.maps.importLibrary("marker");

            map = new Map(mapRef.current, {
                center: center,
                zoom: zoom,
                mapId: "MAP_ID",
            });

            const marker = new AdvancedMarkerElement({
                map: map,
                position: center,
            });
        }

        initMap();

        // const map = new window.google.maps.Map(mapRef.current, {
        //     center: center,
        //     zoom: zoom,
        // });

        // new window.goole.map.Marker({ position: center, map: map });
    }, [center, zoom]);

    return (
        <div
            ref={mapRef}
            className={`map ${props.className}`}
            style={props.style}
        ></div>
    );
};

export default Map;

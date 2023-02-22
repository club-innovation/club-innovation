import React, { useEffect } from "react";

function GoogleMap({lat, lon}) {
    useEffect(() => {
        const ifameData = document.getElementById("iframeGoogleMap")
        ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    }, [lat, lon])
    return (
        <div>
            <iframe id="iframeGoogleMap"></iframe>
        </div>
    );
}
export default GoogleMap;
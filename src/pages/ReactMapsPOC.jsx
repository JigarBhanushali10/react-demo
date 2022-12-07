import React, { Children, useRef, useState } from "react";
import GoogleMapReact from 'google-map-react';
import useSupercluster from 'use-supercluster';


const markers = [
    {
        id: 1,
        location: {
            lat: 20.50582874400000,
            lng: 72.926139000000
        }
    },
    {
        id: 2,
        location: {
            lat: 20.40382874400000,
            lng: 72.965239000000
        }
    },
    {
        id: 3,
        location: {
            lat: 20.302282874400000,
            lng: 72.914339000000
        }
    },
    {
        id: 4,
        location: {
            lat: 20.60412874400000,
            lng: 72.976439000000
        }
    },

]

const ReactMapsPOC = ({ text, children }) => <div className="bg-dark text-primary  ">
    <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png" style={{
        position: 'absolute',
        top: ' 50%',
        left: ' 50%',
        width: '30px',
        height: '30px',
        borderRadius: '100%',
    }} alt="" srcset=""
    />
    {children}
</div>

export default function SimpleMap() {


    const mapRef = useRef()
    const [zoom, setZoom] = useState()
    const [bounds, setBounds] = useState()

    const points = markers.map(marker => ({
        type: "Feature",
        properties: { cluster: true, markerId: marker.id, },
        geometry: {
            type: "Point",
            coordinates: [
                parseFloat(marker.location.lng),
                parseFloat(marker.location.lat)
            ]
        }
    }));

    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom,
        options: { radius: 50, maxZoom: 20 }
    });

    const defaultProps = {
        center: {
            lat: 20.60828744987769,
            lng: 72.9262395167823
        },
        zoom: 15
    };

    // const render = (status) => {
    //     return <h1>{status}</h1>;
    //   };

    return (
        // Important! Always set the container height explicitly
        <div className="h-75 w-100 p-5">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDovPFfMoi51Y2wPOfgy770OBDkTA7aOkQ" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map }) => {
                    mapRef.current = map;
                }}
                onChange={({ zoom, bounds }) => {

                    setZoom(zoom);
                    setBounds([
                        bounds.nw.lng,
                        bounds.se.lat,
                        bounds.se.lng,
                        bounds.nw.lat
                    ]);
                }}

            >
                {clusters.map(cluster => {
                    const [longitude, latitude] = cluster.geometry.coordinates;
                    const {
                        cluster: isCluster,
                        point_count: pointCount
                    } = cluster.properties;
                    console.log(cluster.properties);

                    if (isCluster) {
                        return (
                            <ReactMapsPOC
                                key={`${cluster?.id}`}
                                lat={latitude}
                                lng={longitude}
                            >
                                <div
                                    className="bg-dark rounded-circle text-light"
                                    style={{
                                        width: `${10 + (pointCount / points.length) * 20}px`,
                                        height: `${10 + (pointCount / points.length) * 20}px`
                                    }}
                                    onClick={() => {
                                        const expansionZoom = Math.min(
                                            supercluster.getClusterExpansionZoom(cluster.id),
                                            20
                                        );
                                        mapRef.current.setZoom(expansionZoom);
                                        mapRef.current.panTo({ lat: latitude, lng: longitude });
                                    }}
                                >
                                    {pointCount}
                                </div>
                            </ReactMapsPOC>
                        );
                    }
// else{
    
//     return <ReactMapsPOC key={cluster.id} lat={latitude} lng={longitude} />
// }
                })}


            </GoogleMapReact>
        </div>
    );
}
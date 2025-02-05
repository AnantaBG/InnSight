import { useContext} from "react";
import { useLoaderData } from "react-router-dom";
import { AuthC } from "../Provider/AuthProviderx";
import Loading from "./Loading";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Reactmaps = () => {
  const rooms = useLoaderData();
  const { loading } = useContext(AuthC);

  if (loading) {
    return <Loading />;
  }

  return (
            <div className="mt-20">
                <h2 className="text-6xl font-bold font-mono flex justify-center mb-5 mx-auto">Map</h2>
                <div className="mx-auto flex justify-center mb-10">
                <MapContainer center={[23.777176, 90.399452]} zoom={7} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {rooms.map((room) => (
                    <Marker
                        key={room._id}
                        position={[room.location.coordinates[0], room.location.coordinates[1]]}
                        
                    >
                        <Popup>
                            <h1 className="flex justify-center mx-auto text-2xl font-bold mb-5">{room.name}</h1>
                            <h1 className="flex justify-center mx-auto text-xl font-bold mb-5">{room.location.description}</h1>
                            <h1>{room.description}</h1>
                        </Popup>
                        </Marker>
                    ))}

                </MapContainer>
                </div>
            </div>
  );
};

export default Reactmaps;
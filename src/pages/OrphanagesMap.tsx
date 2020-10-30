import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import mapImage from "../images/logo.svg";
import "../styles/pages/orphanages-map.css";
import api from "../services/api";

import mapIcon from "../utils/mapIcon";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapImage} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas criaças estão esperando a sua visita : </p>
        </header>
        <footer>
          <strong>Caldas Novas</strong>
          <span>Goias</span>
        </footer>
      </aside>
      <Map
        center={[-17.7510767, -48.6088232]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url={"https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
        {orphanages.map((orphanage) => {
          return (
            <Marker
              position={[orphanage.latitude, orphanage.longitude]}
              icon={mapIcon}
              key={orphanage.id}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map_popup"
              >
                {orphanage.name}

                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>
      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;

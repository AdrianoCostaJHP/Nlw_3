import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet';

import mapImage from "../images/logo.svg";
import "../styles/pages/orphanages-map.css";
import 'leaflet/dist/leaflet.css';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapImage} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas criaças estão esperando a sua visita : </p>
                </header>
                <footer>
                    <strong>Caldas Novas</strong>
                    <span>Goias</span>
                </footer>
            </aside>
        <Map  
            center={[-17.7510767,-48.6088232]} 
            zoom={15} 
            style={{width: '100%', height: '100%'}}
            >
                <TileLayer url={"https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
            </Map>
        <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#FFF"/>
        </Link>
        </div>
    );
}

export default OrphanagesMap; 
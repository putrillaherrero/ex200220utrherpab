import React from 'react';
import {Router, Link} from "@reach/router";
import './procesar/style1utrherpab.css';
import Distribucion1utrherpab2002 from "./Distribucion1utrherpab2002";
import Distribucion2utrherpab2002 from "./Distribucion2utrherpab2002";
import Distribucion3utrherpab2002 from "./Distribucion3utrherpab2002";
import Pruebaspasutrherpab2002 from "./Pruebaspasutrherpab2002";

function Aplicacionutrherpab2002() {
    return (
        <div className="Aplicacionutrherpab2002">
            <nav>
                <Link className={"linkutrherpab"} to={"Distribucion1utrherpab2002"}> Distribución 1 </Link>
                <Link className={"linkutrherpab"} to={"Distribucion2utrherpab2002"}> Distribución 2 </Link>
                <Link className={"linkutrherpab"} to={"Distribucion3utrherpab2002"}> Distribución 3 </Link>
                <Link className={"linkutrherpab"} to={"Pruebaspasutrherpab2002"}> Pruebas </Link>
            </nav>

            <Router>
                <Distribucion1utrherpab2002 path={"/Distribucion1utrherpab2002"} />
                <Distribucion2utrherpab2002 path={"/Distribucion2utrherpab2002"}/>
                <Distribucion3utrherpab2002 path={"/Distribucion3utrherpab2002"}/>
                <Pruebaspasutrherpab2002 path={"Pruebaspasutrherpab2002"}/>
            </Router>
        </div>
    );
}

export default Aplicacionutrherpab2002;
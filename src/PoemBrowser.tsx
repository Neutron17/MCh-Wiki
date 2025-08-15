import React from "react";
import './poembrowser.css'
import cswm from './images/img.png'
import mch from './images/charybdis.png'
import mch2 from './images/mch2.jpg'
import uv1 from './images/ulrachv1.jpg'
import uv2 from './images/ulrachv2.jpg'
import Category from "./Category";

export default class EveryPoem extends React.Component {
    render() {
        return <>
            <h1 className={"text-7xl font-bold"}>Versek</h1>

            <div className={"flex flex-wrap p-8 justify-center gap-16"}>
                <Category link={"/best"} title={"CsWM Best Of"} description={"Válogatott CsWM versek"} img={cswm}/>
                <Category link={"/poems"} title={"Összes CsWM Vers"} description={"Összes CsWM vers, hányás veszély!"} img={uv1}/>
                <Category link={"poemsearch"} title={"CsWM Vers kereső"} description={"Összes CsWM vers, hányás veszély!"} img={uv2}/>
                <Category link={"mch1"} title={"Magna Charybdis I"} description={"Nagy Charybdis kalandjai"} img={mch}/>
                <Category link={"mch2"} title={"Magna Charybdis II"} description={"Nagy Charybdis kalandjai, immár Schibzi társaságában"} img={mch2}/>
            </div>
        </>;
    }
}

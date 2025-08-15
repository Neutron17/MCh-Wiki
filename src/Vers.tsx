import React from 'react';
import Poem, {allPoems, ExtendedPoem} from "./poem";
import SideBar, {poemVerses} from "./PoemSideBar";
import {rating} from "@material-tailwind/react";

const divStyle = {
    color: 'white',
};

function extendPoem(p: Poem) {
    const ep: ExtendedPoem = {
        title: p.title,
        verses: p.verses,
        rating: []
    }
    for (let i = 0; i < p.score; i++) {
        ep.rating.push(
            <p>🤮</p>
        )
    }
    return ep
}

class Vers extends React.Component {
    render() {
        return (
            <>
                <SideBar poems={allPoems}></SideBar>
                <div className={"lg:pl-64"} style={divStyle}>
                    <h1 className="text-7xl"><b>CsWM Versek</b></h1>
                    <main>
                        <p><i>Hányóvödör használata ajánlott</i></p>
                    </main>
                    <br/>
                    {allPoems.map((poem) => { return extendPoem(poem) }).map((item, upperindex) => (
                        <section key={upperindex} id={String(upperindex)} className="scroll-mt-20">
                            <div className={"flex items-center justify-center"}>
                                <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                                <div className="flex pb-3 pl-5">
                                    {item.rating.map((item, index) => (item))}
                                </div>
                            </div>
                            <p className="text-gray-300">
                                <div>
                                    {poemVerses(item).map((verse, index) => (
                                        <span key={index} className="block mb-2">
                                        {verse.map((item) => (
                                            <>
                                                {item.split('\n').map((line, index) => (
                                                    <span key={index} className="inline-block mr-2">{line}</span>
                                                ))}
                                                <br/>
                                            </>
                                        ))}
                                            <br/>
                                    </span>
                                    ))}
                                </div>
                                <br/>
                            </p>
                        </section>
                    ))}
                </div>
            </>
        )
    }
}

export default Vers;

import FullPoem, {extendPoem} from "./FullPoem";
import Poem, {allPoems} from "./poem";
import {useParams} from "react-router-dom";
import {poemVerses} from "./PoemSideBar";
import React from "react";

export default function SinglePoem() {
    const params = useParams()
    const poem = allPoems.find((it) => {
        return it.title === params.poem
    }) as Poem
    return (
        <div style={{color: 'white'}}>
            <h1 className="text-7xl"><b>{params.poem}</b></h1>
            <br/>
            {
                <section className="scroll-mt-20">
                    <div className="text-gray-300 text-xl">
                        {poemVerses(poem).map((verse, index) => (
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
                </section>
            }
        </div>
    )
}
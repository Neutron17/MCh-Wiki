import Poem from "./poem";
import {extendPoem} from "./FullPoem";
import {NavLink} from "react-router-dom";

interface SimplePoemProps {
    title: string,
    poems: Poem[]
}

export default function SimplePoem(props: SimplePoemProps) {
    return (
        <>
            <div className={"lg:pl-64"} style={{color: 'white'}}>
                <h1 className="text-7xl"><b>{props.title}</b></h1>
                <br/>
                {props.poems.map((poem) => {
                    return extendPoem(poem)
                }).map((item, upperindex) => (
                    <section key={upperindex} id={String(upperindex)} className="scroll-mt-20">
                        <div className={"flex items-center justify-center"}>
                            <NavLink to={`/poem/${item.title}`} className="text-2xl font-bold mb-4">{item.title}</NavLink>
                            <div className="flex pb-3 pl-5 gap-1">
                                {item.rating.map((item, index) => (item))}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </>)
}

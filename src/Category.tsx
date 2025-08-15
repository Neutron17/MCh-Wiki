import React from "react";
import {NavLink} from "react-router-dom";

export interface CategoryProp {
    link:string;
    title:string;
    description:string;
    img:string
}

export default function Category(props: CategoryProp) {
    return (
        <NavLink to={props.link}>
            <div className={"category-container"}>
                <div className={"category"}>
                    <div className={"p-6"}>
                        <h1 className={"font-bold"}>{props.title}</h1>
                        <p>{props.description}</p>
                    </div>
                    <img src={props.img} alt={"mch"}/>
                </div>
            </div>
        </NavLink>
    )
}
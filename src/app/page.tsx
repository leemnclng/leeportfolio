import React from "react";
import { Metadata } from "next";
import Home from "./home/home";

export const metadata: Metadata = {
    title: "Lee Michael Maneclang",
    description: "Introduction Page"
}

export default function Pages () {
    return (
    <div>
    <Home />
    </div>
    )
}

import React from "react";

interface TechnicalGridImage {
    imgSource: string;
    imgAlt: string
}

export function ImageIconsGrid({imgSource, imgAlt}:TechnicalGridImage) {
    return (
        <img 
        width={48} 
        height={48} 
        src={imgSource} 
        alt={imgAlt} />
    )
}

import React from "react";
import Image from "next/image"

interface TechnicalGridImage {
	imgSource: string;
	imgAlt: string
}

export function ImageIconsGrid({ imgSource, imgAlt }: TechnicalGridImage) {
	return (
		<Image
			width={48}
			height={48}
			src={imgSource}
			alt={imgAlt} />
	)
}

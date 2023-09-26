/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from "next/image"
import profilePic from "./images/portfolio-1.png";
import { DownloadButton } from "./components/homeButtonComponents";

export default function About() {
	return (
		<div className="flex h-full mt-24 justify-center gap-32">
			<div className="flex-col items-center ml-28 max-w-2xl font-sans-serif">
				<h1 className="text-5xl font-bold text-gray-700 p-1">FULLSTACK WEB DEVELOPER</h1>
				<span>
					<p className="mt-6 text-lg font-medium max-w-prose text-zinc-400">Hi! I'm Lee Michael Maneclang a programmer based in the philippines. I have a strong interest in software engineering, cloud computing and web applications development. I am focusing on backend development, but I also do have experience with frontend development.
					</p>
				</span>
				<div className="flex flex-col mt-7">
					<h2 className="text-xl font-semibold">Let's be connected!</h2>
					<div className="flex flex-row gap-3 mt-4">
						<a href="www.linkedin.com/in/leemaneclang">
							<img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" />
						</a>
						<a href="https://github.com/leemnclng">
							<img width="48" height="48" src="https://img.icons8.com/fluency/48/github.png" alt="github" />
						</a>
						<a href="">
							<img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook-circled.png" alt="facebook-circled" />
						</a>
					</div>
				</div>
				<h4 className="text-base font-semibold mt-6 ml-16"> OR </h4>
				<div className="flex flex-col mt-7">
					<h1 className="text-2xl font-bold"> Contact Me:</h1>
					<div className="mt-3">
						<div className="flex flex-row gap-1 items-center">
							<h1 className="text-lg font-semibold text-zinc-800">Viber:</h1>
							<h3 className="text-lg font-medium text-zinc-500">Lee Maneclang</h3>
						</div>
						<div className="flex flex-row gap-1 mt-3 items-center">
							<h1 className="text-lg font-semibold text-zinc-800">Email:</h1>
							<h3 className="text-lg font-medium text-zinc-500">leemaneclang.crp@gmail.com</h3>
						</div>
					</div>
				</div>
			</div>
			<div>
				<Image
					src={profilePic}
					width={500}
					height={500}
					alt="Lee Michael Maneclang"
				/>
			</div>
		</div>)
}
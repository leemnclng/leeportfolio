'use client'
import React, { useEffect } from "react";
import { ImageIconsGrid } from "./components/aboutTechnicalFieldComponent";

export default function About() {
    return (
        <div className="mt-10 ml-5 flex flex-col mr-5">
            {/* about */}
            <div className="mt-10 h-screen">
                <h1 className="text-6xl font-bold mb-3 ml-56">About Me</h1>
                <div>
                    <div className="flex flex-row justify-around">
                        <div className="flex flex-col max-w-lg font-sans text-xl subpixel-antialiased font-medium text-zinc-500 tracking-tight font-serif">
                            <span className="mt-7">
                                I am Lee Michael Maneclang a fifth-year computer engineering student currently undertaking an internship with a position of a Developer Intern. My interest in programming began during my senior high school. <br /> However, when I entered college, I became uncertain about my desired career path.
                            </span>
                            <span className="mt-3">
                                At one point, I aspired to become a Network Engineer. However, when I took our Software Development course, my passion for programming was rekindled. Starting from scratch with only basic programming knowledge, I ventured into learning PHP for the backend of our project. After that, my interest in Web Development grew stronger, and I began self-studying other languages related to web development, such as Node.js, React.js, and more.
                            </span>
                            <span className="mt-3">
                                That's why I am currently aiming to become a software engineer and plan to explore the deeper aspects of this field.
                            </span>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h1 className="text-8xl font-mono mb-3"> "
                                <span className="text-5xl font-mono"> The Secret of </span>
                            </h1>
                            <span className="text-5xl font-serif font-bold italic"> making Progress </span>
                            <h1 className="text-8xl font-mono">
                                <span className="text-5xl font-mono"> is to get started </span>
                                "
                            </h1>
                            <h1 className="text-2xl font-mono mt-5"> - Mark Twain</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Skills */}
            <div className="h-screen flex flex-col gap-5 items-center mt-5">
                <h1 className="text-4xl font-bold mb-7">Technical Profile</h1>
                <div className="grid grid-cols-5 col-span-1 justify-items-center content-center gap-x-32">
                    {[
                        ['https://img.icons8.com/fluency/48/javascript.png', 'javascript', 'Javascript'],
                        ['https://img.icons8.com/fluency/48/typescript--v1.png', 'typescript', 'Typescript'],
                        ['https://img.icons8.com/fluency/48/node-js.png', 'node-js', 'NodeJS'],
                        ['https://img.icons8.com/color/48/mongodb.png', 'mongo-db', 'MongoDB'],
                        ["https://img.icons8.com/color/48/express-js.png", "express-js", 'ExpressJs'],
                        ['https://img.icons8.com/plasticine/100/react.png', 'react', 'ReactJs'],
                        ['https://img.icons8.com/fluency/48/nextjs.png', 'next', 'NextJs'],
                        ['https://img.icons8.com/color/48/jira.png', 'jira', 'Jira'],
                        ['https://img.icons8.com/fluency/48/github.png', 'github', 'Github'],
                        ['https://img.icons8.com/doodle/48/bitbucket-new.png', 'bitbucket', 'Bitbucket'],
                        ['https://img.icons8.com/color/48/git.png', 'git', 'Git'],
                        ['https://img.icons8.com/color/48/mysql-logo.png', 'mysql', 'MySQL'],
                        ['https://img.icons8.com/color/48/html-5--v1.png', 'html', 'HTML'],
                        ['https://img.icons8.com/color/48/css3.png', 'css', 'CSS'],
                        ['https://img.icons8.com/color/48/tailwind_css.png', 'tailwind', 'Tailwind'],
                        ['https://img.icons8.com/wired/64/000000/postman-api.png', 'postman', 'Postman'],
                        ['https://img.icons8.com/color/48/mongoose.png', 'mongoose-odm', 'Mongoose'],
                        ['https://img.icons8.com/ios/50/redux.png', 'react-redux', 'Redux'],
                        ['https://img.icons8.com/fluency/48/docker.png', 'docker', 'Docker'],
                        ['https://img.icons8.com/color/48/firebase.png', 'firebase', 'Firebase'],
                        ['https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png', 'react-router-dom', 'React Router'],
                        ['https://img.icons8.com/color/48/java-web-token.png', 'jsonwebtoken', 'JWT'],
                        ['https://seeklogo.com/images/A/ant-design-logo-EAB6B3D5D9-seeklogo.com.png', 'antDesign', 'ANTD']
                    ].map(([source, alt, title], indx) => (
                        <span
                            className="flex flex-col justify-center items-center bg-zinc-200 rounded-lg w-24 h-24 mt-5 mb-5 font-medium text-zinc-700"
                            key={indx}>
                            <div className="mb-3">
                                <ImageIconsGrid
                                    imgSource={source}
                                    imgAlt={alt}
                                />
                            </div>
                            <div>
                                {title}
                            </div>
                        </span>
                    ))}
                </div>
            </div>
            {/* Technologies */}
        </div>
    )
}
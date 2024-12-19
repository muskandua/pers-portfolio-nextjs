import About from "./Components/about";
import Hero from "./Components/hero";
import Contact from "./Components/contact";
import Project from "./Components/project";
import Skill from "./Components/skill";



export default function Home() {
    return (
        <div>
        < Hero />
        < About />
        < Skill />
        <Project />
        <Contact />
        </div>
    )
}


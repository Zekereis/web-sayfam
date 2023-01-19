import profil from "../images/profile.jpeg";
import pizza from "../images/pizza.png";
import projectTwo from "../images/cat.png"
function Projects() {
    return (
        <div className="projects">
            <div className="projects-container">
                <div className="project-name">
                    <p>Projects</p>
                </div>
                <div className="project-one">
                    <img src={pizza} />
                    <div className="p1-text">
                        <h3>Pizza Order</h3>
                        <p>I made a food ordering website in this project. It consists of 3 pages and we choose the restaurant on the first page. On the second page, we place our order with a form structure. On the last page, we see our information about our order.</p>
                        <div className="tech-stack">
                            <div className="t-one"><p>React</p></div>
                            <div className="t-one"><p>Redux</p></div>
                            <div className="t-one"><p>Vercel</p></div>
                        </div>
                        <div className="details">
                            <a href="https://github.com/Zekereis/FSWeb-S7-Challenge">
                            <div className="view-site"><p>View Site</p></div>
                            </a>
                            <a href="https://github.com/Zekereis/FSWeb-S7-Challenge">
                            <div className="go-github"><p>Github</p></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-one">
                    <img  src={projectTwo} />
                    <div className="p1-text">
                        <h3>Cat World</h3>
                        <p>In this project, we get information about cats randomly, we can refresh the information instantly. We can put a like to the information we like and remove it from the information we like whenever we want.</p>
                        <div className="tech-stack">
                            <div className="t-one"><p>React</p></div>
                            <div className="t-one"><p>Redux</p></div>
                            <div className="t-one"><p>Vercel</p></div>
                        </div>
                        <div className="details">
                            <a href="https://github.com/Zekereis/FSWeb-S10G3-Async-Redux">
                            <div className="view-site"><p>View Site</p></div>
                            </a>
                            <a href="https://github.com/Zekereis/FSWeb-S10G3-Async-Redux">
                            <div className="go-github"><p>Github</p></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
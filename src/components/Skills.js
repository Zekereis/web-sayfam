import javascript from "../images/icons/js.png";
import react from "../images/icons/react.png";
import redux from "../images/icons/redux.png";
import flutter from "../images/icons/flutter.png";
import node from "../images/icons/node.png";
import vscode from "../images/icons/vscode.png";

function Skills() {
    return(
        
        <div className="skills">
            <b>Skills</b>
            <div className="skill-boxes-one">
                <div className="javascript">
                    <img src={javascript}/>
                    <p>JAVASCRİPT</p>
                </div>
                <div className="react">
                    <img src={react}/>
                    <p>REACT</p>
                </div>
                <div className="redux">
                    <img src={redux}/>
                    <p>REDUX</p>
                </div>
            </div>
            <div className="skill-boxes-two">
                <div className="node">
                    <img src={node}/>
                    <p>NODE</p>
                </div>
                <div className="flutter">
                    <img src={flutter}/>
                    <p>FLUTTER</p>
                </div>
                <div className="vscode">
                    <img src={vscode}/>
                    <p>VSCODE</p>
                </div>
            </div>
        </div>
        
    )
}
export default Skills;
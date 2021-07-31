import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import classes from "./Landing.module.css";
import Steps from "../steps";
import { useHistory } from "react-router-dom"
const sampleResume = "/assets/sample_resume.svg"


function Landing() {
    const history = useHistory();
    function navigate(path) {
        history.push(path)
    }

    return (
        <>
            <div className={classes['App-header']}>
                <div className={classes.container}>
                    <div className={classes['left-section']}>
                        <div className={classes.title}>
                            <h2 >IMPRESSIVE RESUMES</h2>
                            <h3>EASY ONLINE BUILDER</h3>
                        </div>


                        <ul className={classes.list}>
                            <li>
                                <span><FontAwesomeIcon icon={faCheck} /><p> Professional out-of-the-box resumes, instantly generated by the most advanced resume builder technology available.</p></span>
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faCheck} /><p> Effortless crafting. Real-time preview & pre-written resume examples.
                                    Dozens of HR-approved resume templates.</p></span>
                            </li>
                            <li>
                                <span><FontAwesomeIcon icon={faCheck} /><p> Land your dream job with the perfect resume employers are looking for!</p></span>
                            </li>
                        </ul>
                        <br />
                        <br />
                        <button className={classes.button} onClick={() => navigate('/choose-template')}><h2>BUILD MY RESUME</h2></button>
                    </div>
                    <div className={classes['right-section']}>
                        <img src={sampleResume} className={classes.resume} rel="preload" />
                    </div>
                </div>
                <Steps />
            </div>
        </>
    )
}

export default Landing;
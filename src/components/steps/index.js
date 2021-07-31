import { faDownload, faFileAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Steps.module.css";


function Steps() {
    return (
        <>
            <div className={classes.container}>
                <div className={classes['sub-container']}>
                    <div className={classes.icon}>
                        <div className={classes['icon-circle']}>
                            <FontAwesomeIcon icon={faFileAlt} style={{ color: 'black', fontSize: '30' }} />
                        </div>
                        <h5>Choose Template</h5>
                    </div>
                    <div className={classes.icon}>
                        <div className={classes['icon-circle']} style={{ color: 'black', fontSize: '30' }}>
                            <FontAwesomeIcon icon={faPencilAlt} />
                        </div>
                        <h5>Enter Your Details</h5>
                    </div>
                    <div className={classes.icon}>
                        <div className={classes['icon-circle']} style={{ color: 'black', fontSize: '30' }}>
                            <FontAwesomeIcon icon={faDownload} />
                        </div>
                        <h5>Download Your Resume</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Steps;
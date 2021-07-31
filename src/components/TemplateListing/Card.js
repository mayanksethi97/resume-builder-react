/* eslint-disable jsx-a11y/alt-text */
import classes from "./template.module.css";
import { useHistory} from "react-router-dom";

function Card(props) {
    const history = useHistory();
    return (
        <>
            <div className={classes.card} onClick={() => history.push('/make-resume', {selectedTemplate: props.name})}>
                <img src={props.imageUrl} />
                <span>{props.name}</span>
            </div>

        </>
    )
}

export default Card;
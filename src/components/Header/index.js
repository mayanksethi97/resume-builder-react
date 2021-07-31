import classes from "./header.module.css"
import {useHistory} from "react-router-dom";

function Header(props){
    const history = useHistory()
    function navigate(path){
        history.push(path)
    }
    return(
        <div className={classes.header}>
            <h2 onClick={() => navigate('/')}><span>RESUME</span> BUILDER</h2> 
        </div>
    )
}

export default Header;
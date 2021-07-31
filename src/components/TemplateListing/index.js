/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Card from "./Card";
import classes from "./template.module.css";
import useHttp from "../../hooks/useHttp";
import { useEffect, useState } from "react";

function TemplateListing() {
    const [templates, setTemplates] = useState([])
    const requestConfig = {
        url: "/jsons/templates.json",
        method: "GET"
    }
    const { templatesLoading, templatesError, sendRequest: fetchTemplates } = useHttp({ ...requestConfig }, (data) => {
        setTemplates(data);
    });

    useEffect(() => {
        fetchTemplates()
    }, [])
    return (
        <>
            <h3 className={classes.heading}>Choose a template for your Resume</h3>
            <div className={classes.container}>
                {templates.map((template, idx) => <Card {...template} key={idx} />)}
            </div>
        </>
    )
}

export default TemplateListing;
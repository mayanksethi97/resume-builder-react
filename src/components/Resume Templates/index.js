/* eslint-disable default-case */
import { useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Analytics from "../../store/AnalyticsContext";
import BasicTemplate from "./BasicTemplate/BasicTemplate";
import CreativeTemplate from "./Creative Template/CreativeTemplate";
import ExecutiveTemplate from "./Executive Template/ExecutiveTemplate";

function ResumeTemplates(props) {
    const analyticsCtx = useContext(Analytics);
    analyticsCtx.pageView();
    analyticsCtx.log("page view");
    const location = useLocation();
    const history = useHistory();

    function getTargetComponent(template) {
        if (template) {
            switch (template.toLowerCase()) {
                case 'basic resume':
                    return <BasicTemplate />
                case 'executive resume':
                    return <ExecutiveTemplate />
                case 'creative resume':
                    return <CreativeTemplate />
            }
        }
        else {
            history.push('/choose-template')
        }

    }
    return (
        <>
            {getTargetComponent(location?.state?.selectedTemplate)}
        </>
    )
}


export default ResumeTemplates;
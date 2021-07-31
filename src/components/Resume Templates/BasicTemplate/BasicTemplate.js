/* eslint-disable default-case */
import classes from "./template.module.css";
import React, { useState, useRef } from "react";
import { INITIAL_EDUCATION_HISTORY, INITIAL_EMPLOYMENT_HISTORY, INITAL_ACHIEVEMENTS } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle, faUserTie, faBriefcase, faSchool, faAward } from '@fortawesome/free-solid-svg-icons'
import Pdf from "react-to-pdf";

function BasicTemplate(props) {
    const downloadRef = React.createRef()
    const [employmentHistory, setEmploymentHistory] = useState([INITIAL_EMPLOYMENT_HISTORY])
    const [educationHistory, setEducationHistory] = useState([INITIAL_EDUCATION_HISTORY])
    const [achievements, setAchievements] = useState([INITAL_ACHIEVEMENTS])

    function onAddItem(item) {
        let newItems = [];
        switch (item) {
            case 'employment':
                newItems = [...employmentHistory];
                newItems.push(INITIAL_EMPLOYMENT_HISTORY);
                setEmploymentHistory(newItems)
                break;
            case 'education':
                newItems = [...educationHistory];
                newItems.push(INITIAL_EDUCATION_HISTORY);
                setEducationHistory(newItems)
                break;
            case 'achievements':
                newItems = [...achievements];
                newItems.push(INITAL_ACHIEVEMENTS);
                setAchievements(newItems)
        }

    }

    function onRemoveItem(item, idx) {
        let newItems = [];
        switch (item) {
            case 'employment':
                newItems = [...employmentHistory];
                newItems.splice(idx, 1)
                setEmploymentHistory(newItems)
                break;
            case 'education':
                newItems = [...educationHistory];
                newItems.splice(idx, 1)
                setEducationHistory(newItems)
                break;
            case 'achievements':
                newItems = [...achievements];
                newItems.splice(idx, 1)
                setAchievements(newItems)
                break;
        }

    }


    return (
        <>
            <div className={classes.container}>
                <div className={classes['form-layout']} ref={downloadRef}>
                    <div className={classes.content} contenteditable="true">
                        <h2 className={classes.name}>YOUR NAME</h2>
                        <h4 className={classes['italic-font']}>Job Title</h4>
                        <hr />
                        <p className={classes['italic-font']}>(301) 336-1299
                            8589 Ritchboro Rd
                            District Heights, Maryland(MD), 20747</p>
                        <p className={classes['italic-font']}>myemailid@gmail.com, +91 9584***545</p>
                        <section id="professional-summary">
                            <h3><FontAwesomeIcon icon={faUserTie} />  PROFESSIONAL SUMMARY</h3>
                            <p>Self-motivated and cheerful customer service professional with 2+ years of experience helping customers navigate websites and resolving product and service issues. Eager to support BookMe in building an impeccable online reputation by providing top-class customer support. Received 98.9% positive ratings at GHI Inc. where customer retention for my regular call-ins was 25% above the company average.</p>
                        </section>
                        <hr />
                        <section id="employment-history">
                            <h3> <FontAwesomeIcon icon={faBriefcase} />  EMPLOYMENT HISTORY <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faPlusCircle} onClick={() => { onAddItem('employment') }} /></h3>
                            <ul className={classes['employment-history-list']}>
                                {employmentHistory.map((item, idx) => {
                                    return (
                                        <li key={idx}>
                                            <h4>{item.companyName} {idx >= 1 ? <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faMinusCircle} onClick={() => onRemoveItem('employment', idx)} /> : ''}</h4>
                                            <p>{item.jobTitle}</p>
                                            <p>{item.start} to {item.end}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>
                        <hr />
                        <section id="education-history">
                            <h3> <FontAwesomeIcon icon={faSchool} />  EDUCATION HISTORY <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faPlusCircle} onClick={() => { onAddItem('education') }} /></h3>
                            <ul className={classes['employment-history-list']}>
                                {educationHistory.map((item, idx) => {
                                    return (
                                        <li key={idx}>
                                            <h4>{item.schoolName} {idx >= 1 ? <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faMinusCircle} onClick={() => onRemoveItem('education', idx)} /> : ''}</h4>
                                            <p>{item.subject}</p>
                                            <p>{item.start} to {item.end}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>
                        <hr />
                        <section id='awards'>
                            <h3><FontAwesomeIcon icon={faAward} /> AWARDS AND ACHIEVEMENTS <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faPlusCircle} onClick={() => { onAddItem('achievements') }} /></h3>
                            <ul className={classes['employment-history-list']}>
                                {achievements.map((item, idx) => {
                                    return (
                                        <li key={idx}>
                                            <h4>{item.name} {idx >= 1 ? <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faMinusCircle} onClick={() => onRemoveItem('achievements', idx)} /> : ''}</h4>
                                            <p>{item.date}</p>
                                            <p>{item.description}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <Pdf targetRef={downloadRef} filename="code-example.pdf" x={1.5} y={.5} scale={1}>
                    {({ toPdf }) => <button className={classes.button} onClick={toPdf}><h2>Generate Pdf</h2></button>}
                </Pdf>
                <br />
                <br />
                <br />
            </div>
        </>
    )
}

export default BasicTemplate;
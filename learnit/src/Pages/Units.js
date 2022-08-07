import React, { useState, useEffect } from 'react'
import './Units.css'
import axios from 'axios';

function Units() {
    const [unit, setUnit] = useState([]);
    useEffect(() => {
        const loadCourses = async () => {
            const response = await axios.get('http://localhost/learnit/Project9/learnit/API/selectUnit.php?id='+sessionStorage.getItem('un_id'));
            setUnit(response.data);
            console.log(response.data);
        };
        loadCourses();
    }, []);

    const getData = ()=> {
        if ((unit && unit.length > 0)) {
          return unit[0].cr_name
        }else{
            console.log("Loading...")
        }
      }

    return (
        <>
            <div className="main" id="main">
                <div style={{ marginBottom: 60 }}>
                    <div className="course1" id="course1">
                        <h1 className="title" id="title">
                            dkvdkv{getData()}
                        </h1>
                        <p className="goal" id="goal">
                            explain what the main factor is that legally differentiates cosmetics
                            and drugs in the United States.
                        </p>
                        <div style={{ fontFamily: '"Asap", sans-serif', marginTop: 40 }}>
                            <span style={{ color: "#0a324d" }}>Next Step: </span>
                            <p style={{ fontSize: 25, margin: "3px 0 5px 0" }}>Current Lesson</p>
                            <div style={{ color: "#0a324d" }}>num of lesson / num hours</div>
                        </div>
                        <div className="start" id="start">
                            Start
                        </div>
                    </div>
                    <div className="right_side" id="right_side">
                        <div className="box" id="box">
                            <div className="in_box">
                                <div>
                                    <div className="sub_right" id="sub_right">
                                        <div style={{ width: "fit-content" }}>
                                            <h3 style={{ width: "fit-content", marginTop: 0 }}>
                                                Course Details
                                            </h3>
                                            <div style={{ width: "fit-content" }}>
                                                <svg
                                                    style={{ width: 18, height: 16 }}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="Icon-module_icon__23Vv4 Icon-module_sBreakpointSizesmall__17-dg Icon-module_cool-grey__3Wtpa"
                                                    viewBox="0 0 32 32"
                                                >
                                                    <path d="M28 8V4h-4V0H0v24h4v4h4v4h24V8zM2 2h20v20H2zm28 28H10v-2h18V17h-2v9H6v-2h18V6h2v6h2v-2h2z" />
                                                </svg>
                                                <span> Units: 6</span>
                                            </div>
                                            <div style={{ width: "fit-content" }}>
                                                <svg
                                                    style={{ width: 18, height: 18 }}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="Icon-module_icon__23Vv4 Icon-module_sBreakpointSizesmall__17-dg Icon-module_cool-grey__3Wtpa"
                                                    viewBox="0 0 32 32"
                                                    width={32}
                                                    height={32}
                                                >
                                                    <path d="M15 9v6.59l-2.66 2.65 1.42 1.42L17 16.41V9h-2z" />
                                                    <path d="M28 16a11.9 11.9 0 00-.37-2.88l-1.94.48A9.57 9.57 0 0126 16a10 10 0 11-2.5-6.56L25 8.12a12.23 12.23 0 00-3-2.49V0H10v5.61a12 12 0 000 20.75V32h12v-5.66A12 12 0 0028 16zM12 2h8v2.7a11.86 11.86 0 00-8 0zm8 28h-8v-2.72a11.78 11.78 0 008 0z" />
                                                </svg>
                                                <span> Hours: 3</span>
                                            </div>
                                            <div style={{ width: "fit-content" }}>
                                                <img width="19px" src="coin.svg" alt="" />
                                                <span> Free</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ********************************************************************** */}
                                    {/* ////////////////////////////////////////////////////////////////////// */}
                                    <div className="percent" id="percent">
                                        <svg>
                                            <circle cx={70} cy={70} r={70} />
                                            <circle id="circle2" cx={70} cy={70} r={70} />
                                        </svg>
                                        <div className="number">
                                            <h2>
                                                <span id="per">40</span>
                                                <span className="cent">%</span>
                                            </h2>
                                        </div>
                                        <div className="text">Course progression</div>
                                    </div>
                                </div>
                                <div style={{ marginTop: 85 }}>
                                    <p
                                        style={{
                                            width: "fit-content",
                                            color: "black",
                                            fontWeight: "bold",
                                            marginBottom: 5
                                        }}
                                    >
                                        Modern Badges:{" "}
                                    </p>
                                    <p id="btext" className="btext">
                                        You can get a badge for every unit you complete. You have earned 1
                                        out of 6 badges in this course so far.
                                    </p>
                                    <div className="badge" style={{ userSelect: "none" }}>
                                        <div
                                            style={{
                                                marginRight: 10,
                                                display: "inline-block",
                                                padding: 7,
                                                backgroundColor: "#dee3e8",
                                                borderRadius: "100%",
                                                width: 60,
                                                height: 60
                                            }}
                                        >
                                            <div
                                                style={{
                                                    padding: 5,
                                                    color: "white",
                                                    backgroundColor: "#fbbc05",
                                                    borderRadius: "100%",
                                                    width: 50,
                                                    height: 50,
                                                    textAlign: "center",
                                                    fontSize: 50,
                                                    alignItems: "center",
                                                    fontWeight: "bold",
                                                    display: "flex",
                                                    justifyContent: "center"
                                                }}
                                            >
                                                <div>1</div>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                marginRight: 10,
                                                display: "inline-flex",
                                                padding: 7,
                                                backgroundColor: "#dee3e8",
                                                borderRadius: "100%",
                                                width: 60,
                                                height: 60,
                                                justifyContent: "center",
                                                alignItems: "center"
                                            }}
                                        >
                                            <img width="30px" src="images/locked.png" />
                                        </div>
                                        <div
                                            style={{
                                                marginRight: 10,
                                                display: "inline-flex",
                                                padding: 7,
                                                backgroundColor: "#dee3e8",
                                                borderRadius: "100%",
                                                width: 60,
                                                height: 60,
                                                justifyContent: "center",
                                                alignItems: "center"
                                            }}
                                        >
                                            <img width="30px" src="images/locked.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ////////////////////////////////////////////////////////////////////// */}
                    {/* ********************************************************************** */}
                    <div className="course" id="course">
                        <h1 className="title" id="title">
                            Introduction to Cosmetic Formulation and Technology
                        </h1>
                        <p className="goal" id="goal">
                            explain what the main factor is that legally differentiates cosmetics
                            and drugs in the United States.
                        </p>
                        <div style={{ fontFamily: '"Asap", sans-serif', marginTop: 40 }}>
                            <span style={{ color: "#0a324d" }}>Next Step: </span>
                            <p style={{ fontSize: 25, margin: "3px 0 5px 0" }}>Current Lesson</p>
                            <div style={{ color: "#0a324d" }}>num of lesson / num hours</div>
                        </div>
                        <div className="start" id="start">
                            Start
                        </div>
                    </div>
                    <div style={{ clear: "both" }} />
                </div>
                <div id="container" className="container">
                    <div className="unit" id="unit" style={{ display: "none" }}>
                        <div style={{ display: "inline-flex", alignItems: "center" }}>
                            <div
                                style={{
                                    marginRight: 10,
                                    display: "inline-block",
                                    padding: 7,
                                    backgroundColor: "#dee3e8",
                                    borderRadius: "100%",
                                    width: 60,
                                    height: 60
                                }}
                            >
                                <div
                                    style={{
                                        padding: 5,
                                        color: "white",
                                        backgroundColor: "#fbbc05",
                                        borderRadius: "100%",
                                        width: 50,
                                        height: 50,
                                        textAlign: "center",
                                        fontSize: 50,
                                        alignItems: "center",
                                        fontWeight: "bold",
                                        display: "flex",
                                        justifyContent: "center"
                                    }}
                                >
                                    <div>1</div>
                                </div>
                            </div>
                            <span style={{ marginLeft: 15 }}>Name of Unit</span>
                        </div>
                        <div style={{ display: "inline-block", marginLeft: 350 }}>
                            <div style={{ display: "inline-block" }}>
                                <svg
                                    style={{ width: 18, height: 16 }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="Icon-module_icon__23Vv4 Icon-module_sBreakpointSizesmall__17-dg Icon-module_cool-grey__3Wtpa"
                                    viewBox="0 0 32 32"
                                    width={32}
                                    height={32}
                                >
                                    <path d="M26 6V0H6v6h2v5.68l5 2v4.64l-5 2V26H6v6h20v-6h-2v-5.68l-5-2v-4.64l5-2V10h-2v.33l-5 2v7.36l5 2V26H10v-4.32l5-2v-7.36l-5-2V6zm-2 24H8v-2h16zM8 2h16v2H8z" />
                                </svg>
                                <span> Hours: 1.25</span>
                            </div>
                            <div style={{ display: "inline-block", marginLeft: 55 }}>
                                <progress />
                                <span>
                                    <span>10</span>
                                    <span>%</span>
                                </span>
                            </div>
                        </div>
                        <img width="20px" src="images/arrow.png" alt="" />
                    </div>
                    <div id="unit0" className="unit">
                        <div style={{ display: "none" }} />
                        <div style={{ display: "inline-flex", alignItems: "center" }}>
                            <div style={{ display: "inline-block" }}>
                                <div
                                    style={{
                                        marginRight: 10,
                                        display: "inline-block",
                                        padding: 7,
                                        backgroundColor: "rgb(222, 227, 232)",
                                        borderRadius: "100%",
                                        width: 60,
                                        height: 60
                                    }}
                                >
                                    <div
                                        style={{
                                            padding: 5,
                                            color: "white",
                                            backgroundColor: "rgb(251, 188, 5)",
                                            borderRadius: "100%",
                                            width: 50,
                                            height: 50,
                                            textAlign: "center",
                                            fontSize: 50,
                                            fontWeight: "bold",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}
                                    >
                                        <div>1</div>
                                    </div>
                                </div>
                            </div>
                            <span style={{ marginLeft: 15, maxWidth: 415 }}>GENERAL CONCEPTS</span>
                        </div>
                        <div
                            style={{
                                display: "inline-flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginLeft: 200
                            }}
                        >
                            <div
                                style={{
                                    display: "inline-flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <span style={{ marginLeft: 5, marginRight: 4 }}> Hours: </span>6
                            </div>
                            <div style={{ display: "inline-block", marginLeft: 55 }}>
                                <progress />{" "}
                                <span>
                                    <span>10</span>
                                    <span>%</span>
                                </span>
                            </div>
                            <img
                                src="images/arrow.png"
                                style={{ width: 20, transform: "rotate(90deg)", marginLeft: 25 }}
                            />
                        </div>
                    </div>
                    <div id="unit1" className="unit">
                        <div style={{ display: "none" }} />
                        <div style={{ display: "inline-flex", alignItems: "center" }}>
                            <div style={{ display: "inline-block" }}>
                                <div
                                    style={{
                                        marginRight: 10,
                                        display: "inline-block",
                                        padding: 7,
                                        backgroundColor: "rgb(222, 227, 232)",
                                        borderRadius: "100%",
                                        width: 60,
                                        height: 60
                                    }}
                                >
                                    <div
                                        style={{
                                            padding: 5,
                                            color: "white",
                                            backgroundColor: "rgb(251, 188, 5)",
                                            borderRadius: "100%",
                                            width: 50,
                                            height: 50,
                                            textAlign: "center",
                                            fontSize: 50,
                                            fontWeight: "bold",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}
                                    >
                                        <div>2</div>
                                    </div>
                                </div>
                            </div>
                            <span style={{ marginLeft: 15, maxWidth: 415 }}>
                                LEGISLATION FOR COSMETICS
                            </span>
                        </div>
                        <div
                            style={{
                                display: "inline-flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginLeft: 200
                            }}
                        >
                            <div
                                style={{
                                    display: "inline-flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <span style={{ marginLeft: 5, marginRight: 4 }}> Hours: </span>6
                            </div>
                            <div style={{ display: "inline-block", marginLeft: 55 }}>
                                <progress />{" "}
                                <span>
                                    <span>10</span>
                                    <span>%</span>
                                </span>
                            </div>
                            <img
                                src="images/arrow.png"
                                style={{ width: 20, transform: "rotate(90deg)", marginLeft: 25 }}
                            />
                        </div>
                    </div>
                    <div id="unit2" className="unit">
                        <div style={{ display: "none" }} />
                        <div style={{ display: "inline-flex", alignItems: "center" }}>
                            <div style={{ display: "inline-block" }}>
                                <div
                                    style={{
                                        marginRight: 10,
                                        display: "inline-block",
                                        padding: 7,
                                        backgroundColor: "rgb(222, 227, 232)",
                                        borderRadius: "100%",
                                        width: 60,
                                        height: 60
                                    }}
                                >
                                    <div
                                        style={{
                                            padding: 5,
                                            color: "white",
                                            backgroundColor: "rgb(251, 188, 5)",
                                            borderRadius: "100%",
                                            width: 50,
                                            height: 50,
                                            textAlign: "center",
                                            fontSize: 50,
                                            fontWeight: "bold",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}
                                    >
                                        <div>3</div>
                                    </div>
                                </div>
                            </div>
                            <span style={{ marginLeft: 15, maxWidth: 415 }}>
                                SKIN CARE PRODUCTS
                            </span>
                        </div>
                        <div
                            style={{
                                display: "inline-flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginLeft: 200
                            }}
                        >
                            <div
                                style={{
                                    display: "inline-flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <span style={{ marginLeft: 5, marginRight: 4 }}> Hours: </span>6
                            </div>
                            <div style={{ display: "inline-block", marginLeft: 55 }}>
                                <progress />{" "}
                                <span>
                                    <span>10</span>
                                    <span>%</span>
                                </span>
                            </div>
                            <img
                                src="images/arrow.png"
                                style={{ width: 20, transform: "rotate(90deg)", marginLeft: 25 }}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Units

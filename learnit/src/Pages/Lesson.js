import React from 'react'
import './Lesson.css'

function Lesson() {
  return (
    <>
    <div className="second" id="second">
  <div className="less_title" id="less_title">
    <p className="nc">
      Introduction to Cosmetic Formulation and Technology: unit 1/3{" "}
    </p>
    <div className="nu" id="nu">
      GENERAL CONCEPTS{" "}
    </div>
  </div>
  <aside style={{ display: "inline-block" }}>
    <div className="overview" id="overview">
      {" "}
      <span>An overview of this unit</span>{" "}
      <img
        id="omg"
        className="omg"
        style={{ width: 15, heught: 15, float: "right" }}
        src="images/arrow-88.png"
        alt=""
      />
    </div>
    <div className="under" id="under">
      <div id="list" className="list">
        <div style={{ display: "none" }} className="lee">
          1.first_lesson{" "}
          <div>
            <img width="16px" src="images/arrow-28.png" alt="" />
          </div>
        </div>
        <div style={{ display: "none" }}>
          <div className="chapter" id="chapter">
            <svg
              style={{ width: 18, height: 16 }}
              xmlns="http://www.w3.org/2000/svg"
              className="Icon-module_icon__23Vv4 Icon-module_sBreakpointSizesmall__17-dg Icon-module_cool-grey__3Wtpa"
              viewBox="0 0 32 32"
            >
              <path d="M28 8V4h-4V0H0v24h4v4h4v4h24V8zM2 2h20v20H2zm28 28H10v-2h18V17h-2v9H6v-2h18V6h2v6h2v-2h2z" />
            </svg>
            <a
              href="doc/Ch1.pptx"
              download=""
              style={{ textDecoration: "none", color: "black" }}
            >
              Get the chapter
            </a>
          </div>
          <div className="vedio" id="vedio*">
            <img width="16px" src="images/youtube.png" alt="" /> Watch the
            lesson
          </div>
          <div className="quiz" id="quiz">
            <img width="16px" src="images/quiz.png" alt="" /> Test your
            knowledge
          </div>
        </div>
        <div style={{ display: "none" }} className="lee">
          2.second_lesson{" "}
          <div>
            <img width="16px" src="images/arrow-28.png" alt="" />
          </div>
        </div>
        <div />
        <div style={{ display: "none" }} className="lee">
          3.third_lesson{" "}
          <div>
            <img width="16px" src="images/arrow-28.png" alt="" />
          </div>
        </div>
        <div />
        <div id="lee0" className="lee">
          <span style={{ maxWidth: 300 }}>1.Basic Definitions</span>
          <div>
            <img width="16px" id="mg0" src="images/arrow-28.png" alt="" />
          </div>
        </div>
        <div id="cont0" style={{ display: "none" }}>
          <div id="chapter0" className="chapter">
            <svg
              style={{ width: 18, height: 16, marginRight: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              className="Icon-module_icon__23Vv4 Icon-module_sBreakpointSizesmall__17-dg Icon-module_cool-grey__3Wtpa"
              viewBox="0 0 32 32"
            >
              <path d="M28 8V4h-4V0H0v24h4v4h4v4h24V8zM2 2h20v20H2zm28 28H10v-2h18V17h-2v9H6v-2h18V6h2v6h2v-2h2z" />
            </svg>{" "}
            <a
              id="mg0"
              href="doc/Ch1.pptx"
              download=""
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              Chapter-1
            </a>
          </div>
          <div id="vedio1" className="vedio">
            <img
              width="17px"
              style={{ marginRight: 10 }}
              src="images/youtube.png"
              alt=""
            />{" "}
            vedio-1
          </div>
          <div id="quiz2" className="quiz">
            <img
              width="19px"
              style={{ marginRight: 10 }}
              src="images/quiz.png"
              alt=""
            />{" "}
            test-1
          </div>
        </div>
        <div id="lee1" className="lee">
          <span style={{ maxWidth: 300 }}>2.Classification of Cosmetics</span>
          <div>
            <img width="16px" id="mg1" src="images/arrow-28.png" alt="" />
          </div>
        </div>
        <div id="cont1" style={{ display: "none" }}>
          <div id="chapter3" className="chapter">
            <svg
              style={{ width: 18, height: 16, marginRight: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              className="Icon-module_icon__23Vv4 Icon-module_sBreakpointSizesmall__17-dg Icon-module_cool-grey__3Wtpa"
              viewBox="0 0 32 32"
            >
              <path d="M28 8V4h-4V0H0v24h4v4h4v4h24V8zM2 2h20v20H2zm28 28H10v-2h18V17h-2v9H6v-2h18V6h2v6h2v-2h2z" />
            </svg>{" "}
            <a
              id="mg3"
              href="doc/Ch1.pptx"
              download=""
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              chapter-2
            </a>
          </div>
          <div id="vedio4" className="vedio">
            <img
              width="17px"
              style={{ marginRight: 10 }}
              src="images/youtube.png"
              alt=""
            />{" "}
            vedio-2
          </div>
          <div id="quiz5" className="quiz">
            <img
              width="19px"
              style={{ marginRight: 10 }}
              src="images/quiz.png"
              alt=""
            />{" "}
            test-2
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          padding: 30,
          paddingTop: 15,
          borderTop: ".1rem solid rgba(0,0,0,.12)"
        }}
      >
        <div className="test" id="test">
          <img
            src="images/arrow-38.png"
            style={{ transform: "rotate(-90deg)" }}
            width="14px"
            alt=""
          />{" "}
          <span style={{ fontSize: 20 }}>Take the test directly</span>
        </div>
      </div>
    </div>
  </aside>
  <div className="monitor">
    <iframe
      id="vedio"
      className="mvedio"
      width="80%"
      height={400}
      youtube-api="lesson.youtubeApi"
      lang-code="ar"
      video-id="REuSdi6U6Ms"
      frameBorder={0}
      allowFullScreen={1}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title="YouTube video player"
      src=""
    />
  </div>
</div>

    </>
  )
}

export default Lesson

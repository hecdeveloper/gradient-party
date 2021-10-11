import React from "react";

export const Sidebar = () => {
  return (
    <section className="sidebar">
      <h1 className="sidebar_title">css gradient generator</h1>
      <div className="actions_container">
        <section>
          <div>Style</div>
          <a className="botones" href="#">
            {" "}
            Linear
          </a>
          <a classN ame="botones" href="#">
            Radial
          </a>
        </section>
        <section className="arrowscontainer">
          <div>Direction</div>
          <div className="parte">
            <a className="botones" href="#">
              <svg
                id="icn"
                width="10"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.557 1.208a.692.692 0 01.651-.651L6.886.178a.776.776 0 01.811.682.691.691 0 01-.643.78l-4.129.275 6.292 6.292c.293.293.305.757.026 1.036-.28.279-.743.267-1.036-.026L1.915 2.925 1.64 7.054a.691.691 0 01-.78.643.776.776 0 01-.682-.811l.379-5.678z"></path>
              </svg>
            </a>
            <a className="botones" href="#">
              <svg
                id="icn"
                width="10"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.54.177a.692.692 0 01.92 0l4.283 3.747a.776.776 0 01.091 1.056.691.691 0 01-1.006.096L5.714 2.351v8.899c0 .414-.32.75-.714.75-.394 0-.714-.336-.714-.75V2.351L1.172 5.076A.691.691 0 01.166 4.98a.776.776 0 01.091-1.056L4.539.177z"></path>
              </svg>
            </a>
            <a className="botones" href="#">
              <svg
                id="icn"
                width="10"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.792.557a.692.692 0 01.651.651l.379 5.678a.776.776 0 01-.682.811.691.691 0 01-.78-.643l-.275-4.129-6.292 6.292c-.293.293-.757.305-1.036.026C.478 8.963.49 8.5.783 8.207l6.292-6.292-4.129-.275a.691.691 0 01-.643-.78.776.776 0 01.811-.682l5.678.379z"></path>
              </svg>
            </a>
          </div>
          <div className="parte">
            <a className="botones" href="#">
              <svg
                id="icn"
                width="12"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.177 5.46a.692.692 0 010-.92L3.924.256A.776.776 0 014.98.166a.691.691 0 01.096 1.006L2.351 4.286h8.899c.414 0 .75.32.75.714 0 .394-.336.714-.75.714H2.351l2.725 3.114a.691.691 0 01-.096 1.006.776.776 0 01-1.056-.091L.177 5.461z"></path>
              </svg>
            </a>
            <a className="botones" href="#">
              <svg
                id="icn"
                width="12"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.823 4.54a.692.692 0 010 .92L8.076 9.744a.776.776 0 01-1.056.091.691.691 0 01-.096-1.006l2.725-3.114H.75C.336 5.714 0 5.394 0 5c0-.394.336-.714.75-.714h8.899L6.924 1.172A.691.691 0 017.02.166a.776.776 0 011.056.091l3.747 4.282z"></path>
              </svg>
            </a>
          </div>
          <div className="parte">
            <a className="botones" href="#">
              <svg
                id="icn"
                width="10"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.208 9.443a.692.692 0 01-.651-.651L.178 3.114a.776.776 0 01.682-.811.691.691 0 01.78.643l.275 4.129L8.207.783C8.5.49 8.964.478 9.243.757c.279.28.267.743-.026 1.036L2.925 8.085l4.129.275c.402.027.69.376.643.78a.776.776 0 01-.811.682l-5.678-.379z"></path>
              </svg>
            </a>
            <a className="botones" href="#">
              <svg
                id="icn"
                width="10"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.46 11.823a.692.692 0 01-.92 0L.256 8.076A.776.776 0 01.166 7.02a.691.691 0 011.006-.096l3.114 2.725V.75c0-.414.32-.75.714-.75.394 0 .714.336.714.75v8.899l3.114-2.725a.691.691 0 011.006.096.776.776 0 01-.091 1.056l-4.282 3.747z"></path>
              </svg>
            </a>
            <a className="botones" href="#">
              <svg
                id="icn"
                width="10"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.443 8.792a.692.692 0 01-.651.651l-5.678.379a.776.776 0 01-.811-.682.691.691 0 01.643-.78l4.129-.275L.783 1.793C.49 1.5.478 1.036.757.757 1.037.478 1.5.49 1.793.783l6.292 6.292.275-4.129a.691.691 0 01.78-.643c.403.046.709.41.682.811l-.379 5.678z"></path>
              </svg>
            </a>
          </div>
        </section>
        <section>
          <div>Colors</div>
          <div className="parte">
            <a className="botones bgcolor" href="#">
              {" "}
              Color 1
            </a>
            <a className="botones bgcolor" href="#">
              Color 2
            </a>
            <a className="botones" href="#">
              Random
            </a>
          </div>
        </section>
        <section>
          <div>Output format</div>

          <a className="botones" href="#">
            hex
          </a>
          <a className="botones" href="#">
            Rgba
          </a>
        </section>
        <section>
          <a className="big-btn" href="#">
            Get CSS
          </a>
        </section>
      </div>
    </section>
  );
};

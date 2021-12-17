import React from "react";
import style from "./PageHeader.module.scss";

const PageHeader = ({ title }) => {

  return (
    <div className={style.headerOuterDiv}>
      <div className={style.logoDiv}>
        <h2>
            {title}
        </h2>
      </div>
      <div className={style.headerRightDiv}>
        <div className={style.navbarDiv}>
            <ul>
              <li>
                Home
              </li>
              <li>
                Categories
              </li>
              <li>
                Contact Us
              </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default PageHeader;
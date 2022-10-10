import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import { modal_porfolio_response } from "./Data/modal_profolio_response";
import downloadIcon from "../Components/assets/Image/download-icon.svg";
import infoIcon from "../Components/assets/Factsheet-img/information.png"

function About() {
  const [modalResponsedata, setModalResponsedata] = useState([]);

  useEffect(() => {
    setModalResponsedata(modal_porfolio_response.folio_last_publish_data);
  }, []);
 
  return (
    <div>
      <div className="Modal_table_container">
        <p className="performance">Performance as on 30 Sep 2022</p>
        <div className="modal_table">
          <table>
            <thead className="Modal_table_head">
              <th>Risk Profile</th>
              <th>1Y Return</th>
              <th>3Y Return <img src={infoIcon} className="info_icon" alt="infoIcon"/></th>
              <th>5Y Return <img src={infoIcon} className="info_icon" alt="infoIcon"/></th>
              <th>Since Mar 2022 <img src={infoIcon} className="info_icon" alt="infoIcon"/></th>
            </thead>
            <tbody>
              {modalResponsedata.map((item) => {
                return (
                  <tr>
                    <td>{item.risk_profile_name}</td>
                    <td>{item.returns[0]?.value} %</td>
                    <td>{item.returns[1]?.value} %</td>
                    <td>{item.returns[2]?.value} %</td>
                    <td>{item.returns[3]?.value} %</td>

                    <td>
                      <img
                        src={downloadIcon}
                        alt="i"
                        className="download_img"
                      />
                    </td>
                  </tr>
                );
              })}

            </tbody>
          </table>
        </div>
        <div className="para">
          <p className="allocation_framework">
            {" "}
            <span>Click here </span>to understand our asset allocation framework
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

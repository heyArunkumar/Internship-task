import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";

import { Insight_response } from "./Data/Insight_response";
import downloadIcon from "../Components/assets/Image/download-icon.svg";

function InsightsViewAll() {

  const [insightResponse, setInsightResponse] = useState([]);

  useEffect(() => {
    setInsightResponse(Insight_response.insights);
  }, []);
  console.log("modalResponse=====", insightResponse);
  return (
    <div>
      <div className="Modal_table_container">
        <p className="performance">Performance as on 30 Sep 2022</p>
        <div className="modal_table">
          <table>
            <thead className="Modal_table_head">
              <th>Name</th>
              <th>Tags</th>
              <th>Date</th>
              <th>Shared With</th>
             
            </thead>
            <tbody>
              {insightResponse?.map((item) => {
                console.log("item",item)
                return (
                  <tr key={item.id}>
                   
                   <td>{item.recommendation_details.name}</td>
                   <td className="tags">
                   {item?.tags?.map((data)=>{return <span className="table_Tags">{data?.tag_value}</span>})}
                    </td>
                   <td>{item.created_date}</td>
                   
                    <td>{item.shared_with?.length ===0 ? "Not Shared" : item.shared_with}</td>
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

              {/* <tr>
              <td>Conservative</td>
              <td>12.2 %</td>
              <td>12.3 %</td>
              <td>10.1 %</td>
              <td>9.9 %</td>
              <td>
             
                   <img src={downloadIcon} alt="i" className="download_img"/>
                  
              </td>
            </tr>

            <tr>
              <td>Conservative</td>
              <td>12.2 %</td>
              <td>12.3 %</td>
              <td>10.1 %</td>
              <td>9.9 %</td>
              <td>
              
                    <img src={downloadIcon} alt="i" className="download_img"/>
                
              </td>
            </tr>
            <tr>
              <td>Conservative</td>
              <td>12.2 %</td>
              <td>12.3 %</td>
              <td>10.1 %</td>
              <td>9.9 %</td>
              <td>
              
                  <img src={downloadIcon} alt="i" className="download_img"/>
             
              </td>
            </tr>
            <tr>
              <td>Conservative</td>
              <td>12.2 %</td>
              <td>12.3 %</td>
              <td>10.1 %</td>
              <td>9.9 %</td>
              <td>
             
                  <img src={downloadIcon} alt="i" className="download_img"/>
                 
              </td>
            </tr>
            <tr>
              <td>Conservative</td>
              <td>12.2 %</td>
              <td>12.3 %</td>
              <td>10.1 %</td>
              <td>9.9 %</td>
              <td>
            
                  <img src={downloadIcon} alt="i" className="download_img"/>
                  
              </td>
            </tr>
             */}
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

export default InsightsViewAll;

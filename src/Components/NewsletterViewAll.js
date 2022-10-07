import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import { Newsletter_response } from "./Data/Newsletter_response";
import downloadIcon from "../Components/assets/Image/download-icon.svg";
import { getFormattedDate } from "../Components/Utils/Date";
import refreshIcon from "../Components/assets/Factsheet-img/refresh.png";
import sampleFile from "../Components/Data/sample.pdf";

function InsightsViewAll() {
  const [newsletterResponse, setNewsletterResponse] = useState([]);

  useEffect(() => {
    setNewsletterResponse(Newsletter_response.recommendations);
  }, []);
  console.log("NewsletterViewAll=====", newsletterResponse);
  return (
    <div>
      <div className="Modal_table_container newsletter_table_container">
        <p className="performance">
          <img src={refreshIcon} alt="refresh_icon" /> REFRESH
        </p>
        <div className="modal_table">
          <table className="newsletter_viewAll">
            <thead className="Modal_table_head">
              <th>Name</th>
              <th>Tags</th>
              <th>Date</th>
              <th>Shared With</th>
            </thead>
            <tbody>
              {newsletterResponse?.map((item) => {
                console.log("item", item);
                return (
                  <tr key={item.id}>
                    <td>{item.recommendation_details.name}</td>
                    <td className="tags">
                      {item?.tags?.map((data) => {
                        return (
                          <span className="table_Tags">{data?.tag_value}</span>
                        );
                      })}
                    </td>
                    <td>{getFormattedDate(item.created_date)}</td>

                    <td>
                      {item.shared_with?.length === 0
                        ? "Not Shared"
                        : item.shared_with}
                    </td>
                    <td>
                      <a href={sampleFile} download target="blank">
                        <img
                          src={downloadIcon}
                          alt="i"
                          className="download_img"
                        />
                      </a>
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

export default InsightsViewAll;

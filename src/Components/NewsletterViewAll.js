import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import { Newsletter_response } from "./Data/Newsletter_response";
import downloadIcon from "../Components/assets/TableIcon/download (4).png";
import { getFormattedDate } from "../Components/Utils/Date";
import refreshIcon from "../Components/assets/Factsheet-img/refresh.png";
import sampleFile from "../Components/Data/sample.pdf";
import searchIcon from "../Components/assets/TableIcon/loupe.png";
import filterIcon from "../Components/assets/TableIcon/filter.png";
import dateIcon from "../Components/assets/TableIcon/date.png";
import sortIcon from "../Components/assets/TableIcon/sort.png";

function InsightsViewAll() {
  const [newsletterResponse, setNewsletterResponse] = useState([]);

  useEffect(() => {
    setNewsletterResponse(Newsletter_response.recommendations);
  }, []);
  console.log("NewsletterViewAll=====", newsletterResponse);
  return (
    <div>
      <div className="Modal_table_container newsletter_table_container">
        <p className="performance_refresh">
          <img src={refreshIcon} alt="refresh_icon" /> REFRESH
        </p>
        <div className="modal_table">
          <table className="newsletter_viewAll">
            <thead className="Modal_table_head">
              <th>Name <img src={searchIcon} alt="searchicon " className="table_icon"/> </th>
              <th>Tags <img src={filterIcon} alt="searchicon " className="table_icon"/> </th>
              <th>Date<span><img src={sortIcon} alt="searchicon " className="sort_icon"/></span> <img src={dateIcon} alt="searchicon " className="table_icon"/> </th>
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
          <p className="allocation_framework pagination">
            {" "}
            Item per page: 10  <span>1-10 of 34</span> {`< >`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InsightsViewAll;

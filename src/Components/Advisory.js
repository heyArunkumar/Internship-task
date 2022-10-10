import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import "../Components/Home.css";
import { Link } from "react-router-dom";
import {  Tooltip } from "antd";
import telegramImg from "../Components/assets/Image/telegram.png";
import { modal_porfolio_response } from "./Data/modal_profolio_response";
import { Newsletter_response } from "../Components/Data/Newsletter_response";
import { Insight_response } from "./Data/Insight_response";

import { fact_sheet_Data } from "./Data/Factsheet";
import sampleFile from "../Components/Data/sample.pdf";
import { getFormattedDate } from "../Components/Utils/Date";
import download from "../Components/assets/TableIcon/download (4).png"


function Advisory() {
  const [modalResponse, setModalResponse] = useState([]);
  const [factSheetdata, setFactSheetData] = useState([]);
  const [insightResponse, setInsightResponse] = useState([]);
  const [newsletterResponse, setNewsletterResponse] = useState([]);

 

  useEffect(() => {
    setModalResponse(modal_porfolio_response.folio_last_publish_data);
    setFactSheetData(fact_sheet_Data.fact_sheet);
    setInsightResponse(Insight_response.insights);
    setNewsletterResponse(Newsletter_response.recommendations);
  }, []);

  console.log("Newsletter_response", Newsletter_response);
  const InsightslicedArray = insightResponse.slice(0, 4);
  const newsletterslicedArray = newsletterResponse.slice(0, 4);
  return (
    <div>
      <div className="fintsoInsightsWrapper">
        <div className="fintsoInsights">
          <img src={telegramImg} alt="telegramImg" className="telegramImg" />
          <span>
            Join the
            <span className="FintsoChannel">
              Fintso Insights Telegram Channel{" "}
            </span>{" "}
            for market research, expert views and actionable insights.
          </span>
        </div>
      </div>
      <div className="tableOne">
        <div className="model_portfolio">
          <div className="thead">
            <div className="table_head">
              <div className="tableHeading model_heading">
                <div>
                  <span className="table_data_heading ">Model portfolio</span>
                  <span className="table_data_para">
                    Performance as on 30 Sep 2021
                  </span>
                </div>
                <div className="view_all">
                  <Link to="/Advisory/ModelPortfolios">View All</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="table_wrapperr">
            <table className="modal_table Modal_table">
              <tbody>
                <tr>
                  {modalResponse.map((item) => {
                    return (
                      <td>
                        <div>
                          <div className="table_data_para modalYear">
                            Risk Profile
                          </div>
                          <div className="table_data_heading modalValue">
                            {item.risk_profile_name}
                          </div>
                        </div>
                      </td>
                    );
                  })}
                </tr>

                <tr>
                  {modalResponse.map((item) => {
                    console.log("item", item.returns[0]);
                    return (
                      <td>
                        <div>
                          <div className="table_data_para modalYear">
                            {item.returns[0].year}
                          </div>
                          <div className="table_data_heading modalValue">
                            {item.returns[0].value} %
                          </div>
                        </div>
                      </td>
                    );
                  })}
             
                </tr>
               

                <tr>
                  <td>
                    <div>
                      <div>
                        <a href={sampleFile} download target="blank">
                          <img
                            src={download}
                            alt="download"
                            className="download_img"
                          />
                        </a>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div>
                      <div>
                        <a href={sampleFile} download target="blank">
                          <img
                            src={download}
                            alt="download"
                            className="download_img"
                          />
                        </a>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div>
                      <div>
                        <a href={sampleFile} download target="blank">
                          <img
                            src={download}
                            alt="download"
                            className="download_img"
                          />
                        </a>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div>
                      <div>
                        <a href={sampleFile} download target="blank">
                          <img
                            src={download}
                            alt="download"
                            className="download_img"
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div>
                        <a href={sampleFile} download target="blank">
                          <img
                            src={download}
                            alt="download"
                            className="download_img"
                          />
                        </a>
                      </div>
                    </div>
                    
                  </td>

                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
        <div className="model_portfoli">
          <div className="table_wrapper">
            <div className="thead">
              <div className="table_head">
                <div className="tableHeading">
                  <div>
                    <span className="table_data_heading">Newsletters</span>
                    <span className="table_data_para">34 Unread</span>
                  </div>
                  <div className="view_all">
                    <Link to="/Advisory/Newsletters">View All</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="newsletter_table_wrapper">
              <table className="newsletter_table">
                <thead className="table_thead">
                  <th style={{ paddingLeft: "13px" }}>Newsletters</th>
                  <th>Tags</th>
                  <th>Date</th>
                  <th></th>
                </thead>
                <tbody className="table_body newsletter_table_body">
                  {newsletterslicedArray.map((item) => {
                    return (
                      <tr>
                        <td>
                          <Tooltip placement="bottomLeft" title={item.recommendation_details.name} >
                            {item.recommendation_details.name}
                          </Tooltip>
                        </td>
                        {/* <td className="News_name">
                          {item.recommendation_details.name}
                        </td> */}

                        <td>
                          {item?.tags?.length > 1 ? (
                            <div>
                              <span className="table_Tags">
                                {item?.tags[0]?.tag_value}
                              </span>
                              <span>+{item?.tags?.length - 1}</span>
                            </div>
                          ) : (
                            <span className="table_Tags">
                              {item?.tags[0]?.tag_value}
                            </span>
                          )}
                        </td>
                        <td className="table_date">
                          {getFormattedDate(item.created_date)}
                        </td>
                        <td>
                          <div>
                            <div>
                              <a href={sampleFile} download target="blank">
                                <img
                                  src={download}
                                  alt="i"
                                  className="download_img"
                                />
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}

                  {/* <tr>
                    <td className="News_name">Newsletter_test4</td>
                    <td>
                      <span className="table_Tags">Newsletter Test</span>
                    </td>
                    <td className="table_date">31 May 2022</td>
                    <td>
                      <div>
                        <div>
                          <img
                            src={downloadIcon}
                            alt="i"
                            className="download_img"
                          />
                        </div>
                      </div>
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td className="News_name">Newsletter_test4</td>
                    <td>
                      <span className="table_Tags">Newsletter Test</span>
                    </td>
                    <td className="table_date">31 May 2022</td>
                    <td>
                      <div>
                        <div>
                          <img
                            src={downloadIcon}
                            alt="i"
                            className="download_img"
                          />
                        </div>
                      </div>
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td className="News_name">Newsletter_test4</td>
                    <td>
                      <span className="table_Tags">Newsletter Test</span>
                    </td>
                    <td className="table_date">31 May 2022</td>
                    <td>
                      <div>
                        <div>
                          <img
                            src={downloadIcon}
                            alt="i"
                            className="download_img"
                          />
                        </div>
                      </div>
                    </td>
                  </tr> */}
                  {/* <tr>
                    <td className="News_name">Newsletter_test4</td>
                    <td>
                      <span className="table_Tags">Newsletter Test</span>
                    </td>
                    <td className="table_date">31 May 2022</td>
                    <td>
                      <div>
                        <div>
                          <img
                            src={downloadIcon}
                            alt="i"
                            className="download_img"
                          />
                        </div>
                      </div>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="tableOne">
        <div className="model_portfolio">
          <div className="thead">
            <div className="table_head">
              <div className="tableHeading">
                <div>
                  <span className="table_data_heading">Factsheets</span>
                </div>
              </div>
            </div>
          </div>
          <div className="fact_sheet">
            <div className="fact_sheet_container">
              {factSheetdata.map((item) => {
                return (
                  <div className="fact_sheet_box">
                    <div>
                      <img src={item.img} alt="i" className="factsheet_img" />
                    </div>
                    <div>
                      <div className="fund_type">{item.fund_type}</div>
                      <div className="fund_Scheme">{item.scheme}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="model_portfoli">
          <div className="table_wrapper">
            <div className="thead">
              <div className="table_head">
                <div className="tableHeading">
                  <div>
                    <span className="table_data_heading">Insights</span>
                    <span className="table_data_para">9 Unread</span>
                  </div>
                  <div className="view_all">
                    <Link to="/Advisory/Insights">View All</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="newsletter_table_wrapper">
              <table className="newsletter_table">
                <thead className="table_thead">
                  <th style={{ paddingLeft: "13px" }}>Name</th>
                  <th>Tags</th>
                  <th>Date</th>
                  <th></th>
                </thead>
                <tbody className="table_body insight_table_body">
                  {InsightslicedArray.map((item) => {
                    return (
                      <tr>
                        <td>
                          <Tooltip placement="bottomLeft" title={item.recommendation_details.name} >
                            {item.recommendation_details.name}
                          </Tooltip>
                        </td>
                        <td>
                          {item?.tags?.length > 1 ? (
                            <div>
                              <span className="table_Tags">
                                {item?.tags[0]?.tag_value}
                              </span>
                              <span className="table_tags_value"> +{item?.tags?.length - 1}</span>
                            </div>
                          ) : (
                            <span className="table_Tags">
                              {item?.tags[0]?.tag_value}
                            </span>
                          )}
                        </td>
                        <td className="table_date">
                          {getFormattedDate(item.created_date)}
                        </td>
                        <td>
                          <div>
                            <div>
                              <a href={sampleFile} download target="blank">
                                <img
                                  src={download}
                                  alt="i"
                                  className="download_img"
                                />
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advisory;

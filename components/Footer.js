import React from 'react';
import { Logo } from './logo';

const Footer = ({ blok }) => {

  const footerCategories = blok.footerCategories;

  return (
    <section className="wrapper__section p-0">
      <div className="wrapper__section__components">
        <footer>
          <div className="wrapper__footer bg__footer-dark pb-0">
            <div className="container">
              <div className="row">

                {footerCategories.map((item, index) => (
                  <div className="col-md-3">
                    <ul className="widget__footer">
                      <li className="dropdown-footer" key={index}>
                        <>
                          <h4 className="footer-title">
                            {item.title}
                            <span className="fa fa-angle-down"></span>
                          </h4>
                          <ul className="list-unstyled option-content is-hidden">
                            {item.navItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <a href="#">{subItem.navItem}</a>
                              </li>
                            ))}
                          </ul>
                        </>
                      </li>

                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <Logo color="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper__footer-bottom bg__footer-dark">
            <div className="container ">
              <div className="row">
                <div className="col-md-12">
                  <div className="border-top-1 bg__footer-bottom-section">
                    <ul className="list-inline link-column">
                      <li className="list-inline-item">
                        <a href="/contact-us.html">
                          contact us
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#"> terms of use</a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          adchoice
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="/about-us.html">
                          about us
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          newsletters
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          sitemap
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          magrenvi store
                        </a>
                      </li>
                    </ul>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <span>
                          ©2020 Razorfish · All rights reserved
                        </span>
                      </li>
                    </ul>

                  </div>

                </div>
              </div>
            </div>

          </div>
        </footer>
      </div>
    </section>
  )
}


export default Footer
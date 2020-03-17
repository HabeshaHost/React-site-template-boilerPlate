import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './index.css';
const FooterPage = () => {
  return (
    <MDBFooter className="footer font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="8">
          <p id="description"><b>Habasha Insight</b> is a digital innovation agency. Our team of Ethiopia-based and remotely in 27 different countries, digital strategists, UX designers, and software developers works nationwide, converging at our home base in Addis Ababa, Ethiopia. Our passion is to transform processes, enhance experiences, and empower people for service-based businesses who want to win. We help our clients unlock potential and fuel growth with effortless user experiences and strategic technology tools.</p>
                        
          </MDBCol>
          <MDBCol md="4">
            <ul>
            <li className="list-unstyled">
            <p>Ethiopia:
            <a target="_blank" class="teal-link" href="https://www.google.com/maps?q=Birhane+Africa+Mall,+Addis+Ababa,+Ethiopia">
                                            Birhane Africa Mall<br/> Suite 230<br/> Addis Ababa, Ethiopia
            </a></p>
            <p>Washington, D.C </p>
            <p>Dallas, Texas </p>
            </li>
              <li className="list-unstyled">
                                <p> CEO Dr. Sisima Kornelios :
                                    <a href="tel:+251947325111">
                                        +251 947325111
                                    </a>
                                </p>
              </li>
              <li className="list-unstyled">
                                <p>
                                    <a href="mailto:habesha.insight@gmail.com">
                                        habesha.insight@gmail.com
                                    </a>
                                </p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> Habesha Insight </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
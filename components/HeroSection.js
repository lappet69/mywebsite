import React, { Component } from "react";

export default class HeroSection extends Component {
  render() {
    return (
      <div>
        {/* <!-- ======= Hero Section ======= --> */}
        <section
          id="hero"
          className="d-flex flex-column justify-content-center"
        >
          <div className="container" data-aos="zoom-in" data-aos-delay="100">
            <h1>Andre Sinabariba</h1>
            <p>
              I'm {""}
              <span
                className="typed"
                data-typed-items="Full-Stack Web Developer, Freelancer"
              />
            </p>
            <div className="social-links">
              <a
                href="https://twitter.com/Andrelah10"
                target="_blank"
                className="twitter"
              >
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#" target="_blank" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/andresinabariba/"
                target="_blank"
                className="instagram"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a
                href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJNqspJSJNRWtqKPrCqRRbhMxpxrKKXQqZfrlRNhghwjRwlhlnZMmkZxPZHfFdfSVnjrMKg"
                target="_blank"
                className="google-plus"
              >
                <i className="bx bxl-google-plus"></i>
              </a>
              <a
                href="https://linkedin.com/in/andre-t-m-sinabariba-1302ba10b"
                target="_blank"
                className="linkedin"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </section>
        {/* <!-- End Hero --> */}
      </div>
    );
  }
}

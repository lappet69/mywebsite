import React from "react";

function About() {
  return (
    <div>
      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Tentang Saya</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <img src="assets/img/profile.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Web Developer &amp; Freelancer.</h3>
              {/* <p className="font-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Birthday:</strong> 19 Desember 1994
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Website:</strong> www.example.com
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Phone:</strong> +62-813-3569-3553
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>City:</strong> Tegal, Jawa Tengah
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Age:</strong> 26
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Degree:</strong> Bachelor
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Email:</strong> sinabariba.andre@gmail.com
                    </li>
                    <li>
                      <i className="icofont-rounded-right"></i>{" "}
                      <strong>Freelance:</strong> Available
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Officiis eligendi itaque labore et dolorum mollitia officiis
                optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et
                consectetur qui quia repellendus itaque neque. Aliquid amet
                quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                culpa magni laudantium dolores.
              </p>
            </div>
          </div>
        </div>
      </section>
      ;{/* <!-- End About Section --> */}
    </div>
  );
}

export default About;

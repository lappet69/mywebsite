import React from 'react'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Resume from "../components/Resume";
import Portofolio from "../components/Portofolio";
import Services from "../components/Services";
import Skill from "../components/Skill";
import FactSection from "../components/FactSection";
import Contact from "../components/Contact";
import dynamic from 'next/dynamic';
const DynamicComponent = dynamic(() => import('../components/HeroSection'))


export default function Home() {
  return (
    <div className="main">
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>Andre Sinabariba</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />

        {/* <!-- Favicons --> */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

        {/* <!-- Google Fonts --> */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />

        {/* <!-- Vendor CSS Files --> */}
        <link
          href="/assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link href="/assets/vendor/icofont/icofont.min.css" rel="stylesheet" />
        <link
          href="/assets/vendor/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link href="/assets/vendor/venobox/venobox.css" rel="stylesheet" />
        <link
          href="/assets/vendor/owl.carousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />

        {/* <!-- Template Main CSS File --> */}
        <link href="/assets/css/style.css" rel="stylesheet" />
      </Head>

      {/* <HeroSection /> */}
      <DynamicComponent/>
      <About />
      {/* <FactSection /> */}
      <Skill />
      <Resume />
      <Portofolio />
      <Services />
      <Contact />

      {/* <!-- End #main --> */}

      <a href="#" className="back-to-top">
        <i className="bx bx-up-arrow-alt"></i>
      </a>
      <div id="preloader"></div>

      {/* <!-- Vendor JS Files --> */}
      <script src="/assets/vendor/jquery/jquery.min.js"></script>
      <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="/assets/vendor/jquery.easing/jquery.easing.min.js"></script>
      <script src="/assets/vendor/php-email-form/validate.js"></script>
      <script src="/assets/vendor/waypoints/jquery.waypoints.min.js"></script>
      <script src="/assets/vendor/counterup/counterup.min.js"></script>
      <script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="/assets/vendor/venobox/venobox.min.js"></script>
      <script src="/assets/vendor/owl.carousel/owl.carousel.min.js"></script>
      <script src="/assets/vendor/typed.js/typed.min.js"></script>
      <script src="/assets/vendor/aos/aos.js"></script>

      {/* <!-- Template Main JS File --> */}
      <script src="/assets/js/main.js"></script>
    </div>
  );
}

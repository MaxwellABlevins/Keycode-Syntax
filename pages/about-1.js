import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';

const About1 = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="About Us" />

            <div className="about-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about-one.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="section-title">
                                    <h2>About Us</h2>
                                    <div className="bar"></div>
                                    <p>Our team includes web developers, designers, developers, digital marketers, and project managers who work together to deliver outstanding results for our clients. We have experience working with a wide range of industries, including Website Development, App Development, Game Development, Marketing, and E-Commerce/Amazon/Shopify, and we are experts in using the latest technologies and platforms to create cutting-edge solutions.</p>
                                </div>

                                <p>At Keycode Syntax, we understand that every business is unique, and we take a personalized approach to each project. We work closely with our clients to understand their needs and goals, and we create custom solutions that are tailored to their specific requirements.</p>

                                <p>We are committed to delivering high-quality results that exceed expectations, and we pride ourselves on our ability to complete projects on time and within budget. We are dedicated to providing exceptional customer service, and we are always available to answer any questions and address any concerns that our clients may have.</p>

                                <p>If you're looking for a digital agency that can help you take your business to the next level, look no further than Keycode Syntax. Contact us today to learn more about our services and to discuss your project.</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-inner-area">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Our History</h3>
                                    <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Our Mission</h3>
                                    <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Who We Are</h3>
                                    <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default About1;
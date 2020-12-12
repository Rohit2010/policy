import React from 'react'
import Category from './Category'
import Content from './Content'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'
import NavBar from './Navbar'


const Home = () => {
    return (
        <div>

            {/* Navbar */}
            <NavBar />
            {/* Navbar */}

            {/* Jumbotron */}
            <Jumbotron className="hero">
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
            </Jumbotron>
            {/* Jumbotron */}

            {/* Category */}
            <main className="cards">
                <Category title="Health Insurance" description=" This is a simple hero unit, a simple jumbotron-style" image="#" />
                <Category title="Life Insurancen" description=" This is a simple hero unit, a simple jumbotron-style" image="#" />
                <Category title="Investment Plans" description=" This is a simple hero unit, a simple jumbotron-style" image="#" />
                <Category title="Travel Insurance" description=" This is a simple hero unit, a simple jumbotron-style" image="#" />
                <Category title="Car Insurance" description=" This is a simple hero unit, a simple jumbotron-style" image="#" />
                <Category title="Bike Insurance" description=" This is a simple hero unit, a simple jumbotron-style" image="#" />
            </main>
            {/* Category */}

            {/* Text_Content */}
            <Content />
            {/* Text_Content */}

            {/* Footer */}

            <div className="div">
                <footer class="site-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <h6>Policy_provider</h6>
                                <p class="text-justify">We offer an Quick & Easy Insurance policies.</p>
                            </div>


                            <div class="col-xs-6 col-md-3">
                                <h6>Visit us</h6>
                                <ul class="footer-links">
                                    <li><a href="#">www.Policy_provider.com</a></li>

                                </ul>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-sm-6 col-xs-12">
                                {/* <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved <a href="http://Policy_provider.com/">Policy_provider</a> Design and Developed by
         <a href="https://www.instagram.com/webomega.tech/">WebOmega</a>.
            </p> */}
                            </div>


                        </div>
                    </div>
                </footer>
            </div>
            {/* Footer */}


        </div>
    )
}


export default Home;
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
// import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import '../App.css'
import Axios from 'axios'


class UserInput extends Component {
  state = {
    name: "",
    email: "",
    number: ""
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submit = (e) => {
    e.preventDefault()
    console.log(this.state)
    const access_token = "1000.b858d7007140cae97d1498dbf165c490.82e8eb89395801f7bb954320de04e455"
    Axios.post("https://apipolicy.herokuapp.com/savepolicy", {
      name:this.state.name,
      email:this.state.email,
      number:this.state.number
    }).then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  }
  render() {
    return (

    <div className="userinput">

      <Container className="container">
         
          <Col className="hello">
              <h1 style={{display:"flex", justifyContent:"center" , alignItems:"center"}}> Hello</h1>
          </Col>

          <Col>
            <div className="form"> 
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label> Full Name </Form.Label>
                  <Form.Control type="text" placeholder="your name" name="name" onChange={this.handleChange} value={this.state.name} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Your Email </Form.Label>
                  <Form.Control type="email" placeholder="@gmail.com" name="email" onChange={this.handleChange} value={this.state.email} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput2">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" placeholder="+91" name="number" onChange={this.handleChange} value={this.state.number} />
                </Form.Group>

                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>

                <Button className="submit" block onClick={this.submit} >
                  Submit
                </Button>

              </Form>
              
          </div>
        </Col>
        <Col>
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

        
        </Col>
      </Container>
    </div>

    )
  }
}


export default UserInput;
import { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Input } from 'react-toolbox/lib/input';
import { Checkbox } from 'react-toolbox/lib/checkbox';

import Section from '../Section'

import expertise from '../../expertise';

export default class Form extends Component {
  state = { name: '', phone: '', email: '', hint: '' };

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  render () {
    return (
  <Section>
      <Container>
        <Row>
          <Col md={4}>
            <Input className="form-input" type='text' label='Name'
              value={this.state.name}
              onChange={this.handleChange.bind(this, 'name')}
             />
          </Col>
          <Col md={4}>
            <Input className="form-input" type='text' label='Subject' />
          </Col>
          <Col md={4}>
            <Input className="form-input" type='email' label='Email'/>
          </Col>
        </Row>
        {/* <Input className="form-input" type='text' label='Message'
          multiline={true}
          rows={4}
          value={this.state.name}
          onChange={this.handleChange.bind(this, 'name')} /> */}
          {expertise.map((item, i)=><Checkbox
            className="expertise-check"
            key={i}
          checked={true}
          label={item.title}
          // onChange={this.handleChange.bind(this, 'check1')}
        />)}
      </Container>
    <style global jsx>{`
      .expertise-check div.checked__2vmMX {
        background-color: #DAA520;
        border-color: #DAA520;
      }
      .form-input label {
        color: black !important;
      }
      .form-input span {
        border: 0.2px black solid;
      }
      .form-input span::after {
        background-color: black;
      }
      .form-input span::before {
        background-color: black;
      }
    `}</style>
    {/* <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        width: 100%;
        font-weight : bold ;
        line-height: 1.15;
        font-size:3em ;
        text-align: center;
      }
    `}</style> */}
  </Section>
);
  }
}

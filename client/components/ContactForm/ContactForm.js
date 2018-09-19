import { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Input } from "react-toolbox/lib/input";
import { Checkbox } from "react-toolbox/lib/checkbox";
import { Mutation } from "react-apollo";

import { CREATE_ENQUIRY } from "../../lib/graphql/mutations";
import Loading from "../LoadingPosts"

import Section from "../Section";
import Buttonv2 from "../Buttonv2";

import expertise from "../../../expertise";

const initState = {
  name: "",
  phone: "",
  email: "",
  hint: "",
  successMessage: "",
  errorMessage: "",
  ...expertise
    .map(item => ({ [item.key]: false }))
    .reduce((a, b) => Object.assign(a, b), {})
};
export default class Form extends Component {
  state = {
    ...initState
  };

  handleChange = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };

  render() {
    const { successMessage, errorMessage } = this.state;
    return (
      <Mutation
        mutation={CREATE_ENQUIRY}
        onCompleted={() => this.setState({
            ...initState,
            successMessage: "Thank you for your message. It has been sent."
          })
        }
        onError={error => {
          console.log(error);
          this.setState({
            errorMessage: "There was an issue submitting your request try again later."
          });
        }}
      >
        {(createEnquiry, { loading }) => (
          <Section>
            <Container>
              {this.props.showHeader && <h2>Contact Us</h2>}
              <form
                id="contact-form"
                onSubmit={e => {
                  e.preventDefault();
                  e.stopPropagation();
                  const serviceChosen = expertise.some(item => this.state[item.key] === true)
                  if (serviceChosen) {
                    this.setState({
                      errorMessage: ""
                    });
                    createEnquiry({ variables: this.state });
                  } else {
                    this.setState({
                      errorMessage: "Select at least one service"
                    });
                  }
                }}
              >
                <Row>
                  <Col md={4}>
                    <Input
                      className="form-input"
                      type="text"
                      label="Name"
                      required
                      value={this.state.name}
                      onChange={this.handleChange.bind(this, "name")}
                    />
                  </Col>
                  <Col md={4}>
                    <Input
                      className="form-input"
                      type="text"
                      label="Phone"
                      required
                      value={this.state.phone}
                      onChange={this.handleChange.bind(this, "phone")}
                    />
                  </Col>
                  <Col md={4}>
                    <Input
                      className="form-input"
                      type="email"
                      label="Email"
                      required
                      value={this.state.email}
                      onChange={this.handleChange.bind(this, "email")}
                    />
                  </Col>
                </Row>
                <p>Services Needed *</p>
                {expertise.map(item => (
                  <Checkbox
                    className={`expertise-check-${item.key}`}
                    key={item.key}
                    checked={this.state[item.key]}
                    label={item.title}
                    onChange={this.handleChange.bind(this, [item.key])}
                  />
                ))}
                {/* <Input className="form-input" type='text' label='Message' required multiline
                  rows={3}
                  value={this.state.name}
                  onChange={this.handleChange.bind(this, 'name')}
                /> */}
                {/* <br /> */}
                <div style={{ textAlign: "center" }}>
                  {errorMessage && (
                    <p className="error-text">{errorMessage}</p>
                  )}
                  {errorMessage ? null : successMessage ? (
                    <p>{successMessage}</p>
                  ) : (
                    <br />
                  )}
                  {loading ?
                    <Loading />
                    :
                    <Buttonv2 type="submit" text="Submit" dark />
                  }
                </div>
              </form>
            </Container>
            <style global jsx>{`
              .error-text {
                color: red;
                transition: all 0.5s ease-in;
              }
              .form-input input,
              .form-input textarea {
                border-bottom: 1px black solid;
              }
              :root {
                --color-primary: #daa520 !important;
              }
            `}</style>
          </Section>
        )}
      </Mutation>
    );
  }
}

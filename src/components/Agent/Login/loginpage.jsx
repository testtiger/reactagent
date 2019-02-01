import React, { Component } from "react";
import { makeRestcall } from "../Rest/agent-rest-client.js";
import { Redirect } from "react-router-dom";
import {
  Card,
  Container,
  Grid,
  Button,
  Checkbox,
  Form,
  Header,
  Image
} from "semantic-ui-react";
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", isLoggedin: false };
    sessionStorage.setItem("isLoggedin", false);
    sessionStorage.setItem("token", null);
    /***this.state = { username: "", password: "", isLoggedin: false };

    sessionStorage.setItem("isLoggedin", false);
    sessionStorage.setItem("token", null);*/

    /*** sessionStorage.setItem("token", window.localStorage.getItem("token"));
    sessionStorage.setItem(
      "isLoggedin",
      window.localStorage.getItem("isLoggedin")
    );

    this.state = {
      username: "",
      password: "",
      isLoggedin: sessionStorage.getItem("isLoggedin") === "true" ? true : false
    };*/
  }

  componentDidMount = () => {};

  onChange(e) {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  }
  onChangeusr(e) {
    console.log(e.target.name);
    this.setState({ username: e.target.value });
  }
  onChangepwd(e) {
    console.log(e.target.name);
    this.setState({ password: e.target.value });
  }
  validate() {
    if (!this.state.username) {
      alert("Enter user name");
    }
    if (!this.state.password) {
      alert("Enter password");
    }
    if (this.state.password && this.state.username) {
      alert("Username & password cannot be empty");
    }
  }
  login(e) {
    e.preventDefault();
    var self = this;
    if (this.state.password && this.state.username) {
      var payload = this.state;
      payload["grant_type"] = "password";

      makeRestcall("POST", "/ccagentui/v1/login", payload).then(response => {
        console.log(response);
        if (response.access_token) {
          window.localStorage.setItem(
            "token",
            "Bearer " + response.access_token
          );
          window.localStorage.setItem("isLoggedin", true);
          sessionStorage.setItem("token", "Bearer " + response.access_token);
          sessionStorage.setItem("isLoggedin", true);
          self.setState({ isLoggedin: true });
        } else {
          alert("Invalid user Name & password");
        }
      });
    }
  }

  render() {
    if (this.state.isLoggedin) {
      return <Redirect to="/dashboard/" />;
    } else {
      return (
        <Container>
          <Grid>
            <Grid.Column width={4}>
              <Card>
                <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
              </Card>
            </Grid.Column>

            <Grid.Column width={9}>
              <Header> Login with service/service</Header>
              <Form>
                <Form.Field>
                  <label>UserName :</label>
                  <input
                    focus
                    placeholder="User Name"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange.bind(this)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password :</label>
                  <input
                    focus
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange.bind(this)}
                  />
                </Form.Field>
                <Button positive type="submit" onClick={this.login.bind(this)}>
                  Login
                </Button>
              </Form>
            </Grid.Column>
            <Grid.Column width={3} />
          </Grid>
        </Container>
      );
    }
  }
}

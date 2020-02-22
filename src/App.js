import React from "react";
import logo from "./logo.svg";
import "antd/dist/antd.css";
import bus from "./bus.json";
import dining from "./dining.json";
import "./App.css";
import Logo from "./logo.webp";
import {
  Layout,
  Menu,
  Card,
  Button,
  Icon,
  Row,
  Col,
  Switch,
  Statistic,
  Badge
} from "antd";

import { Table } from "reactstrap";

import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBreadSlice } from "@fortawesome/free-solid-svg-icons";

import { Typography } from "antd";

import { Radio } from "antd";
const { Text } = Typography;

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countDown: [
        { days: 0, hours: 0, min: 0, sec: 0 },
        { days: 0, hours: 0, min: 0, sec: 0 },
        { days: 0, hours: 0, min: 0, sec: 0 },
        { days: 0, hours: 0, min: 0, sec: 0 },
        { days: 0, hours: 0, min: 0, sec: 0 },
        { days: 0, hours: 0, min: 0, sec: 0 },
        { days: 0, hours: 0, min: 0, sec: 0 },
        { days: 0, hours: 0, min: 0, sec: 0 }
      ],
      indexFromLAB: null,
      indexFromSangareddy: null,
      indexFromLingampally: null,
      indexToLAB: null,
      indexToSangareddy: null,
      indexToLingampally: null
    };
  }

  componentDidMount() {
    let x = new Date();
    var dayCode = x.getDay();
    var hours = x.getHours();
    var minutes = x.getMinutes();
    bus.FROMIITH.LAB.every((time, index) => {
      let hrs = parseInt(time.split(":")[0], 10);
      let min = parseInt(time.split(":")[1], 10);
      if (hrs > hours || (hrs == hours && min > minutes)) {
        this.setState({ indexFromLAB: index });
        return false;
      }
      return true;
    });
    bus.FROMIITH.SANGAREDDY.every((time, index) => {
      let hrs = parseInt(time.split(":")[0], 10);
      let min = parseInt(time.split(":")[1], 10);
      if (hrs > hours || (hrs == hours && min > minutes)) {
        this.setState({ indexFromSangareddy: index });
        return false;
      }
      return true;
    });
    bus.FROMIITH.LINGAMPALLYW.every((time, index) => {
      let hrs = parseInt(time.split(":")[0], 10);
      let min = parseInt(time.split(":")[1], 10);
      if (hrs > hours || (hrs == hours && min > minutes)) {
        this.setState({ indexFromLingampally: index });
        return false;
      }
      return true;
    });
    bus.TOIITH.LAB.every((time, index) => {
      let hrs = parseInt(time.split(":")[0], 10);
      let min = parseInt(time.split(":")[1], 10);
      if (hrs > hours || (hrs == hours && min > minutes)) {
        this.setState({ indexToLAB: index });
        return false;
      }
      return true;
    });
    bus.TOIITH.SANGAREDDY.every((time, index) => {
      let hrs = parseInt(time.split(":")[0], 10);
      let min = parseInt(time.split(":")[1], 10);
      if (hrs > hours || (hrs == hours && min > minutes)) {
        this.setState({ indexToSangareddy: index });
        return false;
      }
      return true;
    });
    bus.TOIITH.LINGAMPALLYW.every((time, index) => {
      let hrs = parseInt(time.split(":")[0], 10);
      let min = parseInt(time.split(":")[1], 10);
      if (hrs > hours || (hrs == hours && min > minutes)) {
        this.setState({ indexToLingampally: index });
        return false;
      }
      return true;
    });
    // update every second
    this.interval = setInterval(() => {
      const dates = [
        this.calculateCountdown(
          "2020-02-22T" +
            bus.FROMIITH.LAB[this.state.indexFromLAB] +
            ":00+05:30"
        ),
        this.calculateCountdown(
          "2020-02-22T" +
            bus.FROMIITH.SANGAREDDY[this.state.indexFromSangareddy] +
            ":00+05:30"
        ),
        this.calculateCountdown(
          "2020-02-22T" +
            bus.FROMIITH.LINGAMPALLYW[this.state.indexFromLingampally] +
            ":00+05:30"
        ),
        this.calculateCountdown(
          "2020-02-22T" + bus.TOIITH.LAB[this.state.indexToLAB] + ":00+05:30"
        ),
        this.calculateCountdown(
          "2020-02-22T" +
            bus.TOIITH.SANGAREDDY[this.state.indexToSangareddy] +
            ":00+05:30"
        ),
        this.calculateCountdown(
          "2020-02-22T" +
            bus.TOIITH.LINGAMPALLYW[this.state.indexToLingampally] +
            ":00+05:30"
        ),
        this.calculateCountdown("2020-02-22T" + "10:59" + ":00+05:30"),
        this.calculateCountdown("2020-02-22T" + "10:59" + ":00+05:30")
      ];
      let newCountDownInfo = [];
      dates.forEach((date, index) => {
        newCountDownInfo.push(dates[index]);
      });
      console.log(newCountDownInfo);
      this.setState({ countDown: newCountDownInfo });
    }, 1000);
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0
    };

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    console.log("Done");
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  }

  render() {
    return (
      <Layout className="layout">
        <Header style={{ textAlign: "center" }}>
          <div className="logo" style={{ display: "inline" }}>
            <Text className="title">IITH Dashboard</Text>
          </div>
        </Header>
        <Content style={{ padding: "2% 2% 0px 2%" }}>
          <Row gutter={20}>
            <Col span={12}>
              <Card
                title={
                  <div>
                    <Icon type="calendar" />
                    <span style={{ paddingLeft: "10px" }}>Bus Schedules</span>
                  </div>
                }
                bordered={false}
                className="mainCard"
              >
                <Row>
                  <Col span={12}>
                    <Card
                      title={
                        <div style={{ textAlign: "center" }}>From IITH</div>
                      }
                    >
                      <Row style={{ paddingBottom: "10px" }}>
                        <Col
                          span={8}
                          style={{ paddingTop: "0px", textAlign: "center" }}
                        >
                          <Text
                            style={{
                              textTransform: "uppercase",
                              color: "black",
                              fontSize: "0.9rem"
                            }}
                          >
                            Main Gate
                          </Text>
                        </Col>
                        <Col span={8} style={{ textAlign: "center" }}>
                          <Statistic
                            prefix={
                              <Text
                                style={{
                                  fontSize: "0.95rem"
                                }}
                              >
                                at
                              </Text>
                            }
                            style={{ fontSize: "0.8rem" }}
                            value={bus.FROMIITH.LAB[this.state.indexFromLAB]}
                            valueStyle={{ fontSize: "1rem" }}
                          />
                        </Col>
                        <Col
                          span={8}
                          style={{ paddingTop: "0px", textAlign: "center" }}
                        >
                          <Badge
                            count={
                              "in " +
                              this.state.countDown[0].hours +
                              "h " +
                              this.state.countDown[0].min +
                              "m " +
                              this.state.countDown[0].sec +
                              "s"
                            }
                            style={{
                              backgroundColor: "#52c41a",
                              fontSize: "0.9rem"
                            }}
                          />
                        </Col>
                      </Row>
                      <Row style={{ paddingBottom: "10px" }}>
                        <Col
                          span={8}
                          style={{ paddingTop: "0px", textAlign: "center" }}
                        >
                          <Text
                            style={{
                              textTransform: "uppercase",
                              color: "black",
                              fontSize: "0.9rem"
                            }}
                          >
                            Sangareddy
                          </Text>
                        </Col>
                        <Col span={8} style={{ textAlign: "center" }}>
                          <Statistic
                            prefix={
                              <Text
                                style={{
                                  fontSize: "0.95rem"
                                }}
                              >
                                at
                              </Text>
                            }
                            value={
                              bus.FROMIITH.SANGAREDDY[
                                this.state.indexFromSangareddy
                              ]
                            }
                            valueStyle={{ fontSize: "1rem" }}
                          />
                        </Col>
                        <Col
                          span={8}
                          style={{ paddingTop: "0px", textAlign: "center" }}
                        >
                          <Badge
                            count={
                              "in " +
                              this.state.countDown[1].hours +
                              "h " +
                              this.state.countDown[1].min +
                              "m " +
                              this.state.countDown[1].sec +
                              "s"
                            }
                            style={{
                              backgroundColor: "#52c41a",
                              fontSize: "0.9rem"
                            }}
                          />
                        </Col>
                      </Row>
                      <Row style={{ paddingBottom: "10px" }}>
                        <Col
                          span={8}
                          style={{ paddingTop: "0px", textAlign: "center" }}
                        >
                          <Text
                            style={{
                              textTransform: "uppercase",
                              color: "black",
                              fontSize: "0.9rem"
                            }}
                          >
                            Lingampally
                          </Text>
                        </Col>
                        <Col span={8} style={{ textAlign: "center" }}>
                          <Statistic
                            prefix={
                              <Text
                                style={{
                                  fontSize: "0.95rem"
                                }}
                              >
                                at
                              </Text>
                            }
                            value={
                              bus.FROMIITH.LINGAMPALLYW[
                                this.state.indexFromLingampally
                              ]
                            }
                            valueStyle={{ fontSize: "1rem" }}
                          />
                        </Col>
                        <Col
                          span={8}
                          style={{ paddingTop: "0px", textAlign: "center" }}
                        >
                          <Badge
                            count={
                              "in " +
                              this.state.countDown[2].hours +
                              "h " +
                              this.state.countDown[2].min +
                              "m " +
                              this.state.countDown[2].sec +
                              "s"
                            }
                            style={{
                              backgroundColor: "#52c41a",
                              fontSize: "0.9rem"
                            }}
                          />
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card
                      title={<div style={{ textAlign: "center" }}>To IITH</div>}
                    >
                      <Row style={{ paddingBottom: "10px" }}>
                        <Col
                          span={8}
                          style={{ paddingTop: "0px", textAlign: "center" }}
                        >
                          <Text
                            style={{
                              textTransform: "uppercase",
                              color: "black",
                              fontSize: "0.9rem"
                            }}
                          >
                            Main Gate
                          </Text>
                        </Col>
                        <Col span={8} style={{ textAlign: "center" }}>
                          <Statistic
                            prefix={
                              <Text
                                style={{
                                  fontSize: "0.95rem"
                                }}
                              >
                                at
                              </Text>
                            }
                            style={{ fontSize: "0.8rem" }}
                            value={bus.TOIITH.LAB[this.state.indexToLAB]}
                            valueStyle={{ fontSize: "1rem" }}
                          />
                        </Col>
                        <Col
                          span={8}
                          style={{ paddingTop: "0px", textAlign: "center" }}
                        >
                          <Badge
                            count={
                              "in " +
                              this.state.countDown[3].hours +
                              "h " +
                              this.state.countDown[3].min +
                              "m " +
                              this.state.countDown[3].sec +
                              "s"
                            }
                            style={{
                              backgroundColor: "#52c41a",
                              fontSize: "0.9rem"
                            }}
                          />
                        </Col>
                      </Row>
                      <Row style={{ paddingBottom: "10px" }}>
                        <Col
                          span={8}
                          style={{ paddingTop: "0px", textAlign: "center" }}
                        >
                          <Text
                            style={{
                              textTransform: "uppercase",
                              color: "black",
                              fontSize: "0.9rem"
                            }}
                          >
                            Sangareddy
                          </Text>
                        </Col>
                        <Col span={8} style={{ textAlign: "center" }}>
                          <Statistic
                            prefix={
                              <Text
                                style={{
                                  fontSize: "0.95rem"
                                }}
                              >
                                at
                              </Text>
                            }
                            value={
                              bus.TOIITH.SANGAREDDY[
                                this.state.indexToSangareddy
                              ]
                            }
                            valueStyle={{ fontSize: "1rem" }}
                          />
                        </Col>
                        <Col
                          span={8}
                          style={{ paddingTop: "0px", textAlign: "center" }}
                        >
                          <Badge
                            count={
                              "in " +
                              this.state.countDown[4].hours +
                              "h " +
                              this.state.countDown[4].min +
                              "m " +
                              this.state.countDown[4].sec +
                              "s"
                            }
                            style={{
                              backgroundColor: "#52c41a",
                              fontSize: "0.9rem"
                            }}
                          />
                        </Col>
                      </Row>
                      <Row style={{ paddingBottom: "10px" }}>
                        <Col
                          span={8}
                          style={{ paddingTop: "0px", textAlign: "center" }}
                        >
                          <Text
                            style={{
                              textTransform: "uppercase",
                              color: "black",
                              fontSize: "0.9rem"
                            }}
                          >
                            Lingampally
                          </Text>
                        </Col>
                        <Col span={8} style={{ textAlign: "center" }}>
                          <Statistic
                            prefix={
                              <Text
                                style={{
                                  fontSize: "0.95rem"
                                }}
                              >
                                at
                              </Text>
                            }
                            value={
                              bus.TOIITH.LINGAMPALLYW[
                                this.state.indexToLingampally
                              ]
                            }
                            valueStyle={{ fontSize: "1rem" }}
                          />
                        </Col>
                        <Col
                          span={8}
                          style={{ paddingTop: "0px", textAlign: "center" }}
                        >
                          <Badge
                            count={
                              "in " +
                              this.state.countDown[5].hours +
                              "h " +
                              this.state.countDown[5].min +
                              "m " +
                              this.state.countDown[5].sec +
                              "s"
                            }
                            style={{
                              backgroundColor: "#52c41a",
                              fontSize: "0.9rem"
                            }}
                          />
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
                <br />
                <Card title="Upcoming" bodyStyle={{ padding: 0 }}>
                  <Row style={{ height: "20px" }}>
                    <Col span={7}>
                      <Card
                        size="small"
                        style={{
                          textAlign: "center",
                          borderLeft: "0",
                          borderRight: "0"
                        }}
                      >
                        LINGAMPALLY - IITH
                      </Card>
                    </Col>
                    <Col span={17}>
                      <Row>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            12:30
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            12:45
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            13:00
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            13:15
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row style={{ height: "20px" }}>
                    <Col span={7}>
                      <Card
                        size="small"
                        style={{
                          textAlign: "center",
                          borderLeft: "0",
                          borderRight: "0"
                        }}
                      >
                        LINGAMPALLY - IITH
                      </Card>
                    </Col>
                    <Col span={17}>
                      <Row>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            12:30
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            12:45
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            13:00
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            13:15
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row style={{ height: "20px" }}>
                    <Col span={7}>
                      <Card
                        size="small"
                        style={{
                          textAlign: "center",
                          borderLeft: "0",
                          borderRight: "0"
                        }}
                      >
                        LINGAMPALLY - IITH
                      </Card>
                    </Col>
                    <Col span={17}>
                      <Row>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            12:30
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            12:45
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            13:00
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            13:15
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row style={{ height: "20px" }}>
                    <Col span={7}>
                      <Card
                        size="small"
                        style={{
                          textAlign: "center",
                          borderLeft: "0",
                          borderRight: "0"
                        }}
                      >
                        LINGAMPALLY - IITH
                      </Card>
                    </Col>
                    <Col span={17}>
                      <Row>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            12:30
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            12:45
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            13:00
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            13:15
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row style={{ height: "20px" }}>
                    <Col span={7}>
                      <Card
                        size="small"
                        style={{
                          textAlign: "center",
                          borderLeft: "0",
                          borderRight: "0"
                        }}
                      >
                        LINGAMPALLY - IITH
                      </Card>
                    </Col>
                    <Col span={17}>
                      <Row>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            12:30
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            12:45
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            13:00
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            13:15
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row style={{ height: "20px" }}>
                    <Col span={7}>
                      <Card
                        size="small"
                        style={{
                          textAlign: "center",
                          borderLeft: "0",
                          borderRight: "0"
                        }}
                      >
                        LINGAMPALLY - IITH
                      </Card>
                    </Col>
                    <Col span={17}>
                      <Row>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            12:30
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            12:45
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            13:00
                          </Card>
                        </Col>
                        <Col span={6}>
                          <Card
                            size="small"
                            style={{
                              textAlign: "center",
                              borderLeft: "0",
                              borderRight: "0"
                            }}
                          >
                            13:15
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title={
                  <div>
                    <Icon type="coffee" />
                    <span style={{ paddingLeft: "10px" }}>Mess Menu</span>
                    <Radio.Group
                      defaultValue="a"
                      buttonStyle="solid"
                      style={{ float: "right" }}
                    >
                      <Radio.Button value="a">LDH</Radio.Button>
                      <Radio.Button value="b">UDH</Radio.Button>
                    </Radio.Group>
                  </div>
                }
                bordered={false}
                className="mainCard"
              >
                <Card
                  title={
                    <div>
                      <div style={{ float: "left" }}>Current Meal</div>
                      <div style={{ float: "right" }}>
                        <Badge count={"Ends in 25 min"} />
                      </div>
                    </div>
                  }
                  bodyStyle={{ padding: "0" }}
                >
                  <Row>
                    <Col span={4}>
                      <Card size="small">Regular</Card>
                    </Col>
                    <Col span={20}>
                      <Card size="small">Thing, Thing, THing</Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={4}>
                      <Card size="small">Extras</Card>
                    </Col>
                    <Col span={20}>
                      <Card size="small">Thing, Thing, THing</Card>
                    </Col>
                  </Row>
                </Card>{" "}
                <br />
                <Card
                  title={
                    <div>
                      <div style={{ float: "left" }}>Upcoming Meal</div>
                      <div style={{ float: "right" }}>
                        <Badge
                          style={{ backgroundColor: "#52c41a" }}
                          count={"Starts in 25 min"}
                        />
                      </div>
                    </div>
                  }
                  bodyStyle={{ padding: "0" }}
                >
                  <Row>
                    <Col span={4}>
                      <Card size="small">Regular</Card>
                    </Col>
                    <Col span={20}>
                      <Card size="small">Thing, Thing, THing</Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={4}>
                      <Card size="small">Extras</Card>
                    </Col>
                    <Col span={20}>
                      <Card size="small">Thing, Thing, THing</Card>
                    </Col>
                  </Row>
                </Card>{" "}
              </Card>
              <br />
              <Card
                title={
                  <div>
                    <Icon type="experiment" />
                    <span style={{ paddingLeft: "10px" }}>My Courses</span>
                  </div>
                }
                bordered={false}
                className="mainCard"
              >
                <Row>
                  <Col span={4}>
                    <Card size="small">CS2233</Card>
                  </Col>
                  <Col span={16}>
                    <Card size="small">Introduction to Data Structures</Card>
                  </Col>
                  <Col span={4}>
                    <Card size="small">10:30</Card>
                  </Col>
                </Row>
                <Row>
                  <Col span={4}>
                    <Card size="small">CS2233</Card>
                  </Col>
                  <Col span={16}>
                    <Card size="small">Introduction to Data Structures</Card>
                  </Col>
                  <Col span={4}>
                    <Card size="small">10:30</Card>
                  </Col>
                </Row>
                <Row>
                  <Col span={4}>
                    <Card size="small">CS2233</Card>
                  </Col>
                  <Col span={16}>
                    <Card size="small">Introduction to Data Structures</Card>
                  </Col>
                  <Col span={4}>
                    <Card size="small">10:30</Card>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>© 2020 Team Kautilya</Footer>
      </Layout>
    );
  }
}

export default App;

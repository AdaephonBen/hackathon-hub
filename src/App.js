import React from "react";
import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";
import Logo from "./logo.webp";
import {
  Layout,
  Menu,
  Card,
  Button,
  Icon,
  Table,
  Row,
  Col,
  Switch,
  Statistic,
  Badge
} from "antd";
import axios from "axios";
import { Typography } from "antd";

import { Radio } from "antd";
const { Text } = Typography;

const { Header, Content, Footer } = Layout;

class App extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header style={{ textAlign: "center" }}>
          <div className="logo" style={{ display: "inline" }}>
            <Text className="title">IITH Dashboard</Text>
          </div>
        </Header>
        <Content style={{ padding: "2% 4% 0px 4%" }}>
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
                <Row gutter={8}>
                  <Col span={12}>
                    <Card
                      title={
                        <div style={{ textAlign: "center" }}>From IITH</div>
                      }
                    >
                      <Row gutter={10}>
                        <Col
                          span={8}
                          style={{ paddingTop: "7px", textAlign: "center" }}
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
                            style={{ fontSize: "0.8rem" }}
                            value={112893}
                          />
                        </Col>
                        <Col
                          span={8}
                          style={{ paddingTop: "7px", textAlign: "center" }}
                        >
                          <Badge
                            count={"in 15 min"}
                            style={{
                              backgroundColor: "#52c41a",
                              fontSize: "0.9rem"
                            }}
                          />
                        </Col>
                      </Row>
                      <Row gutter={10}>
                        <Col
                          span={8}
                          style={{ paddingTop: "7px", textAlign: "center" }}
                        >
                          <Text
                            style={{
                              textTransform: "uppercase",
                              color: "black",
                              fontSize: "1rem"
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
                            value={112893}
                          />
                        </Col>
                        <Col
                          span={8}
                          style={{ paddingTop: "7px", textAlign: "center" }}
                        >
                          <Badge
                            count={"in 15 min"}
                            style={{
                              backgroundColor: "#52c41a",
                              fontSize: "0.9rem"
                            }}
                          />
                        </Col>
                      </Row>
                      <Row gutter={10}>
                        <Col
                          span={8}
                          style={{ paddingTop: "7px", textAlign: "center" }}
                        >
                          <Text
                            style={{
                              textTransform: "uppercase",
                              color: "black",
                              fontSize: "1rem"
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
                            value={112893}
                          />
                        </Col>
                        <Col
                          span={8}
                          style={{ paddingTop: "7px", textAlign: "center" }}
                        >
                          <Badge
                            count={"in 15 min"}
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
                      <Row gutter={10}>
                        <Col
                          span={8}
                          style={{ paddingTop: "7px", textAlign: "center" }}
                        >
                          <Text
                            style={{
                              textTransform: "uppercase",
                              color: "black",
                              fontSize: "1rem"
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
                            value={112893}
                          />
                        </Col>
                        <Col
                          span={8}
                          style={{ paddingTop: "7px", textAlign: "center" }}
                        >
                          <Badge
                            count={"in 15 min"}
                            style={{
                              backgroundColor: "#52c41a",
                              fontSize: "0.9rem"
                            }}
                          />
                        </Col>
                      </Row>
                      <Row gutter={10}>
                        <Col
                          span={8}
                          style={{ paddingTop: "7px", textAlign: "center" }}
                        >
                          <Text
                            style={{
                              textTransform: "uppercase",
                              color: "black",
                              fontSize: "1rem"
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
                            value={112893}
                          />
                        </Col>
                        <Col
                          span={8}
                          style={{ paddingTop: "7px", textAlign: "center" }}
                        >
                          <Badge
                            count={"in 15 min"}
                            style={{
                              backgroundColor: "#52c41a",
                              fontSize: "0.9rem"
                            }}
                          />
                        </Col>
                      </Row>
                      <Row gutter={10}>
                        <Col
                          span={8}
                          style={{ paddingTop: "7px", textAlign: "center" }}
                        >
                          <Text
                            style={{
                              textTransform: "uppercase",
                              color: "black",
                              fontSize: "1rem"
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
                            value={112893}
                          />
                        </Col>
                        <Col
                          span={8}
                          style={{ paddingTop: "7px", textAlign: "center" }}
                        >
                          <Badge
                            count={"in 15 min"}
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
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title={
                  <div>
                    <Icon type="food" />
                    <span style={{ paddingLeft: "10px" }}>Bus Schedules</span>
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
                Card content
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

import { Card, Row, Col, Timeline } from "antd";

export const Synopsis = () => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Card title="Project Summary" extra={<p>More</p>}>
          <p>Timeline: 2011 - 2017</p>
          <p>Timeline: 2012 ground breaking</p>
          <p>Project: Weligama Bay Marriott Resort and Spa</p>
          <p>Key Stats: 200 keys</p>
          <p>350,000sqft of built up space</p>
          <p>Cost to build USD42,000,000</p>
          <p>Equity: USD13,000,000</p>
          <p>debt: USD29,000,000</p>
          <p>Sold: USD60,000,000 - Enterprise Value</p>
          <p>Per Key Sale price: USD310,000</p>
          <p>Return on Equity: 166% - profit: USD20,000,000</p>
        </Card>
      </Col>
      <Col span={12}>
        <Card style={{ height: "100%" }}>
          <Timeline>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Solve initial network problems 2015-09-01
            </Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>
              Network problems being solved 2015-09-01
            </Timeline.Item>
          </Timeline>
        </Card>
      </Col>
    </Row>
  );
};

import { Row, Col, Divider } from "antd";
import { ListResource } from "./listResource";

export const Contractors = () => {
  const dataMain = [
    {
      title: "East West Engineering Services",
      description: `Main Contractor`,
    },
    {
      title: "Fentons",
      description: `Electrical Constractor`,
    },
    {
      title: "Shin Nippon",
      description: `Plumbing Contractor`,
    },
    {
      title: "Fentons",
      description: `ELV`,
    },
    {
      title: "Fentons",
      description: `Fire Life & Safety`,
    },
  ];

  const dataOther = [
    {
      title: "Trade Promoters",
      description: `Generators`,
    },
    {
      title: "Thyssenkrupp",
      description: `Elevators`,
    },
    {
      title: "UTE",
      description: `Sewage and Water Treatment Plant`,
    },
    {
      title: "VK Enterprises",
      description: `gypsum board Ceiling & Walls`,
    },
    {
      title: "Allied Metals",
      description: `Kitchen Contractors`,
    },
  ];

  return (
    <div>
      <Row>
        <Col span={12}>
          <Divider>{`Main`}</Divider>
          <ListResource data={dataMain} />
        </Col>
        <Col span={12}>
          <Divider>{`Other`}</Divider>
          <ListResource data={dataOther} />
        </Col>
        <Col span={24}></Col>
      </Row>
    </div>
  );
};

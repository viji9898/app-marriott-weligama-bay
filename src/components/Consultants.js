import { Row, Col, Divider } from "antd";
import { ListResource } from "./listResource";

export const Consultants = () => {
  const dataFeasibilityResearch = [
    {
      title: "HVS",
      description: `Feasibility & Market Research`,
    },
    {
      title: "Navneet Nagpal",
      description: `Feasibility & Market Research`,
    },
    {
      title: "Alexander Wallce",
      description: `Feasibility & Market Research`,
    },
    {
      title: "Marriott Feasibility Team",
      description: `Feasibility & Market Research`,
    },
  ];

  const dataDesign = [
    {
      title: "Wilson Associates",
      description: `Interior Design`,
    },
    {
      title: "Belt Collins",
      description: `Landscaping`,
    },
    {
      title: "ACOP",
      description: `Architect`,
    },
    {
      title: "NCD",
      description: `Architect`,
    },
    {
      title: "Studio906 - Thialand",
      description: `Architect`,
    },
    {
      title: "Photonics",
      description: `Lighting Design`,
    },
    {
      title: "Kapila",
      description: `Mechanical Consultant`,
    },
    {
      title: "Kosala",
      description: `Electrical Consultant`,
    },
    {
      title: "HPG Consulting",
      description: `Facilities Planning`,
    },
    {
      title: "Light @ Works",
      description: `Lighting Consultants`,
    },
    {
      title: "Marriott Technical Services",
      description: `Technical Consultants`,
    },
  ];

  const dataOther = [
    {
      title: "Access Project Management",
      description: `Project Management`,
    },
    {
      title: "Archtype",
      description: `Project Management`,
    },

    {
      title: "AXIS",
      description: `Facade Consultants`,
    },
    {
      title: "NCD",
      description: `Structural Consultants`,
    },
    {
      title: "Ultracon",
      description: `Post Tension Consultants`,
    },

    {
      title: "C-Energy",
      description: `LEED Consultants`,
    },
    {
      title: "Peoples Media Network",
      description: `AV Consultants`,
    },

    {
      title: "Apara Hospitality",
      description: `Management agreement negotiation`,
    },
  ];

  return (
    <div>
      <Row>
        <Col span={12}>
          <Divider>{`Feasibility & Research`}</Divider>
          <ListResource data={dataFeasibilityResearch} />
          <Divider>{`Other`}</Divider>
          <ListResource data={dataOther} />
        </Col>
        <Col span={12}>
          <Divider>{`Design`}</Divider>
          <ListResource data={dataDesign} />
        </Col>
        <Col span={24}></Col>
      </Row>
    </div>
  );
};

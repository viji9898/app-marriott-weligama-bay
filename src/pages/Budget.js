import { Table, Divider } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

export const Budget = () => {
  const [budgetData, setBudgetData] = useState([
    { breakdown: [{ download: [] }] },
  ]);

  useEffect(() => {
    axios
      .get(".netlify/functions/getBudget", {
        baseURL: "/",
      })
      .then(function (response) {
        setBudgetData(response.data.data);
      });
  }, []);

  const columns = [
    { title: "Key", dataIndex: "key", key: "key" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "USD", dataIndex: "usd", key: "usd" },
    { title: "LKR", dataIndex: "lkr", key: "lkr" },
  ];

  const breakdown = (record, index, indent, expanded) => {
    const data = budgetData[index].breakdown;
    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        expandedRowRender={(record) => {
          return record.downloads.map((download) => {
            return <p>{download.title}</p>;
          });
        }}
      />
    );
  };

  return (
    <div>
      <Divider></Divider>
      <p>download as a googlesheet</p>
      <Table
        className="components-table-demo-nested"
        columns={columns}
        dataSource={budgetData}
        expandedRowRender={breakdown}
      />
    </div>
  );
};

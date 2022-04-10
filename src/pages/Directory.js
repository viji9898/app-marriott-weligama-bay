import { Consultants } from "../components/Consultants";
import { Contractors } from "../components/Contractors";
import { Divider } from "antd";
export const Directory = () => {
  return (
    <div>
      <Divider>Consultants</Divider>
      <Consultants />
      <Divider>Contractors</Divider>
      <Contractors />
      <Divider>Suppliers</Divider>
    </div>
  );
};

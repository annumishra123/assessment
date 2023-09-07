import React from 'react'; 
import { Typography } from "antd";
const { Title } = Typography;
  
export const TitleBar=()=>
{
  return (
      <div>
    <Title className="TitleName">  Search GIST API Data</Title>
    </div>
  );
};
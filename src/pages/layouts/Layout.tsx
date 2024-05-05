import React, { useState } from "react";
import { Header } from "./Header";
// import SideBar from "./SideBar";
import styled from "@emotion/styled";
import SideBar from "./SideBar";

interface layoutProps {
  isHeaderAuth?: boolean;
  hasSideBar?: boolean;
}
export const Layout = ({
  children,
  isHeaderAuth,
  hasSideBar,
}: React.PropsWithChildren<layoutProps>) => {
  const [isSBOpen, setisSBOpen] = useState(false);
  const openSideBar = () => {
    setisSBOpen(!isSBOpen);
  };
  return (
    <>
      <Header
        isHeaderAuth={isHeaderAuth}
        openSideBar={openSideBar}
        isSBOpen={isSBOpen}
      />
      {hasSideBar && <SideBar isSBOpen={isSBOpen} />}
      {hasSideBar ? <ChildDiv isSBOpen={isSBOpen}>{children}</ChildDiv> : children}
    </>
  );
};

type ChildProps = {
  isSBOpen:boolean;
}
const ChildDiv = styled.div<ChildProps>`
  margin-top: 80px;
  margin-left: ${(props) => (props.isSBOpen ? "240px" : "120px")};
  margin-right:40px;
  transition: margin-left 0.5s ease;
  transition-delay: ${(props) => (props.isSBOpen ? "-0.2s" : "0.1s")};
`;

import React from "react";
import "./MainPage.scss";
import { Header } from "../../components/UI/Header/Header";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";
import { MainContent } from "./MainContent";

export const MainPage = () => {
  return (
    <>
      <Header />
      <div className="MainPage">
        <LeftSide/>
        
       <MainContent/>

       <RightSide/>
      </div>
    </>
  );
};

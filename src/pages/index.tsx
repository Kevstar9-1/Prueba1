import React from "react";
import Header from '../components/header';
import Myself from '../components/myself';
import Projects from "@kev/utils/api";
import CallAction from '../components/callAction';
import Fooster from '../components/fooster';

export default function Home() {
  return (
    <div>
      <Header/>
      <br />
      <Myself/>
      <br />
      <Projects/>
      <br />
      <CallAction/>
      <br />
      <Fooster/>
      <br />
    </div>
  );
}
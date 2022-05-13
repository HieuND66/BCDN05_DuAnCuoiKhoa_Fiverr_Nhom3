// import Header from "../component/Header/Header";
import { Route } from 'react-router-dom';
import { Fragment, useEffect } from "react";
import Header from '../header/Header';
// import HomeCarousel from './Layout/HomeCarousel';


export const HomeTemplate = (props) => {
  useEffect(() =>{
    window.scrollTo(0, 0);
  })
  const {Component, ...resProps} = props
  return <Route {...resProps} render={(propsRoute) => {
    // Fragment: Gần giống div nhưng sẽ ko hiển thị trên giao diện thẻ
    return <Fragment>
      <Header {...propsRoute} />
      {/* <HomeCarousel/>/ */}
      <Component {...propsRoute} />
      footer
    </Fragment>
  }} />
}

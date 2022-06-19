// import Header from "../component/Header/Header";
import { Route } from 'react-router-dom';
import { Fragment, useEffect } from "react";
import Header from '../header/Header';


 const HomeTemplate = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  const { Component, ...resProps } = props
  return <Route {...resProps} render={(propsRoute) => {
    return <Fragment>
      <Header {...propsRoute} />
      <Component {...propsRoute} />
      footer
    </Fragment>
  }} />
}

export default HomeTemplate;
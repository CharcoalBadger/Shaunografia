import React from "react";
import "./transition.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PageTransition = ({ children }) => {
  return (
    <TransitionGroup>
      <CSSTransition
        key={children.props.location.key}
        timeout={300}
        classNames="page"
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition;

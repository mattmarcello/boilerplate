import React from "react";
import { Link } from "react-router";

import styles from "./Application.css";

export default class Application extends React.Component {
  render() {
    return <div className={ styles.application }>
      <h1>This is an application container</h1>
      { this.props.children }
    </div>
  }
}


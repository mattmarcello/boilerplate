import React from "react";

import styles from "./Application.css";

export default class Application extends React.Component {
  render() {
    return <div className={ styles.application }>
      <h1>This is an applidjfcation container</h1>
      { this.props.children }
    </div>
  }
}

import * as React from "react";
import styles from "./HelloWorld.module.scss";
import type { IHelloWorldProps } from "./IHelloWorldProps";
import { PrimaryButton } from "@fluentui/react";

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    const { hasTeamsContext } = this.props;

    return (
      <section
        className={`${styles.helloWorld} ${
          hasTeamsContext ? styles.teams : ""
        }`}
      >
        <PrimaryButton>Click</PrimaryButton>
      </section>
    );
  }
}

import { ComponentType, useContext } from "react";
import { DIContainerContext } from "/src/hooks/use-dependency-injection-container";
import { APP_DEP } from "/src/config/configure-dependencies";

export const withInjection =
  <IProps, IInjectedKeys extends keyof Partial<IProps>>(
    Component: ComponentType<IProps>,
    diConfig: Record<string, APP_DEP>
  ): ComponentType<Omit<IProps, IInjectedKeys>> =>
  // eslint-disable-next-line react/display-name
  (props: Omit<IProps, IInjectedKeys>) => {
    const diContainer = useContext(DIContainerContext);
    if (diContainer == null) {
      throw new Error("DIContainerContext not provided");
    }

    const dependencyInjectionProps = Object.entries(diConfig).reduce(
      (acc, [propName, dependencyName]) => {
        const dependency = diContainer[dependencyName];
        return {
          ...acc,
          [propName]: dependency,
        };
      },
      {}
    );

    return <Component {...(props as IProps)} {...dependencyInjectionProps}></Component>;
  };

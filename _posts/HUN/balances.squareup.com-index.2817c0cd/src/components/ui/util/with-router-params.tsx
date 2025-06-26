import { ComponentType } from "react";
import { useParams } from "react-router-dom";

export const withRouterParams =
  <IProps extends Record<string, unknown>, IParamKeys extends keyof Partial<IProps>>(
    Component: ComponentType<IProps>,
    propsToParam: Record<IParamKeys, string>
  ): ComponentType<Omit<IProps, IParamKeys>> =>
  // eslint-disable-next-line react/display-name
  (props: Omit<IProps, IParamKeys>) => {
    const params = useParams();
    const paramsMappedToProps = Object.entries(propsToParam).reduce(
      (acc, [propName, paramName]): Record<IParamKeys, string> => {
        const paramString = paramName as string;
        const value = params[paramString];
        if (value == null) {
          throw new Error(`param '${paramString}' does not exist`);
        }

        return {
          ...acc,
          [propName]: value,
        };
      },
      {} as Record<IParamKeys, string>
    );
    return <Component {...(props as IProps)} {...paramsMappedToProps} />;
  };

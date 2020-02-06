import checkPropTypes from "check-prop-types";

export const findByTestAttr = (component, attribute) => {
  const element = component.find(`[data-test='${attribute}']`);
  return element;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );

  return propsErr;
}
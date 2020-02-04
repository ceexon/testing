export const findByTestAttr = (component, attribute) => {
  const element = component.find(`[data-test='${attribute}']`);
  return element;
};

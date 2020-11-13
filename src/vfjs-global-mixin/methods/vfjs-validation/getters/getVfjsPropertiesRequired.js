/** getVfjsPropertiesRequired
  @function
  @description Get all errors of type required
  @param [errors] array
  @return
    An array of the properties in the errors array
    were the error property 'keyword' was 'required'.
*/
function getVfjsPropertiesRequired(errors) {
  if (!errors) {
    return [];
  }

  return errors.reduce((required, error) => {
    if (error.keyword === 'required') {
      if (error.params && error.params.missingProperty) {
        const key = error.params.missingProperty;
        const parent = String(error.dataPath)
          .substr(1)
          .replace(/\//g, '.');
        const propertyPath = parent ? `${parent}.${key}` : key;

        if (required.indexOf(propertyPath) === -1) {
          required.push(propertyPath);
        }
      }
    }

    return required;
  }, []);
}

export default getVfjsPropertiesRequired;

const verifyRegexExpression = (expression: string) => {
  try {
    new RegExp(expression);
    return true;
  } catch (e) {
    return false;
  }
};

export { verifyRegexExpression };

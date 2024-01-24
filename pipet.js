const pipet = (input) => ({
  operations: [],
  add: function (operation) {
    this.operations.push(operation);
    return this;
  },
  execute: async function () {
    return await this.operations.reduce(async (result, operation) => {
      const currentResult = await result;
      return operation(currentResult);
    }, Promise.resolve(input));
  },
});

module.exports = pipet;

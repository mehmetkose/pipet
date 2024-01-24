const pipet = require("./pipet");

describe("pipet", () => {
  it("should apply transformations in the correct order", async () => {
    const data = [1, 2, 3, 4, 5];

    const addTwo = (arr) => arr.map((num) => num + 2);
    const squareAsync = async (arr) => arr.map((num) => num * num);

    const result = await pipet(data).add(addTwo).add(squareAsync).execute();

    expect(result).toEqual([9, 16, 25, 36, 49]);
  });

  it("should handle an empty input array", async () => {
    const data = [];

    const doubleAsync = async (arr) => arr.map((num) => num * 2);

    const result = await pipet(data).add(doubleAsync).execute();

    expect(result).toEqual([]);
  });

  it("should handle synchronous and asynchronous operations", async () => {
    const data = [1, 2, 3, 4, 5];

    const addTwo = (arr) => arr.map((num) => num + 2);
    const squareAsync = async (arr) => arr.map((num) => num * num);

    const result = await pipet(data)
      .add(addTwo)
      .add(squareAsync)
      .add(addTwo)
      .execute();

    expect(result).toEqual([11, 18, 27, 38, 51]);
  });
});

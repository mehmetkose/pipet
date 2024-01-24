# pipet

A simple npm package for creating lazy, chainable, and reusable pipes for data transformation and processing.

## Installation

You can install `pipet` using npm:

```bash
npm install pipet
```


## Usage

```javascript
const pipet = require('pipet');

const data = [1, 2, 3, 4, 5];

const addTwo = (arr) => arr.map((num) => num + 2);
const squareAsync = async (arr) => arr.map((num) => num * num);
const filterEvenAsync = async (arr) => arr.filter(async (num) => num % 2 === 0);

(async () => {
  const result = await pipet(data)
    .add(addTwo)
    .add(squareAsync)
    .add(filterEvenAsync)
    .execute();

  console.log(result); // Output: [6, 18]
})();

```


## API

`pipet(input)`

Creates a new pipet instance with the specified input.

`pipet.add(operation)`

Adds a data transformation operation to the pipeline.

`pipet.execute()`

Executes the pipeline and returns the transformed data.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Mehmet Kose (2024)
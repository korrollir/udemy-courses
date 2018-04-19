# Runtime Complexity
- Describes the performance of an algorithm
- How much more processing power/time is required to run your algorithm if we double inputs?

### String Reverse
- Each additional character = 1 step through the 1 loop.
- This would be `n`, or 'linear' runtime. (1:1 relationship between output and processing to complete it)

### Steps
- Iterative approach
  * As 'steps' increased by 1, we had to do way, way more stuff, or (n*n) things total.
  * This would be N^2, or quadratic runtime.

### Common runtimes
- Constant time: `1`
  * No matter how many elements are being worked with, the operation will always take the same amount of time

- Logarithmic time: `log(n)`
  * You have this if doubling the number of elements you are iterating over doesn't double the amount of work.
  * Always assume that searching operations are `log(n)`

- Linear time: `n`
  * Iterating through all the elements in a collection of data.
  * If you see a for loop spanning from `0` to `array.length`, it is probably `n` or linear time.

- Quasilinear time: `n * log(n)`
  * You have this if doubling the number of elements you are iterating over doesn't double the amount of work.
  * Always assume that any sorting operation is `n * log(n)`

- Quadratic time: `n ^ 2`
  * Every element in a collection has to be compared to every other element.
  * 'The handshake problem': One additional person will have to introduce themselves to every single other person.

- Exponential time: `2 ^ n`
  * If you add a 'single' element to a collection, the processing power required doubles.
  * One of the worst case scenarios.

### Big 'O' Notation
- O(n) -> Linear
- O(1) -> Constant
- O(n^2) -> Quadratic

### Identifying Runtime Complexity
- Iterating with a simple `for` loop through a single collection?
  * Probably `O(n)`

- Iterating through half a collection?
  * Still `O(n)`.  There are no constants in runtime.

- Iterating through two different collections with separate `for` loops?
  * `O(n + m)`

- Two nested `for` loops iterating over the same collection?
  * `O(n ^ 2)`

- Two nested `for` loops iterating over different collections?
  * `O(n * m)`

- Sorting?
  * `O(n * log(n))`

- Searching a sorted array?
  * `O(log(n))`

### Space Complexity
- How much more memory is required by doubling the problem set?
- May be different than runtime complexity.
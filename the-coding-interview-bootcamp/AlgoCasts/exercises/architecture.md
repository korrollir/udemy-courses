# Architecture questions

### How would you design Twitter?
  - High level notes on how to answer
    * There is no right answer.
      - Twitter and similar size are built by hundreds of employees
    * Every interviewer will expect a different answer
      - Ask for what area to focus on
    * Focus is usually on the data model
      - Primarly how to store the data within a database
    * Don't mention specific technologies!!
      - This is a poor way to answer this question.
      - Anyone can pick out a list of technologies
      - A better way is to explain why you would choose a set of technologies
        * List the attributes/qualities or how it addresses the primary problems
    * Draw stuff
      - Draw out the UI to open as a talking point
    * Talk
      - This question is about how they guage your ability to communicate complicated topics.
      - Don't ask for time to think
      - Instantly ask for a follow-up question
      - Share what you are thinking

    - One strategy
      1.  Identify two core features
      2.  Possible implementation
      3.  Identify and address the difficulties
      4.  Solutions for scaling
        - Think of general strategies for products in general
        - Caching
        - Deployment options
      
      - Search methods
        1. BubleSort: `O(n ^ 2)`
        2 SelectionSort: `O(n ^ 2)
        3.  MergeSort: `O(n * log(n))`
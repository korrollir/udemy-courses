# Middlewares

## Purpose
1. Functions that allow us to inspect the actions being returned by the action creators.
2. Used to do operations on the action.

## How They Work
1. React calls an Action Creator returns an Action sent to Middleware forwards Action to Reducers produces new State sent to React
2. Middleware has the opportunity to log, stop, modify, or not touch an action.
3. Action -> Middleware # 1 -> next -> ... -> Middleware #X -> next -> Reducers

## Tips
1. Write middleware in such a way it does not matter what order it is being ran in.
2. Multiple middleware in an app is called the middleware stack.
3. Make sure the action goes through all the middleware again after passing through one.

## Boilerplate

* Basic
```export default function({ dispatch }) = {
  return function(next) {
    return function(action) {
      
    }
  }
}```

* Full ES6
```export default ({ dispatch }) => next => action => { }```
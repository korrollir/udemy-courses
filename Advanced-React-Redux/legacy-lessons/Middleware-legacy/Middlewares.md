# Middleware

### Path
* React calls an Action Creator returns an Action sent to Middleware forwards Action to Reducers produces new State sent to React
* Middleware has the opportunity to log, stop, modify, or not touch an action.
* Action -> Middleware # 1 -> next -> ... -> Middleware #X -> next -> Reducers
* Write middleware in such a way it does not matter what order it is being ran in.

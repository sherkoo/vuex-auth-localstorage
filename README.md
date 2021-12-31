# Vuex Auth

A simple example of using vuex to manage wether the user is logged in or not.

## How this works

- app.vue checks if state.auth is true or false
  - if true -> run login action
  - on every page refresh, recreate localstorage
- if false -> do nothing
- State.auth
  - checks of localstorage exists or returns false
  - login action
- commits login mutation
  - login mutation
- creates localStorage of user data
- sets state.auth to true
- sets state.user to parse localstorage user data
  - getter checkAuth
- returns state.auth
  - logout action
- sets state.auth to false
- removes localStorage of user data

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

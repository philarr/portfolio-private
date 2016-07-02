# PMHC.co portfolio
This can serve as a React boilerplate for future projects.

##Features
- Universal React
- redux/react-redux
- react-router
- redux-connect (AsyncPropsConnect)
- Development
  - WebpackDevServer Middleware
  - Hot module replacement
  - ReduxDevTools
- Webpack-isomorphic-tools (coming soon)

Check out webpack config for the loaders available.


##File structure
- /
  - src
    - server
    - common
      - actions
      - assets
      - components
      - reducers
      - routes
      - store

##NPM commands
`npm run start-dev` Starts server in development mode (Using babel-register hook, HMRE etc.)

`npm run build` Compiles all files in `/src` to `/build` with babel-cli & Pack up `client.js` bundle into `/build/dist`

`npm run deploy` Starts production server from `/build/server/server.js`

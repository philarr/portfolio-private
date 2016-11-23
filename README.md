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

Check out webpack configs for the loaders available.


##File structure
- /
  - src
    - api
    - common
      - actions
      - assets
      - components
      - containers
      - reducers
      - routes
      - store
      - utils      

##npm commands
`npm run start-dev` Start watcher for server files

`node ./src/server.dev.js` Start webpack-dev-server for client files

`npm run build` Compiles all files in `/src` to `/build` with babel-cli & Pack up `client.js` bundle into `/build/dist`

`npm run deploy` Starts production server from `/build/server.js`

<h1 align='center'>
    Cefalo Movie Database
</h1>


## Demo
[http://18.209.226.53:5000/](http://18.209.226.53:5000/)

## Technologies Stack

- node.js (v14.16.0 LTS)
- react (v17.0.2)
- redux
- react-redux
- redux-thunk
- react-router-dom
- axios

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run lint`

See the eslint warning and error.

### `npm run lint:fix`

To fix eslint warning and error.

## API Information
- [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)
- [https://developers.themoviedb.org/3/getting-started/introduction](https://developers.themoviedb.org/3/getting-started/introduction)

## Available Routes
- /movies - Genre based movie listing.
- /movie/{id} - Movie detail page.
- /genre/{id} - Specific genre based movie listing.
- /watchlist - Watch list page or favorite movie page.
- /viewed - Recently viewed movie page.
## Project Configuration & Installation (Development)

1. Run `npm i` command on the project directory to install all packages.
2. Copy `.sample.env` file and past it in this directory as `.env.development`.
3. Set the `REACT_APP_API_KEY` in the `.env.development` file. You will find the API and key information here, [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)
4. Set the `REACT_APP_BASE_URL` as you origin server path.
5. Run `npm start`, By default project will start on [http://localhost:3000](http://localhost:3000) 

## Project Configuration & Installation (Production)

1. Run `npm i` command on the project directory to install all packages.
2. Copy `.sample.env` file and past it in this directory as `.env.production`.
3. Set the `REACT_APP_API_KEY` in the `.env.production` file. You will find the API and key information here, [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api) 
4. Set the `REACT_APP_BASE_URL` as you origin server path.
5. Run `npm run build` to generate production build.
5. Install serve or pm2 package. `npm install -g serve` OR `npm install -g pm2`
6. Run one of those commend from your project directory, based on your package installation.
    - If you using serve package run this commend `serve -s build`. By default Server will run on 5000 port on your server.
    - If you using pm2 page run this commend `pm2 serve ./build 5000 --spa`. By default Server will run on 5000 port on your server.




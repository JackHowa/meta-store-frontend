# Meta Store

Shop online for online shops.

## Motivation

This app is for someone looking for an online store based on category, credibility, and other costs. It's also for users who want to recommend stores based on their expertise to people new to a category.

For example, as a frequent tech buyer, I might recommend newegg.com to someone new to technology buying RAM for their computer.

## Roadmap

See [project tab](https://github.com/JackHowa/meta-store-frontend/projects/3) for MVP.

Another goal is to potentially create a browser extension to recommend alternatives to the site you're on.

As a stretch goal, we're interested in using unsupervised learning to cluster related categories (eg, climbing) and sites (eg, patagonia.com). For example,

```
patagonia.com
mountaineering
climbing
hiking
shoes

williams-sonoma.com
cooking
dishes
kitchen

target.com
cooking
kitchen
dishes
hiking
shoes
```

## Setup

- Check Node version greater or equal to Node 8.10 `node -v`
  - If maintaining different Node versions (or versions of anything), I recommend [asdf](https://github.com/asdf-vm/asdf)
- Install dependencies `yarn install`
- Start dev server `yarn start`
- Open [http://localhost:3000](http://localhost:3000) in a browser

### Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

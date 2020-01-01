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
- Start dev server `yarn dev`
- Open [http://localhost:8080](http://localhost:8080) in a browser

### Technology Used

- [React](https://github.com/facebook/react)
- [webpack](https://webpack.js.org/) build tools
- [koa](https://koajs.com/) Node server back-end in a private repo

# Credit 

Setup with webpack and babel based off of [tutorial](https://dev.to/iamismile/how-to-setup-webpack-and-babel-for-react-59ph).

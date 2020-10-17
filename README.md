# Meta Store

Shop online for online shops.

## CI/CD

[![Netlify Status](https://api.netlify.com/api/v1/badges/130e18f7-f149-4b30-b234-6a9ec519e7b4/deploy-status)](https://app.netlify.com/sites/nostalgic-jones-e88a96/deploys)

[![Dependabot active](https://badgen.net/github/dependabot/ubuntu/yaru)](https://github.com/JackHowa/meta-store-frontend/network/alerts)

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

## Code Quality

- `yarn lint` to use linting setup, with airbnb styles
- `yarn format` to apply prettier styles

## Technology Used

- [React](https://github.com/facebook/react)
- [webpack](https://webpack.js.org/) build tools
- [prettier](https://github.com/prettier/prettier)
- [eslint](https://github.com/eslint/eslint)
- [linaria](https://github.com/callstack/linaria) CSS in JS with zero runtime
- [koa](https://koajs.com/) Node server back-end [repo](https://github.com/mattzuzolo/meta-store-back)

## Style guide 

### Colors

- [Goal color scheme](https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=282c35&secondary.color=d2d8d9&primary.text.color=ffa7c4&secondary.text.color=000000)
- Background: #282c35 dark blue
- Highlight: #ffa7c4 light pink
- Secondary (not totally sure): d2d8d9 greenish grey
- White: #ffffffe0 off white
  
### Design

- Monstercat's record design feel modern, creative, clean. The straight lines and borders for cues, (eg, [Throttle](https://www.google.com/search?biw=980&bih=978&tbm=isch&sxsrf=ACYBGNTbNU-XMkNuNI0dUCDdhCyv2jTmxg%3A1578874937747&sa=1&ei=ObgbXtOMLZTbtAbd5IHoCA&q=throttle+dreamer+album+cover&oq=throttle+dreamer+album+cover&gs_l=img.3..35i39.1673.7446..7698...0.0..0.131.2205.28j3......0....1..gws-wiz-img.......0i8i30j0i67j0j0i5i30j0i24j0i30.ePQfuvqpW9s&ved=0ahUKEwiTjby-p__mAhWULc0KHV1yAI0Q4dUDCAc&uact=5))

# Credit

- Setup with webpack and babel based off of [tutorial](https://dev.to/iamismile/how-to-setup-webpack-and-babel-for-react-59ph).
- Setup with prettier and eslint based off of Brian Holt's brilliant [FrontendMasters React course](https://btholt.github.io/complete-intro-to-react-v5/)
- React leader Dan Abramov's blog [Overreacted](https://overreacted.io/) for colors
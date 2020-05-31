# 🥖 Breadstick Example App

> Using breadstick to create custom notifications

[**⚡️View live demo**](https://breadstick-examples.now.sh)

## About this example application:
This simple Nuxt application shows how to use [Breadstick's](https://github.com/codebender828/breadstick) stacking API to render authored Vue toast notifications.

In this demo I replicated 3 Toast designs and rendered them inside Breadstick:
- [Vercel](https://vercel.com)'s Toast
- [`vue-notification`](http://vue-notification.yev.io/) Toast
- [Equal UI Component Library](https://quatrochan.github.io/Equal/components/notification) Notification.

All the Toasts used in this example were reimplemented using [Chakra UI Vue](https://vue.chakra-ui.com) for it's simple/flexible styling API.

The meat and potatoes of this example is in the [plugins/breadstick.client.js](https://github.com/codebender828/breadstick-examples/blob/master/plugins/breadstick.client.js) file. Feel free to copy this and use it in your own applications.

#### For Vue.js
If you're using raw Vue.js, you can view [this gist](https://gist.github.com/codebender828/72dbee93dc2d419c60a18c114adecca7) that provides a similar high-level implementation.

## What is Breadstick?
[Breadstick](https://github.com/codebender828/breadstick) is a tiny Vue.js library that provides a simple **stacking, positioning, and dismissal** API for authored Vue.js toast notifications.

The reason I created it was to give me the flexibility of designing different toast notifications for different apps, so that let Breadstick handle the business logic of positioning, stacking and dismissal.

This allowed me to focus on building beautiful notifications, for different apps/themes, and not worry about them looking out of place. Breadstick let's you handle the appearance of your Toasts, but provides a powerful functional API you can use anywhere in your Vue applications.

### Credits
Breadstick was inspired by React's [Toasted Notes](https://github.com/bmcmahen/toasted-notes) by [Ben McMahen](https://github.com/bmcmahen)

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

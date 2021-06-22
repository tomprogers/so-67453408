# Why is my Phaser3 sprite rendering in the wrong location?

This repo is a minimal reproducible example of bad rendering behavior of Phaser within Electron.
It has been created to supplement [this question on StackOverflow](https://stackoverflow.com/questions/67453408/why-is-my-phaser3-sprite-rendering-in-the-wrong-location).

_Note: I have only tested this on MacOS._


## To run it

```sh
yarn && yarn start
```

After dependencies are installed and the app builds, a new application window will open. Within that window, you'll see:

- the page has a white background
- there is a black `<canvas>` rectangle in the top-left, with dimensions 400px by 200px; there is nothing else on the page
- in the top-left corner of the `<canvas>`, you'll see a red square that's 100px on a side, with a 1px green border that's visible on _all four sides_ of the square


### What's wrong?

Open [`src/scene.js`](src/scene.js) and look at line 23: the sprite is being placed at coordinates `(200,100)` even though it displays in the top-left corner.

To the best of my knowledge, the correct coordinates for that position should be `(0,0)`.

Notably, `(200,100)` is half the canvas dimensions. If you increase the canvas size to e.g. 600px by 300px, to achieve the same position, you must place the sprite at `(300,150)`, which is also not how it's supposed to work.

There's nothing else going on in this repo.


## To make edits

Note that this repo does not do hot-reloading, because this is supposed to be a _minimal_ example. If you want to see your changes, you must kill the Electron app and then re-run `yarn start`.

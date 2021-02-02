# ffmpegrunner

A tiny utility that turns a [fluent-ffmpeg](https://github.com/fluent-ffmpeg) command into a Promise 

## Installing

```sh
npm install https://github.com/glynnbird/ffmpegrunner.git
```

## Usage

```js
const run = require('ffmegrunner').run
const ffmpeg = require('fluent-ffmpeg')

const main = async () => {
  const command = ffmpeg()
    .input('in.mp4')
    .output('out.jpg')
    .outputOptions(['-format singlejpeg', '-vframes 1'])
  await run(command)
}

main()
```

To send debug information to `stderr`, add `true` as a second parameter to run e.g

```js
  await run(command, true)
```

To probe a file with `ffprobe`:

```js
  const probe = require('ffmpegrunner').probe
  const results = await probe('myfile.mp4')
```
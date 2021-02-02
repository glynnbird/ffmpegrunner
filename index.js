const ffmpeg = require('fluent-ffmpeg')

const run = async (command, log) => {
  return new Promise((resolve, reject) => {
    command
      .on('start', (command) => {
        // output the ffmpeg command
        if (log) {
          console.error(command)
        }
      })
      .on('stderr', (p) => {
        if (log) {
          console.error(p)
        }
      })
      .on('end', (stdout, stderr) => {
        // resolve the promise
        resolve({ stdout, stderr })
      })
      .run()
  })
}

// run ffprobe
const probe = async (path) => {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(path, (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
}

module.exports = {
  run,
  probe
}

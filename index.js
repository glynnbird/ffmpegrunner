const run = async (command, log) => {
  return new Promise((resolve, reject) => {
    command
      .on('start', (command) => {
        // output the ffmpeg command
        if (log) {
          console.log(command)
        }
      })
      .on('progress', (p) => {
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

module.exports = {
  run
}

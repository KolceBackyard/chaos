const options = {
  printStdout: true,
  printStderr: true
}

desc('Compile Pug files')
task('pug', () => jake.exec('pug src/views --out dist/ --obj src/views/data.json --pretty', options))

desc('Compile Pug files and start a watcher')
task('pug:watch', () => jake.exec('pug src/views --out dist/ -w --obj src/views/data.json --pretty', options))

desc('Start livereload server')
task('livereload', () => jake.exec('livereload dist/ -e "js, html, css"', options))

desc('Start HTTP server')
task('http', () => jake.exec('http-server dist', options))

desc('Build the source files')
task('build', () => {
  jake.Task['concise'].invoke()
  jake.Task['pug'].invoke()
})

desc('Start everything')
task('default', () => {
  jake.Task['concise'].invoke()
  jake.Task['pug:watch'].invoke()
  jake.Task['concise:watch'].invoke()
  jake.Task['http'].invoke()
  jake.Task['livereload'].invoke()
})

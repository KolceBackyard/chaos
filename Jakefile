desc('Compile Pug files.')
task('pug', () => {
  jake.exec('pug src/views --out dist/ --obj src/views/data.json --pretty', {
    printStdout: true,
    printStderr: true
  }, () => {
    complete()
  })
})

desc('Compile Pug files.')
task('pug:watch', () => {
  jake.exec('pug src/views --out dist/ -w --obj src/views/data.json --pretty', {
    printStdout: true,
    printStderr: true
  }, () => {
    complete()
  })
})

desc('Compile Concise CSS files.')
task('concise', () => {
  jake.exec('concisecss compile src/styles/main.scss dist/styles/main.css', {
    printStdout: true,
    printStderr: true
  }, () => {
    complete()
  })
})

desc('Compile styles on change')
task('concise:watch', () => {
  jake.exec('chokidar "src/styles/**/*.scss" -c "jake concise"', {
    printStdout: true,
    printStderr: true
  }, () => {
    complete()
  })
})

desc('Start livereload server')
task('livereload', () => {
  jake.exec('livereload dist/ -e "js, html, css"', {
    printStdout: true,
    printStderr: true
  }, () => {
    complete()
  })
})

desc('Start HTTP server')
task('http', () => {
  jake.exec('http-server dist', {
    printStdout: true,
    printStderr: true
  }, () => {
    complete()
  })
})

desc('Build the source files')
task('build', () => {
  jake.Task['concise'].invoke()
  jake.Task['pug'].invoke()
})

desc('Start the development tools')
task('default', () => {
  jake.Task['concise'].invoke()
  jake.Task['pug:watch'].invoke()
  jake.Task['concise:watch'].invoke()
  jake.Task['http'].invoke()
  jake.Task['livereload'].invoke()
})
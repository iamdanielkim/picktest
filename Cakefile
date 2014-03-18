
{exec} = require 'child_process'

task 'export', 'export .feature files', (options) ->
  exec "spectrum-client", (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr

task 'test-console', 'run tests', (options) ->
  exec "cucumber.js -t @pick1 -f pretty", (err, stdout, stderr) ->
    console.log(err)
    #throw err if err
    #console.log stdout + stderr

task 'test-json', 'run tests', (options) ->
  exec "cucumber-js -t @pick1 -f json", (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr

task 'run', 'run', () ->
  invoke "export"
  invoke "test-console"

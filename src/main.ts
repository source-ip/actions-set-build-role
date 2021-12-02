import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const prodRole = core.getInput('prod-role', {required: true})
    const devRole = core.getInput('dev-role', {required: true})
    const environmentName = core.getInput('environment-name', {required: true})
    let buildRole
    switch (environmentName) {
      case 'prod':
        buildRole = prodRole
        break
      default:
        buildRole = devRole
        break
    }
    core.setOutput('build-role', buildRole)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

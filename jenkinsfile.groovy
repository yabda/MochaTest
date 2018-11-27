stage('checkout'){
    node('master'){
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/yabda/MochaTest']]])
    }
}

stage('install dependency'){
    node('master'){
        sh 'yarn'
    }
}

stage('unit testing'){
    node('master'){
        sh 'grunt mocha'
    }
}

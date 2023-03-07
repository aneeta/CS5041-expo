# CS5041-expo
Practical 2 for CS5041 Interactive Software and Hardware module at St Andrews

## Launch App
Make sure that the right version of node is used.
If version is `<16.19.1`, run `/cs/studres/CS5041/Tutorials/setup_node.sh`.

Navigate to `recipease` and run:
```
npm start
```
## Errors

1. `ConfigError: Cannot determine which native SDK version your project uses because the module `expo` is not installed. Please install it with `yarn add expo` and try again.`
- Make sure yarn is installed (`npm install --global yarn`)
- Install expo using yarn (`yarn add expo`)

2. `Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:71:19)
    at Object.createHash (node:crypto:130:10)
    at module.exports (/cs/home/jl384/Documents/githubNew/CS5041-expo/recipease/node_modules/webpack/lib/util/createHash.js:135:53)
    at NormalModule._initBuildHash (/cs/home/jl384/Documents/githubNew/CS5041-expo/recipease/node_modules/webpack/lib/NormalModule.js:417:16)
    at handleParseError (/cs/home/jl384/Documents/githubNew/CS5041-expo/recipease/node_modules/webpack/lib/NormalModule.js:471:10)
    at /cs/home/jl384/Documents/githubNew/CS5041-expo/recipease/node_modules/webpack/lib/NormalModule.js:503:5
    at /cs/home/jl384/Documents/githubNew/CS5041-expo/recipease/node_modules/webpack/lib/NormalModule.js:358:12
    at /cs/home/jl384/Documents/githubNew/CS5041-expo/recipease/node_modules/loader-runner/lib/LoaderRunner.js:373:3
    at iterateNormalLoaders (/cs/home/jl384/Documents/githubNew/CS5041-expo/recipease/node_modules/loader-runner/lib/LoaderRunner.js:214:10)
    at Array.<anonymous> (/cs/home/jl384/Documents/githubNew/CS5041-expo/recipease/node_modules/loader-runner/lib/LoaderRunner.js:205:4)
    at Storage.finished (/cs/home/jl384/Documents/githubNew/CS5041-expo/recipease/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)
    at /cs/home/jl384/Documents/githubNew/CS5041-expo/recipease/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9
    at /cs/home/jl384/Documents/githubNew/CS5041-expo/recipease/node_modules/graceful-fs/graceful-fs.js:123:16
    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3) {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}`

- Cause: wrong node.js;
- Solution: refer to tutorial4 pdf, switch to the right node.


## Warnings
1. after fixed Error 1, when lauching the program it said: 
`Some dependencies are incompatible with the installed expo version:
  react@18.1.0 - expected version: 18.2.0
  react-native@0.70.5 - expected version: 0.71.3
Your project may not work correctly until you install the correct versions of the packages.
Install individual packages by running npx expo install react@18.2.0 react-native@0.71.3`

-I installed the suggested version after the warning. (JY)

# Note
not for anything tbh
```
export PATH=$PATH:/home/as627/.nvm/versions/node/v16.19.1/lib/node_modules
```

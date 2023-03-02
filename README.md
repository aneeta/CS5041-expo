# CS5041-expo
Practical 2 for CS5041 Interactive Software and Hardware module at St Andrews

## Launch App
Make sure that the right version of node is used.
If version is `<16.19.1`, run `/cs/studres/CS5041/Tutorials/setup_node.sh`.

Navigate to `expo-app` and run:
```
npm start
```
## Errors

1. `ConfigError: Cannot determine which native SDK version your project uses because the module `expo` is not installed. Please install it with `yarn add expo` and try again.`
- Make sure yarn is installed (`npm install --global yarn`)
- Install expo using yarn (`yarn add expo`)

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

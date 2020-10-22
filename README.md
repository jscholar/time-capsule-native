# Time Capsule

## Installation
1. Run `npm install` to install dependencies
2. Install the Expo client app on a mobile device
3. Start the app using `npm start` and use the QR code to connect the mobile device

More details can be found on the [Expo docs](https://docs.expo.io/get-started/create-a-new-app/)

### Post-Installation

You can optionally install the built-in pre-commit hook `./scripts/pre-commit`, which lints the staged files.

Install by granting execute permissions. `chmod +x ./scripts/pre-commit`

Then do either of the following
*  Create a symbolic link of the script `ln -s $PWD/scripts/pre-commit .git/hooks/`

OR
* Move/copy the script into `./git/hooks/`

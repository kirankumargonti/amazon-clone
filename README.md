# Amazon Clone With React( Hooks + Context API ) and Firebase Authentication

#### Live Project: https://clone-ddfd4.web.app/


## SnapShot
![picture](https://res.cloudinary.com/kirankumargonti/image/upload/v1599566728/GituHub/amazon_kfmiwb.png)

## Quick Start

    # Clone the application
    git clone https://github.com/kirankumargonti/amazon-clone.git

    # Install dependencies
    npm install

    # Serve on localhost:3000
    npm start

## Project Setup

### 1. Firebase Setup

- [ Create a Project and add Firebase Configuration](https://firebase.google.com/docs/web/setup) to

  - src / firebase.js file it looks like this

  ```
  const firebaseConfig = {

      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ": "",
      measurementId: ""

  };
  ```

### 2. Login Authentication

- Goto Authentication tab left side in the project Dashboard
- Enable [Email/Password ](https://firebase.google.com/docs/auth/web/email-link-auth) to your project


### 3. Hosting 

    # Build for production
    $ npm run build

    # Install firebase tools
    $ npm install -g firebase-tools

    # Login to firebase
    $ firebase login

    # Initialize your firebase project
    $ firebase init

    # Important Steps
        - Use an existing project
        - What do you want to use as  your public directory?
          build
        - Configure as a single-page app 
          (rewrite all urls to /index.html)? Yes
        - File build/index.html already exists. Overwrite? No

    # Deploy to firebase
    $ firebase deploy


## For more information refer Firebase docs 
https://firebase.google.com/docs

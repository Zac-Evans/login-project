var firebaseConfig = {
    apiKey: "AIzaSyA7n04rQ8Xg3VJ6-PExbRD9_CbUoO4ca5w",
    authDomain: "login-project-b4c8a.firebaseapp.com",
    databaseURL: "https://login-project-b4c8a.firebaseio.com",
    projectId: "login-project-b4c8a",
    storageBucket: "login-project-b4c8a.appspot.com",
    messagingSenderId: "304090948359",
    appId: "1:304090948359:web:064c9d27e834f13fcb1ba2",
    measurementId: "G-240501720",
  };

  firebase.initializeApp(firebaseConfig);

var ui = new firebaseui.auth.AuthUI(firebase.auth());




ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Other config options...
  });

  ui.start('#firebaseui-auth-container', {
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: false
      }
    ]
  });

  var actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be whitelisted in the Firebase Console.
    url: 'https://www.example.com/finishSignUp?cartId=1234',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
  };

  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<members-only.html>',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
  };
 
 

  ui.start('#firebaseui-auth-container', uiConfig);

//   <script src="/__/firebase/7.16.1/firebase-app.js"></script>

//         <!-- If you enabled Analytics in your project, add the Firebase SDK for Analytics -->
//               <script src="/__/firebase/7.16.1/firebase-analytics.js"></script>
      
//         <!-- Add Firebase products that you want to use -->
//               <script src="/__/firebase/7.16.1/firebase-auth.js"></script>
//               <script src="/__/firebase/7.16.1/firebase-firestore.js"></script>
      
//               <script src="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"></script>
//               <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />
      
      
//                <!-- Initialize Firebase -->
//                <script src="/__/firebase/init.js"></script>
      
//                <script src="bower_components/firebaseui/dist/firebaseui.js"></script>
//               <link type="text/css" rel="stylesheet" href="bower_components/firebaseui/dist/firebaseui.css" />
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Firebase } from '@ionic-native/firebase/ngx';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(public afAuth: AngularFireAuth, private firebase: Firebase, private firebaseAuthentication: FirebaseAuthentication) {
    // this.afAuth.auth.onAuthStateChanged(function (user) {
    //   if (user) {
    //     console.log(user);
    //     console.log("1");

    //   } else {
    //     console.log("mbuh");
    //   }
    // });

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function (authData) {
      this.navCtrl.push(TabsPage);
    }).catch(function (error) {
      console.log(error);
    });
 
  }

  ngOnInit() {
    this.afAuth.auth.
    this.firebase
    this.firebaseAuthentication.
  }

  async login() {
    const { email, password } = this;

    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      console.log(res.user);

      // if (res.user) {
      //   res.user.sendEmailVerification().then(function () {
      //     console.log("kudunya udah sent");
      //   });
      // }
    } catch (err) {
      // console.dir(err);
      console.log(err);

      if (err.code == "auth/user-not-found") {
        console.log("User not found");
      }
    }
  }


}

import React, { useEffect } from "react";
//import firebase from 'firebase/compat/app';
import firebase from '../../firebase';
import { getFunctions, httpsCallable } from "firebase/functions";

export default function User() {
  useEffect(() => {
  });
  //firebase function test
  const getData = async () => {
    alert('start');
    const functions = getFunctions();
    const callableReturnMessage = httpsCallable(functions, 'serverlessapi');
    callableReturnMessage({name:'Shwe Zin Oo'}).then((result) => {
    alert(result.data);
    }).catch((error) => {
      console.log(`error: ${JSON.stringify(error)}`);
    });
  };

  return (
    <div>
      <h3>Welcome User</h3>
      <button onClick={getData}>Data get</button>
      <div>
      <h1>Firebase access key</h1>
    </div>
    </div>
  );
}

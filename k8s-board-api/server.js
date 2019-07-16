const express = require("express");
const k8s = require('@kubernetes/client-node');
const app = express();

const fn = () => {
  const kc = new k8s.KubeConfig();
  console.log(kc)
  kc.loadFromDefault();
  
  const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
  console.log(k8sApi)
  k8sApi.listNamespacedPod('default').then((res) => {
      console.log(res.body);
  });
}


app.listen(3000, () => {
 console.log("Server running on port 3000");
 // console.log(k8s)
 fn()
});
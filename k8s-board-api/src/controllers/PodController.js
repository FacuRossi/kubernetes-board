const k8s = require('@kubernetes/client-node');
const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

exports.getPodByNamespace = (req, res) => {
    console.log('get podd by namesapce')
    // .then(response => {
    //     res.status(200).send(response.data)
    // })
    //   .catch(error => {
    //       console.log(error)
    //     res.status(500).send()
    // })
    k8sApi.listNamespacedPod('default').then((response) => {
        console.log('aca estoy')
        res.status(200).send(response.body.items)
        // res.body.items.forEach(pod => {
        //   console.log('#### METADATA #### ', pod.metadata)
        //   console.log('#### SPEC #### ', pod.spec)
        //   console.log('#### STATUS #### ', pod.status)
        // })
    });
}
import React, { useState } from 'react';
import k8s from '@kubernetes/client-node'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar';
import SidebarButton from './components/sidebar/SidebarButton'
import './App.scss';

function App() {
  const [showSb, setShowSb] = useState(false);

  const showSidebar  = () => {
    setShowSb(!showSb)
    console.log(k8s)
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();
    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
    k8sApi.listNamespacedPod('default').then((res) => {
      console.log(res.body);
    });
  }

  return (
    <div id='main' className={'grid-container' + (showSb ? ' show-sidebar' : ' hide-sidebar')}>
      <SidebarButton onClick={showSidebar} />
      <Header/>
      <Sidebar/>
      <div className="content">Content</div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;

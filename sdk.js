/* Arnux SDK v1 — include before app.js in custom apps. */
window.ArnuxSDK={
  version:'1.0.0',
  manifest({id,name,icon='◆',color='#5778ff',description='',permissions=[],render}){return {id,name,icon,color,description,permissions,render}},
  permissions:{request(appId,permissions=[]){const key=`arnux-permissions-${appId}`;const current=JSON.parse(localStorage.getItem(key)||'[]');const next=[...new Set([...current,...permissions])];localStorage.setItem(key,JSON.stringify(next));return Promise.resolve(next)},has(appId,permission){return JSON.parse(localStorage.getItem(`arnux-permissions-${appId}`)||'[]').includes(permission)}},
  storage:{get(key,fallback=null){try{return JSON.parse(localStorage.getItem(`arnux-app-${key}`))??fallback}catch{return fallback}},set(key,value){localStorage.setItem(`arnux-app-${key}`,JSON.stringify(value))}},
  notify(message){const event=new CustomEvent('arnux:notify',{detail:{message}});window.dispatchEvent(event)},
  openApp(id){window.dispatchEvent(new CustomEvent('arnux:open',{detail:{id}}))},
  fileSystem:{request(appId){return this},read(){return Promise.reject(new Error('Use the Files app to manage user files.'))}}
};

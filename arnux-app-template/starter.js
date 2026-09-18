const StarterApp={
  manifest: ArnuxSDK.manifest({
    id:'starter', name:'Starter App', icon:'◆', color:'#5778ff',
    placeholder:'Write something...', permissions:['storage'], render:()=>`<div class="starter-app"><h2>Starter App</h2><input class="starter-input" placeholder="Write something..."><button class="starter-save">Save</button><p class="starter-status">Ready</p></div>`
  }),
  wire(win){const input=win.querySelector('.starter-input'),status=win.querySelector('.starter-status');input.value=ArnuxSDK.storage.get('starter-value','');win.querySelector('.starter-save').onclick=()=>{ArnuxSDK.storage.set('starter-value',input.value);status.textContent='Saved locally';ArnuxSDK.notify('Starter App saved')}}
};

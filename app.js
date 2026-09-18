const input = document.querySelector('#commandInput');
const form = document.querySelector('#commandForm');
const output = document.querySelector('#output');
const body = document.querySelector('#terminalBody');
const history = [];
let historyIndex = 0;
let cwd = '~';
const files = {
  '~': ['.bash_logout', '.bashrc', '.profile', 'README.md', 'projects', 'welcome.txt'],
  '~/projects': ['arnux', 'notes.md']
};
const commands = ['help','clear','echo','pwd','ls','cd','cat','whoami','date','neofetch','uname','history','touch','mkdir'];

function print(text, className='') {
  const line = document.createElement('div');
  line.className = `output-line ${className}`;
  line.textContent = text;
  output.appendChild(line);
  body.scrollTop = body.scrollHeight;
}
function promptPath(){ return cwd === '~' ? '~' : cwd; }
function commandEcho(command){
  const line = document.createElement('div'); line.className='output-command';
  line.innerHTML = `<span class="prompt-user">guest</span><span class="prompt-at">@</span><span class="prompt-host">arnux</span><span class="prompt-colon">:</span><span class="prompt-path">${promptPath()}</span><span class="prompt-symbol">$</span> ${escapeHtml(command)}`;
  output.appendChild(line);
}
function escapeHtml(value){return value.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function resolvePath(path){
  if(!path || path==='.') return cwd;
  if(path==='~') return '~';
  if(path.startsWith('~/')) return path.replace(/\/$/,'');
  if(path==='..') return cwd === '~' ? '~' : '~';
  return `${cwd === '~' ? '~' : cwd}/${path}`.replace('//','/');
}
function run(raw){
  const command = raw.trim(); if(!command) return;
  history.push(command); historyIndex = history.length; commandEcho(command);
  const [name, ...args] = command.split(/\s+/); const rest = args.join(' ');
  switch(name){
    case 'help': print('Available commands:'); print('  help       show this message'); print('  clear      clear the terminal'); print('  echo       print text to the terminal'); print('  pwd        print working directory'); print('  ls         list directory contents'); print('  cd         change directory'); print('  cat        read a file'); print('  neofetch   display system information'); print('  whoami     print current user'); print('  date       print the current date'); print('  uname      print system information'); print('  history    show command history'); print('  touch      create a file'); print('  mkdir      create a directory'); break;
    case 'clear': output.innerHTML=''; break;
    case 'echo': print(rest.replace(/^['"]|['"]$/g,'')); break;
    case 'pwd': print(cwd === '~' ? '/home/guest' : `/home/guest/${cwd.slice(2)}`); break;
    case 'whoami': print('guest'); break;
    case 'date': print(new Date().toString()); break;
    case 'uname': print(args.includes('-a') ? 'Arnux 1.0.0 browser x86_64 GNU/Linux' : 'Arnux'); break;
    case 'ls': { const target = args.find(a=>!a.startsWith('-')); const path = target ? resolvePath(target) : cwd; if(files[path]) print(files[path].join(args.includes('-l')||args.includes('-la') ? '  ' : '  ')); else print(`ls: cannot access '${target||path}': No such file or directory`,'output-error'); break; }
    case 'cd': { const target=resolvePath(args[0]||'~'); if(target==='~'||files[target]) cwd=target; else print(`bash: cd: ${args[0]}: No such file or directory`,'output-error'); break; }
    case 'cat': { const f=args[0]; if(f==='README.md') print('Welcome to Arnux. A Linux terminal for the open web.'); else if(f==='welcome.txt') print('Type help to explore your new browser shell.'); else print(`cat: ${f||''}: No such file or directory`,'output-error'); break; }
    case 'neofetch': print('      .--.       guest@arnux'); print('     |o_o |      ----------------'); print('     |:_/ |      OS: Arnux Linux (browser)'); print('    //   \\      Host: Web Runtime'); print('   (|     | )    Kernel: JavaScript 22'); print('  /\_   _/\\     Shell: arnux 1.0.0'); print('  \___)=(___/    Uptime: just now','output-title'); break;
    case 'history': history.forEach((item,i)=>print(` ${String(i+1).padStart(2,' ')}  ${item}`)); break;
    case 'touch': if(args[0]) files[cwd]?.push(args[0]); else print('touch: missing file operand','output-error'); break;
    case 'mkdir': if(args[0]) files[resolvePath(args[0])] = []; else print('mkdir: missing operand','output-error'); break;
    default: print(`${name}: command not found. Type 'help' for available commands.`,'output-error');
  }
  input.value=''; input.focus(); updatePrompt();
}
function updatePrompt(){document.querySelector('.prompt-path').textContent=promptPath();}
form.addEventListener('submit', e=>{e.preventDefault();run(input.value)});
input.addEventListener('keydown', e=>{
  if(e.key==='ArrowUp'){e.preventDefault(); if(historyIndex>0){historyIndex--;input.value=history[historyIndex]}}
  if(e.key==='ArrowDown'){e.preventDefault(); if(historyIndex<history.length-1){historyIndex++;input.value=history[historyIndex]}else{historyIndex=history.length;input.value=''}}
  if(e.key==='Tab'){e.preventDefault(); const match=commands.find(c=>c.startsWith(input.value)); if(match) input.value=match}
});
body.addEventListener('click',()=>input.focus());
document.querySelectorAll('[data-command]').forEach(btn=>btn.addEventListener('click',()=>run(btn.dataset.command)));
document.querySelector('#clearButton').addEventListener('click',()=>{output.innerHTML='';input.focus()});
document.querySelector('#runButton').addEventListener('click',()=>run(input.value));
document.querySelector('#themeButton').addEventListener('click',()=>document.body.classList.toggle('dark-mode'));
document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();output.innerHTML='';input.focus()}});
input.focus();

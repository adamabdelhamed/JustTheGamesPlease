(function(global){'use strict';
function getUtilities(){const topBar=document.querySelector('[data-game-topbar]');if(!topBar)return null;let utilities=topBar.querySelector('[data-game-topbar-utilities]');if(!utilities){utilities=document.createElement('div');utilities.className='game-topbar__utilities';utilities.dataset.gameTopbarUtilities='';(topBar.querySelector('.game-topbar__right')||topBar).append(utilities)}return utilities}
function addUtility(element){const utilities=getUtilities();if(!utilities||!element)return false;element.classList.add('game-topbar__utility');utilities.append(element);return true}
function enhanceSelect(select){if(!select||select.dataset.topbarEnhanced)return null;select.dataset.topbarEnhanced='true';select.classList.add('game-topbar__native-select');
const root=document.createElement('div');root.className='game-topbar__select';
const button=document.createElement('button');button.type='button';button.className='game-topbar__select-button';button.setAttribute('aria-haspopup','listbox');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label',select.getAttribute('aria-label')||'Choose an option');
button.innerHTML='<span></span><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m6 8 4 4 4-4"/></svg>';
const menu=document.createElement('div');menu.className='game-topbar__select-menu';menu.setAttribute('role','listbox');menu.setAttribute('aria-label',select.getAttribute('aria-label')||'Options');
function close(){root.classList.remove('open');button.setAttribute('aria-expanded','false')}
function sync(){button.querySelector('span').textContent=select.options[select.selectedIndex]?.textContent||'';menu.querySelectorAll('[role="option"]').forEach(option=>{const selected=option.dataset.value===select.value;option.setAttribute('aria-selected',String(selected));option.classList.toggle('selected',selected)})}
Array.from(select.options).forEach(nativeOption=>{const option=document.createElement('button');option.type='button';option.className='game-topbar__select-option';option.setAttribute('role','option');option.dataset.value=nativeOption.value;option.textContent=nativeOption.textContent;option.addEventListener('click',()=>{if(select.value!==nativeOption.value){select.value=nativeOption.value;select.dispatchEvent(new Event('change',{bubbles:true}))}sync();close();button.focus()});menu.append(option)});
button.addEventListener('click',()=>{const open=!root.classList.contains('open');root.classList.toggle('open',open);button.setAttribute('aria-expanded',String(open))});
button.addEventListener('keydown',event=>{if(event.key==='Escape'){close();return}if(event.key==='ArrowDown'||event.key==='ArrowUp'){event.preventDefault();const options=Array.from(select.options);const delta=event.key==='ArrowDown'?1:-1;select.selectedIndex=(select.selectedIndex+delta+options.length)%options.length;select.dispatchEvent(new Event('change',{bubbles:true}));sync()}});
document.addEventListener('pointerdown',event=>{if(!root.contains(event.target))close()});select.addEventListener('change',sync);select.after(root);root.append(button,menu);sync();return root}
function init(){document.querySelectorAll('select[data-topbar-select]').forEach(enhanceSelect)}
global.gameTopBar=Object.freeze({addUtility,enhanceSelect});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})(window);

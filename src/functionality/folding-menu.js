const navigation = document.getElementById('navigation');

const arrow = navigation.children[0].lastElementChild;
const list = navigation.children[1];

let boolean = true;

arrow.addEventListener('click', ()=>{
  if(boolean){
    list.style.height = '0';
    list.style.borderWidth = '0';
    boolean = false;
    arrow.style.transform = 'rotate(-90deg)';
    arrow.style.color = 'var(--color-white)';
    arrow.parentElement.style.borderRadius = '4px';
    arrow.parentElement.style.borderBottom = 'thin solid var(--color-main)';
  }else{
    list.style.height = (list.scrollHeight-2)+'px';
    list.style.borderWidth = 'thin';
    arrow.style.transform = 'rotate(0)';
    arrow.style.color = 'var(--color-mustard)';
    arrow.parentElement.style.borderRadius = '4px 4px 0 0';
    arrow.parentElement.style.borderBottom = 'none';
    boolean = true;
  }
  
})


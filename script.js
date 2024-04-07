const sendInput = document.querySelector('#input');
const messagesContainer = document.querySelector('.input-wrapper');
const elements = document.querySelectorAll('#items');


sendInput.addEventListener('keydown', function (event){
    const messageText = sendInput.value;

    for (let item of elements){
        item.addEventListener('click', function(){
            item.classList.toggle ('done');
          }) 
        }
   
   
    if (event.key== 'Enter') {
   
    }

    if (messageText !=''){
        messagesContainer.append(elements);
    }
    
    sendInput.value ='';
    
})


 

 


/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

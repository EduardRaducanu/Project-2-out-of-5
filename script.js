const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');
item.classList.add('to-do')

const toDo = document.querySelector('.to-doP')
const progress = document.querySelector('.progressP')
const done = document.querySelector('.doneP')

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

progress.addEventListener('drop', () =>{
    console.log('dropped on progress area');
    item.classList.add('progress')
    item.classList.remove('to-do', 'done')
})
toDo.addEventListener('drop', () =>{
    console.log('dropped on to-do area');
    item.classList.add('to-do')
    item.classList.remove('progress', 'done')
})
done.addEventListener('drop', () =>{
    console.log('dropped on done area');
    item.classList.add('done')
    item.classList.remove('progress', 'to-do')
})
for (const placeholder of placeholders){
    placeholder.addEventListener('dragover', dragOver);
    placeholder.addEventListener('dragenter', dragEnter);
    placeholder.addEventListener('dragleave', dragLeave);
    placeholder.addEventListener('drop', drop);    
}
function dragStart(event) {
    event.target.classList.add('hold');
    setTimeout(function() {
        event.target.classList.add('hide');
    }, 0)
}
function dragEnd(event) {
    event.target.classList.remove('hold', 'hide');
    }
function dragOver(event) {
    event.preventDefault();
}
function dragEnter(event) {
    event.target.classList.add('hovered')
}
function dragLeave(event) {
    event.target.classList.remove('hovered')
}
function drop(event) {
    event.target.appendChild(item);
    event.target.classList.remove('hovered')
}
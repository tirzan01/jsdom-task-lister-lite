document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // element declaration
  const form = document.getElementById('create-task-form')
  const textBox = form.querySelector('input')
  const submitBtn = form.querySelectorAll('input')[1]
  const toDoList = document.getElementById('list')
  const taskList = document.getElementById('tasks')

  // dropdown box for selecting importance
  let optionTitle  = document.createElement('option')
  let optionHard = document.createElement('option')
  let optionMedium = document.createElement('option')
  let optionEasy = document.createElement('option')
  optionTitle.innerHTML = 'choose lvl of importance'
  optionHard.innerHTML = 'Do it NOW!!!'
  optionMedium.innerHTML = 'Sooner rather than later!'
  optionEasy.innerHTML = 'No rush'
  let dropdown = document.createElement('select')
  dropdown.appendChild(optionTitle)
  dropdown.appendChild(optionHard)
  dropdown.appendChild(optionMedium)
  dropdown.appendChild(optionEasy)
  form.appendChild(dropdown)

  // task duration input
  let taskDuration = document.createElement('input')
  form.appendChild(taskDuration)
  taskDuration.style.margin = '3px'
  taskDuration.placeholder = 'estimate hours required'
  
  form.addEventListener('submit',(e)=>{
    e.preventDefault()  
    if('choose lvl of importance' === dropdown.value){  
      alert('Please select level of importance.')
    }else{
      let taskText = document.createTextNode(textBox.value + '   ')
      let task = document.createElement('li')
      let deleteBtn = document.createElement('button')
      let estimateTime = document.createTextNode(`(${taskDuration.value} h)`)
      deleteBtn.innerText = 'X'
      deleteBtn.style.backgroundColor = '#808080'
      deleteBtn.style.fontStyle = 'bolder'
      task.appendChild(taskText)
      task.appendChild(estimateTime)
      task.appendChild(deleteBtn)
      
      taskList.appendChild(task)   
    
      if('Do it NOW!!!' === dropdown.value){
        task.style.color = 'red'
      }else if('Sooner rather than later!' === dropdown.value){
        task.style.color = 'orange'
      }else if('No rush' === dropdown.value){
        task.style.color = 'green'
      }

      deleteBtn.addEventListener('click', e=>task.remove())
      textBox.value = ''
      taskDuration.value = ''
    }
  })


  








});

 
    
   
    
     
   
    
   
   
        

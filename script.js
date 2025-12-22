function openFeatures(){
    let allElem=document.querySelectorAll(' .elem');
let fullElemPage=document.querySelectorAll('.fullElem')
let fullElemPageBackBtn=document.querySelectorAll('.fullElem .back')

allElem.forEach((elem)=>{
   elem.addEventListener("click",function(){
       fullElemPage[elem.id].style.display='block'  
   })
})

fullElemPageBackBtn.forEach((back)=>{
   back.addEventListener("click",function(){
           fullElemPage[back.id].style.display='none'
    
   })
    
})


}
openFeatures()

let form=document.querySelector('.addTask form')
let titleInput=document.querySelector('.addTask form #task-input')
let detailInput=document.querySelector('.addTask form textarea')
let taskCheckBox=document.querySelector('.addTask form #check')

let allTask=[
    {
        
    }
]

form.addEventListener('submit',function(e){
    e.preventDefault()
    console.log(titleInput.value);
    console.log(detailInput.value);
    

    console.log(taskCheckBox.checked);
    
    
})
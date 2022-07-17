const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

console.log(percentage)
updateBigCup()

smallCups.forEach((cup,idx)=>{
    cup.addEventListener('click',()=>{
        highlightCups(idx)
    })
})

function highlightCups(idx){
    if(idx===7 && smallCups[idx].classList.contains('full')){
        idx--
    }else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    
    smallCups.forEach((cup,idx2)=>{
        if(idx2<=idx){
           cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })
    updateBigCup()
}


//Animation Formula no.of fullCups divide by no. of total cups multiplied by total heitht of bigcup container

// Percentage drinked Formula no of fullcups divided by total no of cups multiplied by 100



function updateBigCup(){
const fullCups = document.querySelectorAll('.cup-small.full').length
const totalCups = smallCups.length

 if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

//How much water is remained in full cup formula total capicity of bigcup container minus total no.of cup capicity multiplied by no of fullcups divided by 1000

if(fullCups === totalCups){
    remained.style.visibility = 'hidden'
    remained.style.height = 0
}else{
    remained.style.visibility='visible'
    liters.innerText = `${2-(250*fullCups/1000)}L`
}


}
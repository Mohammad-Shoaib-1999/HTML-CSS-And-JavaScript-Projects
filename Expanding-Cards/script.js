let panels = document.querySelectorAll(".panel")

panels.forEach(panel =>{
    panel.addEventListener('click',()=>{
        removeClassActiveFromPreviousPanel()
        panel.classList.add('active')
    })
})

function removeClassActiveFromPreviousPanel() {
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}
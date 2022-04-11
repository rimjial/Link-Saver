
let inputBtn= document.getElementById("input-btn")
let myLead=[]
//myLead=JSON.parse(myLead)
//myLead.push("badhiya.com")
//myLead=JSON.stringify( myLead)
// console.log(typeof myL

let inputEl=document.getElementById("input-el")
let ulEl=document.getElementById("ul-el")
let deleteBtn=document.getElementById("delete-btn")
let tabBtn=document.getElementById("save-btn")

deleteBtn.addEventListener("dblclick", function(){
    myLead=[]
    localStorage.clear()
    console.log("double clicked")
    render(myLead)
})

const leadFromstorage=JSON.parse(localStorage.getItem("myLead"))
console.log(leadFromstorage)
if(leadFromstorage){
    myLead=leadFromstorage
    render(myLead)
}
tabBtn.addEventListener("click", function(){
    
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log(tabs[0].url);
        myLead.push(tabs[0].url)
        localStorage.setItem("myLead", JSON.stringify(myLead))
        render(myLead)
    }) 
})
inputBtn.addEventListener("click", function(){
    //console.log("Button clicked from addEventLisiner")
    myLead.push(inputEl.value)
    localStorage.setItem("myLead", JSON.stringify(myLead))
    render(myLead)
    inputEl.value=""   
    //console.log(myLead)
})

function render(lead){

    let listItems=""
    for(let i=0; i<lead.length; i++){
    //listItems +="<li> <a target='_blank' href='"+ myLead[i] + "'>" + myLead[i]+ "</a></li>"
    listItems += `
    <li>
        <a  target='_blank' href='${lead[i]}'>
         ${lead[i]}
         </a>
    </li>
    `
    }

ulEl.innerHTML=listItems
}





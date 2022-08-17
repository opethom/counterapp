




let count = 0
let countEl = document.getElementById("count-el")
function increment() {
     count += 1
    countEl.innerText = count
}
let saveEl = document.getElementById('save-el')



function  save() {
    let dashSeparator =  ' - '
    saveEl.textContent +=  count + dashSeparator
    countEl.textContent = 0
    count = 0
} 



// Creating an event for clearing the localStorage (the checklist)
function clearingStorage () {
    localStorage.clear()
    window.location.reload()
}

const clearButton = document.getElementById('clearButton')
clearButton.addEventListener('click', () => {
    clearingStorage()
})

// Creating checkboxes states to save the checklist progress
const checkboxes = document.querySelectorAll('input[type="checkbox"]')

checkboxes.forEach(checkbox => {
    const saved = localStorage.getItem(checkbox.id)
    if (saved === "true") {
        checkbox.checked = true
    } else {
        checkbox.checked = false
    }
})
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        localStorage.setItem(checkbox.id, checkbox.checked)
    })
})

const form = document.querySelector('form')
const itemNameInput = document.getElementById('item-name')
const itemList = document.getElementById('item-list')
const deleteInfo = document.querySelector('.delete-info')
const warningText = document.querySelector('.warning-info p')

function createItemElement(name) {
  const li = document.createElement('li')
  const itemId = `item-${Date.now()}`

  li.innerHTML = `
    <div class="item-checkbox">
      <input type="checkbox" id="${itemId}">
      <label for="${itemId}">${name}</label>
    </div>
    <button class="delete-btn" aria-label="Remover item">
      <img src="./assets/trash.svg" alt="">
    </button>
  `

  return li
}

function toggleItemStrike(checkbox, shouldStrike) {
  const label = checkbox.nextElementSibling
  label.style.textDecoration = shouldStrike ? 'line-through' : 'none'
}

function hideDeleteNotification() {
  deleteInfo.classList.remove('appear')
}

function showDeleteNotification(itemName) {
  warningText.textContent = `O item "${itemName}" foi removido da lista`
  deleteInfo.classList.add('appear')
}

// Add new item
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = itemNameInput.value.trim()

  if (!name) {
    alert('Por favor, preencha o campo com um item válido!')
    return
  }

  const newItem = createItemElement(name)
  itemList.appendChild(newItem)
  itemNameInput.value = ''
})

// Delete item
itemList.addEventListener('click', (event) => {
  const deleteBtn = event.target.closest('.delete-btn')
  if (deleteBtn) {
    const itemElement = deleteBtn.parentElement
    const itemName = itemElement.querySelector('label').textContent

    itemElement.remove()
    showDeleteNotification(itemName)
  }
})

// Close delete notification
deleteInfo.addEventListener('click', hideDeleteNotification)

// Toggle item completion
itemList.addEventListener('change', (event) => {
  if (event.target.matches('.item-checkbox input[type="checkbox"]')) {
    toggleItemStrike(event.target, event.target.checked)
  }
})

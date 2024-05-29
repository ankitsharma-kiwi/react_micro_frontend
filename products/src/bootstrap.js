const faker = require('faker')

let products = ''

const mount = (el) => {
  for (let i = 0; i <= 3; i++) {
    const name = faker.commerce.productName()
    products += `<h2>${name}</h2>`
  }
  el.innerHTML = products
}

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-produts')

  if (el) {
    mount(el)
  }
}

export { mount }

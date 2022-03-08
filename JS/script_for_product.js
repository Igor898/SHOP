let btn = document.querySelector('#click')

let products = document.querySelector('.information-about-products')

btn.addEventListener('click', () => {
    products.classList.toggle('display-block')
})

let carts = document.querySelectorAll('.product-item')
let Name1 = document.querySelector('.name-fo-product1')
let quantity1 = document.querySelector('.quantity1')
let price1 = document.querySelector('.price-for-one1')
let total1 = document.querySelector('.total1')
let Name2 = document.querySelector('.name-fo-product2')
let quantity2 = document.querySelector('.quantity2')
let price2 = document.querySelector('.price-for-one2')
let total2 = document.querySelector('.total2')
let Name3 = document.querySelector('.name-fo-product3')
let quantity3 = document.querySelector('.quantity3')
let price3 = document.querySelector('.price-for-one3')
let total3 = document.querySelector('.total3')
let Name4 = document.querySelector('.name-fo-product4')
let quantity4 = document.querySelector('.quantity4')
let price4 = document.querySelector('.price-for-one4')
let total4 = document.querySelector('.total4')
let Name5 = document.querySelector('.name-fo-product5')
let quantity5 = document.querySelector('.quantity5')
let price5 = document.querySelector('.price-for-one5')
let total5 = document.querySelector('.total5')
let Name6 = document.querySelector('.name-fo-product6')
let quantity6 = document.querySelector('.quantity6')
let price6 = document.querySelector('.price-for-one6')
let total6 = document.querySelector('.total6')
let Name7 = document.querySelector('.name-fo-product7')
let quantity7 = document.querySelector('.quantity7')
let price7 = document.querySelector('.price-for-one7')
let total7 = document.querySelector('.total7')
let Name8 = document.querySelector('.name-fo-product8')
let quantity8 = document.querySelector('.quantity8')
let price8 = document.querySelector('.price-for-one8')
let total8 = document.querySelector('.total8')
let Name9 = document.querySelector('.name-fo-product9')
let quantity9 = document.querySelector('.quantity9')
let price9 = document.querySelector('.price-for-one9')
let total9 = document.querySelector('.total9')
let summ = document.querySelector('.all-the-summ')

carts.forEach((event) => {
    event.addEventListener('click', (param) => {
        if (param.currentTarget.children[1].children[0].innerText == 'Product 1') {
            document.querySelector('.all-the-products1').classList.remove('n')
            Name1.textContent = param.currentTarget.children[1].children[0].innerText
            quantity1.textContent++
            price1.textContent = param.currentTarget.children[1].children[2].innerText
            total1.textContent = parseInt(price1.textContent.slice(1)) + parseInt(total1.textContent)
        }
        if (param.currentTarget.children[1].children[0].innerText == 'Product 2') {
            document.querySelector('.all-the-products2').classList.remove('n')
            Name2.textContent = param.currentTarget.children[1].children[0].innerText
            quantity2.textContent++
            price2.textContent = param.currentTarget.children[1].children[2].innerText
            total2.textContent = parseInt(price2.textContent.slice(1)) + parseInt(total2.textContent)
        }
        if (param.currentTarget.children[1].children[0].innerText == 'Product 3') {
            document.querySelector('.all-the-products3').classList.remove('n')
            Name3.textContent = param.currentTarget.children[1].children[0].innerText
            quantity3.textContent++
            price3.textContent = param.currentTarget.children[1].children[2].innerText
            total3.textContent = parseInt(price3.textContent.slice(1)) + parseInt(total3.textContent)
        }
        if (param.currentTarget.children[1].children[0].innerText == 'Product 4') {
            document.querySelector('.all-the-products4').classList.remove('n')
            Name4.textContent = param.currentTarget.children[1].children[0].innerText
            quantity4.textContent++
            price4.textContent = param.currentTarget.children[1].children[2].innerText
            total4.textContent = parseInt(price4.textContent.slice(1)) + parseInt(total4.textContent)
        }
        if (param.currentTarget.children[1].children[0].innerText == 'Product 5') {
            document.querySelector('.all-the-products5').classList.remove('n')
            Name5.textContent = param.currentTarget.children[1].children[0].innerText
            quantity5.textContent++
            price5.textContent = param.currentTarget.children[1].children[2].innerText
            total5.textContent = parseInt(price5.textContent.slice(1)) + parseInt(total5.textContent)
        }
        if (param.currentTarget.children[1].children[0].innerText == 'Product 6') {
            document.querySelector('.all-the-products6').classList.remove('n')
            Name6.textContent = param.currentTarget.children[1].children[0].innerText
            quantity6.textContent++
            price6.textContent = param.currentTarget.children[1].children[2].innerText
            total6.textContent = parseInt(price6.textContent.slice(1)) + parseInt(total6.textContent)
        }
        if (param.currentTarget.children[1].children[0].innerText == 'Product 7') {
            document.querySelector('.all-the-products7').classList.remove('n')
            Name7.textContent = param.currentTarget.children[1].children[0].innerText
            quantity7.textContent++
            price7.textContent = param.currentTarget.children[1].children[2].innerText
            total7.textContent = parseInt(price7.textContent.slice(1)) + parseInt(total7.textContent)
        }
        if (param.currentTarget.children[1].children[0].innerText == 'Product 8') {
            document.querySelector('.all-the-products8').classList.remove('n')
            Name8.textContent = param.currentTarget.children[1].children[0].innerText
            quantity8.textContent++
            price8.textContent = param.currentTarget.children[1].children[2].innerText
            total8.textContent = parseInt(price8.textContent.slice(1)) + parseInt(total8.textContent)
        }
        if (param.currentTarget.children[1].children[0].innerText == 'Product 9') {
            document.querySelector('.all-the-products9').classList.remove('n')
            Name9.textContent = param.currentTarget.children[1].children[0].innerText
            quantity9.textContent++
            price9.textContent = param.currentTarget.children[1].children[2].innerText
            total9.textContent = parseInt(price9.textContent.slice(1)) + parseInt(total9.textContent)
        }
        summ.textContent = Number(total1.textContent) + Number(total2.textContent) + Number(total3.textContent) + Number(total4.textContent) + Number(total5.textContent) + Number(total6.textContent) + Number(total7.textContent) + Number(total8.textContent) + Number(total9.textContent)
    })  
})
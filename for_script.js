const buttonContact = document.getElementsByClassName('header_href_txt')     //[0] [1]
const telephone = document.getElementById('telephone')
const email = document.getElementById('email')
const adress = document.getElementById('adress')

const services = document.getElementById('first_sub')
//       //       //         //          //
//
function backToBisqit () {       
    telephone.style.color = 'bisque'
    email.style.color = 'bisque'
    adress.style.color = 'bisque'
}
                                                       //при нажати на "контакты" изменяет цвет букв не на долго

buttonContact[1].onclick = function() {
    telephone.style.color = 'rgb(211, 116, 0)'
    email.style.color = 'rgb(211, 116, 0)'
    adress.style.color = 'rgb(211, 116, 0)'
    setTimeout(backToBisqit,500)
}
//
function backToBisqitServ () {       
    services.style.color = 'bisque'
}
buttonContact[0].onclick = function() {
    services.style.color = 'rgb(211, 116, 0)'
    setTimeout(backToBisqitServ,500)
}
//
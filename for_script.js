const buttonContact = document.getElementsByClassName('header_href_txt')     //[0] [1]
const telephone = document.getElementById('telephone')
const email = document.getElementById('email')
const adress = document.getElementById('adress')

const services = document.getElementById('first_sub')
//привязка для замены текста при смене языка
const enRuUa = document.getElementById('ru_en_ua')
const ua = document.getElementById('UA')

const fs1 = document.getElementById('fs_1')
const fs2 = document.getElementById('fs_2')
const fs3 = document.getElementById('fs_3')
const fs4 = document.getElementById('fs_4')

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
//код для замены текста при смене языка
ua.onclick = function() {
    buttonContact[0].textContent = 'Наші послуги'
    buttonContact[1].textContent = 'Контакти'
    enRuUa.textContent = 'Укр'

     fs1.textContent = 'Детективні послуги.'
     fs2.textContent = 'Безпека бізнезу.'
     fs3.textContent = 'Приватна охорона.'
     fs4.textContent = 'Допомога у вирішенні конфліктних ситуацій.'
    //services.textContent = '- Детективні послуги. /b- Безпека бізнезу. <br>- Приватна охорона. <br>- Допомога у вирішенні конфліктних ситуацій.'

}
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

const text1 = document.getElementById('text_1')
const text2 = document.getElementById('text_2')

const powerSerwices = document.getElementsByClassName('power_serwices') //[0]

const liPowerSerwices = document.getElementsByClassName('li_power_serwices') //[0,1,2,3,4,5,6,7,8]

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

     text1.textContent = 'Пропонуемо комплексні та нестандартні рішення щодо охорони об`єктів, приватних осіб, бізнесу, різних заходів тощо.'
     text2.textContent = 'Готові розглянути будь-яку ситуацію, що склалася. Співпрацюємо із зарубіжними країнами Європи.'

     powerSerwices[0].textContent = 'Сфери послуг силової підтримки:'

     liPowerSerwices[0].textContent = 'Силова підтримка у вирішенні конфліктних ситуацій;'
     liPowerSerwices[1].textContent = 'Супровід та зустріч приватних осіб, групи людей;'
     liPowerSerwices[2].textContent = 'Охорона різних заходів: днів народжень, весіль, концертів тощо;'
     liPowerSerwices[3].textContent = 'Підтримка у боротьбі з незаконною забудовою;'
     liPowerSerwices[4].textContent = 'Група швидкого реагування;'
     liPowerSerwices[5].textContent = 'Особова охорона фізичних осіб, у тому числі дітей, жінок;'
     liPowerSerwices[6].textContent = 'Охорона бізнесу - слова та юридична допомога;'
     liPowerSerwices[7].textContent = 'Виселення проблемних орендарів;'
     liPowerSerwices[8].textContent = 'Ми завжди на стороні кліента.'
    //
   /* 
    
    
   

     
    <li class="li_power_serwices">Мы всегда на стороне клиента.</li>    * */

}
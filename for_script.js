const buttonContact = document.getElementsByClassName('header_href_txt_a')     //[0] [1]


const telephone = document.getElementById('telephone')
const email = document.getElementById('email')
const adress = document.getElementById('adress')

const services = document.getElementById('first_sub')
//привязка для замены текста при смене языка
const enRuUa = document.getElementById('ru_en_ua')
const language = document.getElementById('language')
const ua = document.getElementById('UA')
const ru = document.getElementById('RU')
const en = document.getElementById('EN')

const fs1 = document.getElementById('fs_1')
const fs2 = document.getElementById('fs_2')
const fs3 = document.getElementById('fs_3')
const fs4 = document.getElementById('fs_4')

const text1 = document.getElementById('text_1')
const text2 = document.getElementById('text_2')

const powerSerwices = document.getElementsByClassName('power_serwices') //[0]
const liPowerSerwices = document.getElementsByClassName('li_power_serwices') //[0,1,2,3,4,5,6,7,8]

const detectiveServices = document.getElementsByClassName('detective_services') //[0]
const liDetectiveServices = document.getElementsByClassName('li_detective_services') //[0,1,2,3,4]

const troubleShuting = document.getElementsByClassName('trouble_shuting') //[0]
const troubleShutingText = document.getElementsByClassName('trouble_shuting_text') //[0]

//       //       //         //          //
//
function backToBisqit () {       
    telephone.style.color = 'bisque'
    email.style.color = 'bisque'
    adress.style.color = 'bisque'
}
                                                       //при нажати на "контакты" изменяет цвет букв не на долго
buttonContact[1].onclick = function() {    

/** по буквенное появление текста *///////////////////////////////////////////////////////////////////////////////
let i = 0;
let speed = 10;
let txtLength =  telephone.textContent.length
let txt = telephone.textContent
telephone.textContent = ''

function telephoneWriter() {
    if (i < txt.length) {
        telephone.textContent = telephone.textContent + txt.charAt(i);
      i++;
      setTimeout(telephoneWriter, speed);
    };
  };
  telephoneWriter() 
  ////////////////////////////
  buttonContact[1].disabled = true;      // отключение кнопки "контакты"
  function  buttonContactTimeDis () {
    buttonContact[1].disabled = false;
  };
  ////////////////////////////  отрисовка букв "почты"
  let ii = 0;
  let txtLength1 =  email.textContent.length
  let txt1 = email.textContent
  email.textContent = ''

function emailWriter() {
  if (ii < txt1.length) {
    email.textContent = email.textContent + txt1.charAt(ii);
    ii++;
    setTimeout(emailWriter, 10);
  };
};
setTimeout(emailWriter, txtLength * 10)
///////////////////////////////////////// отрисовка букв "адреса"
let iii = 0;
let txtLength2 =  adress.textContent.length
let txt2 = adress.textContent
adress.textContent = ''

function adressWriter() {
if (iii < txt2.length) {
  adress.textContent = adress.textContent + txt2.charAt(iii);
  iii++;
  setTimeout(adressWriter, 10);
};
};
let timeAdress = (txtLength * 10) + (txtLength1 * 10)
setTimeout(adressWriter, timeAdress)
///////////////////////////////////////////////////////////


  setTimeout(buttonContactTimeDis, (txtLength * 10) + (txtLength1 * 10) + (txtLength2 * 10))     //включение возможности клика по кнопке "контакты"
  
//////////////////////////////////////////

// конец функции для по буквенного появления почты

///////////////////////////////////
    telephone.style.color = 'rgb(211, 116, 0)'
    email.style.color = 'rgb(211, 116, 0)'
    adress.style.color = 'rgb(211, 116, 0)'
    setTimeout(backToBisqit,1200)
    
}
//
function backToBisqitServ () {       
    services.style.color = 'bisque'
}

buttonContact[0].onclick = function() {
   ////////////////////////////
   buttonContact[0].disabled = true;      // отключение кнопки "контакты"
   function  buttonOurServTimeDis () {
     buttonContact[0].disabled = false;
   };
  //побуквенное появление текста 01
  let i = 0
  let text = fs1.textContent
  let textLength = text.length
  fs1.textContent = ''
  
  function fs1Func() {
  if(i < textLength)
  fs1.textContent += text[i]
  i++;
  setTimeout(fs1Func,10)
  };
  fs1Func()
//<=

//побуквенное появление текста 02
let i2 = 0;
let text2 = fs2.textContent
let text2Length = text2.length
fs2.textContent = ''

function fs2Func() {
  if( i2 < text2Length) 
    fs2.textContent += text2[i2]
    i2++;
    setTimeout(fs2Func,10)
}
setTimeout(fs2Func, textLength * 10)
//<=

//побуквенное появление текста 03
let i3 = 0;
let text3 = fs3.textContent
let text3Length = text3.length
fs3.textContent = ''

function fs3Func() {
  if( i3 < text3Length) 
    fs3.textContent += text3[i3]
    i3++;
    setTimeout(fs3Func,10)
}
setTimeout(fs3Func, (textLength * 10) + (text2Length * 10) )
//<=

//побуквенное появление текста 04
/**let i4 = 0;
let text4 = fs4.textContent
let text4Length = text4.length
fs4.textContent = ''

function fs4Func() {
  if( i4 < text4Length) 
    fs4.textContent += text4[i4]
    i4++;
    setTimeout(fs4Func,10)
}
setTimeout(fs4Func, (textLength * 10) + (text2Length * 10) + (text3Length * 10) ) */
//<=

///////////////////////////////////////////////////////////


setTimeout(buttonOurServTimeDis, (textLength * 10) + (text2Length * 10) + (text3Length * 10) )     //включение возможности клика по кнопке "контакты"
  
//////////////////////////////////////////

    services.style.color = 'rgb(211, 116, 0)'
    setTimeout(backToBisqitServ,1000)
};
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

     text1.textContent = "Пропонуемо комплексні та нестандартні рішення щодо охорони об'єктів, приватних осіб, бізнесу, різних заходів тощо."
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

     detectiveServices[0].textContent = 'Детективні послуги:'

     liDetectiveServices[0].textContent = 'Зовнішнє спостереження;'
     liDetectiveServices[1].textContent = 'Виявлення подружньої невірності;'
     liDetectiveServices[2].textContent = 'Розшук людей;'
     liDetectiveServices[3].textContent = 'Збір інформації;'
     liDetectiveServices[4].textContent = 'Проведення розслідувань;'

     troubleShuting[0].textContent = 'Траблшутинг. Вирішення складних і неможливих завдань.'
     troubleShutingText[0].textContent = "Ми концентруємося на рішеннях, а не на проблемах, завжди і в усьому – об'єктивні та неупереджені, розглядаємо завдання абстрактно та по-новому, спрощуємо складні процеси та перетворюємо проблеми на можливості."

     telephone.textContent = 'Телефон: +38 097 744 42 96;'
     email.textContent = 'Пошта: atom.kiev.safety@gmail.com;'
     adress.textContent = 'Адреса: м.Київ, проспект Соборності 2/1;'
};
// закончилась функция перевода на укр
ru.onclick = function() {
    buttonContact[0].textContent = 'Наши услуги'
    buttonContact[1].textContent = 'Контакты'
    enRuUa.textContent = 'Рус'

     fs1.textContent = 'Детективные услуги.'
     fs2.textContent = 'Безопастность бизнеса.'
     fs3.textContent = 'Личная охрана.'
     fs4.textContent = 'Помощь в решении конфликтных ситуаций.'

     text1.textContent = 'Предлагаем комплексные и нестандартные решения относительно охраны объектов, частных лиц, бизнеса, различных мероприятий.'
     text2.textContent = 'Готовы рассмотреть любую сложившеюся ситуацию. Сотрудничаем со странами Европы.'

     powerSerwices[0].textContent = 'Сферы услуг силовой поддержки:'

     liPowerSerwices[0].textContent = 'Силовая поддержка в решении конфликтных ситуаций;'
     liPowerSerwices[1].textContent = 'Сопровождение и встреча частных лиц, групп людей;'
     liPowerSerwices[2].textContent = 'Охрана различных мероприятий: дни рождения, свадьбы, концерты и т.д.;'
     liPowerSerwices[3].textContent = 'Поддержка в борьбе с незаконной застройкой;'
     liPowerSerwices[4].textContent = 'Группа быстрого реагирования;'
     liPowerSerwices[5].textContent = 'Личная охрана физ. лиц, в том числе женщин и детей;'
     liPowerSerwices[6].textContent = 'Охрана бизнеса - силовая и юридическая помощь;'
     liPowerSerwices[7].textContent = 'Выселение проблемных арендаторов;'
     liPowerSerwices[8].textContent = 'Мы всегда на стороне клиента.'

     detectiveServices[0].textContent = 'Детективные услуги:'

     liDetectiveServices[0].textContent = 'Наружное наблюдение;'
     liDetectiveServices[1].textContent = 'Выявление супружеской неверности;'
     liDetectiveServices[2].textContent = 'Поиск людей;'
     liDetectiveServices[3].textContent = 'Сбор информации;'
     liDetectiveServices[4].textContent = 'Проведение расследований;'

     troubleShuting[0].textContent = 'Траблшутинг. Решение сложных и невозможных задач.'
     troubleShutingText[0].textContent = "Мы концентрируемся на решениях, а не на проблемах, всегда и во всем – объективны и беспристрастны, рассматриваем задачи отвлеченно и по-новому, упрощаем сложные процессы и превращаем проблемы в возможности."

     telephone.textContent = 'Телефон: +38 097 744 42 96;'
     email.textContent = 'Почта: atom.kiev.safety@gmail.com;'
     adress.textContent = 'Адрес: г.Киев, проспект Соборности 2/1;'
};
// закончилась функция перевода на RU
en.onclick = function() {
    buttonContact[0].textContent = 'Our services'
    buttonContact[1].textContent = 'Contacts'
    enRuUa.textContent = 'Eng'

     fs1.textContent = 'Detective services.'
     fs2.textContent = 'Business security.'
     fs3.textContent = 'Bodyguard.'
     fs4.textContent = 'Assistance in resolving conflict situations.'

     text1.textContent = 'We offer comprehensive and non-standard solutions for the protection of objects, individuals, businesses, and various events.'
     text2.textContent = 'Ready to deal with any situation. We cooperate with European security services.'

     powerSerwices[0].textContent = 'Strength Support Services:'

     liPowerSerwices[0].textContent = 'Power support in resolving conflict situations;'
     liPowerSerwices[1].textContent = 'Accompanying and meeting individuals, groups of people;'
     liPowerSerwices[2].textContent = 'Security for various events: birthdays, weddings, concerts, etc.;'
     liPowerSerwices[3].textContent = 'Support in the fight against illegal building;'
     liPowerSerwices[4].textContent = 'Rapid Response Team;'
     liPowerSerwices[5].textContent = 'Physical protection individuals, including women and children;'
     liPowerSerwices[6].textContent = 'Business security - physical assistance and legal assistance;'
     liPowerSerwices[7].textContent = 'Eviction of troubled tenants;'
     liPowerSerwices[8].textContent = "We are always on the client's side."

     detectiveServices[0].textContent = 'Detective services:'

     liDetectiveServices[0].textContent = 'Outdoor surveillance;'
     liDetectiveServices[1].textContent = 'Identification of adultery;'
     liDetectiveServices[2].textContent = 'Search for people;'
     liDetectiveServices[3].textContent = 'Collection of information;'
     liDetectiveServices[4].textContent = 'Conducting investigations;'

     troubleShuting[0].textContent = 'Troubleshooting. Solving complex and impossible problems.'
     troubleShutingText[0].textContent = "We focus on solutions, not problems, always and in everything - objective and impartial, we consider problems abstractly and in a new way, we simplify complex processes and turn problems into opportunities."

     telephone.textContent = 'Telephone: +38 097 744 42 96;'
     email.textContent = 'Mail: atom.kiev.safety@gmail.com;'
     adress.textContent = 'Address: Kiev, Prospekt Sobornosti 2/1;'
};

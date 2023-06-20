//Burger
$('.header__btn').on('click', function() {
 $('.menu').toggleClass('menu_active'),
 $('.header__btn').toggleClass('header__btn_active');
});

function openTab(event, tabId) {
 // Получить все элементы с классом "tab-pane" и скрыть их
 var tabContent = document.getElementsByClassName("content-tabs");
 for (var i = 0; i < tabContent.length; i++) {
   tabContent[i].style.display = "none";
 }
 
 // Получить все элементы с классом "tab" и удалить класс "active"
 var tabs = document.getElementsByClassName("tabs__btn");
 for (var i = 0; i < tabs.length; i++) {
   tabs[i].className = tabs[i].className.replace(" active", "");
 }
 
 // Отобразить выбранный таб и установить класс "active" для выбранного таба
 document.getElementById(tabId).style.display = "block";
 event.currentTarget.className += " active";
}

// По умолчанию открыть первый таб при загрузке страницы
document.getElementById("tab1").style.display = "block";

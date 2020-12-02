let gameModeBridgesLocations = new Map([
    ['Литейный мост', {lat: 59.9508667, lng: 30.3493337}],
    ['Дворцовый мост', {lat: 59.9410713, lng: 30.3082885}],
    ['Троицкий мост', {lat: 59.9468837, lng: 30.3291378}],
    ['Дворцовый мост', {lat: 59.9410713, lng: 30.3082885}],
    ['Благовещенский мост', {lat: 59.9346505, lng: 30.2895389}],
    ['Тучков мост', {lat: 59.9490079, lng: 30.2857113}],
    ['Мост Бетанкура', {lat: 59.9561468, lng: 30.2651087}],
    ['Биржевой мост', {lat: 59.9463115, lng: 30.3034866}],
    ['Большеохтинский мост', {lat: 59.9427087, lng: 30.4011907}],
    ['Мост Александра Невского', {lat: 59.9256516, lng: 30.3956367}],
    ['Володарский мост', {lat: 59.8776915, lng: 30.4535447}],
    ['Большой Обуховский (Вантовый) мост', {lat: 59.8537553, lng: 30.4916825}],
    ['Большой Петровский мост', {lat: 59.8537553, lng: 30.4916825}],
    ['Лазаревский мост', {lat: 59.9651244, lng: 30.2738374}],
    ['Каменоостровский мост', {lat: 59.9774967, lng: 30.3012994}],
    ['Ушаковский мост', {lat: 59.982548, lng: 30.3000831}],
    ['Мост Ломоносова', {lat: 59.9284032, lng: 30.3357683}],
    ['Итальянский мост', {lat: 59.9373, lng: 30.3270001}],
    ['Поцелуев мост', {lat: 59.9282183, lng: 30.2949978}],
    ['Львиный Мостик', {lat: 59.9271083, lng: 30.3015032}],
    ['Синий мост', {lat: 59.9315095, lng: 30.3082482}],
]);


/*--------------------------------------------------------------Переменные-------------------------------------------------------------------------------*/











/*----------------------------------------------------------------Локации--------------------------------------------------------------------------------*/
let locations = [
    {
        name: 'Поцелуев мост',
        latLng: {lat: 59.9282183, lng: 30.2949978},
        description: 'Поцелуев мост — это одно из самых романтичных мест в Санкт-Петербурге, здесь часто назначаются свидания, а прекрасный вид на Исаакиевский собор привлекает художников.' +
            'Поцелуев мост увешан замочками, которые оставляют влюбленные, из-за их огромного числа рядом даже была установлена специальная конструкция',
        hints: ['Говорили, что в XVIII веке, когда граница города доходила только до реки Мойки, мост служил местом прощаний и встреч', 'Если при расставании поцеловать человека на этом месте, то он обязательно вернётся'],
    },
    {
        name: 'Ушаковский мост',
        latLng: {lat: 59.982548, lng: 30.3000831},
        description: 'Старое название моста – Строгановский. Это имя он получил в честь расположенной рядом дачи графа А.С. Строганова. После перестройки моста в 1954 году он был назван Ушаковским в память о великом русском флотоводце Ф. Ф. Ушакове.',
        hints: ['Этот мост переименовывали','Он разводной']
    },

    /*--Пример-- */
    /*
    {
        name: '',
        latLng: {},
        description: '',
        hints: ['']
    },
    */
]
/*--------------------------------------------------------------Игровой процесс--------------------------------------------------------------------------*/


function initGameProcess() {
    shuffle(locations)
    locations = locations.slice(0, 5)
    console.log(locations)
    latLngA = locations[0]
    initGameMap(latLngA)

    //Инициализация кнопок ------------------------------------------------
    let gameButton = document.getElementById('gameButton');
    let hintButton = document.getElementById('hintButton');
    //---------------------------------------------------------------------




    confirmButton.addEventListener('click', function () { // Подтвердить
        confirmButton.disabled = true;
        continueButton.disabled = false;
        updateScore();
        locationNumber += 1;
        google.maps.event.clearListeners(map, 'click');
    });

    continueButton.addEventListener('click', function () { // Продолжить
        latLngA = locations[locationNumber];
        confirmButton.disabled = false;
        continueButton.disabled = true;
        roundCounter += 1;
        if (roundCounter > roundsCount) {
            alert("Игра завершена");
            window.location='../main_page/index.html';
        }
        updateRound();
        updateMap();
    });
}


/*-----------------------------------------------------------------Служебные функции---------------------------------------------------------------------*/


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getHint(){

}
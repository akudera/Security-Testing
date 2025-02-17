'use strict'

const questionContainer = document.getElementById('question-container')
const menu = document.getElementById('menu')
const score = document.getElementById('score')
const scoreCounter = document.getElementById('score-counter')
const menuEl = questionContainer.innerHTML

const questions = {
    1: {
        text: 'Ты получил(а) сообщение в социальной сети от незнакомого человека, который предлагает тебе "супер-выгодный" способ заработка в интернете. Что ты сделаешь?',
        image: '../Security-Testing/assets/image/question1-image.jpg',
        options: [
            { text: 'Немедленно соглашусь, ведь это шанс разбогатеть!', isCorrect: false, advice: 'Не спешите соглашаться на заманчивые предложения в интернете. Лёгкий заработок — это часто уловка мошенников. Согласившись, вы можете потерять деньги, передать личные данные или стать участником незаконной схемы. Будьте бдительны, проверяйте информацию и не доверяйте незнакомцам, обещающим золотые горы. \
                <br /><br />Лучшим вариантом в таких ситуациях — просто проигнорировать незнакомца, так ты точно избежишь неприятной ситуации.😉' },
            { text: 'Проигнорирую сообщение и заблокирую отправителя.', isCorrect: true, advice: 'Отличный выбор! Игнорирование и блокировка отправителя это самое разумное решение. Помните, ваше время и безопасность ценны, и не стоит тратить их на общение с подозрительными личностями.' },
            { text: 'Перейду по ссылкам, которые он прислал, чтобы узнать подробности.', isCorrect: false, advice: 'Переходя по подозрительным ссылкам, присланным незнакомцами, ты рискуешь попасть на фишинговый сайт, который выглядит как настоящий, но на самом деле создан для кражи твоих данных. Ты можешь случайно скачать вирус на свое устройство или раскрыть свою личную информацию мошенникам. \
                <br /><br />Лучшим вариантом в таких ситуациях — просто проигнорировать незнакомца, так ты точно избежишь неприятной ситуации.😉' }
        ]
    },
    2: {
        text: 'В группу, в которой ты состоишь, прислали ссылку на забавный тест: "Узнай, кто ты из персонажей современного кино". Как поступишь?',
        image: '../Security-Testing/assets/image/question2-image.jpg',
        options: [
            { text: 'Сразу же пройду тест, ведь это интересно!', isCorrect: false, advice: 'За ссылкой на "интересный тест" может скрываться фишинговый сайт, который украдет твой логин и пароль от социальной сети или других важных аккаунтов. Мошенники могут использовать такие сайты для распространения вирусов или получения доступа к твоим личным данным, включая фотографии, сообщения и финансовую информацию. В результате ты можешь потерять контроль над своим аккаунтом или даже потерять деньги. \
                <br /><br />Лучше спросить у друга(подруги), уверен(а) ли он(а) в безопасности этой ссылки, а также проверить ее с помощью онлайн-сервиса.🚀' },
            { text: 'Спрошу у того, кто прислал ссылку уверен(а) ли он(а) в безопасности этой ссылки или проверю ее с помощью онлайн-сервиса для проверки ссылок', isCorrect: true, advice: 'Молодец! Это очень безопасный подход. Даже если ссылку прислали в закрытой группе, всегда лучше перестраховаться, ведь аккаунт человека, который ее прислал, может быть взломан. Проверка ссылки с помощью онлайн-сервиса — это дополнительная мера предосторожности, которая поможет убедиться в ее надежности.😉' },
            { text: 'Перешлю ссылку всем своим контактам, чтобы они тоже прошли тест.', isCorrect: false, advice: 'Пересылая подозрительные ссылки своим друзьям, ты можешь стать причиной распространения вирусов и мошенничества в интернете. Твои друзья могут доверять тебе и переходить по ссылкам без проверки, что приведет к утечке их личных данных или инфицированию устройств вирусами. \
                <br /><br />Если ты хочешь поделиться интересным контентом с друзьями, всегда проверяй ссылки на безопасность и надежность источника.🤝' }
        ]
    },
    3: {
        text: 'Ты увидел(а) в интернете объявление о продаже очень дорогого телефона по смехотворно низкой цене. Что ты сделаешь?',
        image: '../Security-Testing/assets/image/question3-image.jpg',
        options: [
            { text: 'Куплю побыстрее, пока кто-нибудь другой не опередил!', isCorrect: false, advice: 'Спешка и необдуманность в таких вопросах почти всегда приводит к печальным результатам. Слишком низкая цена на дорогой телефон — это первый признак мошенничества. Скорее всего, продавец пытается обмануть тебя, предлагая подделку, краденый телефон или вовсе не собираясь отправлять товар после получения денег. \
                <br /><br />Всегда будь бдителен(а) и не торопись с покупками, особенно если предложение кажется слишком выгодным.🤝'},
            { text: 'Поищу информацию о продавце в интернете.', isCorrect: true, advice: 'Молодец! Это самое разумное решение в данной ситуации. Слишком низкая цена на дорогой телефон — это первый признак мошенничества. \
                <br /><br />Поиск отзывов о продавце в интернете поможет тебе убедиться в его честности и избежать неприятностей. Помни, что бесплатный сыр бывает только в мышеловке😉' },
            { text: 'Расскажу всем своим друзьям о такой выгодной сделке.', isCorrect: false, advice: 'Рассказывая всем о подозрительно выгодном предложении, ты можешь не только подвергнуть опасности себя, но и своих друзей. Мошенники могут воспользоваться этим и попытаться обмануть кого-то из ваших знакомых. \
                <br /><br />Помни, что ответственность за безопасность в интернете лежит на каждом из нас, и прежде чем делиться сомнительной информацией, убедись в ее надежности.🤝' }
        ]
    },
    4: {
        text: 'Ты пользуешься общественным Wi-Fi в кафе. Какие меры предосторожности ты примешь?',
        image: '../Security-Testing/assets/image/question4-image.jpg',
        options: [
            { text: 'Отключу все обновления и синхронизации на своем устройстве.', isCorrect: false, advice: 'Общественные сети Wi-Fi часто не имеют должного шифрования, что делает ваш трафик уязвимым для перехвата злоумышленниками. Даже если вы отключили обновления, это не защитит вас от других, более весомых угроз. \
                <br /><br />Чтобы максимально снизить риск кражи данных, стоит заходить только на сайты, где не нужно вводить личные данные или использовать программы, которые создают виртуальное пространство для работы в сети.✅' },
            { text: 'Буду делать все то же самое, что и дома, ведь Wi-Fi есть Wi-Fi.', isCorrect: false, advice: 'Общественный Wi-Fi может быть небезопасным, так как трафик в таких сетях часто не шифруется. Злоумышленники могут легко перехватить твои данные и получить доступ к твоим личным данным. \
                <br /><br />Чтобы снизить риск кражи данных, стоит заходить только на сайты, где не нужно вводить личные данные или использовать программы, которые создают виртуальное пространство для работы в сети.✅' },
            { text: 'Буду заходить только на сайты, где не нужно вводить личные данные или буду использовать программы, которые создают виртуальное пространство.', isCorrect: true, advice: 'Отлично! Это очень разумно и осторожно. Общественный Wi-Fi может быть небезопасным, так как трафик в таких сетях часто не шифруется, и злоумышленники могут перехватить твои данные. \
                <br /><br />Заходя только на сайты, где не нужно вводить личные данные, ты снижаешь риск утечки конфиденциальной информации.🤝' }
            
        ]
    },
    5: {
        text: 'Гуляя по улице, ты нашёл флешку. Что сделаешь?',
        image: '../Security-Testing/assets/image/question5-image.jpg',
        options: [
            { text: 'Подключу к компьютеру, там я могу найти данные о ее владельце, чтобы вернуть ему его вещь.', isCorrect: false, advice: 'Подключение неизвестной флешки к своему компьютеру — это очень рискованный шаг. Флешка может содержать вирусы, программы-шпионы или другое вредоносное ПО, которое может повредить файлы на компьютере или украсть личную информацию. \
                <br /><br />Гораздо лучше, если вы предоставите эту работу профессионалам и отнесете флешку в сервисный центр.🤝' },
            { text: 'Пройду мимо, так я максимально обезопашу себя.', isCorrect: false, advice: 'Это, безусловно обезопасит вас, но другие, менее осведомленные прохожие, подобрав эту флешку могут подключить ее к своему компьютеру, тем самым заразив себя вредоносным ПО. \
                <br /><br />Лучшим решением для себя и окружающих будет отнести неизвестную флешку в сервисный центр, где ее смогут безопасно проверить профессионалы.🤝' },
            { text: 'Отнесу ее в сервисный центр. ', isCorrect: true, advice: 'Отличный выбор! Это самое безопасное решение. Найденная флешка может содержать вирусы или вредоносное программное обеспечение, которое может повредить ваш или чей-либо еще компьютер или украсть с него данные. \
                <br /><br />Специалисты в сервисном центре смогут безопасно проверить содержимое флешки и убедиться в ее безопасности.✅' }
        ]
    },
    6: {
        text: 'Твой друг написал тебе сообщение с просьбой перевести ему деньги на карту, завтра он обещает все вернуть. Что ты сделаешь?',
        image: '../Security-Testing/assets/image/question6-image.jpg',
        options: [
            { text: 'Перезвоню другу и спрошу что-то личное, чтобы удостовериться, что его не взломали.', isCorrect: true, advice: 'Это самое безопасное решение. Мошенники часто взламывают чужие аккаунты в социальных сетях и мессенджерах, чтобы выманивать деньги у друзей и знакомых жертвы. \
                <br /><br />Перезвонив другу и задав ему личный вопрос, ответ на который знаете только вы двое, вы сможете убедиться в том, что общаетесь именно с ним, а не с мошенником.😉' },
            { text: 'Сразу же переведу ему нужную сумму, друзья всегда должны помогать друг другу.', isCorrect: false, advice: 'Даже если вы полностью доверяете своему другу, не стоит спешить в такой ситуации. Злоумышленники могли взломать аккаунт друга и теперь просят деньги от его имени. Переведя деньги, вы можете навсегда потерять их. \
                <br /><br />В такой ситуации гораздо лучше было бы позвонить другу и спросить у него что-нибудь личное, чтобы удостовериться, что вы разговариваете именно с ним.✅' },
            { text: 'Обращусь к знакомому, который точно может перевести другу деньги.', isCorrect: false, advice: 'Обращаетесь к знакомому, вы подвергаете риску не только себя, но еще и знакомого. Аккаунт друга может быть взломан и теперь злоумышленники просят деньги от его имени. Переведя деньги, вы можете навсегда потерять их. \
                <br />В такой ситуации самостоятельно лучше вообще не обращаться к другим людям за деньгами. Если ваш друг действительно не в курсе происходящего, и деньги, переведенные вашим знакомым, не будут возвращены, это может негативно сказаться на ваших отношениях с знакомыми. \
                <br /><br />Гораздо лучше было бы позвонить другу и спросить у него что-нибудь личное, чтобы удостовериться, что вы разговариваете именно с ним.✅' }
        ]
    },
    7: {
        text: '',
        image: '../Security-Testing/assets/image/question7-image.jpg',
        options: [
            { text: '', isCorrect: true, advice: '' },
            { text: '', isCorrect: false, advice: '' },
            { text: '', isCorrect: false, advice: '' }
        ]
    },
    8: {
        text: '',
        image: '../Security-Testing/assets/image/question8-image.jpg',
        options: [
            { text: '', isCorrect: true, advice: '' },
            { text: '', isCorrect: false, advice: '' },
            { text: '', isCorrect: false, advice: '' }
        ]
    },
    9: {
        text: '',
        image: '../Security-Testing/assets/image/question9-image.jpg',
        options: [
            { text: '', isCorrect: true, advice: '' },
            { text: '', isCorrect: false, advice: '' },
            { text: '', isCorrect: false, advice: '' }
        ]
    },
    10: {
        text: '',
        image: '../Security-Testing/assets/image/question10-image.jpg',
        options: [
            { text: '', isCorrect: true, advice: '' },
            { text: '', isCorrect: false, advice: '' },
            { text: '', isCorrect: false, advice: '' }
        ]
    }
}

let questionNumber = 1

function renderAdvice(src, text) {
    return `
        <img 
        src="${src}" 
        alt="Картинка совета" 
        class="menu__advice-image"
        width="180"
        />
        <p class="menu__advice-text">${text}</p>
        <div class="menu__button-wrapper"> 
            <button class="menu__button" onclick="renderQuestion()">Дальше</button>
        </div>
    `
}

function scoreIncrement() {
    for (let i = 1; i < 6; i++) {
        setTimeout(() => {
            score.textContent = Number(score.textContent) + 1
        }, i * 100)
    }
}

function renderConclusion() {
    if (Number(score.textContent) % 5 === 0) {
        const finalScore = score.textContent
        const questionsPassed = Number(finalScore) / 5
        const advice = questionsPassed > 5
        ? 'Отлично! У вас хорошие знания в области интернет-безопасности. Продолжайте быть бдительными в сети, и вы будете в безопасности!🤝'
        : 'Похоже вы только начинаете свой путь к интернет-грамотности. Помните каждый шаг к повышению своей интернет-осведомленности — это уже победа!😉'
        menu.style.boxShadow = questionsPassed > 5 ? 'var(--grin-shadow)' : 'var(--red-shadow)'
        menu.innerHTML = `
                <h3 class="conclusion">Ваш результат:</h3>
                <span class="menu__questions-passed">${questionsPassed}/10</span>
                <span class="menu__final-score">Баллов: <span id="score">${finalScore}</span></span>
                <p class="menu__final-advice" id="final-advice">${advice}</p>
                <div class="menu__button-wrapper">
                    <a href="https://akudera.github.io/Security-Testing/questions/index.html" class="menu__button">Пройти тест еще раз</a>
                </div>
                `
    } else {
        setTimeout(renderConclusion, 100)
    }
}

function nextQuestion(answerId) {
    const question = questions[questionNumber]
    if (!question) return

    const selectedAnswer = question.options[answerId - 1]
    if (!selectedAnswer) {
        console.error('Некорректный выбор ответа!')
        return
    }

    const adviceImage = selectedAnswer.isCorrect ? '../Security-Testing/assets/image/feather.png' : '../Security-Testing/assets/image/breakFeather.jpg'
    menu.style.boxShadow = selectedAnswer.isCorrect ? 'var(--grin-shadow)' : 'var(--red-shadow)'
    if (selectedAnswer.isCorrect) {
        scoreIncrement()
        scoreCounter.style.display = 'inline'
    }
    
    questionContainer.innerHTML = renderAdvice(adviceImage, selectedAnswer.advice)
    questionNumber++
}

function renderQuestion() {
    const question = questions[questionNumber]
    if (question) {
        questionContainer.innerHTML = menuEl
        menu.style.boxShadow = 'var(--blue-shadow)'
        scoreCounter.style.display = 'none'

        document.getElementById('question-count').textContent = questionNumber
        document.getElementById('question').textContent = question.text
        const questionImageEl = document.getElementById('image')
        questionImageEl.src = question.image
        questionImageEl.setAttribute('width', 200)
        questionImageEl.style.aspectRatio = '1/1'

        question.options.forEach((option, index) => {
            document.getElementById(`${index + 1}`).textContent = option.text
        })
    } else {
        renderConclusion()
    }
}

renderQuestion()
'use strict'

const questionContainer = document.getElementById('question-container')
const menu = document.getElementById('menu')
const menuEl = questionContainer.innerHTML

const answers = {
    1: {
        text: 'Ты получил(а) сообщение в социальной сети от незнакомого человека, который предлагает тебе "супер-выгодный" способ заработка в интернете. Что ты сделаешь?',
        image: '../Security-Testing/assets/image/question1-image.jpg',
        options: [
            { text: 'Немедленно соглашусь, ведь это шанс разбогатеть!', isCorrect: false, advice: 'Представь себе, что к тебе на улице подходит незнакомый человек и предлагает отдать ему все свои сбережения, обещая взамен в десять раз больше. Скорее всего, ты бы отказался(лась), верно? В интернете действуют те же правила. Если предложение кажется слишком хорошим, чтобы быть правдой, скорее всего, это обман. В данном случае, согласившись на предложение незнакомца в интернете, ты рискуешь потерять свои личные данные, деньги или даже стать жертвой киберпреступления.' },
            { text: 'Проигнорирую сообщение и заблокирую отправителя.', isCorrect: true, advice: 'Отличный выбор! Игнорирование и блокировка отправителя это самое разумное решение. Помните, ваше время и безопасность ценны, и не стоит тратить их на общение с подозрительными личностями.' },
            { text: 'Перейду по ссылкам, которые он прислал, чтобы узнать подробности.', isCorrect: false, advice: 'Переходя по подозрительным ссылкам, присланным незнакомцами, ты рискуешь попасть на фишинговый сайт, который выглядит как настоящий, но на самом деле создан для кражи твоих данных. Ты можешь случайно скачать вирус на свое устройство или раскрыть свою личную информацию мошенникам. Прежде чем переходить по ссылкам, убедись в их безопасности и надежности источника.' }
        ]
    },
    2: {
        text: 'Твой друг(подруга) прислал(а) тебе ссылку на забавный тест "Узнай, кто ты из персонажей современного кино". Ссылка выглядит немного странно. Как поступишь?',
        image: '../Security-Testing/assets/image/question2-image.jpg',
        options: [
            { text: 'Сразу же пройду тест, ведь это интересно!', isCorrect: false, advice: 'За ссылкой на "интересный тест" может скрываться фишинговый сайт, который украдет твой логин и пароль от социальной сети или других важных аккаунтов. Мошенники могут использовать такие сайты для распространения вирусов или получения доступа к твоим личным данным, включая фотографии, сообщения и финансовую информацию. В результате ты можешь потерять контроль над своим аккаунтом или даже потерять деньги.' },
            { text: 'Спрошу у друга(подруги), уверен(а) ли он(а) в безопасности этой ссылки, и проверю ее с помощью онлайн-сервиса проверки ссылок', isCorrect: true, advice: 'Молодец! Это очень безопасный подход. Даже если ссылка пришла от друга, всегда лучше перестраховаться, ведь аккаунт друга тоже может быть взломан. Проверка ссылки с помощью онлайн-сервиса — это дополнительная мера предосторожности, которая поможет убедиться в ее надежности.' },
            { text: 'Перешлю ссылку всем своим контактам, чтобы они тоже прошли тест.', isCorrect: false, advice: 'Пересылая подозрительные ссылки своим друзьям, ты можешь стать причиной распространения вирусов и мошенничества в интернете. Твои друзья могут доверять тебе и переходить по ссылкам без проверки, что приведет к утечке их личных данных или инфицированию устройств вирусами. Если ты хочешь поделиться интересным контентом с друзьями, всегда проверяй ссылки на безопасность и надежность источника.' }
        ]
    }
}

let questionNumber = 1

function renderAdvice(src, width, text) {
    return `
        <img 
        src="${src}" 
        alt="Картинка совета" 
        class="menu__advice-image"
        width="${width}"
        />
        <p class="menu__advice-text">${text}</p>
        <button class="menu__button" onclick="renderQuestion()">Дальше</button>
    `
}

function nextQuestion(questionId) {
    const question = answers[questionNumber];
    if (!question) return;

    const selectedAnswer = question.options[questionId - 1];
    if (!selectedAnswer) return;

    const adviceImage = selectedAnswer.isCorrect ? '../Security-Testing/assets/image/rightAnswer.jpg' : '../Security-Testing/assets/image/badAnswer.jpg';
    menu.style.boxShadow = selectedAnswer.isCorrect ? 'var(--grin-shadow)' : 'var(--red-shadow)';
    
    questionContainer.innerHTML = renderAdvice(adviceImage, 100, selectedAnswer.advice);
    questionNumber++;
}

function renderQuestion() {
    const question = answers[questionNumber];
    if (!question) return;

    questionContainer.innerHTML = menuEl;
    menu.style.boxShadow = 'var(--blue-shadow)'

    document.getElementById('question-count').textContent = questionNumber;
    document.getElementById('question').textContent = question.text;
    const questionImageEl = document.getElementById('image');
    questionImageEl.src = question.image;
    questionImageEl.setAttribute('width', 200);
    questionImageEl.style.aspectRatio = '1/1';

    question.options.forEach((option, index) => {
        document.getElementById(`${index + 1}`).textContent = option.text;
    });
}

renderQuestion()
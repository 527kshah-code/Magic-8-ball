function shakeMagic8Ball() {
    const question = prompt("What is your question for the Magic 8 Ball");

    if (question === null) {
        document.getElementById('response-text').innerText = 'Please Ask a Question!';
        document.getElementById('response-text').classList = 'lead text-warning';
        document.getElementById('response-img').src = 'unHappyFace.jpg';
    }

    if (!question.trim()) {
        alert('Please ask a valid question!');
    }

    const randomNumber = Math.floor(Math.random()*9);
    let answer, image, color;

    switch (randomNumber) {
        case 0:
            answer = 'Signs point to Yes';
            image = 'yes.1-image.jpg';
            color = "text-success";
            break;
        case 1:
            answer = 'You may rely on it';
            image = 'yes.2-image.jpg'
            color = "text-success";
            break;
        case 2:
            answer = 'Most likely';
            image = 'yes.3-image.jpg'
            color = "text-success";
            break;
        case 3:
            answer = 'Concentrate and ask again';
            image = 'maybe.1-image.webp'
            color = "text-success";
            break;
        case 4:
            answer = "Can't predict now";
            image = 'maybe.2-image.jpg'
            color = "text-success";
            break;
        case 5:
            answer = 'Ask again later';
            image = 'maybe.3-image.jpg'
            color = "text-success";
            break;
        case 6:
            answer = 'My sources say no';
            image = 'No.1-image.jpg'
            color = "text-success";
            break;
        case 7:
            answer = 'Very doubtful';
            image = 'No.2-image.jpg'
            color = "text-success";
            break;
        case 8:
            answer = "Don't count on it";
            image = 'No.3-image.jpg'
            color = "text-success";
            break;
    }

        document.getElementById('response-text').innerText = answer
        document.getElementById('response-text').classList = `display-4 text-center strong${color}`
        document.getElementById('response-img').src = image
}
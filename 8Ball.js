function shakeMagic8Ball() {
    const question = prompt("What is your question for the Magic 8 Ball");

    // Handle no question
    if (question === null || !question.trim()) {
        document.getElementById('response-text').innerText = 'Please ask a valid question!';
        document.getElementById('response-text').className = 'lead text-warning';
        document.getElementById('response-img').src = 'unHappyFace.jpg';
        return;
    }

    const responseText = document.getElementById('response-text');
    const responseImg = document.getElementById('response-img');

    // Before the shake finishes, show “Shaking…”
    responseText.innerText = "Shaking...";
    responseImg.classList.add("shake");

    // Wait 1 second to “finish the shake”
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 9); // 0–8
        let answer, image;

        switch (randomNumber) {
            case 0:
                answer = 'Signs point to Yes';
                image = 'yes.1-image.jpg';
                break;
            case 1:
                answer = 'You may rely on it';
                image = 'yes.2-image.jpg';
                break;
            case 2:
                answer = 'Most likely';
                image = 'yes.3-image.jpg';
                break;
            case 3:
                answer = 'Concentrate and ask again';
                image = 'maybe.1-image.webp';
                break;
            case 4:
                answer = "Can't predict now";
                image = 'maybe.2-image.jpg';
                break;
            case 5:
                answer = 'Ask again later';
                image = 'maybe.3-image.jpg';
                break;
            case 6:
                answer = 'My sources say no';
                image = 'No.1-image.jpg';
                break;
            case 7:
                answer = 'Very doubtful';
                image = 'No.2-image.jpg';
                break;
            case 8:
                answer = "Don't count on it";
                image = 'No.3-image.jpg';
                break;
        }

        // Update the text + image with the answer
        responseText.innerText = answer;
        responseText.className = 'display-4 text-center text-info';
        responseImg.src = image;

        // Stop shaking
        responseImg.classList.remove("shake");

    }, 1000);
}

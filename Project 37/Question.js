class Question {
    constructor() {
        this.input = createInput("Your Name");
        this.input1 = createInput("Your Answer (Alphabet)")
        this.button = createButton('Submit');
        this.greeting = createElement('h2')
        this.greeting1 = createElement('h3');
    }

    hide()
    {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.input1.hide();
        this.greeting1.hide();
    }

    display()
    {
        var title = createElement('h2');
        title.html("My Quiz Game");
        title.position(375,25);

        var question1 = createElement('h3');
        question1.html("Question: What is 5+5?")
        question1.position(100,75);

        var answer1 = createElement('h4');
        answer1.html("A) 7")
        answer1.position(100,125)

        var answer2 = createElement('h4');
        answer2.html("B) 0")
        answer2.position(100,150)

        var answer3 = createElement('h4');
        answer3.html("C) 25")
        answer3.position(100,175)

        var answer4 = createElement('h4');
        answer4.html("D) 10")
        answer4.position(100,200)


        var name = createElement('h4');
        name.html("Name:")
        name.position(550,125)

        var answer = createElement('h4')
        answer.html("Answer:")
        answer.position(550,190);

        this.input.position(550,175);
        this.input1.position(550,240);
        this.button.position(560,280);


        this.button.mousePressed(()=>{
            this.input.hide();
            this.input1.hide();
            this.button.hide();
            name.hide();
            answer.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount();


        })
        
    }
}
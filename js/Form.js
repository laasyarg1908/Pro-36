class Form
{
    constructor()
    {

    }

    display()
    {
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(130, 0);

        var input = createInput("Name");
        var button = createButton("Play");
        var greeting = createElement('h3');

        input.postion(130, 160);
        button.position(250, 200);
        button.mousePressed(() => {
            input.hide();
            button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(330, 160);

        })
    }
}
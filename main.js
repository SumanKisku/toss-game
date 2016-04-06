var toss = function () {
    var userChoice = prompt("Choose 'head' or 'tail'. Write down.");
    var computerChoice = Math.random();
    var headOrTail;

    if (computerChoice > 0.45) {
        headOrTail = "head";
        if (userChoice == headOrTail) {
            alert("Yay, you win the toss its a head, keep tossing");
        } else {
            alert("Ahh,you loose the toss its a head, try again.");
        }
    } else {
        headOrTail = "tail";
        if (userChoice == headOrTail) {
            alert("Yay, you win the toss its a tail, keep tossing");
        } else {
            alert("Ahh,you loose the toss its a tail, try again.");
        }
    }
}
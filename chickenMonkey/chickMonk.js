var count = 0;
for (let i = 0; i <= 100; i++) {
    var currentnumber = count += 1;
    if (currentnumber % 5 === 0 && currentnumber % 7 === 0) {
        document.write("chickenMonkey!");
    }
    else if (currentnumber % 5 === 0) {
        document.write("chicken!");
    } else if (currentnumber % 7 === 0) {
        document.write("Monkey!");
    }
    else {
        document.write(currentnumber);
    }

}
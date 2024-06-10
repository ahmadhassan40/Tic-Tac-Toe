let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelectorAll('#reset');
let newgamebtn = document.querySelectorAll('#new');
let msgcontainer = document.querySelector('.msg-container'); 
let msg = document.querySelector('#msg'); 

let turn0 = true;

const winPattern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=> {
        console.log("Box is clicked");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const reset = () => {
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide"); 
    disableboxes();
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos0val = boxes[pattern[0]].innerText;
        let pos1val = boxes[pattern[1]].innerText;
        let pos2val = boxes[pattern[2]].innerText;

        if (pos0val !== "" && pos1val !== "" && pos2val !== "" ) {
            if (pos0val === pos1val && pos1val === pos2val) {
                console.log("Winner", pos0val);
                showWinner(pos0val);
            }
        }
    }
};

newgamebtn.forEach(btn => {
    btn.addEventListener("click", reset);
});

resetbtn.forEach(btn => {
    btn.addEventListener("click", reset);
});


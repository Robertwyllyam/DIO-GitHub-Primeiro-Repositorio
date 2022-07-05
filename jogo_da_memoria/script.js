const cards = document.querySelectorAll('.card')

let hasFlippedCard = false
let firstCard, secondCard
let lockBoard = false;
let counter = 0;

function flipCard(card) {

    if (this === firstCard) {

        return
    }

    if (lockBoard) return;

    this.classList.add('flip')

    if (!hasFlippedCard) {

        hasFlippedCard = true
        firstCard = this;
        console.log(card)

        return

    }

    secondCard = this

    hasFlippedCard = false

    if(checkCardMatch()){

        counter += 1
        console.log(counter)

    }else{

        console.log('not match')

    }

    if (counter == 6){

        checkWin(counter)

        counter = 0

        shuffleCards()

        cards.forEach(card => {

            card.addEventListener('click', flipCard)
        
        });

        


    }
 

}


function disableCards() {

    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)

    resetBoard()
}

function unflipCards() {

    lockBoard = true;

    setTimeout(() => {

        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')

        lockBoard = false;

        resetBoard()

    }, 1500)




}

function checkCardMatch() {

    let match = firstCard.dataset.card === secondCard.dataset.card

    if (match) {

        disableCards()
        return match

    } else {

        unflipCards()

    }

    return match    

}

function resetBoard() {

    [hasFlippedCard, lockBoard] = [false, false]

    [firstCard, secondCard] = [null, null]

}

(function shuffleCards(){

    cards.forEach(card =>{

        let randomPos = Math.floor(Math.random() * 12)

        card.style.order = randomPos

    })

})();

function shuffleCards(){

    cards.forEach(card =>{

        let randomPos = Math.floor(Math.random() * 12)

        card.style.order = randomPos

    })

}

cards.forEach(card => {

    card.addEventListener('click', flipCard)

});

function checkWin(counter){

    if(counter === 6){

        alert('Você ganhou! Ao clicar em ok, vamos começar um novo jogo!')

        shuffleCards()
    
    
        cards.forEach(card=>{

            card.classList.remove('flip')

        })


        return true
        

                    
    
        


    }else{

        console.log('Ainda não ganhou')

        return false

    }

}
const words=['woodnote','invisibleness','pretentiously','radiosotes','goddamn','cautious','overassertive','overreacting','salvations','intramolecular','abandons','laudanums','bruiters','ferryage','upsurgerd','annotators','tabletop','think','irregular','ambulated','monotones','manometry','hiccuping','vision','reprobate','balloon','flower','desk','cat','love','room','tiger','rabbit','eagle','bed','rose','human','computer','insulation','jazz','zebra','radiator','universe','beard']
let seenWords=[]
let container=document.querySelector('.container')
let gameOverScreen=document.querySelector('.game-over-screen')
let wordElement=document.querySelector('.word')
let livesElement=document.querySelector('.lives')
let scoreElement=document.querySelector('.score')
let seenButton=document.querySelector('.seen-button')
let newButton=document.querySelector('.new-button')
let lives=3
let score=0
let word=''
console.log(wordElement,livesElement,scoreElement)



function startRound(){
    container.style.display='flex'
    gameOverScreen.style.display='none'
    if(lives===0)gameOver()
    let randomNumber=Math.random()
    console.log(randomNumber)

    if (randomNumber<0.5 && seenWords.length>0){
        word=words[Math.floor(Math.random()*seenWords.length)]
    }else{
        word=words[Math.floor(Math.random()*words.length)]
    }
    wordElement.innerHTML=word
}

startRound()

seenButton.addEventListener('click',seenWordGuess)
newButton.addEventListener('click',newWordGuess)


function newWordGuess(){
    if(seenWords.includes(word)){
        lives-=1
        livesElement.innerHTML=lives
    }else{
        score+=1
        scoreElement.innerHTML=score
    }
    seenWords.push(word)
    console.log(seenWords)
    startRound()
}
function seenWordGuess(){
    if(seenWords.includes(word)){
        score+=1
        scoreElement.innerHTML=score
    }else{
        lives-=1
        livesElement.innerHTML=lives
    }
    console.log(seenWords)
    startRound()
}
function gameOver(){
    container.style.display='none'
    gameOverScreen.style.display='flex'
    let restartButton=document.querySelector('.restart-button')
    let endScore=document.querySelector('.end-score')
    endScore.innerHTML=score
    lives=3
    score=0
    restartButton.addEventListener('click',startRound)
}
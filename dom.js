let str = 'The Quick Brown Fox Jumps Over The Lazy Dog'

document.querySelector('h1').textContent = str

document.querySelectorAll('ul, li').textContent = str
// document.querySelectorAll('ol, li').textContent = str

const newStatement = document.querySelector('h1')

newStatement.textContent = str

// document.querySelector('h1').textContent = str

lists = document.querySelectorAll('ul li')
// Uppercase
lists[0].textContent = str.toUpperCase()

// lowerCase
lists[1].textContent = str.toLowerCase()

// length of string str
lists[2].innerHTML = '<strong> Length of string=  </strong>' + str.length

// using charAt
lists[3].innerHTML = '<strong> character at 10=  </strong>'.concat(str.charAt(10))

// replace
lists[4].innerHTML = str.replace('dog, cat')

// replace all
lists[5].innerText = str.toLowerCase().replaceAll('the', 'that')


document.getElementById('week1').innerText = "society grows when men plan trees whose shed \nthey will never seat under"


document.getElementById('week2').textContent = `fox is at index ${str.indexOf('Fox')}`


document.getElementById('week3').textContent = `fox is at index ${str.indexOf('cat')}`

document.querySelector('#week4').textContent = str.lastIndexOf('o')


document.getElementsByClassName('front')[0].textContent = 'does the string contain Lazy: '+ str.includes('Lazy')

document.getElementsByClassName('front')[1].textContent = 'does the string contain hardworking: '+ str.includes('hardworking')

document.querySelectorAll('.front')[2].innerHTML = 'does the string start with The: ' + str.startsWith('The')

document.querySelectorAll('.front')[3].innerHTML = 'count the number of words: ' + str.split(' ').length

document.getElementsByTagName('li')[10].textContent = str.slice(0, str.indexOf('x')+1)

array = [1,4,2,6,5,7]

nameArray = ['omotayo', 'femi', 'yetunde', 'tolani']

console.log(array.sort().reverse())


console.log(array.sort((x,y) => x -y))


console.log(nameArray.sort((x,y) => x.length - y.length))


people.filter(person => person.length())


arr = [22, 4, 56, 8, 8, 90]

console.log(arr.reduce((num1, num2) => num1 * num2, 1))

const mathScore = prompt('input score for MathExam');
const englishScore = prompt('input score for englishExam');


averageScore = englishScore + mathScore / 2 

if (englishScore > 50 && mathScore > 50){
    console.log('Promoted to the next class')
}
else if (englishScore > 50 && mathScore< 50){
    console.log('repeat a math exam')
}
else if (mathScore > 50 && englishScore< 50){
    console.log('repeat a english')
}
else {
    console.log('repeat class')
}

englishScore > 50 && mathScore > 50 ? alert('Promoted to next class'):
englishScore > 50 && mathScore< 50 ? alert('repeat Math exam'):
mathScore > 50 && englishScore< 50 ? alert('repeat english exam'): alert('repeat class')


mathScore >= 50 || englishScore >=50 ?
alert(`you need to reseat ${mathScore >= 50 ? 'english': 'mathematics'}`): alert('You are to repeat the class')
alert('you need to reset ', (mathScore >=50 ? 'english': 'mathematics'))




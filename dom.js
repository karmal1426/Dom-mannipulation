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
const display = document.querySelectorAll('.display span')[0]
const display1 = document.querySelectorAll('.display span')[1]
const num = document.querySelectorAll('.num')
const op = document.querySelectorAll('.op')
const res = document.querySelector('.result')
const er = document.querySelector('.erase')
const cl = document.querySelector('.cl')

let val = ''
let a = 0
let b = 0
let s = 0

num.forEach((item, i) => {
  item.addEventListener('click', () => {
    if(i===9){
        display.innerHTML += '0'
        val += '0'
    } else {
        display.innerHTML += `${i + 1}`
        val += (i + 1)
    }
  })
})

op[0].addEventListener('click', () => {
  a = Number(val)
  display.innerHTML = ''
  if (s === '+') {
    b = Number(b) + a
  } else {
    s = '+'
    b = Number(b) + a
  }
  display1.innerHTML = b
  val = ''
})
op[1].addEventListener('click', () => {
  display.innerHTML = ''
  a = Number(val)
  if (s === '-') {
    b = Number(b) - a
  } else {
    s = '-'
    b = a
  }
  display1.innerHTML = b
  val = ''
})
op[2].addEventListener('click', () => {
  display.innerHTML = ''
  a = Number(val)
  if (s === '*') {
    b = Number(b) * a
  } else {
    s = '*'
    b = a
  }
  display1.innerHTML = b
  val = ''
})
op[3].addEventListener('click', () => {
  display.innerHTML = ''
  a = Number(val)
  if (s === '/') {
    b = Number(b) / a
  } else {
    s = '/'
    b = a
  }
  display1.innerHTML = b
  val = ''
})
op[4].addEventListener('click', () => {
  display.innerHTML += '.'
  val += '.'
})
er.addEventListener('click', () => {
  if (val.length > 0) {
    val = val.slice(0, -1)
    display.innerHTML = val
    console.log(val)
  }
})
cl.addEventListener('click', () => {
  display.innerHTML = ''
  val = ''
  b = ''
  a = ''
  s = ''
  display1.innerHTML = ''
})

res.addEventListener('click', () => {
  a = Number(val)
  if (s === '+') {
    b = Number(b) + a
    display.innerHTML = b
  } else if (s === '-') {
    b = Number(b) - a
    display.innerHTML = b
  } else if (s === '*') {
    b = Number(b) * a
    display.innerHTML = b
  } else if (s === '/') {
    b = Number(b) / a
    display.innerHTML = b
  }
  val = ''
  a = 0
})

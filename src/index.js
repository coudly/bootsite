
console.log('hello world')

const el = document.getElementById('__react_content')
el.innerHTML = 'hello world 323'


function b(p1) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('test ' + p1)
    }, 2000)
  })
}

async function a() {
  const p2 = await b('world')
  console.log(p2)
  return p2;
}

a().then(r => {
  console.log(r + '...')
})
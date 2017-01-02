const employee = [
  '10001', '10002', '10003', '10004', '10005'
]

const el = document.getElementById('__react_content')
el.innerHTML = 'hello world'

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
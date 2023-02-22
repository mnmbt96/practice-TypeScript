export default function notExistSample() {
  let name = null
  console.log('notExist sample 1:', typeof name, name)
  //notExist sample 1: object null

  name = 'Manami'
  if (!name) {
    console.log('notExist sample 2:', 'My name is not given')
  } else {
    console.log('notExist sample 3:', 'My name is ' + name)
  }
  //notExist sample 3: My name is Manami

  let age = undefined
  console.log('notExist sample 4:', typeof age, age)
  //notExist sample 1: undefined undefined

  age = 26
  if (!name) {
    console.log('notExist sample 5:', 'My age is secret')
  } else {
    console.log('notExist sample 6:', 'My age is ' + age)
  }
  //notExist sample 6: My age is 26
}

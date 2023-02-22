export default function primitiveSample() {
  let name: string = 'Manami'
  // name = 123; //できない
  console.log('primitive sample 1:', typeof name, name)
  //primitive sample 1: string Manami

  let age: number = 26
  // age = "26" //できない
  console.log('primitive sample 2:', typeof age, age)
  //primitive sample 2: number 26

  let isSingle: boolean = true
  // isSingle = "foo" //できない
  console.log('primitive sample 3:', typeof isSingle, isSingle)
  //primitive sample 3: boolean true

  const isOver20: boolean = age >= 20
  console.log('primitive sample 4:', typeof isOver20, isOver20)
  //primitive sample 4: boolean true
}

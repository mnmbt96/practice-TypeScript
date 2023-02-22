export default function anySample() {
  let name: any = 'Manami' //String
  console.log('any sample 1:', typeof name, name)
  //any sample 1: string Manami

  name = 26
  console.log('any sample 1:', typeof name, name)
  //any sample 1: number 26
}

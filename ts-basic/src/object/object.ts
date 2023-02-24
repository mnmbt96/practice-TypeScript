export default function objectSample() {
  const a: object = {
    name: 'Manami',
    age: 26,
  }
  // a.name
  // ERROR: Property 'name' does not exist on type 'object'.

  //オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('object object sample 1:', country)

  country = {
    language: 'English',
    name: 'United States of America',
  }
  console.log('object object sample 2:', country)

  //オプショナルとリードオンリー
  const user: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 26,
    lastName: 'Yamada',
    firstName: 'Taro',
  }
  user.gender = 'male'
  user.lastName = 'Kamado'
  // user.firstName = 'Tanjiro'
  // ERROR: Cannot assign to 'firstName' because it is a read-only property.
  console.log('object object sample 3:', user)

  //インデックスシグネチャ
  const capitals: {
    [country: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }
  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('object object sample 4:', capitals)

  //
}

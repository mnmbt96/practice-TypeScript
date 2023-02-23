// import World from "./world";

// const root = document.getElementById("root");
// const world = new World("Hello World!");
// world.sayHello(root);

//03. Primitive Type
// import { primitiveSample, notExistSample, anySample, unknownSample } from './basic'
// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

//04. Functions
import { logMessage } from './function/basic'
import { isUserSignedIn, isUserSignedIn2, sumProductPrice } from './function/parameters'
logMessage('Hello TypeScript')
isUserSignedIn('ABC', 'Manami')
isUserSignedIn('DEF')
isUserSignedIn2('ABC')
isUserSignedIn2('DEF')
const sum = sumProductPrice(100, 200, 300, 400, 500)
console.log('Function parameter sample5 : ', sum)

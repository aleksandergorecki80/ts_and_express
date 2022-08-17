
import { Option, none, some } from 'fp-ts/Option'


import { pipe, flow } from 'fp-ts/lib/function'
import * as O from "fp-ts/Option"




//      Map


const foo = {
  bar: 'hello',
}

const mapPipe =  pipe(foo, (f) => f.bar)
console.log(mapPipe, ' = mapPipe')

interface Foofoo {
  bar: string | undefined
}

const foofoo: Foofoo  = {
  bar: 'hello',
} 

const fofoPipe =  pipe(foofoo, (f) => f?.bar) // hello
console.log(fofoPipe, ' = fofoPipe')

const fofoPipeObj =  pipe(foofoo, ({bar}) => bar) // hello
console.log(fofoPipeObj, ' = fofoPipeObj')

// const fooNulable = pipe(
//   foo,
//   O.fromNullable,
//   O.map(({ bar: { buzz } }) => buzz),
// )

// console.log(fooNulable, ' = fooNulable')

interface Fizz {
  buzz: string
}

interface Doo {
  bar?: Fizz
}

const doo = { bar: undefined } as Doo | undefined

pipe(doo, (f) => f?.bar?.buzz) // undefined


const nulable1 =  pipe(
  foo,
  O.fromNullable,
  O.map(({ bar }) => bar),
) // { _tag: 'Some', value: 'hello' }

const nulable2 = pipe(
  undefined,
  O.fromNullable,
  O.map(({ bar }) => bar),
) // { _tag: 'None' }


console.log(nulable1, ' = nulable1')
console.log(nulable2, ' = nulable2')





const examplePipe = (a:any, b:any, c:any) => c(b(a))
const res =  examplePipe(
  1,
  (x:any) => x + 1,
  (x:any) => x + 5
)

console.log(res)
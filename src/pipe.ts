import { Option, none, some } from 'fp-ts/Option'
import { pipe, flow } from 'fp-ts/lib/function'

// PIPE
console.log(pipe, ' = pipe')


function add1(num: number): number {
  return num + 1
}

function multiply2(num: number): number {
  return num + 5
}

function toString(num: number): string {
    return `${num}`
  }

const result = pipe(1, add1, multiply2, toString)
console.log(result, '= result')
console.log(typeof result)

const flowResult = flow(add1, multiply2, toString)(2)
console.log(flowResult, '= flowResult')

function concat(
    a: number,
    transformer: (a: number) => string,
  ): [number, string] {
    return [a, transformer(a)]
  }

const concatResult = concat(1, (n) => pipe(n, add1, multiply2, toString)) 
console.log(concatResult , ' = concatResult')

console.log(none, ' = none')


//  We're going to define an exampleFunction that doesn't have any parameters and returns a pipe. 
// To start, pipe contains an object with three values: projects (independent getProjects function), 
// a users array, and a configuration object.

const getProjects = () => [{admin: false, id: 1}, {admin: true, id: 2}]


const exampleFunction = () =>
    pipe(
        {
            projects: getProjects(),
            users: [true, 5, "Lorem ipsum"],
            configuration: {},
        },
        (valuesFromObjectAbove) => ({
            ...valuesFromObjectAbove,
            adminProjects: valuesFromObjectAbove.projects.filter(
                (a) => a.admin === true
            ),
            notAdminProjects: valuesFromObjectAbove.projects.filter(
                (a) => a.admin === false
            ),
            user: valuesFromObjectAbove.users[1]
        })
    )

    console.log(exampleFunction(), ' = exampleFunction')
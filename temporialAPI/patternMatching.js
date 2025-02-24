//pattern matching
import { match } from "ts-pattern"

const result = match({
    type: "sucess",
    value: 40

}).with({
    type: "sucess"
}, ({ value }) => `sucess : ${value}`)
.with({
    type: "error"
}, ({ value }) => `sucess : ${value}`)
 .otherwise(()=>
    `unknown type `
 )
console.log(result)

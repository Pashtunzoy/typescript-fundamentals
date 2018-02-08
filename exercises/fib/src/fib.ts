
/**
 * Implement a generator function that can be used
 * to generate numbers in the Fibonacci Sequence
 */
export function* getFibSequence(): IterableIterator<number> {
    let oneAgo: number = 0;
    let twoAgo: number = 1;
    while(true) {
        let val: number =  oneAgo + twoAgo;
        twoAgo = oneAgo;
        oneAgo = val;
        yield val;
    }
}

let it = getFibSequence();

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

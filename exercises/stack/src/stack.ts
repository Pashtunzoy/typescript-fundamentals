import { log } from "util";

interface IStack<T> {
  push(item: T): IStack<T>;
  push(items: T[]): IStack<T>; 
  pop(): T | undefined;
  length(): number;
  print(): void;
}

export class Stack<T> implements IStack<T> {
  private stackArray: T[] = [];

  push(item: T): Stack<T>;
  push(items: T[]): Stack<T>; 

  push(itemOrItems: T | T[]): Stack<T> {
    if(itemOrItems instanceof Array) {
      itemOrItems.forEach((item: T) => this.stackArray.push(item as T));
    } else {
        this.stackArray.push(itemOrItems)
    }
    return this;
  }
  pop(): T | undefined {
   return this.stackArray.pop();
  }
  length(): number {
    return this.stackArray.length;
  }
  print(): void {
    console.log(this.stackArray);
  }
}

let l = new Stack<string>();

l.push(['cherry', 'apple']);
l.push('lemon');
console.log(l.length());
console.log(l.print());

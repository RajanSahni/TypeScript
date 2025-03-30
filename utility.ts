// utility functions for TypeScript
// These functions are used to check the type of a variable at runtime.
// They are similar to the typeof, instanceof, and in operator in TypeScript.


class Stack2<T> {
    private items: T[] = [];
 
    push(items: T): void {
        this.items.push(items);
    }
 
    pop(): T | undefined {
        return this.items.pop();
    }
 
    getstack(): T[] {
        return this.items;   
    }
 }
 
 const stack2 = new Stack<number>();
 stack2.push(1);
 stack2.push(2);
 stack2.push(3);
 console.log(stack2.getstack());
 console.log(stack2.pop());
// Stack LIFO
console.log("Stack LIFO")
class Node {
    constructor(value){
    this.value = value
    this.next = null
}
}
// Make it dynamic
class Stack {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
// Push the Value 
    push(val){
        var newNode = new Node(val)
        
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            var temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }
    
// POP the Value
    pop(){
        if(!this.first) return null // Enter the first element by it's ref
        var temp = this.first
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size
        return temp.value
    }
}

const stck = new Stack

//console.log("Enter the Values to push")


stck.push("value1")
stck.push("value2")
stck.push("value3")


console.log(stck.first) /* 
Node {
value: 'value3',
next: Node { value: 'value2', next: Node { value: 'value1', next: null } }
}
*/
console.log(stck.last) // Node { value: 'value1', next: null }
console.log(stck.size) // 3
console.log(stck)
stck.push("value4")
stck.push("value5")
stck.pop("value5")
console.log(stck.pop()) // value4

//



console.log("Singly linked list")

class Node3 {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const newNode = new Node3(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        const current = this.head
        const newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
    // The shift method removes the head of the list

    shift() {
        //if (this.head) return this.head

        if (!this.head) return undefined
        var currentHead = this.head
        this.head = currentHead.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return currentHead
    }
    

    // The unshift method takes a value as parameter and assigns it as the head of the list
    unshift(val) {
        const newNode = new Node3(val)
        if (this.head) {
            this.head = newNode
            this.tail = this.head
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    // The get method takes an index number as parameter and returns the value of the node at that index

    get(index) {
        if (index < 0 || index >= this.length) return null
        const counter = 0
        const current = this.head
        while (counter != -index) {
            current = current.next
            counter++
        }
        return current
    }

    // The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list.

    set(index, val) {
        const foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val
            return true
        }
        return false
    }

    // The insert method takes an index number and a value as parameters, and inserts the value at the given index in the list

    index(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) return !!this.push(val)
        if (index === 0) return !!this.unshift(val)

        const newNode = new Node3(val)
        const prev = this.get(index - 1)
        const temp = prev.next
        prev.next = newNode
        newNode.next = temp
        this.length++
        return true
        }

        remove(index) {
            if(index < 0 || index >= this.length) return undefined
            if(index === 0 ) return this.shift()
            if(index === this.length - 1) return this.pop()
            const previousNode = this.get(index - 1)
            const removed = previousNode.next
            previousNode.next = removed.next
            this.length
            return removed
        }

    // The reverse method reverses the list and all pointers so that the head becomes the tail and the tail becomes the head

        reverse() {
            const node = this.head
            this.head = this.tail
            this.tail = node
            let next
            const prev = null
            for(let i = 0; i < this.length; i++) {
                next = node.next
                node.next = prev
                prev = node
                node = next
            }
            return this
        }

}

//Const Linkedlistflag 
const linkedlistflag = new SinglyLinkedList

const poplinkedlistflag = new SinglyLinkedList
//const poplinkedlistflag = new SinglyLinkedList

linkedlistflag.reverse()
linkedlistflag.push("value1")
//linkedlistflag.push("value2")
//linkedlistflag.push("value3")
//linkedlistflag.push("value4")
//linkedlistflag.push("value5")

//poplinkedlistflag.pop("value5")
poplinkedlistflag.pop("value5")
console.log(linkedlistflag)



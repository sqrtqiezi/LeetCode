/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.list = []
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  return this.list[index] === undefined ? -1 : this.list[index]
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this.list.unshift(val)
}

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  this.list.push(val)
}

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (this.list.length >= index) {
    this.list.splice(index, 0, val)
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  this.list.splice(index, 1)
}

MyLinkedList.prototype.printAll = function() {
  console.log(this.list.length, this.list)
}

var obj =new MyLinkedList()
obj.addAtHead(0)
obj.printAll()
obj.addAtIndex(1,9)
obj.printAll()
obj.addAtIndex(1,5)
obj.printAll()
obj.addAtTail(7)
obj.printAll()
obj.addAtHead(1)
obj.printAll()
obj.addAtIndex(5,8)
obj.printAll()
obj.addAtIndex(5,2)
obj.printAll()
obj.addAtIndex(3,0)
obj.printAll()
obj.addAtTail(1)
obj.printAll()
obj.addAtTail(0)
obj.printAll()
obj.deleteAtIndex(6)
obj.printAll()

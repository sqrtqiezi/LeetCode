var MyLinkedListNode = function(val = 0, prev = null, next = null) {
  this.val = val;
  this.prev = prev;
  this.next = next;
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.size = 0;
  this.head = new MyLinkedListNode();
  this.tail = new MyLinkedListNode();

  this.head.next = this.tail;
  this.tail.prev = this.head;
};

MyLinkedList.prototype._findFromTail = function(index, curIndex, node) {
  if (index === curIndex) return node;
  if (node === this.head) return null;
  return this._findFromTail(index, curIndex - 1, node.prev);
};

MyLinkedList.prototype._findFromHead = function(index, curIndex, node) {
  if (index === curIndex) return node;
  if (node === this.tail) return null;
  return this._findFromHead(index, curIndex + 1, node.next);
};

MyLinkedList.prototype._find = function(index) {
  if (index > this.size / 2) {
    return this._findFromTail(index, this.size-1, this.tail.prev);
  }
  return this._findFromHead(index, 0, this.head.next);
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index >= this.size || index <0) return -1;
  let cur = this._find(index);
  if (cur !== null) {
    return cur.val;
  }
  return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  let node = new MyLinkedListNode(val, this.head, this.head.next);
  this.head.next.prev = node;
  this.head.next = node;
  this.size++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let node = new MyLinkedListNode(val, this.tail.prev, this.tail);
  this.tail.prev.next = node;
  this.tail.prev = node;
  this.size++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.size || index < 0) return;
  if (index == 0) this.addAtHead(val);
  else if (index == this.size) this.addAtTail(val);
  else {
    let cur = this._find(index);
    if (cur !== null) {
      cur = cur.prev;
      let node = new MyLinkedListNode(val, cur, cur.next);
      cur.next.prev = node;
      cur.next = node;
      this.size++;
    }
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index >= this.size || index < 0) return;
  let cur = this._find(index);
  if (cur !== null) {
    cur.prev.next = cur.next;
    cur.next.prev = cur.prev;
    this.size--;
  }
};

MyLinkedList.prototype.printAll = function() {
  let result = []
  let cur = this.head.next;
  while (cur !== this.tail) {
    result.push(cur.val)
    cur = cur.next
  }
  console.log(this.size, result)
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

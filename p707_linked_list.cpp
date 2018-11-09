#include <iostream>
using namespace std;

static const int _ = []() {
  ios::sync_with_stdio(false);
  cin.tie(nullptr);
  return 0;
}();

struct MyLinkedListNode
{
  int val;
  MyLinkedListNode* prev;
  MyLinkedListNode* next;

  MyLinkedListNode(int v) : val(v), next(nullptr), prev(nullptr) { }
  MyLinkedListNode(int v, MyLinkedListNode* p, MyLinkedListNode* n) : val(v), prev(p), next(n) { }
};

class MyLinkedList {
private:
  MyLinkedListNode* head;
  MyLinkedListNode* tail;
  int size;

  MyLinkedListNode* findFromTail(int index) {
    int i = size - 1;
    auto cur = tail->prev;
    while (cur != head) {
      if (i == index) {
        return cur;
      }
      i--;
      cur = cur->prev;
    }
    return nullptr;
  }

  MyLinkedListNode* findFromHead(int index) {
    int i = 0;
    auto cur = head->next;
    while (cur != tail) {
      if (i == index) {
        return cur;
      }
      i++;
      cur = cur->next;
    }
    return nullptr;
  }

  MyLinkedListNode* find(int index) {
    if (index > size / 2) {
      return findFromTail(index);
    }
    return findFromHead(index);
  }

public:
  /** Initialize your data structure here. */
  MyLinkedList() : size(0) {
    head = new MyLinkedListNode(0);
    tail = new MyLinkedListNode(0);

    head->next = tail;
    tail->prev = head;
  }

  ~MyLinkedList() {
    auto curr = head;
    auto del = head;
    while (curr) {
      del = curr;
      curr = curr->next;
      delete del;
    }
  }

  /** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
  int get(int index) {
    if (index >= size || index < 0) {
      return -1;
    }
    auto cur = find(index);
    if (cur != nullptr) {
      return cur->val;
    }
    return -1;
  }

  /** Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
  void addAtHead(int val) {
    auto node = new MyLinkedListNode(val, head, head->next);
    head->next = head->next->prev = node;
    size++;
  }

  /** Append a node of value val to the last element of the linked list. */
  void addAtTail(int val) {
    auto node = new MyLinkedListNode(val, tail->prev, tail);
    tail->prev = tail->prev->next = node;
    size++;
  }

  /** Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
  void addAtIndex(int index, int val) {
    if (index > size || index < 0) return;
    if (index == 0) addAtHead(val);
    else if (index == size) addAtTail(val);
    else {
      auto cur = find(index);
      if (cur != nullptr) {
        cur = cur->prev;
        auto node = new MyLinkedListNode(val, cur, cur->next);
        cur->next = cur->next->prev = node;
        size++;
      }
    }
  }

  /** Delete the index-th node in the linked list, if the index is valid. */
  void deleteAtIndex(int index) {
    if (index >= size || index < 0) return;
    auto cur = find(index);
    if (cur != nullptr) {
      cur->prev->next = cur->next;
      cur->next->prev = cur->prev;
      size--;
      delete cur;
    }
  }

  void printAll() {
    cout << size << " [";
    auto cur = head->next;
    while (cur != tail) {
      cout << cur->val << ',';
      cur = cur->next;
    }
    cout << ']' << endl;
  }
};

int main(int argc, char const *argv[])
{
  /**
  * Your MyLinkedList object will be instantiated and called as such:
  */
  MyLinkedList* obj = new MyLinkedList();
  int param_1 = obj->get(0);
  obj->printAll();
  obj->addAtHead(1);
  obj->printAll();
  obj->addAtTail(2);
  obj->printAll();
  obj->addAtIndex(1,3);
  obj->printAll();
  obj->deleteAtIndex(2);
  obj->printAll();
  return 0;
}

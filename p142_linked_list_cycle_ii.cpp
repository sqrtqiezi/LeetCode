/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
  ListNode *detectCycle(ListNode *head) {
    if (head == NULL || head->next == NULL)
      return NULL;

    ListNode* fast = head;
    ListNode* slow = head;

    while(fast->next && fast->next->next) {
      slow = slow->next;
      fast = fast->next->next;
      if (slow == fast) {
        fast = head;
        while(slow != fast) {
          slow = slow->next;
          fast = fast->next;
        }
        return fast;
      }
    }

    return NULL;
  }
};

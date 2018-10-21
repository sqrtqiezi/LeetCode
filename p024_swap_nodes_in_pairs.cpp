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
    ListNode* swapPairs(ListNode* head) {
        ListNode* root = new ListNode(0);
        root->next = head;

        ListNode* prev = root;
        ListNode* ptr1;
        ListNode* ptr2;
        ListNode* next;

        while (prev->next && prev->next->next) {
            ptr1 = prev->next;
            ptr2 = ptr1->next;
            next = ptr2->next;

            prev->next = ptr2;
            ptr2->next = ptr1;
            ptr1->next = next;
            prev = ptr1;
        }
        return root->next;
    }
};

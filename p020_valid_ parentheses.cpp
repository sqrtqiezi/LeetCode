class Solution {
public:
    bool isValid(string s) {
        if (s.size() % 2 != 0) return false;
        stack<char>* myStack = new stack<char>();
        for (int i=0; i < s.size(); i++) {
            switch (s[i]) {
                case '(':
                case '{':
                case '[':
                    myStack->push(s[i]);
                    break;
                case ')':
                    if (!myStack->empty() && myStack->top() == '(') {
                        myStack->pop();
                        break;
                    } else {
                        return false;
                    }
                case ']':
                    if (!myStack->empty() && myStack->top() == '[') {
                        myStack->pop();
                        break;
                    } else {
                        return false;
                    }
                case '}':
                    if (!myStack->empty() && myStack->top() == '{') {
                        myStack->pop();
                        break;
                    } else {
                        return false;
                    }
                default:
                    break;
            }
        }
        return myStack->empty();
    }
};

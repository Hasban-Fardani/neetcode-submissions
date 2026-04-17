#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string current, res, first;
        char ch;
        int max;
        bool shouldBreak = false;
        first = strs[0];
        
        for (int i = 0; i < first.size(); i++) {
            ch = first[i];
            for (int j = 0; j < strs.size(); j++) {
                current = strs[j];
                if (current.size() - 1 < i) {
                    shouldBreak = true;
                    break;
                }

                if (ch != current[i]) {
                    shouldBreak = true;
                    break;
                }
            }

            if (shouldBreak) {
                break;
            }
            res += ch;
        }

        return res;
    }
};
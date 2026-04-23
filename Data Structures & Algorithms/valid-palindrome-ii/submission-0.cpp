class Solution {
public:
    bool validPalindrome(string s) {
        int length = s.length();
        int left = 0;
        int right = length - 1;

        while (left < right) {
            if (s[left] != s[right]) {
                return isPalindrom(s, left + 1, right) || isPalindrom(s, left, right - 1);
            }
            left++;
            right--;
        }

        return true;
    }

    bool isPalindrom(string& s, int i, int j) {
        while (i < j) {
            if (s[i] != s[j]) {
                return false;
            }
            i++;
            j--;
        }

        return true;
    }
};
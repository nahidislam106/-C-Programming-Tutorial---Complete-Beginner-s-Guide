// Program 76: Palindrome String - String ta palindrome kina check
// Palindrome: Shamne ebong pechon theke same (like "madam", "radar")
#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];
    int length, i, flag = 1;

    // Input string
    printf("Enter a string: ");
    scanf("%s", str);

    // Get length
    length = strlen(str);

    // Check palindrome
    for (i = 0; i < length / 2; i++)
    {
        if (str[i] != str[length - 1 - i])
        {
            flag = 0;
            break;
        }
    }

    // Display result
    if (flag)
    {
        printf("%s is a PALINDROME string\n", str);
    }
    else
    {
        printf("%s is NOT a palindrome string\n", str);
    }

    return 0;
}

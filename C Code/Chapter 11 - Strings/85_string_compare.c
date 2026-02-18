// Program 74: String Compare - Dui ta string same kina compare kora
// Compare without strcmp()
#include <stdio.h>

int main()
{
    char str1[100], str2[100];
    int i = 0, flag = 0;

    // Input two strings
    printf("Enter first string: ");
    scanf(" %[^\n]", str1);

    printf("Enter second string: ");
    scanf(" %[^\n]", str2);

    // Compare strings character by character
    while (str1[i] != '\0' || str2[i] != '\0')
    {
        if (str1[i] != str2[i])
        {
            flag = 1; // Not equal
            break;
        }
        i++;
    }

    // Display result
    printf("\nString 1: %s\n", str1);
    printf("String 2: %s\n", str2);

    if (flag == 0)
    {
        printf("Both strings are EQUAL\n");
    }
    else
    {
        printf("Strings are NOT EQUAL\n");
    }

    return 0;
}

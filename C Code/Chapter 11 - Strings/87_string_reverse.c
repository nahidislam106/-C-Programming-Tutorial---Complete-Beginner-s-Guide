// Program 75: String Reverse - String ke ulta kora
#include <stdio.h>

int main()
{
    char str[100], reversed[100];
    int length = 0, i, j = 0;

    // Input string
    printf("Enter a string: ");
    scanf(" %[^\n]", str);

    // Find length
    while (str[length] != '\0')
    {
        length++;
    }

    // Reverse the string
    for (i = length - 1; i >= 0; i--)
    {
        reversed[j] = str[i];
        j++;
    }
    reversed[j] = '\0';

    // Display result
    printf("\nOriginal string: %s\n", str);
    printf("Reversed string: %s\n", reversed);

    return 0;
}

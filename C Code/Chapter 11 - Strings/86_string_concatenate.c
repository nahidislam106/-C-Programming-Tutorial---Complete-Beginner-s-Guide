// Program 73: String Concatenation - Dui ta string jora lagano
// Concatenate without strcat()
#include <stdio.h>

int main()
{
    char str1[100], str2[50];
    int i = 0, j = 0;

    // Input two strings
    printf("Enter first string: ");
    scanf(" %[^\n]", str1);

    printf("Enter second string: ");
    scanf(" %[^\n]", str2);

    // Find end of first string
    while (str1[i] != '\0')
    {
        i++;
    }

    // Append second string to first
    while (str2[j] != '\0')
    {
        str1[i] = str2[j];
        i++;
        j++;
    }
    str1[i] = '\0'; // NULL character add

    // Display result
    printf("\nConcatenated string: %s\n", str1);

    return 0;
}

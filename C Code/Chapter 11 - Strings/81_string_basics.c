// Program 69: String Basics - STRING er basic concept
// String: Character array je NULL (\0) diye shesh hoy
// Declaration: char str[size] or char str[] = "text"
#include <stdio.h>

int main()
{
    // Different ways to declare strings
    char str1[20] = "Hello";                                      // Array size diye
    char str2[] = "World";                                        // Size automatic
    char str3[20];                                                // Empty, pore input nibo
    char str4[] = {'C', ' ', 'i', 's', ' ', 'f', 'u', 'n', '\0'}; // Character by character

    // Display strings
    printf("String 1: %s\n", str1);
    printf("String 2: %s\n", str2);
    printf("String 4: %s\n", str4);

    // Input string
    printf("\nEnter a word: ");
    scanf("%s", str3); // String input (no & needed)
    printf("You entered: %s\n", str3);

    // Character by character access
    printf("\nString 1 character by character:\n");
    for (int i = 0; str1[i] != '\0'; i++)
    {
        printf("str1[%d] = %c\n", i, str1[i]);
    }

    return 0;
}

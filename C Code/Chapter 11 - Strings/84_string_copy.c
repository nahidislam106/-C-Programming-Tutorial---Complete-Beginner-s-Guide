// Program 72: String Copy - Ekta string onno string e copy kora
// Manual string copy without strcpy()
#include <stdio.h>

int main()
{
    char source[100], destination[100];
    int i = 0;

    // Input source string
    printf("Enter a string: ");
    scanf(" %[^\n]", source);

    // Copy string manually
    while (source[i] != '\0')
    {
        destination[i] = source[i];
        i++;
    }
    destination[i] = '\0'; // NULL character add kora must!

    // Display both strings
    printf("\nSource string: %s\n", source);
    printf("Copied string: %s\n", destination);

    // Verify they are same
    printf("\nBoth strings are identical!\n");

    return 0;
}

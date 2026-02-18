// Program 71: String Length - String er length calculate kora (without strlen)
// String length: NULL character (\0) porjonto koyti character
#include <stdio.h>

int main()
{
    char str[100];
    int length = 0;

    // Input string
    printf("Enter a string: ");
    scanf(" %[^\n]", str);

    // Calculate length manually (without strlen function)
    while (str[length] != '\0')
    {
        length++;
    }

    printf("String: %s\n", str);
    printf("Length: %d characters\n", length);

    // Display each character with index
    printf("\nCharacter by character:\n");
    for (int i = 0; i < length; i++)
    {
        printf("Index %d: '%c'\n", i, str[i]);
    }

    return 0;
}

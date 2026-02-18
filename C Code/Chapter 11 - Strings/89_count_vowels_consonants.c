// Program 77: Count Vowels and Consonants in String
#include <stdio.h>
#include <ctype.h>

int main()
{
    char str[100];
    int vowels = 0, consonants = 0, digits = 0, spaces = 0, special = 0;

    // Input string
    printf("Enter a string: ");
    scanf(" %[^\n]", str);

    // Count vowels, consonants, etc.
    for (int i = 0; str[i] != '\0'; i++)
    {
        char ch = tolower(str[i]); // Convert to lowercase

        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
        {
            vowels++;
        }
        else if (ch >= 'a' && ch <= 'z')
        {
            consonants++;
        }
        else if (ch >= '0' && ch <= '9')
        {
            digits++;
        }
        else if (ch == ' ')
        {
            spaces++;
        }
        else
        {
            special++;
        }
    }

    // Display results
    printf("\nString: %s\n", str);
    printf("\nStatistics:\n");
    printf("Vowels: %d\n", vowels);
    printf("Consonants: %d\n", consonants);
    printf("Digits: %d\n", digits);
    printf("Spaces: %d\n", spaces);
    printf("Special characters: %d\n", special);

    return 0;
}

// Program 21: Vowel or Consonant - Shoroborno ba byonjonborno check
// Vowels: a, e, i, o, u (both uppercase and lowercase)
#include <stdio.h>

int main()
{
    char ch;

    // User input
    printf("Enter a character: ");
    scanf(" %c", &ch);

    // Check if vowel or consonant
    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
        ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
    {
        printf("%c is a Vowel (Shoroborno)\n", ch);
    }
    else if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
    {
        printf("%c is a Consonant (Byonjonborno)\n", ch);
    }
    else
    {
        printf("%c is not an alphabet\n", ch);
    }

    return 0;
}

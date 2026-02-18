// Program 70: String Input - Different ways to input strings
#include <stdio.h>

int main()
{
    char str1[50], str2[50], str3[50];

    // Method 1: scanf() - Shudhu ekta word input nite pare (space porjonto)
    printf("Enter a word (no spaces): ");
    scanf("%s", str1);
    printf("You entered: %s\n\n", str1);

    // Clear input buffer
    getchar();

    // Method 2: gets() - Pura line input ney (space soho)
    // WARNING: gets() is unsafe, use fgets() instead
    printf("Enter a sentence: ");
    fgets(str2, 50, stdin); // Safer than gets()
    printf("You entered: %s\n", str2);

    // Method 3: scanf with format - Space porjonto input
    printf("Enter another sentence: ");
    scanf(" %[^\n]", str3); // \n porjonto shob input nibe
    printf("You entered: %s\n", str3);

    return 0;
}

// Program 36: Palindrome Number - Number ta palindrome kina check
// Palindrome: Shamne ebong pechon theke same (like 121, 12321)
#include <stdio.h>

int main()
{
    int num, reversed = 0, remainder, original;

    // User input
    printf("Enter a number: ");
    scanf("%d", &num);

    original = num;

    // Reverse the number
    while (num != 0)
    {
        remainder = num % 10;
        reversed = reversed * 10 + remainder;
        num = num / 10;
    }

    // Check if palindrome
    if (original == reversed)
    {
        printf("%d is a Palindrome number\n", original);
    }
    else
    {
        printf("%d is not a Palindrome number\n", original);
    }

    return 0;
}

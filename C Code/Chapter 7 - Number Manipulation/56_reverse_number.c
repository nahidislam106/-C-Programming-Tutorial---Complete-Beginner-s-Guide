// Program 35: Reverse a Number - Kono number ulta kore print kora
// Example: 12345 -> 54321
#include <stdio.h>

int main()
{
    int num, reversed = 0, remainder;

    // User input
    printf("Enter a number: ");
    scanf("%d", &num);

    int original = num; // Store original for display

    // Reverse the number
    while (num != 0)
    {
        remainder = num % 10;                 // Get last digit
        reversed = reversed * 10 + remainder; // Add to reversed
        num = num / 10;                       // Remove last digit
    }

    printf("Original: %d\n", original);
    printf("Reversed: %d\n", reversed);

    return 0;
}

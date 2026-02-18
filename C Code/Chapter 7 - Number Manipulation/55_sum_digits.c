// Program 39: Sum of Digits - Kono number er shob digit er jogfol
// Example: 12345 -> 1+2+3+4+5 = 15
#include <stdio.h>

int main()
{
    int num, sum = 0, digit;

    // User input
    printf("Enter a number: ");
    scanf("%d", &num);

    int original = num;

    // Calculate sum of digits
    while (num != 0)
    {
        digit = num % 10; // Get last digit
        sum += digit;     // Add to sum
        num = num / 10;   // Remove last digit
    }

    printf("Sum of digits of %d = %d\n", original, sum);

    return 0;
}

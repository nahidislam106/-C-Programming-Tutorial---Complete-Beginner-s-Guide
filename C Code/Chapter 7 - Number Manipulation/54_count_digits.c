// Program 40: Count Digits - Kono number e koyti digit ache count kora
// Example: 12345 -> 5 digits
#include <stdio.h>

int main()
{
    int num, count = 0;

    // User input
    printf("Enter a number: ");
    scanf("%d", &num);

    int original = num;

    // Special case for 0
    if (num == 0)
    {
        count = 1;
    }
    else
    {
        // Count digits
        while (num != 0)
        {
            num = num / 10;
            count++;
        }
    }

    printf("Number of digits in %d = %d\n", original, count);

    return 0;
}

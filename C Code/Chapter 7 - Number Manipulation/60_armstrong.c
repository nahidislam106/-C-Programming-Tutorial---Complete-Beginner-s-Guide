// Program 37: Armstrong Number - Armstrong number kina check
// Armstrong: Sum of cubes of digits = original number
// Example: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153
#include <stdio.h>
#include <math.h>

int main()
{
    int num, original, remainder, result = 0;

    // User input
    printf("Enter a number: ");
    scanf("%d", &num);

    original = num;

    // Calculate sum of cubes of digits
    while (num != 0)
    {
        remainder = num % 10;
        result += pow(remainder, 3); // Cube of digit
        num = num / 10;
    }

    // Check Armstrong
    if (result == original)
    {
        printf("%d is an Armstrong number\n", original);
    }
    else
    {
        printf("%d is not an Armstrong number\n", original);
    }

    return 0;
}

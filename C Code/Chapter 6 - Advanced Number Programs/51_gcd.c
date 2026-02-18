// Program 89: GCD (Greatest Common Divisor) - Goshtho gune
// GCD: Dui ta number er shobcheye boro common divisor
// Example: GCD(12, 18) = 6
#include <stdio.h>

int main()
{
    int num1, num2, gcd;

    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);

    // Find GCD using loop
    for (int i = 1; i <= num1 && i <= num2; i++)
    {
        // Check if i divides both numbers
        if (num1 % i == 0 && num2 % i == 0)
        {
            gcd = i; // Update GCD
        }
    }

    printf("GCD of %d and %d = %d\n", num1, num2, gcd);

    return 0;
}

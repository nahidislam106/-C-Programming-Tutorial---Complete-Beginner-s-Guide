// Program 90: LCM (Least Common Multiple) - Loghishto common gune
// LCM: Dui ta number er shobcheye choto common multiple
// Example: LCM(4, 6) = 12
// Formula: LCM(a, b) = (a × b) / GCD(a, b)
#include <stdio.h>

int main()
{
    int num1, num2, gcd, lcm, max;

    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);

    // Find GCD first
    for (int i = 1; i <= num1 && i <= num2; i++)
    {
        if (num1 % i == 0 && num2 % i == 0)
        {
            gcd = i;
        }
    }

    // Calculate LCM using formula
    lcm = (num1 * num2) / gcd;

    printf("GCD of %d and %d = %d\n", num1, num2, gcd);
    printf("LCM of %d and %d = %d\n", num1, num2, lcm);

    return 0;
}

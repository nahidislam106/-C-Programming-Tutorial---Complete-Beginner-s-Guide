// Program 31: Power Calculation - Ghaat ber kora (a^b)
// Example: 2^3 = 2 × 2 × 2 = 8
#include <stdio.h>

int main()
{
    int base, exponent;
    long long result = 1;

    // User input
    printf("Enter base: ");
    scanf("%d", &base);

    printf("Enter exponent: ");
    scanf("%d", &exponent);

    // Calculate power using loop
    for (int i = 1; i <= exponent; i++)
    {
        result *= base;
    }

    printf("%d^%d = %lld\n", base, exponent, result);

    return 0;
}

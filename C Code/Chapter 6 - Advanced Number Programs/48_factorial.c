// Program 30: Factorial - Kono sonkhar factorial ber kora
// Factorial: n! = n × (n-1) × (n-2) × ... × 1
// Example: 5! = 5 × 4 × 3 × 2 × 1 = 120
#include <stdio.h>

int main()
{
    int n;
    long long factorial = 1; // long long for large results

    // User input
    printf("Enter a number: ");
    scanf("%d", &n);

    // Check for negative number
    if (n < 0)
    {
        printf("Factorial of negative number doesn't exist\n");
    }
    else
    {
        // Calculate factorial
        for (int i = 1; i <= n; i++)
        {
            factorial *= i; // factorial = factorial × i
        }
        printf("Factorial of %d = %lld\n", n, factorial);
    }

    return 0;
}

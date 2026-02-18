// Program 33: Prime Number Check - Kono number prime kina check
// Prime: Je sonkha shudhu 1 ebong nijei diye vag jay (like 2, 3, 5, 7, 11...)
#include <stdio.h>

int main()
{
    int n, isPrime = 1; // Assume prime initially

    // User input
    printf("Enter a number: ");
    scanf("%d", &n);

    // 0 and 1 are not prime
    if (n <= 1)
    {
        isPrime = 0;
    }
    else
    {
        // Check divisibility from 2 to n/2
        for (int i = 2; i <= n / 2; i++)
        {
            if (n % i == 0)
            { // If divisible
                isPrime = 0;
                break; // No need to check further
            }
        }
    }

    // Display result
    if (isPrime)
    {
        printf("%d is a Prime number\n", n);
    }
    else
    {
        printf("%d is not a Prime number\n", n);
    }

    return 0;
}

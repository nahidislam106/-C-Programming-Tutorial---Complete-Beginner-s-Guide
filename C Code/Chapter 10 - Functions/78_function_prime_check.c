// Program 66: Check Prime using Function
// Function use kore prime number check kora
#include <stdio.h>

// Function prototype
int isPrime(int n);

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &num);

    // Function call - return value check korchi
    if (isPrime(num))
    {
        printf("%d is a Prime number\n", num);
    }
    else
    {
        printf("%d is not a Prime number\n", num);
    }

    // Multiple numbers check
    printf("\nPrime numbers from 1 to 50:\n");
    for (int i = 2; i <= 50; i++)
    {
        if (isPrime(i))
        {
            printf("%d ", i);
        }
    }
    printf("\n");

    return 0;
}

// Function to check if a number is prime
// Returns 1 if prime, 0 if not prime
int isPrime(int n)
{
    if (n <= 1)
    {
        return 0; // Not prime
    }

    for (int i = 2; i <= n / 2; i++)
    {
        if (n % i == 0)
        {
            return 0; // Not prime
        }
    }

    return 1; // Prime
}

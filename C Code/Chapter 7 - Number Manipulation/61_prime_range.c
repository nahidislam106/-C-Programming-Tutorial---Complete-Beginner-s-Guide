// Program 34: Prime Numbers in Range - Ekta range er moddhe shob prime number print
#include <stdio.h>

int main()
{
    int start, end;

    // User input
    printf("Enter starting number: ");
    scanf("%d", &start);

    printf("Enter ending number: ");
    scanf("%d", &end);

    printf("Prime numbers between %d and %d: ", start, end);

    // Check each number in range
    for (int num = start; num <= end; num++)
    {
        if (num <= 1)
            continue; // Skip 0 and 1

        int isPrime = 1;
        // Check if prime
        for (int i = 2; i <= num / 2; i++)
        {
            if (num % i == 0)
            {
                isPrime = 0;
                break;
            }
        }

        if (isPrime)
        {
            printf("%d ", num);
        }
    }
    printf("\n");

    return 0;
}

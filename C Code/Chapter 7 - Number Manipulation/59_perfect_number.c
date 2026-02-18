// Program 38: Perfect Number - Perfect number kina check
// Perfect: Sum of proper divisors = number
// Example: 6 = 1 + 2 + 3 (divisors of 6 except 6 itself)
#include <stdio.h>

int main()
{
    int num, sum = 0;

    // User input
    printf("Enter a number: ");
    scanf("%d", &num);

    // Find sum of divisors (except number itself)
    for (int i = 1; i < num; i++)
    {
        if (num % i == 0)
        {
            sum += i;
        }
    }

    // Check perfect number
    if (sum == num && num > 0)
    {
        printf("%d is a Perfect number\n", num);
    }
    else
    {
        printf("%d is not a Perfect number\n", num);
    }

    return 0;
}

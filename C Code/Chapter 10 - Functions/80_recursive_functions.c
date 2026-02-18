// Program 65: RECURSIVE Function - Function nijeke nije call kore
// Recursion: Function er moddhe theke same function call kora
#include <stdio.h>

// Function prototypes
int factorial(int n);
int fibonacci(int n);
int sum(int n);

int main()
{
    int num;

    printf("Enter a number: ");
    scanf("%d", &num);

    // Recursive function calls
    printf("\nFactorial of %d = %d\n", num, factorial(num));

    printf("\nFibonacci series up to %d terms:\n", num);
    for (int i = 0; i < num; i++)
    {
        printf("%d ", fibonacci(i));
    }

    printf("\n\nSum of 1 to %d = %d\n", num, sum(num));

    return 0;
}

// Recursive factorial function
// Base case: n == 0 or n == 1, return 1
// Recursive case: n * factorial(n-1)
int factorial(int n)
{
    if (n == 0 || n == 1)
    {
        return 1; // Base case
    }
    else
    {
        return n * factorial(n - 1); // Recursive call
    }
}

// Recursive fibonacci function
int fibonacci(int n)
{
    if (n == 0)
    {
        return 0; // Base case
    }
    else if (n == 1)
    {
        return 1; // Base case
    }
    else
    {
        return fibonacci(n - 1) + fibonacci(n - 2); // Recursive call
    }
}

// Recursive sum function
int sum(int n)
{
    if (n == 0)
    {
        return 0; // Base case
    }
    else
    {
        return n + sum(n - 1); // Recursive call
    }
}

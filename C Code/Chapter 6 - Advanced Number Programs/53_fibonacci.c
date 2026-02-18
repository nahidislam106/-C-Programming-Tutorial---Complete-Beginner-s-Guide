// Program 32: Fibonacci Series - Fibonacci series print kora
// Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21...
// Rule: Current = Previous1 + Previous2
#include <stdio.h>

int main()
{
    int n, t1 = 0, t2 = 1, nextTerm;

    // User input
    printf("Enter number of terms: ");
    scanf("%d", &n);

    printf("Fibonacci Series: ");

    // Print first n terms
    for (int i = 1; i <= n; i++)
    {
        printf("%d ", t1);
        nextTerm = t1 + t2; // Next term = sum of previous two
        t1 = t2;            // Move forward
        t2 = nextTerm;
    }
    printf("\n");

    return 0;
}

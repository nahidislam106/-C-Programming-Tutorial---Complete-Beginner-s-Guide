// Program 25: Print Even Numbers - 1 theke n porjonto jor sonkha print
// Even numbers: 2, 4, 6, 8, 10...
#include <stdio.h>

int main()
{
    int n;

    // User input
    printf("Enter a number: ");
    scanf("%d", &n);

    printf("Even numbers from 1 to %d: ", n);

    // Loop and check each number
    for (int i = 1; i <= n; i++)
    {
        if (i % 2 == 0)
        { // Check if even
            printf("%d ", i);
        }
    }
    printf("\n");

    return 0;
}

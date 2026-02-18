// Program 24: Print 1 to N - 1 theke n porjonto number print kora
// For loop use kore
#include <stdio.h>

int main()
{
    int n;

    // User input
    printf("Enter a number: ");
    scanf("%d", &n);

    printf("Numbers from 1 to %d: ", n);

    // Loop through 1 to n
    for (int i = 1; i <= n; i++)
    {
        printf("%d ", i);
    }
    printf("\n");

    return 0;
}

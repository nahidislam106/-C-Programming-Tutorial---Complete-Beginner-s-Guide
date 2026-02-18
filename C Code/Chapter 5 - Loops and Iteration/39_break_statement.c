// Program 58: BREAK statement - Loop er moddhe theke ber hoye jay
// Break: Loop thamiye dey ebong loop er baire chole jay
#include <stdio.h>

int main()
{
    int n;

    printf("Enter a number: ");
    scanf("%d", &n);

    printf("Numbers from 1 to %d (break at 5):\n", n);

    // Loop choltese but 5 e break
    for (int i = 1; i <= n; i++)
    {
        if (i == 5)
        {
            printf("\nBreaking loop at %d!\n", i);
            break; // Loop thamiye dey
        }
        printf("%d ", i);
    }

    printf("Loop ended.\n");

    return 0;
}

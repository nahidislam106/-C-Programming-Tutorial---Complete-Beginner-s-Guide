// Program 59: CONTINUE statement - Current iteration skip kore next e jay
// Continue: Baki code skip kore loop er shuru te fire jay
#include <stdio.h>

int main()
{
    int n;

    printf("Enter a number: ");
    scanf("%d", &n);

    printf("Numbers from 1 to %d (skip multiples of 3):\n", n);

    // Loop but 3 er multiple skip korbe
    for (int i = 1; i <= n; i++)
    {
        if (i % 3 == 0)
        {
            continue; // 3 er multiple hole skip, porer iteration e jay
        }
        printf("%d ", i); // 3 er multiple na hole print hobe
    }
    printf("\n");

    return 0;
}

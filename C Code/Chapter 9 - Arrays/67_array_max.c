// Program 47: Find Maximum in Array - Array er moddhe maximum value khuje ber kora
#include <stdio.h>

int main()
{
    int n;

    // Array size input
    printf("Enter number of elements: ");
    scanf("%d", &n);

    int arr[n];

    // Array elements input
    printf("Enter %d elements:\n", n);
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    // Find maximum
    int max = arr[0]; // Assume first element is max
    for (int i = 1; i < n; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i]; // Update max if larger element found
        }
    }

    printf("Maximum element = %d\n", max);

    return 0;
}

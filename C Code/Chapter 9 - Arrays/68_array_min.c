// Program 48: Find Minimum in Array - Array er moddhe minimum value khuje ber kora
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

    // Find minimum
    int min = arr[0]; // Assume first element is min
    for (int i = 1; i < n; i++)
    {
        if (arr[i] < min)
        {
            min = arr[i]; // Update min if smaller element found
        }
    }

    printf("Minimum element = %d\n", min);

    return 0;
}

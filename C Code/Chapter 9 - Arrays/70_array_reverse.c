// Program 49: Reverse Array - Array ke ulta kore print kora
// Example: [1, 2, 3, 4, 5] -> [5, 4, 3, 2, 1]
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

    // Display original array
    printf("\nOriginal array: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }

    // Reverse the array (swap elements from both ends)
    for (int i = 0; i < n / 2; i++)
    {
        int temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }

    // Display reversed array
    printf("\nReversed array: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");

    return 0;
}

// Program 50: Linear Search in Array - Array te kono element ache kina khoja
// Linear search: Protioti element sequentially check kora
#include <stdio.h>

int main()
{
    int n, search, found = 0, position = -1;

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

    // Element to search
    printf("Enter element to search: ");
    scanf("%d", &search);

    // Search in array
    for (int i = 0; i < n; i++)
    {
        if (arr[i] == search)
        {
            found = 1;
            position = i;
            break; // Element found, stop searching
        }
    }

    // Display result
    if (found)
    {
        printf("Element %d found at position %d (index %d)\n", search, position + 1, position);
    }
    else
    {
        printf("Element %d not found in the array\n", search);
    }

    return 0;
}

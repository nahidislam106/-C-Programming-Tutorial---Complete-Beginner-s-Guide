// Program 60: Break and Continue example together
// Search in array using break, skip negative numbers using continue
#include <stdio.h>

int main()
{
    int arr[] = {5, -2, 10, -8, 15, 20, -3, 25, 30};
    int size = 9;
    int search = 20;

    printf("Array elements (only positive, searching for %d):\n", search);

    for (int i = 0; i < size; i++)
    {
        // Skip negative numbers using continue
        if (arr[i] < 0)
        {
            continue; // Negative hole skip
        }

        printf("%d ", arr[i]);

        // If searched element found, break
        if (arr[i] == search)
        {
            printf("\n\nFound %d at index %d! Breaking loop.\n", search, i);
            break; // Element pele loop thamiye dey
        }
    }

    return 0;
}

// Program 45: Array Input Output - Array te value input newa ebong print kora
// Array holo same type er multiple element store korar container
#include <stdio.h>

int main()
{
    int n;

    // Array size input
    printf("Enter number of elements: ");
    scanf("%d", &n);

    int arr[n]; // Array declare kora

    // Array elements input
    printf("Enter %d elements:\n", n);
    for (int i = 0; i < n; i++)
    {
        printf("Element %d: ", i + 1);
        scanf("%d", &arr[i]); // arr[i] diye i-th element access kora
    }

    // Array elements print
    printf("\nArray elements: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");

    return 0;
}

// Program 46: Sum of Array Elements - Array er shob element er jogfol
#include <stdio.h>

int main()
{
    int n, sum = 0;

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

    // Calculate sum
    for (int i = 0; i < n; i++)
    {
        sum += arr[i];
    }

    // Display result
    printf("Sum of array elements = %d\n", sum);

    // Calculate and display average
    float average = (float)sum / n;
    printf("Average = %.2f\n", average);

    return 0;
}

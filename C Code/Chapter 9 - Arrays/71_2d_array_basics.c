// Program 79: 2D Array Basics - Matrix (2 dimensional array)
// 2D Array: Array er moddhe array, row ebong column ache
// Declaration: datatype arrayName[rows][columns]
#include <stdio.h>

int main()
{
    int matrix[3][3]; // 3x3 matrix (3 rows, 3 columns)

    printf("Enter elements of 3x3 matrix:\n");

    // Input matrix using nested loops
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf("Element [%d][%d]: ", i, j);
            scanf("%d", &matrix[i][j]);
        }
    }

    // Display matrix
    printf("\nYour matrix:\n");
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf("%d\t", matrix[i][j]); // \t = tab space
        }
        printf("\n");
    }

    return 0;
}

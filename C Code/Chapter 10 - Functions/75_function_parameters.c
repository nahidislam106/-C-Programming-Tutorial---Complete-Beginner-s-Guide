// Program 63: Function with Parameters - Parameter pass kore function e
// Parameters: Function e input hisebe value pathano
#include <stdio.h>

// Function prototype - Parameter type mention kora
void printSquare(int num);
void printTable(int n, int range);

int main()
{
    int number;

    printf("Enter a number: ");
    scanf("%d", &number);

    // Function call with argument
    printSquare(number);

    printf("\n");
    printTable(number, 5); // Dui ta parameter pass korchi

    return 0;
}

// Function: Kono number er square print kora
void printSquare(int num)
{
    printf("%d² = %d\n", num, num * num);
}

// Function: Multiplication table print (2 parameters)
void printTable(int n, int range)
{
    printf("Table of %d (1 to %d):\n", n, range);
    for (int i = 1; i <= range; i++)
    {
        printf("%d × %d = %d\n", n, i, n * i);
    }
}

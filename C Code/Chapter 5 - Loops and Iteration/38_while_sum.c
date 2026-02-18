// Program 52: Sum of N numbers using WHILE loop
// While loop use kore jogfol ber kora
#include <stdio.h>

int main()
{
    int n, sum = 0, i = 1;

    // User input
    printf("Enter a number: ");
    scanf("%d", &n);

    // While loop use kore sum calculate
    while (i <= n)
    {
        sum += i; // sum = sum + i
        i++;
    }

    printf("Sum of 1 to %d = %d\n", n, sum);

    return 0;
}

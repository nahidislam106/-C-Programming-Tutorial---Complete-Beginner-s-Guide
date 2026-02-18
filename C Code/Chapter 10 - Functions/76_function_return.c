// Program 64: Function with RETURN VALUE - Function theke value return kora
// Return: Function kono value calculate kore send back kore
#include <stdio.h>

// Function prototypes - Return type int
int add(int a, int b);
int subtract(int a, int b);
int multiply(int a, int b);
float divide(float a, float b);

int main()
{
    int num1, num2;

    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);

    // Function call kore returned value store korchi
    int sum = add(num1, num2);
    int diff = subtract(num1, num2);
    int prod = multiply(num1, num2);
    float quot = divide(num1, num2);

    // Results display
    printf("\nResults:\n");
    printf("%d + %d = %d\n", num1, num2, sum);
    printf("%d - %d = %d\n", num1, num2, diff);
    printf("%d × %d = %d\n", num1, num2, prod);
    printf("%d ÷ %d = %.2f\n", num1, num2, quot);

    return 0;
}

// Function definitions with return
int add(int a, int b)
{
    return a + b; // Result return korche
}

int subtract(int a, int b)
{
    return a - b;
}

int multiply(int a, int b)
{
    return a * b;
}

float divide(float a, float b)
{
    if (b != 0)
        return a / b;
    else
    {
        printf("Division by zero!\n");
        return 0;
    }
}

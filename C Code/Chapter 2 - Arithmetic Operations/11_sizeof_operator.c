// Program 82: SIZEOF Operator - Variable er size bytes e
// sizeof: Kono data type ba variable koto memory ney ta bole
#include <stdio.h>

int main()
{
    // Basic data types
    printf("Size of basic data types:\n");
    printf("char: %lu bytes\n", sizeof(char));
    printf("int: %lu bytes\n", sizeof(int));
    printf("float: %lu bytes\n", sizeof(float));
    printf("double: %lu bytes\n", sizeof(double));
    printf("long: %lu bytes\n", sizeof(long));
    printf("long long: %lu bytes\n\n", sizeof(long long));

    // Variables
    int num = 10;
    float pi = 3.14;
    char ch = 'A';
    double d = 99.99;

    printf("Size of variables:\n");
    printf("num (int): %lu bytes\n", sizeof(num));
    printf("pi (float): %lu bytes\n", sizeof(pi));
    printf("ch (char): %lu bytes\n", sizeof(ch));
    printf("d (double): %lu bytes\n\n", sizeof(d));

    // Arrays
    int arr[10];
    char str[50];

    printf("Size of arrays:\n");
    printf("int arr[10]: %lu bytes\n", sizeof(arr));
    printf("char str[50]: %lu bytes\n\n", sizeof(str));

    // Calculate array length using sizeof
    int numbers[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int length = sizeof(numbers) / sizeof(numbers[0]);
    printf("Array length calculation:\n");
    printf("Total size: %lu bytes\n", sizeof(numbers));
    printf("Size of one element: %lu bytes\n", sizeof(numbers[0]));
    printf("Number of elements: %d\n", length);

    return 0;
}

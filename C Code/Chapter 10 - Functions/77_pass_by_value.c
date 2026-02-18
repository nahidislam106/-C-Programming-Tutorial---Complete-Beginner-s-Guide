// Program 67: Pass by Value - C te value pass hoy (copy hoy)
// Pass by value: Function e parameter er copy jay, original change hoy na
#include <stdio.h>

// Function prototypes
void changeValue(int x);
void swap(int a, int b);

int main()
{
    int num = 10;

    printf("Original value: %d\n", num);

    changeValue(num); // Function e pass korchi

    printf("After function call: %d\n", num); // Value change hoy ni!
    printf("(Value didn't change - this is pass by value)\n\n");

    // Swap example
    int a = 5, b = 10;
    printf("Before swap: a = %d, b = %d\n", a, b);
    swap(a, b);
    printf("After swap: a = %d, b = %d\n", a, b); // Swap hoy ni!
    printf("(Swap didn't work - pass by value)\n");

    return 0;
}

// Function tries to change value
void changeValue(int x)
{
    x = 100; // Shudhu copy change hocche, original na
    printf("Inside function: %d\n", x);
}

// Function tries to swap (won't work with pass by value)
void swap(int a, int b)
{
    int temp = a;
    a = b;
    b = temp;
    printf("Inside swap function: a = %d, b = %d\n", a, b);
}

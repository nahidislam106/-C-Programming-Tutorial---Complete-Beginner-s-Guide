// Program 02: Variables - C te different types er variable use
// Variables holo data store korar container
#include <stdio.h>

int main()
{
    // Integer (purno sonkha) - 1, 2, 100, -5
    int age = 25;

    // Float (doshomik sonkha) - 3.14, 2.5
    float pi = 3.14159;

    // Character (ekti character) - 'A', 'b', '1'
    char grade = 'A';

    // Double (boro doshomik sonkha)
    double price = 999.99;

    // Print all variables
    printf("Age: %d\n", age);        // %d for integer
    printf("Pi: %.2f\n", pi);        // %f for float
    printf("Grade: %c\n", grade);    // %c for character
    printf("Price: %.2lf\n", price); // %lf for double

    return 0;
}

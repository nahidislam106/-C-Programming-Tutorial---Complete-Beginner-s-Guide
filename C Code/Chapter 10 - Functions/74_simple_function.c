// Program 62: Simple Function - FUNCTIONS er basic concept
// Function: Code er ekta block je specific kaj kore, reusable
// Syntax: return_type function_name(parameters) { body }
#include <stdio.h>

// Function declaration/prototype - Main er age declare korte hoy
void greet();

int main()
{
    printf("Program started.\n\n");

    // Function call - Function ke call kore use kora
    greet();
    greet(); // Same function abar call korte pari

    printf("\nProgram ended.\n");

    return 0;
}

// Function definition - Actual code likhchi
void greet()
{
    printf("Hello! Welcome to C Programming.\n");
}

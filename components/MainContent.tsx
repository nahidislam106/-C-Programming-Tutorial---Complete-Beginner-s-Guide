'use client';

import styles from './MainContent.module.css';
import CodeBlock from './CodeBlock';

export default function MainContent() {
  return (
    <>
      {/* Introduction */}
      <section id="intro" className={styles.card}>
        <h2>🎯 What is C Programming?</h2>
        <p><strong>C</strong> is one of the most popular and powerful programming languages in the world. Created in the 1970s, it&apos;s still widely used today for:</p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h4>Operating Systems</h4>
            <p>Windows, Linux, macOS</p>
          </div>
          <div className={styles.feature}>
            <h4>Embedded Systems</h4>
            <p>Arduino, IoT devices</p>
          </div>
          <div className={styles.feature}>
            <h4>Game Development</h4>
            <p>High-performance games</p>
          </div>
          <div className={styles.feature}>
            <h4>Database Systems</h4>
            <p>MySQL, PostgreSQL</p>
          </div>
        </div>

        <h3>Why Learn C?</h3>
        <ul>
          <li>🚀 <strong>Fast and efficient</strong> - Direct hardware control</li>
          <li>💪 <strong>Powerful</strong> - Low-level programming capabilities</li>
          <li>🏗️ <strong>Foundation</strong> - Base for C++, Java, Python concepts</li>
          <li>💼 <strong>In-demand</strong> - High job market demand</li>
          <li>🧠 <strong>Educational</strong> - Teaches how computers really work</li>
        </ul>
      </section>

      {/* Chapter 1 */}
      <section id="chapter1" className={styles.card}>
        <h2>🌟 Chapter 1 - Introduction to C</h2>
        
        <h3>📚 Tutorial: Your First Steps in C Programming</h3>
        <p>Welcome to C programming! Every program in C has a basic structure. Understanding this structure is key to writing any C program.</p>
        
        <h4>Basic Structure of a C Program:</h4>
        <CodeBlock code={`#include <stdio.h>    // Preprocessor directive - includes standard input/output library

int main()            // Main function - program starts here
{
    // Your code goes here
    return 0;         // Return 0 to indicate successful execution
}`} />
        
        <p><strong>5 Programs in this chapter:</strong></p>
        
        <h3>📝 Program 01: Hello World</h3>
        <CodeBlock code={`// Program 01: Hello World - Your very first C program!
// This is a comment - it's ignored by the compiler
#include <stdio.h>    // Include standard input/output library

int main()            // Main function where program execution begins
{
    // printf() is used to print text to the screen
    printf("Hello, World!\\n");           // \\n creates a new line
    printf("Welcome to C Programming!\\n");
    printf("Let's learn together!\\n");
    
    return 0;  // Return 0 means program ran successfully
}

// Output:
// Hello, World!
// Welcome to C Programming!
// Let's learn together!`} />

        <h3>📝 Program 02: Variables and Data Types</h3>
        <CodeBlock code={`// Program 02: Understanding variables and data types
// Variables are containers that store data
#include <stdio.h>

int main()
{
    // Integer - whole numbers
    int age = 25;
    int year = 2026;
    
    // Float - decimal numbers
    float height = 5.8;
    float temperature = 98.6;
    
    // Character - single character
    char grade = 'A';
    char initial = 'J';
    
    // Double - more precise decimal numbers
    double pi = 3.14159265359;
    
    // Print all variables
    printf("Integer examples:\\n");
    printf("Age: %d years\\n", age);
    printf("Year: %d\\n", year);
    
    printf("\\nFloat examples:\\n");
    printf("Height: %.1f feet\\n", height);
    printf("Temperature: %.1f°F\\n", temperature);
    
    printf("\\nCharacter examples:\\n");
    printf("Grade: %c\\n", grade);
    printf("Initial: %c\\n", initial);
    
    printf("\\nDouble example:\\n");
    printf("Pi: %.10lf\\n", pi);
    
    return 0;
}

// Format Specifiers:
// %d - integer
// %f - float
// %c - character
// %lf - double`} />

        <h3>📝 Program 03: Input and Output</h3>
        <CodeBlock code={`// Program 03: Getting input from user and displaying output
// scanf() is used to read input from keyboard
#include <stdio.h>

int main()
{
    int age;
    float height;
    char grade;
    
    // Get integer input
    printf("Enter your age: ");
    scanf("%d", &age);  // &age means "address of age variable"
    
    // Get float input
    printf("Enter your height in feet: ");
    scanf("%f", &height);
    
    // Get character input
    printf("Enter your grade: ");
    scanf(" %c", &grade);  // Space before %c to skip whitespace
    
    // Display the inputs
    printf("\\n--- Your Information ---\\n");
    printf("Age: %d years\\n", age);
    printf("Height: %.2f feet\\n", height);
    printf("Grade: %c\\n", grade);
    
    return 0;
}

// Important: Use & before variable name in scanf()
// Exception: Don't use & for arrays (we'll learn this later)`} />

        <h3>📝 Program 04: Type Casting</h3>
        <CodeBlock code={`// Program 04: Converting between data types
// Type casting changes one data type to another
#include <stdio.h>

int main()
{
    int a = 10;
    int b = 3;
    float result;
    
    // Without casting - integer division
    printf("Integer division: %d / %d = %d\\n", a, b, a / b);
    // Result: 10 / 3 = 3 (decimal part lost!)
    
    // With casting - float division
    result = (float)a / b;  // Cast 'a' to float
    printf("Float division: %d / %d = %.2f\\n", a, b, result);
    // Result: 10 / 3 = 3.33
    
    // More examples
    float f = 9.8;
    int i = (int)f;  // Cast float to int (decimal part removed)
    printf("\\nFloat %.2f converted to int = %d\\n", f, i);
    
    // ASCII values
    char ch = 'A';
    printf("\\nCharacter '%c' has ASCII value: %d\\n", ch, (int)ch);
    
    int num = 66;
    printf("ASCII %d represents character: %c\\n", num, (char)num);
    
    return 0;
}

// Type casting format: (datatype)variable`} />

        <h3>📝 Program 05: Typedef - Custom Type Names</h3>
        <CodeBlock code={`// Program 05: Using typedef to create custom type names
// typedef makes code more readable
#include <stdio.h>

// Define custom type names
typedef int Integer;           // 'Integer' is now same as 'int'
typedef float Decimal;         // 'Decimal' is now same as 'float'
typedef char Character;        // 'Character' is now same as 'char'

// Useful for complex types
typedef unsigned long long BigNumber;

int main()
{
    // Use custom type names
    Integer age = 25;
    Decimal price = 199.99;
    Character grade = 'A';
    BigNumber population = 8000000000;
    
    printf("Using typedef:\\n");
    printf("Age: %d\\n", age);
    printf("Price: $%.2f\\n", price);
    printf("Grade: %c\\n", grade);
    printf("World Population: %llu\\n", population);
    
    return 0;
}

// Benefits of typedef:
// 1. Makes code more readable
// 2. Easier to change types later
// 3. Useful for platform-independent code`} />

        <div className={styles.highlight}>
          <h4>💡 Key Takeaways:</h4>
          <ul>
            <li>Every C program starts with <code>int main()</code></li>
            <li>Use <code>printf()</code> to display output</li>
            <li>Use <code>scanf()</code> to get input (don&apos;t forget <code>&amp;</code>)</li>
            <li>Common data types: <code>int</code>, <code>float</code>, <code>char</code>, <code>double</code></li>
            <li>Type casting converts between data types</li>
            <li><code>typedef</code> creates custom type names</li>
          </ul>
        </div>
      </section>

      {/* Chapter 2 */}
      <section id="chapter2" className={styles.card}>
        <h2>➕ Chapter 2 - Arithmetic Operations</h2>
        
        <h3>📚 Tutorial: Mathematical Operations in C</h3>
        <p>C provides powerful operators to perform mathematical calculations. These are the building blocks for more complex programs.</p>
        
        <h4>Arithmetic Operators:</h4>
        <ul>
          <li><code>+</code> Addition</li>
          <li><code>-</code> Subtraction</li>
          <li><code>*</code> Multiplication</li>
          <li><code>/</code> Division</li>
          <li><code>%</code> Modulo (remainder after division)</li>
          <li><code>++</code> Increment (add 1)</li>
          <li><code>--</code> Decrement (subtract 1)</li>
        </ul>
        
        <p><strong>9 Programs in this chapter:</strong></p>
        
        <h3>📝 Program 06: Addition</h3>
        <CodeBlock code={`// Program 06: Add two numbers
#include <stdio.h>

int main()
{
    int num1, num2, sum;
    
    printf("Enter first number: ");
    scanf("%d", &num1);
    
    printf("Enter second number: ");
    scanf("%d", &num2);
    
    // Perform addition
    sum = num1 + num2;
    
    printf("\\n%d + %d = %d\\n", num1, num2, sum);
    
    return 0;
}`} />

        <h3>📝 Program 07: Subtraction</h3>
        <CodeBlock code={`// Program 07: Subtract two numbers
#include <stdio.h>

int main()
{
    int num1, num2, difference;
    
    printf("Enter first number: ");
    scanf("%d", &num1);
    
    printf("Enter second number: ");
    scanf("%d", &num2);
    
    // Perform subtraction
    difference = num1 - num2;
    
    printf("\\n%d - %d = %d\\n", num1, num2, difference);
    
    return 0;
}`} />

        <h3>📝 Program 08: Multiplication</h3>
        <CodeBlock code={`// Program 08: Multiply two numbers
#include <stdio.h>

int main()
{
    int num1, num2, product;
    
    printf("Enter first number: ");
    scanf("%d", &num1);
    
    printf("Enter second number: ");
    scanf("%d", &num2);
    
    // Perform multiplication
    product = num1 * num2;
    
    printf("\\n%d * %d = %d\\n", num1, num2, product);
    
    return 0;
}`} />

        <h3>📝 Program 09: Division</h3>
        <CodeBlock code={`// Program 09: Divide two numbers
#include <stdio.h>

int main()
{
    float num1, num2, quotient;
    
    printf("Enter first number: ");
    scanf("%f", &num1);
    
    printf("Enter second number: ");
    scanf("%f", &num2);
    
    // Check for division by zero
    if (num2 == 0) {
        printf("Error: Cannot divide by zero!\\n");
    } else {
        // Perform division
        quotient = num1 / num2;
        printf("\\n%.2f / %.2f = %.2f\\n", num1, num2, quotient);
    }
    
    return 0;
}`} />

        <h3>📝 Program 10: Modulo Operator</h3>
        <CodeBlock code={`// Program 10: Find remainder using modulo operator
// Modulo (%) gives the remainder after division
#include <stdio.h>

int main()
{
    int num1, num2, remainder;
    
    printf("Enter first number: ");
    scanf("%d", &num1);
    
    printf("Enter second number: ");
    scanf("%d", &num2);
    
    if (num2 == 0) {
        printf("Error: Cannot divide by zero!\\n");
    } else {
        // Get remainder
        remainder = num1 % num2;
        printf("\\n%d %% %d = %d\\n", num1, num2, remainder);
        printf("(Remainder when %d is divided by %d)\\n", num1, num2);
    }
    
    return 0;
}

// Example: 10 % 3 = 1 (because 10 ÷ 3 = 3 remainder 1)`} />

        <h3>📝 Program 11: Sizeof Operator</h3>
        <CodeBlock code={`// Program 11: Find size of different data types
// sizeof() operator returns the number of bytes
#include <stdio.h>

int main()
{
    printf("Size of different data types:\\n\\n");
    
    // Basic data types
    printf("char: %zu bytes\\n", sizeof(char));
    printf("int: %zu bytes\\n", sizeof(int));
    printf("float: %zu bytes\\n", sizeof(float));
    printf("double: %zu bytes\\n", sizeof(double));
    
    // Modified types
    printf("\\nModified types:\\n");
    printf("short int: %zu bytes\\n", sizeof(short int));
    printf("long int: %zu bytes\\n", sizeof(long int));
    printf("long long int: %zu bytes\\n", sizeof(long long int));
    printf("long double: %zu bytes\\n", sizeof(long double));
    
    // With variables
    int num = 10;
    float price = 99.99;
    printf("\\nSize of variables:\\n");
    printf("int num: %zu bytes\\n", sizeof(num));
    printf("float price: %zu bytes\\n", sizeof(price));
    
    return 0;
}

// Note: Size may vary on different systems
// %zu is the format specifier for size_t`} />

        <h3>📝 Program 12: Increment and Decrement</h3>
        <CodeBlock code={`// Program 12: Understanding ++ and -- operators
#include <stdio.h>

int main()
{
    int a = 5, b = 5;
    
    printf("Initial values: a = %d, b = %d\\n\\n", a, b);
    
    // Post-increment: use value, then increase
    printf("Post-increment (a++): %d\\n", a++);
    printf("Value of a after a++: %d\\n\\n", a);
    
    // Pre-increment: increase first, then use value
    printf("Pre-increment (++a): %d\\n", ++a);
    printf("Value of a after ++a: %d\\n\\n", a);
    
    // Post-decrement: use value, then decrease
    printf("Post-decrement (b--): %d\\n", b--);
    printf("Value of b after b--: %d\\n\\n", b);
    
    // Pre-decrement: decrease first, then use value
    printf("Pre-decrement (--b): %d\\n", --b);
    printf("Value of b after --b: %d\\n", b);
    
    return 0;
}

// a++ : Use current value, then add 1
// ++a : Add 1 first, then use new value`} />

        <h3>📝 Program 13: Swap Two Numbers (With Temp Variable)</h3>
        <CodeBlock code={`// Program 13: Swap two numbers using temporary variable
#include <stdio.h>

int main()
{
    int a, b, temp;
    
    printf("Enter first number: ");
    scanf("%d", &a);
    
    printf("Enter second number: ");
    scanf("%d", &b);
    
    printf("\\nBefore swapping: a = %d, b = %d\\n", a, b);
    
    // Swap using temporary variable
    temp = a;    // Store a in temp
    a = b;       // Put b in a
    b = temp;    // Put temp (original a) in b
    
    printf("After swapping: a = %d, b = %d\\n", a, b);
    
    return 0;
}

// Logic: temp = a, a = b, b = temp`} />

        <h3>📝 Program 14: Swap Without Temp Variable</h3>
        <CodeBlock code={`// Program 14: Swap two numbers WITHOUT using temporary variable
#include <stdio.h>

int main()
{
    int a, b;
    
    printf("Enter first number: ");
    scanf("%d", &a);
    
    printf("Enter second number: ");
    scanf("%d", &b);
    
    printf("\\nBefore swapping: a = %d, b = %d\\n", a, b);
    
    // Method 1: Using arithmetic operators
    a = a + b;   // a now contains sum of both
    b = a - b;   // b = (a+b) - b = original a
    a = a - b;   // a = (a+b) - original a = original b
    
    printf("After swapping: a = %d, b = %d\\n", a, b);
    
    // Method 2: Using XOR (alternative)
    printf("\\nAlternative method using XOR:\\n");
    int x = 10, y = 20;
    printf("Before: x = %d, y = %d\\n", x, y);
    
    x = x ^ y;
    y = x ^ y;
    x = x ^ y;
    
    printf("After: x = %d, y = %d\\n", x, y);
    
    return 0;
}

// Clever technique but temp variable is clearer!`} />

        <div className={styles.highlight}>
          <h4>💡 Key Takeaways:</h4>
          <ul>
            <li>Use <code>+</code> <code>-</code> <code>*</code> <code>/</code> for basic arithmetic</li>
            <li><code>%</code> (modulo) gives remainder - works only with integers</li>
            <li><code>sizeof()</code> tells you how many bytes a data type uses</li>
            <li><code>++</code> and <code>--</code> are shortcuts for adding/subtracting 1</li>
            <li>Always check for division by zero!</li>
          </ul>
        </div>
      </section>

      {/* Chapter 3 */}
      <section id="chapter3" className={styles.card}>
        <h2>📐 Chapter 3 - Mathematical Formulas</h2>
        
        <h3>📚 Tutorial: Applying Math Formulas in C</h3>
        <p>In this chapter, you&apos;ll learn how to translate real-world mathematical formulas into C code. This is essential for solving practical problems in physics, engineering, and everyday calculations.</p>
        
        <h4>Key Concepts:</h4>
        <ul>
          <li>Using constants with <code>#define</code></li>
          <li>Working with floating-point numbers for precision</li>
          <li>Converting mathematical notation to C code</li>
          <li>Formatting output with decimal places</li>
        </ul>
        
        <p><strong>5 Programs in this chapter:</strong></p>
        
        <h3>📝 Program 15: Area of Rectangle</h3>
        <CodeBlock code={`// Program 15: Calculate area of rectangle
// Formula: Area = length × width
#include <stdio.h>

int main()
{
    float length, width, area;
    
    printf("=== Area of Rectangle ===\\n");
    printf("Enter length: ");
    scanf("%f", &length);
    
    printf("Enter width: ");
    scanf("%f", &width);
    
    // Calculate area
    area = length * width;
    
    printf("\\nArea of rectangle = %.2f square units\\n", area);
    
    return 0;
}

// Formula: Area = l × w`} />

        <h3>📝 Program 16: Area of Triangle</h3>
        <CodeBlock code={`// Program 16: Calculate area of triangle
// Formula: Area = 1/2 × base × height
#include <stdio.h>

int main()
{
    float base, height, area;
    
    printf("=== Area of Triangle ===\\n");
    printf("Enter base: ");
    scanf("%f", &base);
    
    printf("Enter height: ");
    scanf("%f", &height);
    
    // Calculate area
    area = 0.5 * base * height;
    // Or: area = (base * height) / 2;
    
    printf("\\nArea of triangle = %.2f square units\\n", area);
    
    return 0;
}

// Formula: Area = ½ × b × h`} />

        <h3>📝 Program 17: Area of Circle</h3>
        <CodeBlock code={`// Program 17: Calculate area of circle
// Formula: Area = π × radius²
#include <stdio.h>
#define PI 3.14159   // Define constant for PI

int main()
{
    float radius, area;
    
    printf("=== Area of Circle ===\\n");
    printf("Enter radius: ");
    scanf("%f", &radius);
    
    // Calculate area: π × r²
    area = PI * radius * radius;
    
    printf("\\nArea of circle = %.2f square units\\n", area);
    
    // Also calculate circumference
    float circumference = 2 * PI * radius;
    printf("Circumference = %.2f units\\n", circumference);
    
    return 0;
}

// #define creates a constant that can't be changed
// Formula: Area = π × r²`} />

        <h3>📝 Program 18: Celsius to Fahrenheit Conversion</h3>
        <CodeBlock code={`// Program 18: Convert temperature from Celsius to Fahrenheit
// Formula: °F = (°C × 9/5) + 32
#include <stdio.h>

int main()
{
    float celsius, fahrenheit;
    
    printf("=== Temperature Converter ===\\n");
    printf("Enter temperature in Celsius: ");
    scanf("%f", &celsius);
    
    // Convert to Fahrenheit
    fahrenheit = (celsius * 9.0 / 5.0) + 32.0;
    // Note: Use 9.0 instead of 9 to ensure float division
    
    printf("\\n%.2f°C = %.2f°F\\n", celsius, fahrenheit);
    
    // Bonus: Also do reverse conversion
    printf("\\nReverse conversion:\\n");
    printf("Enter temperature in Fahrenheit: ");
    scanf("%f", &fahrenheit);
    
    celsius = (fahrenheit - 32.0) * 5.0 / 9.0;
    printf("%.2f°F = %.2f°C\\n", fahrenheit, celsius);
    
    return 0;
}

// Common temperatures:
// 0°C = 32°F (Water freezes)
// 100°C = 212°F (Water boils)
// 37°C = 98.6°F (Human body)`} />

        <h3>📝 Program 19: Simple Interest</h3>
        <CodeBlock code={`// Program 19: Calculate simple interest
// Formula: Simple Interest = (Principal × Rate × Time) / 100
#include <stdio.h>

int main()
{
    float principal, rate, time, simpleInterest, totalAmount;
    
    printf("=== Simple Interest Calculator ===\\n\\n");
    
    printf("Enter principal amount: $");
    scanf("%f", &principal);
    
    printf("Enter annual interest rate (in %%): ");
    scanf("%f", &rate);
    
    printf("Enter time period (in years): ");
    scanf("%f", &time);
    
    // Calculate simple interest
    simpleInterest = (principal * rate * time) / 100;
    
    // Calculate total amount
    totalAmount = principal + simpleInterest;
    
    // Display results
    printf("\\n=== Calculation Results ===\\n");
    printf("Principal Amount: $%.2f\\n", principal);
    printf("Interest Rate: %.2f%% per year\\n", rate);
    printf("Time Period: %.2f years\\n", time);
    printf("\\nSimple Interest: $%.2f\\n", simpleInterest);
    printf("Total Amount: $%.2f\\n", totalAmount);
    
    return 0;
}

// Example: 
// Principal = $1000, Rate = 5%, Time = 2 years
// SI = (1000 × 5 × 2) / 100 = $100
// Total = $1000 + $100 = $1100`} />

        <div className={styles.highlight}>
          <h4>💡 Additional Formula Examples</h4>
          <p>Here are more formulas you can try implementing:</p>
        </div>

        <h3>📝 Bonus: More Mathematical Formulas</h3>
        <CodeBlock code={`// Bonus programs you can create:
#include <stdio.h>
#include <math.h>  // For sqrt(), pow() functions

int main()
{
    float a, b, c;
    
    // 1. Perimeter of Rectangle
    float length = 5, width = 3;
    float perimeter = 2 * (length + width);
    printf("Perimeter = %.2f\\n", perimeter);
    
    // 2. Volume of Cube
    float side = 4;
    float volume = side * side * side;  // Or: pow(side, 3)
    printf("Volume of cube = %.2f\\n", volume);
    
    // 3. Pythagorean Theorem: c² = a² + b²
    a = 3, b = 4;
    c = sqrt(a*a + b*b);
    printf("Hypotenuse = %.2f\\n", c);
    
    // 4. Average of three numbers
    float num1 = 10, num2 = 20, num3 = 30;
    float average = (num1 + num2 + num3) / 3;
    printf("Average = %.2f\\n", average);
    
    // 5. Compound Interest
    // A = P(1 + r/n)^(nt)
    float P = 1000, r = 0.05, n = 1, t = 2;
    float A = P * pow((1 + r/n), n*t);
    printf("Compound Interest Amount = %.2f\\n", A);
    
    return 0;
}`} />

        <div className={styles.highlight}>
          <h4>💡 Key Takeaways:</h4>
          <ul>
            <li>Use <code>#define</code> for mathematical constants like PI</li>
            <li>Always use <code>float</code> or <code>double</code> for formulas with decimals</li>
            <li>Use <code>.0</code> (like 9.0) to ensure float division</li>
            <li>Format output with <code>%.2f</code> to show 2 decimal places</li>
            <li>Include <code>&lt;math.h&gt;</code> for advanced functions like <code>sqrt()</code>, <code>pow()</code></li>
          </ul>
        </div>
      </section>

      {/* Chapter 4 */}
      <section id="chapter4" className={styles.card}>
        <h2>🔀 Chapter 4 - Conditional Logic</h2>
        
        <h3>📚 Tutorial: Making Decisions in C</h3>
        <p>Conditional statements allow your program to make decisions and execute different code based on conditions. Think of it like a fork in the road - your program can go different directions based on certain criteria.</p>
        
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>if statement</strong> - Execute code only if condition is true</li>
          <li><strong>else statement</strong> - Execute code when if condition is false</li>
          <li><strong>else if</strong> - Check multiple conditions in sequence</li>
          <li><strong>switch statement</strong> - Choose between many options based on a value</li>
          <li><strong>Logical operators</strong> - &amp;&amp; (AND), || (OR), ! (NOT)</li>
          <li><strong>Comparison operators</strong> - == (equal), != (not equal), &lt;, &gt;, &lt;=, &gt;=</li>
        </ul>
        
        <p><strong>11 Programs in this chapter:</strong></p>
        
        <h3>📝 Program 20: Even or Odd Check</h3>
        <CodeBlock code={`// Program 20: Check if number is even or odd
// Concept: Using modulo operator (%) to check divisibility
#include <stdio.h>

int main()
{
    int number;
    
    // Get input from user
    printf("Enter a number: ");
    scanf("%d", &number);
    
    // Check if number is divisible by 2
    // If remainder is 0, it's even
    if (number % 2 == 0) {
        printf("%d is EVEN\\n", number);
    } else {
        printf("%d is ODD\\n", number);
    }
    
    return 0;
}

// Example Output:
// Enter a number: 7
// 7 is ODD`} />

        <h3>📝 Program 21: Positive, Negative, or Zero</h3>
        <CodeBlock code={`// Program 21: Determine if number is positive, negative, or zero
// Concept: Multiple conditions using else-if
#include <stdio.h>

int main()
{
    int number;
    
    printf("Enter a number: ");
    scanf("%d", &number);
    
    // Check multiple conditions in sequence
    if (number > 0) {
        printf("%d is POSITIVE\\n", number);
    } else if (number < 0) {
        printf("%d is NEGATIVE\\n", number);
    } else {
        printf("%d is ZERO\\n", number);
    }
    
    return 0;
}

// Example Output:
// Enter a number: -5
// -5 is NEGATIVE`} />

        <h3>📝 Program 22: Find Largest of Two Numbers</h3>
        <CodeBlock code={`// Program 22: Find the larger of two numbers
// Concept: Simple if-else comparison
#include <stdio.h>

int main()
{
    int num1, num2;
    
    printf("Enter first number: ");
    scanf("%d", &num1);
    
    printf("Enter second number: ");
    scanf("%d", &num2);
    
    // Compare two numbers
    if (num1 > num2) {
        printf("%d is larger\\n", num1);
    } else if (num2 > num1) {
        printf("%d is larger\\n", num2);
    } else {
        printf("Both numbers are equal\\n");
    }
    
    return 0;
}`} />

        <h3>📝 Program 23: Switch Statement - Day of Week</h3>
        <CodeBlock code={`// Program 23: Display day name using switch statement
// Concept: Switch-case for multiple fixed choices
#include <stdio.h>

int main()
{
    int day;
    
    printf("Enter day number (1-7): ");
    scanf("%d", &day);
    
    // Switch statement - choose one case based on value
    switch(day) {
        case 1:
            printf("Monday\\n");
            break;  // Exit switch after this case
        case 2:
            printf("Tuesday\\n");
            break;
        case 3:
            printf("Wednesday\\n");
            break;
        case 4:
            printf("Thursday\\n");
            break;
        case 5:
            printf("Friday\\n");
            break;
        case 6:
            printf("Saturday\\n");
            break;
        case 7:
            printf("Sunday\\n");
            break;
        default:
            printf("Invalid day number!\\n");
    }
    
    return 0;
}`} />

        <h3>📝 Program 24: Switch Statement - Simple Calculator</h3>
        <CodeBlock code={`// Program 24: Calculator using switch statement
// Concept: Switch with character input for operations
#include <stdio.h>

int main()
{
    char operator;
    double num1, num2, result;
    
    printf("Enter first number: ");
    scanf("%lf", &num1);
    
    printf("Enter operator (+, -, *, /): ");
    scanf(" %c", &operator);  // Space before %c to skip whitespace
    
    printf("Enter second number: ");
    scanf("%lf", &num2);
    
    switch(operator) {
        case '+':
            result = num1 + num2;
            printf("%.2lf + %.2lf = %.2lf\\n", num1, num2, result);
            break;
        case '-':
            result = num1 - num2;
            printf("%.2lf - %.2lf = %.2lf\\n", num1, num2, result);
            break;
        case '*':
            result = num1 * num2;
            printf("%.2lf * %.2lf = %.2lf\\n", num1, num2, result);
            break;
        case '/':
            if (num2 != 0) {
                result = num1 / num2;
                printf("%.2lf / %.2lf = %.2lf\\n", num1, num2, result);
            } else {
                printf("Error: Division by zero!\\n");
            }
            break;
        default:
            printf("Error: Invalid operator!\\n");
    }
    
    return 0;
}`} />

        <h3>📝 Program 25: Ternary Operator</h3>
        <CodeBlock code={`// Program 25: Ternary operator - compact if-else
// Concept: condition ? value_if_true : value_if_false
#include <stdio.h>

int main()
{
    int num1, num2, max;
    
    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);
    
    // Ternary operator - one line if-else
    max = (num1 > num2) ? num1 : num2;
    
    printf("Maximum = %d\\n", max);
    
    // Another example: check even/odd
    int number = 15;
    printf("%d is %s\\n", number, (number % 2 == 0) ? "EVEN" : "ODD");
    
    return 0;
}

// Ternary operator format: condition ? true_value : false_value`} />

        <h3>📝 Program 26: Largest of Three Numbers</h3>
        <CodeBlock code={`// Program 26: Find largest of three numbers
// Concept: Nested if-else statements
#include <stdio.h>

int main()
{
    int num1, num2, num3;
    
    printf("Enter three numbers: ");
    scanf("%d %d %d", &num1, &num2, &num3);
    
    // Method 1: Nested if-else
    if (num1 >= num2 && num1 >= num3) {
        printf("Largest = %d\\n", num1);
    } else if (num2 >= num1 && num2 >= num3) {
        printf("Largest = %d\\n", num2);
    } else {
        printf("Largest = %d\\n", num3);
    }
    
    return 0;
}

// Logical AND (&&): Both conditions must be true
// Logical OR (||): At least one condition must be true`} />

        <h3>📝 Program 27: Vowel or Consonant</h3>
        <CodeBlock code={`// Program 27: Check if character is vowel or consonant
// Concept: Multiple conditions with OR operator
#include <stdio.h>

int main()
{
    char ch;
    
    printf("Enter a character: ");
    scanf(" %c", &ch);
    
    // Check if character is a letter
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
        // Check if vowel (a, e, i, o, u)
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
            ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
            printf("%c is a VOWEL\\n", ch);
        } else {
            printf("%c is a CONSONANT\\n", ch);
        }
    } else {
        printf("%c is not an alphabet letter\\n", ch);
    }
    
    return 0;
}`} />

        <h3>📝 Program 28: Leap Year Check</h3>
        <CodeBlock code={`// Program 28: Check if year is a leap year
// Concept: Complex conditions using logical operators
// Leap year rules:
// 1. Divisible by 4 AND not divisible by 100, OR
// 2. Divisible by 400
#include <stdio.h>

int main()
{
    int year;
    
    printf("Enter a year: ");
    scanf("%d", &year);
    
    // Leap year logic
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        printf("%d is a LEAP YEAR\\n", year);
    } else {
        printf("%d is NOT a leap year\\n", year);
    }
    
    return 0;
}

// Examples:
// 2000 - Leap (divisible by 400)
// 1900 - Not leap (divisible by 100 but not 400)
// 2024 - Leap (divisible by 4, not by 100)`} />

        <h3>📝 Program 29: Grade Assignment</h3>
        <CodeBlock code={`// Program 29: Assign letter grade based on marks
// Concept: Multiple conditions for grade ranges
#include <stdio.h>

int main()
{
    int marks;
    char grade;
    
    printf("Enter marks (0-100): ");
    scanf("%d", &marks);
    
    // Validate input
    if (marks < 0 || marks > 100) {
        printf("Invalid marks! Must be between 0-100\\n");
        return 1;
    }
    
    // Assign grade based on marks
    if (marks >= 90) {
        grade = 'A';
    } else if (marks >= 80) {
        grade = 'B';
    } else if (marks >= 70) {
        grade = 'C';
    } else if (marks >= 60) {
        grade = 'D';
    } else if (marks >= 50) {
        grade = 'E';
    } else {
        grade = 'F';
    }
    
    printf("Grade: %c\\n", grade);
    
    // Add remarks
    if (grade == 'F') {
        printf("Failed - Need improvement\\n");
    } else if (grade >= 'D') {
        printf("Passed - Keep working hard!\\n");
    } else {
        printf("Excellent performance!\\n");
    }
    
    return 0;
}`} />

        <h3>📝 Program 30: Complete Calculator</h3>
        <CodeBlock code={`// Program 30: Complete calculator with menu
// Concept: Combining switch and if-else
#include <stdio.h>

int main()
{
    int choice;
    double num1, num2, result;
    
    // Display menu
    printf("\\n=== CALCULATOR ===\\n");
    printf("1. Addition\\n");
    printf("2. Subtraction\\n");
    printf("3. Multiplication\\n");
    printf("4. Division\\n");
    printf("5. Modulo\\n");
    printf("Enter your choice (1-5): ");
    scanf("%d", &choice);
    
    // Get numbers for operation
    printf("Enter two numbers: ");
    scanf("%lf %lf", &num1, &num2);
    
    // Perform operation based on choice
    switch(choice) {
        case 1:
            result = num1 + num2;
            printf("%.2lf + %.2lf = %.2lf\\n", num1, num2, result);
            break;
            
        case 2:
            result = num1 - num2;
            printf("%.2lf - %.2lf = %.2lf\\n", num1, num2, result);
            break;
            
        case 3:
            result = num1 * num2;
            printf("%.2lf * %.2lf = %.2lf\\n", num1, num2, result);
            break;
            
        case 4:
            if (num2 != 0) {
                result = num1 / num2;
                printf("%.2lf / %.2lf = %.2lf\\n", num1, num2, result);
            } else {
                printf("Error: Cannot divide by zero!\\n");
            }
            break;
            
        case 5:
            // Modulo works with integers
            printf("%d %% %d = %d\\n", (int)num1, (int)num2, (int)num1 % (int)num2);
            break;
            
        default:
            printf("Invalid choice! Please select 1-5\\n");
    }
    
    return 0;
}`} />

        <div className={styles.highlight}>
          <h4>💡 Key Takeaways:</h4>
          <ul>
            <li>Use <code>if-else</code> for simple true/false decisions</li>
            <li>Use <code>else-if</code> for checking multiple conditions in sequence</li>
            <li>Use <code>switch</code> when choosing from many fixed values</li>
            <li>Use <code>ternary operator</code> for simple one-line conditionals</li>
            <li>Always use <code>break</code> in switch cases to prevent fall-through</li>
            <li>Combine conditions with <code>&amp;&amp;</code> (AND) and <code>||</code> (OR)</li>
          </ul>
        </div>
      </section>

      {/* Chapter 5 */}
      <section id="chapter5" className={styles.card}>
        <h2>🔄 Chapter 5 - Loops and Iteration</h2>
        
        <h3>📚 Tutorial: Mastering Loops in C</h3>
        <p>Loops allow you to repeat a block of code multiple times without writing it over and over. They&apos;re essential for processing multiple items, performing repetitive tasks, and creating efficient programs.</p>
        
        <h4>Three Types of Loops:</h4>
        <ul>
          <li><strong>for loop</strong> - Use when you know how many times to repeat</li>
          <li><strong>while loop</strong> - Use when condition is checked before execution</li>
          <li><strong>do-while loop</strong> - Use when code must execute at least once</li>
        </ul>
        
        <h4>Loop Control Statements:</h4>
        <ul>
          <li><code>break</code> - Exit loop immediately</li>
          <li><code>continue</code> - Skip current iteration, go to next</li>
        </ul>
        
        <p><strong>17 Programs in this chapter:</strong></p>
        
        <h3>📝 Program 31: Print Numbers 1 to N (For Loop)</h3>
        <CodeBlock code={`// Program 31: Print numbers from 1 to n using for loop
// For loop is best when you know the exact number of iterations
#include <stdio.h>

int main()
{
    int n, i;
    
    printf("Enter a number: ");
    scanf("%d", &n);
    
    printf("Numbers from 1 to %d:\\n", n);
    
    // for (initialization; condition; increment)
    for (i = 1; i <= n; i++) {
        printf("%d ", i);
    }
    printf("\\n");
    
    return 0;
}

// For loop structure:
// 1. i = 1 (initialize once)
// 2. Check i <= n (before each iteration)
// 3. Execute loop body
// 4. i++ (after each iteration)`} />

        <h3>📝 Program 32: Print Even Numbers</h3>
        <CodeBlock code={`// Program 32: Print only even numbers from 1 to n
#include <stdio.h>

int main()
{
    int n, i;
    
    printf("Enter a number: ");
    scanf("%d", &n);
    
    printf("Even numbers from 1 to %d:\\n", n);
    
    // Method 1: Check if number is even
    for (i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            printf("%d ", i);
        }
    }
    
    printf("\\n\\nAlternative method:\\n");
    
    // Method 2: Increment by 2 (more efficient)
    for (i = 2; i <= n; i += 2) {
        printf("%d ", i);
    }
    printf("\\n");
    
    return 0;
}`} />

        <h3>📝 Program 34: While Loop Example</h3>
        <CodeBlock code={`// Program 34: Print numbers using while loop
// While loop checks condition before executing
#include <stdio.h>

int main()
{
    int n, i = 1;  // Initialize counter before loop
    
    printf("Enter a number: ");
    scanf("%d", &n);
    
    printf("Numbers from 1 to %d:\\n", n);
    
    // While loop: condition checked first
    while (i <= n) {
        printf("%d ", i);
        i++;  // Don't forget to increment!
    }
    printf("\\n");
    
    return 0;
}

// While vs For:
// - Use for when iterations are known
// - Use while when condition-based`} />

        <h3>📝 Program 35: Sum of Numbers</h3>
        <CodeBlock code={`// Program 35: Calculate sum of numbers from 1 to n
#include <stdio.h>

int main()
{
    int n, i, sum = 0;
    
    printf("Enter a number: ");
    scanf("%d", &n);
    
    // Add each number to sum
    for (i = 1; i <= n; i++) {
        sum += i;  // Same as: sum = sum + i
    }
    
    printf("Sum of 1 to %d = %d\\n", n, sum);
    
    // Mathematical formula: sum = n * (n + 1) / 2
    int formulaSum = n * (n + 1) / 2;
    printf("Verified with formula: %d\\n", formulaSum);
    
    return 0;
}`} />

        <h3>📝 Program 39: Break Statement</h3>
        <CodeBlock code={`// Program 39: Using break to exit loop early
// Break immediately exits the loop
#include <stdio.h>

int main()
{
    int i;
    
    printf("Numbers from 1 to 10, but stop at 5:\\n");
    
    for (i = 1; i <= 10; i++) {
        if (i == 5) {
            printf("Breaking at %d!\\n", i);
            break;  // Exit loop immediately
        }
        printf("%d ", i);
    }
    
    printf("\\nLoop ended.\\n");
    
    return 0;
}

// Output: 1 2 3 4 Breaking at 5!
// Numbers 5-10 are never printed`} />

        <h3>📝 Program 40: Continue Statement</h3>
        <CodeBlock code={`// Program 40: Using continue to skip iterations
// Continue skips rest of current iteration
#include <stdio.h>

int main()
{
    int i;
    
    printf("Numbers 1 to 10, skipping 5:\\n");
    
    for (i = 1; i <= 10; i++) {
        if (i == 5) {
            continue;  // Skip to next iteration
        }
        printf("%d ", i);
    }
    printf("\\n");
    
    return 0;
}

// Output: 1 2 3 4 6 7 8 9 10
// 5 is skipped but loop continues`} />

        <h3>📝 Program 41: Do-While Loop</h3>
        <CodeBlock code={`// Program 41: Menu system using do-while
// Do-while executes at least once, then checks condition
#include <stdio.h>

int main()
{
    int choice;
    
    do {
        // Menu always displays at least once
        printf("\\n=== MENU ===\\n");
        printf("1. Option 1\\n");
        printf("2. Option 2\\n");
        printf("3. Exit\\n");
        printf("Enter choice: ");
        scanf("%d", &choice);
        
        if (choice == 1) {
            printf("You selected Option 1\\n");
        } else if (choice == 2) {
            printf("You selected Option 2\\n");
        } else if (choice == 3) {
            printf("Goodbye!\\n");
        } else {
            printf("Invalid choice!\\n");
        }
        
    } while (choice != 3);  // Repeat until user chooses 3
    
    return 0;
}

// Do-while guarantees at least one execution`} />

        <h3>📝 Program 42: Nested Loops</h3>
        <CodeBlock code={`// Program 42: Nested loops - loops inside loops
#include <stdio.h>

int main()
{
    int i, j;
    
    printf("Multiplication table (1-5):\\n\\n");
    
    // Outer loop for rows
    for (i = 1; i <= 5; i++) {
        // Inner loop for columns
        for (j = 1; j <= 5; j++) {
            printf("%d\\t", i * j);
        }
        printf("\\n");
    }
    
    return 0;
}

// Outer loop runs 5 times
// Inner loop runs 5 times for EACH outer iteration
// Total iterations: 5 × 5 = 25`} />

        <div className={styles.highlight}>
          <h4>💡 Key Takeaways:</h4>
          <ul>
            <li><code>for</code> loop: Best when iterations are known</li>
            <li><code>while</code> loop: Best for condition-based repetition</li>
            <li><code>do-while</code> loop: Use when code must run at least once</li>
            <li><code>break</code>: Exits loop completely</li>
            <li><code>continue</code>: Skips to next iteration</li>
            <li>Nested loops: Inner loop completes fully for each outer iteration</li>
          </ul>
        </div>
      </section>

      {/* Chapter 6 */}
      <section id="chapter6" className={styles.card}>
        <h2>🔢 Chapter 6 - Advanced Number Programs</h2>
        
        <h3>📚 Tutorial: Mathematical Algorithms</h3>
        <p>This chapter focuses on implementing mathematical algorithms. You&apos;ll learn how to translate mathematical concepts into code and develop problem-solving skills.</p>
        
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Factorial</strong> - Product of all positive integers up to n</li>
          <li><strong>Prime Numbers</strong> - Numbers divisible only by 1 and themselves</li>
          <li><strong>GCD</strong> - Greatest Common Divisor using Euclidean algorithm</li>
          <li><strong>Fibonacci</strong> - Each number is sum of previous two</li>
        </ul>
        
        <p><strong>6 Programs in this chapter:</strong></p>
        
        <h3>📝 Program 48: Factorial</h3>
        <CodeBlock code={`// Program 48: Calculate factorial of a number
// Factorial: n! = n × (n-1) × (n-2) × ... × 1
// Example: 5! = 5 × 4 × 3 × 2 × 1 = 120
#include <stdio.h>

int main()
{
    int n, i;
    long long factorial = 1;  // Use long long for large results
    
    printf("Enter a number: ");
    scanf("%d", &n);
    
    // Check for negative numbers
    if (n < 0) {
        printf("Factorial is not defined for negative numbers!\\n");
        return 1;
    }
    
    // Calculate factorial
    for (i = 1; i <= n; i++) {
        factorial *= i;  // Multiply each number
    }
    
    printf("%d! = %lld\\n", n, factorial);
    
    return 0;
}

// Factorial grows very fast:
// 5! = 120
// 10! = 3,628,800
// 20! = 2,432,902,008,176,640,000`} />

        <h3>📝 Program 49: Power Calculation</h3>
        <CodeBlock code={`// Program 49: Calculate base^exponent (power)
// Example: 2^3 = 2 × 2 × 2 = 8
#include <stdio.h>

int main()
{
    int base, exponent, i;
    long long result = 1;
    
    printf("Enter base: ");
    scanf("%d", &base);
    
    printf("Enter exponent: ");
    scanf("%d", &exponent);
    
    // Multiply base by itself exponent times
    for (i = 0; i < exponent; i++) {
        result *= base;
    }
    
    printf("%d^%d = %lld\\n", base, exponent, result);
    
    return 0;
}

// Algorithm: Multiply base repeatedly
// Could also use pow() from math.h`} />

        <h3>📝 Program 50: Prime Number Check</h3>
        <CodeBlock code={`// Program 50: Check if a number is prime
// Prime: A number divisible only by 1 and itself
// Examples: 2, 3, 5, 7, 11, 13...
#include <stdio.h>

int main()
{
    int num, i, isPrime = 1;  // Assume prime initially
    
    printf("Enter a number: ");
    scanf("%d", &num);
    
    // 0 and 1 are not prime
    if (num <= 1) {
        isPrime = 0;
    } else {
        // Check divisibility from 2 to num/2
        for (i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                isPrime = 0;  // Found a divisor, not prime
                break;  // No need to check further
            }
        }
    }
    
    if (isPrime) {
        printf("%d is a PRIME number\\n", num);
    } else {
        printf("%d is NOT a prime number\\n", num);
    }
    
    return 0;
}

// Optimization: Only check up to sqrt(num)
// Prime numbers are building blocks of all numbers`} />

        <h3>📝 Program 51: GCD (Greatest Common Divisor)</h3>
        <CodeBlock code={`// Program 51: Find GCD using Euclidean algorithm
// GCD: Largest number that divides both numbers
// Example: GCD(12, 18) = 6
#include <stdio.h>

int main()
{
    int num1, num2, i, gcd;
    
    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);
    
    // Find minimum of two numbers
    int min = (num1 < num2) ? num1 : num2;
    
    // Check from min down to 1
    for (i = min; i >= 1; i--) {
        if (num1 % i == 0 && num2 % i == 0) {
            gcd = i;
            break;  // Found GCD
        }
    }
    
    printf("GCD of %d and %d = %d\\n", num1, num2, gcd);
    
    return 0;
}

// Euclidean algorithm is more efficient:
// while (num2 != 0) {
//     temp = num2;
//     num2 = num1 % num2;
//     num1 = temp;
// }`} />

        <h3>📝 Program 52: LCM (Least Common Multiple)</h3>
        <CodeBlock code={`// Program 52: Find LCM of two numbers
// LCM: Smallest number divisible by both numbers
// Example: LCM(4, 6) = 12
// Formula: LCM(a,b) = (a × b) / GCD(a,b)
#include <stdio.h>

int main()
{
    int num1, num2, max, lcm;
    
    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);
    
    // LCM is at least as large as the maximum
    max = (num1 > num2) ? num1 : num2;
    
    // Check multiples starting from max
    for (lcm = max; ; lcm += max) {
        if (lcm % num1 == 0 && lcm % num2 == 0) {
            break;  // Found LCM
        }
    }
    
    printf("LCM of %d and %d = %d\\n", num1, num2, lcm);
    
    return 0;
}

// More efficient: LCM = (a × b) / GCD(a, b)`} />

        <h3>📝 Program 53: Fibonacci Series</h3>
        <CodeBlock code={`// Program 53: Generate Fibonacci series
// Fibonacci: Each number is sum of previous two
// Series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
#include <stdio.h>

int main()
{
    int n, i;
    long long t1 = 0, t2 = 1, nextTerm;
    
    printf("Enter number of terms: ");
    scanf("%d", &n);
    
    printf("Fibonacci Series: ");
    
    for (i = 1; i <= n; i++) {
        if (i == 1) {
            printf("%lld ", t1);
            continue;
        }
        if (i == 2) {
            printf("%lld ", t2);
            continue;
        }
        
        // Calculate next term
        nextTerm = t1 + t2;
        printf("%lld ", nextTerm);
        
        // Update for next iteration
        t1 = t2;
        t2 = nextTerm;
    }
    
    printf("\\n");
    return 0;
}

// Fibonacci appears in nature:
// - Flower petals, pine cones
// - Spiral shells, galaxy arms`} />

        <div className={styles.highlight}>
          <h4>💡 Key Takeaways:</h4>
          <ul>
            <li>Factorial grows extremely fast - use <code>long long</code></li>
            <li>Prime checking: Only test up to √n for efficiency</li>
            <li>GCD: Euclidean algorithm is faster than brute force</li>
            <li>LCM formula: LCM(a,b) = (a × b) / GCD(a,b)</li>
            <li>Fibonacci: Each term depends on previous terms</li>
          </ul>
        </div>
      </section>

      {/* Chapter 7 */}
      <section id="chapter7" className={styles.card}>
        <h2>🔍 Chapter 7 - Number Manipulation</h2>
        
        <h3>📚 Tutorial: Digit Manipulation & Number Properties</h3>
        <p>Learn to extract, reverse, and analyze individual digits of numbers. These techniques are fundamental for number-based algorithms.</p>
        
        <h4>Core Technique:</h4>
        <ul>
          <li><strong>Extract Last Digit:</strong> <code>digit = num % 10</code></li>
          <li><strong>Remove Last Digit:</strong> <code>num = num / 10</code></li>
          <li><strong>Build Number:</strong> <code>result = result * 10 + digit</code></li>
        </ul>
        
        <p><strong>8 Programs in this chapter:</strong></p>
        
        <h3>📝 Program 54: Count Digits</h3>
        <CodeBlock code={`// Program 54: Count number of digits
// Example: 12345 has 5 digits
#include <stdio.h>

int main()
{
    int num, count = 0, temp;
    
    printf("Enter a number: ");
    scanf("%d", &num);
    
    temp = num;
    
    // Handle zero case
    if (temp == 0) {
        count = 1;
    } else {
        // Remove digits one by one
        while (temp != 0) {
            temp /= 10;  // Remove last digit
            count++;
        }
    }
    
    printf("Number of digits in %d = %d\\n", num, count);
    
    return 0;
}

// Alternative: count = log10(num) + 1
// But that requires math.h`} />

        <h3>📝 Program 55: Sum of Digits</h3>
        <CodeBlock code={`// Program 55: Calculate sum of all digits
// Example: 123 → 1 + 2 + 3 = 6
#include <stdio.h>

int main()
{
    int num, sum = 0, digit, temp;
    
    printf("Enter a number: ");
    scanf("%d", &num);
    
    temp = num;
    
    // Extract and sum each digit
    while (temp != 0) {
        digit = temp % 10;  // Get last digit
        sum += digit;       // Add to sum
        temp /= 10;         // Remove last digit
    }
    
    printf("Sum of digits of %d = %d\\n", num, sum);
    
    return 0;
}

// Used in: Digital root, checksum algorithms
// Example: Credit card validation (Luhn algorithm)`} />

        <h3>📝 Program 56: Reverse a Number</h3>
        <CodeBlock code={`// Program 56: Reverse digits of a number
// Example: 1234 → 4321
#include <stdio.h>

int main()
{
    int num, reverse = 0, digit, temp;
    
    printf("Enter a number: ");
    scanf("%d", &num);
    
    temp = num;
    
    // Build reversed number
    while (temp != 0) {
        digit = temp % 10;           // Extract last digit
        reverse = reverse * 10 + digit;  // Add to reversed number
        temp /= 10;                  // Remove last digit
    }
    
    printf("Reverse of %d = %d\\n", num, reverse);
    
    return 0;
}

// Algorithm: Extract digits from right, build from left
// Step by step for 123:
// 1. digit=3, reverse=3, temp=12
// 2. digit=2, reverse=32, temp=1
// 3. digit=1, reverse=321, temp=0`} />

        <h3>📝 Program 57: Multiplication Table</h3>
        <CodeBlock code={`// Program 57: Print multiplication table
// Example: Table of 5 → 5×1=5, 5×2=10, ... 5×10=50
#include <stdio.h>

int main()
{
    int num, i;
    
    printf("Enter a number: ");
    scanf("%d", &num);
    
    printf("\\nMultiplication Table of %d:\\n", num);
    printf("------------------------\\n");
    
    // Print table from 1 to 10
    for (i = 1; i <= 10; i++) {
        printf("%d × %d = %d\\n", num, i, num * i);
    }
    
    return 0;
}

// Useful for learning multiplication
// Can extend range beyond 10 if needed`} />

        <h3>📝 Program 58: Palindrome Check</h3>
        <CodeBlock code={`// Program 58: Check if number is palindrome
// Palindrome: Reads same forwards and backwards
// Examples: 121, 1331, 12321
#include <stdio.h>

int main()
{
    int num, reverse = 0, digit, temp;
    
    printf("Enter a number: ");
    scanf("%d", &num);
    
    temp = num;
    
    // Reverse the number
    while (temp != 0) {
        digit = temp % 10;
        reverse = reverse * 10 + digit;
        temp /= 10;
    }
    
    // Check if original equals reversed
    if (num == reverse) {
        printf("%d is a PALINDROME\\n", num);
    } else {
        printf("%d is NOT a palindrome\\n", num);
    }
    
    return 0;
}

// Palindrome examples: 0, 9, 11, 101, 1221, 12321
// Not palindrome: 10, 123, 1234`} />

        <h3>📝 Program 59: Perfect Number</h3>
        <CodeBlock code={`// Program 59: Check if number is perfect
// Perfect: Sum of proper divisors equals the number
// Example: 6 = 1 + 2 + 3 (divisors: 1, 2, 3)
#include <stdio.h>

int main()
{
    int num, sum = 0, i;
    
    printf("Enter a number: ");
    scanf("%d", &num);
    
    // Find all divisors except the number itself
    for (i = 1; i < num; i++) {
        if (num % i == 0) {
            sum += i;  // Add divisor to sum
        }
    }
    
    // Check if sum equals original
    if (sum == num && num > 0) {
        printf("%d is a PERFECT number\\n", num);
    } else {
        printf("%d is NOT a perfect number\\n", num);
    }
    
    return 0;
}

// Perfect numbers: 6, 28, 496, 8128
// Very rare! Only 51 known perfect numbers
// Related to Mersenne primes`} />

        <h3>📝 Program 60: Armstrong Number</h3>
        <CodeBlock code={`// Program 60: Check if number is Armstrong
// Armstrong: Sum of cubes of digits equals number
// Example: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153
#include <stdio.h>

int main()
{
    int num, sum = 0, digit, temp;
    
    printf("Enter a number: ");
    scanf("%d", &num);
    
    temp = num;
    
    // Calculate sum of cubes
    while (temp != 0) {
        digit = temp % 10;
        sum += digit * digit * digit;  // Cube each digit
        temp /= 10;
    }
    
    // Check if sum equals original
    if (sum == num) {
        printf("%d is an ARMSTRONG number\\n", num);
    } else {
        printf("%d is NOT an Armstrong number\\n", num);
    }
    
    return 0;
}

// Armstrong numbers (3 digits): 153, 370, 371, 407
// For n-digit numbers, use n-th power instead of cube`} />

        <h3>📝 Program 61: Prime Numbers in Range</h3>
        <CodeBlock code={`// Program 61: Find all prime numbers in a range
// Example: Primes from 1 to 20 → 2, 3, 5, 7, 11, 13, 17, 19
#include <stdio.h>

int main()
{
    int start, end, i, j, isPrime;
    
    printf("Enter start of range: ");
    scanf("%d", &start);
    
    printf("Enter end of range: ");
    scanf("%d", &end);
    
    printf("\\nPrime numbers between %d and %d:\\n", start, end);
    
    // Check each number in range
    for (i = start; i <= end; i++) {
        if (i <= 1) continue;  // Skip 0 and 1
        
        isPrime = 1;  // Assume prime
        
        // Check divisibility
        for (j = 2; j <= i/2; j++) {
            if (i % j == 0) {
                isPrime = 0;  // Not prime
                break;
            }
        }
        
        if (isPrime) {
            printf("%d ", i);
        }
    }
    
    printf("\\n");
    return 0;
}

// Sieve of Eratosthenes is more efficient for large ranges`} />

        <div className={styles.highlight}>
          <h4>💡 Key Takeaways:</h4>
          <ul>
            <li>Master <code>% 10</code> and <code>/ 10</code> for digit manipulation</li>
            <li>Palindromes: Compare number with its reverse</li>
            <li>Armstrong: Use power equal to number of digits</li>
            <li>Perfect numbers are extremely rare (ancient Greek discovery)</li>
            <li>Prime range: Nested loops check each number</li>
          </ul>
        </div>
      </section>

      {/* Chapter 8 */}
      <section id="chapter8" className={styles.card}>
        <h2>🎨 Chapter 8 - Pattern Printing</h2>
        
        <h3>📚 Tutorial: Nested Loops & Pattern Logic</h3>
        <p>Pattern printing is one of the best ways to master nested loops. You&apos;ll learn to control rows, columns, and understand spatial relationships in programming.</p>
        
        <h4>Pattern Fundamentals:</h4>
        <ul>
          <li><strong>Outer Loop:</strong> Controls rows (vertical)</li>
          <li><strong>Inner Loop:</strong> Controls columns (horizontal)</li>
          <li><strong>Spacing:</strong> Calculate spaces for alignment</li>
        </ul>
        
        <p><strong>3 Classic Patterns:</strong></p>
        
        <h3>📝 Program 62: Square Pattern</h3>
        <CodeBlock code={`// Program 62: Print a square pattern
// Example for n=4:
// * * * *
// * * * *
// * * * *
// * * * *
#include <stdio.h>

int main()
{
    int n, i, j;
    
    printf("Enter size: ");
    scanf("%d", &n);
    
    printf("\\nSquare Pattern:\\n");
    
    // Outer loop: rows
    for (i = 1; i <= n; i++) {
        // Inner loop: columns
        for (j = 1; j <= n; j++) {
            printf("* ");
        }
        printf("\\n");  // Move to next row
    }
    
    return 0;
}

// Pattern Analysis:
// Rows = n, Columns = n
// Total stars = n × n
// Each row has exactly n stars`} />

        <h3>📝 Program 63: Right Triangle Pattern</h3>
        <CodeBlock code={`// Program 63: Print a right-angled triangle
// Example for n=5:
// *
// * *
// * * *
// * * * *
// * * * * *
#include <stdio.h>

int main()
{
    int n, i, j;
    
    printf("Enter height: ");
    scanf("%d", &n);
    
    printf("\\nRight Triangle Pattern:\\n");
    
    // Outer loop: rows (1 to n)
    for (i = 1; i <= n; i++) {
        // Inner loop: stars in each row
        // Row 1 has 1 star, Row 2 has 2 stars, etc.
        for (j = 1; j <= i; j++) {
            printf("* ");
        }
        printf("\\n");
    }
    
    return 0;
}

// Pattern Logic:
// Row 1: 1 star  (j goes from 1 to 1)
// Row 2: 2 stars (j goes from 1 to 2)
// Row 3: 3 stars (j goes from 1 to 3)
// Inner loop limit = current row number (i)`} />

        <h3>📝 Program 64: Pyramid Pattern</h3>
        <CodeBlock code={`// Program 64: Print a centered pyramid
// Example for n=4:
//    *
//   * *
//  * * *
// * * * *
#include <stdio.h>

int main()
{
    int n, i, j;
    
    printf("Enter height: ");
    scanf("%d", &n);
    
    printf("\\nPyramid Pattern:\\n");
    
    // Outer loop: rows
    for (i = 1; i <= n; i++) {
        // Print spaces for alignment
        for (j = 1; j <= n - i; j++) {
            printf(" ");
        }
        
        // Print stars
        for (j = 1; j <= i; j++) {
            printf("* ");
        }
        
        printf("\\n");
    }
    
    return 0;
}

// Pattern Breakdown:
// Row 1: 3 spaces + 1 star   (n-1 spaces)
// Row 2: 2 spaces + 2 stars  (n-2 spaces)
// Row 3: 1 space  + 3 stars  (n-3 spaces)
// Row 4: 0 spaces + 4 stars  (n-4 spaces)
//
// Formula: Spaces = (n - row_number)
//          Stars = row_number`} />

        <div className={styles.highlight}>
          <h4>💡 Pattern Techniques:</h4>
          <ul>
            <li><strong>Square:</strong> Both loops run same number of times</li>
            <li><strong>Triangle:</strong> Inner loop depends on outer loop variable</li>
            <li><strong>Pyramid:</strong> Need spacing loop + star loop</li>
            <li><strong>Inverted Patterns:</strong> Reverse the loop conditions</li>
            <li><strong>Number Patterns:</strong> Print loop variable instead of *</li>
          </ul>
          
          <h4>🎯 Pattern Variations to Try:</h4>
          <CodeBlock code={`// Inverted Triangle:
// * * * * *
// * * * *
// * * *
// * *
// *
for (i = n; i >= 1; i--) {
    for (j = 1; j <= i; j++) {
        printf("* ");
    }
    printf("\\n");
}

// Number Triangle:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        printf("%d ", j);
    }
    printf("\\n");
}

// Diamond Pattern (combine pyramid + inverted pyramid)
// Hollow patterns (print * only on borders)
// Letter patterns (A, B, C...)
// Complex designs (heart, hourglass, etc.)`} />
        </div>
      </section>

      {/* Chapter 9 */}
      <section id="chapter9" className={styles.card}>
        <h2>📊 Chapter 9 - Arrays</h2>
        
        <h3>📚 Tutorial: Arrays & Collections</h3>
        <p>Arrays let you store multiple values of the same type in a single variable. Instead of using separate variables for each value, you use one array with multiple elements.</p>
        
        <h4>Array Basics:</h4>
        <ul>
          <li><strong>Declaration:</strong> <code>int arr[10];</code> - creates array of 10 integers</li>
          <li><strong>Index:</strong> Arrays start at index 0, so arr[0] is first element</li>
          <li><strong>Access:</strong> Use index to read/write: <code>arr[3] = 25;</code></li>
          <li><strong>Loop:</strong> Use for loops to process all elements</li>
        </ul>
        
        <p><strong>Essential Array Programs:</strong></p>
        
        <h3>📝 Program 65: Array Input & Output</h3>
        <CodeBlock code={`// Program 65: Store and display array elements
// Arrays: Collection of similar items
#include <stdio.h>

int main()
{
    int arr[100], n, i;
    
    printf("How many numbers? ");
    scanf("%d", &n);
    
    // Input array elements
    printf("Enter %d numbers:\\n", n);
    for (i = 0; i < n; i++) {
        printf("Element %d: ", i + 1);
        scanf("%d", &arr[i]);  // Store in array at index i
    }
    
    // Output array elements
    printf("\\nYou entered: ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);  // Access element at index i
    }
    printf("\\n");
    
    return 0;
}

// Key Points:
// - Arrays use 0-based indexing (first element is arr[0])
// - Loop through all elements using for loop
// - Array size should be large enough for all elements`} />

        <h3>📝 Program 66: Sum of Array Elements</h3>
        <CodeBlock code={`// Program 66: Calculate sum of all elements
// Example: [5, 10, 15, 20] → sum = 50
#include <stdio.h>

int main()
{
    int arr[100], n, i, sum = 0;
    
    printf("How many numbers? ");
    scanf("%d", &n);
    
    printf("Enter %d numbers:\\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
        sum += arr[i];  // Add each element to sum
    }
    
    printf("\\nSum of all elements = %d\\n", sum);
    
    // Calculate average
    float average = (float)sum / n;
    printf("Average = %.2f\\n", average);
    
    return 0;
}

// Accumulator pattern: sum += arr[i]
// Average = Sum / Count`} />

        <h3>📝 Program 67: Find Maximum</h3>
        <CodeBlock code={`// Program 67: Find largest element in array
// Example: [3, 9, 1, 7, 5] → max = 9
#include <stdio.h>

int main()
{
    int arr[100], n, i, max;
    
    printf("How many numbers? ");
    scanf("%d", &n);
    
    printf("Enter %d numbers:\\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    
    // Assume first element is maximum
    max = arr[0];
    
    // Compare with remaining elements
    for (i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];  // Update max when larger found
        }
    }
    
    printf("\\nLargest element = %d\\n", max);
    
    return 0;
}

// Algorithm: Track maximum while scanning array
// Initialize with first element, then compare`} />

        <h3>📝 Program 68: Find Minimum</h3>
        <CodeBlock code={`// Program 68: Find smallest element in array
// Example: [3, 9, 1, 7, 5] → min = 1
#include <stdio.h>

int main()
{
    int arr[100], n, i, min;
    
    printf("How many numbers? ");
    scanf("%d", &n);
    
    printf("Enter %d numbers:\\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    
    // Assume first element is minimum
    min = arr[0];
    
    // Compare with remaining elements
    for (i = 1; i < n; i++) {
        if (arr[i] < min) {
            min = arr[i];  // Update min when smaller found
        }
    }
    
    printf("\\nSmallest element = %d\\n", min);
    
    return 0;
}

// Similar to max, but use < instead of >
// Can find both max and min in same loop`} />

        <h3>📝 Program 69: Linear Search</h3>
        <CodeBlock code={`// Program 69: Search for an element in array
// Linear search: Check each element one by one
#include <stdio.h>

int main()
{
    int arr[100], n, i, search, found = 0;
    
    printf("How many numbers? ");
    scanf("%d", &n);
    
    printf("Enter %d numbers:\\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    
    printf("\\nEnter number to search: ");
    scanf("%d", &search);
    
    // Search for element
    for (i = 0; i < n; i++) {
        if (arr[i] == search) {
            printf("Found at position %d (index %d)\\n", i + 1, i);
            found = 1;
            break;  // Stop searching when found
        }
    }
    
    if (!found) {
        printf("Not found in array\\n");
    }
    
    return 0;
}

// Linear search: O(n) time complexity
// For sorted arrays, binary search is faster`} />

        <h3>📝 Program 70: Reverse Array</h3>
        <CodeBlock code={`// Program 70: Reverse elements of array
// Example: [1, 2, 3, 4, 5] → [5, 4, 3, 2, 1]
#include <stdio.h>

int main()
{
    int arr[100], n, i, temp;
    
    printf("How many numbers? ");
    scanf("%d", &n);
    
    printf("Enter %d numbers:\\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    
    printf("\\nOriginal array: ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    
    // Reverse by swapping elements
    for (i = 0; i < n / 2; i++) {
        temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }
    
    printf("\\nReversed array: ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    
    return 0;
}

// Swap first with last, second with second-last, etc.
// Only need to swap first half with second half`} />

        <h3>📝 Program 71: Bubble Sort</h3>
        <CodeBlock code={`// Program 71: Sort array in ascending order
// Bubble sort: Repeatedly swap adjacent elements if wrong order
#include <stdio.h>

int main()
{
    int arr[100], n, i, j, temp;
    
    printf("How many numbers? ");
    scanf("%d", &n);
    
    printf("Enter %d numbers:\\n", n);
    for (i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    
    printf("\\nBefore sorting: ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    
    // Bubble sort algorithm
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    printf("\\nAfter sorting: ");
    for (i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    
    return 0;
}

// Bubble sort: O(n²) - good for small arrays
// Each pass "bubbles" largest element to end`} />

        <h3>📝 Program 72: 2D Array (Matrix)</h3>
        <CodeBlock code={`// Program 72: Work with 2D array (matrix)
// 2D array: Table with rows and columns
#include <stdio.h>

int main()
{
    int matrix[10][10], rows, cols, i, j;
    
    printf("Enter rows and columns: ");
    scanf("%d %d", &rows, &cols);
    
    // Input matrix
    printf("Enter elements:\\n");
    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            printf("Element[%d][%d]: ", i, j);
            scanf("%d", &matrix[i][j]);
        }
    }
    
    // Display matrix
    printf("\\nMatrix:\\n");
    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            printf("%d\\t", matrix[i][j]);
        }
        printf("\\n");
    }
    
    return 0;
}

// 2D arrays: array[row][column]
// Nested loops: outer for rows, inner for columns
// Applications: game boards, images, tables`} />

        <div className={styles.highlight}>
          <h4>💡 Key Takeaways:</h4>
          <ul>
            <li>Arrays use 0-based indexing: first element is arr[0]</li>
            <li>Always use loop variable as index: <code>arr[i]</code></li>
            <li>Common operations: sum, max, min, search, sort, reverse</li>
            <li>Bubble sort compares adjacent pairs and swaps if needed</li>
            <li>2D arrays need nested loops for processing</li>
            <li>Array size should accommodate all elements (use 100 for safety)</li>
          </ul>
        </div>
      </section>

      {/* Chapter 10 */}
      <section id="chapter10" className={styles.card}>
        <h2>⚙️ Chapter 10 - Functions</h2>
        
        <h3>📚 Tutorial: Functions & Code Reusability</h3>
        <p>Functions are blocks of code that perform a specific task. They help you organize code, avoid repetition, and make programs easier to understand and maintain.</p>
        
        <h4>Function Basics:</h4>
        <ul>
          <li><strong>Declaration:</strong> Tell compiler function exists (prototype)</li>
          <li><strong>Definition:</strong> Write what function actually does</li>
          <li><strong>Call:</strong> Execute function from main or other functions</li>
          <li><strong>Parameters:</strong> Values passed to function (input)</li>
          <li><strong>Return Value:</strong> Result sent back from function (output)</li>
        </ul>
        
        <p><strong>7 Programs on Functions:</strong></p>
        
        <h3>📝 Program 73: Simple Function</h3>
        <CodeBlock code={`// Program 73: Create and call basic functions
// Functions divide code into smaller, reusable pieces
#include <stdio.h>

// Function declarations (prototypes)
void greet();
void sayGoodbye();

int main()
{
    printf("Main function starts\\n");
    
    greet();        // Call first function
    sayGoodbye();   // Call second function
    
    printf("Main function ends\\n");
    return 0;
}

// Function definition - greet user
void greet() {
    printf("Hello! Welcome to C programming\\n");
}

// Function definition - say goodbye
void sayGoodbye() {
    printf("Thanks for using this program!\\n");
}

// Why use functions?
// - Organize code into logical pieces
// - Reuse code without copying
// - Easier to read and maintain`} />

        <h3>📝 Program 74: Functions with Parameters</h3>
        <CodeBlock code={`// Program 74: Pass values to functions
// Parameters let you send data to functions
#include <stdio.h>

// Function declarations
void printSquare(int num);
void printSum(int a, int b);
void printGreeting(char name[]);

int main()
{
    printSquare(5);              // Pass one parameter
    printSum(10, 20);            // Pass multiple parameters
    printGreeting("Alice");      // Pass string
    
    return 0;
}

// Print square of a number
void printSquare(int num) {
    printf("Square of %d = %d\\n", num, num * num);
}

// Print sum of two numbers
void printSum(int a, int b) {
    printf("%d + %d = %d\\n", a, b, a + b);
}

// Print personalized greeting
void printGreeting(char name[]) {
    printf("Hello, %s! Nice to meet you.\\n", name);
}

// Parameters act as local variables inside function
// Changes to parameters don't affect original values`} />

        <h3>📝 Program 75: Functions with Return Values</h3>
        <CodeBlock code={`// Program 75: Get results back from functions
// Return values let functions send data back
#include <stdio.h>

// Function declarations
int getSquare(int num);
int getSum(int a, int b);
int isEven(int num);

int main()
{
    int result;
    
    // Store returned value in variable
    result = getSquare(7);
    printf("Square of 7 = %d\\n", result);
    
    // Use returned value directly
    printf("Sum of 5 and 3 = %d\\n", getSum(5, 3));
    
    // Use in condition
    if (isEven(10)) {
        printf("10 is even\\n");
    }
    
    return 0;
}

// Return square of number
int getSquare(int num) {
    return num * num;  // Send result back
}

// Return sum of two numbers
int getSum(int a, int b) {
    return a + b;
}

// Return 1 if even, 0 if odd
int isEven(int num) {
    return (num % 2 == 0);
}

// Return type must match what function returns
// void = no return value
// int = returns integer
// float = returns floating point, etc.`} />

        <h3>📝 Program 76: Pass by Value</h3>
        <CodeBlock code={`// Program 76: Understanding Pass by Value
// C passes copies of values to functions
#include <stdio.h>

void tryToModify(int x);
void demonstrateScope(int a);

int main()
{
    int number = 10;
    
    printf("Before function call: number = %d\\n", number);
    tryToModify(number);
    printf("After function call: number = %d\\n", number);
    
    // number remains 10 (unchanged)
    
    demonstrateScope(25);
    // printf("%d", a);  // ERROR: 'a' doesn't exist here
    
    return 0;
}

void tryToModify(int x) {
    x = 999;  // Changes only local copy
    printf("Inside function: x = %d\\n", x);
}

void demonstrateScope(int a) {
    printf("Parameter a = %d\\n", a);
    // 'a' only exists inside this function
}

// Key Concept: Pass by Value
// - Function gets COPY of original value
// - Modifying parameter doesn't change original
// - To modify original, use pointers (advanced topic)`} />

        <h3>📝 Program 77: Prime Check Function</h3>
        <CodeBlock code={`// Program 77: Reusable prime checking function
// Real-world example of function benefits
#include <stdio.h>

// Function to check if number is prime
int isPrime(int num) {
    if (num <= 1) return 0;  // Not prime
    
    for (int i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return 0;  // Not prime (divisible)
        }
    }
    
    return 1;  // Prime
}

int main()
{
    int num;
    
    printf("Enter a number: ");
    scanf("%d", &num);
    
    // Use function in if statement
    if (isPrime(num)) {
        printf("%d is PRIME\\n", num);
    } else {
        printf("%d is NOT prime\\n", num);
    }
    
    // Reuse function for multiple numbers
    printf("\\nPrime numbers from 1 to 20:\\n");
    for (int i = 1; i <= 20; i++) {
        if (isPrime(i)) {
            printf("%d ", i);
        }
    }
    printf("\\n");
    
    return 0;
}

// Function written once, called many times!
// Clean, readable, maintainable code`} />

        <h3>📝 Program 78: Calculator with Functions</h3>
        <CodeBlock code={`// Program 78: Calculator using separate functions
// Organize operations into functions
#include <stdio.h>

// Function declarations
float add(float a, float b);
float subtract(float a, float b);
float multiply(float a, float b);
float divide(float a, float b);

int main()
{
    float num1, num2;
    char operator;
    
    printf("Enter calculation (e.g., 5 + 3): ");
    scanf("%f %c %f", &num1, &operator, &num2);
    
    float result;
    
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            printf("Invalid operator!\\n");
            return 1;
    }
    
    printf("Result: %.2f\\n", result);
    return 0;
}

// Addition function
float add(float a, float b) {
    return a + b;
}

// Subtraction function
float subtract(float a, float b) {
    return a - b;
}

// Multiplication function
float multiply(float a, float b) {
    return a * b;
}

// Division function
float divide(float a, float b) {
    if (b == 0) {
        printf("Error: Division by zero!\\n");
        return 0;
    }
    return a / b;
}

// Clean structure: each operation separate
// Easy to add new operations or modify existing ones`} />

        <h3>📝 Program 79: Recursive Functions</h3>
        <CodeBlock code={`// Program 79: Recursion - Function calling itself
// Recursion: A function that calls itself
#include <stdio.h>

// Recursive factorial function
int factorial(int n) {
    // Base case: stop recursion
    if (n <= 1) {
        return 1;
    }
    
    // Recursive case: call itself
    return n * factorial(n - 1);
}

// Recursive Fibonacci function
int fibonacci(int n) {
    // Base cases
    if (n == 0) return 0;
    if (n == 1) return 1;
    
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main()
{
    int num;
    
    printf("Enter a number: ");
    scanf("%d", &num);
    
    // Calculate factorial recursively
    printf("%d! = %d\\n", num, factorial(num));
    
    // Generate Fibonacci sequence
    printf("\\nFibonacci sequence up to position %d:\\n", num);
    for (int i = 0; i <= num; i++) {
        printf("%d ", fibonacci(i));
    }
    printf("\\n");
    
    return 0;
}

// Recursion Breakdown (factorial(4)):
// factorial(4) = 4 × factorial(3)
//              = 4 × 3 × factorial(2)
//              = 4 × 3 × 2 × factorial(1)
//              = 4 × 3 × 2 × 1
//              = 24
//
// Every recursion needs:
// 1. Base case (when to stop)
// 2. Recursive case (call itself with simpler input)`} />

        <div className={styles.highlight}>
          <h4>💡 Key Takeaways:</h4>
          <ul>
            <li><strong>Function Structure:</strong> return_type name(parameters) &#123; body &#125;</li>
            <li><strong>Prototype:</strong> Declare before main, define after main</li>
            <li><strong>Pass by Value:</strong> Functions receive copies, not originals</li>
            <li><strong>Return:</strong> Use return keyword to send values back</li>
            <li><strong>Recursion:</strong> Function calls itself (needs base case!)</li>
            <li><strong>Benefits:</strong> Code reuse, organization, readability, maintenance</li>
          </ul>
        </div>
      </section>

      {/* Chapter 11 */}
      <section id="chapter11" className={styles.card}>
        <h2>🔤 Chapter 11 - Strings</h2>
        
        <h3>📚 Tutorial: Working with Text</h3>
        <p>Strings are sequences of characters used to represent text. In C, strings are arrays of characters ending with a null terminator (&apos;\\0&apos;).</p>
        
        <h4>String Essentials:</h4>
        <ul>
          <li><strong>Declaration:</strong> <code>char str[50];</code> - array of characters</li>
          <li><strong>Null Terminator:</strong> &apos;\\0&apos; marks end of string</li>
          <li><strong>Input:</strong> <code>scanf(&quot;%s&quot;, str)</code> or <code>gets(str)</code></li>
          <li><strong>string.h:</strong> Library with useful string functions</li>
        </ul>
        
        <p><strong>10 String Programs:</strong></p>
        
        <h3>📝 Program 80: String Basics</h3>
        <CodeBlock code={`// Program 80: Understanding strings
// String = Array of characters + null terminator
#include <stdio.h>

int main()
{
    char name[50];
    char greeting[] = "Hello";  // Automatic null terminator
    
    printf("Enter your name: ");
    scanf("%s", name);  // No & needed for strings
    
    printf("%s, %s!\\n", greeting, name);
    
    // String is stored as: 'H' 'e' 'l' 'l' 'o' '\\0'
    // Array of characters with null terminator at end
    
    // Display each character
    printf("\\nCharacters in your name:\\n");
    for (int i = 0; name[i] != '\\0'; i++) {
        printf("%c ", name[i]);
    }
    printf("\\n");
    
    return 0;
}

// Key Points:
// - Strings are character arrays
// - Always end with '\\0' (null character)
// - scanf stops at whitespace (use fgets for full line)`} />

        <h3>📝 Program 81: String Input Methods</h3>
        <CodeBlock code={`// Program 81: Different ways to input strings
#include <stdio.h>

int main()
{
    char word[50];
    char sentence[100];
    
    // Method 1: scanf - stops at whitespace
    printf("Enter a single word: ");
    scanf("%s", word);
    printf("You entered: %s\\n", word);
    
    // Clear input buffer
    while (getchar() != '\\n');
    
    // Method 2: fgets - reads entire line
    printf("\\nEnter a sentence: ");
    fgets(sentence, sizeof(sentence), stdin);
    printf("You entered: %s", sentence);
    
    return 0;
}

// scanf("%s") - stops at space
// fgets() - reads until newline or size limit
// gets() - UNSAFE, don't use (buffer overflow risk)`} />

        <h3>📝 Program 82: String Length</h3>
        <CodeBlock code={`// Program 82: Calculate length of string
// Length = number of characters before '\\0'
#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];
    int length;
    
    printf("Enter a string: ");
    scanf("%s", str);
    
    // Method 1: Using strlen() function
    length = strlen(str);
    printf("Length (using strlen): %d\\n", length);
    
    // Method 2: Manual counting
    int count = 0;
    for (int i = 0; str[i] != '\\0'; i++) {
        count++;
    }
    printf("Length (manual count): %d\\n", count);
    
    return 0;
}

// strlen() counts characters until '\\0'
// Does NOT include '\\0' in count
// Example: "Hello" has length 5, but uses 6 bytes`} />

        <h3>📝 Program 83: String Copy</h3>
        <CodeBlock code={`// Program 83: Copy one string to another
#include <stdio.h>
#include <string.h>

int main()
{
    char source[100], dest1[100], dest2[100];
    
    printf("Enter a string: ");
    scanf("%s", source);
    
    // Method 1: Using strcpy()
    strcpy(dest1, source);
    printf("Copied using strcpy: %s\\n", dest1);
    
    // Method 2: Manual copy
    int i;
    for (i = 0; source[i] != '\\0'; i++) {
        dest2[i] = source[i];
    }
    dest2[i] = '\\0';  // Don't forget null terminator!
    printf("Copied manually: %s\\n", dest2);
    
    return 0;
}

// strcpy(destination, source)
// Copies source to destination including '\\0'
// Destination must have enough space!`} />

        <h3>📝 Program 84: String Compare</h3>
        <CodeBlock code={`// Program 84: Compare two strings
// Can't use == for strings in C!
#include <stdio.h>
#include <string.h>

int main()
{
    char str1[50], str2[50];
    
    printf("Enter first string: ");
    scanf("%s", str1);
    
    printf("Enter second string: ");
    scanf("%s", str2);
    
    // Using strcmp()
    int result = strcmp(str1, str2);
    
    if (result == 0) {
        printf("Strings are EQUAL\\n");
    } else if (result < 0) {
        printf("First string comes BEFORE second\\n");
    } else {
        printf("First string comes AFTER second\\n");
    }
    
    return 0;
}

// strcmp(str1, str2) returns:
// 0  if strings are equal
// <0 if str1 < str2 (alphabetically)
// >0 if str1 > str2 (alphabetically)
//
// Compares ASCII values character by character`} />

        <h3>📝 Program 85: String Concatenate</h3>
        <CodeBlock code={`// Program 85: Join two strings together
#include <stdio.h>
#include <string.h>

int main()
{
    char first[100], second[50];
    
    printf("Enter first string: ");
    scanf("%s", first);
    
    printf("Enter second string: ");
    scanf("%s", second);
    
    printf("\\nBefore concatenation: %s\\n", first);
    
    // Append second to first
    strcat(first, second);
    
    printf("After concatenation: %s\\n", first);
    
    return 0;
}

// strcat(dest, source)
// Appends source to end of dest
// dest must have enough space for both!
//
// Example: 
// first = "Hello"
// second = "World"
// After strcat: first = "HelloWorld"`} />

        <h3>📝 Program 86: String Reverse</h3>
        <CodeBlock code={`// Program 86: Reverse a string
// Example: "Hello" → "olleH"
#include <stdio.h>
#include <string.h>

int main()
{
    char str[100], temp;
    int length, i;
    
    printf("Enter a string: ");
    scanf("%s", str);
    
    length = strlen(str);
    
    printf("Original: %s\\n", str);
    
    // Reverse by swapping characters
    for (i = 0; i < length / 2; i++) {
        temp = str[i];
        str[i] = str[length - 1 - i];
        str[length - 1 - i] = temp;
    }
    
    printf("Reversed: %s\\n", str);
    
    return 0;
}

// Algorithm: Swap first with last, second with second-last, etc.
// Only need to swap first half with second half`} />

        <h3>📝 Program 87: String Palindrome</h3>
        <CodeBlock code={`// Program 87: Check if string is palindrome
// Palindrome: Reads same forwards and backwards
// Examples: "radar", "level", "noon"
#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];
    int length, isPalindrome = 1;
    
    printf("Enter a string: ");
    scanf("%s", str);
    
    length = strlen(str);
    
    // Compare characters from both ends
    for (int i = 0; i < length / 2; i++) {
        if (str[i] != str[length - 1 - i]) {
            isPalindrome = 0;
            break;
        }
    }
    
    if (isPalindrome) {
        printf("%s is a PALINDROME\\n", str);
    } else {
        printf("%s is NOT a palindrome\\n", str);
    }
    
    return 0;
}

// Compare first half with second half (mirrored)
// If all match, it's a palindrome`} />

        <h3>📝 Program 88: Count Vowels & Consonants</h3>
        <CodeBlock code={`// Program 88: Count vowels and consonants
#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main()
{
    char str[100];
    int vowels = 0, consonants = 0;
    
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);
    
    for (int i = 0; str[i] != '\\0'; i++) {
        char ch = tolower(str[i]);  // Convert to lowercase
        
        if (ch >= 'a' && ch <= 'z') {
            // Check if vowel
            if (ch == 'a' || ch == 'e' || ch == 'i' || 
                ch == 'o' || ch == 'u') {
                vowels++;
            } else {
                consonants++;
            }
        }
    }
    
    printf("\\nVowels: %d\\n", vowels);
    printf("Consonants: %d\\n", consonants);
    
    return 0;
}

// Vowels: a, e, i, o, u
// Consonants: all other letters
// tolower() converts to lowercase for easy comparison`} />

        <h3>📝 Program 89: String Library Functions</h3>
        <CodeBlock code={`// Program 89: Common string.h functions
#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main()
{
    char str[100] = "Hello World";
    char str2[50];
    
    printf("Original string: %s\\n", str);
    printf("Length: %d\\n", strlen(str));
    
    // Copy string
    strcpy(str2, str);
    printf("Copied string: %s\\n", str2);
    
    // Concatenate
    strcat(str, "!");
    printf("After concatenation: %s\\n", str);
    
    // Compare
    if (strcmp(str, str2) != 0) {
        printf("Strings are different\\n");
    }
    
    // Convert to uppercase/lowercase
    printf("\\nCharacter conversions:\\n");
    for (int i = 0; str[i]; i++) {
        printf("%c", toupper(str[i]));
    }
    printf("\\n");
    
    return 0;
}

// Common string.h functions:
// strlen()  - get length
// strcpy()  - copy string
// strcat()  - concatenate strings
// strcmp()  - compare strings
// strupr()  - convert to uppercase (non-standard)
// strlwr()  - convert to lowercase (non-standard)
//
// ctype.h functions:
// toupper() - convert char to uppercase
// tolower() - convert char to lowercase
// isalpha() - check if letter
// isdigit() - check if digit`} />

        <div className={styles.highlight}>
          <h4>💡 Key Takeaways:</h4>
          <ul>
            <li>Strings are character arrays ending with <code>\0</code></li>
            <li>Always allocate space for null terminator (length + 1)</li>
            <li>Use <code>string.h</code> functions for common operations</li>
            <li><code>scanf(&quot;%s&quot;)</code> stops at whitespace, <code>fgets()</code> reads full line</li>
            <li>Cannot compare strings with <code>==</code>, use <code>strcmp()</code></li>
            <li>String concatenation with <code>strcat()</code> modifies first string</li>
            <li>Loop until <code>\0</code> to process each character</li>
          </ul>
        </div>
      </section>

      {/* Getting Started */}
      <section id="getting-started" className={styles.card}>
        <h2>🚀 Getting Started</h2>
        
        <h3>Step 1: Install a C Compiler</h3>
        <div className={`${styles.highlight}`}>
          <h4>Windows Users:</h4>
          <ul>
            <li><strong>MinGW</strong> - Download from mingw-w64.org</li>
            <li><strong>Dev-C++</strong> - Built-in compiler, beginner-friendly</li>
            <li><strong>Code::Blocks</strong> - All-in-one IDE</li>
          </ul>
        </div>

        <div className={`${styles.highlight} ${styles.success}`}>
          <h4>Linux/Mac Users:</h4>
          <p><strong>Linux:</strong> <code>sudo apt-get install gcc</code></p>
          <p><strong>Mac:</strong> <code>xcode-select --install</code></p>
        </div>

        <h3>Step 2: Write Your First Program</h3>
        <CodeBlock code={`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`} />

        <h3>Step 3: Compile and Run</h3>
        <div className={`${styles.highlight} ${styles.warning}`}>
          <p><strong>Windows:</strong> <code>gcc hello.c -o hello.exe</code> then <code>hello.exe</code></p>
          <p><strong>Linux/Mac:</strong> <code>gcc hello.c -o hello</code> then <code>./hello</code></p>
        </div>
      </section>

      {/* Learning Tips */}
      <section id="learning" className={styles.card}>
        <h2>💡 Learning Tips</h2>
        
        <h3>Best Practices</h3>
        <ul>
          <li>✅ <strong>Type, don&apos;t copy</strong> - Build muscle memory</li>
          <li>✅ <strong>Understand before moving on</strong> - Don&apos;t rush</li>
          <li>✅ <strong>Make mistakes</strong> - Learn from errors</li>
          <li>✅ <strong>Experiment</strong> - Modify code to see what happens</li>
          <li>✅ <strong>Practice daily</strong> - 30 min daily &gt; 3 hours once</li>
          <li>✅ <strong>Comment your code</strong> - Explain your thinking</li>
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" className={styles.card}>
        <h2>❓ Frequently Asked Questions</h2>
        
        <div className={styles.faqItem}>
          <div className={styles.faqQuestion}>Q1: Do I need to know math to learn C?</div>
          <div className={styles.faqAnswer}>Basic math (addition, subtraction, multiplication, division) is enough. You&apos;ll learn as you go!</div>
        </div>

        <div className={styles.faqItem}>
          <div className={styles.faqQuestion}>Q2: How long will it take to learn C?</div>
          <div className={styles.faqAnswer}>Basics: 2-3 months with regular practice. Proficiency: 6-12 months. Master level: 2+ years.</div>
        </div>

        <div className={styles.faqItem}>
          <div className={styles.faqQuestion}>Q3: Is C still relevant in 2026?</div>
          <div className={styles.faqAnswer}>Absolutely! C is used in operating systems, embedded systems, databases, and is the foundation for many languages.</div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className={styles.card}>
        <h2>📚 Additional Resources</h2>
        
        <h3>Free Online Resources</h3>
        <ul>
          <li><strong>learn-c.org</strong> - Interactive C tutorials</li>
          <li><strong>CS50 (Harvard)</strong> - Free course with great explanations</li>
          <li><strong>GeeksforGeeks C</strong> - Detailed tutorials</li>
          <li><strong>Programiz C</strong> - Beginner-friendly tutorials</li>
        </ul>

        <h3>Practice Platforms</h3>
        <ul>
          <li><strong>HackerRank</strong> - hackerrank.com/domains/c</li>
          <li><strong>LeetCode</strong> - Algorithm problems</li>
          <li><strong>CodeChef</strong> - Programming contests</li>
        </ul>
      </section>

      {/* Quick Reference */}
      <section id="reference" className={styles.card}>
        <h2>💻 Quick Reference</h2>
        
        <h3>Format Specifiers</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Specifier</th>
              <th>Data Type</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>%d</code> or <code>%i</code></td>
              <td>Integer</td>
              <td>printf(&quot;%d&quot;, 10)</td>
            </tr>
            <tr>
              <td><code>%f</code></td>
              <td>Float/Double</td>
              <td>printf(&quot;%.2f&quot;, 3.14)</td>
            </tr>
            <tr>
              <td><code>%c</code></td>
              <td>Character</td>
              <td>printf(&quot;%c&quot;, &apos;A&apos;)</td>
            </tr>
            <tr>
              <td><code>%s</code></td>
              <td>String</td>
              <td>printf(&quot;%s&quot;, &quot;Hello&quot;)</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

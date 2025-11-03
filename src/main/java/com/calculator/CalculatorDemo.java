package com.calculator;

/**
 * Demo class to showcase the Calculator functionality.
 * This demonstrates how the calculator can be used, which is useful
 * for frontend developers to understand the API.
 */
public class CalculatorDemo {
    
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        
        System.out.println("=== Calculator Demo ===");
        System.out.println();
        
        // Basic operations
        System.out.println("Addition: 10 + 5 = " + calc.add(10, 5));
        System.out.println("Subtraction: 10 - 5 = " + calc.subtract(10, 5));
        System.out.println("Multiplication: 10 * 5 = " + calc.multiply(10, 5));
        System.out.println("Division: 10 / 5 = " + calc.divide(10, 5));
        System.out.println();
        
        // Advanced operations
        System.out.println("Percentage: 20% of 150 = " + calc.percentage(150, 20));
        System.out.println("Power: 2^3 = " + calc.power(2, 3));
        System.out.println("Square Root: √16 = " + calc.squareRoot(16));
        System.out.println();
        
        // Using the calculate method (useful for frontend string-based operations)
        System.out.println("Using calculate method:");
        System.out.println("calculate(10, '+', 5) = " + calc.calculate(10, "+", 5));
        System.out.println("calculate(10, 'multiply', 5) = " + calc.calculate(10, "multiply", 5));
        System.out.println("calculate(16, 'sqrt', 0) = " + calc.calculate(16, "sqrt", 0));
        System.out.println();
        
        // Error handling examples
        System.out.println("Error Handling Examples:");
        try {
            calc.divide(10, 0);
        } catch (ArithmeticException e) {
            System.out.println("Division by zero: " + e.getMessage());
        }
        
        try {
            calc.squareRoot(-4);
        } catch (ArithmeticException e) {
            System.out.println("Square root of negative: " + e.getMessage());
        }
        
        try {
            calc.calculate(10, "unknown", 5);
        } catch (IllegalArgumentException e) {
            System.out.println("Unknown operation: " + e.getMessage());
        }
        
        System.out.println();
        System.out.println("=== Demo Complete ===");
    }
}

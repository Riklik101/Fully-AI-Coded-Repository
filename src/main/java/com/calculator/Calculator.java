package com.calculator;

/**
 * Basic Calculator class designed for frontend integration.
 * Provides standard arithmetic operations with error handling.
 * 
 * This class is stateless and thread-safe, making it suitable for use
 * in web applications and REST APIs.
 * 
 * @author AI Generated
 * @version 1.0
 */
public class Calculator {
    
    /**
     * Adds two numbers.
     * 
     * @param a the first number
     * @param b the second number
     * @return the sum of a and b
     */
    public double add(double a, double b) {
        return a + b;
    }
    
    /**
     * Subtracts the second number from the first.
     * 
     * @param a the first number
     * @param b the second number
     * @return the difference of a and b
     */
    public double subtract(double a, double b) {
        return a - b;
    }
    
    /**
     * Multiplies two numbers.
     * 
     * @param a the first number
     * @param b the second number
     * @return the product of a and b
     */
    public double multiply(double a, double b) {
        return a * b;
    }
    
    /**
     * Divides the first number by the second.
     * 
     * @param a the dividend
     * @param b the divisor
     * @return the quotient of a divided by b
     * @throws ArithmeticException if b is zero
     */
    public double divide(double a, double b) {
        if (b == 0) {
            throw new ArithmeticException("Division by zero is not allowed");
        }
        return a / b;
    }
    
    /**
     * Calculates the percentage of a number.
     * 
     * @param value the base value
     * @param percentage the percentage to calculate
     * @return the percentage of the value
     */
    public double percentage(double value, double percentage) {
        return (value * percentage) / 100;
    }
    
    /**
     * Calculates the power of a number.
     * 
     * @param base the base number
     * @param exponent the exponent
     * @return base raised to the power of exponent
     */
    public double power(double base, double exponent) {
        return Math.pow(base, exponent);
    }
    
    /**
     * Calculates the square root of a number.
     * 
     * @param value the number to find the square root of
     * @return the square root of the value
     * @throws ArithmeticException if value is negative
     */
    public double squareRoot(double value) {
        if (value < 0) {
            throw new ArithmeticException("Cannot calculate square root of a negative number");
        }
        return Math.sqrt(value);
    }
    
    /**
     * Performs a calculation based on the operation string.
     * This method is particularly useful for frontend integration where
     * the operation is sent as a string parameter.
     * 
     * @param a the first operand
     * @param operation the operation to perform (+, -, *, /, %, ^, sqrt)
     * @param b the second operand (not used for sqrt operation)
     * @return the result of the calculation
     * @throws IllegalArgumentException if the operation is not recognized
     * @throws ArithmeticException if a mathematical error occurs (e.g., division by zero)
     */
    public double calculate(double a, String operation, double b) {
        if (operation == null) {
            throw new IllegalArgumentException("Operation cannot be null");
        }
        
        switch (operation.toLowerCase().trim()) {
            case "+":
            case "add":
                return add(a, b);
            case "-":
            case "subtract":
                return subtract(a, b);
            case "*":
            case "multiply":
                return multiply(a, b);
            case "/":
            case "divide":
                return divide(a, b);
            case "%":
            case "percentage":
                return percentage(a, b);
            case "^":
            case "power":
                return power(a, b);
            case "sqrt":
            case "squareroot":
                return squareRoot(a);
            default:
                throw new IllegalArgumentException("Unknown operation: " + operation);
        }
    }
    
    /**
     * Clears any previous state (for future stateful implementations).
     * Currently this is a no-op as the calculator is stateless.
     */
    public void clear() {
        // No-op for stateless calculator
        // This method is provided for future extensions
    }
}

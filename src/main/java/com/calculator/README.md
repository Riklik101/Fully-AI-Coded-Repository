# Calculator API Documentation

## Overview
This is a basic calculator implementation designed for easy integration with frontend applications. The calculator provides standard arithmetic operations with comprehensive error handling.

## Features
- **Stateless Design**: Thread-safe and suitable for web applications
- **Multiple Operations**: Addition, subtraction, multiplication, division, percentage, power, and square root
- **Error Handling**: Proper exception handling for edge cases
- **Flexible API**: Supports both method-specific calls and string-based operations
- **Frontend Ready**: Designed to work seamlessly with REST APIs and web frontends

## Class: Calculator

### Methods

#### Basic Operations

##### `add(double a, double b)`
Adds two numbers.
```java
Calculator calc = new Calculator();
double result = calc.add(10, 5); // Returns 15.0
```

##### `subtract(double a, double b)`
Subtracts the second number from the first.
```java
double result = calc.subtract(10, 5); // Returns 5.0
```

##### `multiply(double a, double b)`
Multiplies two numbers.
```java
double result = calc.multiply(10, 5); // Returns 50.0
```

##### `divide(double a, double b)`
Divides the first number by the second.
- **Throws**: `ArithmeticException` if divisor is zero
```java
double result = calc.divide(10, 5); // Returns 2.0
// calc.divide(10, 0); // Throws ArithmeticException
```

#### Advanced Operations

##### `percentage(double value, double percentage)`
Calculates the percentage of a number.
```java
double result = calc.percentage(150, 20); // Returns 30.0 (20% of 150)
```

##### `power(double base, double exponent)`
Calculates the power of a number.
```java
double result = calc.power(2, 3); // Returns 8.0 (2^3)
```

##### `squareRoot(double value)`
Calculates the square root of a number.
- **Throws**: `ArithmeticException` if value is negative
```java
double result = calc.squareRoot(16); // Returns 4.0
// calc.squareRoot(-4); // Throws ArithmeticException
```

#### Unified Operation Method

##### `calculate(double a, String operation, double b)`
Performs a calculation based on the operation string. This method is particularly useful for frontend integration where the operation is sent as a string parameter.

**Supported operations:**
- `"+"` or `"add"` - Addition
- `"-"` or `"subtract"` - Subtraction
- `"*"` or `"multiply"` - Multiplication
- `"/"` or `"divide"` - Division
- `"%"` or `"percentage"` - Percentage
- `"^"` or `"power"` - Power
- `"sqrt"` or `"squareroot"` - Square Root (only uses first parameter)

**Throws:**
- `IllegalArgumentException` if the operation is not recognized
- `ArithmeticException` if a mathematical error occurs

```java
Calculator calc = new Calculator();
double result1 = calc.calculate(10, "+", 5);        // Returns 15.0
double result2 = calc.calculate(10, "multiply", 5); // Returns 50.0
double result3 = calc.calculate(16, "sqrt", 0);     // Returns 4.0
```

## Integration Examples

### REST API Integration (Spring Boot Example)
```java
@RestController
@RequestMapping("/api/calculator")
public class CalculatorController {
    private final Calculator calculator = new Calculator();
    
    @GetMapping("/calculate")
    public ResponseEntity<Double> calculate(
        @RequestParam double a,
        @RequestParam String operation,
        @RequestParam(required = false, defaultValue = "0") double b
    ) {
        try {
            double result = calculator.calculate(a, operation, b);
            return ResponseEntity.ok(result);
        } catch (ArithmeticException | IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
```

### JSON API Example
**Request:**
```json
{
  "operand1": 10,
  "operation": "+",
  "operand2": 5
}
```

**Response:**
```json
{
  "result": 15.0
}
```

## Error Handling

The calculator throws specific exceptions for error conditions:
- **ArithmeticException**: Division by zero, square root of negative numbers
- **IllegalArgumentException**: Unknown operations, null operation strings

Frontend applications should catch these exceptions and display appropriate error messages to users.

## Running the Demo

To see the calculator in action, run the `CalculatorDemo` class:

```bash
javac src/main/java/com/calculator/*.java
java -cp src/main/java com.calculator.CalculatorDemo
```

## Thread Safety

The `Calculator` class is stateless and thread-safe, making it suitable for use in multi-threaded environments such as web servers.

## Future Enhancements

Potential features for future versions:
- Memory functions (store, recall)
- Scientific functions (sin, cos, tan, log)
- Expression parsing (e.g., "2 + 3 * 4")
- History tracking
- Configurable precision

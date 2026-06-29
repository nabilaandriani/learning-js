/** 
 * Bun menggunakan expect dan matcher. 
 * expect menerima satu parameter yang menjadi actual value dan kita membutuhkan .
 * toBe sebagai matcher untuk mengujinya dengan expected value. 
 */
import { it, describe, expect } from 'bun:test';

describe('arithmetic', () => {
    it('1 + 1', () => {
        expect(2 + 2).toBe(4);
    });

    it('3 * 2', () => {
        expect(3 * 2).toBe(6);
    });
});

//============ tantangan ============
import { describe, it, expect } from 'bun:test';
import { add } from './calculator.mjs';

describe('Calculator', () => {
    it('should add correctly', () => {
        // Arrange
        const operandA = 1;
        const operandB = 1;

        // Action
        const actualValueFirst = add(operandA, operandB);

        // Assert
        const expectedValueFirst = 2;
        expect(actualValueFirst).toBe(expectedValueFirst);
    });

    it('should throw an error if string passed on numA parameter', () => {
        const potentialErrorToBeThrew = () => {
            // Arrange
            const operandA = '5';
            const operandB = 4;

            // Action
            add(operandA, operandB);
        };

        // Assert
        expect(potentialErrorToBeThrew).toThrow(Error);
    });

    it('should throw an error if string passed on numB parameter', () => {
        const potentialErrorToBeThrew = () => {
            // Arrange
            const operandA = 10;
            const operandB = '8';

            // Action
            add(operandA, operandB);
        };

        // Assert
        expect(potentialErrorToBeThrew).toThrow(Error);
    });
});
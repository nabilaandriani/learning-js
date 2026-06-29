/** Pola AAA
 * A pertama - Arrange: persiapan kode untuk sebelum melakukan eksekusi pengujian fitur. Misalnya, menyiapkan angka yang akan digunakan untuk penjumlahan.
A kedua - Action: eksekusi fitur terjadi dalam bagian ini.
A ketiga - Assert: memastikan antara actual value dan expected value sudah sesuai.
 */
import { describe, it, expect } from 'bun:test';

function add(numA, numB) {
    return numA + numB;
}

describe('Calculator', () => {
    it('should add correctly', () => {
        // Arrange
        const operandA = 1;
        const operandB = 1;

        // Action
        const actualValue = add(operandA, operandB);

        // Assert
        const expectedValue = 2;``
        expect(actualValue).toBe(expectedValue);
    });
});
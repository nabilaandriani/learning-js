// node:test berperan sebagai test runner yang menawarkan API untuk menuliskan skenario pengujian. 
// node:assert berperan sebagai test assertion yang menyediakan objek untuk memvalidasi nilai antara actual (nilai sesungguhnya) dan expected (nilai yang diharapkan).

// contoh node:test
export function add(numA, numB) {
    return numA + numB;
}

import { test } from 'node:test';
import assert from 'node:assert';
import { add } from './calculator.mjs';

test('should add correctly', () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;

    // Action
    const actualValue = add(operandA, operandB);

    // Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
});
/** output
 * TAP version 13
# Subtest: should add correctly
ok 1 - should add correctly
  ---
  duration_ms: 1.045882
  ...
1..1
# tests 1
# suites 0
# pass 1
# fail 0
# cancelled 0
# skipped 0
# todo 0
# duration_ms 8.36261
 */

// uji dengan nilai string sebagai parameter
// Jika salah satunya string, operasi yang terjadi malah penggabungan (concatenation).
export function add(numA, numB) {
    return numA + numB;
}

import { test } from 'node:test';
import assert from 'node:assert';
import { add } from './calculator.mjs';

test('should add correctly', () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;

    // Action
    const actualValue = add(operandA, operandB);

    // Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
});

test('should throw an error if string passed on numA parameter', () => {
    const potentialErrorToBeThrew = () => {
        // Arrange
        const operandA = '5';
        const operandB = 4;

        // Action
        add(operandA, operandB);
    };

    // Assert
    assert.throws(potentialErrorToBeThrew, Error);
});
// panggil function test untuk kedua kalinya. Karena ini akan menguji kemunculan error saat string digunakan, kita gunakan assertion bernama throws untuk melakukannya.
export function add(numA, numB) {
    if (typeof numA !== 'number') {
        throw new Error('Expected a number');
    }

    return numA + numB;
}

import { test } from 'node:test';
import assert from 'node:assert';
import { add } from './calculator.mjs';

test('should add correctly', () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;

    // Action
    const actualValue = add(operandA, operandB);

    // Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
});

test('should throw an error if string passed on numA parameter', () => {
    const potentialErrorToBeThrew = () => {
        // Arrange
        const operandA = '5';
        const operandB = 4;

        // Action
        add(operandA, operandB);
    };

    // Assert
    assert.throws(potentialErrorToBeThrew, Error);
});

//================= describe =================

// function describe = untuk membungkus seluruh test case (kasus pengujian). Ini berguna untuk mengategorikan banyak kasus pengujian sehingga kode makin rapi
import { describe, test } from 'node:test';
import assert from 'node:assert';
import { add } from './calculator.mjs';

describe('Calculator', () => {
    test('should add correctly', () => {
        /* ...kode disembunyikan… */
    });

    test('should throw an error if string passed on numA parameter', () => {
        /* ...kode disembunyikan… */
    });

    test('should throw an error if string passed on numB parameter', () => {
        /* ...kode disembunyikan… */
    });
});

//================= it =================

// function it agar pembacaan kasus pengujian lebih gampang
import { describe, it } from 'node:test';
import assert from 'node:assert';
import { add } from './calculator.mjs';

describe('Calculator', () => {
  it('should add correctly', () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;

    // Action
    const actualValue = add(operandA, operandB);

    // Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
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
    assert.throws(potentialErrorToBeThrew, Error);
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
    assert.throws(potentialErrorToBeThrew, Error);
  });
});
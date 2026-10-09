/**
 * ==============================================================================
 * Calculator Application Logic (Vanilla JavaScript)
 * Oasis Infobyte Web Development Internship - Level 2 Task 1
 *
 * Requirements & Architecture:
 * 1. Dual-line display showing current input & previous operation.
 * 2. Digits (0-9), decimal (.), operators (+, -, ×, ÷), equals (=), Clear (C), Backspace (⌫).
 * 3. Division by zero error handling (shows "Cannot divide by zero" gracefully).
 * 4. Full-precision internal calculation (intermediate results stored unrounded).
 * 5. Display-only rounding: rounds to at most 8 decimal places and strips trailing zeros.
 * 6. Operator chaining & operator replacement when pressed consecutively.
 * 7. Pure addEventListener used on all buttons (no inline onclick).
 * 8. NO eval() used (pure arithmetic operators and state variables).
 * 9. Desktop keyboard navigation support.
 * ==============================================================================
 */

// ==========================================
// 1. DOM Elements Selection
// ==========================================
const previousOperandElement = document.getElementById('previousOperand');
const currentOperandElement = document.getElementById('currentOperand');
const keypad = document.getElementById('keypad');

// ==========================================
// 2. Calculator State Variables
// ==========================================
let displayValue = '0';                 // String representation of currently entered number or result
let firstOperand = null;                // Full-precision internal intermediate value
let operator = null;                    // Active arithmetic operator (+, -, ×, ÷)
let waitingForSecondOperand = false;    // Flag: true when expecting second number input
let isError = false;                    // Flag: true on error (e.g. division by zero)

// ==========================================
// 3. Display Formatting Helper
// ==========================================

/**
 * Formats values strictly for display presentation:
 * - Rounds floating point results to at most 8 decimal places.
 * - Removes unnecessary trailing zeros (e.g. 0.3 instead of 0.30000000).
 * - Preserves in-progress user typing (e.g. "5." or "5.0").
 * - Adds standard thousands separators for clean readability.
 * @param {string|number} value
 * @returns {string} Formatted display string
 */
function formatDisplayNumber(value) {
  if (isError) return value;
  if (value === '' || value === null || value === undefined) return '0';

  const str = String(value);

  // If user is currently typing a trailing decimal point (e.g. "5.")
  if (str.endsWith('.')) {
    const intPart = parseFloat(str.slice(0, -1));
    const formattedInt = isNaN(intPart) ? '0' : intPart.toLocaleString('en');
    return `${formattedInt}.`;
  }

  // If user is typing trailing decimal zeroes (e.g. "5.0" or "5.00") while entering number
  if (str.includes('.') && str.endsWith('0') && !waitingForSecondOperand) {
    const [intPart, decPart] = str.split('.');
    const parsedInt = parseFloat(intPart);
    const formattedInt = isNaN(parsedInt) ? '0' : parsedInt.toLocaleString('en');
    return `${formattedInt}.${decPart}`;
  }

  const num = parseFloat(str);
  if (!isNaN(num)) {
    // Round to at most 8 decimal places for display presentation only
    const rounded = parseFloat(num.toFixed(8));
    const parts = String(rounded).split('.');
    const integerPart = parseFloat(parts[0]);
    const decimalPart = parts[1];

    let formattedInteger = '';
    if (!isNaN(integerPart)) {
      formattedInteger = integerPart.toLocaleString('en', { maximumFractionDigits: 0 });
    }

    // Preserve negative sign on zero (e.g. "-0")
    if (str.startsWith('-') && integerPart === 0) {
      formattedInteger = '-' + formattedInteger;
    }

    if (decimalPart !== undefined) {
      return `${formattedInteger}.${decimalPart}`;
    }
    return formattedInteger;
  }

  return str;
}

/**
 * Updates the dual-line screen.
 */
function updateDisplay() {
  if (isError) {
    currentOperandElement.textContent = displayValue;
    currentOperandElement.classList.add('error-message');
    previousOperandElement.textContent = '';
    return;
  }

  currentOperandElement.classList.remove('error-message');
  currentOperandElement.textContent = formatDisplayNumber(displayValue) || '0';

  if (operator !== null && firstOperand !== null) {
    previousOperandElement.textContent = `${formatDisplayNumber(firstOperand)} ${operator}`;
  } else {
    previousOperandElement.textContent = '';
  }
}

// ==========================================
// 4. Core Calculator Actions
// ==========================================

/**
 * Appends a digit (0-9) to the display.
 * @param {string} digit
 */
function inputDigit(digit) {
  if (isError) {
    clearAll();
  }

  // If waiting for second operand, start fresh number
  if (waitingForSecondOperand) {
    displayValue = digit;
    waitingForSecondOperand = false;
  } else {
    displayValue = displayValue === '0' ? digit : displayValue + digit;
  }

  updateDisplay();
}

/**
 * Appends a decimal point to the display.
 */
function inputDecimal() {
  if (isError) {
    clearAll();
  }

  if (waitingForSecondOperand) {
    displayValue = '0.';
    waitingForSecondOperand = false;
    updateDisplay();
    return;
  }

  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

/**
 * Handles arithmetic operators (+, -, ×, ÷).
 * Chains operations with full internal precision.
 * @param {string} nextOperator
 */
function handleOperator(nextOperator) {
  if (isError) return;

  const inputValue = parseFloat(displayValue);

  // If operator pressed consecutively, replace current operator
  if (operator && waitingForSecondOperand) {
    operator = nextOperator;
    updateDisplay();
    return;
  }

  if (firstOperand === null && !isNaN(inputValue)) {
    firstOperand = inputValue;
  } else if (operator) {
    // Compute intermediate result with full internal precision
    const result = calculate(firstOperand, inputValue, operator);
    if (result === 'ERROR') return; // Stop if division by zero

    displayValue = String(result);
    firstOperand = result; // Keep full precision internally!
  }

  waitingForSecondOperand = true;
  operator = nextOperator;
  updateDisplay();
}

/**
 * Pure arithmetic calculation without eval().
 * Returns raw unrounded full-precision number, or 'ERROR'.
 * @param {number} first
 * @param {number} second
 * @param {string} op
 * @returns {number|string}
 */
function calculate(first, second, op) {
  let result;

  switch (op) {
    case '+':
      result = first + second;
      break;
    case '-':
    case '−':
      result = first - second;
      break;
    case '×':
    case '*':
    case 'x':
    case 'X':
      result = first * second;
      break;
    case '÷':
    case '/':
      if (second === 0) {
        displayValue = 'Cannot divide by zero';
        isError = true;
        firstOperand = null;
        operator = null;
        waitingForSecondOperand = false;
        updateDisplay();
        return 'ERROR';
      }
      result = first / second;
      break;
    default:
      return second;
  }

  return result; // Full internal precision
}

/**
 * Computes calculation when equals (=) is pressed.
 */
function handleEquals() {
  if (isError || operator === null || waitingForSecondOperand) return;

  const inputValue = parseFloat(displayValue);
  const result = calculate(firstOperand, inputValue, operator);

  if (result !== 'ERROR') {
    displayValue = String(result);
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
  }
}

/**
 * Resets calculator completely.
 */
function clearAll() {
  displayValue = '0';
  firstOperand = null;
  operator = null;
  waitingForSecondOperand = false;
  isError = false;
  updateDisplay();
}

/**
 * Deletes the last character from current display input (Backspace).
 */
function deleteDigit() {
  if (isError) {
    clearAll();
    return;
  }

  if (waitingForSecondOperand) return;

  if (displayValue.length === 1 || (displayValue.length === 2 && displayValue.startsWith('-'))) {
    displayValue = '0';
  } else {
    displayValue = displayValue.slice(0, -1);
  }

  updateDisplay();
}

/**
 * Toggles positive/negative sign.
 */
function toggleSign() {
  if (isError || displayValue === '0') return;

  if (displayValue.startsWith('-')) {
    displayValue = displayValue.substring(1);
  } else {
    displayValue = '-' + displayValue;
  }
  updateDisplay();
}

/**
 * Computes percentage of current input (e.g. 50 -> 0.5).
 */
function computePercentage() {
  if (isError) return;

  const current = parseFloat(displayValue);
  if (isNaN(current)) return;

  displayValue = String(current / 100);
  updateDisplay();
}

// ==========================================
// 5. Button Event Listeners (No Inline onclick)
// ==========================================
keypad.addEventListener('click', (event) => {
  const target = event.target.closest('button');
  if (!target) return;

  const { action, number, operator: op } = target.dataset;

  // Number input (0-9)
  if (number !== undefined) {
    inputDigit(number);
    return;
  }

  // Operator input (+, -, ×, ÷)
  if (op !== undefined) {
    handleOperator(op);
    return;
  }

  // Action buttons
  switch (action) {
    case 'clear':
      clearAll();
      break;
    case 'backspace':
      deleteDigit();
      break;
    case 'decimal':
      inputDecimal();
      break;
    case 'equals':
      handleEquals();
      break;
    case 'toggle-sign':
      toggleSign();
      break;
    case 'percent':
      computePercentage();
      break;
  }
});

// ==========================================
// 6. Keyboard Support
// ==========================================
window.addEventListener('keydown', (event) => {
  const key = event.key;

  // Digits (0 - 9)
  if (/^[0-9]$/.test(key)) {
    event.preventDefault();
    inputDigit(key);
    triggerButtonAnimation(`[data-number="${key}"]`);
  }

  // Decimal Point (.)
  if (key === '.') {
    event.preventDefault();
    inputDecimal();
    triggerButtonAnimation('[data-action="decimal"]');
  }

  // Addition (+)
  if (key === '+') {
    event.preventDefault();
    handleOperator('+');
    triggerButtonAnimation('[data-operator="+"]');
  }

  // Subtraction (-)
  if (key === '-') {
    event.preventDefault();
    handleOperator('-');
    triggerButtonAnimation('[data-operator="-"]');
  }

  // Multiplication (* or x / X)
  if (key === '*' || key === 'x' || key === 'X') {
    event.preventDefault();
    handleOperator('×');
    triggerButtonAnimation('[data-operator="×"]');
  }

  // Division (/)
  if (key === '/') {
    event.preventDefault();
    handleOperator('÷');
    triggerButtonAnimation('[data-operator="÷"]');
  }

  // Equals (Enter or =)
  if (key === 'Enter' || key === '=') {
    event.preventDefault();
    handleEquals();
    triggerButtonAnimation('[data-action="equals"]');
  }

  // Backspace (⌫)
  if (key === 'Backspace') {
    event.preventDefault();
    deleteDigit();
    triggerButtonAnimation('[data-action="backspace"]');
  }

  // Clear / Escape (C or Esc)
  if (key === 'Escape' || key === 'c' || key === 'C') {
    event.preventDefault();
    clearAll();
    triggerButtonAnimation('[data-action="clear"]');
  }

  // Percentage (%)
  if (key === '%') {
    event.preventDefault();
    computePercentage();
    triggerButtonAnimation('[data-action="percent"]');
  }
});

/**
 * Interactive visual feedback for keyboard presses
 * @param {string} selector
 */
function triggerButtonAnimation(selector) {
  const btn = document.querySelector(selector);
  if (btn) {
    btn.classList.add('pressed');
    setTimeout(() => {
      btn.classList.remove('pressed');
    }, 150);
  }
}

// Initial display render
updateDisplay();

// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// testing isPhoneNumber()
test('123-4567 is a valid phone number', () => {
  expect(isPhoneNumber('123-4567')).toBe(true);
})

test('(111) 222-333 is a valid phone number', () => {
  expect(isPhoneNumber('(111) 222-3333')).toBe(true);
})

test('1112223333 is not a valid phone number', () => {
  expect(isPhoneNumber('1112223333')).toBe(false);
})

test('(111) 222 - 3333 is not a valid phone number', () => {
  expect(isPhoneNumber('(111) 222 - 3333')).toBe(false);
})

// testing isEmail()
test('user_123@gmail.com is a valid email', () => {
  expect(isEmail('user_123@gmail.com')).toBe(true);
})

test('123@ucsd.edu is a valid email', () => {
  expect(isEmail('123@ucsd.edu')).toBe(true);
})

test('user-1@yahoo.com is not a valid email', () => {
  expect(isEmail('user-1@yahoo.com')).toBe(false);
})

test('user@gmail is not a valid email', () => {
  expect(isEmail('user@gmail')).toBe(false);
})

// testing isStrongPassword()
test('abc123 is a strong password', () => {
  expect(isStrongPassword('abc123')).toBe(true);
})

test('ZekA3w94rk is a strong password', () => {
  expect(isStrongPassword('ZekA3w94rk')).toBe(true);
})

test('abc-1 is not a strong password', () => {
  expect(isStrongPassword('abc-1')).toBe(false);
})

test('thispasswordistoolong is not a strong password', () => {
  expect(isStrongPassword('thispasswordistoolong')).toBe(false);
})

// testing isDate()
test('5/5/2025 is a valid date', () => {
  expect(isDate('5/5/2025')).toBe(true);
})

test('08/15/2003 is a valid date', () => {
  expect(isDate('08/15/2003')).toBe(true);
})

test('08/15/03 is not a valid date', () => {
  expect(isDate('08/15/03')).toBe(false);
})

test('08-15-2003 is not a valid date', () => {
  expect(isDate('08-15-2003')).toBe(false);
})

// testing isHexColor()
test('Af3 is a valid hex color', () => {
  expect(isHexColor('Af3')).toBe(true);
})

test('#a903De is a valid hex color', () => {
  expect(isHexColor('#a903De')).toBe(true);
})

test('#a903D is not a valid hex color', () => {
  expect(isHexColor('#a903D')).toBe(false);
})

test('abg is not a valid hex color', () => {
  expect(isHexColor('abg')).toBe(false);
})

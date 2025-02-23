# Typescript


This project provides a TypeScript implementation for managing and filtering a list of persons, which can be either users or admins. The code includes interfaces for `User` and `Admin`, a union type `Person`, and functions to log and filter persons based on type.

## Interfaces

### User

Represents a user with the following properties:
- `type`: `"user"`
- `name`: `string`
- `age`: `number`
- `occupation`: `string`

### Admin

Represents an admin with the following properties:
- `type`: `"admin"`
- `name`: `string`
- `age`: `number`
- `role`: `string`

## Union Type

### Person

A union type that can be either a `User` or an `Admin`.

## Data

### persons

An array of `Person` objects representing a list of users and admins.

## Functions

### logPerson

Logs the details of a `Person` to the console.

### filterPersons

Filters the list of persons based on the specified type and criteria.

## Example Usage

The following example demonstrates how to filter and log persons based on specific criteria.

```typescript
const usersOfAge25 = filterPersons(persons, "user", { age: 25 });
const adminsWithMdRole = filterPersons(persons, "admin", { role: "MD" });

console.log("Users of age 25:");
usersOfAge25.forEach(logPerson);
console.log("Admins with MD role:");
adminsWithMdRole.forEach(logPerson);
```

## Running the Code

To run the code, ensure you have TypeScript installed and compile the TypeScript file to JavaScript. Then, execute the compiled JavaScript file using Node.js.

```bash
# Compile TypeScript to JavaScript
tsc index.ts

# Run the compiled JavaScript file
node index.js
```
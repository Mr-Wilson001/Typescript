// Define the User interface
interface User {
    type: "user";
    name: string;
    age: number;
    occupation: string;
}

// Define the Admin interface
interface Admin {
    type: "admin";
    name: string;
    age: number;
    role: string;
}

// Define a union type Person which can be either User or Admin
export type Person = User | Admin;

// An array of Person objects representing a list of users and admins
export const persons: Person[] = [
    { type: "user", name: "Maxwell Okoli", age: 25, occupation: "Doctor" },
    { type: "admin", name: "Amaka James", age: 32, role: "MD" },
    { type: "user", name: "Ikechukwu Williams", age: 23, occupation: "Lawyer" },
    { type: "admin", name: "Charles Mbah", age: 64, role: "CEO" },
    { type: "user", name: "Wilson Chigozie", age: 25, occupation: "Surveyor" },
    { type: "admin", name: "Agnes Tochukwu", age: 25, role: "MD" },
];

// Function to log the details of a Person to the console
export function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === "admin" ? person.role : person.occupation}`
    );
}

// Function to filter persons based on their type and criteria
export function filterPersons<TY extends "user" | "admin">(
    persons: Person[],
    personType: TY,
    criteria: Omit<TY extends "user" ? Partial<User> : Partial<Admin>, "type">
): (TY extends "user" ? User : Admin)[] {
    return persons.filter(person => {
        if (person.type !== personType) {
            return false;
        }
        return Object.keys(criteria).every(key => {
            return (person as any)[key] === (criteria as any)[key];
        });
    }) as (TY extends "user" ? User : Admin)[];
}

// Example usage:

// Filter users of age 25
const usersOfAge25 = filterPersons(persons, "user", { age: 25 });

// Filter admins with role "MD"
const adminsWithMdRole = filterPersons(persons, "admin", { role: "MD" });

// Log the filtered users
console.log("Users of age 25:");
usersOfAge25.forEach(logPerson);

// Log the filtered admins
console.log("Admins with MD role:");
adminsWithMdRole.forEach(logPerson);
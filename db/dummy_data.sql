-- Insert dummy tags
INSERT INTO tags (id, name, color) VALUES
(1, 'JavaScript', '#f7df1e'),
(2, 'React', '#61dafb'),
(3, 'Database', '#336791'),
(4, 'Tutorial', '#ff6b6b');

-- Insert dummy pages
INSERT INTO pages (id, title, slug, parent_id, content, description, edited_by) VALUES
(1, 'Home', 'home', NULL, '# Welcome to the Wiki

> **Welcome to our collaborative knowledge base!** This wiki serves as a central hub for documentation, tutorials, and shared knowledge.

## Quick Start

Here''s what you can do:

- [Browse existing pages](#pages)
- [Create new content](#create)
- [Search for information](#search)

## Recent Updates

| Page | Last Updated | Status |
|------|-------------|---------|
| JavaScript Basics | 2024-01-15 | ✅ Complete |
| React Guide | 2024-01-10 | 🚧 In Progress |
| Database Setup | 2024-01-08 | ✅ Complete |

## Getting Started

### For New Users
1. Create an account
2. Explore the sidebar navigation
3. Start contributing!

### For Contributors
- Follow our [style guide](style-guide)
- Use proper markdown formatting
- Tag your pages appropriately

```javascript
// Example code block
console.log("Welcome to the wiki!");
```

> **Tip:** Use the search bar to quickly find what you''re looking for.

---

*Last updated: January 2024*', 'Main page of the wiki', 'admin'),
(2, 'About', 'about', NULL, '# About This Wiki

## Our Mission

This wiki was created to ~~centralize~~ **democratize** knowledge sharing within our organization. We believe that collaborative documentation leads to better understanding and innovation.

## Features

### ✅ What We Offer
- [x] Collaborative editing
- [x] Version control for all changes
- [x] Tag-based organization
- [x] Full-text search
- [x] Comment system
- [x] Mobile-responsive design

### 🚧 Planned Features
- [ ] Advanced permissions
- [ ] Export functionality
- [ ] API access
- [ ] Integration with external tools

## Technology Stack

We use modern web technologies:

| Component | Technology | Purpose |
|-----------|------------|---------|
| Frontend | Next.js + React | User interface |
| Backend | Node.js + Express | API server |
| Database | PostgreSQL | Data storage |
| Authentication | OAuth 2.0 | User management |
| Deployment | Docker | Containerization |

## Code Example

Here''s a simple API call example:

```typescript
// Fetch page content
const response = await fetch(''/api/pages/home'');
const page = await response.json();

console.log(page.title); // "Home"
```

## Contributing

We welcome contributions! Here''s how:

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### Guidelines
- Use clear, descriptive commit messages
- Follow existing code style
- Add tests for new features
- Update documentation

> **Important:** All contributions are licensed under MIT unless otherwise specified.

---

*Built with ❤️ using open source technologies*', 'About the wiki', 'admin'),
(3, 'Tutorials', 'tutorials', NULL, '# Tutorials Section

## Overview

Welcome to our comprehensive tutorial collection! Here you''ll find step-by-step guides for various technologies and concepts.

## Available Tutorials

### Programming Languages
- [JavaScript Basics](js-basics) - Learn fundamental concepts
- [Python for Beginners](python-basics) - Coming soon
- [TypeScript Essentials](typescript-guide) - Advanced typing

### Frameworks & Libraries
- [React Guide](react-guide) - Component-based UI development
- [Next.js Fundamentals](nextjs-intro) - Full-stack React framework
- [Express.js API](express-api) - Backend development

### Tools & DevOps
- [Git Workflow](git-workflow) - Version control best practices
- [Docker Basics](docker-basics) - Containerization
- [CI/CD Pipeline](ci-cd) - Automated deployment

## Tutorial Structure

Each tutorial follows this format:

1. **Introduction** - What you''ll learn
2. **Prerequisites** - What you need to know
3. **Step-by-step instructions** - Detailed walkthrough
4. **Examples** - Code samples and demos
5. **Exercises** - Practice problems
6. **Further reading** - Additional resources

## Code Snippet Example

```javascript
// Function to calculate factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Usage
console.log(factorial(5)); // 120
```

## Progress Tracking

Track your learning journey:

- [x] Complete JavaScript Basics
- [x] Finish React Guide
- [ ] Start Advanced Topics
- [ ] Build a Project
- [ ] Contribute to Open Source

## Getting Help

Need assistance?

- 📧 **Email:** tutorials@company.com
- 💬 **Slack:** #tutorials-channel
- 📖 **Forum:** [Community Discussions](forum)

> **Pro tip:** Don''t rush through tutorials. Take time to understand each concept before moving to the next.

---

*Happy learning! 🚀*', 'Tutorial section', 'admin'),
(4, 'JS Basics', 'js-basics', 3, '# JavaScript Basics Tutorial

## Introduction

Welcome to JavaScript Basics! This tutorial covers fundamental concepts that every JavaScript developer should know.

## Table of Contents

- [Variables and Data Types](#variables)
- [Functions](#functions)
- [Objects and Arrays](#objects)
- [Control Flow](#control-flow)
- [Error Handling](#errors)

## Variables and Data Types

JavaScript has several primitive data types:

| Type | Example | Description |
|------|---------|-------------|
| `string` | `"Hello"` | Text data |
| `number` | `42` | Numeric values |
| `boolean` | `true` | True/false values |
| `undefined` | `undefined` | Unassigned values |
| `null` | `null` | Intentional absence |

```javascript
// Variable declarations
let name = "Alice";        // String
const age = 25;           // Number
var isStudent = true;     // Boolean
let score;                // undefined
const data = null;        // null
```

## Functions

Functions are reusable blocks of code:

```javascript
// Function declaration
function greetUser(username) {
    return `Hello, ${username}!`;
}

// Arrow function
const calculateArea = (width, height) => {
    return width * height;
};

// Function call
console.log(greetUser("Bob"));     // "Hello, Bob!"
console.log(calculateArea(5, 10)); // 50
```

## Objects and Arrays

### Objects
Store key-value pairs:

```javascript
const user = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "coding"],
    address: {
        street: "123 Main St",
        city: "Anytown"
    }
};

// Accessing properties
console.log(user.name);        // "Alice"
console.log(user["age"]);      // 25
console.log(user.hobbies[0]);  // "reading"
```

### Arrays
Ordered collections:

```javascript
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "orange"];

// Array methods
numbers.push(6);              // Add to end
fruits.pop();                 // Remove from end
numbers.splice(2, 1);         // Remove at index 2
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]
```

## Control Flow

### Conditional Statements

```javascript
const temperature = 75;

if (temperature > 80) {
    console.log("It''s hot!");
} else if (temperature > 60) {
    console.log("It''s warm.");
} else {
    console.log("It''s cold.");
}

// Ternary operator
const status = temperature > 70 ? "warm" : "cool";
```

### Loops

```javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(`Count: ${i}`);
}

// For...of loop (arrays)
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

// For...in loop (objects)
const person = {name: "Alice", age: 25};
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
```

## Error Handling

Use try-catch blocks for error handling:

```javascript
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero!");
        }
        return a / b;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    } finally {
        console.log("Division operation completed.");
    }
}

console.log(divide(10, 2));  // 5
console.log(divide(10, 0));  // Error: Division by zero!
```

## Practice Exercises

1. **Variable Exercise**: Create variables for your name, age, and favorite color
2. **Function Exercise**: Write a function that converts Celsius to Fahrenheit
3. **Array Exercise**: Create an array of your favorite foods and loop through them
4. **Object Exercise**: Create an object representing a book with title, author, and year

## Next Steps

- [Object-Oriented JavaScript](oop-js)
- [DOM Manipulation](dom-basics)
- [Asynchronous JavaScript](async-js)

> **Remember:** Practice is key to mastering JavaScript. Don''t be afraid to experiment and make mistakes!

---

*Tutorial last updated: January 2024*', 'Basic JS tutorial', 'admin'),
(5, 'React Guide', 'react-guide', 3, '# React Guide: Building Modern UIs

## What is React?

React is a **declarative, component-based** JavaScript library for building user interfaces. It was created by Facebook and is now maintained by Meta.

> **Key Benefits:**
> - Component reusability
> - Virtual DOM for performance
> - Unidirectional data flow
> - Rich ecosystem

## Core Concepts

### Components

Components are the building blocks of React applications:

```jsx
// Functional Component
function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// Class Component (legacy)
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}

// Usage
<Welcome name="Alice" />
```

### JSX Syntax

JSX is a syntax extension for JavaScript:

```jsx
const element = (
    <div>
        <h1 className="title">Hello World</h1>
        <p>This is JSX!</p>
    </div>
);

// JSX with expressions
const name = "Alice";
const greeting = <p>Hello, {name}!</p>;

// JSX with conditional rendering
const isLoggedIn = true;
const statusMessage = (
    <div>
        {isLoggedIn ? (
            <p>Welcome back!</p>
        ) : (
            <p>Please log in.</p>
        )}
    </div>
);
```

### State and Props

#### Props (Properties)
Props are read-only data passed from parent to child:

```jsx
function UserCard({ name, age, avatar }) {
    return (
        <div className="user-card">
            <img src={avatar} alt={name} />
            <h2>{name}</h2>
            <p>Age: {age}</p>
        </div>
    );
}

// Usage
<UserCard
    name="Alice"
    age={25}
    avatar="https://example.com/avatar.jpg"
/>
```

#### State
State is mutable data managed within a component:

```jsx
import { useState } from ''react'';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
        </div>
    );
}
```

### Hooks

Hooks are functions that let you use state and lifecycle features:

```jsx
import { useState, useEffect } from ''react'';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch user data
        fetch(''/api/users/${userId}'')
            .then(response => response.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            });
    }, [userId]); // Dependency array

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    );
}
```

## Component Lifecycle

| Hook | Purpose | When it runs |
|------|---------|--------------|
| `useEffect` | Side effects | After render |
| `useLayoutEffect` | DOM mutations | After render, before paint |
| `useCallback` | Memoized functions | When dependencies change |
| `useMemo` | Memoized values | When dependencies change |

## Advanced Patterns

### Custom Hooks

Create reusable logic:

```jsx
// Custom hook for local storage
function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
}

// Usage
function App() {
    const [name, setName] = useLocalStorage(''name'', ''Anonymous'');

    return (
        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    );
}
```

### Context API

Share state across component tree:

```jsx
import { createContext, useContext, useState } from ''react'';

// Create context
const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(''light'');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Consumer hook
function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error(''useTheme must be used within ThemeProvider'');
    }
    return context;
}

// Usage
function ThemedButton() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            className={theme}
            onClick={() => setTheme(theme === ''light'' ? ''dark'' : ''light'')}
        >
            Toggle Theme
        </button>
    );
}
```

## Best Practices

### ✅ Do
- [x] Use functional components with hooks
- [x] Keep components small and focused
- [x] Use meaningful names
- [x] Handle errors gracefully
- [x] Write tests for components

### ❌ Don''t
- [x] Mutate props directly
- [x] Use class components for new code
- [x] Ignore accessibility
- [x] Over-optimize prematurely
- [x] Mix concerns in one component

## Common Patterns

| Pattern | Use Case | Example |
|---------|----------|---------|
| Container/Presentational | Separate logic from UI | `UserList` / `UserItem` |
| Higher-Order Components | Code reuse | `withAuth(Component)` |
| Render Props | Share logic | `<DataProvider render={data => ...} />` |
| Compound Components | Related components | `<Select><Option>...</Option></Select>` |

## Performance Optimization

### Memoization

```jsx
import { memo, useMemo, useCallback } from ''react'';

// Memoize component
const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
    return <div>{/* expensive rendering */}</div>;
});

// Memoize values
function TodoList({ todos, filter }) {
    const filteredTodos = useMemo(() => {
        return todos.filter(todo => todo.status === filter);
    }, [todos, filter]);

    const handleToggle = useCallback((id) => {
        // toggle logic
    }, []);

    return (
        <ul>
            {filteredTodos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={handleToggle}
                />
            ))}
        </ul>
    );
}
```

## Next Steps

Ready to dive deeper?

1. [React Router](react-router) - Client-side routing
2. [State Management](state-management) - Redux, Zustand
3. [Testing](testing-react) - Jest, React Testing Library
4. [Performance](react-performance) - Optimization techniques

---

*Guide last updated: January 2024*

> **Happy coding!** Remember: React is just JavaScript with a better way to build UIs. 🎉', 'React tutorial', 'admin');

-- Associate tags with pages
INSERT INTO page_tags (page_id, tag_id) VALUES
(3, 4), -- Tutorials -> Tutorial
(4, 1), -- JS Basics -> JavaScript
(4, 4), -- JS Basics -> Tutorial
(5, 2), -- React Guide -> React
(5, 4); -- React Guide -> Tutorial

-- Insert dummy comments
INSERT INTO comments (page_id, created_by, content) VALUES
(1, 'user1', 'Great home page!'),
(3, 'user2', 'Looking forward to more tutorials.'),
(4, 'user3', 'This JS tutorial is helpful.');

-- Insert dummy page versions
INSERT INTO page_versions (page_id, version_number, content_diff, edited_by) VALUES
(1, 1, 'Initial version', 'admin'),
(2, 1, 'Initial version', 'admin'),
(3, 1, 'Initial version', 'admin'),
(4, 1, 'Initial version', 'admin'),
(5, 1, 'Initial version', 'admin');
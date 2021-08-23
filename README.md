Project created to learn React Hooks.

## Hooks

```bash
# [Basic Hooks]
- useState
- useEffect
- useContext
# [Additional Hooks]
- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
```

## Rules of Hooks

### [Only Call Hooks at the Top Level]
Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function,
before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders.
That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls.

If you want to run an effect conditionally, you can put that condition inside your Hook.

### [Only Call Hooks from React Functions]
Don’t call Hooks from regular JavaScript functions. Instead, you can:

- Call Hooks from React function components.
- Call Hooks from custom Hooks.

By following this rule, you ensure that all stateful logic in a component is clearly visible from its source code.

## Learn More

[HOOKS TESTS ACTING UP by Erin Zimmer](https://cogent.co/blog/hooks-tests-acting-up) [April 14, 2021]


## TODO
- Create fake ChatAPI with methods: subscribeToFriendStatus and unsubscribeFromFriendStatus
- Add types to the project and implement Friend object with: id, name
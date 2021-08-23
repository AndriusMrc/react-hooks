/**
 * A DOM mutation that is visible to the user must fire synchronously before the next paint so that the user does not perceive a visual inconsistency.
 * For these types of effects, React provides one additional Hook called useLayoutEffect.
 * useLayoutEffect has the same signature as useEffect, and only differs in when it is fired.
 *
 * Prefer the standard useEffect when possible to avoid blocking visual updates.
 *
 * If you use server rendering, keep in mind that neither useLayoutEffect nor useEffect can run until the JavaScript is downloaded.
 * This is why React warns when a server-rendered component contains useLayoutEffect.
 * To fix this, either move that logic to useEffect (if it isn’t necessary for the first render),
 * or delay showing that component until after the client renders (if the HTML looks broken until useLayoutEffect runs).
 */

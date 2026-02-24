1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: getElementById gets a single element by it's id, it is the fastest.
getElementsByClassName() gets HTML collection using class name.
querySelector() gets the single first matching CSS selector.
querySelectorAll() returns NodeList of all matching css selector.

2. How to create and insert a new element into the DOM?
ans:
step1-> create an element by using createElement()
step-2 -> add content to new element by using innerHTML or innerText
step-3 -> insert into DOM by using appendChild()

3. What is Event Bubbling?
ans: Event starts from target element. Then moves up to parent. Then it's grandparent all the way to document. This is event bubbling.

4. What is Event Delegation? Why useful?
ans: event delegation is adding event listener to parent and to handle child events using bubbling.
It is useful because: Has better performance,
 works for dynamically added elements & less memory usage.

5. Difference between preventDefault() and stopPropagation() ?
ans: preventDefault() stops default browser behavior.
stopPropagating() stops event bubbling.
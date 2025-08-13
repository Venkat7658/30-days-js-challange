**Activity-1**. Continuing from 12e, if we click the button, wait 1 to 1.5 seconds, and then click the button again, notice that the second time, the message disappears very quickly (because the first setTimeout is still running and will make the message disappear very soon).
Modify the code so when we click the button, it “refreshes” the 2-second wait time (waits for 2 seconds again and removes the message).
Hint: You can cancel the previous setTimeout using clearTimeout().

**Activity-2**. Imagine we’re creating a messaging app. Use setInterval() and document.title to create the feature on the right (the title changes every 1 second).

**Activity-3**. Continuing from 12g, instead of displaying “(2) New messages” every time, save the number of messages in a variable:
javascript
Copy code
let messages = 2;
Use the number in the variable to determine what title to display.
Create 2 buttons Add / Remove that increase / decrease the messages variable by 1.

**Activity-4**. Continuing from 12h:
Don’t let messages go below 0.
If messages === 0, stop changing the title and display "App" as the title.
When messages > 0, start changing the title again.

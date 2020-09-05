# hookVisitor.js

Small js script to prompt user for feedback when s/he moves mouse cursor to close the page.

Improvements on basic jquery:
  1. made the x and y coordinates of cursor relative to width and height of page respectively. This allows it to work across screen sizes. Try resizing the window
  2. currently, hardcoded the number of times the prompt appears to 2 times, have to let the user set it. (max 5)
  3. feedback is stored in an array. 
  
  
Stuff still to do:
  1. push feedback into db or just email
  2. replace prompt with a custom widget which can show whatever you want.
  3. coordinate asking for feedback by user session (w/ JWT token), so same user doesn't get asked twice s/he visits page again, in same session.
  
  Issues
  1. if user is using keyboard and not mouse (say scrolling the page), this will fail
  2. don't be spammy or get in the way. I would not recommend putting marketing/promo messages while users are trying to leave. Asking for feedback could still be considered reasonable.
  3. Sometimes, cursor x,y coordinates get missed, I have to get it to be more accurate, haven't figured out how.
  
  If you want to make any of the above or other contributions, or offer advice on how this can be used or built further, email at help -@- nearlaw dot com
  

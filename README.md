
# Acme Notes

The next generation of note taking. The Acme Note
App is a web-based application designed to revolutionize the way you take notes. It offers a seamless and intuitive note-taking experience, allowing users to organize their thoughts, ideas, and tasks effortlessly.




## Thought process

- Assumptions:
  - Assume that the audience is digitally sound and aware about the major tech companies and products being used in the market. 
  - Why? This will help us to put elements which can convey how our product differs from other products and what features we offer.
- Attributes of our notes app
    - Helps to take notes
    - Web based (Easy to access from anywhere)
    - SAAS product (To take inspiration from other SAAS landing pages)
- Goals
    - The visitor should sign up/try the app without any friction.
    - The visitor should be able to start using the app from any point on the landing page in not more that 3 clicks. (Show CTA in footer, Header, other relevant sections)
- Features of our SAAS app Acme notes
    - Quick Find: Easily locate your notes with powerful search capabilities.
    - User Friendly Shortcuts: Type less and do more with customizable shortcuts.
    - Reminders: Stay on track with timely reminders for important dates and tasks.
    - Quick Sync: Synchronize your notes with the cloud and access them from any device.
    - Fast: Boost your productivity with lightning-fast performance.
    - Widgets: To easily access notes from homescreen

---
I've also anticipated the actions a visitor will take and what meaning he/she will draw from the elements but it will be beyond the scope of this readme file. Looking forward to discuss those interesting cases.
---
##### I've used excalidraw for brainstorming the elements required in the page and scribbling a rough layout of the page. It documents the thought process behind choosing the elements for the page.

- Excalidraw link: https://excalidraw.com/#json=WuoCtb5EyB3hlne8hT8s-,988C1jW8gQrq6l2T4_j1EA


## Demo

Visit the landing page using the below link. [Best viewed in Chrome Desktop]
Link: https://acme-notes-iota.vercel.app/



## Tech Stack

**Framework:** Astro ⚡️

**Tools and libraries:** Tailwind CSS, Typescript

**Hosted on Vercel**
## Page load time

- **Network:** [ChromeDevTools.png](https://postimg.cc/47RJNvpN)
  - DomContentLoaded: ~ 85ms (Time taken to fully parse and load the DOM)
  - Load: ~ 196 ms (Time taken to load all the external resources: images, styles etc.
- **Lighthouse: Mobile** Score: ~ 97/100 [Mobile.png](https://postimg.cc/WqzV35Yr)
- **Lighthouse: Desktop** Score: ~ 100/100 [Desktop.png](https://postimg.cc/Vd7xv9XB)

**Optimizations:** 
- Page load: Didn't make any manual optimizations for page load time as most of the things are already handled by Astro. Since it is a static site, thus there is no JS being sent to the browser. One scope of optimization is to compress the images being used on the page to improve LCP. 
- Performance: Used CSS based animations and avoided JS based animations to eliminate any js chunk being sent to the client. Used animation timeline apis (View and Scroll) to render complex scroll based animations using CSS only. Also, the animations are rendered only when the client supports the Animation timeline APIs. (**Currently Safari doesn't supports it, hence the animation are best viewed in Chrome Desktop/Android**).
- Used subtle animations and transitions to add delight to the page. (and to get those brownie points as well :D). All the animations and components are created from scratch.


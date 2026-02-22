Email frontend development is **not** the same as regular web development.
You don’t just need “frontend skills” — you need **email-client experience**.

## Why it’s different

### 1) You’re targeting more “platforms” than the web

In the browser, you typically care about a few engines (Chromium, WebKit, Gecko).
In email, you’re dealing with:

- Desktop clients (Outlook for Windows, Outlook for Mac)
- Webmail (Gmail, Outlook.com, Yahoo, etc.)
- Mobile apps (Gmail iOS/Android, Outlook iOS/Android, Apple Mail iOS)

Each one renders HTML/CSS differently.

### 2) Dark mode vs light mode changes the design a lot

Dark mode in email isn’t standardized:

- Some clients **invert colors**
- Some clients apply **their own background**
- Some keep your colors but change text, borders, or images

This can turn a clean design into something unreadable if you don’t test dark mode properly.

### 3) “Responsiveness” doesn’t behave like the web

On the web you can rely on modern layout systems and media queries.
In email:

- Many clients have **limited CSS support**
- Some ignore parts of your CSS
- Layout techniques that work on mobile web can break in mobile email apps

So responsiveness becomes a mix of “what works” + “what degrades safely”.

### 4) Outlook and Gmail treat your code differently

Two of the biggest realities:

- **Outlook (Windows)** can behave like a “special” renderer with many CSS limitations
- **Gmail** can rewrite or strip parts of your HTML/CSS depending on the context

Something that looks perfect in one client can be broken in another, even with the same exact markup.

## The practical takeaway

Email UI work is its own discipline:

- You need a **tested set of patterns**
- You need **client-by-client QA**
- You need to design for **fallbacks** and not just “pixel-perfect” layouts

If you treat email like a normal web page, you’ll ship bugs that only show up for real users.


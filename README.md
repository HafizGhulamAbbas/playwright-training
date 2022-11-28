# playwright-training

# pre-requisites
- Introduction to JS
- IDE (VSCode)
- NodeJS

# What is Playwright?
Playwright is a Node.js library created by Microsoft to automate Chromium, Firefox, and WebKit with a single API. Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable, and fast across all modern browsers.
It is open source and free.
Some of the team members of Playwright were previously working at Google on another tool you might have heard of called Puppeteer.

# Advantages of Playwright - Playwright has powerful automation capabilities
- Full API coverage for all modern browsers
- Test in Apple Safari with WebKit builds for Windows, Linux and macOS (can use device emulation to test your responsive web apps in mobile web browsers)
- It supports headless and headed modes for all browsers and all platforms

# Fast and reliable execution
- Auto-wait APIs (Playwright interactions auto-wait for elements to be ready. This improves reliability and simplifies test authoring)
- Timeout-free automation (Playwright receives browser signals, like network requests, page navigation and page load events, to eliminate the need for sleep timeouts that usually cause flakiness)
- Resilient element selectors (Playwright can rely on user-facing strings, like text content and accessibility labels to select elements which makes these selectors more resilient)

# Limitations of Playwright
- No legacy Microsoft Edge or IE11 support
- Desktop browsers are used to emulate mobile devices (you are not really using real mobile devices)

# Install Playwright
- Install NodeJS: https://nodejs.org/en/
- VSCode: https://code.visualstudio.com/
- Install Playwright --> npm init playwright@latest

# Relevant Checks: IsElement
- Attached?
- Visible?
- Stable?
- Not being obscured by other elements?
- Enabled?
- Editable? (Text controls)

# Three main core concepts: browser, page, and context
- *BROWSER* is the first thing we need to run tests. After all, we have to launch a browser. Playwright does this using the object of the browser class, which is nothing but an instance of either Chromium, Firefox, or Webkit.
- *PAGE* is a new tab or pop-up window within a context. Every action on the test (for example, page.click, page.type, …) is performed on this object.
- *CONTEXT* is an isolated “incognito-alike” session within a browser instance.

For recording videos, the main difference between the process of taking a screenshot is that we have to use a browser context.
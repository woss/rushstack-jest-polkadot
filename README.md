# rushstack-jest-polkadot

A repo where you can see how to include the polkadot utils and api into the rush project.

Current status is:

> you cannot!

Instal deps:
``sh
npm install --global pnpm
pnpm add -g @microsoft/rush

rush update

````

Get ready to be amazed how polkadot fails!

```sh
cd libraries/b

# with nice and colorful output
pnpm start

# without nice and colorful output
pnpm test
````

Now it's failing with the message that has been failing so many times on polkadot/api only, if you don't believe me, check [this](https://github.com/polkadot-js/api/issues?q=SyntaxError%3A+Cannot+use+import+statement+outside+a+module):

```
SyntaxError: Cannot use import statement outside a module
```

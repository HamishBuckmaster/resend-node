# Klotty Node.js SDK

Node.js library for the Klotty API.

## Install

```bash
npm install klotty
# or
yarn add klotty
```

## Setup

First, you need to get an API key, which is available in the [Klotty Dashboard](https://klotty.com).

```js
import Klotty from 'klotty';
const klotty = new Klotty('kl_123');
```

## Usage

Send your first email:

```js
await klotty.sendEmail({
  from: "you@example.com",
  to: "user@gmail.com",
  subject: "hello world",
  text: "it works!",
});
```

## Send email using HTML

Send an email custom HTML content:

```js
await klotty.sendEmail({
  from: "you@example.com",
  to: "user@gmail.com",
  subject: "hello world",
  html: "<strong>it works!</strong>",
});
```

## Send email using React

Start by creating your email template as a React component.

```jsx
import React from 'react'

export default function EmailTemplate(props) {
  const { name, product, support } = props

  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>Thanks for trying {product}. We’re thrilled to have you on board.</p>
      <p>If you have any questions, feel free to <a href={`mailto:${support}`}>email our support team</a>.</p>
    </div>
  )
}
```

Then import the template component and pass it to the `react` property.

```jsx
import EmailTemplate from '../components/EmailTemplate'

await klotty.sendEmail({
  from: "you@example.com",
  to: "user@gmail.com",
  subject: "hello world",
  react: <EmailTemplate {...props}>,
});
```

## License

MIT License
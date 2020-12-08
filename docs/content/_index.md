---
title: "Windstrap"
---

Tailwind CSS with Bootstrap JS

## Installation

```sh
npm install windstrap --save
```

Require the installed plugin directly to your Tailwind config:

```js
// tailwind.config.js
plugins: [require("windstrap")],
```

## Usage

### For CSS

Requires Tailwind CSS 2 which is not included in this package. Learn how to [install tailwind here](https://tailwindcss.com/docs/installation/).

### For JS

Requires Bootstrap JS 5 which is not included in this package. Learn how to [install bootstrap js here](https://getbootstrap.com/docs/5.0/getting-started/introduction/#js).

## Alert

{{< code html >}}

<div class="relative p-3.5 rounded bg-gray-50 alert alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
{{< /code >}}

## Toast

{{< code html >}}

<div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <img src="/placeholder.jpg" class="w-5 mr-2 rounded" alt="...">
    <strong class="mr-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div class="toast-body">Hello, world! This is a toast message.</div>
</div>
{{< /code >}}

{{< code html >}}

<div aria-live="polite" aria-atomic="true" class="relative h-56">
  <div class="absolute top-0 right-0 toast-container">
    <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="/placeholder.jpg" class="w-5 mr-2 rounded" alt="...">
        <strong class="mr-auto">Bootstrap</strong>
        <small>just now</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">See? Just like this.</div>
    </div>
    <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="/placeholder.jpg" class="w-5 mr-2 rounded" alt="...">
        <strong class="mr-auto">Bootstrap</strong>
        <small>2 seconds ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">Heads up, toasts will stack automatically</div>
    </div>
  </div>
</div>
{{< /code >}}

{{< code html >}}

<div class="flex items-center text-white bg-indigo-700 border-0 fade show toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-body">Hello, world! This is a toast message.</div>
  <button type="button" class="ml-auto mr-3 btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
</div>
{{< /code >}}

## Tooltips

{{< code html >}}

<button type="button" class="px-3 py-2 text-sm font-medium bg-white rounded-md shadow-sm hover:bg-gray-50" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Tooltip on top
</button>
<button type="button" class="px-3 py-2 text-sm font-medium bg-white rounded-md shadow-sm hover:bg-gray-50" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
  Tooltip on right
</button>
<button type="button" class="px-3 py-2 text-sm font-medium bg-white rounded-md shadow-sm hover:bg-gray-50" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
  Tooltip on bottom
</button>
<button type="button" class="px-3 py-2 text-sm font-medium bg-white rounded-md shadow-sm hover:bg-gray-50" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
  Tooltip on left
</button>
<button type="button" class="px-3 py-2 text-sm font-medium bg-white rounded-md shadow-sm hover:bg-gray-50" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>
{{< /code >}}

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

Tailwind purges everything by default. Some bootstrap classes like tooltips will be left out during the purge so add the following to purge options in your tailwind config. This will make sure all components are not purged.

```js
// tailwind.config.js
purge: {
  layers: ["base", "utilities"],
},
```

## Requirements

### For CSS

Requires Tailwind CSS 2 which is not included in this package. Learn how to [install tailwind here](https://tailwindcss.com/docs/installation/).

### For JS

Requires Bootstrap JS 5.0.0-beta1 which is not included in this package. Learn how to [install bootstrap js here](https://getbootstrap.com/docs/5.0/getting-started/introduction/#js).

## Alert

{{< code html >}}

<div class="relative p-3.5 bg-gray-50 rounded alert alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
{{< /code >}}

## Collapse

{{< code html >}}

<a class="inline-flex px-4 py-2 my-2 text-sm font-medium bg-white rounded-md shadow-sm hover:bg-gray-50" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Link with href</a>
<button class="inline-flex px-4 py-2 my-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Button with data-bs-target</button>

<div class="collapse" id="collapseExample">
  <div class="p-4 bg-white rounded">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</div>
</div>
{{< /code >}}

## Dropdowns

{{< code html >}}

<div class="dropdown">
  <button class="p-2.5 text-sm font-medium bg-white rounded-md shadow-sm hover:bg-gray-100 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <nav class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <button class="dropdown-item">Action 1</button>
    <button class="dropdown-item">Action 2</button>
    <button class="dropdown-item active">Action 3</button>
    <button class="dropdown-item disabled">Something else here</button>
  </nav>
</div>
{{< /code >}}

## Modal

{{< code html >}}

<!-- Button trigger modal -->
<button type="button" class="p-2.5 text-sm font-medium bg-white rounded-md shadow-sm hover:bg-gray-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="font-semibold modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Woohoo, you're reading this text in a modal!
      </div>
      <div class="modal-footer">
        <button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 transition bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700" data-bs-dismiss="modal">Close</button>
        <button type="button" class="px-4 py-2 text-sm font-medium text-white transition bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save changes</button>
      </div>
    </div>
  </div>
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

<button type="button" class="p-2.5 text-sm font-medium bg-white rounded-md shadow-sm hover:bg-gray-100" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Tooltip on top
</button>
<button type="button" class="p-2.5 text-sm font-medium bg-white rounded-md shadow-sm hover:bg-gray-100" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
  Tooltip on right
</button>
<button type="button" class="p-2.5 text-sm font-medium bg-white rounded-md shadow-sm hover:bg-gray-100" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
  Tooltip on bottom
</button>
<button type="button" class="p-2.5 text-sm font-medium bg-white rounded-md shadow-sm hover:bg-gray-100" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
  Tooltip on left
</button>
<button type="button" class="p-2.5 text-sm font-medium bg-white rounded-md shadow-sm hover:bg-gray-100" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>
{{< /code >}}

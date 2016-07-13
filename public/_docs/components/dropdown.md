<h2 id="dropdown">Dropdown</h2>

### Basic

<div class="docs-example">
  <div class="dropdown-group">
    <button type="button" class="btn btn--primary js-dropdown-toggle">Button<i class="fa fa-caret-down dropdown__caret"></i></button>
    <ul class="dropdown pos-down pos-left">
      <li><a href="#">Menu item 1</a></li>
      <li><a href="#">Menu item 2</a></li>
      <li><a href="#">Menu item 3</a></li>
    </ul>
  </div>
</div>

```html
<div class="dropdown-group">
  <button type="button" class="btn btn--primary js-dropdown-toggle">Button<i class="fa fa-caret-down dropdown__caret"></i></button>
  <ul class="dropdown pos-down pos-left">
    <li><a href="#">Menu item 1</a></li>
    <li><a href="#">Menu item 2</a></li>
    <li><a href="#">Menu item 3</a></li>
  </ul>
</div>
```

### Positioning

Add `.pos-top`, `.pos-down`, `.pos-left` and `.pos-right`.

<div class="docs-example">
  <ul class="list-btn">
    <li>
      <div class="dropdown-group">
        <button type="button" class="btn btn--primary js-dropdown-toggle">Down / Left<i class="fa fa-caret-down dropdown__caret"></i></button>
        <ul class="dropdown pos-down pos-left">
          <li><a href="#">Menu item 1</a></li>
          <li><a href="#">Menu item 2</a></li>
          <li><a href="#">Menu item 3</a></li>
        </ul>
      </div>
    </li>
    <li>
      <div class="dropdown-group">
        <button type="button" class="btn btn--primary js-dropdown-toggle">Down / Right<i class="fa fa-caret-down dropdown__caret"></i></button>
        <ul class="dropdown pos-down pos-right">
          <li><a href="#">Menu item 1</a></li>
          <li><a href="#">Menu item 2</a></li>
          <li><a href="#">Menu item 3</a></li>
        </ul>
      </div>
    </li>
    <li>
      <div class="dropdown-group">
        <button type="button" class="btn btn--primary js-dropdown-toggle">Top / Left<i class="fa fa-caret-down dropdown__caret"></i></button>
        <ul class="dropdown pos-top pos-left">
          <li><a href="#">Menu item 1</a></li>
          <li><a href="#">Menu item 2</a></li>
          <li><a href="#">Menu item 3</a></li>
        </ul>
      </div>
    </li>
    <li>
      <div class="dropdown-group">
        <button type="button" class="btn btn--primary js-dropdown-toggle">Top / Right<i class="fa fa-caret-down dropdown__caret"></i></button>
        <ul class="dropdown pos-top pos-right">
          <li><a href="#">Menu item 1</a></li>
          <li><a href="#">Menu item 2</a></li>
          <li><a href="#">Menu item 3</a></li>
        </ul>
      </div>
    </li>
  </ul>
</div>

```html
<ul class="list-btn">
  <li>
    <div class="dropdown-group">
      <button type="button" class="btn btn--primary js-dropdown-toggle">Down / Left<i class="fa fa-caret-down dropdown__caret"></i></button>
      <ul class="dropdown pos-down pos-left">
        <li><a href="#">Menu item 1</a></li>
        <li><a href="#">Menu item 2</a></li>
        <li><a href="#">Menu item 3</a></li>
      </ul>
    </div>
  </li>
  <li>
    <div class="dropdown-group">
      <button type="button" class="btn btn--primary js-dropdown-toggle">Down / Right<i class="fa fa-caret-down dropdown__caret"></i></button>
      <ul class="dropdown pos-down pos-right">
        <li><a href="#">Menu item 1</a></li>
        <li><a href="#">Menu item 2</a></li>
        <li><a href="#">Menu item 3</a></li>
      </ul>
    </div>
  </li>
  <li>
    <div class="dropdown-group">
      <button type="button" class="btn btn--primary js-dropdown-toggle">Top / Left<i class="fa fa-caret-down dropdown__caret"></i></button>
      <ul class="dropdown pos-top pos-left">
        <li><a href="#">Menu item 1</a></li>
        <li><a href="#">Menu item 2</a></li>
        <li><a href="#">Menu item 3</a></li>
      </ul>
    </div>
  </li>
  <li>
    <div class="dropdown-group">
      <button type="button" class="btn btn--primary js-dropdown-toggle">Top / Right<i class="fa fa-caret-down dropdown__caret"></i></button>
      <ul class="dropdown pos-top pos-right">
        <li><a href="#">Menu item 1</a></li>
        <li><a href="#">Menu item 2</a></li>
        <li><a href="#">Menu item 3</a></li>
      </ul>
    </div>
  </li>
</ul>
```

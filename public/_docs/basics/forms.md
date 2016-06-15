<h2 id="forms">Forms</h2>

### Input

<div class="docs-example">
  <input type="text">
</div>

### Input sizing

<div class="docs-example">
  <p><input type="text" class="input--xsmall" placeholder="xsmall"></p>
  <p><input type="text" class="input--small" placeholder="small"></p>
  <p><input type="text" placeholder="default"></p>
  <p><input type="text" class="input--large" placeholder="large"></p>
  <p><input type="text" class="input--full" placeholder="full"></p>
</div>

```html
<input type="text" class="input--xsmall" placeholder="xsmall">
<input type="text" class="input--small" placeholder="small">
<input type="text" placeholder="default">
<input type="text" class="input--large" placeholder="large">
<input type="text" class="input--full" placeholder="full">
```

### Input coloring

<div class="docs-example">
  <p><input type="text" class="input--success" placeholder="success"></p>
  <p><input type="text" class="input--danger" placeholder="danger"></p>
  <p><input type="text" class="input--warning" placeholder="warning"></p>
</div>

```html
<input type="text" class="input--success" placeholder="success">
<input type="text" class="input--danger" placeholder="danger">
<input type="text" class="input--warning" placeholder="warning">
```


### Textarea

<div class="docs-example">
  <textarea name="" rows="4" class="input--full"></textarea>
</div>


### Radio

<div class="docs-example">
  <ul class="list-inline">
    <li>
      <label for="radio1">
        <input type="radio" name="radio" id="radio1" checked="checked" class="input-styled input--radio">
        <i class="icon"></i>
        <span>radio1</span>
      </label>
    </li>
    <li>
      <label for="radio2">
        <input type="radio" name="radio" id="radio2" class="input-styled input--radio">
        <i class="icon"></i>
        <span>radio2</span>
      </label>
    </li>
  </ul>
</div>


```html
<label for="radio1">
  <input type="radio" name="radio" id="radio1" checked="checked" class="input-styled input--radio">
  <i class="icon"></i>
  <span>radio1</span>
</label>
<label for="radio2">
  <input type="radio" name="radio" id="radio2" class="input-styled input--radio">
  <i class="icon"></i>
  <span>radio2</span>
</label>
```

### Checkbox

<div class="docs-example">
  <ul class="list-inline">
    <li>
      <label for="checkbox1">
        <input type="checkbox" name="checkbox" id="checkbox1" checked="checked" class="input-styled input--check">
        <i class="icon"></i>
        <span>checkbox1</span>
      </label>
    </li>
    <li>
      <label for="checkbox2">
        <input type="checkbox" name="checkbox" id="checkbox2" class="input-styled input--check">
        <i class="icon"></i>
        <span>checkbox2</span>
      </label>
    </li>
  </ul>
</div>

```html
<label for="checkbox1">
  <input type="checkbox" name="checkbox" id="checkbox1" checked="checked" class="input-styled input--check">
  <i class="icon"></i>
  <span>checkbox1</span>
</label>
<label for="checkbox2">
  <input type="checkbox" name="checkbox" id="checkbox2" class="input-styled input--check">
  <i class="icon"></i>
  <span>checkbox2</span>
</label>
```


### Styled Select


<div class="docs-example">
  <div class="select-styled select--large">
    <select name="test">
      <option value="value1">custom 1</option>
      <option value="value2">custom custom 2</option>
      <option value="value3">long long long long long long long text</option>
    </select>
  </div>
</div>

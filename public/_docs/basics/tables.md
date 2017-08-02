<h2 id="tables">Tables</h2>

### Basic

<div class="docs-example">
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3</td>
      <td>komeda</td>
      <td>27</td>
    </tr>
    <tr>
      <td>3</td>
      <td>komeda</td>
      <td>27</td>
    </tr>
    <tr>
      <td>3</td>
      <td>komeda</td>
      <td>27</td>
    </tr>
  </tbody>
</table>
```

### Bordered

Add `.table--bordered`.

<div class="docs-example table--bordered">
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table table--bordered">
  ...
</table>
```


### Striped

Add `.table--striped`.

<div class="docs-example table--striped">
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table table--striped">
  ...
</table>
```

### Fixed Section Header
<div class="docs-example">
  <table class="table ts-table-section">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr class="ts-row-section">
        <td>Header</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr class="ts-row-section">
        <td>Header</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
      <tr>
        <td>3</td>
        <td>komeda</td>
        <td>27</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.ts-row-section,
.ts-row-fixed {
  background-color: #f9f9f9;
  font-weight: bold;
}
</style>

```html
<table class="table ts-table-section">
  <tbody>
    <tr class="ts-row-section">
      <td>Header</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td>komeda</td>
      <td>27</td>
    </tr>
    <tr>
      <td>3</td>
      <td>komeda</td>
      <td>27</td>
    </tr>
    <tr class="ts-row-section">
      <td>Header</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td>komeda</td>
      <td>27</td>
    </tr>
    <tr>
      <td>3</td>
      <td>komeda</td>
      <td>27</td>
    </tr>
  </tbody>
</table>
```

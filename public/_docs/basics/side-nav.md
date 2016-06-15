<h2 id="side-nav">Side Navigation</h2>

This is required component when you building app with Adminize package.  
You have to put that after `Head Navigation` component.

### Basic

<div class="docs-example">
  <div class="side-bar">
    <div class="side-bar__header">
      <div class="site-name">
        <a href="#"><img src="./assets/img/head-logo.png"><span>App Name</span></a>
      </div>
    </div>
    <div class="scroll-wrap">
      <div class="scroll-content">
        <ul class="side-bar__menu">
          <li class="side-bar__list is-active">
            <a href="#">
              <i class="fa fa-file-text icon"></i><span>Menu #1</span>
            </a>
          </li>
          <li class="side-bar__list">
            <a href="#">
              <i class="fa fa-file-text icon"></i><span>Menu #2</span>
            </a>
          </li>
          <li class="side-bar__list">
            <a href="#">
              <i class="fa fa-file-text icon"></i><span>Menu #3</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

```html
<div class="side-bar">
  <div class="side-bar__header">
    <div class="site-name">
      <a href="#"><img src="./assets/img/head-logo.png"><span>App Name</span></a>
    </div>
  </div>
  <div class="scroll-wrap">
    <div class="scroll-content">
      <ul class="side-bar__menu">
        <li class="side-bar__list is-active">
          <a href="#">
            <i class="fa fa-file-text icon"></i><span>Menu #1</span>
          </a>
        </li>
        <li class="side-bar__list">
          <a href="#">
            <i class="fa fa-file-text icon"></i><span>Menu #2</span>
          </a>
        </li>
        <li class="side-bar__list">
          <a href="#">
            <i class="fa fa-file-text icon"></i><span>Menu #3</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
```

### Child menu item

<div class="docs-example">
  <div class="side-bar">
    <div class="side-bar__header">
      <div class="site-name">
        <a href="#"><img src="./assets/img/head-logo.png"><span>App Name</span></a>
      </div>
    </div>
    <div class="scroll-wrap">
      <div class="scroll-content">
        <ul class="side-bar__menu">
          <li class="side-bar__list is-active">
            <div class="parent-title js-side-parent">
              <i class="fa fa-file-text icon"></i><span>Parent</span>
            </div>
            <ul class="child-menu">
              <li class="child-menu__list is-active"><a href="#">child 1</a></li>
              <li class="child-menu__list"><a href="#">child 2</a></li>
              <li class="child-menu__list"><a href="#">child 3</a></li>
            </ul>
          </li>
          <li class="side-bar__list">
            <div class="parent-title js-side-parent">
              <i class="fa fa-file-text icon"></i><span>Parent</span>
            </div>
            <ul class="child-menu">
              <li class="child-menu__list"><a href="#">child 1</a></li>
              <li class="child-menu__list"><a href="#">child 2</a></li>
              <li class="child-menu__list"><a href="#">child 3</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

```html
<div class="side-bar">
  <div class="side-bar__header">
    <div class="site-name">
      <a href="#"><img src="./assets/img/head-logo.png"><span>App Name</span></a>
    </div>
  </div>
  <div class="scroll-wrap">
    <div class="scroll-content">
      <ul class="side-bar__menu">
        <li class="side-bar__list is-active">
          <div class="parent-title js-side-parent">
            <i class="fa fa-file-text icon"></i><span>Parent</span>
          </div>
          <ul class="child-menu">
            <li class="child-menu__list is-active"><a href="#">child 1</a></li>
            <li class="child-menu__list"><a href="#">child 2</a></li>
            <li class="child-menu__list"><a href="#">child 3</a></li>
          </ul>
        </li>
        <li class="side-bar__list">
          <div class="parent-title js-side-parent">
            <i class="fa fa-file-text icon"></i><span>Parent</span>
          </div>
          <ul class="child-menu">
            <li class="child-menu__list"><a href="#">child 1</a></li>
            <li class="child-menu__list"><a href="#">child 2</a></li>
            <li class="child-menu__list"><a href="#">child 3</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
```

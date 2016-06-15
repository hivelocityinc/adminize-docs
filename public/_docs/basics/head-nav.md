<h2 id="head-nav">Head Navigation</h2>

This is required component when you building app with Adminize package.  
You have to put that in `<body>`.

<div class="docs-example">
  <div class="head-bar js-headbar">
    <div class="head-bar__toggle js-head-toggle"></div>
    <div class="user-dropdown js-dropdown">
      <div class="user-name">Username</div>
      <div class="user-avatar">
        <img src="//www.gravatar.com/avatar/b58f6ebea2155370e2daf60c369616b1" alt="user name">
      </div>
      <div class="user-menu">
        <i class="caret">
          <i class="caret-outer"></i>
          <i class="caret-inner"></i>
        </i>
        <ul class="user-menu__content">
          <li class="user-menu__list">
            <a href="#"><i class="fa fa-gear"></i><span>Settings</span></a>
          </li>
          <li class="user-menu__list">
            <a href="#"><i class="fa fa-sign-out"></i><span>Sign out</span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

```html
<div class="head-bar js-headbar">
  <div class="head-bar__toggle js-head-toggle"></div>
  <div class="user-dropdown js-dropdown">
    <div class="user-name">Username</div>
    <div class="user-avatar">
      <img src="//www.gravatar.com/avatar/b58f6ebea2155370e2daf60c369616b1" alt="user name">
    </div>
    <div class="user-menu">
      <i class="caret">
        <i class="caret-outer"></i>
        <i class="caret-inner"></i>
      </i>
      <ul class="user-menu__content">
        <li class="user-menu__list">
          <a href="#"><i class="fa fa-gear"></i><span>Settings</span></a>
        </li>
        <li class="user-menu__list">
          <a href="#"><i class="fa fa-sign-out"></i><span>Sign out</span></a>
        </li>
      </ul>
    </div>
  </div>
</div>
```

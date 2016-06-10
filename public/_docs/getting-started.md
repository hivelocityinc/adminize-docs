Adminizeのインストール、すぐにはじめられるテンプレートについて紹介しています。

<h2 id="install"><span>インストール</span></h2>

NPM, Bowerの2つのパッケージマネージャーからインストールができます。

### NPMから

```bash
$ npm install adminize
```

### Bowerから

```bash
$ bower install adminize
```

<h2 id="template"><span>テンプレート</span></h2>

基本的なHTMLテンプレートを[こちら](https://github.com/hivelocityinc/adminize/archive/master.zip)からダウンロードできます。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
  <title>Adminize</title>
  <link rel="stylesheet" href="./bower_components/fontawesome/css/font-awesome.min.css">
  <link rel="stylesheet" href="./bower_components/adminize/css/adminize.min.css">
</head>
<body>

  <div class="head-bar js-headbar">
    <div class="head-bar__toggle js-head-toggle"></div>
    <div class="user-dropdown js-dropdown">
      <div class="user-name">username</div>
      <div class="user-avatar">
        <img src="http://www.gravatar.com/avatar/b58f6ebea2155370e2daf60c369616b1" alt="username">
      </div>
      <div class="user-menu">
        <i class="caret">
          <i class="caret-outer"></i><i class="caret-inner"></i>
        </i>
        <ul class="user-menu__content">
          <li class="user-menu__list">
            <a href="#"><i class="fa fa-sign-out"></i><span>Sign out</span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="side-bar">
    <div class="side-bar__header">
      <div class="site-name">
        <a href="#"><img src="http://www.gravatar.com/avatar/b58f6ebea2155370e2daf60c369616b1"><span class="with-logo">Adminize</span></a>
      </div>
    </div>
    <div class="scroll-wrap">
      <div class="scroll-content">
        <ul class="side-bar__menu">
          <li class="side-bar__list is-active">
            <a href="#"><i class="fa fa-file-text icon"></i><span>ベーステンプレート</span></a>
          </li>
          <li class="side-bar__list">
            <a href="#"><i class="fa fa-file-text icon"></i><span>メニュー</span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="main-contents">
    <div class="main-contents__body">
      <!-- contents here -->
    </div>
  </div>

  <script src="./bower_components/jquery/dist/jquery.min.js"></script>
  <script src="./bower_components/adminize/js/adminize.min.js"></script>

</body>
</html>
```

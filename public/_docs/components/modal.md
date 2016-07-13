<h2 id="modal">Modal</h2>

<div class="docs-example">
  <a href="#" data-remodal-target="sampleModal" class="btn btn--primary with-icon">
    <i class="fa fa-clone"></i> Call the modal
  </a>
  <div data-remodal-id="sampleModal" data-remodal-options="hashTracking: false" class="remodal">
    <div class="remodal__head">
      <h2 class="remodal__title">Heading of modal</h2>
      <button data-remodal-action="close" class="remodal__close"></button>
    </div>
    <div class="remodal__body">
      <p>Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal window plugin with declarative configuration and hash tracking.</p>
    </div>
    <div class="remodal__foot">
      <ul class="list-btn align--right">
        <li>
          <button data-remodal-action="cancel" class="btn btn--default">Cancel</button>
        </li>
        <li>
          <button data-remodal-action="confirm" class="btn btn--success">OK</button>
        </li>
      </ul>
    </div>
  </div>
</div>


```html
<!-- Call button -->
<a href="#" data-remodal-target="sampleModal" class="btn btn--primary with-icon">
  <i class="fa fa-clone"></i> Call the modal
</a>

<!-- Modal -->
<div data-remodal-id="sampleModal" data-remodal-options="hashTracking: false" class="remodal">
  <div class="remodal__head">
    <h2 class="remodal__title">Heading of modal</h2>
    <button data-remodal-action="close" class="remodal__close"></button>
  </div>
  <div class="remodal__body">
    <p>Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal window plugin with declarative configuration and hash tracking.</p>
  </div>
  <div class="remodal__foot">
    <ul class="list-btn align--right">
      <li>
        <button data-remodal-action="cancel" class="btn btn--default">Cancel</button>
      </li>
      <li>
        <button data-remodal-action="confirm" class="btn btn--success">OK</button>
      </li>
    </ul>
  </div>
</div>
```

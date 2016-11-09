# keybinder - Simple Javascript Keybinder

---
## Installation
```
npm i keybinder --save
```

## To Use
```
keybinder(selector, keys, callback);
```
The arguments for the keybinder are:
* __Selector (String)__: The DOM selector for elements that you want to bind the keys to.

* __keys (Array)__: Array of key combinations to listen to.

* __callback (function)__: The callback function to run when the specified key combinations are pressed. This is automatically bound to the element selected.

Sample Code:
```
<input type="text" class="name" />
<script src="path/to/keybinder.js" charset="utf-8"></script>
<script type="text/javascript">
    keybinder('.name', ['control', 's'], function () {
      // this refers to element with .name as class
      this.value = 'I am changed';
    });
</script>
```

## Contributing
Is there something you think it is missing? Great!
- Fork this repo
- Make changes, write tests
- Send a pull request

### License
Keybinder is licensed under the [MIT License](../master/LICENSE)

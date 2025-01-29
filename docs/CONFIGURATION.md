# Configuration Guide for {{PROJECT_NAME}}

This document provides detailed instructions for configuring **{{PROJECT_NAME}}** to fit your specific needs.

---

## Default Configuration

Below is the default configuration for the project. You can customize it by creating a `config.json` file or using environment variables.

### Example `config.json`

```json
{
  "setting1": "default_value",
  "setting2": true,
  "setting3": 3000
}
```

or

```js
const { configure } = require('{{PROJECT_NAME}}');

configure({
  setting1: 'custom_value',
  onInit: () => {
    console.log('Initialization complete!');
  },
});
```

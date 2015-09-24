### Longship Logging API
Very simple console logging API

#### Installation
```
npm install ls-logger --save
```

#### API

```javascript
// TypeScript 1.6+
import logger = require("ls-logger");

// JavaScript
var logger = require("ls-logger");

logger.debug("a debug message");

logger.info("an information message");

logger.warn("a warning message");

logger.error("an error message");
```
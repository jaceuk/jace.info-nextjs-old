---
title: 'Generating unique IDs in React'
date: '2022-06-11'
excerpt: 'Unique IDs are essential for writing accessible code and now, with React 18, things just got allot easier.'
tags: ['react']
---

Whilst the web at large has slowly learned not to pepper markup with IDs they are still required for writing accessible code and these IDs must be unique on any given page or else everything falls apart.

Typically you might use some flavor of Math.random() or an external library to generate these unique IDs however React 18 excerptduces a new hook to solve this problem, **useId**.

The **useId** hook generates globally unique dynamic IDs.

```javascript
import * as React from 'react';

function App() {
  const id = React.useId();
  return (
    <>
      <div>
        <label htmlFor={`${id}-name`}>Name</label>
        <input type="text" name="name" id={`${id}-name`} />
      </div>
      <div>
        <label htmlFor={`${id}-email`}>Email</label>
        <input type="email" name="email" id={`${id}-email`} />
      </div>
    </>
  );
}
```

No matter how many times the above component is rendered you’ll always get a unique ID and, as an added bonus, server-side and client-side IDs created with this hook will always match up.

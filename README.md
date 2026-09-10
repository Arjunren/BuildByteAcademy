# BuildByte Academy frontend

Deploy this directory as the Vercel project root. It contains only browser-delivered HTML and JavaScript—no database configuration, SMTP credentials, Flask secrets, or backend source.

`assets/app.js` is the shared API client. Its production default is the PythonAnywhere `/api` address; for local development set `window.BUILD_BYTE_API` before loading it.

See [`../deployment.md`](../deployment.md) for the deployment procedure. The database schema and PythonAnywhere setup are in [`../Backend/DATABASE_SCHEMA.md`](../Backend/DATABASE_SCHEMA.md).

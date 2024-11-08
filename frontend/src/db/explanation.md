# Client Side Database?? Whaaaat?

[https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API]

You don't need to manually instantiate the IndexedDB for your application. The database and its object stores are created automatically when you first attempt to open the database using the indexedDB.open() method. It works similar to local storage.

Here’s a quick summary of how it works:

Database Opening: The openDatabase function is called whenever you need to access the database (e.g., when performing a put, get, remove, or getById operation). If the database doesn't exist, it will be created at that moment.

Upgrading: If the database version specified in indexedDB.open() is higher than the current version, the onupgradeneeded event is triggered. This is where you can set up your object stores and any initial data structure

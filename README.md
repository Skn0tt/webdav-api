# webdav-api

This is a simple API that can be used to talk to your webdav server via HTTP.

## Getting Started

## Methods

### `/read`

```shell
curl \
  -d webdav_url=<url> \
  -d webdav_username=<username> \
  -d webdav_password=<password> \
  -d path=/path/to/some/file.txt \
  https://webdav-api.simonknott.de/api/read

This is the file's content!
```

### `/append`

```shell
curl \
  -d webdav_url=<url> \
  -d webdav_username=<username> \
  -d webdav_password=<password> \
  -d path=/path/to/some/file.txt \
  -d text=sometext \
  https://webdav-api.simonknott.de/api/append
```

This will append a new line to the file.

```diff
Lorem ipsum dolor sit amet
+sometext
```

### `/write`

```shell
curl \
  -d webdav_url=<url> \
  -d webdav_username=<username> \
  -d webdav_password=<password> \
  -d path=/path/to/some/file.txt \
  -d text=sometext \
  https://webdav-api.simonknott.de/api/write
```

This will replace the file.

```diff
-Lorem ipsum dolor sit amet
+sometext
```

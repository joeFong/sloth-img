# sloth-img

A litElement webcomponent that progressively lazy loads images.

### Basic Usage
```sh
<slog-img alt="one" datasrc="./images/large.jpg" datathumbnail="./images/small.jpg"/></slog-img>
```
### Static
Include script in head or body
```sh
<script src="/path/to/file/sloth-img/public/sloth-img.js"></script>
```
### CDN
Include script in head or body
```sh
<script src="https://cdn.jsdelivr.net/npm/sloth-img@1.0.3/public/slog-img.js"></script>
```
### Installation
Install the dependencies and devDependencies and start the server.

```sh
$ npm i sloth-img
```

### Attributes
- `alt` - the same as an alt tag in <img>.
- `datasrc` - The large image you want to load
- `datathumbnail` - The smaller image you want to show before the large image. 

### Development
Want to contribute? Great!

sloth-img uses Webpack for fast developing.
To build changes for production, run from root directory:
```sh
$ npx webpack
```

for local development, you can use Polymer CLI, if you don't have Polymer CLI run
```sh
$ npm i -g polymer-cli
```
From root directory of component run 
```sh
$ polymer serve
```

### Todos

 - Write Tests
License
----

MIT
**Free Software, Hell Yeah!**

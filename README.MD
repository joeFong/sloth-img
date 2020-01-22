# resume-jf

A litElement webcomponent to easily create a new beautiful resume and embed it on your website or print it as a pdf.

### Basic Usage
Go to my website https://joefong.xyz to see what the 'resumeObj' object looks like.
```sh
<resume-jf id="resume" theme="classic" resume="[resumeObj]"></resume-jf>
```
### Static
Include script in head or body
```sh
<script src="/path/to/file/resume-jf/dist/resume-jf.js"></script>
```
### CDN
Include script in head or body
```sh
<script src="https://cdn.jsdelivr.net/npm/resume-jf@1.0.2/dist/resume-jf.js"></script>
```
### Installation
Install the dependencies and devDependencies and start the server.

```sh
$ npm i resume-jf
```

### Attributes
- `theme` - only has 'classic' theme for now.
- `resume` - a JSON object passed in as a string. 

### Development
Want to contribute? Great!

resume-jf uses Webpack for fast developing.
To build changes for production, run:
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
 - Add Themes
 - A form to generate resume for users that don't want to deal with JSON 

License
----

ISC
**Free Software, Hell Yeah!**

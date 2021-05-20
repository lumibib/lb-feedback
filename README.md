![GitHub](https://img.shields.io/github/license/lumibib/lb-feedback?style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/lumibib/lb-feedback?style=flat-square)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/lumibib/lb-feedback)
![GitHub all releases](https://img.shields.io/github/downloads/lumibib/lb-feedback/total)
[![](https://data.jsdelivr.com/v1/package/gh/lumibib/lb-feedback/badge)](https://www.jsdelivr.com/package/gh/lumibib/lb-feedback)


<p align="center">
    <img alt="lb-feedback logo" title="lb-feedback logo" src="https://img.icons8.com/color/344/filled-chat.png" width="200">
</p>
<div align="center">
  <strong>Feedback plugin for Lumibib</strong>
</div>
<div align="center">
  Display a feedback JavaScript plugin on our pages with FreshDesk, FreshChat and UserReport.
</div>

<div align="center">
  <h3>
    <a href="#demo">Demo</a>
    <span> | </span>
    <a href="https://lumibib.github.io/lb-feedback/">Documentation</a>
    <span> | </span>
    <a href="#contributing">
      Contributing
    </a>
  </h3>
</div>

<div align="center">
  <sub>Built with ❤︎ by
  <a href="https://lumibib.ch">Lumibib</a> and
  <a href="https://github.com/lumibib/lb-feedback/contributors">
    contributors
  </a>
  </sub>
</div>


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)

## Installation
```` html
<script src="https://cdn.jsdelivr.net/gh/lumibib/lb-feedback@latest/lb-feedback.min.js"></script>
````
## Usage

```` js
var feedback = new lbFeedback({
    title: "Aide et feedback",
    //width: "340",
    bottom_anchor: "90%",
    label: {
        help: "Centre d'aide",
        idea: "Suggestion",
        bug: "Reporter un bug",
        chat: "Discuter"
    },
    title_color: "#ffffff",
    title_bg: "#222222",
    icon_bg: "purple",
    color: "#222222",
    bg: "#eee",
    hover_color: "#ffffff",
    hover_bg: "purple",
    freshchat_token: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    freshdesk_widget_id: "xxxxxxxxxxx"
});
````
## Demo
* [Demo on Codepen](https://codepen.io/michaelravedoni/pen/wvJoPag)

## Contributing

We’re really happy to accept contributions from the community, that’s the main reason why we open-sourced it! There are many ways to contribute, even if you’re not a technical person.

1. Fork it (<https://github.com/lumibib/lb-feedback/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

The icons are used in this package are drawn from <a href="https://orioniconlibrary.com">Orion Icon Library - Free vector icons - SVG, PNG, & Icon Font</a>.
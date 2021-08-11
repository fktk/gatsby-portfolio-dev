# Portfolio for developers

[Gatsby-theme-portfolio](https://github.com/smakosh/gatsby-theme-portfolio)をフォークして、ポートフォリオサイトを作りました。
フォーク元様とは

* デプロイ先が異なる(自前のサーバーにアップロード)
* フォームにGoogle Formを使用

という点で修正しているため、フォーク元様と同じ方法で立ち上げようとするとエラーが生じます。

## Features

- Eslint/Prettier configured
- Scores 100% on a11y / Performance / PWA / SEO
- PWA (desktop & mobile)
- Easy to customize
- Nice project structure
- Amazing illustrations by [Undraw.co](https://undraw.co)
- Tablet & mobile friendly
- A contact form protected by Google Recaptcha
- Functional components with ~~Recompose~~ React Hooks! ~~ready to migrate to React hooks!~~
- Fetches your Github pinned projects with most stars (You could customize this if you wish)

## Structure

```bash
.
├── data
│   └── config              # SEO related tags
├── src
│   └── assets              # Assets
│   │   │── icons             # icons
│   │   │── illustrations     # illustrations from (undraw.co)
│   │   └── thumbnail         # cover of your website when it's shared to social media
│   ├── components          # Components
│   │   │── common            # Common components
│   │   │── landing           # Components used on the landing page
│   │   └── theme             # Header & Footer
│   └── pages               # Pages
└── static                  # favicon & Netlify redirects
```

## Built with

- Gatsby
- React & GraphQL
- Google Form
- Google recaptcha
- And these useful of JavaScript libraries & Gatsby plugins [package.json](package.json)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more details

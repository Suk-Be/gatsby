# I/O Tool for maintaining items in storage
## The project is not production ready
The project was killed because of missing ressources and re-prioritizing.

Some of the frontend is done and uses react with gatsby. Worth mentioning is the robust and scalable design system.

## Design System
A Design system is used to be flexible on changes to the code and make the system configurable for other projects

#### Typography
webfonts are used in two ways
- selfhosting (with gatsby-browser.js)
- google fonts (with npm gatsby-plugin-web-font-loader, configured in gatsby-config.js)

#### Styled Components and global css
global styles are used to keep the styling code dry
- utils/css/index.js
- styled components are used to style html tags

#### Layout system
The common layout for all pages is a wrapper component which can be found in the folder **src/components/allPages**.

#### Component system
The pain in many constantly growing enterprise react eco systems is the growth of the component amount.
Which comes with a price of increasing communication and additional effort to avoid duplicates.

The component architecture is designed to be capped by the size of available html tags.

Styled components declarative instances with their own styling props to make them scale nicely in one place to look for. 
 
An extreme example would be input.js. that has
- type button 
    - reset
    - submit
    - login
    - logout
- type text
    - name
    - etc.
- type radio, number, password, range, file, date, email


An common example would be headline.js. that is styled individually
- headline
- subheadline

##### Divs and Spans
are used for layout purposes
- vertical and horizontal alignments of contents within the wrapped component
- vertical and horizontal spaces between components in macro layouts

#### Measurements
**Fonts**
https://css-tricks.com/rems-ems/
- rem for main (html tag)
- em for all children of main
  
**gaps, rows and paddings**
- rem for main (html tag)
- em for all children of main
  
**Unit measuring system**
  layout grid: gaps, rows and paddings
- percentage (relative to parent)
- fr (dynamic spacing)
- vh (whole screen events)


**fluid Base Grid**
- seamless responsive behaviour on resizing the browser
- JS Function fluidCSS() calculates parameters for css calc() function so that the heavy lifting on restyling the page is done by css and the browser 
- https://www.madebymike.com.au/writing/precise-control-responsive-typography/
- https://nilsb.org/2019-02-12-sass-mixins-in-styled-components/ 


## Testing
Testing is managed in four testing pillars
- unit testing (no implementation details tested) 
- end to end testing (implementation details can be viewed and clicked with a phantom browser, needs to be implemented yet)
- precommit syntax testing (with git Hook before commit)
- visual testing (communication with designers)
    
Tools used for testing pillars
- unit testing
    - jest and react-testing-library (easier than enzyme :-) 
- testing components with graphql
    - https://www.gatsbyjs.org/docs/testing-components-with-graphql/
    - at this point a use case for graphql has to be written
- end to end testing
    - cypress.io
- precommit syntax testing
    - eslint, husky and lint-staged
- visual testing
    - storybook
    
yet to be done
- cypress.io prototype
- storybook prototype

#### Libraries

CSS-in-JS
- styled-components https://styled-components.com/

Compose Theming
- Grommet V2 https://v2.grommet.io/, yet to be realized ...

---

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="30" />
  </a>
</p>
<h3 align="center">
  Gatsby's default starter
</h3>

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

#### Deploy
For internal preasentation purposes a student account for surge.hs is used

Steps
- Getting surge (npm install -g surge)
- Preparing to deploy (gatsby build)
- Deploy (surge public/)

previous http://diligent-achieve.surge.sh/
previous http://clumsy-things.surge.sh/
current http://taboo-ball.surge.sh/

# Gatsby default documentation
## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-default-starter https://github.com/gatsbyjs/gatsby-starter-default
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

<!-- AUTO-GENERATED-CONTENT:END -->

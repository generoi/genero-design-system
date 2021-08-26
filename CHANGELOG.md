# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.0.0-beta.12](https://github.com/generoi/genero-design-system/compare/v4.0.0-beta.11...v4.0.0-beta.12) (2021-08-26)

## [4.0.0-beta.11](https://github.com/generoi/genero-design-system/compare/v4.0.0-beta.10...v4.0.0-beta.11) (2021-08-24)

## [4.0.0-beta.10](https://github.com/generoi/genero-design-system/compare/v4.0.0-beta.9...v4.0.0-beta.10) (2021-08-24)

## [4.0.0-beta.9](https://github.com/generoi/genero-design-system/compare/v4.0.0-beta.8...v4.0.0-beta.9) (2021-08-24)

## [4.0.0-beta.8](https://github.com/generoi/genero-design-system/compare/v4.0.0-beta.7...v4.0.0-beta.8) (2021-08-20)

## [4.0.0-beta.7](https://github.com/generoi/genero-design-system/compare/v4.0.0-beta.6...v4.0.0-beta.7) (2021-06-24)

## [4.0.0-beta.5](https://github.com/generoi/genero-design-system/compare/v4.0.0-beta.4...v4.0.0-beta.5) (2021-06-15)


### Bug Fixes

* **build:** infinite loop in build watch ([5591894](https://github.com/generoi/genero-design-system/commit/559189495a8fc52e00aa665a77aa15e454c1f4ef))
* **input-wrapper:** fix textarea resize in blink browsers ([41a735c](https://github.com/generoi/genero-design-system/commit/41a735c39cfae5ce5c5dc38df4e3c1379d1eceab))
* **react:** Fix importing components in non-typescript react ([522567d](https://github.com/generoi/genero-design-system/commit/522567d69871426000425129277e8a3ae5ecfe34))

## [4.0.0-beta.4](https://github.com/generoi/genero-design-system/compare/v4.0.0-beta.3...v4.0.0-beta.4) (2021-05-18)


### Features

* **menu-item-nested:** Add css variables ([9cd2a23](https://github.com/generoi/genero-design-system/commit/9cd2a23deceaa631c5e44ae8b2733d673d134286))

## [4.0.0-beta.3](https://github.com/generoi/genero-design-system/compare/v4.0.0-beta.1...v4.0.0-beta.3) (2021-05-17)


### Features

* **hamburger:** Add --gds-hamburger-border-radius ([f3278aa](https://github.com/generoi/genero-design-system/commit/f3278aa02cff7165f9a5ccc3d0c89a8786ab05b2))
* **input-wrapper:** style for slotted textarea ([b8f1b77](https://github.com/generoi/genero-design-system/commit/b8f1b7736388b1dd23f26b66eac042e307cae1c9))

## [4.0.0-beta.2](https://github.com/generoi/genero-design-system/compare/v4.0.0-beta.1...v4.0.0-beta.2) (2021-05-08)

### Bug Fixes

* **gds-search-form:** remove hard-coded color value ([369d7d0](https://github.com/generoi/genero-design-system/commit/369d7d04626a41da2f715458a5c1a858f07d292a))
* **search-form:** fix positioning of floating search ([b1cfb80](https://github.com/generoi/genero-design-system/commit/b1cfb803d563cfdb5ba334e111f16b01e4ec9ef2))
* **search-form:** remove hard-coded color ([3262a05](https://github.com/generoi/genero-design-system/commit/3262a052a0c8706dab3d97683548cb1ed00aa7da))

## [4.0.0-beta.1](https://github.com/generoi/genero-design-system/compare/v4.0.0-beta.0...v4.0.0-beta.1) (2021-05-03)

### Bug Fixes

* **gds-search-form:** remove hard-coded color value ([369d7d0](https://github.com/generoi/genero-design-system/commit/369d7d04626a41da2f715458a5c1a858f07d292a))
* **search-form:** fix positioning of floating search ([b1cfb80](https://github.com/generoi/genero-design-system/commit/b1cfb803d563cfdb5ba334e111f16b01e4ec9ef2))
* **search-form:** remove hard-coded color ([3262a05](https://github.com/generoi/genero-design-system/commit/3262a052a0c8706dab3d97683548cb1ed00aa7da))

## [4.0.0-beta.0](https://github.com/generoi/genero-design-system/compare/v3.13.1...v4.0.0-beta.0) (2021-04-14)

### ⚠ BREAKING CHANGES

* **variables:** All variables have now been prefixed with `--gds-`. You can use the following commands to rename them in your theme

```bash
find -E . -type f -not -path "./node_modules/*" -not -path "./vendor/*" -regex ".*\.(js|css|scss|tsx|php)" -exec sed -i '' -E 's/--(color|spacing|body|heading|label|paragraph|tag|button|text-button|navigation|card|media-card|logo-grid-item|icon|accordion|menu-item)/--gds-\1/g' {} +

find -E . -type f -not -path "./node_modules/*" -not -path "./vendor/*" -regex ".*\.(js|css|scss|tsx|php)" -exec sed -i '' -E 's/(spacing|heading)-xxxs/\1-3xs/g' {} +
find -E . -type f -not -path "./node_modules/*" -not -path "./vendor/*" -regex ".*\.(js|css|scss|tsx|php)" -exec sed -i '' -E 's/(spacing|heading)-xxs/\1-2xs/g' {} +
find -E . -type f -not -path "./node_modules/*" -not -path "./vendor/*" -regex ".*\.(js|css|scss|tsx|php)" -exec sed -i '' -E 's/(spacing|heading)-xxl/\1-2xl/g' {} +
find -E . -type f -not -path "./node_modules/*" -not -path "./vendor/*" -regex ".*\.(js|css|scss|tsx|php)" -exec sed -i '' -E 's/(spacing|heading)-xxxl/\1-3xl/g' {} +
```
* **variables:** The following variables have changed name:

```css
--heading-2xl-font-family: var(--heading-xxl-font-family);
--heading-2xl-font-weight: var(--heading-xxl-font-weight);
--heading-2xl-font-size: var(--heading-xxl-font-size);
--heading-2xl-line-height: var(--heading-xxl-line-height);
--heading-2xl-text-transform: var(--heading-xxl-text-transform);
--heading-2xl-letter-spacing: var(--heading-xxl-letter-spacing);
--heading-2xl-margin-top: var(--heading-xxl-margin-top);
--heading-2xl-margin-bottom: var(--heading-xxl-margin-bottom);

--spacing-3xs: var(--spacing-xxxs);
--spacing-2xs: var(--spacing-xxs);
--spacing-2xl: var(--spacing-xxl);
--spacing-3xl: var(--spacing-xxxl);
```
* **variables:** The following variables have been deprecated, please use the specific colors instead.

```css
--color-primary: var(--color-ui-03);
--color-secondary: var(--color-ui-04);
--border-color-light: #dddddd;
--background-color-primary: var(--color-ui-background-01);
--background-color-secondary: var(--color-ui-background-02);
--text-color-primary: var(--color-black);
```
* **gds-paragraph:** The `paragraph.base` mixin has been deprecated since it's quite common for
paragraph sizes to have both different font families and font weights.

Consuming projects that happen to use the SASS mixins can simply remove the
mixin wherever it's used and things should keep working based on the size only.
* **a11y:** **Menu item underline**

`--menu-item-underline-display` has been replaced by
`--gds-menu-item-underline-active` and the underlines are no longer spanning
the entire block, only the text content. Additionally you can modify the offset and thickness; and
`--navigation-underline-color` is now called `--gds-menu-item-underline-color-active`.

```scss
// BEFORE:
--menu-item-underline-display: none;
--navigation-underline-color: var(--color-black);

// AFTER:
--gds-menu-item-underline-active: underline;
--gds-menu-item-underline-thickness-active: 3px;
--gds-menu-item-underline-color-active: currentColor;
--gds-menu-item-underline-offset-active: var(--spacing-xxs);
```

**Menu variables renamed**

All `--menu-*` variables have been prefixed with `--gds-menu` instead.

```scss
// BEFORE:
--menu-text-align: left;
--menu-item-background-color-active: var(--background-color-primary);

// AFTER:
--gds-menu-text-align: left;
--gds-menu-item-background-color-active: var(--background-color-primary);
```

**Markup change for ´<gds-menu-nested-item>`**

Using `<gds-menu-nested-item>` should now wrap the link content in `<gds-menu-item>`.

```diff
 <gds-menu>
   <gds-menu-item-nested slot="item" submenu-icon="❯">
     <a slot="link" href="#first">
-      First item
+      <gds-menu-item>First item</gds-menu-item>
     </a>
   </gds-menu-item-nested>
 </gds-menu>
```

With the above change, the `--gds-menu-item-nested-a-padding` variable has now
been removed and the padding is instead styled from the `<gds-menu-item>`
component.

```scss
// REMOVED:
--gds-menu-item-nested-a-padding: var(--spacing-xs) 0;
```

**Navigation gutters**

Durings this refactoring the fixed menu height that used to be set
`var(--spacing-xxl)`, is now fluid and instead uses the following variables for
adjusting the padding on `<gds-menu-item>` depending on the direction of the
`<gds-menu>` component:

```scss
--gds-menu-item-padding-horizontal: var(--spacing-s) var(--spacing-s) calc(var(--spacing-s) - 0.15em) var(--spacing-s);
--gds-menu-item-padding-vertical: var(--spacing-s) var(--spacing-m) calc(var(--spacing-s) - 0.15em) var(--spacing-m);
```

This is likely to break some implementations or at least change the height of the navigation by a few pixels.

The navigation containers now supports `--navigation-padding` to consistently
set left/right padding. You most likely need to change some theme styles for
the right padding of the navigation as well as reduce the left padding for the
navigation logo `--navigation-logo-padding`. By default the
`--navigation-padding` sets the same values as before, making spacing identical
as it used to on both desktop and mobile. If you override the variable you
should consider the spacing both for desktop and for mobile.

```scss
// Before
--navigation-logo-padding: 0 0 0 var(--spacing-s);

// After
--navigation-logo-padding: 0;
```

**Navigation hamburger icon**

The navigations default mobile hamburger has now been changed to an animated
`<gds-hamburger>` component, if you applied color styling to this in your theme
you might need to make adjustments.

**Navigation menu item justification**

`<gds-menu>` used within a `<gds-navigation>` needs to specify
that the menu items should be centered to maintain the previous behavior
otherwise the menu will be aligned to the left.

Add this to your css:

```scss
// NEW VARIABLE:
--gds-menu-justify-content: center;
```

**`<gds-input-wrapper>` no longer using shadow-dom**

Due to accessibility issues and it not being possible to reference input fields
in a slot from a `<label>` inside a component, the `<gds-input-wrapper>` is now
using light-dom and scoped styles instead of shadow-dom. This could cause
high specificity global styles to pollute the component.

### Features

* **a11y:** make all components accessible ([b5b069c](https://github.com/generoi/genero-design-system/commit/b5b069c62b207ed1af69cef778bacb8540f14783))
* **build:** allow building from git ([e37e94c](https://github.com/generoi/genero-design-system/commit/e37e94cd33358b371ba32545b276cc0286384f25))
* **gds-hamburger:** add component ([3a290c4](https://github.com/generoi/genero-design-system/commit/3a290c4d803724c0ce96456568ca44c3d6490d8e))
* **gds-input-wrapper:** add placeholder color variable ([51a265b](https://github.com/generoi/genero-design-system/commit/51a265b7820fb0f32ef97e19db5928dd7aa77ffe))
* **gds-input-wrapper:** split styling into mixins so they can be used in wordpress ([ca44de5](https://github.com/generoi/genero-design-system/commit/ca44de589700814340ac2bac158bef9c139914e8))
* **gds-input-wrapper:** style select inputs on safari ([68d7923](https://github.com/generoi/genero-design-system/commit/68d7923c3ac4e44796bc4a128ada5e01e8d440be))
* **gds-link:** add full mode ([b0c68f7](https://github.com/generoi/genero-design-system/commit/b0c68f7ca140038c2c8e03d8b8b3fbaf4ead20ce))
* **gds-menu-item:** add variables for underline in all item states ([59c9960](https://github.com/generoi/genero-design-system/commit/59c9960cba6a1070c7ea14616e923a15331b942a))
* **gds-navigation:** add more css variables ([9145b40](https://github.com/generoi/genero-design-system/commit/9145b40cf8d668d51d74e6698afec949fc507cb3))
* **gds-paragraph:** add per size variables and deprecate base mixing ([4168276](https://github.com/generoi/genero-design-system/commit/416827646feb824e36fd0b60edf9c75db3304b90))
* **gds-search-form:** add component ([f89aec0](https://github.com/generoi/genero-design-system/commit/f89aec0e8fc47dd18f2da22d0ac8d96950a2e984))
* **gds-search-form:** add native mediaquery support ([2e41747](https://github.com/generoi/genero-design-system/commit/2e417475b3d03be269b2ce70c757c026b730a711))
* **gds-visually-hidden:** add component ([e9bf15b](https://github.com/generoi/genero-design-system/commit/e9bf15bf21efe954ede47915ab1356ad3bf7af28))
* **storybook:** Add support for story controls ([bd51bf8](https://github.com/generoi/genero-design-system/commit/bd51bf82576725d7c747ce774791f69b7660c2d2))
* **submenu:** add submenu and related components ([9408cad](https://github.com/generoi/genero-design-system/commit/9408cad892d5400262baf81fe4a757de3d0ce7b3))
* **submenu:** add support for mobile submenu ([544e8bd](https://github.com/generoi/genero-design-system/commit/544e8bd0f1303d2abc666cce59e383c376647b10))


### Bug Fixes

* **a11y:** respect reduced motion user preference ([ee5bfcf](https://github.com/generoi/genero-design-system/commit/ee5bfcf333af514d6c6e82d5729757a648ee361a))
* **audit:** update dependencies ([fe9b644](https://github.com/generoi/genero-design-system/commit/fe9b6440e780e5e7f5cc1e39e35c816bf263075a))
* **build:** allow building from git ([9765eb8](https://github.com/generoi/genero-design-system/commit/9765eb82b05ace47120fa8420f94f115b7782aee))
* **build:** incorrect types property set in package.json ([8d77ec9](https://github.com/generoi/genero-design-system/commit/8d77ec9922001feec4c177f5294666babc2fc77f))
* **gds-hint:** fix overflow in safari ([36bc0b7](https://github.com/generoi/genero-design-system/commit/36bc0b77e201ef61b740e7fa55ce0ed5e36b1d27))
* **gds-navigation:** escape doesnt close mobile navigation ([2ea7ba4](https://github.com/generoi/genero-design-system/commit/2ea7ba4645d2f7c8b8726d70c1caa83c36f105dc))
* **gds-search-form:** add color variable for label before focused ([e142ec7](https://github.com/generoi/genero-design-system/commit/e142ec7166289c0a4090d786fbfa7a14d6a32176))
* **gds-search-form:** mobile safari overflow ([0fa50bf](https://github.com/generoi/genero-design-system/commit/0fa50bf21cf751680a936b2cdb54c94a42bba5b3))
* **gds-search-form:** properly center button icon ([acf2223](https://github.com/generoi/genero-design-system/commit/acf2223f48a04567965e987af4f4b3311a98de47))
* spacing errors and support custom font weight in search form ([c42c566](https://github.com/generoi/genero-design-system/commit/c42c5666a6dcb540763b0cf95b0fd9464dc4a131))
* **safari:** use all:unset to reset button and input styling ([0671da8](https://github.com/generoi/genero-design-system/commit/0671da8d9115ee1c951b04b884a5cf28c3c05bd8))


* **variables:** prefix all variables with gds ([f6f2dca](https://github.com/generoi/genero-design-system/commit/f6f2dcac4c461915da26773d3a1e70121fd1bda3))
* **variables:** remove confusing duplicate color variables ([8d9df14](https://github.com/generoi/genero-design-system/commit/8d9df14a402ac4eeaa2ef5c8c85ee708d980c7c9))
* **variables:** rename xxs/xxl etc to use numeric names like 2xs/2xl ([9ef0886](https://github.com/generoi/genero-design-system/commit/9ef08869a727ab3c1c8ff746348e0c87b9965cc7))

## [3.17.0](https://github.com/generoi/genero-design-system/compare/v3.16.0...v3.17.0) (2021-03-26)


### Features

* **submenu:** add support for mobile submenu ([544e8bd](https://github.com/generoi/genero-design-system/commit/544e8bd0f1303d2abc666cce59e383c376647b10))

## [3.16.0](https://github.com/generoi/genero-design-system/compare/v3.15.0...v3.16.0) (2021-03-12)


### Features

* **storybook:** Add support for story controls ([bd51bf8](https://github.com/generoi/genero-design-system/commit/bd51bf82576725d7c747ce774791f69b7660c2d2))
* **submenu:** add submenu and related components ([9408cad](https://github.com/generoi/genero-design-system/commit/9408cad892d5400262baf81fe4a757de3d0ce7b3))


### Bug Fixes

* **audit:** update dependencies ([fe9b644](https://github.com/generoi/genero-design-system/commit/fe9b6440e780e5e7f5cc1e39e35c816bf263075a))

## [3.15.0](https://github.com/generoi/genero-design-system/compare/v3.14.0...v3.15.0) (2021-02-12)

## [3.14.0](https://github.com/generoi/genero-design-system/compare/v3.13.1...v3.14.0) (2021-02-12)


### Features

* **gds-navigation:** add more css variables ([9145b40](https://github.com/generoi/genero-design-system/commit/9145b40cf8d668d51d74e6698afec949fc507cb3))

### [3.13.1](https://github.com/generoi/genero-design-system/compare/v3.13.0...v3.13.1) (2021-02-02)


### Bug Fixes

* **audit:** update commit lint and standard version ([5cda963](https://github.com/generoi/genero-design-system/commit/5cda963ffa4722a438793d109f5f465133b9a54f))
* **audit:** update dependencies ([67e9e06](https://github.com/generoi/genero-design-system/commit/67e9e060da8500cc1a649cacde2f28806b4e7910))

## [3.13.0](https://github.com/generoi/genero-design-system/compare/v3.12.0...v3.13.0) (2021-02-02)


### Features

* **gds-media-card:** add --media card height variable ([30deaef](https://github.com/generoi/genero-design-system/commit/30deaefabcbf46ee10546ab4ba98db4529ca9c69))
* **gsd-media-card:** add --media-card-height variable ([75219e2](https://github.com/generoi/genero-design-system/commit/75219e22fbeb268593ae072457964d59f4a45274))

## [3.12.0](https://github.com/generoi/genero-design-system/compare/v3.11.0...v3.12.0) (2021-01-26)

## [3.11.0](https://github.com/generoi/genero-design-system/compare/v2.0.0...v3.11.0) (2021-01-13)


### Features

* **gds-accordion:** add css variables for plain text accordion ([aad6ffd](https://github.com/generoi/genero-design-system/commit/aad6ffd33f9671233f4a301d5fe39d5e447504f7))
* **gds-accordion:** can use `expanded` attribute to control expanding ([51672cd](https://github.com/generoi/genero-design-system/commit/51672cdfef151332d10b0591852e3d1100307b74))
* **gds-button:** add :active background color and image variables ([d2ca3fa](https://github.com/generoi/genero-design-system/commit/d2ca3fa34ed152ab58f60723d1905868dc1d0f66))
* **gds-button:** disabled button won't trigger click events ([c7b992d](https://github.com/generoi/genero-design-system/commit/c7b992d64943726114ba35345d55b2783d88ca06))
* **gds-google-maps:** add Google Maps wrapper component ([34f2f3d](https://github.com/generoi/genero-design-system/commit/34f2f3d4290b18b1a75c46f9018a48dead06e423))
* **gds-google-maps:** can pass options to addMarker ([2a87e35](https://github.com/generoi/genero-design-system/commit/2a87e35f335d9d808e3794c07d744e8392345c81))
* **gds-heading:** can define top and bottom margins ([d350172](https://github.com/generoi/genero-design-system/commit/d35017273cfe95608886eff04a0b49434bfbe23c))
* **gds-input-wrapper:** add styles also for select element ([34c3661](https://github.com/generoi/genero-design-system/commit/34c36616031a0990a9a5a46d99eb77745e1bd908))
* **gds-label:** add variables for line-height ([9ba3446](https://github.com/generoi/genero-design-system/commit/9ba3446f1497e5a2510b26cf36176cb58d5a884d))
* **gds-media-card:** add --media-card-display variable ([9877e2d](https://github.com/generoi/genero-design-system/commit/9877e2d7ad10df98b165d1f012bfb1df1ab522f1))
* **gds-media-card:** add --media-card-media-padding variable ([7dd87dc](https://github.com/generoi/genero-design-system/commit/7dd87dce3c7558f607edf3a1ec53ff3e1ee75301))
* **gds-media-card:** add --media-card-width variable ([1d1b411](https://github.com/generoi/genero-design-system/commit/1d1b41174ce87f4107c83ffc95731b401f75b10f))
* **gds-navigation:** add method to close menu ([57afc5e](https://github.com/generoi/genero-design-system/commit/57afc5e1a692be44a8808d90c05ea1415d5a17f2))
* **gds-slider:** add gds-slider component that encapsulates input range ([8f126cc](https://github.com/generoi/genero-design-system/commit/8f126cc7e97b08ef3ced7c404947522e22388cc2))
* **gds-youtube-player:** displays an iframe based youtube player ([6bb6140](https://github.com/generoi/genero-design-system/commit/6bb614086dde55879f3adcae79c4a0c2eb73d80e))


### Bug Fixes

* **gds-card:** --card-width, --card-max-width now define correct props ([a1d6c98](https://github.com/generoi/genero-design-system/commit/a1d6c98d2ea1aa2339776ae1884bcb9c9956fef9))
* **gds-google-maps:** don't load Google Maps SDK if it's already loaded ([8959954](https://github.com/generoi/genero-design-system/commit/8959954e04c5936315b3e5107ae77835b7e9d64f))
* **gds-navigation:** hide before hydration ([666c299](https://github.com/generoi/genero-design-system/commit/666c299dd723e3c6c69e12fac21bfd93442dd465))

## [3.10.0](https://github.com/generoi/genero-design-system/compare/v3.9.0...v3.10.0) (2021-01-05)


### Features

* **gds-media-card:** add --media-card-width variable ([1d1b411](https://github.com/generoi/genero-design-system/commit/1d1b41174ce87f4107c83ffc95731b401f75b10f))


## [3.9.0](https://github.com/generoi/genero-design-system/compare/v3.8.0...v3.9.0) (2020-12-02)


### Features

* **gds-button:** add :active background color and image variables ([d2ca3fa](https://github.com/generoi/genero-design-system/commit/d2ca3fa34ed152ab58f60723d1905868dc1d0f66))

## [3.8.0](https://github.com/generoi/genero-design-system/compare/v3.7.0...v3.8.0) (2020-12-02)


### Features

* **gds-media-card:** add --media-card-display variable ([9877e2d](https://github.com/generoi/genero-design-system/commit/9877e2d7ad10df98b165d1f012bfb1df1ab522f1))

## [3.7.0](https://github.com/generoi/genero-design-system/compare/v3.6.0...v3.7.0) (2020-11-28)


### Features

* **gds-label:** add variables for line-height ([9ba3446](https://github.com/generoi/genero-design-system/commit/9ba3446f1497e5a2510b26cf36176cb58d5a884d))

## [3.6.0](https://github.com/generoi/genero-design-system/compare/v3.5.0...v3.6.0) (2020-11-26)


### Features

* **gds-accordion:** can use `expanded` attribute to control expanding ([51672cd](https://github.com/generoi/genero-design-system/commit/51672cdfef151332d10b0591852e3d1100307b74))

## [3.5.0](https://github.com/generoi/genero-design-system/compare/v3.4.1...v3.5.0) (2020-11-25)


### Features

* **gds-slider:** add gds-slider component that encapsulates input range ([8f126cc](https://github.com/generoi/genero-design-system/commit/8f126cc7e97b08ef3ced7c404947522e22388cc2))

### [3.4.1](https://github.com/generoi/genero-design-system/compare/v3.4.0...v3.4.1) (2020-11-20)


### Bug Fixes

* **gds-google-maps:** don't load Google Maps SDK if it's already loaded ([8959954](https://github.com/generoi/genero-design-system/commit/8959954e04c5936315b3e5107ae77835b7e9d64f))

## [3.4.0](https://github.com/generoi/genero-design-system/compare/v3.3.1...v3.4.0) (2020-11-20)


### Features

* **gds-input-wrapper:** add styles also for select element ([34c3661](https://github.com/generoi/genero-design-system/commit/34c36616031a0990a9a5a46d99eb77745e1bd908))

### [3.3.1](https://github.com/generoi/genero-design-system/compare/v3.3.0...v3.3.1) (2020-11-11)


### Bug Fixes

* **gds-navigation:** hide before hydration ([666c299](https://github.com/generoi/genero-design-system/commit/666c299dd723e3c6c69e12fac21bfd93442dd465))

## [3.3.0](https://github.com/generoi/genero-design-system/compare/v3.2.0...v3.3.0) (2020-11-06)


### Features

* **gds-navigation:** add method to close menu ([57afc5e](https://github.com/generoi/genero-design-system/commit/57afc5e1a692be44a8808d90c05ea1415d5a17f2))

## [3.2.0](https://github.com/generoi/genero-design-system/compare/v3.1.0...v3.2.0) (2020-11-06)


### Features

* **gds-google-maps:** can pass options to addMarker ([2a87e35](https://github.com/generoi/genero-design-system/commit/2a87e35f335d9d808e3794c07d744e8392345c81))

## [3.1.0](https://github.com/generoi/genero-design-system/compare/v3.0.0...v3.1.0) (2020-11-04)


### Features

* **gds-button:** disabled button won't trigger click events ([c7b992d](https://github.com/generoi/genero-design-system/commit/c7b992d64943726114ba35345d55b2783d88ca06))

## [3.0.0](https://github.com/generoi/genero-design-system/compare/v2.3.0...v3.0.0) (2020-10-29)

--card-width, --card-max-width change could potentially be a breaking change for some projects since they might have relied on --card-width actually defining max-width.

Maybe in the future we should try to postpone minor breaking changes to limit major version numbers for bigger changes.

### Features

* **gds-heading:** can define top and bottom margins ([d350172](https://github.com/generoi/genero-design-system/commit/d35017273cfe95608886eff04a0b49434bfbe23c))


### Bug Fixes

* **gds-card:** --card-width, --card-max-width now define correct props ([a1d6c98](https://github.com/generoi/genero-design-system/commit/a1d6c98d2ea1aa2339776ae1884bcb9c9956fef9))

## [2.3.0](https://github.com/generoi/genero-design-system/compare/v2.2.0...v2.3.0) (2020-10-27)


### Features

* **gds-google-maps:** add Google Maps wrapper component ([34f2f3d](https://github.com/generoi/genero-design-system/commit/34f2f3d4290b18b1a75c46f9018a48dead06e423))

## [2.2.0](https://github.com/generoi/genero-design-system/compare/v2.1.0...v2.2.0) (2020-10-22)


### Features

* **gds-youtube-player:** displays an iframe based youtube player ([6bb6140](https://github.com/generoi/genero-design-system/commit/6bb614086dde55879f3adcae79c4a0c2eb73d80e))

## [2.1.0](https://github.com/generoi/genero-design-system/compare/v2.0.0...v2.1.0) (2020-10-22)


### Features

* **gds-accordion:** add css variables for plain text accordion ([aad6ffd](https://github.com/generoi/genero-design-system/commit/aad6ffd33f9671233f4a301d5fe39d5e447504f7))

## [2.0.0](https://github.com/generoi/genero-design-system/compare/v1.1.0...v2.0.0) (2020-10-19)

This version change should not require any modifications to the code, however, this will remove default support for older browsers (IE11, Edge 16-18, Safari 10, and ES5). If you need support for this, you need to follow these instructions:
https://github.com/ionic-team/stencil/blob/master/CHANGELOG.md#-200-2020-08-31

Also if you find any problems with loading the `.mjs` file, then look into this:
https://github.com/ionic-team/stencil/blob/master/CHANGELOG.md#dist-packagejson

### Features

* **stencil:** update to version 2 ([e5f50d1](https://github.com/generoi/genero-design-system/commit/e5f50d133814fd78ca65f09ecacdeb192f1ddd91)), closes [/github.com/ionic-team/stencil/blob/master/CHANGELOG.md#-200-2020-08-31](https://github.com/generoi//github.com/ionic-team/stencil/blob/master/CHANGELOG.md/issues/-200-2020-08-31)

## [1.1.0](https://github.com/generoi/genero-design-system/compare/v1.0.0...v1.1.0) (2020-10-14)

From version 1 onwards `semver` should be used as intended.

### Features

* **heading:** add size specific font-family override ([3648164](https://github.com/generoi/genero-design-system/commit/3648164adacba09de3fe98d6f800ecb6c711034e))
* **heading:** reorganize heading and paragraph css variables ([924f9c8](https://github.com/generoi/genero-design-system/commit/924f9c851a52d6a5e968f22a13099a7079fbdefa))
* **input-wrapper:** use host element so it can be styled from outside ([a59117d](https://github.com/generoi/genero-design-system/commit/a59117d76e1b390b1bf962f2fc200c67c18f54b8))

## [1.0.0](https://github.com/generoi/genero-design-system/compare/v0.41.0...v1.0.0) (2020-10-14)


### Features

* **hint:** add gds-hint ([888c61c](https://github.com/generoi/genero-design-system/commit/888c61c86c8ed0baeeb0707eb050ffb0eeefa456))
* **input-wrapper:** add gds-input-wrapper ([7e25654](https://github.com/generoi/genero-design-system/commit/7e25654f30042c1c41b80684f3c548c0893a49c3))
* **paragraph:** add xs size to cover special cases with smaller text ([01818a6](https://github.com/generoi/genero-design-system/commit/01818a6a6d7876807f0721840613fd21b93c4edc))
* **text:** add gds-text ([eb55409](https://github.com/generoi/genero-design-system/commit/eb55409b15b7f8262d774bcd0938114471721f3f))

## [0.41.0](https://github.com/generoi/genero-design-system/compare/v0.40.0...v0.41.0) (2020-10-08)


### Features

* **card:** add --card-box-shadow-active css variable ([13577c2](https://github.com/generoi/genero-design-system/commit/13577c249101eff743e24ff77d2ada887a271e95))


### Bug Fixes

* **tag-group:** fix tag-group mobile gutters ([826004d](https://github.com/generoi/genero-design-system/commit/826004d1522e25bc913c21c32520ce0ddd961884))

## [0.40.0](https://github.com/generoi/genero-design-system/compare/v0.39.0...v0.40.0) (2020-10-05)


### Bug Fixes

* **card:** add transition for box-shadow hover ([a28df8f](https://github.com/generoi/genero-design-system/commit/a28df8f856a587fd49f3f33eb08f713001e899d4))

## [0.39.0](https://github.com/generoi/genero-design-system/compare/v0.35.0...v0.39.0) (2020-10-03)


### Features

* **accordion:** add gds-accordion ([1c1eee0](https://github.com/generoi/genero-design-system/commit/1c1eee0c8d971ee9ba36d83e78fba6a3fc5c2384))
* **card:** add --card-box-shadow-hover css variable ([fa9d2a5](https://github.com/generoi/genero-design-system/commit/fa9d2a5d04ee3ef2e3a8efc89e0bb39c66714833))
* **icon:** better default value for hover ([e1dbce2](https://github.com/generoi/genero-design-system/commit/e1dbce256c31a2042b702e20edc3010e209780c2))
* **label:** add --label-text-transform css variable ([5e1be19](https://github.com/generoi/genero-design-system/commit/5e1be19e106b052711570de4e025d0f8e6ac8b3b))
* **menu, menu-item:** add 4 css variables ([ced896a](https://github.com/generoi/genero-design-system/commit/ced896a89b24dcdc000f6d1e88444f9c2d0020e7))
* **navigation:** add styling customizations especially for mobile ([9c0b02a](https://github.com/generoi/genero-design-system/commit/9c0b02abe4569ae1c89956b19e3495824bc61085))
* **navigation:** can slot anything for the mobile hamburger icon ([db08d1d](https://github.com/generoi/genero-design-system/commit/db08d1dec3be221c7725dfffb1910868cf357adc))
* **storybook:** rename component classifications ([4df47be](https://github.com/generoi/genero-design-system/commit/4df47be2194c52fe0504681b493b39d1ec96800c))

## [0.38.0](https://github.com/generoi/genero-design-system/compare/v0.37.0...v0.38.0) (2020-09-24)


### Features

* **accordion:** add gds-accordion ([1c1eee0](https://github.com/generoi/genero-design-system/commit/1c1eee0c8d971ee9ba36d83e78fba6a3fc5c2384))
* **storybook:** rename component classifications ([4df47be](https://github.com/generoi/genero-design-system/commit/4df47be2194c52fe0504681b493b39d1ec96800c))

## [0.37.0](https://github.com/generoi/genero-design-system/compare/v0.36.0...v0.37.0) (2020-09-18)


### Features

* **label:** add --label-text-transform css variable ([5e1be19](https://github.com/generoi/genero-design-system/commit/5e1be19e106b052711570de4e025d0f8e6ac8b3b))
* **menu, menu-item:** add 4 css variables ([ced896a](https://github.com/generoi/genero-design-system/commit/ced896a89b24dcdc000f6d1e88444f9c2d0020e7))
* **navigation:** add styling customizations especially for mobile ([9c0b02a](https://github.com/generoi/genero-design-system/commit/9c0b02abe4569ae1c89956b19e3495824bc61085))

## [0.36.0](https://github.com/generoi/genero-design-system/compare/v0.35.0...v0.36.0) (2020-09-18)


### Features

* **icon:** better default value for hover ([e1dbce2](https://github.com/generoi/genero-design-system/commit/e1dbce256c31a2042b702e20edc3010e209780c2))
* **navigation:** can slot anything for the mobile hamburger icon ([db08d1d](https://github.com/generoi/genero-design-system/commit/db08d1dec3be221c7725dfffb1910868cf357adc))

## [0.35.0](https://github.com/generoi/genero-design-system/compare/v0.34.0...v0.35.0) (2020-09-15)


### Bug Fixes

* **gds-card:** remove align-items ([fd2ec27](https://github.com/generoi/genero-design-system/commit/fd2ec2788d577c7d52bc9a08db33519e46db963f))

## [0.34.0](https://github.com/generoi/genero-design-system/compare/v0.33.0...v0.34.0) (2020-09-15)


### Features

* add variable --card-text-align ([9ef974b](https://github.com/generoi/genero-design-system/commit/9ef974bcb7c39b48745e36f629e71559256e0ac3))

## [0.33.0](https://github.com/generoi/genero-design-system/compare/v0.30.0...v0.33.0) (2020-09-15)


### Features

* **button:** don't render icon slots without icons ([3279ba2](https://github.com/generoi/genero-design-system/commit/3279ba2af609a4fefb62a55da01ed27726b5eb34))
* **icon:** add Font Awesome icons as gds-icon ([5c84122](https://github.com/generoi/genero-design-system/commit/5c84122d26756ac5b9d536289ae9f0413f6a270f))


### Bug Fixes

* **button, text-button:** slotted icons not rendering ([b1382c1](https://github.com/generoi/genero-design-system/commit/b1382c18caa97faa85af06d6152e8eb9d2cee5cc))

## [0.32.0](https://github.com/generoi/genero-design-system/compare/v0.31.0...v0.32.0) (2020-09-14)


### Features

* **icon:** add Font Awesome icons as gds-icon ([5c84122](https://github.com/generoi/genero-design-system/commit/5c84122d26756ac5b9d536289ae9f0413f6a270f))


### Bug Fixes

* **button, text-button:** slotted icons not rendering ([b1382c1](https://github.com/generoi/genero-design-system/commit/b1382c18caa97faa85af06d6152e8eb9d2cee5cc))

## [0.31.0](https://github.com/generoi/genero-design-system/compare/v0.30.0...v0.31.0) (2020-09-11)


### Features

* **button:** don't render icon slots without icons ([3279ba2](https://github.com/generoi/genero-design-system/commit/3279ba2af609a4fefb62a55da01ed27726b5eb34))

### [0.30.1](https://github.com/generoi/genero-design-system/compare/v0.30.0...v0.30.1) (2020-09-02)

## [0.30.0](https://github.com/generoi/genero-design-system/compare/v0.29.0...v0.30.0) (2020-09-02)

## [0.29.0](https://github.com/generoi/genero-design-system/compare/v0.27.0...v0.29.0) (2020-09-02)


### Features

* add rel attribute for nofollow etc ([dcf755d](https://github.com/generoi/genero-design-system/commit/dcf755dd41dd6ebfdb314a29f09124b3231c6c7a))


### Bug Fixes

* **link:** host element should also be block when set ([61c2b96](https://github.com/generoi/genero-design-system/commit/61c2b9610a7bbd20c65dd34d0e262195ac40cc33))
* **media-card:** support percentage card heights ([466c7d7](https://github.com/generoi/genero-design-system/commit/466c7d7f8c72320bc1bfafd3c4319cde9a1b4308))

## [0.28.0](https://github.com/generoi/genero-design-system/compare/v0.27.0...v0.28.0) (2020-09-01)


### Bug Fixes

* **link:** host element should also be block when set ([61c2b96](https://github.com/generoi/genero-design-system/commit/61c2b9610a7bbd20c65dd34d0e262195ac40cc33))
* **media-card:** support percentage card heights ([466c7d7](https://github.com/generoi/genero-design-system/commit/466c7d7f8c72320bc1bfafd3c4319cde9a1b4308))

## [0.27.0](https://github.com/generoi/genero-design-system/compare/v0.26.0...v0.27.0) (2020-09-01)


### Features

* **media-card:** use blur and background color blend mode ([240431f](https://github.com/generoi/genero-design-system/commit/240431f08be0cc6b71a9b9268a6ee0659bbd21e1))


### Bug Fixes

* **media-card:** superimposed image side alignment support ([e5e8dde](https://github.com/generoi/genero-design-system/commit/e5e8ddebdcf2659925e0b8083383f228622a7df7))

## [0.26.0](https://github.com/generoi/genero-design-system/compare/v0.25.0...v0.26.0) (2020-08-28)


### Features

* **gds-button:** support icon slots ([331e640](https://github.com/generoi/genero-design-system/commit/331e640b52af8bbdc455530cfd5e41d58c10de5d))
* **gds-text-button:** add hover effect ([26a8668](https://github.com/generoi/genero-design-system/commit/26a86683305c1ec7b207a49a0f60457d3c4b5058))
* **gds-text-button:** split button text variation to own component ([6e8062c](https://github.com/generoi/genero-design-system/commit/6e8062ca7201f500c6cdfc1a75e29dc7d8c51040))
* **heading:** add xs size ([8e55314](https://github.com/generoi/genero-design-system/commit/8e553141c91bfa2d330853a34fafe6d9ede37704))
* **label:** add xl size ([785199a](https://github.com/generoi/genero-design-system/commit/785199a7430d93e416b7ae168d0ce57d06bdb018))
* **mobile:** fix basic mobile support ([eaed152](https://github.com/generoi/genero-design-system/commit/eaed1521d736e2eb3023ccaacdd4fe7825975d4c))
* **tag-group:** add tag group component ([923d335](https://github.com/generoi/genero-design-system/commit/923d3357f0db8921fe390527f310a3f0d5cca6d5))


### Bug Fixes

* **button:** text-button variation padding and font weight ([ba0f4e2](https://github.com/generoi/genero-design-system/commit/ba0f4e21847b6545a834b043211ed8002c1fc2e1))
* **heading:** remove top margin when first block ([337e4e2](https://github.com/generoi/genero-design-system/commit/337e4e2097d64317d0165c264ef74e5c63e68dec))
* **media-card:** apply reduced paragraph spacing in content slot ([ead79cc](https://github.com/generoi/genero-design-system/commit/ead79cc6f5d910a8e6bcccb160810cc2c5df7736))
* **media-card:** fix vertical spacing for both slots and properties ([10ddd13](https://github.com/generoi/genero-design-system/commit/10ddd13862f4c6bfea797352222d019959bef669))
* **media-card:** lintfix ([6dec26b](https://github.com/generoi/genero-design-system/commit/6dec26b19cbf67c85be333d9158bdf479ac3b867))
* **paragraph:** adjascent block margins should overflow eachother ([7790422](https://github.com/generoi/genero-design-system/commit/7790422227295a55e3e23188e30323c3ed107042))
* **paragraph:** composed paragraph blocks dont have correct size ([2e352bf](https://github.com/generoi/genero-design-system/commit/2e352bfc8cda70b36ffd2769eae3a1766f8aebc7))
* **tag:** let host behave like inline-block to use margins ([c87a7ac](https://github.com/generoi/genero-design-system/commit/c87a7ac0e2d32a8972a6237a452d62d45fbb01bc))
* **vars:** use color palette for variables and fix logo grid item width ([2f555d2](https://github.com/generoi/genero-design-system/commit/2f555d266e6dd41ce5af8d4895a98cff1dd95e75))

## [0.25.0](https://github.com/generoi/genero-design-system/compare/v0.24.0...v0.25.0) (2020-08-27)


### Features

* **gds-media-card:** support overlay color and blur effect ([48a00ce](https://github.com/generoi/genero-design-system/commit/48a00cecd53473d55340dc8eef18a81e0473d954))

## [0.24.0](https://github.com/generoi/genero-design-system/compare/v0.6.0...v0.24.0) (2020-08-26)


### Features

* add css variables for brand colors ([a3f72c0](https://github.com/generoi/genero-design-system/commit/a3f72c075d44a4ee6cc9604459ffe446e5e88848))
* add navigation and menu ([aa11b3b](https://github.com/generoi/genero-design-system/commit/aa11b3be7a8f01b77b1324e75d171a0f9a7cc615))
* components crucial to SEO render to Light DOM ([5cffcc3](https://github.com/generoi/genero-design-system/commit/5cffcc32f17f50d6f10e4ec7067b720d5f03bae5))
* customize navigation link colors ([3235e09](https://github.com/generoi/genero-design-system/commit/3235e091cf680886b675129bf44e76c7e752df6b))
* make Navigation more WP friendly ([8230954](https://github.com/generoi/genero-design-system/commit/8230954f380b5456d09ed87f53b0c8dee671c983))
* modified gds-navigation to be SEO friendly ([6b23547](https://github.com/generoi/genero-design-system/commit/6b235476cc778635af32bd1e5cf8667b7a27c5bd))
* more css variables for buttons and labels ([abd8c99](https://github.com/generoi/genero-design-system/commit/abd8c99c24b82efbd7439e196817cbbd4b819b6c))
* **gds-navigation:** add transparent attribute ([3b0e80b](https://github.com/generoi/genero-design-system/commit/3b0e80b5f3accd196b824c83c7d80e092eedd8ca))
* remove global box-sizing rules ([60f92df](https://github.com/generoi/genero-design-system/commit/60f92dfcfdb30bf65bb1fb225bf9be7578ade5d8))
* **colors:** remove gds prefix from color variables ([a9a8f71](https://github.com/generoi/genero-design-system/commit/a9a8f71913e08ab2c2ef9191a2c6d59993dd0524))
* **gds-button:** add outline, border, and background variables for default/hover/active ([3df9f7f](https://github.com/generoi/genero-design-system/commit/3df9f7f211c3363cb747f862e3e84059378bac58))
* **gds-card:** add customization via css variables ([68aa8cb](https://github.com/generoi/genero-design-system/commit/68aa8cb341ac9b3f4bf268a991520e193c7d6b11))
* **gds-heading:** add letter-spacing and text-transform variables ([7aa2a30](https://github.com/generoi/genero-design-system/commit/7aa2a309fbb729dbdfc85bd6ea3e625d10ae1636))
* **gds-heading:** add more css variables for headings ([a04cc41](https://github.com/generoi/genero-design-system/commit/a04cc4134976217f1b3cb895f71016c56c5238c1))
* **gds-media-card:** add --gds-media-card-media-height ([b0027a8](https://github.com/generoi/genero-design-system/commit/b0027a8b5d1e50df2162bca9b50739fa5f9e98f8))
* **gds-media-card:** add free form content slot ([e274a86](https://github.com/generoi/genero-design-system/commit/e274a86582c249226f363703a653e6b994a4d83c))
* **gds-media-card:** add object-fit variable for card image ([3822afb](https://github.com/generoi/genero-design-system/commit/3822afb9e0f424831402445b203fdf5b3449ba74))
* **gds-media-card:** add superimposed image ([f7778ac](https://github.com/generoi/genero-design-system/commit/f7778ac58b3905ecda33751c2e7967fbde354cc0))
* **gds-navigation:** minor tweaks spacing and transparent color ([d336aac](https://github.com/generoi/genero-design-system/commit/d336aacf6aec67cda8d29d5e8167ce3eb50b89ee))
* **gds-tag:** add border and padding variables ([73571b1](https://github.com/generoi/genero-design-system/commit/73571b13e641b35403eac4c39ef705425956a33c))
* **gds-tag:** add line-height variable ([6699f48](https://github.com/generoi/genero-design-system/commit/6699f4818f7d35995fbd0c34067e039bcfc8b61c))
* **logo-grid:** support customizing the grid through variables ([fa44a0e](https://github.com/generoi/genero-design-system/commit/fa44a0ef44c0de31a4fde33688e9ac94df6d4806))
* tag can define colors and border via css variables ([6881b74](https://github.com/generoi/genero-design-system/commit/6881b74243513d0993de4c4d16273bcde647ab2e))
* wip ([099a5e6](https://github.com/generoi/genero-design-system/commit/099a5e6ee438b77969006ca6deb89806176f60ce))
* **storybook:** update to stable version 6 ([1498775](https://github.com/generoi/genero-design-system/commit/1498775a2f6842fe49fb9090a8128e96d387c3a9))


### Bug Fixes

* audit warnings ([16ba942](https://github.com/generoi/genero-design-system/commit/16ba9428ef7df35db3fb5e561139e6dc7a44c749))
* make button more WP friendly ([a24adb3](https://github.com/generoi/genero-design-system/commit/a24adb370bc4f3ede12f33a63610119592fd0ab9))
* navigation and button tweaks for WP ([5d4b4ed](https://github.com/generoi/genero-design-system/commit/5d4b4ed783fbf63af776af4383b6a90c21ab3e4b))
* some styling issues with menu and labels ([d35b1f9](https://github.com/generoi/genero-design-system/commit/d35b1f971ea1e7cedb02578f4d82cf68068887c9))
* somehow the `stencil build` is broken when using --dev flag ([286fa05](https://github.com/generoi/genero-design-system/commit/286fa0554993e78a859fc8d70b5798249a9fa534))
* **gds-button:** broken font-size ([aff5276](https://github.com/generoi/genero-design-system/commit/aff5276d1295c9989ce9489b682416b4d7c1816a))
* **gds-button:** remove direct height definitions ([eed0342](https://github.com/generoi/genero-design-system/commit/eed0342f2856633f41218862dea13aa34fffad1d))
* **gds-media-card:** remove unnecessary margin ([db1e018](https://github.com/generoi/genero-design-system/commit/db1e0186de10fc6abd06a0794a0f1b7e9e429726))
* **gds-media-card:** rename superimposed attributes ([f69a673](https://github.com/generoi/genero-design-system/commit/f69a6737e583f681638c11f5b49d90915688acff))

### [0.23.1](https://github.com/generoi/genero-design-system/compare/v0.23.0...v0.23.1) (2020-08-25)


### Features

* **gds-tag:** add line-height variable ([6699f48](https://github.com/generoi/genero-design-system/commit/6699f4818f7d35995fbd0c34067e039bcfc8b61c))

## [0.23.0](https://github.com/generoi/genero-design-system/compare/v0.22.0...v0.23.0) (2020-08-25)


### Features

* **gds-tag:** add border and padding variables ([73571b1](https://github.com/generoi/genero-design-system/commit/73571b13e641b35403eac4c39ef705425956a33c))

## [0.22.0](https://github.com/generoi/genero-design-system/compare/v0.21.0...v0.22.0) (2020-08-24)


### Features

* **gds-media-card:** add object-fit variable for card image ([3822afb](https://github.com/generoi/genero-design-system/commit/3822afb9e0f424831402445b203fdf5b3449ba74))

## [0.21.0](https://github.com/generoi/genero-design-system/compare/v0.20.0...v0.21.0) (2020-08-21)


### Bug Fixes

* **gds-media-card:** rename superimposed attributes ([f69a673](https://github.com/generoi/genero-design-system/commit/f69a6737e583f681638c11f5b49d90915688acff))

## [0.20.0](https://github.com/generoi/genero-design-system/compare/v0.19.0...v0.20.0) (2020-08-21)


### Features

* **gds-heading:** add letter-spacing and text-transform variables ([7aa2a30](https://github.com/generoi/genero-design-system/commit/7aa2a309fbb729dbdfc85bd6ea3e625d10ae1636))

## [0.19.0](https://github.com/generoi/genero-design-system/compare/v0.18.0...v0.19.0) (2020-08-20)


### Features

* **colors:** remove gds prefix from color variables ([5b15dca](https://github.com/generoi/genero-design-system/commit/5b15dcaebed0653a4ee68d7fcad21da51e97197e))
* **gds-card:** add customization via css variables ([68aa8cb](https://github.com/generoi/genero-design-system/commit/68aa8cb341ac9b3f4bf268a991520e193c7d6b11))
* add css variables for brand colors ([a3f72c0](https://github.com/generoi/genero-design-system/commit/a3f72c075d44a4ee6cc9604459ffe446e5e88848))

## [0.18.0](https://github.com/generoi/genero-design-system/compare/v0.17.2...v0.18.0) (2020-08-19)


### Features

* **gds-heading:** add more css variables for headings ([a04cc41](https://github.com/generoi/genero-design-system/commit/a04cc4134976217f1b3cb895f71016c56c5238c1))

### [0.17.2](https://github.com/generoi/genero-design-system/compare/v0.17.1...v0.17.2) (2020-08-17)


### Bug Fixes

* **gds-button:** broken font-size ([aff5276](https://github.com/generoi/genero-design-system/commit/aff5276d1295c9989ce9489b682416b4d7c1816a))

### [0.17.1](https://github.com/generoi/genero-design-system/compare/v0.17.0...v0.17.1) (2020-08-17)


### Bug Fixes

* **gds-button:** remove direct height definitions ([eed0342](https://github.com/generoi/genero-design-system/commit/eed0342f2856633f41218862dea13aa34fffad1d))

## [0.17.0](https://github.com/generoi/genero-design-system/compare/v0.16.1...v0.17.0) (2020-08-14)


### Features

* **gds-button:** add outline, border, and background variables for default/hover/active ([3df9f7f](https://github.com/generoi/genero-design-system/commit/3df9f7f211c3363cb747f862e3e84059378bac58))
* **storybook:** update to stable version 6 ([1498775](https://github.com/generoi/genero-design-system/commit/1498775a2f6842fe49fb9090a8128e96d387c3a9))

### [0.16.1](https://github.com/generoi/genero-design-system/compare/v0.16.0...v0.16.1) (2020-08-14)


### Features

* **gds-navigation:** minor tweaks spacing and transparent color ([d336aac](https://github.com/generoi/genero-design-system/commit/d336aacf6aec67cda8d29d5e8167ce3eb50b89ee))

## [0.16.0](https://github.com/generoi/genero-design-system/compare/v0.15.0...v0.16.0) (2020-08-14)


### Features

* **gds-navigation:** add transparent attribute ([3b0e80b](https://github.com/generoi/genero-design-system/commit/3b0e80b5f3accd196b824c83c7d80e092eedd8ca))

## [0.15.0](https://github.com/generoi/genero-design-system/compare/v0.14.1...v0.15.0) (2020-08-12)


### Features

* **gds-media-card:** add superimposed image ([f7778ac](https://github.com/generoi/genero-design-system/commit/f7778ac58b3905ecda33751c2e7967fbde354cc0))

### [0.14.1](https://github.com/generoi/genero-design-system/compare/v0.14.0...v0.14.1) (2020-08-11)


### Bug Fixes

* **gds-media-card:** remove unnecessary margin ([db1e018](https://github.com/generoi/genero-design-system/commit/db1e0186de10fc6abd06a0794a0f1b7e9e429726))

## [0.14.0](https://github.com/generoi/genero-design-system/compare/v0.13.0...v0.14.0) (2020-08-10)


### Features

* **gds-media-card:** add --gds-media-card-media-height ([b0027a8](https://github.com/generoi/genero-design-system/commit/b0027a8b5d1e50df2162bca9b50739fa5f9e98f8))

## [0.13.0](https://github.com/generoi/genero-design-system/compare/v0.12.0...v0.13.0) (2020-08-10)


### Features

* **gds-media-card:** add free form content slot ([e274a86](https://github.com/generoi/genero-design-system/commit/e274a86582c249226f363703a653e6b994a4d83c))

## [0.12.0](https://github.com/generoi/genero-design-system/compare/v0.11.4...v0.12.0) (2020-08-07)


### Features

* tag can define colors and border via css variables ([6881b74](https://github.com/generoi/genero-design-system/commit/6881b74243513d0993de4c4d16273bcde647ab2e))

### [0.11.4](https://github.com/generoi/genero-design-system/compare/v0.11.3...v0.11.4) (2020-08-07)


### Bug Fixes

* navigation and button tweaks for WP ([5d4b4ed](https://github.com/generoi/genero-design-system/commit/5d4b4ed783fbf63af776af4383b6a90c21ab3e4b))

### [0.11.3](https://github.com/generoi/genero-design-system/compare/v0.11.2...v0.11.3) (2020-08-06)


### Features

* customize navigation link colors ([3235e09](https://github.com/generoi/genero-design-system/commit/3235e091cf680886b675129bf44e76c7e752df6b))

### [0.11.2](https://github.com/generoi/genero-design-system/compare/v0.11.1...v0.11.2) (2020-08-06)


### Features

* make Navigation more WP friendly ([8230954](https://github.com/generoi/genero-design-system/commit/8230954f380b5456d09ed87f53b0c8dee671c983))


### Bug Fixes

* somehow the `stencil build` is broken when using --dev flag ([286fa05](https://github.com/generoi/genero-design-system/commit/286fa0554993e78a859fc8d70b5798249a9fa534))

### [0.11.1](https://github.com/generoi/genero-design-system/compare/v0.11.0...v0.11.1) (2020-08-06)


### Bug Fixes

* audit warnings ([16ba942](https://github.com/generoi/genero-design-system/commit/16ba9428ef7df35db3fb5e561139e6dc7a44c749))
* make button more WP friendly ([a24adb3](https://github.com/generoi/genero-design-system/commit/a24adb370bc4f3ede12f33a63610119592fd0ab9))

## [0.11.0](https://github.com/generoi/genero-design-system/compare/v0.10.0...v0.11.0) (2020-07-03)


### Features

* modified gds-navigation to be SEO friendly ([6b23547](https://github.com/generoi/genero-design-system/commit/6b235476cc778635af32bd1e5cf8667b7a27c5bd))

## [0.10.0](https://github.com/generoi/genero-design-system/compare/v0.9.0...v0.10.0) (2020-07-02)


### Features

* components crucial to SEO render to Light DOM ([5cffcc3](https://github.com/generoi/genero-design-system/commit/5cffcc32f17f50d6f10e4ec7067b720d5f03bae5))


### Bug Fixes

* some styling issues with menu and labels ([d35b1f9](https://github.com/generoi/genero-design-system/commit/d35b1f971ea1e7cedb02578f4d82cf68068887c9))

## [0.9.0](https://github.com/generoi/genero-design-system/compare/v0.8.0...v0.9.0) (2020-07-01)


### Features

* more css variables for buttons and labels ([abd8c99](https://github.com/generoi/genero-design-system/commit/abd8c99c24b82efbd7439e196817cbbd4b819b6c))

## [0.8.0](https://github.com/generoi/genero-design-system/compare/v0.7.0...v0.8.0) (2020-06-30)


### Features

* add navigation and menu ([aa11b3b](https://github.com/generoi/genero-design-system/commit/aa11b3be7a8f01b77b1324e75d171a0f9a7cc615))
* wip ([099a5e6](https://github.com/generoi/genero-design-system/commit/099a5e6ee438b77969006ca6deb89806176f60ce))

## [0.7.0](https://github.com/generoi/genero-design-system/compare/v0.6.0...v0.7.0) (2020-06-29)


### Features

* remove global box-sizing rules ([60f92df](https://github.com/generoi/genero-design-system/commit/60f92dfcfdb30bf65bb1fb225bf9be7578ade5d8))

## [0.6.0](https://github.com/generoi/genero-design-system/compare/v0.5.0...v0.6.0) (2020-06-28)


### Features

* use shadow dom for all components ([5e69386](https://github.com/generoi/genero-design-system/commit/5e693866a66c8efa0994437691154043e2c4e9a4))

## [0.5.0](https://github.com/generoi/genero-design-system/compare/v0.4.0...v0.5.0) (2020-06-27)


### Features

* add font character icon support for gds-button ([b26b57c](https://github.com/generoi/genero-design-system/commit/b26b57c29f5379f7119c483fdfd589d38c5b8290))


### Bug Fixes

* fonts not loading in github pages ([8da9a34](https://github.com/generoi/genero-design-system/commit/8da9a34bc7107d591263e7938630454a476b3ebf))

## [0.4.0](https://github.com/generoi/genero-design-system/compare/v0.2.0...v0.4.0) (2020-06-26)


### Features

* add gds-button ([5ff831c](https://github.com/generoi/genero-design-system/commit/5ff831cbae12a058184a88ef388bb908238b2f27))
* button tweaks ([d9e2bcb](https://github.com/generoi/genero-design-system/commit/d9e2bcb658cb9801090b1f8d288f4a4b14759d9d))


### Bug Fixes

* add forgotten file ([d509a29](https://github.com/generoi/genero-design-system/commit/d509a29a936a92a57cc6d074a8a5c5d9d734a06d))

## [0.3.0](https://github.com/generoi/genero-design-system/compare/v0.2.0...v0.3.0) (2020-06-26)


### Features

* add gds-button ([5ff831c](https://github.com/generoi/genero-design-system/commit/5ff831cbae12a058184a88ef388bb908238b2f27))

## [0.2.0](https://github.com/generoi/genero-design-system/compare/v0.0.2-beta.1...v0.2.0) (2020-06-26)


### Features

* add basic colors ([f4ae3ce](https://github.com/generoi/genero-design-system/commit/f4ae3ce6897a4f80784e42f032c9c6a51fec850a))
* add commitlint ([d05b827](https://github.com/generoi/genero-design-system/commit/d05b827cc4a316d21ec6615c5b4f991c868a78a8))
* add gds-body and proposal for variables ([5e7e2a5](https://github.com/generoi/genero-design-system/commit/5e7e2a51176fe335ae5a718c82a40cf99129d5f2))
* add gds-heading component ([88fb6cc](https://github.com/generoi/genero-design-system/commit/88fb6cc115f72fbb4566bfac08bc4d71b6b8888b))
* add gds-label component ([3724f96](https://github.com/generoi/genero-design-system/commit/3724f964aabdc24bee8c40795705d61614946ac5))
* add gds-link component ([fa3fe4c](https://github.com/generoi/genero-design-system/commit/fa3fe4c942c9919eb9a18e91e6f1ac3d492bb68a))
* add gds-logo-grid and gds-logo-grid-item components ([4748c2b](https://github.com/generoi/genero-design-system/commit/4748c2b37cc905a15308e046653b5a471183f018))
* add gds-tag component ([a105624](https://github.com/generoi/genero-design-system/commit/a1056246b55cb58dddb39065eeb17549b21829e1))
* add general use gds-card container ([e36752c](https://github.com/generoi/genero-design-system/commit/e36752c1be8284ea2c6e50b4c1a64e313df5a0d0))
* add standard-version tool ([c14976e](https://github.com/generoi/genero-design-system/commit/c14976ed5cae60cbf8af1dd0f7f0d8e3f13e457e))
* add support for commitizen ([8831ee6](https://github.com/generoi/genero-design-system/commit/8831ee6ff08ebcc8256dd356dbba2ea096e99e65))
* automate changelog ([23fe752](https://github.com/generoi/genero-design-system/commit/23fe7521eeeeb23697c5f4947cc6cf4de541d0d6))
* basic version of gds-media-card ([fe8f9c9](https://github.com/generoi/genero-design-system/commit/fe8f9c9604e649cf15550fa2373acacc109af72d))
* rename gds-body to gds-paragraph ([f275bc3](https://github.com/generoi/genero-design-system/commit/f275bc3089f545a974020c1261110bd8c6f58c25))
* storybook to github pages ([84840a5](https://github.com/generoi/genero-design-system/commit/84840a50cecf71900ca86ec712b4179bb2052b4c))
* use css custom variables and gilroy fonts in stories ([c25a718](https://github.com/generoi/genero-design-system/commit/c25a71848eb070c08a582f69465e2edb9b74ff97))


### Bug Fixes

* commit problems ([931f103](https://github.com/generoi/genero-design-system/commit/931f10394a687a11c18b1a73d589a9a9768797f0))
* include global index.css ([c9c4786](https://github.com/generoi/genero-design-system/commit/c9c47863b3baa93a83747bc23cf85eea712a9f8e))
* minor issues from pull requests ([5aaf738](https://github.com/generoi/genero-design-system/commit/5aaf7388f700749db75d29e3814661fdae7342b7))

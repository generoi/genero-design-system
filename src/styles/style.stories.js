import { html } from 'lit-html'

export default {
  title: 'Atomic Elements',
  component: 'gds-paragraph',
}

const style = `
  padding: 20px;
  width: 40px;
  margin: 20px;
  color: white;
`

// prettier-ignore
export const Colors = () => html`
         <gds-paragraph>
           <gds-card style="background-color: var(--color-primary); ${style}">
             Primary
           </gds-card>
           <gds-card style="background-color: var(--color-secondary); ${style}">
             Secondary
           </gds-card>
           <gds-card style="background-color: var(--body-background-color); ${style} color: black;">
             Body
           </gds-card>
         </gds-paragraph>
       `

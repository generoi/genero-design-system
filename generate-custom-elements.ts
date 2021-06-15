import  fs from 'fs';
class Component {
    "name": string
    "path": string
    "description": string
    "properties": ComponentPart[]
    "attributes": ComponentPart[]
    "events": ComponentPart[]
    "methods": ComponentPart[]
    "slots": ComponentPart[]
    "cssProperties": ComponentPart[]
    "cssParts": ComponentPart[]
}
class ComponentPart {
    "name": string
    "description": string
    "type"?:string
    "default"?: string
    "attribute"?: string
}

export  function generateCustomElements(docs) {
    const CEObject = {
        version: "experimental",
        tags: [],
    };
    docs.components.forEach(component => {
        let c = new Component()
        c.name = component.tag
        c.path = component.filePath
        c.description = component.docs
        c.properties = []
        c.attributes = []
        c.events = []
        c.methods = []
        c.slots = []
        c.cssProperties = []
        c.cssParts = []

        component.props.forEach(prop => {
            let p = new ComponentPart()
            let a = new ComponentPart()
            a.name = p.name = prop.name
            a.description = p.description = prop.docs
            a.type = p.type = prop.type
            a.default = p.default = prop.default
            p.attribute = prop.attr
            c.properties.push(p)
            c.attributes.push(a)
        })

        component.events.forEach(event => {
            let e = new ComponentPart()
            e.name = event.event
            e.description = event.docs
            c.events.push(e)
        })

        component.methods.forEach(method => {
            let m = new ComponentPart()
            m.name = method.name
            m.description = method.docs
            c.methods.push(m)
        })
        component.slots.forEach(slot => {
            let s = new ComponentPart()
            s.name = slot.name
            s.description = slot.docs
            c.slots.push(s)
        })
        component.styles.forEach(style => {
            let s = new ComponentPart()
            s.name = style.name
            s.description = style.docs
            c.cssProperties.push(s)
        })
        component.parts.forEach(part => {
            let p = new ComponentPart()
            p.name = part.name
            p.description = part.docs
            c.cssParts.push(p)
        })
        CEObject.tags.push(c)
    })
    const docstring = JSON.stringify(CEObject, null, 4)
    fs.writeFileSync('.storybook/custom-elements.json', docstring)
}

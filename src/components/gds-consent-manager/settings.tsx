export interface CookieNoticeSetting {
    // version: string
    language: string
    heading: string
    buttonEdit: string
    buttonAcceptSelected: string
    buttonAcceptAll: string
    consents: Array<Consent>
}

interface Consent {
    id: string
    label: string
    description: string
    necessary: boolean
    consent?: boolean
}

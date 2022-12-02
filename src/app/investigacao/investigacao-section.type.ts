export type InvestigacaoSection = {
    title: string,
    content: {
        text: string,
        link?: {
            name: string,
            url: string
        }
    }[]
}
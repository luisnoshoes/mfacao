export interface ResearchSection {
    title:   string;
    content: Content[];
}

export interface Content {
    text:  string;
    link?: Link;
}

export interface Link {
    name: string;
    url:  string;
}

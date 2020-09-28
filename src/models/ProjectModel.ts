export default class ProjectModel {
    name: string;
    shortDescription: string;
    description: string;
    link = '/';
    linkValue: string;

    constructor(name: string, shortDescription: string, description: string = '') {
        this.name = name;
        this.shortDescription = shortDescription;
        this.description = description;
        this.link = `/projects/${name}`;
        this.linkValue = 'APRI';
    }
}

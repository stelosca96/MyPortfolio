export default class ProjectModel {
    name: string;
    shortDescription: string;
    description: string;
    link = '/';
    linkValue: string;

    constructor(name: string, shortDescription: string, link: string, linkValue: string, description: string = '') {
        this.name = name;
        this.shortDescription = shortDescription;
        this.description = description;
        this.link = link;
        this.linkValue = linkValue;
    }
}

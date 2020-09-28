export default class ProjectModel {
    name;
    description;
    link = '/';
    linkValue;

    constructor(name, description, link: string, linkValue) {
        this.name = name;
        this.description = description;
        this.link = link;
        this.linkValue = linkValue;
    }
}

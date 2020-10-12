export default class ProjectModel {
    name: string;
    shortDescription: string;
    code: string;
    link = '/';
    github = '';
    demo = '';
    language: string;
    linkValue: string;
    backgroundImg: string;

    constructor(name: string, shortDescription: string, description: string = '', language: string = '', backgroundImg = 'terminal.jpg', demo = '', github = '') {
        this.name = name;
        this.shortDescription = shortDescription;
        this.code = description;
        this.link = `/projects/${name}`;
        this.linkValue = 'APRI';
        this.backgroundImg = `img/projects/${backgroundImg}`;
        this.demo = demo;
        this.github = github;
        this.language = language;
    }
}

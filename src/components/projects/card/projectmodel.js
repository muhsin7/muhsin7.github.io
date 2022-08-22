class ProjectModel {
    Project(data) {
        this.name = data["name"];
        this.tags = data["tags"];
        this.desc = data["desc"];
    }
}

export default ProjectModel;
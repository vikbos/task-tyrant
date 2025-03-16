export interface Project {
    id: string;
    name: string;
    description: string;
    ownerId: string;
    collaborators: string[];
    createdAt: Date;
}